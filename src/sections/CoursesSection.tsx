import React from 'react';
import { FaTrophy } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import CourseCard from '@/components/CourseCard';
import CTAButton from '@/components/CTAButton';
import { COURSES } from '@/constants/data';

const CoursesSection: React.FC = () => {
  return (
    <section className="relative py-20 px-4 bg-gray-900 overflow-hidden">
      {/* Layered Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-slate-900 to-gray-800"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-teal-900/5 via-transparent to-blue-900/5"></div>

      {/* Hexagonal Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2314b8a6' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500/5 rounded-full blur-2xl animate-bounce"></div>
      </div>

      <div className="relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              {"Professional Training Programs"}
            </h2>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {"Choose the specialization that aligns with your career goals. Live online training with maximum 15 participants per cohort."}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {COURSES.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaTrophy className="w-6 h-6 text-teal-400" />
              <h3 className="text-2xl font-bold text-white">{"Multi-Program Discounts"}</h3>
            </div>
            <p className="text-slate-300 mb-6">
              {"Enroll in 2 programs: 10% discount | All 3 programs: 15% discount"}
            </p>
            <CTAButton size="large" className="mx-auto" href="/purchase">
              <HiSparkles className="w-5 h-5" />
              <span>{"View Bundle Options"}</span>
            </CTAButton>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default CoursesSection;