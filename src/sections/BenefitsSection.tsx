import React from 'react';
import { FaGift, FaCheck, FaShieldAlt } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import { BENEFITS } from '@/constants/data';

const BenefitsSection: React.FC = () => {
  return (
    <section className="relative py-20 px-4 bg-slate-800 text-white overflow-hidden">
      {/* Matrix-style Background */}
      <div className="absolute inset-0 bg-gradient-to-bl from-slate-800 via-slate-900 to-gray-800"></div>

      {/* Digital Rain Effect (Static) */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='100' viewBox='0 0 20 100'%3E%3Cg fill='%2314b8a6'%3E%3Crect x='0' y='0' width='1' height='10'/%3E%3Crect x='0' y='20' width='1' height='5'/%3E%3Crect x='0' y='30' width='1' height='15'/%3E%3Crect x='0' y='50' width='1' height='8'/%3E%3Crect x='0' y='65' width='1' height='12'/%3E%3Crect x='0' y='85' width='1' height='7'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Scanning Lines */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-teal-400/50 to-transparent animate-pulse transform translate-y-0 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent animate-pulse"></div>
      </div>

      {/* Floating Tech Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-6 h-6 border border-teal-500/30 transform rotate-45 animate-spin"></div>
        <div className="absolute top-1/2 right-10 w-8 h-8 border border-blue-500/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-purple-500/20 transform rotate-12 animate-bounce"></div>
      </div>

      <div className="relative z-10">
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
          {BENEFITS.map((benefit, index) => (
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
      </div>
    </section>
  );
};

export default BenefitsSection;