import React from 'react';
import { FaTrophy, FaPlay, FaArrowRight } from 'react-icons/fa';
import TestimonialCard from '@/components/TestimonialCard';
import CTAButton from '@/components/CTAButton';
import { TESTIMONIALS } from '@/constants/data';

interface TestimonialsSectionProps {
  studentsCount: number;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ studentsCount }) => {
  return (
    <section className="relative py-20 px-4 bg-slate-900 text-white overflow-hidden">
      {/* Starfield Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-gray-900 to-slate-800"></div>

      {/* Constellation Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full relative">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-teal-400 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-teal-300 rounded-full animate-ping"></div>
          <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-blue-300 rounded-full animate-pulse"></div>

          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <line x1="25" y1="25" x2="33" y2="33" stroke="rgba(20, 184, 166, 0.2)" strokeWidth="0.1"/>
            <line x1="33" y1="33" x2="25" y2="75" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="0.1"/>
            <line x1="25" y1="75" x2="75" y2="67" stroke="rgba(147, 51, 234, 0.2)" strokeWidth="0.1"/>
          </svg>
        </div>
      </div>

      {/* Glowing Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-32 h-32 bg-teal-500/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl animate-bounce"></div>
      </div>

      <div className="relative z-10">
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
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
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
            <CTAButton className="w-full" href="/purchase">
              <FaArrowRight className="w-4 h-4" />
              <span>{"Join Their Success - ฿6,900"}</span>
            </CTAButton>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;