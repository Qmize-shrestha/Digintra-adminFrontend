import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Users, FileText, Activity, Layers, CheckCircle, Clock, Eye, Edit } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [statsData, setStatsData] = useState({
    totalUsers: 0,
    activeUsers: 0,
    totalBlogs: 0,
    publishedBlogs: 0,
    totalCategories: 0,
    recentBlogs: [],
    recentUsers: [],
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
            recentBlogs: data.data.recentBlogs || [],
            recentUsers: data.data.recentUsers || [],
          });
        }
      } catch (error) {
        console.error("Failed to fetch admin stats:", error);
        toast.error("Failed to load dashboard statistics.");
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
      shadow: 'shadow-blue-500/30',
      link: '/admin/users'
    },
    {
      name: 'Total Blogs',
      value: statsData.totalBlogs,
      icon: <FileText size={28} className="text-white" />,
      color: 'from-orange-500 to-orange-600',
      shadow: 'shadow-orange-500/30',
      link: '/admin/blogs'
    },
    {
      name: 'Published Blogs',
      value: statsData.publishedBlogs,
      icon: <CheckCircle size={28} className="text-white" />,
      color: 'from-purple-500 to-purple-600',
      shadow: 'shadow-purple-500/30',
      link: '/admin/blogs'
    },
    {
      name: 'Categories',
      value: statsData.totalCategories,
      icon: <Layers size={28} className="text-white" />,
      color: 'from-pink-500 to-pink-600',
      shadow: 'shadow-pink-500/30',
      link: '/admin/categories'
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.name}
              variants={itemVariants}
              onClick={() => navigate(stat.link)}
              className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{stat.name}</p>
                  <h3 className="text-3xl font-black text-slate-800 mt-2">
                    {stat.value.toLocaleString()}
                  </h3>
                </div>
                <div className={`p-3.5 rounded-xl bg-gradient-to-br ${stat.color} ${stat.shadow} shadow-lg transform group-hover:-translate-y-1 transition-transform duration-300`}>
                  {stat.icon}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Recent Activity Sections */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8"
      >
        {/* Recent Blogs Table */}
        <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-xl font-bold text-slate-800 tracking-tight">Recent Blogs</h3>
              <p className="text-sm text-slate-500 mt-1">Latest blogs published across the platform</p>
            </div>
            <Link to="/admin/blogs" className="text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors flex items-center gap-1">
              View All &rarr;
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-xs font-semibold text-slate-400 uppercase border-b border-slate-100">
                  <th className="py-3 px-4">Blog Title</th>
                  <th className="py-3 px-4">Author</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {statsData.recentBlogs.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="py-8 text-center text-slate-400">No recent blogs found.</td>
                  </tr>
                ) : (
                  statsData.recentBlogs.map((blog) => (
                    <tr key={blog._id} className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          {blog.featuredImage || blog.coverImage ? (
                            <img src={blog.featuredImage || blog.coverImage} alt="Cover" className="w-10 h-10 rounded-md object-cover flex-shrink-0" />
                          ) : (
                            <div className="w-10 h-10 rounded-md bg-slate-100 flex items-center justify-center flex-shrink-0">
                              <FileText size={20} className="text-slate-400" />
                            </div>
                          )}
                          <div>
                            <p className="font-medium text-slate-800 line-clamp-1">{blog.title}</p>
                            <p className="text-xs text-slate-500 line-clamp-1">https://digintra.com/blog/{blog.slug || blog._id}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-slate-600">
                        {blog.author?.name || '----'}
                      </td>
                      <td className="py-3 px-4">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${blog.status === 'published'
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-amber-100 text-amber-800'
                          }`}>
                          {blog.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Link to={`/blog/${blog.slug}`} target="_blank" className="p-1.5 text-slate-400 hover:text-orange-600 transition-colors" title="View live blog">
                            <Eye size={16} />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Users Table */}
        <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-xl font-bold text-slate-800 tracking-tight">Recently Joined Users</h3>
              <p className="text-sm text-slate-500 mt-1">Newest members of the platform</p>
            </div>
            <Link to="/admin/users" className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1">
              View All &rarr;
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-xs font-semibold text-slate-400 uppercase border-b border-slate-100">
                  <th className="py-3 px-4">User</th>
                  <th className="py-3 px-4">Role</th>
                  <th className="py-3 px-4 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {statsData.recentUsers.length === 0 ? (
                  <tr>
                    <td colSpan="3" className="py-8 text-center text-slate-400">No recent users found.</td>
                  </tr>
                ) : (
                  statsData.recentUsers.map((user) => (
                    <tr key={user._id} className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                            {user.name.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <p className="font-medium text-slate-800">{user.name}</p>
                            <p className="text-xs text-slate-500">{user.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-slate-600 capitalize">
                        {user.role}
                      </td>
                      <td className="py-3 px-4 text-right">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${user.isOnline
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-slate-100 text-slate-800'
                          }`}>
                          {user.isOnline ? 'Online' : 'Offline'}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
