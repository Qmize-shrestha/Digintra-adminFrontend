import React, { useState, useEffect } from 'react';
import { FileText, Folder, Layers, Plus, Clock, CheckCircle, Eye, Edit } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';

export default function EditorDashboard() {
  const [statsData, setStatsData] = useState({
    totalBlogs: 0,
    publishedBlogs: 0,
    draftBlogs: 0,
    totalCategories: 0,
    totalSubCategories: 0,
  });
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:5000/api/admin/editor-stats", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        if (data.success) {
          setStatsData({
            totalBlogs: data.data.blogs.total || 0,
            publishedBlogs: data.data.blogs.published || 0,
            draftBlogs: data.data.blogs.draft || 0,
            totalCategories: data.data.categories.total || 0,
            totalSubCategories: data.data.subCategories.total || 0,
          });
          setRecentBlogs(data.data.recentBlogs || []);
        }
      } catch (error) {
        console.error("Failed to fetch editor stats:", error);
        toast.error("Failed to load dashboard statistics.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchStats();
  }, []);

  const stats = [
    {
      name: 'My Total Blogs',
      value: statsData.totalBlogs,
      icon: <FileText size={28} className="text-white" />,
      color: 'from-emerald-500 to-emerald-600',
      shadow: 'shadow-emerald-500/30',
    },
    {
      name: 'Published Blog',
      value: statsData.publishedBlogs,
      icon: <CheckCircle size={28} className="text-white" />,
      color: 'from-blue-500 to-blue-600',
      shadow: 'shadow-blue-500/30',
    },
    {
      name: 'Drafts',
      value: statsData.draftBlogs,
      icon: <Clock size={28} className="text-white" />,
      color: 'from-amber-500 to-amber-600',
      shadow: 'shadow-amber-500/30',
    },
    {
      name: 'Available Categories',
      value: statsData.totalCategories,
      icon: <Folder size={28} className="text-white" />,
      color: 'from-purple-500 to-purple-600',
      shadow: 'shadow-purple-500/30',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{stat.name}</p>
                <h3 className="text-3xl font-black text-slate-800 mt-2">
                  {isLoading ? "..." : stat.value}
                </h3>
              </div>
              <div className={`p-3.5 rounded-xl bg-gradient-to-br ${stat.color} ${stat.shadow} shadow-lg`}>
                {stat.icon}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent Posts Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 space-y-4">
        <div className="flex justify-between items-center pb-3 border-b border-slate-100">
          <div>
            <h3 className="text-lg font-bold text-slate-800">My Recent Articles</h3>
            <p className="text-xs text-slate-500 mt-0.5">Recently edited content authored by you</p>
          </div>
          <Link
            to="/editor/blogs"
            className="text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
          >
            View All →
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-xs font-semibold text-slate-400 uppercase border-b border-slate-100">
                <th className="py-3 px-4">Blog Title</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Subcategory</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {isLoading ? (
                <tr>
                  <td colSpan="5" className="py-8 text-center text-slate-400">Loading articles...</td>
                </tr>
              ) : recentBlogs.length === 0 ? (
                <tr>
                  <td colSpan="5" className="py-8 text-center text-slate-400">
                    No articles published yet. Click "Write New Blog" to get started!
                  </td>
                </tr>
              ) : (
                recentBlogs.map((blog) => (
                  <tr key={blog._id} className=" hover:bg-slate-50 transition-colors">
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
                      {blog.category?.name || '-----'}
                    </td>
                    <td className="py-3 px-4 text-slate-600">
                      {blog.subCategory?.name || '-----'}
                    </td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${blog.status === 'published'
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-amber-100 text-amber-800'
                        }`}>
                        {blog.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-slate-500 text-xs whitespace-nowrap">
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          to={`/blog/${blog.slug}`}
                          target="_blank"
                          className="p-1.5 text-slate-400 hover:text-emerald-600 transition-colors"
                          title="View Blog"
                        >
                          <Eye size={16} />
                        </Link>
                        <Link
                          to={`/editor/blogs/edit/${blog._id}`}
                          className="p-1.5 text-slate-400 hover:text-emerald-600 transition-colors"
                          title="Edit Blog"
                        >
                          <Edit size={16} />
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
    </div>
  );
}
