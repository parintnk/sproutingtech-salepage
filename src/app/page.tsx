"use client";
import { FaPlay, FaCheck, FaRobot, FaLightbulb, FaChartBar, FaClock, FaStar, FaUser, FaFire, FaShieldAlt, FaGift, FaTrophy, FaCertificate, FaLock, FaMobile, FaHeadset, FaExclamationTriangle, FaArrowRight } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { BsLightning } from "react-icons/bs";
import { useState, useEffect } from "react";

export default function Home() {
  const features = [
    {
      icon: <FaRobot className="w-6 h-6" />,
      title: "AI Automation Mastery",
      description: "Learn to automate complex workflows with cutting-edge AI tools"
    },
    {
      icon: <BsLightning className="w-6 h-6" />,
      title: "Lightning Fast Results",
      description: "Get immediate results and see your productivity skyrocket"
    },
    {
      icon: <FaChartBar className="w-6 h-6" />,
      title: "Data-Driven Strategies",
      description: "Make informed decisions with AI-powered analytics"
    },
    {
      icon: <FaClock className="w-6 h-6" />,
      title: "Save Hours Daily",
      description: "Reduce manual work and focus on what matters most"
    }
  ];

  const benefits = [
    "Master AI automation from zero to expert level",
    "Access to premium AI tools and resources",
    "Step-by-step video tutorials",
    "Real-world project examples",
    "Community support and updates",
    "30-day money-back guarantee"
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
      {/* Sticky Top CTA Bar */}
      <div className="fixed top-0 left-0 right-0 bg-gray-900 text-white z-50 py-2 sm:py-3 px-2 sm:px-4 shadow-lg border-b-2 border-green-600">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm md:text-base">
            <div className="flex items-center gap-1 sm:gap-2 bg-white/20 px-2 sm:px-3 py-1 rounded-full font-semibold text-xs sm:text-sm">
              <FaFire className="w-4 h-4 text-red-400" />
              <span>{"ลดราคาพิเศษ 73% OFF"}</span>
            </div>
            <div className="text-gray-200 text-md sm:text-lg sm:block">
              {"จาก"} <span className="line-through">{"฿25,900"}</span> <FaArrowRight className="w-3 h-3 inline mx-1 sm:mx-2" /> <span className="text-green-400 font-bold">{"฿6,990"}</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <FaClock className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
              <span className="text-gray-300 text-xs sm:text-sm">{"เหลือเวลา:"}</span>
              <div className="flex gap-0.5 sm:gap-1">
                <span className="bg-gray-700 px-1 sm:px-2 py-0.5 sm:py-1 rounded text-xs font-mono">
                  {String(timeLeft.hours).padStart(2, '0')}
                </span>
                <span className="text-xs">:</span>
                <span className="bg-gray-700 px-1 sm:px-2 py-0.5 sm:py-1 rounded text-xs font-mono">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </span>
                <span className="text-xs">:</span>
                <span className="bg-gray-700 px-1 sm:px-2 py-0.5 sm:py-1 rounded text-xs font-mono">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
              </div>
            </div>
          </div>
          <button className="bg-green-600 hover:bg-green-500 text-white px-3 sm:px-6 py-1.5 sm:py-2 rounded-lg font-semibold transition-all flex items-center gap-1 sm:gap-2 text-sm sm:text-base">
            <FaLightbulb className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="inline">{"สั่งซื้อเลย"}</span>
          </button>
        </div>
      </div>

      {/* Alert Banner */}
      <div className="bg-blue-50 border-l-4 border-blue-500 text-gray-800 py-2 sm:py-3 px-2 sm:px-4 text-center mt-16 sm:mt-20">
        <div className="flex items-center justify-center gap-2">
          <FaExclamationTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
          <span className="font-semibold text-sm sm:text-base">{"เหลือโควต้าเพียง 23 ที่นั่ง จาก 50 ที่นั่ง - รีบจองก่อนหมด"}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-green-900 text-white py-10 sm:py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Social Proof Badge */}
          <div className="inline-flex items-center gap-1 sm:gap-2 bg-white/10 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-6 sm:mb-8 border border-white/20">
            <FaStar className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
            <span className="text-xs sm:text-sm font-medium">{studentsCount}+ นักเรียนเรียนจบแล้ว</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4 flex-wrap">
              <FaRobot className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-green-400" />
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">{"เปลี่ยนชีวิตด้วย"}</span>
            </div>
            <span className="block text-green-400 mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">AI Automation</span>
            <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl text-yellow-300 font-medium">{"ใน 30 วัน"}</span>
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
              {"เพราะเราไม่ได้สอนแค่ทฤษฎี แต่เราให้คุณได้ลงมือทำจริง และมีผลลัพธ์จริง!"}
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
          <div className="bg-gray-800 border border-green-600 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">{"📹 + อีก 50+ วิดีโอเท​สโมเนียล"}</h3>
            <p className="mb-4">{"ดูคลิปวิดีโอจากนักเรียนที่ประสบความสำเร็จด้วยตัวเองใน Member Area!"}</p>
            <CTAButton className="bg-white text-gray-800 hover:bg-gray-100 border-2 border-green-600">
              <FaUser className="w-5 h-5" />
              {"🎯 อยากเป็นเหมือนพวกเขา - ฿6,990"}
            </CTAButton>
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

          <div className="text-center">
            <div className="bg-green-600 text-white p-6 rounded-2xl mb-8 border border-green-500">
              <h3 className="text-2xl font-bold mb-2">{"🎯 รับประกันผลลัพธ์!"}</h3>
              <p className="text-lg">{"หากไม่เห็นผลใน 30 วัน เราคืนเงิน 100% ไม่ถามคำถาม!"}</p>
            </div>

            <CTAButton className="bg-white text-green-800 hover:bg-gray-100" size="large">
              <FaLightbulb className="w-6 h-6" />
              {"💎 รับทุกสิ่งนี้เพียง ฿6,990"}
            </CTAButton>
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

          {/* Price Comparison */}
          <div className="bg-gradient-to-br from-blue-700 to-green-800 rounded-3xl p-10 text-white mb-8 shadow-2xl">
            <div className="grid md:grid-cols-2 items-center gap-8">
              <div className="text-left">
                <div className="flex items-center gap-3 mb-4">
                  <FaFire className="w-8 h-8 text-yellow-300" />
                  <h3 className="text-3xl font-bold">{"ข้อเสนอสุดท้าย!"}</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-blue-200">{"คอร์ส AI Automation"} <span className="line-through">{"฿25,900"}</span></p>
                  <p className="text-blue-200">{"+ โบนัส Premium Tools"} <span className="line-through">{"฿7,900"}</span></p>
                  <p className="text-blue-200">{"+ Template Library"} <span className="line-through">{"฿4,900"}</span></p>
                  <p className="text-blue-200">{"+ 1-on-1 Consultation"} <span className="line-through">{"฿7,100"}</span></p>
                  <div className="border-t border-white/30 pt-2 mt-4">
                    <p className="text-lg">{"มูลค่ารวม"} <span className="line-through text-xl">{"฿45,800"}</span></p>
                    <p className="text-4xl font-bold text-yellow-300">{"วันนี้เพียง ฿6,990!"}</p>
                    <div className="flex items-center justify-center gap-2">
                      <FaArrowRight className="w-5 h-5 text-green-300" />
                      <p className="text-green-300 font-bold text-xl">{"ประหยัด ฿38,810 (85% OFF!)"}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <CTAButton className="bg-green-600 text-white hover:bg-green-700 text-2xl py-6 px-12 mb-4 animate-bounce border-2 border-green-500">
                  <FaArrowRight className="w-8 h-8" />
                  {"สั่งซื้อตอนนี้เลย!"}
                </CTAButton>
                <div className="flex items-center justify-center gap-2">
                  <BsLightning className="w-4 h-4 text-gray-300" />
                  <p className="text-sm text-gray-300">{"คลิกเดียว ได้ทันที ไม่ต้องรอ!"}</p>
                </div>
              </div>
            </div>
          </div>
          </div>
      </section>
    </div>
  );
}
