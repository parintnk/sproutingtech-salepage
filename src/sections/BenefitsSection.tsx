import React from 'react';
import { FaGift, FaCheck, FaShieldAlt } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import { BENEFITS } from '@/constants/data';

const BenefitsSection: React.FC = () => {
  return (
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
    </section>
  );
};

export default BenefitsSection;