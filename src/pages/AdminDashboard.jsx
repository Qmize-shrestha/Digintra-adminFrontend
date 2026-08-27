import React, { useState, useEffect } from 'react';
import { Users, FileText, Activity, TrendingUp } from 'lucide-react';

export default function AdminDashboard() {
  const [statsData, setStatsData] = useState({
    totalUsers: 0,
    totalBlogs: 0,
    activeSessions: 342,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:5000/api/admin/stats", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const data = await response.json();
        if (data.success) {
          setStatsData({
            totalUsers: data.data.users.total || 0,
            totalBlogs: data.data.blogs.total || 0,
            activeSessions: data.data.users.active || 0,
          });
        }
      } catch (error) {
        console.error("Failed to fetch admin stats:", error);
      }
    };
    fetchStats();
  }, []);

  const stats = [
    { name: 'Total Users', value: statsData.totalUsers.toLocaleString(), icon: <Users size={24} className="text-blue-500" />, change: '+12%', changeType: 'positive' },
    { name: 'Total Blogs', value: statsData.totalBlogs.toLocaleString(), icon: <FileText size={24} className="text-orange-500" />, change: '+4%', changeType: 'positive' },
    { name: 'Active Sessions', value: statsData.activeSessions.toLocaleString(), icon: <Activity size={24} className="text-green-500" />, change: '-2%', changeType: 'negative' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Dashboard Overview</h2>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between hover:shadow-md transition-all duration-200 hover:-translate-y-1">
            <div className="flex items-center justify-between w-full">
              <p className="text-sm font-semibold text-gray-500">{stat.name}</p>
              <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 shadow-sm">
                {stat.icon}
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
              {/* <div className={`text-sm mt-2 font-medium flex items-center ${stat.changeType === 'positive' ? 'text-green-600' : 'text-red-500'}`}>
                {stat.changeType === 'positive' ? '↑' : '↓'} {stat.change}
                <span className="text-gray-400 font-normal ml-1">from last month</span>
              </div> */}
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Area Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6 h-96 flex flex-col">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Site Traffic Overview</h3>
          <div className="flex-1 border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center bg-gray-50">
            <p className="text-gray-400 font-medium">Chart visualization will be implemented here</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 h-96 flex flex-col">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Activity</h3>
          <div className="flex-1 border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center bg-gray-50">
            <p className="text-gray-400 font-medium">Activity feed coming soon</p>
          </div>
        </div>
      </div>
    </div>
  );
}
