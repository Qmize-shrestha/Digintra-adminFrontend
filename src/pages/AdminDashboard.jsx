import React, { useState, useEffect } from 'react';
import { Users, FileText, Activity, Layers, CheckCircle, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AdminDashboard() {
  const [statsData, setStatsData] = useState({
    totalUsers: 0,
    activeUsers: 0,
    totalBlogs: 0,
    publishedBlogs: 0,
    totalCategories: 0,
  });

  const [isLoading, setIsLoading] = useState(true);

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
            totalUsers: data.data.users.total - 1 || 0,
            activeUsers: data.data.users.active || 0,
            totalBlogs: data.data.blogs.total || 0,
            publishedBlogs: data.data.blogs.published || 0,
            totalCategories: data.data.categories.total || 0,
          });
        }
      } catch (error) {
        console.error("Failed to fetch admin stats:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchStats();
  }, []);

  const stats = [
    {
      name: 'Total Users',
      value: statsData.totalUsers,
      icon: <Users size={28} className="text-white" />,
      color: 'from-blue-500 to-blue-600',
      shadow: 'shadow-blue-500/30'
    },
    {
      name: 'Active Sessions',
      value: statsData.activeUsers,
      icon: <Activity size={28} className="text-white" />,
      color: 'from-emerald-500 to-emerald-600',
      shadow: 'shadow-emerald-500/30'
    },
    {
      name: 'Total Blogs',
      value: statsData.totalBlogs,
      icon: <FileText size={28} className="text-white" />,
      color: 'from-orange-500 to-orange-600',
      shadow: 'shadow-orange-500/30'
    },
    {
      name: 'Published Blogs',
      value: statsData.publishedBlogs,
      icon: <CheckCircle size={28} className="text-white" />,
      color: 'from-purple-500 to-purple-600',
      shadow: 'shadow-purple-500/30'
    },
    {
      name: 'Categories',
      value: statsData.totalCategories,
      icon: <Layers size={28} className="text-white" />,
      color: 'from-pink-500 to-pink-600',
      shadow: 'shadow-pink-500/30'
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <div className="space-y-8 p-4">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight">Dashboard Overview</h2>
          <p className="text-slate-500 mt-1">Welcome back! Here is what's happening with your platform today.</p>
        </div>

      </div>

      {/* Stats Grid */}
      {isLoading ? (
        <div className="flex items-center justify-center h-64">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.name}
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 relative overflow-hidden group hover:shadow-xl transition-all duration-300 border border-slate-100"
            >
              {/* Decorative Background Blob */}
              <div className={`absolute -right-6 -top-6 w-24 h-24 bg-gradient-to-br ${stat.color} rounded-full opacity-10 group-hover:scale-150 transition-transform duration-500 ease-out`}></div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg ${stat.shadow} transform group-hover:-translate-y-1 transition-transform duration-300`}>
                    {stat.icon}
                  </div>
                </div>

                <div>
                  <h3 className="text-4xl font-black text-slate-800 tracking-tight">{stat.value.toLocaleString()}</h3>
                  <p className="text-sm font-semibold text-slate-500 mt-1 uppercase tracking-wider">{stat.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Quick Actions / Recent Activity Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8"
      >
        {/* Welcome Banner */}


        {/* System Status Mini-card */}
        {/* <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 to-emerald-500"></div>
          <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            System Status
          </h3>

          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-semibold text-slate-600">Database Connection</span>
                <span className="text-emerald-500 font-bold">Stable</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div className="bg-emerald-500 h-2 rounded-full w-full"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-semibold text-slate-600">API Latency</span>
                <span className="text-blue-500 font-bold">24ms</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full w-[15%]"></div>
              </div>
            </div>
          </div>
        </div> */}
      </motion.div>
    </div>
  );
}
