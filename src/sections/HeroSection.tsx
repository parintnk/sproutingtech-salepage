import React from 'react';
import { FaPlay, FaChartBar, FaClock, FaRobot, FaArrowRight, FaCertificate, FaShieldAlt, FaHeadset } from 'react-icons/fa';
import CTAButton from '@/components/CTAButton';
import CountdownTimer from '@/components/CountdownTimer';

interface HeroSectionProps {
  timeLeft: { hours: number; minutes: number; seconds: number };
}

const HeroSection: React.FC<HeroSectionProps> = ({ timeLeft }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white py-20 sm:py-24 md:py-32 px-4 mt-16">
      {/* Epic Animated Background */}
      <div className="absolute inset-0">
        {/* Multiple Gradient Layers */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-blue-900/60 to-teal-900/80"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/40 to-purple-900/60"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/30 via-transparent to-cyan-900/40"></div>
      </div>

      {/* Massive Glowing Orbs */}
      <div className="absolute inset-0">
        <div className="absolute -top-64 -left-64 w-128 h-128 bg-gradient-radial from-blue-500/20 via-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse" style={{width: '32rem', height: '32rem'}}></div>
        <div className="absolute -bottom-64 -right-64 w-128 h-128 bg-gradient-radial from-teal-500/20 via-cyan-500/10 to-transparent rounded-full blur-3xl animate-bounce" style={{width: '32rem', height: '32rem'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-purple-500/15 via-pink-500/8 to-transparent rounded-full blur-3xl animate-ping"></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-16 h-16 border-2 border-teal-400/30 rotate-45 animate-spin" style={{animationDuration: '10s'}}></div>
        <div className="absolute top-32 right-32 w-12 h-12 border-2 border-purple-400/40 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-32 w-20 h-20 border border-blue-400/30 transform rotate-12 animate-bounce" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}></div>
        <div className="absolute bottom-20 right-20 w-8 h-8 bg-cyan-400/20 rotate-45 animate-spin" style={{animationDuration: '8s'}}></div>
      </div>

      {/* Neural Network Pattern */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Network Nodes */}
          <circle cx="100" cy="100" r="3" fill="#14b8a6" className="animate-pulse" filter="url(#glow)"/>
          <circle cx="300" cy="150" r="3" fill="#8b5cf6" className="animate-pulse" filter="url(#glow)"/>
          <circle cx="500" cy="120" r="3" fill="#06b6d4" className="animate-pulse" filter="url(#glow)"/>
          <circle cx="700" cy="180" r="3" fill="#14b8a6" className="animate-pulse" filter="url(#glow)"/>
          <circle cx="150" cy="300" r="3" fill="#8b5cf6" className="animate-pulse" filter="url(#glow)"/>
          <circle cx="400" cy="350" r="3" fill="#06b6d4" className="animate-pulse" filter="url(#glow)"/>
          <circle cx="650" cy="320" r="3" fill="#14b8a6" className="animate-pulse" filter="url(#glow)"/>
          <circle cx="200" cy="500" r="3" fill="#8b5cf6" className="animate-pulse" filter="url(#glow)"/>
          <circle cx="450" cy="480" r="3" fill="#06b6d4" className="animate-pulse" filter="url(#glow)"/>
          <circle cx="600" cy="520" r="3" fill="#14b8a6" className="animate-pulse" filter="url(#glow)"/>

          {/* Connection Lines */}
          <line x1="100" y1="100" x2="300" y2="150" stroke="#14b8a6" strokeWidth="1" opacity="0.3" className="animate-pulse"/>
          <line x1="300" y1="150" x2="500" y2="120" stroke="#8b5cf6" strokeWidth="1" opacity="0.3" className="animate-pulse"/>
          <line x1="500" y1="120" x2="700" y2="180" stroke="#06b6d4" strokeWidth="1" opacity="0.3" className="animate-pulse"/>
          <line x1="150" y1="300" x2="400" y2="350" stroke="#14b8a6" strokeWidth="1" opacity="0.3" className="animate-pulse"/>
          <line x1="400" y1="350" x2="650" y2="320" stroke="#8b5cf6" strokeWidth="1" opacity="0.3" className="animate-pulse"/>
          <line x1="200" y1="500" x2="450" y2="480" stroke="#06b6d4" strokeWidth="1" opacity="0.3" className="animate-pulse"/>
          <line x1="450" y1="480" x2="600" y2="520" stroke="#14b8a6" strokeWidth="1" opacity="0.3" className="animate-pulse"/>

          {/* Vertical Connections */}
          <line x1="300" y1="150" x2="150" y2="300" stroke="#8b5cf6" strokeWidth="1" opacity="0.2" className="animate-pulse"/>
          <line x1="500" y1="120" x2="400" y2="350" stroke="#06b6d4" strokeWidth="1" opacity="0.2" className="animate-pulse"/>
          <line x1="650" y1="320" x2="450" y2="480" stroke="#14b8a6" strokeWidth="1" opacity="0.2" className="animate-pulse"/>
        </svg>
      </div>

      {/* Particle Field */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-teal-400 rounded-full animate-ping" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-emerald-400 rounded-full animate-ping" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/6 right-1/2 w-1 h-1 bg-pink-400 rounded-full animate-ping" style={{animationDelay: '5s'}}></div>
      </div>

      {/* Scanning Beams */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-teal-400/60 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400/60 to-transparent animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent animate-pulse" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-transparent via-blue-400/40 to-transparent animate-pulse" style={{animationDelay: '6s'}}></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10">
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
      </div>
    </section>
  );
};

export default HeroSection;