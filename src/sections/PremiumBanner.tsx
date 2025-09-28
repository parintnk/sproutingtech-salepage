import React from 'react';
import { FaRobot, FaClock, FaUser, FaArrowRight } from 'react-icons/fa';

interface PremiumBannerProps {
  timeLeft: { hours: number; minutes: number; seconds: number };
}

const PremiumBanner: React.FC<PremiumBannerProps> = ({ timeLeft }) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 shadow-xl">
      <div className="bg-slate-800 border-b border-slate-700 text-white py-3 sm:py-4 px-4 sm:px-6 relative overflow-hidden">
        {/* Enhanced Tech Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/10 via-transparent to-blue-900/10"></div>

        {/* Tech Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2314b8a6' fill-opacity='0.3'%3E%3Cpath d='M20 20.5V18h3v-3h2v3h3v2.5h-3v3h-2v-3h-3zM12 13h2v2h-2v-2zm0 14h2v2h-2v-2z'/%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        {/* Scanning Effect */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-teal-400/50 to-transparent animate-pulse"></div>

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

              <button
                onClick={() => window.location.href = '/purchase'}
                className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-xs flex items-center gap-1 border border-teal-500"
              >
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
              <button
                onClick={() => window.location.href = '/purchase'}
                className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-base flex items-center gap-2 whitespace-nowrap border border-teal-500"
              >
                <span>{"Enroll Now"}</span>
                <FaArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="bg-slate-700 border-t border-slate-600 hidden md:block text-white py-1.5 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700"></div>
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent animate-pulse"></div>
        <div className="relative max-w-6xl mx-auto flex items-center justify-center gap-3 text-sm font-medium">
          <FaUser className="w-4 h-4 text-teal-300" />
          <span className="text-slate-300">{"Limited Enrollment: 15 seats remaining | 880+ professionals enrolled"}</span>
          <div className="bg-teal-600 text-white px-3 py-1 rounded-lg text-xs font-semibold border border-teal-500">
            {"EARLY BIRD"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumBanner;