"use client";
import React, { useState, useEffect } from 'react';
import { FaUser, FaPhone, FaEnvelope, FaGraduationCap, FaImage, FaCheck, FaTimes, FaClock, FaEye, FaFilter, FaDownload } from 'react-icons/fa';
import { supabase, type Enrollment } from '@/lib/supabase';

const AdminDashboard: React.FC = () => {
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [allEnrollments, setAllEnrollments] = useState<Enrollment[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'pending' | 'confirmed' | 'rejected'>('all');
  const [courseFilter, setCourseFilter] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    fetchEnrollments();
  }, [filter, courseFilter]);

  useEffect(() => {
    fetchAllEnrollments();
  }, []);

  const fetchAllEnrollments = async () => {
    try {
      const { data, error } = await supabase
        .from('enrollments')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching all enrollments:', error);
        return;
      }

      setAllEnrollments(data || []);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const getUniqueCourses = () => {
    const courses = allEnrollments.map(enrollment => enrollment.course_title);
    return [...new Set(courses)].filter(course => course);
  };

  const fetchEnrollments = async () => {
    setLoading(true);
    try {
      let query = supabase
        .from('enrollments')
        .select('*')
        .order('created_at', { ascending: false });

      if (filter !== 'all') {
        query = query.eq('status', filter);
      }

      if (courseFilter !== 'all') {
        query = query.eq('course_title', courseFilter);
      }

      const { data, error } = await query;

      if (error) {
        console.error('Error fetching enrollments:', error);
        return;
      }

      setEnrollments(data || []);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateEnrollmentStatus = async (id: string, status: 'confirmed' | 'rejected') => {
    try {
      const { error } = await supabase
        .from('enrollments')
        .update({
          status,
          updated_at: new Date().toISOString()
        })
        .eq('id', id);

      if (error) {
        console.error('Error updating status:', error);
        alert('เกิดข้อผิดพลาดในการอัพเดทสถานะ');
        return;
      }

      // Refresh the list
      fetchEnrollments();
      alert(`อัพเดทสถานะเป็น ${status === 'confirmed' ? 'อนุมัติ' : 'ปฏิเสธ'} เรียบร้อยแล้ว`);
    } catch (error) {
      console.error('Error:', error);
      alert('เกิดข้อผิดพลาดในการอัพเดทสถานะ');
    }
  };

  const exportToCSV = () => {
    const headers = ['ชื่อ-นามสกุล', 'เบอร์โทร', 'อีเมล', 'คอร์ส', 'สถานะ', 'วันที่สมัคร'];
    const csvData = enrollments.map(enrollment => [
      enrollment.full_name,
      enrollment.phone,
      enrollment.email,
      enrollment.course_title,
      enrollment.status === 'pending' ? 'รอดำเนินการ' :
      enrollment.status === 'confirmed' ? 'อนุมัติ' : 'ปฏิเสธ',
      new Date(enrollment.created_at!).toLocaleDateString('th-TH')
    ]);

    const csvContent = [headers, ...csvData]
      .map(row => row.map(field => `"${field}"`).join(','))
      .join('\n');

    const blob = new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `enrollments_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'text-yellow-400 bg-yellow-400/20';
      case 'confirmed': return 'text-green-400 bg-green-400/20';
      case 'rejected': return 'text-red-400 bg-red-400/20';
      default: return 'text-slate-400 bg-slate-400/20';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending': return 'รอดำเนินการ';
      case 'confirmed': return 'อนุมัติแล้ว';
      case 'rejected': return 'ปฏิเสธ';
      default: return status;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
            <p className="text-slate-300">จัดการข้อมูลผู้สมัครเรียน AI Automation</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            {/* Status Filter */}
            <div className="flex items-center gap-2">
              <FaFilter className="w-4 h-4 text-slate-400" />
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value as any)}
                className="bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white text-sm focus:ring-2 focus:ring-teal-500"
              >
                <option value="all">สถานะทั้งหมด</option>
                <option value="pending">รอดำเนินการ</option>
                <option value="confirmed">อนุมัติแล้ว</option>
                <option value="rejected">ปฏิเสธ</option>
              </select>
            </div>

            {/* Course Filter */}
            <div className="flex items-center gap-2">
              <FaGraduationCap className="w-4 h-4 text-slate-400" />
              <select
                value={courseFilter}
                onChange={(e) => setCourseFilter(e.target.value)}
                className="bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white text-sm focus:ring-2 focus:ring-teal-500"
              >
                <option value="all">คอร์สทั้งหมด</option>
                {getUniqueCourses().map((course) => (
                  <option key={course} value={course}>
                    {course}
                  </option>
                ))}
              </select>
            </div>

            {/* Export Button */}
            <button
              onClick={exportToCSV}
              className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-all duration-300 text-sm"
            >
              <FaDownload className="w-4 h-4" />
              Export CSV
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">ทั้งหมด</p>
                <p className="text-2xl font-bold text-white">{enrollments.length}</p>
              </div>
              <FaUser className="w-8 h-8 text-slate-400" />
            </div>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">รอดำเนินการ</p>
                <p className="text-2xl font-bold text-yellow-400">
                  {enrollments.filter(e => e.status === 'pending').length}
                </p>
              </div>
              <FaClock className="w-8 h-8 text-yellow-400" />
            </div>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">อนุมัติแล้ว</p>
                <p className="text-2xl font-bold text-green-400">
                  {enrollments.filter(e => e.status === 'confirmed').length}
                </p>
              </div>
              <FaCheck className="w-8 h-8 text-green-400" />
            </div>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">ปฏิเสธ</p>
                <p className="text-2xl font-bold text-red-400">
                  {enrollments.filter(e => e.status === 'rejected').length}
                </p>
              </div>
              <FaTimes className="w-8 h-8 text-red-400" />
            </div>
          </div>
        </div>

        {/* Enrollments Table */}
        <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
          <div className="overflow-x-auto">
            {loading ? (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-400"></div>
                <span className="ml-3 text-slate-300">กำลังโหลดข้อมูล...</span>
              </div>
            ) : enrollments.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-slate-400">ไม่พบข้อมูลผู้สมัครเรียน</p>
              </div>
            ) : (
              <table className="w-full">
                <thead className="bg-slate-700">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                      ผู้สมัคร
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                      ติดต่อ
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                      คอร์ส
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                      สลิป
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                      สถานะ
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                      วันที่สมัคร
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                      การดำเนินการ
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  {enrollments.map((enrollment) => (
                    <tr key={enrollment.id} className="hover:bg-slate-700/50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <FaUser className="w-4 h-4 text-slate-400 mr-3" />
                          <div>
                            <div className="text-sm font-medium text-white">
                              {enrollment.full_name}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4">
                        <div className="space-y-1">
                          <div className="flex items-center text-sm text-slate-300">
                            <FaPhone className="w-3 h-3 mr-2" />
                            {enrollment.phone}
                          </div>
                          <div className="flex items-center text-sm text-slate-300">
                            <FaEnvelope className="w-3 h-3 mr-2" />
                            {enrollment.email}
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <FaGraduationCap className="w-4 h-4 text-teal-400 mr-2" />
                          <span className="text-sm text-white">{enrollment.course_title}</span>
                        </div>
                      </td>

                      <td className="px-6 py-4">
                        {enrollment.payment_slip_url ? (
                          <button
                            onClick={() => setSelectedImage(enrollment.payment_slip_url!)}
                            className="flex items-center gap-2 text-teal-400 hover:text-teal-300 text-sm"
                          >
                            <FaImage className="w-4 h-4" />
                            ดูสลิป
                          </button>
                        ) : (
                          <span className="text-slate-500 text-sm">ไม่มีสลิป</span>
                        )}
                      </td>

                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(enrollment.status)}`}>
                          {getStatusText(enrollment.status)}
                        </span>
                      </td>

                      <td className="px-6 py-4 text-sm text-slate-300">
                        {new Date(enrollment.created_at!).toLocaleString('th-TH')}
                      </td>

                      <td className="px-6 py-4">
                        {enrollment.status === 'pending' && (
                          <div className="flex gap-2">
                            <button
                              onClick={() => updateEnrollmentStatus(enrollment.id!, 'confirmed')}
                              className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-xs flex items-center gap-1"
                            >
                              <FaCheck className="w-3 h-3" />
                              อนุมัติ
                            </button>
                            <button
                              onClick={() => updateEnrollmentStatus(enrollment.id!, 'rejected')}
                              className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-xs flex items-center gap-1"
                            >
                              <FaTimes className="w-3 h-3" />
                              ปฏิเสธ
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative bg-slate-800 rounded-lg p-4 max-w-4xl max-h-full shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-3 -right-3 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 shadow-lg transition-all duration-200 z-10"
            >
              <FaTimes className="w-4 h-4" />
            </button>

            {/* Image Container */}
            <div className="relative">
              <img
                src={selectedImage}
                alt="Payment Slip"
                className="max-w-full max-h-[80vh] object-contain rounded"
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            {/* Image Title */}
            <div className="mt-3 text-center">
              <p className="text-slate-300 text-sm">หลักฐานการชำระเงิน</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
