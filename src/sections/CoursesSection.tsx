import React from 'react';
import { FaTrophy } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import CourseCard from '@/components/CourseCard';
import CTAButton from '@/components/CTAButton';
import { COURSES } from '@/constants/data';

const CoursesSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gray-900">
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
    </section>
  );
};

export default CoursesSection;