import React from 'react';
import { FaTrophy, FaChartBar, FaCheck, FaClock } from 'react-icons/fa';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeaturesSectionProps {
  features: Feature[];
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ features }) => {
  return (
    <section className="py-20 px-4 bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <FaTrophy className="w-8 h-8 text-teal-400" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              {"Why Choose Our Platform?"}
            </h2>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12">
            {"We don't just teach techniques - we develop strategic thinking through live interactive sessions, ensuring you master fundamentals and apply them in real-world scenarios."}
          </p>

          {/* Professional Comparison Cards */}
          <div className="mb-12">
            <div className="flex items-center justify-center gap-3 mb-8">
              <FaChartBar className="w-6 h-6 text-teal-400" />
              <h3 className="text-xl sm:text-2xl font-bold text-white text-center">{"Platform Comparison"}</h3>
            </div>

            {/* Desktop Table - Hidden on Mobile */}
            <div className="hidden lg:block bg-slate-900 border border-slate-700 rounded-xl shadow-lg p-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-slate-700">
                      <th className="text-left py-4 px-6 font-semibold text-slate-300">Factor</th>
                      <th className="text-center py-4 px-6 font-semibold text-slate-400">Generic Courses</th>
                      <th className="text-center py-4 px-6 font-semibold text-white bg-teal-600 rounded-t-lg">Our Platform</th>
                      <th className="text-center py-4 px-6 font-semibold text-slate-400">Self-Learning</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-700">
                      <td className="py-4 px-6 font-medium text-slate-300">Learning Outcome</td>
                      <td className="py-4 px-6 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                          <span className="text-sm text-slate-400">Theory Only</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-center bg-teal-600/20">
                        <div className="flex items-center justify-center gap-2">
                          <FaCheck className="w-4 h-4 text-teal-400" />
                          <span className="text-sm font-medium text-white">Immediate Implementation</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                          <span className="text-sm text-slate-400">Fragmented Knowledge</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-slate-700">
                      <td className="py-4 px-6 font-medium text-slate-300">Real Projects</td>
                      <td className="py-4 px-6 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                          <span className="text-sm text-slate-400">Fictional Examples</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-center bg-teal-600/20">
                        <div className="flex items-center justify-center gap-2">
                          <FaCheck className="w-4 h-4 text-teal-400" />
                          <span className="text-sm font-medium text-white">Industry Case Studies</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                          <span className="text-sm text-slate-400">No Guidance</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-slate-700">
                      <td className="py-4 px-6 font-medium text-slate-300">Time to Proficiency</td>
                      <td className="py-4 px-6 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <FaClock className="w-4 h-4 text-red-400" />
                          <span className="text-sm text-slate-400">2-3 months</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-center bg-teal-600/20">
                        <div className="flex items-center justify-center gap-2">
                          <FaClock className="w-4 h-4 text-teal-400" />
                          <span className="text-sm font-medium text-white">30 days</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <FaClock className="w-4 h-4 text-yellow-400" />
                          <span className="text-sm text-slate-400">6-12 months</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 font-medium text-slate-300">Investment</td>
                      <td className="py-4 px-6 text-center">
                        <span className="text-lg font-bold text-red-400">฿15,000-50,000</span>
                      </td>
                      <td className="py-4 px-6 text-center bg-teal-600/20">
                        <span className="text-lg font-bold text-teal-400">฿6,900</span>
                        <div className="text-xs text-slate-400 mt-1">Professional Value</div>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <span className="text-sm text-slate-400">Free but Time Costly</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile Cards - Visible on Mobile and Tablet */}
            <div className="lg:hidden space-y-4 px-4 sm:px-0">
              {/* Our Platform - Featured */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl p-4 sm:p-6 relative border border-teal-500">
                <div className="absolute top-2 right-2 bg-blue-400 text-slate-900 text-xs font-bold px-2 py-1 rounded-lg">
                  {"RECOMMENDED"}
                </div>
                <h4 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2">
                  <FaTrophy className="w-5 h-5 text-teal-300" />
                  {"Our Platform"}
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <FaCheck className="w-4 h-4 text-teal-300" />
                    <span className="text-sm sm:text-base">Immediate Implementation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheck className="w-4 h-4 text-teal-300" />
                    <span className="text-sm sm:text-base">Industry Case Studies</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaClock className="w-4 h-4 text-teal-300" />
                    <span className="text-sm sm:text-base">30 days</span>
                  </div>
                  <div className="pt-2 border-t border-white/20">
                    <div className="text-2xl sm:text-3xl font-bold">฿6,900</div>
                    <div className="text-xs sm:text-sm text-blue-200">Professional Value</div>
                  </div>
                </div>
              </div>

              {/* Other Options */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-slate-900 border border-slate-700 rounded-xl p-4 sm:p-6">
                  <h4 className="text-base sm:text-lg font-bold mb-4 text-slate-300">Generic Courses</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <span className="text-xs sm:text-sm text-slate-400">Theory Only</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <span className="text-xs sm:text-sm text-slate-400">Fictional Examples</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaClock className="w-3 h-3 text-red-400" />
                      <span className="text-xs sm:text-sm text-slate-400">2-3 months</span>
                    </div>
                    <div className="pt-2 border-t border-slate-700">
                      <div className="text-lg sm:text-xl font-bold text-red-400">฿15,000-50,000</div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900 border border-slate-700 rounded-xl p-4 sm:p-6">
                  <h4 className="text-base sm:text-lg font-bold mb-4 text-slate-300">Self-Learning</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <span className="text-xs sm:text-sm text-slate-400">Fragmented Knowledge</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <span className="text-xs sm:text-sm text-slate-400">No Guidance</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaClock className="w-3 h-3 text-yellow-400" />
                      <span className="text-xs sm:text-sm text-slate-400">6-12 months</span>
                    </div>
                    <div className="pt-2 border-t border-slate-700">
                      <div className="text-lg sm:text-xl font-bold text-slate-400">Free</div>
                      <div className="text-xs text-slate-500">but Time Costly</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-slate-900 border border-slate-700 hover:border-teal-500"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-600 text-white rounded-xl mb-4 border border-teal-500">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;