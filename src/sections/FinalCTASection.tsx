import React from 'react';
import { FaRobot, FaClock, FaTrophy, FaArrowRight } from 'react-icons/fa';
import { BsLightning } from 'react-icons/bs';
import CTAButton from '@/components/CTAButton';

interface FinalCTASectionProps {
  timeLeft: { hours: number; minutes: number; seconds: number };
}

const FinalCTASection: React.FC<FinalCTASectionProps> = ({ timeLeft }) => {
  return (
    <section className="relative py-20 px-4 bg-gray-900 overflow-hidden">
      {/* Final CTA Background - Dramatic Tech */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-slate-800 to-gray-900"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 via-purple-900/10 to-blue-900/20"></div>

      {/* Particle Field */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-2 h-2 bg-teal-400/60 rounded-full animate-ping"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-blue-400/60 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-3 h-3 bg-purple-400/40 rounded-full animate-bounce"></div>
        <div className="absolute bottom-10 right-10 w-1 h-1 bg-teal-300/60 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-blue-300/60 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-purple-300/40 rounded-full animate-bounce"></div>
      </div>

      {/* Energy Grid */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="energyGrid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="1" fill="currentColor" className="text-teal-400"/>
              <line x1="40" y1="0" x2="40" y2="80" stroke="currentColor" strokeWidth="0.5" className="text-teal-400/30"/>
              <line x1="0" y1="40" x2="80" y2="40" stroke="currentColor" strokeWidth="0.5" className="text-teal-400/30"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#energyGrid)"/>
        </svg>
      </div>

      <div className="relative z-10">
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
            {[
              { value: timeLeft.hours, label: "Hours" },
              { value: timeLeft.minutes, label: "Minutes" },
              { value: timeLeft.seconds, label: "Seconds" }
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="bg-teal-600 text-white text-4xl font-bold px-6 py-4 rounded-xl min-w-[80px] border border-teal-500">
                  {String(value).padStart(2, '0')}
                </div>
                <div className="text-sm text-slate-300 mt-2 font-semibold">{label}</div>
              </div>
            ))}
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
                <CTAButton size="large" className="w-full mb-3 sm:mb-4 text-lg sm:text-xl md:text-2xl py-4 sm:py-5 md:py-6" href="/purchase">
                  <FaArrowRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
                  <span>{"Enroll Now"}</span>
                </CTAButton>
                <div className="flex items-center justify-center gap-2">
                  <BsLightning className="w-3 h-3 sm:w-4 sm:h-4 text-slate-400" />
                  <p className="text-xs sm:text-sm text-slate-300">{"Instant access - no waiting period"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default FinalCTASection;