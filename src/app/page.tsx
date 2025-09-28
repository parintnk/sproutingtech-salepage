"use client";
import { FaPlay, FaCheck, FaRobot, FaLightbulb, FaChartBar, FaClock, FaStar, FaUser, FaFire, FaShieldAlt, FaGift, FaTrophy, FaCertificate, FaLock, FaMobile, FaHeadset, FaExclamationTriangle, FaArrowRight } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { BsLightning } from "react-icons/bs";
import { useState, useEffect } from "react";

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
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
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
    <div className="min-h-screen bg-white">
      {/* Premium Sales Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 shadow-xl">
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-green-600 text-white py-4 sm:py-5 px-4 sm:px-6 relative overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 bg-black/10"></div>

          <div className="relative max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-6">

              {/* Left: Sale Info */}
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <FaFire className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-300" />
                </div>
                <div>
                  <div className="font-bold text-lg sm:text-xl lg:text-2xl">
                    {"ข้อเสนอพิเศษ AI Automation"}
                  </div>
                  <div className="text-sm sm:text-base text-blue-200">
                    {"ลดราคา 73% เฉพาะวันนี้เท่านั้น"}
                  </div>
                </div>
              </div>

              {/* Center: Countdown Timer */}
              <div className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-2 backdrop-blur-sm">
                <FaClock className="w-4 h-4 text-yellow-300" />
                <span className="text-sm font-medium text-blue-200 mr-2">{"เหลือเวลา:"}</span>
                <div className="flex items-center gap-1">
                  <div className="bg-white text-blue-700 font-bold px-2 py-1 rounded text-sm sm:text-base font-mono min-w-[32px] text-center">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </div>
                  <span className="text-white text-sm">:</span>
                  <div className="bg-white text-blue-700 font-bold px-2 py-1 rounded text-sm sm:text-base font-mono min-w-[32px] text-center">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </div>
                  <span className="text-white text-sm">:</span>
                  <div className="bg-white text-blue-700 font-bold px-2 py-1 rounded text-sm sm:text-base font-mono min-w-[32px] text-center">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </div>
                </div>
              </div>

              {/* Right: Price & CTA */}
              <div className="flex items-center gap-4">
                {/* Price */}
                <div className="text-center">
                  <div className="text-sm text-blue-200">{"จาก"} <span className="line-through">{"฿25,900"}</span></div>
                  <div className="text-xl sm:text-2xl font-bold text-yellow-300">{"฿6,900"}</div>
                </div>

                {/* CTA Button */}
                <button className="bg-green-500 hover:bg-green-400 text-white font-bold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base flex items-center gap-2 whitespace-nowrap">
                  <span>{"สั่งซื้อเลย"}</span>
                  <FaArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="bg-green-500 hidden md:block text-white py-1.5 px-4">
          <div className="max-w-6xl mx-auto flex items-center justify-center gap-3 text-sm font-medium">
            <FaExclamationTriangle className="w-4 h-4 text-yellow-300" />
            <span>{"เหลือเพียง 15 ที่นั่ง | 880+ คนสั่งซื้อแล้ว"}</span>
            <div className="bg-yellow-400 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
              {"73% OFF"}
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-green-900 text-white py-10 sm:py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-25 font-bold mb-6 sm:mb-8 leading-tight">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4 flex-wrap">
              <FaRobot className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-green-400" />
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">{"เรียนสด Online"}</span>
            </div>
            <span className="block text-green-400 mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">AI Automation</span>
            <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl text-yellow-300 font-medium">{"จากเซียนถึงใช้งานจริง"}</span>
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 max-w-4xl mx-auto">
            <div className="bg-white/10 rounded-lg p-3 sm:p-4 border border-white/20">
              <FaChartBar className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-green-400 mx-auto mb-1 sm:mb-2" />
              <div className="font-bold text-sm sm:text-base">เพิ่มรายได้ 200%</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3 sm:p-4 border border-white/20">
              <FaClock className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-400 mx-auto mb-1 sm:mb-2" />
              <div className="font-bold text-sm sm:text-base">ประหยัดเวลา 4 ชม./วัน</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3 sm:p-4 border border-white/20 sm:col-span-2 md:col-span-1">
              <FaRobot className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-yellow-400 mx-auto mb-1 sm:mb-2" />
              <div className="font-bold text-sm sm:text-base">ทำงานอัตโนมัติ 80%</div>
            </div>
          </div>

          {/* Urgency Message */}
          <div className="bg-gray-800 border border-green-600 rounded-lg p-3 sm:p-4 mb-6 sm:mb-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-2">
              <BsLightning className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
              <p className="font-bold text-base sm:text-lg text-white text-center">{"โปรโมชั่นหมดอายุในอีก"}</p>
            </div>
            <div className="flex justify-center gap-2 sm:gap-4 mt-2">
              <div className="text-center">
                <div className="bg-white text-gray-800 text-lg sm:text-xl md:text-2xl font-bold px-2 sm:px-3 py-1 rounded border-2 border-green-500">
                  {String(timeLeft.hours).padStart(2, '0')}
                </div>
                <div className="text-xs text-gray-300">ชั่วโมง</div>
              </div>
              <div className="text-center">
                <div className="bg-white text-gray-800 text-lg sm:text-xl md:text-2xl font-bold px-2 sm:px-3 py-1 rounded border-2 border-green-500">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </div>
                <div className="text-xs text-gray-300">นาที</div>
              </div>
              <div className="text-center">
                <div className="bg-white text-gray-800 text-lg sm:text-xl md:text-2xl font-bold px-2 sm:px-3 py-1 rounded border-2 border-green-500">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </div>
                <div className="text-xs text-gray-300">วินาที</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4 justify-center items-center">
            <CTAButton size="large" className="bg-green-600 hover:bg-green-500 w-full sm:w-auto text-center">
              <FaArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-base sm:text-lg md:text-xl">{"เริ่มเรียนตอนนี้ - ฿6,990"}</span>
            </CTAButton>
            <button className="bg-transparent border-2 border-white/30 hover:border-white/50 text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center">
              <FaPlay className="w-4 h-4 sm:w-5 sm:h-5" />
              {"ดูตัวอย่างคอร์ส"}
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 text-sm text-gray-300 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm">
              <FaLock className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>{"ปลอดภัย 100%"}</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm">
              <FaShieldAlt className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>{"รับประกัน 30 วัน"}</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm sm:col-span-2 md:col-span-1">
              <FaCertificate className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>{"ใบประกาศนียบัตร"}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black aspect-video border-4 border-gray-200">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/diGpkv3thvg"
              title="AI Automation Course Preview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton>
              <FaPlay className="w-5 h-5" />
              {"🚀 ดูแล้วอยากเริ่มเลย - ฿6,990"}
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <FaRobot className="w-8 h-8 text-blue-600" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                {"คอร์สเรียนที่เปิดให้สมัคร"}
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {"เลือกคอร์สที่เหมาะกับงานของคุณ เรียนสดออนไลน์ 15 คนต่อคอร์ส"}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-blue-300"
              >
                {/* Course Banner */}
                <div className="relative h-48 bg-gradient-to-br from-blue-600 to-green-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <FaRobot className="w-16 h-16 mx-auto mb-4 opacity-20" />
                    <h3 className="text-2xl font-bold">{course.title}</h3>
                  </div>
                  <div className="absolute top-4 right-4 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                    {"เหลือ " + course.students + " ที่นั่ง"}
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h3>
                    <p className="text-gray-600 mb-4">{course.description}</p>

                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <FaClock className="w-4 h-4" />
                        <span>{course.startDate}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaUser className="w-4 h-4" />
                        <span>{course.students} คน</span>
                      </div>
                    </div>

                    {/* Course Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">{"สิ่งที่จะได้เรียน:"}</h4>
                      <div className="space-y-2">
                        {course.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <FaCheck className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="border-t border-gray-100 pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-2xl font-bold text-green-600">
                          {"฿" + course.price.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-500">{"ต่อคอร์ส"}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500">{"เริ่มเรียน"}</div>
                        <div className="font-semibold text-gray-800">{course.startDate}</div>
                      </div>
                    </div>

                    <button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                      <FaArrowRight className="w-4 h-4" />
                      <span>{"สมัครเรียนเลย"}</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-200 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-4">
                <FaFire className="w-6 h-6 text-red-500" />
                <h3 className="text-2xl font-bold text-gray-800">{"ข้อเสนอพิเศษ!"}</h3>
              </div>
              <p className="text-gray-600 mb-6">
                {"สมัคร 2 คอร์ส ลด 10% | สมัคร 3 คอร์ส ลด 15%"}
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 mx-auto">
                <HiSparkles className="w-5 h-5" />
                <span>{"สมัครหลายคอร์สพร้อมกัน"}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Benefits */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <FaTrophy className="w-8 h-8 text-blue-600" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                {"ทำไมคุณต้องเลือกเรา?"}
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
              {"เพราะเราไม่ได้สอนแค่วิธีการ แต่เราสอนกระบวนการคิดผ่าน Live Stream ให้คุณเข้าใจจากหลักการจนใช้งานจริงได้!"}
            </p>

            {/* Mobile-Friendly Comparison Cards */}
            <div className="mb-12">
              <div className="flex items-center justify-center gap-3 mb-8">
                <FaChartBar className="w-6 h-6 text-gray-600" />
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 text-center">{"เปรียบเทียบกับทางเลือกอื่น"}</h3>
              </div>

              {/* Desktop Table - Hidden on Mobile */}
              <div className="hidden lg:block bg-white border border-gray-200 rounded-xl shadow-lg p-8">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-gray-200">
                        <th className="text-left py-4 px-6 font-semibold text-gray-700">ปัจจัย</th>
                        <th className="text-center py-4 px-6 font-semibold text-gray-500">คอร์สทั่วไป</th>
                        <th className="text-center py-4 px-6 font-semibold text-white bg-blue-600 rounded-t-lg">คอร์สของเรา</th>
                        <th className="text-center py-4 px-6 font-semibold text-gray-500">เรียนเอง</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="py-4 px-6 font-medium text-gray-800">ความเข้าใจ</td>
                        <td className="py-4 px-6 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                            <span className="text-sm text-gray-600">เรียนแล้วไม่รู้จะทำยังไง</span>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-center bg-blue-50">
                          <div className="flex items-center justify-center gap-2">
                            <FaCheck className="w-4 h-4 text-green-600" />
                            <span className="text-sm font-medium text-green-700">ลงมือทำได้ทันที</span>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                            <span className="text-sm text-gray-600">เสียเวลาหาข้อมูล</span>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-4 px-6 font-medium text-gray-800">ตัวอย่างจริง</td>
                        <td className="py-4 px-6 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                            <span className="text-sm text-gray-600">ไม่มีตัวอย่างจริง</span>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-center bg-blue-50">
                          <div className="flex items-center justify-center gap-2">
                            <FaCheck className="w-4 h-4 text-green-600" />
                            <span className="text-sm font-medium text-green-700">โปรเจ็คจริง 100%</span>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                            <span className="text-sm text-gray-600">ไม่รู้จะเริ่มตรงไหน</span>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-4 px-6 font-medium text-gray-800">เวลาที่ใช้</td>
                        <td className="py-4 px-6 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <FaClock className="w-4 h-4 text-red-500" />
                            <span className="text-sm text-gray-600">2-3 เดือน</span>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-center bg-blue-50">
                          <div className="flex items-center justify-center gap-2">
                            <FaClock className="w-4 h-4 text-green-600" />
                            <span className="text-sm font-medium text-green-700">30 วัน</span>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <FaClock className="w-4 h-4 text-gray-500" />
                            <span className="text-sm text-gray-600">6-12 เดือน</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 font-medium text-gray-800">ราคา</td>
                        <td className="py-4 px-6 text-center">
                          <span className="text-lg font-bold text-red-600">฿15,000-50,000</span>
                        </td>
                        <td className="py-4 px-6 text-center bg-blue-50">
                          <span className="text-lg font-bold text-green-600">฿6,990</span>
                          <div className="text-xs text-gray-500 mt-1">ประหยัด 73%</div>
                        </td>
                        <td className="py-4 px-6 text-center">
                          <span className="text-sm text-gray-600">ฟรี แต่เสียเวลา</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Mobile Cards - Visible on Mobile and Tablet */}
              <div className="lg:hidden space-y-4 px-4 sm:px-0">
                {/* Our Course - Featured */}
                <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-xl p-4 sm:p-6 relative">
                  <div className="absolute top-2 right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full">
                    {"แนะนำ"}
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2">
                    <FaTrophy className="w-5 h-5 text-yellow-400" />
                    {"คอร์สของเรา"}
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <FaCheck className="w-4 h-4 text-green-300" />
                      <span className="text-sm sm:text-base">ลงมือทำได้ทันที</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaCheck className="w-4 h-4 text-green-300" />
                      <span className="text-sm sm:text-base">โปรเจ็คจริง 100%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaClock className="w-4 h-4 text-green-300" />
                      <span className="text-sm sm:text-base">30 วัน</span>
                    </div>
                    <div className="pt-2 border-t border-white/20">
                      <div className="text-2xl sm:text-3xl font-bold">฿6,990</div>
                      <div className="text-xs sm:text-sm text-green-200">ประหยัด 73%</div>
                    </div>
                  </div>
                </div>

                {/* Other Options */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-4 sm:p-6">
                    <h4 className="text-base sm:text-lg font-bold mb-4 text-gray-700">คอร์สทั่วไป</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <span className="text-xs sm:text-sm text-gray-600">เรียนแล้วไม่รู้จะทำยังไง</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <span className="text-xs sm:text-sm text-gray-600">ไม่มีตัวอย่างจริง</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <FaClock className="w-3 h-3 text-red-500" />
                        <span className="text-xs sm:text-sm text-gray-600">2-3 เดือน</span>
                      </div>
                      <div className="pt-2 border-t border-gray-200">
                        <div className="text-lg sm:text-xl font-bold text-red-600">฿15,000-50,000</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-xl p-4 sm:p-6">
                    <h4 className="text-base sm:text-lg font-bold mb-4 text-gray-700">เรียนเอง</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <span className="text-xs sm:text-sm text-gray-600">เสียเวลาหาข้อมูล</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <span className="text-xs sm:text-sm text-gray-600">ไม่รู้จะเริ่มตรงไหน</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <FaClock className="w-3 h-3 text-gray-500" />
                        <span className="text-xs sm:text-sm text-gray-600">6-12 เดือน</span>
                      </div>
                      <div className="pt-2 border-t border-gray-200">
                        <div className="text-lg sm:text-xl font-bold text-gray-600">ฟรี</div>
                        <div className="text-xs text-gray-500">แต่เสียเวลา</div>
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
                className="text-center p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white border-2 border-gray-200 hover:border-green-400"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 text-white rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {"🏆 ความสำเร็จจากนักเรียนจริง"}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              {"ไม่ใช่แค่รีวิวปลอม แต่เป็นผลลัพธ์จริงจากคนจริง!"}
            </p>
            <div className="bg-green-600 inline-block px-6 py-3 rounded-full border border-green-500">
              <span className="font-bold">{"⭐ 4.9/5 จาก " + studentsCount + "+ รีวิว"}</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg text-gray-800 border-l-4 border-green-500"
              >
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center text-2xl mr-4">
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <div className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-bold mt-1 inline-block">
                      {testimonial.result}
                    </div>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-700 italic leading-relaxed">"{testimonial.comment}"</p>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <span className="text-green-600 font-bold text-sm">{"✅ ผลลัพธ์ใน 30 วันแรก"}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Video Testimonials Teaser */}
          <div className="bg-gray-800 border border-green-600 rounded-2xl p-4 sm:p-6 md:p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaPlay className="w-6 h-6 text-white" />
              <h3 className="text-xl sm:text-2xl font-bold">{"อีก 50+ วิดีโอเทสโมเนียล"}</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-300 mb-6 max-w-lg mx-auto leading-relaxed">{"ดูคลิปวิดีโอจากนักเรียนที่ประสบความสำเร็จด้วยตัวเองใน Member Area!"}</p>
            <div className="max-w-sm mx-auto">
              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                <FaArrowRight className="w-4 h-4" />
                <span>{"อยากเป็นเหมือนพวกเขา - ฿6,990"}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-800 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {"💰 คุณจะได้อะไรบ้าง?"}
            </h2>
            <p className="text-xl text-green-200 mb-8">
              {"ครบครันทุกสิ่งที่ต้องใช้ + โบนัสมูลค่าเกือบ 20,000 บาท!"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-6 bg-white/20 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/30 transition-all duration-300"
              >
                <FaCheck className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-white font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="text-center px-4 sm:px-0">
            <div className="bg-green-600 text-white p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl mb-6 sm:mb-8 border border-green-500 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-3">
                <FaShieldAlt className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold">{"รับประกันผลลัพธ์!"}</h3>
              </div>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">{"หากไม่เห็นผลใน 30 วัน เราคืนเงิน 100% ไม่ถามคำถาม!"}</p>
            </div>

            <div className="max-w-md mx-auto">
              <button className="w-full bg-white text-green-800 hover:bg-gray-100 border-2 border-green-600 font-bold py-4 px-6 rounded-full text-base sm:text-lg md:text-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 sm:gap-3">
                <HiSparkles className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>{"รับทุกสิ่งนี้เพียง ฿6,990"}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaRobot className="w-10 h-10 text-blue-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              {"พร้อมเปลี่ยนชีวิตแล้วใช่มั้ย?"}
            </h2>
          </div>
          <p className="text-xl text-gray-600 mb-8">
            {"อย่ารอ! ทุกวินาทีที่ผ่านไป = โอกาสที่สูญเสีย"}
          </p>

          {/* Final Countdown */}
          <div className="bg-gray-50 border-4 border-green-500 rounded-2xl p-8 mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaExclamationTriangle className="w-8 h-8 text-gray-800" />
              <h3 className="text-3xl font-bold text-gray-800">{"ปิดการขายใน:"}</h3>
            </div>
            <div className="flex justify-center gap-4 mb-6">
              <div className="text-center">
                <div className="bg-green-600 text-white text-4xl font-bold px-6 py-4 rounded-xl min-w-[80px] animate-pulse border-2 border-green-500">
                  {String(timeLeft.hours).padStart(2, '0')}
                </div>
                <div className="text-sm text-gray-700 mt-2 font-bold">ชั่วโมง</div>
              </div>
              <div className="text-center">
                <div className="bg-green-600 text-white text-4xl font-bold px-6 py-4 rounded-xl min-w-[80px] animate-pulse border-2 border-green-500">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </div>
                <div className="text-sm text-gray-700 mt-2 font-bold">นาที</div>
              </div>
              <div className="text-center">
                <div className="bg-green-600 text-white text-4xl font-bold px-6 py-4 rounded-xl min-w-[80px] animate-pulse border-2 border-green-500">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </div>
                <div className="text-sm text-gray-700 mt-2 font-bold">วินาที</div>
              </div>
            </div>
            <p className="text-gray-800 font-bold">{"หมดเวลาแล้ว ราคากลับเป็น ฿25,900 ทันที!"}</p>
          </div>

          {/* Price Comparison - Mobile Optimized */}
          <div className="bg-gradient-to-br from-blue-700 to-green-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 text-white mb-6 sm:mb-8 shadow-2xl mx-4 sm:mx-0">
            {/* Header */}
            <div className="text-center mb-6 sm:mb-8">
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <FaFire className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-yellow-300" />
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">{"ข้อเสนอสุดท้าย!"}</h3>
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
              {/* Price Breakdown */}
              <div className="order-2 lg:order-1">
                <div className="bg-white/10 rounded-xl p-4 sm:p-5 md:p-6 backdrop-blur-sm border border-white/20">
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex justify-between items-center text-sm sm:text-base">
                      <span className="text-blue-200">{"คอร์ส AI Automation"}</span>
                      <span className="line-through text-gray-300">{"฿25,900"}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm sm:text-base">
                      <span className="text-blue-200">{"+ โบนัส Premium Tools"}</span>
                      <span className="line-through text-gray-300">{"฿7,900"}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm sm:text-base">
                      <span className="text-blue-200">{"+ Template Library"}</span>
                      <span className="line-through text-gray-300">{"฿4,900"}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm sm:text-base">
                      <span className="text-blue-200">{"+ 1-on-1 Consultation"}</span>
                      <span className="line-through text-gray-300">{"฿7,100"}</span>
                    </div>

                    <div className="border-t border-white/30 pt-3 sm:pt-4 mt-3 sm:mt-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-base sm:text-lg font-medium">{"มูลค่ารวม"}</span>
                        <span className="line-through text-lg sm:text-xl text-gray-300">{"฿45,800"}</span>
                      </div>

                      <div className="text-center bg-yellow-400/20 rounded-lg p-3 sm:p-4">
                        <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-300 mb-1 sm:mb-2">{"วันนี้เพียง ฿6,990!"}</p>
                        <div className="flex items-center justify-center gap-2">
                          <FaArrowRight className="w-4 h-4 text-green-300" />
                          <p className="text-green-300 font-bold text-base sm:text-lg md:text-xl">{"ประหยัด ฿38,810 (85% OFF!)"}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="text-center order-1 lg:order-2">
                <div className="max-w-sm mx-auto">
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 sm:py-5 md:py-6 px-6 sm:px-8 md:px-12 rounded-full text-lg sm:text-xl md:text-2xl transition-all duration-300 shadow-lg hover:shadow-xl animate-bounce flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4 border-2 border-green-500">
                    <FaArrowRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
                    <span>{"สั่งซื้อตอนนี้เลย!"}</span>
                  </button>
                  <div className="flex items-center justify-center gap-2">
                    <BsLightning className="w-3 h-3 sm:w-4 sm:h-4 text-gray-300" />
                    <p className="text-xs sm:text-sm text-gray-300">{"คลิกเดียว ได้ทันที ไม่ต้องรอ!"}</p>
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
