import React from 'react';
import { FaStar } from 'react-icons/fa';

interface Testimonial {
  name: string;
  role: string;
  rating: number;
  comment: string;
  avatar: string;
  result: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => (
  <div className="bg-slate-800 rounded-xl p-8 shadow-lg text-white border border-slate-700 hover:border-teal-500 transition-all duration-300">
    <div className="flex items-center mb-4">
      <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl flex items-center justify-center text-2xl mr-4 border border-teal-500">
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
);

export default TestimonialCard;