import React from 'react';
import { FaRobot, FaClock, FaUser, FaCheck, FaArrowRight } from 'react-icons/fa';
import CTAButton from './CTAButton';

interface Course {
  id: number;
  title: string;
  startDate: string;
  price: number;
  students: number;
  description: string;
  features: string[];
  banner: string;
}

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => (
  <div className="group relative bg-gradient-to-br from-slate-800/80 via-slate-700/60 to-slate-900/90 backdrop-blur-sm rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 overflow-hidden border border-slate-600/50 hover:border-gradient-to-r hover:from-purple-400 hover:via-teal-400 hover:to-cyan-400 hover:border-opacity-60 transform hover:-translate-y-2 hover:scale-[1.02]">
    {/* Animated gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-teal-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

    {/* Floating orbs background */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-radial from-purple-400/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-radial from-teal-400/15 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100"></div>
    </div>

    <div className="relative h-48 bg-gradient-to-br from-purple-900/40 via-slate-800/60 to-teal-900/40 flex items-center justify-center overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-teal-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        <div className="absolute top-4 left-4 w-1 h-1 bg-purple-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-8 right-8 w-1 h-1 bg-teal-400 rounded-full opacity-60 animate-pulse delay-300"></div>
        <div className="absolute bottom-8 left-8 w-1 h-1 bg-cyan-400 rounded-full opacity-60 animate-pulse delay-700"></div>
      </div>

      <div className="relative text-white text-center z-10">
        <div className="relative">
          <FaRobot className="w-16 h-16 mx-auto mb-4 text-teal-400 drop-shadow-lg group-hover:text-purple-300 group-hover:scale-110 transition-all duration-500" />
          <div className="absolute inset-0 w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-400 to-teal-400 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
        </div>
        <h3 className="text-2xl font-bold bg-gradient-to-r from-white via-slate-100 to-teal-200 bg-clip-text text-transparent">{course.title}</h3>
      </div>

      <div className="absolute top-4 right-4 bg-white text-slate-900 text-xs font-bold px-3 py-1 rounded-full border-2 border-white/90 shadow-xl backdrop-blur-sm group-hover:shadow-white/50 group-hover:scale-105 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-50">
        <span className="relative z-10">{course.students + " seats left"}</span>
        <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>

    <div className="relative p-6 bg-gradient-to-b from-slate-800/40 to-slate-900/60 backdrop-blur-sm">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-teal-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative mb-4">
        <h3 className="text-xl font-bold bg-gradient-to-r from-white via-purple-100 to-teal-100 bg-clip-text text-transparent mb-2">{course.title}</h3>
        <p className="text-slate-300/90 mb-4 leading-relaxed">{course.description}</p>

        <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
          <div className="flex items-center gap-1 bg-slate-700/50 px-2 py-1 rounded-lg backdrop-blur-sm">
            <FaClock className="w-4 h-4 text-purple-400" />
            <span>{course.startDate}</span>
          </div>
          <div className="flex items-center gap-1 bg-slate-700/50 px-2 py-1 rounded-lg backdrop-blur-sm">
            <FaUser className="w-4 h-4 text-teal-400" />
            <span>{course.students} participants</span>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold bg-gradient-to-r from-white to-teal-200 bg-clip-text text-transparent mb-3">{"What You'll Learn:"}</h4>
          <div className="space-y-2">
            {course.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 group/item hover:bg-slate-700/30 rounded-lg p-2 transition-all duration-300">
                <div className="relative">
                  <FaCheck className="w-4 h-4 text-white flex-shrink-0 group-hover/item:text-teal-200 transition-colors duration-300 drop-shadow-lg" />
                  <div className="absolute inset-0 w-4 h-4 bg-white rounded-full blur-md opacity-0 group-hover/item:opacity-40 transition-opacity duration-300"></div>
                </div>
                <span className="text-sm text-slate-300 group-hover/item:text-white transition-colors duration-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative border-t border-gradient-to-r from-purple-500/30 via-slate-600 to-teal-500/30 pt-6">
        <div className="flex items-center justify-between mb-4">
          <div className="relative">
            <div className="text-2xl font-bold text-white drop-shadow-lg">
              {"฿" + course.price.toLocaleString()}
            </div>
            <div className="text-sm text-slate-400">{"Per program"}</div>
            <div className="absolute -inset-2 bg-white/10 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <div className="text-right bg-slate-700/30 backdrop-blur-sm px-3 py-2 rounded-lg border border-slate-600/50">
            <div className="text-sm text-slate-400">{"Starts"}</div>
            <div className="font-semibold text-white">{course.startDate}</div>
          </div>
        </div>

        <div className="relative">
          <CTAButton className="w-full group-hover:shadow-2xl group-hover:shadow-purple-500/25" href="/purchase">
            <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            <span>{"Enroll Now"}</span>
          </CTAButton>
        </div>
      </div>
    </div>
  </div>
);

export default CourseCard;