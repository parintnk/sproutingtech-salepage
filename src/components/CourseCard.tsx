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
  <div className="bg-slate-800 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-700 hover:border-teal-500">
    <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-600 flex items-center justify-center">
      <div className="text-white text-center">
        <FaRobot className="w-16 h-16 mx-auto mb-4 text-teal-400 opacity-70" />
        <h3 className="text-2xl font-bold">{course.title}</h3>
      </div>
      <div className="absolute top-4 right-4 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-lg border border-teal-500">
        {course.students + " seats left"}
      </div>
    </div>

    <div className="p-6">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
        <p className="text-slate-300 mb-4">{course.description}</p>

        <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
          <div className="flex items-center gap-1">
            <FaClock className="w-4 h-4" />
            <span>{course.startDate}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaUser className="w-4 h-4" />
            <span>{course.students} participants</span>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-white mb-3">{"What You'll Learn:"}</h4>
          <div className="space-y-2">
            {course.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <FaCheck className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span className="text-sm text-slate-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-slate-700 pt-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-2xl font-bold text-teal-400">
              {"฿" + course.price.toLocaleString()}
            </div>
            <div className="text-sm text-slate-400">{"Per program"}</div>
          </div>
          <div className="text-right">
            <div className="text-sm text-slate-400">{"Starts"}</div>
            <div className="font-semibold text-white">{course.startDate}</div>
          </div>
        </div>

        <CTAButton className="w-full" href="/purchase">
          <FaArrowRight className="w-4 h-4" />
          <span>{"Enroll Now"}</span>
        </CTAButton>
      </div>
    </div>
  </div>
);

export default CourseCard;