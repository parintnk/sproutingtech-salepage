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

    if (!formData.full_name.trim()) {
      newErrors.full_name = 'กรุณากรอกชื่อ-นามสกุล';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'กรุณากรอกเบอร์โทรศัพท์';
    } else if (!/^[0-9]{9,10}$/.test(formData.phone.replace(/[^0-9]/g, ''))) {
      newErrors.phone = 'กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'กรุณากรอกอีเมล';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'กรุณากรอกอีเมลให้ถูกต้อง';
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
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300"
          >
            กลับไปหน้าหลัก
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <FaRobot className="w-8 h-8 text-teal-400" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">สมัครเรียน AI Automation</h1>
          </div>
          <p className="text-xl text-slate-300">กรอกข้อมูลและชำระเงินเพื่อเริ่มต้นการเรียนรู้</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
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
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
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
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
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
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
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
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
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
                className="w-full bg-teal-600 hover:bg-teal-700 disabled:bg-slate-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'กำลังส่งข้อมูล...' : 'สมัครเรียน'}
              </button>
            </form>
          </div>

          {/* Payment Info Section */}
          <div className="space-y-6">
            {/* Course Summary */}
            {selectedCourse && (
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
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
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
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
  );
};

export default PurchasePage;
