"use client";
import React, { useState } from 'react';
import { FaRobot, FaUser, FaPhone, FaEnvelope, FaGraduationCap, FaFileUpload, FaCreditCard, FaQrcode, FaCheckCircle } from 'react-icons/fa';
import { supabase, type Enrollment } from '@/lib/supabase';
import { COURSES } from '@/constants/data';

interface FormData {
  full_name: string;
  phone: string;
  email: string;
  course_id: string;
}

const PurchasePage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    full_name: '',
    phone: '',
    email: '',
    course_id: ''
  });
  const [paymentSlip, setPaymentSlip] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const selectedCourse = COURSES.find(course => course.id.toString() === formData.course_id);

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    // Enhanced name validation
    if (!formData.full_name.trim()) {
      newErrors.full_name = 'กรุณากรอกชื่อ-นามสกุล';
    } else if (formData.full_name.trim().length < 2) {
      newErrors.full_name = 'ชื่อต้องมีอย่างน้อย 2 ตัวอักษร';
    } else if (!/^[ก-๏\s\w]+$/.test(formData.full_name.trim())) {
      newErrors.full_name = 'ชื่อประกอบด้วยตัวอักษรเท่านั้น';
    }

    // Enhanced phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'กรุณากรอกเบอร์โทรศัพท์';
    } else {
      const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
      if (cleanPhone.length < 9 || cleanPhone.length > 10) {
        newErrors.phone = 'เบอร์โทรศัพท์ต้องมี 9-10 หลัก';
      } else if (!/^[0][1-9]/.test(cleanPhone)) {
        newErrors.phone = 'เบอร์โทรศัพท์ต้องขึ้นต้นด้วย 0';
      }
    }

    // Enhanced email validation
    if (!formData.email.trim()) {
      newErrors.email = 'กรุณากรอกอีเมล';
    } else {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'รูปแบบอีเมลไม่ถูกต้อง';
      }
    }

    if (!formData.course_id) {
      newErrors.course_id = 'กรุณาเลือกคอร์สที่สนใจ';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const validTypes = ['image/jpeg', 'image/png', 'image/jpg'];
      const maxSize = 5 * 1024 * 1024; // 5MB

      if (!validTypes.includes(file.type)) {
        alert('กรุณาอัพโลดไฟล์รูปภาพเท่านั้น (JPG, PNG)');
        return;
      }

      if (file.size > maxSize) {
        alert('ขนาดไฟล์ต้องไม่เกิน 5MB');
        return;
      }

      setPaymentSlip(file);
    }
  };

  const uploadPaymentSlip = async (file: File): Promise<string | null> => {
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
      const filePath = `payment-slips/${fileName}`;

      const { data, error } = await supabase.storage
        .from('receipt')
        .upload(filePath, file);

      if (error) {
        console.error('Upload error:', error);
        return null;
      }

      const { data: { publicUrl } } = supabase.storage
        .from('receipt')
        .getPublicUrl(filePath);

      return publicUrl;
    } catch (error) {
      console.error('Upload error:', error);
      return null;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    if (!paymentSlip) {
      alert('กรุณาแนบสลิปการโอนเงิน');
      return;
    }

    setIsSubmitting(true);

    try {
      // Upload payment slip
      const paymentSlipUrl = await uploadPaymentSlip(paymentSlip);

      if (!paymentSlipUrl) {
        alert('เกิดข้อผิดพลาดในการอัพโลดสลิป กรุณาลองใหม่');
        setIsSubmitting(false);
        return;
      }

      // Create enrollment record
      const enrollmentData: Enrollment = {
        full_name: formData.full_name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim().toLowerCase(),
        course_id: parseInt(formData.course_id),
        course_title: selectedCourse?.title || '',
        payment_slip_url: paymentSlipUrl,
        status: 'pending'
      };

      const { error } = await supabase
        .from('enrollments')
        .insert([enrollmentData]);

      if (error) {
        console.error('Database error:', error);
        alert('เกิดข้อผิดพลาดในการบันทึกข้อมูล กรุณาลองใหม่');
        setIsSubmitting(false);
        return;
      }

      setSubmitted(true);
    } catch (error) {
      console.error('Submission error:', error);
      alert('เกิดข้อผิดพลาดในการส่งข้อมูล กรุณาลองใหม่');
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-slate-800 rounded-xl p-8 text-center border border-teal-500">
          <FaCheckCircle className="w-16 h-16 text-teal-400 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-white mb-4">สมัครเรียนสำเร็จ!</h2>
          <p className="text-slate-300 mb-6">
            เราได้รับข้อมูลการสมัครเรียนของคุณแล้ว<br />
            ทีมงานจะตรวจสอบการชำระเงินและติดต่อกลับภายใน 24 ชั่วโมง
          </p>
          <p className="text-sm text-slate-400 mb-6">
            หากมีข้อสงสัยสามารถติดต่อเราได้ที่ <br />
            <span className="text-teal-400">support@aiautomation.com</span>
          </p>
          <button
            onClick={() => window.location.href = '/'}
            className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            กลับไปหน้าหลัก
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden py-12 px-4">
      {/* Epic Animated Background */}
      <div className="absolute inset-0 bg-black"></div>

      {/* Multi-layer Gradient Foundation */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-teal-900 opacity-70"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-pink-900/60 via-transparent to-cyan-900/60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/40 via-purple-800/30 to-emerald-900/40"></div>
      </div>

      {/* Massive Glowing Orbs */}
      <div className="absolute inset-0">
        <div className="absolute -top-96 -left-96 w-192 h-192 bg-gradient-radial from-blue-500/30 via-purple-500/15 to-transparent rounded-full blur-3xl animate-pulse" style={{width: '48rem', height: '48rem', animationDuration: '4s'}}></div>
        <div className="absolute -bottom-96 -right-96 w-192 h-192 bg-gradient-radial from-teal-500/30 via-cyan-500/15 to-transparent rounded-full blur-3xl animate-bounce" style={{width: '48rem', height: '48rem', animationDuration: '6s'}}></div>
        <div className="absolute top-1/4 left-1/4 w-128 h-128 bg-gradient-radial from-pink-500/20 via-purple-500/10 to-transparent rounded-full blur-3xl animate-ping" style={{width: '32rem', height: '32rem', animationDuration: '8s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-128 h-128 bg-gradient-radial from-emerald-500/20 via-teal-500/10 to-transparent rounded-full blur-3xl animate-pulse" style={{width: '32rem', height: '32rem', animationDuration: '5s'}}></div>
      </div>

      {/* Dynamic Particle Field */}
      <div className="absolute inset-0">
        {/* Large Particles */}
        <div className="absolute top-1/6 left-1/6 w-4 h-4 bg-cyan-400/60 rounded-full animate-ping" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
        <div className="absolute top-1/4 right-1/5 w-3 h-3 bg-purple-400/60 rounded-full animate-pulse" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
        <div className="absolute bottom-1/3 left-1/5 w-5 h-5 bg-pink-400/50 rounded-full animate-bounce" style={{animationDelay: '2s', animationDuration: '5s'}}></div>
        <div className="absolute bottom-1/5 right-1/6 w-2 h-2 bg-teal-400/60 rounded-full animate-ping" style={{animationDelay: '3s', animationDuration: '3.5s'}}></div>
        <div className="absolute top-1/2 left-1/8 w-3 h-3 bg-blue-400/50 rounded-full animate-pulse" style={{animationDelay: '4s', animationDuration: '4.5s'}}></div>
        <div className="absolute top-1/3 right-1/8 w-2 h-2 bg-emerald-400/60 rounded-full animate-bounce" style={{animationDelay: '5s', animationDuration: '6s'}}></div>

        {/* Medium Particles */}
        <div className="absolute top-2/5 left-1/3 w-1 h-1 bg-cyan-300/70 rounded-full animate-ping" style={{animationDelay: '1.5s', animationDuration: '2s'}}></div>
        <div className="absolute bottom-2/5 right-1/3 w-1 h-1 bg-purple-300/70 rounded-full animate-pulse" style={{animationDelay: '2.5s', animationDuration: '3s'}}></div>
        <div className="absolute top-3/5 left-2/5 w-1 h-1 bg-pink-300/70 rounded-full animate-bounce" style={{animationDelay: '3.5s', animationDuration: '4s'}}></div>
      </div>

      {/* Neural Network Animation */}
      <div className="absolute inset-0 opacity-40">
        <svg className="w-full h-full" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.6"/>
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.4"/>
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6"/>
            </linearGradient>
          </defs>

          {/* Animated Network Nodes */}
          <circle cx="150" cy="120" r="4" fill="#14b8a6" className="animate-pulse" filter="url(#glow)" style={{animationDelay: '0s'}}>
            <animate attributeName="r" values="3;6;3" dur="4s" repeatCount="indefinite"/>
          </circle>
          <circle cx="350" cy="180" r="4" fill="#8b5cf6" className="animate-pulse" filter="url(#glow)" style={{animationDelay: '1s'}}>
            <animate attributeName="r" values="3;6;3" dur="5s" repeatCount="indefinite"/>
          </circle>
          <circle cx="550" cy="140" r="4" fill="#06b6d4" className="animate-pulse" filter="url(#glow)" style={{animationDelay: '2s'}}>
            <animate attributeName="r" values="3;6;3" dur="3s" repeatCount="indefinite"/>
          </circle>
          <circle cx="750" cy="200" r="4" fill="#f472b6" className="animate-pulse" filter="url(#glow)" style={{animationDelay: '3s'}}>
            <animate attributeName="r" values="3;6;3" dur="4.5s" repeatCount="indefinite"/>
          </circle>
          <circle cx="950" cy="160" r="4" fill="#10b981" className="animate-pulse" filter="url(#glow)" style={{animationDelay: '4s'}}>
            <animate attributeName="r" values="3;6;3" dur="3.5s" repeatCount="indefinite"/>
          </circle>

          <circle cx="200" cy="350" r="4" fill="#14b8a6" className="animate-pulse" filter="url(#glow)" style={{animationDelay: '1.5s'}}>
            <animate attributeName="r" values="3;6;3" dur="4s" repeatCount="indefinite"/>
          </circle>
          <circle cx="450" cy="400" r="4" fill="#8b5cf6" className="animate-pulse" filter="url(#glow)" style={{animationDelay: '2.5s'}}>
            <animate attributeName="r" values="3;6;3" dur="5s" repeatCount="indefinite"/>
          </circle>
          <circle cx="700" cy="370" r="4" fill="#06b6d4" className="animate-pulse" filter="url(#glow)" style={{animationDelay: '3.5s'}}>
            <animate attributeName="r" values="3;6;3" dur="3s" repeatCount="indefinite"/>
          </circle>
          <circle cx="900" cy="420" r="4" fill="#f472b6" className="animate-pulse" filter="url(#glow)" style={{animationDelay: '4.5s'}}>
            <animate attributeName="r" values="3;6;3" dur="4.5s" repeatCount="indefinite"/>
          </circle>

          <circle cx="300" cy="580" r="4" fill="#10b981" className="animate-pulse" filter="url(#glow)" style={{animationDelay: '5s'}}>
            <animate attributeName="r" values="3;6;3" dur="3.5s" repeatCount="indefinite"/>
          </circle>
          <circle cx="500" cy="620" r="4" fill="#14b8a6" className="animate-pulse" filter="url(#glow)" style={{animationDelay: '0.5s'}}>
            <animate attributeName="r" values="3;6;3" dur="4s" repeatCount="indefinite"/>
          </circle>
          <circle cx="750" cy="590" r="4" fill="#8b5cf6" className="animate-pulse" filter="url(#glow)" style={{animationDelay: '1.5s'}}>
            <animate attributeName="r" values="3;6;3" dur="5s" repeatCount="indefinite"/>
          </circle>

          {/* Animated Connection Lines */}
          <line x1="150" y1="120" x2="350" y2="180" stroke="url(#lineGradient1)" strokeWidth="1" opacity="0.4">
            <animate attributeName="opacity" values="0.2;0.8;0.2" dur="4s" repeatCount="indefinite"/>
          </line>
          <line x1="350" y1="180" x2="550" y2="140" stroke="url(#lineGradient1)" strokeWidth="1" opacity="0.4">
            <animate attributeName="opacity" values="0.2;0.8;0.2" dur="5s" repeatCount="indefinite"/>
          </line>
          <line x1="550" y1="140" x2="750" y2="200" stroke="url(#lineGradient1)" strokeWidth="1" opacity="0.4">
            <animate attributeName="opacity" values="0.2;0.8;0.2" dur="3s" repeatCount="indefinite"/>
          </line>
          <line x1="750" y1="200" x2="950" y2="160" stroke="url(#lineGradient1)" strokeWidth="1" opacity="0.4">
            <animate attributeName="opacity" values="0.2;0.8;0.2" dur="4.5s" repeatCount="indefinite"/>
          </line>

          <line x1="200" y1="350" x2="450" y2="400" stroke="url(#lineGradient1)" strokeWidth="1" opacity="0.4">
            <animate attributeName="opacity" values="0.2;0.8;0.2" dur="4s" repeatCount="indefinite"/>
          </line>
          <line x1="450" y1="400" x2="700" y2="370" stroke="url(#lineGradient1)" strokeWidth="1" opacity="0.4">
            <animate attributeName="opacity" values="0.2;0.8;0.2" dur="5s" repeatCount="indefinite"/>
          </line>
          <line x1="700" y1="370" x2="900" y2="420" stroke="url(#lineGradient1)" strokeWidth="1" opacity="0.4">
            <animate attributeName="opacity" values="0.2;0.8;0.2" dur="3s" repeatCount="indefinite"/>
          </line>

          <line x1="300" y1="580" x2="500" y2="620" stroke="url(#lineGradient1)" strokeWidth="1" opacity="0.4">
            <animate attributeName="opacity" values="0.2;0.8;0.2" dur="4s" repeatCount="indefinite"/>
          </line>
          <line x1="500" y1="620" x2="750" y2="590" stroke="url(#lineGradient1)" strokeWidth="1" opacity="0.4">
            <animate attributeName="opacity" values="0.2;0.8;0.2" dur="5s" repeatCount="indefinite"/>
          </line>

          {/* Vertical Connections */}
          <line x1="350" y1="180" x2="200" y2="350" stroke="url(#lineGradient1)" strokeWidth="1" opacity="0.3">
            <animate attributeName="opacity" values="0.1;0.6;0.1" dur="6s" repeatCount="indefinite"/>
          </line>
          <line x1="550" y1="140" x2="450" y2="400" stroke="url(#lineGradient1)" strokeWidth="1" opacity="0.3">
            <animate attributeName="opacity" values="0.1;0.6;0.1" dur="7s" repeatCount="indefinite"/>
          </line>
          <line x1="750" y1="200" x2="700" y2="370" stroke="url(#lineGradient1)" strokeWidth="1" opacity="0.3">
            <animate attributeName="opacity" values="0.1;0.6;0.1" dur="5s" repeatCount="indefinite"/>
          </line>
          <line x1="450" y1="400" x2="500" y2="620" stroke="url(#lineGradient1)" strokeWidth="1" opacity="0.3">
            <animate attributeName="opacity" values="0.1;0.6;0.1" dur="8s" repeatCount="indefinite"/>
          </line>
        </svg>
      </div>

      {/* Energy Waves */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent animate-pulse" style={{animationDuration: '3s'}}></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400/60 to-transparent animate-pulse" style={{animationDelay: '1.5s', animationDuration: '4s'}}></div>
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-teal-400/40 to-transparent animate-pulse" style={{animationDelay: '2s', animationDuration: '5s'}}></div>
        <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-pink-400/40 to-transparent animate-pulse" style={{animationDelay: '3s', animationDuration: '3.5s'}}></div>
      </div>

      <div className="relative z-10">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="relative">
              <FaRobot className="w-12 h-12 text-teal-400 animate-pulse" />
              <div className="absolute inset-0 w-12 h-12 bg-teal-400/20 rounded-full blur-xl animate-ping"></div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white bg-gradient-to-r from-white via-teal-200 to-cyan-200 bg-clip-text text-transparent">
              สมัครเรียน AI Automation
            </h1>
          </div>
          <p className="text-xl text-slate-300 mb-4">กรอกข้อมูลและชำระเงินเพื่อเริ่มต้นการเรียนรู้</p>
          <div className="inline-flex items-center gap-2 bg-teal-600/20 border border-teal-500/30 rounded-full px-4 py-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-teal-300">ปลอดภัย 100% | การันตีความเป็นส่วนตัว</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-8 border border-slate-700 shadow-2xl hover:border-teal-500/50 transition-all duration-300">
            <h2 className="text-2xl font-bold text-white mb-6">ข้อมูลผู้สมัคร</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  <FaUser className="inline w-4 h-4 mr-2" />
                  ชื่อ-นามสกุล *
                </label>
                <input
                  type="text"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700/80 backdrop-blur-sm border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-300 hover:border-slate-500"
                  placeholder="กรุณากรอกชื่อ-นามสกุล"
                />
                {errors.full_name && <p className="text-red-400 text-sm mt-1">{errors.full_name}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  <FaPhone className="inline w-4 h-4 mr-2" />
                  เบอร์โทรศัพท์ *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700/80 backdrop-blur-sm border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-300 hover:border-slate-500"
                  placeholder="08X-XXX-XXXX"
                />
                {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  <FaEnvelope className="inline w-4 h-4 mr-2" />
                  อีเมล *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700/80 backdrop-blur-sm border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-300 hover:border-slate-500"
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Course Selection */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  <FaGraduationCap className="inline w-4 h-4 mr-2" />
                  เลือกคอร์สที่สนใจ *
                </label>
                <select
                  name="course_id"
                  value={formData.course_id}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700/80 backdrop-blur-sm border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-300 hover:border-slate-500"
                >
                  <option value="">-- เลือกคอร์ส --</option>
                  {COURSES.map((course) => (
                    <option key={course.id} value={course.id}>
                      {course.title} - ฿{course.price.toLocaleString()} ({course.startDate})
                    </option>
                  ))}
                </select>
                {errors.course_id && <p className="text-red-400 text-sm mt-1">{errors.course_id}</p>}
              </div>

              {/* Payment Slip Upload */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  <FaFileUpload className="inline w-4 h-4 mr-2" />
                  แนบสลิปการโอนเงิน *
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-teal-600 file:text-white hover:file:bg-teal-700"
                />
                {paymentSlip && (
                  <p className="text-teal-400 text-sm mt-1">✓ ไฟล์: {paymentSlip.name}</p>
                )}
                <p className="text-slate-400 text-xs mt-1">รองรับไฟล์: JPG, PNG (ขนาดไม่เกิน 5MB)</p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 disabled:from-slate-600 disabled:to-slate-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                {isSubmitting ? 'กำลังส่งข้อมูล...' : 'สมัครเรียน'}
              </button>
            </form>
          </div>

          {/* Payment Info Section */}
          <div className="space-y-6">
            {/* Course Summary */}
            {selectedCourse && (
              <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-teal-500/30 shadow-xl">
                <h3 className="text-xl font-bold text-white mb-4">สรุปคอร์สที่เลือก</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-300">คอร์ส:</span>
                    <span className="text-white font-semibold">{selectedCourse.title}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">วันเริ่มเรียน:</span>
                    <span className="text-white">{selectedCourse.startDate}</span>
                  </div>
                  <div className="border-t border-slate-700 pt-3">
                    <div className="flex justify-between text-lg">
                      <span className="text-slate-300">ราคา:</span>
                      <span className="text-teal-400 font-bold">฿{selectedCourse.price.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Payment Instructions */}
            <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-4">วิธีการชำระเงิน</h3>

              {/* Bank Transfer */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <FaCreditCard className="w-5 h-5 text-teal-400" />
                  <h4 className="font-semibold text-white">โอนเงินผ่านธนาคาร</h4>
                </div>
                <div className="bg-slate-700 rounded-lg p-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-300">ธนาคาร:</span>
                    <span className="text-white">กสิกรไทย</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">เลขบัญชี:</span>
                    <span className="text-white font-mono">123-4-56789-0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">ชื่อบัญชี:</span>
                    <span className="text-white">AI Automation Academy</span>
                  </div>
                </div>
              </div>

              {/* PromptPay */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <FaQrcode className="w-5 h-5 text-teal-400" />
                  <h4 className="font-semibold text-white">PromptPay</h4>
                </div>
                <div className="bg-slate-700 rounded-lg p-4">
                  <div className="flex justify-between">
                    <span className="text-slate-300">เลขพร้อมเพย์:</span>
                    <span className="text-white font-mono">0812345678</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">ชื่อบัญชี:</span>
                    <span className="text-white">AI Automation Academy</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-4 bg-teal-600/20 rounded-lg border border-teal-500">
                <p className="text-teal-300 text-sm">
                  <strong>หมายเหตุ:</strong> หลังจากโอนเงินแล้ว กรุณาแนบสลิปการโอนและกรอกข้อมูลให้ครบถ้วน
                  ทีมงานจะตรวจสอบและติดต่อกลับภายใน 24 ชั่วโมง
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default PurchasePage;
