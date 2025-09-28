import React from 'react';
import { FaClock } from 'react-icons/fa';

interface CountdownTimerProps {
  timeLeft: { hours: number; minutes: number; seconds: number };
  title: string;
  description?: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ timeLeft, title, description }) => (
  <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-600/50 rounded-xl p-6 mb-8 max-w-2xl mx-auto shadow-lg">
    <div className="flex items-center justify-center gap-2 mb-6">
      <FaClock className="w-5 h-5 text-teal-400" />
      <p className="font-semibold text-lg text-white text-center">{title}</p>
    </div>

    <div className="flex justify-center gap-4 sm:gap-6 mt-4">
      {[
        { value: timeLeft.hours, label: "Hours" },
        { value: timeLeft.minutes, label: "Minutes" },
        { value: timeLeft.seconds, label: "Seconds" }
      ].map(({ value, label }) => (
        <div key={label} className="text-center">
          <div className="bg-white text-slate-900 text-2xl sm:text-3xl font-bold px-4 sm:px-5 py-3 sm:py-4 rounded-lg min-w-[60px] sm:min-w-[70px] shadow-md">
            {String(value).padStart(2, '0')}
          </div>
          <div className="text-sm text-slate-300 mt-2 font-medium">{label}</div>
        </div>
      ))}
    </div>

    {description && (
      <p className="text-slate-300 font-semibold text-center mt-4">{description}</p>
    )}
  </div>
);

export default CountdownTimer;