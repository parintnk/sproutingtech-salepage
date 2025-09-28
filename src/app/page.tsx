"use client";
import { FaPlay, FaCheck, FaRobot, FaLightbulb, FaChartBar, FaClock, FaStar, FaUser, FaFire, FaShieldAlt, FaGift, FaTrophy, FaCertificate, FaLock, FaMobile, FaHeadset, FaExclamationTriangle, FaArrowRight } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { BsLightning } from "react-icons/bs";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const features = [
    {
      icon: <FaRobot className="w-6 h-6" />,
      title: "Make.com Automation Mastery",
      description: "เรียนรู้การใช้ Make.com เครื่องมือระดับโลกในการทำ AI Automation"
    },
    {
      icon: <FaLightbulb className="w-6 h-6" />,
      title: "กระบวนการคิดแบบ Pro",
      description: "สอนให้คิดเป็น ไม่ใช่แค่ทำตาม เพื่อใช้งานได้ตลอดชีวิต"
    },
    {
      icon: <FaChartBar className="w-6 h-6" />,
      title: "ตั้งแต่เซียนจนถึงใช้งานจริง",
      description: "เริ่มจากไม่รู้อะไรเลย จนสามารถใช้งานได้ในชีวิตจริง"
    },
    {
      icon: <FaClock className="w-6 h-6" />,
      title: "Live Stream สดทุกสัปดาห์",
      description: "เรียนแบบ Interactive ถาม-ตอบได้ทันที ไม่ใช่วิดีโอบันทึก"
    }
  ];

  const benefits = [
    "สอนสดผ่าน Live Stream ทุกสัปดาห์ - ถาม-ตอบได้ทันที",
    "เรียนรู้ Make.com เครื่องมือระดับโลกที่ใช้งานจริง",
    "สอนกระบวนการคิด ไม่ใช่แค่วิธีการ - ใช้ได้ตลอดชีวิต",
    "ตั้งแต่ไม่มีประสบการณ์จนใช้งานจริงได้",
    "โปรเจ็คจริงจากธุรกิจจริง ไม่ใช่ตัวอย่างปลอม",
    "รับประกันผลลัพธ์ใน 30 วัน คืนเงิน 100%"
  ];

  const testimonials = [
    {
      name: "สมชาย วงศ์ใหญ่",
      role: "Digital Marketing Manager",
      rating: 5,
      comment: "คอร์สนี้เปลี่ยนชีวิตผมเลย! ตอนนี้ประหยัดเวลาได้วันละ 3-4 ชั่วโมง ด้วย AI Automation ที่เรียนจากคอร์สนี้",
      avatar: "👨‍💼",
      result: "ประหยัดเวลา 3-4 ชม./วัน"
    },
    {
      name: "นันทิดา ศรีสุข",
      role: "E-commerce Owner",
      rating: 5,
      comment: "ใช้เทคนิคจากคอร์สนี้ทำให้ยอดขายเพิ่มขึ้น 150% ใน 2 เดือน! คุ้มค่าเกินราคาที่จ่ายไป",
      avatar: "👩‍💻",
      result: "ยอดขาย +150%"
    },
    {
      name: "วิทยา เทคโนโลยี",
      role: "Freelancer",
      rating: 5,
      comment: "จากที่เคยทำงานด้วยตัวเองทุกอย่าง ตอนนี้มี AI ช่วยได้เกือบทุกงาน เพิ่มรายได้ได้ 200%",
      avatar: "🧑‍💼",
      result: "รายได้ +200%"
    }
  ];

  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 34
  });

  const [studentsCount, setStudentsCount] = useState(1247);
  const [isVideoInView, setIsVideoInView] = useState(false);
  const videoSectionRef = useRef(null);

  const courses = [
    {
      id: 1,
      title: "AI for Sale",
      startDate: "3 November 2568",
      price: 6900,
      students: 15,
      description: "เรียนรู้การใช้ AI ในการขายและเพิ่มยอดขาย",
      features: ["AI Sales Scripts", "Customer Analytics", "Automated Follow-up", "Conversion Optimization"],
      banner: "/api/placeholder/400/200"
    },
    {
      id: 2,
      title: "AI for Marketing",
      startDate: "4 November 2568",
      price: 6900,
      students: 15,
      description: "เรียนรู้การทำ Marketing ด้วย AI อย่างมืออาชีพ",
      features: ["Content Generation", "Social Media Automation", "Campaign Optimization", "Audience Targeting"],
      banner: "/api/placeholder/400/200"
    },
    {
      id: 3,
      title: "AI for HR",
      startDate: "5 November 2568",
      price: 6900,
      students: 15,
      description: "ใช้ AI ในการจัดการทรัพยากรบุคคลอย่างมีประสิทธิภาพ",
      features: ["Resume Screening", "Employee Analytics", "Performance Tracking", "Recruitment Automation"],
      banner: "/api/placeholder/400/200"
    }
  ];

  useEffect(() => {
    // Load saved time from localStorage on component mount
    const savedTime = localStorage.getItem('countdownTime');
    if (savedTime) {
      const parsedTime = JSON.parse(savedTime);
      setTimeLeft(parsedTime);
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let newTime;
        if (prev.seconds > 0) {
          newTime = { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          newTime = { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          newTime = { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          newTime = prev;
        }

        // Save to localStorage whenever time changes
        localStorage.setItem('countdownTime', JSON.stringify(newTime));
        return newTime;
      });
    }, 1000);

    // Simulate students joining
    const studentTimer = setInterval(() => {
      setStudentsCount(prev => prev + Math.floor(Math.random() * 3));
    }, 8000);

    return () => {
      clearInterval(timer);
      clearInterval(studentTimer);
    };
  }, []);

  // Video Intersection Observer
  useEffect(() => {
    const videoSection = videoSectionRef.current;

    if (!videoSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVideoInView(entry.isIntersecting);
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
        rootMargin: '-10% 0px -10% 0px' // Add some margin for better UX
      }
    );

    observer.observe(videoSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  const CTAButton = ({ className = "", children, size = "normal" }: any) => {
    const baseClasses = "bg-green-700 hover:bg-green-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105 rounded-full flex items-center gap-2 justify-center";
    const sizeClasses = size === "large" ? "px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-lg sm:text-xl" : "px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-base sm:text-lg";
    return (
      <button className={`${baseClasses} ${sizeClasses} ${className}`}>
        {children}
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Premium Sales Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 shadow-xl">
        <div className="bg-slate-800 border-b border-slate-700 text-white py-3 sm:py-4 px-4 sm:px-6 relative overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 opacity-50"></div>

          <div className="relative max-w-6xl mx-auto">
            {/* Mobile Layout */}
            <div className="block lg:hidden">
              {/* Top Row: Sale Info */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                    <FaRobot className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-white">{"Professional AI Training"}</div>
                    <div className="text-xs text-slate-300">{"Limited Time Offer"}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-300">{"จาก"} <span className="line-through">{"฿25,900"}</span></div>
                  <div className="text-lg font-bold text-teal-300">{"฿6,900"}</div>
                </div>
              </div>

              {/* Bottom Row: Timer & CTA */}
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1 bg-slate-700 border border-slate-600 rounded-lg px-3 py-1.5">
                  <FaClock className="w-4 h-4 text-teal-300" />
                  <div className="flex items-center gap-1">
                    <div className="bg-teal-600 text-white font-bold px-2 py-1 rounded text-sm font-mono min-w-[28px] text-center">
                      {String(timeLeft.hours).padStart(2, '0')}
                    </div>
                    <span className="text-slate-300 text-sm">:</span>
                    <div className="bg-teal-600 text-white font-bold px-2 py-1 rounded text-sm font-mono min-w-[28px] text-center">
                      {String(timeLeft.minutes).padStart(2, '0')}
                    </div>
                    <span className="text-slate-300 text-sm">:</span>
                    <div className="bg-teal-600 text-white font-bold px-2 py-1 rounded text-sm font-mono min-w-[28px] text-center">
                      {String(timeLeft.seconds).padStart(2, '0')}
                    </div>
                  </div>
                </div>

                <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-xs flex items-center gap-1 border border-teal-500">
                  <span>{"Enroll Now"}</span>
                  <FaArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:flex items-center justify-between gap-6">
              {/* Left: Sale Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center">
                  <FaRobot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-xl text-white">
                    {"Professional AI Automation Training"}
                  </div>
                  <div className="text-sm text-slate-300">
                    {"Limited Time Enrollment - Industry Professional Level"}
                  </div>
                </div>
              </div>

              {/* Center: Countdown Timer */}
              <div className="flex items-center gap-2 bg-slate-700 border border-slate-600 rounded-xl px-4 py-2">
                <FaClock className="w-4 h-4 text-teal-300" />
                <span className="text-sm font-medium text-slate-300 mr-2">{"Enrollment Ends:"}</span>
                <div className="flex items-center gap-1">
                  <div className="bg-teal-600 text-white font-bold px-2 py-1 rounded text-base font-mono min-w-[32px] text-center">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </div>
                  <span className="text-slate-300 text-sm">:</span>
                  <div className="bg-teal-600 text-white font-bold px-2 py-1 rounded text-base font-mono min-w-[32px] text-center">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </div>
                  <span className="text-slate-300 text-sm">:</span>
                  <div className="bg-teal-600 text-white font-bold px-2 py-1 rounded text-base font-mono min-w-[32px] text-center">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </div>
                </div>
              </div>

              {/* Right: Price & CTA */}
              <div className="flex items-center gap-4">
                {/* Price */}
                <div className="text-center">
                  <div className="text-sm text-slate-300">{"Regular Price"} <span className="line-through">{"฿25,900"}</span></div>
                  <div className="text-2xl font-bold text-teal-300">{"฿6,900"}</div>
                </div>

                {/* CTA Button */}
                <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-base flex items-center gap-2 whitespace-nowrap border border-teal-500">
                  <span>{"Enroll Now"}</span>
                  <FaArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="bg-slate-700 border-t border-slate-600 hidden md:block text-white py-1.5 px-4">
          <div className="max-w-6xl mx-auto flex items-center justify-center gap-3 text-sm font-medium">
            <FaUser className="w-4 h-4 text-teal-300" />
            <span className="text-slate-300">{"Limited Enrollment: 15 seats remaining | 880+ professionals enrolled"}</span>
            <div className="bg-teal-600 text-white px-3 py-1 rounded-lg text-xs font-semibold border border-teal-500">
              {"EARLY BIRD"}
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-white py-20 sm:py-24 md:py-32 px-4 mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-teal-600/20 border border-teal-500/30 rounded-full px-4 py-2 mb-6">
              <FaCertificate className="w-4 h-4 text-teal-300" />
              <span className="text-sm font-medium text-teal-300">Industry Certified Training Program</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
            <span className="block text-white mb-2">{"Master"}</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-600 mb-2">{"AI Automation"}</span>
            <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-300 font-normal">{"Professional Training for Industry Leaders"}</span>
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center">
              <FaChartBar className="w-8 h-8 text-teal-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">200%</div>
              <div className="text-sm text-slate-300">Revenue Increase</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center">
              <FaClock className="w-8 h-8 text-teal-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">4 Hours</div>
              <div className="text-sm text-slate-300">Daily Time Saved</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center">
              <FaRobot className="w-8 h-8 text-teal-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">80%</div>
              <div className="text-sm text-slate-300">Process Automation</div>
            </div>
          </div>

          {/* Enrollment Timer */}
          <div className="bg-slate-800 border border-teal-600 rounded-xl p-6 mb-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <FaClock className="w-5 h-5 text-teal-400" />
              <p className="font-semibold text-lg text-white text-center">{"Early Bird Enrollment Closes In"}</p>
            </div>
            <div className="flex justify-center gap-4 mt-4">
              <div className="text-center">
                <div className="bg-teal-600 text-white text-2xl font-bold px-4 py-2 rounded-lg border border-teal-500 min-w-[60px]">
                  {String(timeLeft.hours).padStart(2, '0')}
                </div>
                <div className="text-xs text-slate-300 mt-1">Hours</div>
              </div>
              <div className="text-center">
                <div className="bg-teal-600 text-white text-2xl font-bold px-4 py-2 rounded-lg border border-teal-500 min-w-[60px]">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </div>
                <div className="text-xs text-slate-300 mt-1">Minutes</div>
              </div>
              <div className="text-center">
                <div className="bg-teal-600 text-white text-2xl font-bold px-4 py-2 rounded-lg border border-teal-500 min-w-[60px]">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </div>
                <div className="text-xs text-slate-300 mt-1">Seconds</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 border border-teal-500">
              <FaArrowRight className="w-5 h-5" />
              <span>{"Enroll Now - ฿6,900"}</span>
            </button>
            <button className="bg-transparent border-2 border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white px-8 py-4 rounded-lg text-lg font-medium transition-all flex items-center gap-3">
              <FaPlay className="w-5 h-5" />
              {"Watch Demo"}
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-slate-300 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2">
              <FaShieldAlt className="w-4 h-4 text-teal-400" />
              <span>{"30-Day Money Back Guarantee"}</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <FaCertificate className="w-4 h-4 text-teal-400" />
              <span>{"Industry Certification"}</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <FaHeadset className="w-4 h-4 text-teal-400" />
              <span>{"24/7 Professional Support"}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section ref={videoSectionRef} className="py-20 px-4 bg-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black aspect-video border border-slate-600">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/diGpkv3thvg?autoplay=1&mute=${isVideoInView ? '0' : '1'}&enablejsapi=1&loop=1&playlist=diGpkv3thvg`}
              title="AI Automation Course Preview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 border border-teal-500">
              <FaPlay className="w-5 h-5" />
              {"Ready to Start? Enroll Now - ฿6,900"}
            </button>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                {"Professional Training Programs"}
              </h2>
            </div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              {"Choose the specialization that aligns with your career goals. Live online training with maximum 15 participants per cohort."}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div
                key={course.id}
                className="bg-slate-800 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-700 hover:border-teal-500"
              >
                {/* Course Banner */}
                <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <FaRobot className="w-16 h-16 mx-auto mb-4 text-teal-400 opacity-70" />
                    <h3 className="text-2xl font-bold">{course.title}</h3>
                  </div>
                  <div className="absolute top-4 right-4 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-lg border border-teal-500">
                    {course.students + " seats left"}
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
                    <p className="text-slate-300 mb-4">{course.description}</p>

                    <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                      <div className="flex items-center gap-1">
                        <FaClock className="w-4 h-4" />
                        <span>{course.startDate}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaUser className="w-4 h-4" />
                        <span>{course.students} participants</span>
                      </div>
                    </div>

                    {/* Course Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-white mb-3">{"What You'll Learn:"}</h4>
                      <div className="space-y-2">
                        {course.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <FaCheck className="w-4 h-4 text-teal-400 flex-shrink-0" />
                            <span className="text-sm text-slate-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="border-t border-slate-700 pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-2xl font-bold text-teal-400">
                          {"฿" + course.price.toLocaleString()}
                        </div>
                        <div className="text-sm text-slate-400">{"Per program"}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-slate-400">{"Starts"}</div>
                        <div className="font-semibold text-white">{course.startDate}</div>
                      </div>
                    </div>

                    <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 border border-teal-500">
                      <FaArrowRight className="w-4 h-4" />
                      <span>{"Enroll Now"}</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-4">
                <FaTrophy className="w-6 h-6 text-teal-400" />
                <h3 className="text-2xl font-bold text-white">{"Multi-Program Discounts"}</h3>
              </div>
              <p className="text-slate-300 mb-6">
                {"Enroll in 2 programs: 10% discount | All 3 programs: 15% discount"}
              </p>
              <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 mx-auto border border-teal-500">
                <HiSparkles className="w-5 h-5" />
                <span>{"View Bundle Options"}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Benefits */}
      <section className="py-20 px-4 bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <FaTrophy className="w-8 h-8 text-teal-400" />
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                {"Why Choose Our Platform?"}
              </h2>
            </div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12">
              {"We don't just teach techniques - we develop strategic thinking through live interactive sessions, ensuring you master fundamentals and apply them in real-world scenarios."}
            </p>

            {/* Professional Comparison Cards */}
            <div className="mb-12">
              <div className="flex items-center justify-center gap-3 mb-8">
                <FaChartBar className="w-6 h-6 text-teal-400" />
                <h3 className="text-xl sm:text-2xl font-bold text-white text-center">{"Platform Comparison"}</h3>
              </div>

              {/* Desktop Table - Hidden on Mobile */}
              <div className="hidden lg:block bg-slate-900 border border-slate-700 rounded-xl shadow-lg p-8">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-slate-700">
                        <th className="text-left py-4 px-6 font-semibold text-slate-300">Factor</th>
                        <th className="text-center py-4 px-6 font-semibold text-slate-400">Generic Courses</th>
                        <th className="text-center py-4 px-6 font-semibold text-white bg-teal-600 rounded-t-lg">Our Platform</th>
                        <th className="text-center py-4 px-6 font-semibold text-slate-400">Self-Learning</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-700">
                        <td className="py-4 px-6 font-medium text-slate-300">Learning Outcome</td>
                        <td className="py-4 px-6 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                            <span className="text-sm text-slate-400">Theory Only</span>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-center bg-teal-600/20">
                          <div className="flex items-center justify-center gap-2">
                            <FaCheck className="w-4 h-4 text-teal-400" />
                            <span className="text-sm font-medium text-white">Immediate Implementation</span>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                            <span className="text-sm text-slate-400">Fragmented Knowledge</span>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-4 px-6 font-medium text-slate-300">Real Projects</td>
                        <td className="py-4 px-6 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                            <span className="text-sm text-slate-400">Fictional Examples</span>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-center bg-teal-600/20">
                          <div className="flex items-center justify-center gap-2">
                            <FaCheck className="w-4 h-4 text-teal-400" />
                            <span className="text-sm font-medium text-white">Industry Case Studies</span>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                            <span className="text-sm text-slate-400">No Guidance</span>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-4 px-6 font-medium text-slate-300">Time to Proficiency</td>
                        <td className="py-4 px-6 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <FaClock className="w-4 h-4 text-red-400" />
                            <span className="text-sm text-slate-400">2-3 months</span>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-center bg-teal-600/20">
                          <div className="flex items-center justify-center gap-2">
                            <FaClock className="w-4 h-4 text-teal-400" />
                            <span className="text-sm font-medium text-white">30 days</span>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <FaClock className="w-4 h-4 text-yellow-400" />
                            <span className="text-sm text-slate-400">6-12 months</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 font-medium text-slate-300">Investment</td>
                        <td className="py-4 px-6 text-center">
                          <span className="text-lg font-bold text-red-400">฿15,000-50,000</span>
                        </td>
                        <td className="py-4 px-6 text-center bg-teal-600/20">
                          <span className="text-lg font-bold text-teal-400">฿6,900</span>
                          <div className="text-xs text-slate-400 mt-1">Professional Value</div>
                        </td>
                        <td className="py-4 px-6 text-center">
                          <span className="text-sm text-slate-400">Free but Time Costly</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Mobile Cards - Visible on Mobile and Tablet */}
              <div className="lg:hidden space-y-4 px-4 sm:px-0">
                {/* Our Platform - Featured */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl p-4 sm:p-6 relative border border-teal-500">
                  <div className="absolute top-2 right-2 bg-blue-400 text-slate-900 text-xs font-bold px-2 py-1 rounded-lg">
                    {"RECOMMENDED"}
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2">
                    <FaTrophy className="w-5 h-5 text-teal-300" />
                    {"Our Platform"}
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <FaCheck className="w-4 h-4 text-teal-300" />
                      <span className="text-sm sm:text-base">Immediate Implementation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaCheck className="w-4 h-4 text-teal-300" />
                      <span className="text-sm sm:text-base">Industry Case Studies</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaClock className="w-4 h-4 text-teal-300" />
                      <span className="text-sm sm:text-base">30 days</span>
                    </div>
                    <div className="pt-2 border-t border-white/20">
                      <div className="text-2xl sm:text-3xl font-bold">฿6,900</div>
                      <div className="text-xs sm:text-sm text-blue-200">Professional Value</div>
                    </div>
                  </div>
                </div>

                {/* Other Options */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-slate-900 border border-slate-700 rounded-xl p-4 sm:p-6">
                    <h4 className="text-base sm:text-lg font-bold mb-4 text-slate-300">Generic Courses</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <span className="text-xs sm:text-sm text-slate-400">Theory Only</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <span className="text-xs sm:text-sm text-slate-400">Fictional Examples</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <FaClock className="w-3 h-3 text-red-400" />
                        <span className="text-xs sm:text-sm text-slate-400">2-3 months</span>
                      </div>
                      <div className="pt-2 border-t border-slate-700">
                        <div className="text-lg sm:text-xl font-bold text-red-400">฿15,000-50,000</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-900 border border-slate-700 rounded-xl p-4 sm:p-6">
                    <h4 className="text-base sm:text-lg font-bold mb-4 text-slate-300">Self-Learning</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <span className="text-xs sm:text-sm text-slate-400">Fragmented Knowledge</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <span className="text-xs sm:text-sm text-slate-400">No Guidance</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <FaClock className="w-3 h-3 text-yellow-400" />
                        <span className="text-xs sm:text-sm text-slate-400">6-12 months</span>
                      </div>
                      <div className="pt-2 border-t border-slate-700">
                        <div className="text-lg sm:text-xl font-bold text-slate-400">Free</div>
                        <div className="text-xs text-slate-500">but Time Costly</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-slate-900 border border-slate-700 hover:border-teal-500"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-600 text-white rounded-xl mb-4 border border-teal-500">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <FaTrophy className="w-8 h-8 text-teal-400" />
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                {"Professional Success Stories"}
              </h2>
            </div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              {"Real results from industry professionals who completed our training programs"}
            </p>
            <div className="bg-teal-600 inline-block px-6 py-3 rounded-lg border border-teal-500">
              <span className="font-semibold">{"⭐ 4.9/5 from " + studentsCount + "+ verified reviews"}</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-xl p-8 shadow-lg text-white border border-slate-700 hover:border-teal-500 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-2xl mr-4 border border-teal-500">
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg text-white">{testimonial.name}</h4>
                    <p className="text-sm text-slate-400">{testimonial.role}</p>
                    <div className="bg-teal-600 text-white px-2 py-1 rounded-lg text-xs font-semibold mt-1 inline-block border border-teal-500">
                      {testimonial.result}
                    </div>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="w-5 h-5 text-teal-400" />
                  ))}
                </div>

                <p className="text-slate-300 italic leading-relaxed">"{testimonial.comment}"</p>

                <div className="mt-4 pt-4 border-t border-slate-700">
                  <span className="text-teal-400 font-semibold text-sm">{"✅ Results within 30 days"}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Video Testimonials Teaser */}
          <div className="bg-slate-800 border border-teal-600 rounded-xl p-4 sm:p-6 md:p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaPlay className="w-6 h-6 text-teal-400" />
              <h3 className="text-xl sm:text-2xl font-bold text-white">{"50+ Video Case Studies"}</h3>
            </div>
            <p className="text-sm sm:text-base text-slate-300 mb-6 max-w-lg mx-auto leading-relaxed">{"Watch detailed success stories from professionals in our exclusive member portal"}</p>
            <div className="max-w-sm mx-auto">
              <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 border border-teal-500">
                <FaArrowRight className="w-4 h-4" />
                <span>{"Join Their Success - ฿6,900"}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-slate-800 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <FaGift className="w-8 h-8 text-teal-400" />
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                {"Program Benefits & Value"}
              </h2>
            </div>
            <p className="text-xl text-slate-300 mb-8">
              {"Comprehensive training package with exclusive resources worth over ฿20,000"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-6 bg-slate-900 rounded-xl border border-slate-700 hover:border-teal-500 transition-all duration-300"
              >
                <FaCheck className="w-6 h-6 text-teal-400 flex-shrink-0" />
                <span className="text-slate-300 font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="text-center px-4 sm:px-0">
            <div className="bg-teal-600 text-white p-4 sm:p-5 md:p-6 rounded-xl mb-6 sm:mb-8 border border-teal-500 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-3">
                <FaShieldAlt className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold">{"30-Day Results Guarantee"}</h3>
              </div>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">{"If you don't see measurable results within 30 days, we'll refund 100% - no questions asked"}</p>
            </div>

            <div className="max-w-md mx-auto">
              <button className="w-full bg-white text-slate-900 hover:bg-slate-100 border-2 border-teal-600 font-semibold py-4 px-6 rounded-lg text-base sm:text-lg md:text-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 sm:gap-3">
                <HiSparkles className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>{"Get Complete Package - ฿6,900"}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaRobot className="w-10 h-10 text-teal-400" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              {"Ready to Transform Your Career?"}
            </h2>
          </div>
          <p className="text-xl text-slate-300 mb-8">
            {"Don't wait - every moment delayed is an opportunity lost"}
          </p>

          {/* Final Countdown */}
          <div className="bg-slate-800 border border-teal-600 rounded-xl p-8 mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaClock className="w-8 h-8 text-teal-400" />
              <h3 className="text-3xl font-bold text-white">{"Early Bird Expires In:"}</h3>
            </div>
            <div className="flex justify-center gap-4 mb-6">
              <div className="text-center">
                <div className="bg-teal-600 text-white text-4xl font-bold px-6 py-4 rounded-xl min-w-[80px] border border-teal-500">
                  {String(timeLeft.hours).padStart(2, '0')}
                </div>
                <div className="text-sm text-slate-300 mt-2 font-semibold">Hours</div>
              </div>
              <div className="text-center">
                <div className="bg-teal-600 text-white text-4xl font-bold px-6 py-4 rounded-xl min-w-[80px] border border-teal-500">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </div>
                <div className="text-sm text-slate-300 mt-2 font-semibold">Minutes</div>
              </div>
              <div className="text-center">
                <div className="bg-teal-600 text-white text-4xl font-bold px-6 py-4 rounded-xl min-w-[80px] border border-teal-500">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </div>
                <div className="text-sm text-slate-300 mt-2 font-semibold">Seconds</div>
              </div>
            </div>
            <p className="text-slate-300 font-semibold">{"After expiry, pricing returns to standard rate of ฿25,900"}</p>
          </div>

          {/* Price Comparison - Professional */}
          <div className="bg-slate-800 border border-teal-600 rounded-xl p-4 sm:p-6 md:p-8 lg:p-10 text-white mb-6 sm:mb-8 shadow-2xl mx-4 sm:mx-0">
            {/* Header */}
            <div className="text-center mb-6 sm:mb-8">
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <FaTrophy className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-teal-400" />
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{"Final Investment Decision"}</h3>
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
              {/* Price Breakdown */}
              <div className="order-2 lg:order-1">
                <div className="bg-slate-900 rounded-xl p-4 sm:p-5 md:p-6 border border-slate-700">
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex justify-between items-center text-sm sm:text-base">
                      <span className="text-slate-300">{"AI Automation Training"}</span>
                      <span className="line-through text-slate-400">{"฿25,900"}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm sm:text-base">
                      <span className="text-slate-300">{"+ Premium Tool Access"}</span>
                      <span className="line-through text-slate-400">{"฿7,900"}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm sm:text-base">
                      <span className="text-slate-300">{"+ Professional Templates"}</span>
                      <span className="line-through text-slate-400">{"฿4,900"}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm sm:text-base">
                      <span className="text-slate-300">{"+ Expert Consultation"}</span>
                      <span className="line-through text-slate-400">{"฿7,100"}</span>
                    </div>

                    <div className="border-t border-slate-700 pt-3 sm:pt-4 mt-3 sm:mt-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-base sm:text-lg font-medium text-white">{"Total Value"}</span>
                        <span className="line-through text-lg sm:text-xl text-slate-400">{"฿45,800"}</span>
                      </div>

                      <div className="text-center bg-teal-600/20 rounded-lg p-3 sm:p-4 border border-teal-500">
                        <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-400 mb-1 sm:mb-2">{"Today Only ฿6,900"}</p>
                        <div className="flex items-center justify-center gap-2">
                          <FaArrowRight className="w-4 h-4 text-teal-300" />
                          <p className="text-teal-300 font-bold text-base sm:text-lg md:text-xl">{"Save ฿38,900 (85% OFF)"}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="text-center order-1 lg:order-2">
                <div className="max-w-sm mx-auto">
                  <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 sm:py-5 md:py-6 px-6 sm:px-8 md:px-12 rounded-lg text-lg sm:text-xl md:text-2xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4 border border-teal-500">
                    <FaArrowRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
                    <span>{"Enroll Now"}</span>
                  </button>
                  <div className="flex items-center justify-center gap-2">
                    <BsLightning className="w-3 h-3 sm:w-4 sm:h-4 text-slate-400" />
                    <p className="text-xs sm:text-sm text-slate-300">{"Instant access - no waiting period"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
      </section>
    </div>
  );
}
