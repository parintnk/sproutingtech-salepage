import React from 'react';
import { FaClock } from 'react-icons/fa';

interface CountdownTimerProps {
  timeLeft: { hours: number; minutes: number; seconds: number };
  title: string;
  description?: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ timeLeft, title, description }) => (
  <div className="bg-slate-800 border border-teal-600 rounded-xl p-6 mb-8 max-w-2xl mx-auto">
    <div className="flex items-center justify-center gap-2 mb-4">
      <FaClock className="w-5 h-5 text-teal-400" />
      <p className="font-semibold text-lg text-white text-center">{title}</p>
    </div>
    <div className="flex justify-center gap-4 mt-4">
      {[
        { value: timeLeft.hours, label: "Hours" },
        { value: timeLeft.minutes, label: "Minutes" },
        { value: timeLeft.seconds, label: "Seconds" }
      ].map(({ value, label }) => (
        <div key={label} className="text-center">
          <div className="bg-teal-600 text-white text-2xl font-bold px-4 py-2 rounded-lg border border-teal-500 min-w-[60px]">
            {String(value).padStart(2, '0')}
          </div>
          <div className="text-xs text-slate-300 mt-1">{label}</div>
        </div>
      ))}
    </div>
    {description && (
      <p className="text-slate-300 font-semibold text-center mt-4">{description}</p>
    )}
  </div>
);

export default CountdownTimer;