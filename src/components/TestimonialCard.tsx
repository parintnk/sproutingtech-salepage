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
  <div className="group relative bg-gradient-to-br from-slate-800/70 via-slate-700/50 to-slate-900/80 backdrop-blur-md rounded-2xl p-8 shadow-2xl text-white border border-slate-600/40 hover:border-gradient-to-r hover:from-purple-400/60 hover:via-teal-400/60 hover:to-cyan-400/60 transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02] overflow-hidden">
    {/* Animated background overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-teal-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

    {/* Floating orbs */}
    <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-radial from-purple-400/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
    <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-radial from-teal-400/15 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200"></div>

    <div className="relative flex items-center mb-6">
      <div className="relative w-16 h-16 bg-white text-slate-900 rounded-2xl flex items-center justify-center text-2xl mr-4 border-2 border-white shadow-xl group-hover:shadow-white/50 group-hover:scale-110 transition-all duration-500">
        {testimonial.avatar}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-slate-100/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute -inset-1 bg-white rounded-2xl blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
      </div>
      <div className="flex-1">
        <h4 className="font-semibold text-lg bg-gradient-to-r from-white via-purple-100 to-teal-100 bg-clip-text text-transparent">{testimonial.name}</h4>
        <p className="text-sm text-slate-400/90 mb-2">{testimonial.role}</p>
        <div className="relative bg-white text-slate-900 px-3 py-1 rounded-full text-xs font-bold inline-block border-2 border-white shadow-lg group-hover:shadow-white/50 group-hover:scale-105 transition-all duration-300">
          {testimonial.result}
          <div className="absolute inset-0 bg-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
    </div>

    <div className="relative flex mb-6">
      {[...Array(testimonial.rating)].map((_, i) => (
        <div key={i} className="relative">
          <FaStar className="w-5 h-5 text-yellow-400 drop-shadow-lg group-hover:text-yellow-300 group-hover:scale-110 transition-all duration-300" style={{transitionDelay: `${i * 50}ms`}} />
          <div className="absolute inset-0 w-5 h-5 bg-yellow-400 rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-500" style={{transitionDelay: `${i * 50}ms`}}></div>
        </div>
      ))}
    </div>

    <p className="relative text-slate-300/90 italic leading-relaxed mb-6 group-hover:text-white transition-colors duration-500">
      <span className="text-4xl text-purple-400/40 absolute -top-2 -left-2">"</span>
      {testimonial.comment}
      <span className="text-4xl text-teal-400/40 absolute -bottom-4 -right-2">"</span>
    </p>

    <div className="relative mt-6 pt-6 border-t border-gradient-to-r from-purple-500/30 via-slate-600/50 to-teal-500/30">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-white rounded-full animate-pulse drop-shadow-md"></div>
        <span className="text-white font-semibold text-sm drop-shadow-lg">{"✅ Results within 30 days"}</span>
        <div className="absolute -inset-1 bg-white/10 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </div>
  </div>
);

export default TestimonialCard;
