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
    </section>
  );
};

export default TestimonialsSection;