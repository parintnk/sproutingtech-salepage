import React from 'react';
import { FaPlay, FaChartBar, FaClock, FaRobot, FaArrowRight, FaCertificate, FaShieldAlt, FaHeadset } from 'react-icons/fa';
import CTAButton from '@/components/CTAButton';
import CountdownTimer from '@/components/CountdownTimer';

interface HeroSectionProps {
  timeLeft: { hours: number; minutes: number; seconds: number };
}

const HeroSection: React.FC<HeroSectionProps> = ({ timeLeft }) => {
  return (
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

        <CountdownTimer
          timeLeft={timeLeft}
          title="Early Bird Enrollment Closes In"
        />

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <CTAButton size="large" href="/purchase">
            <FaArrowRight className="w-5 h-5" />
            <span>{"Enroll Now - ฿6,900"}</span>
          </CTAButton>
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
  );
};

export default HeroSection;