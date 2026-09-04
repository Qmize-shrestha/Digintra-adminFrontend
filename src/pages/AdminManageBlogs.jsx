import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Edit, Trash2, Plus, Search, Eye, FileText } from 'lucide-react';
import axiosClient from '../Blog/AxiosClient';
import { toast } from 'react-hot-toast';

export default function AdminManageBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axiosClient.get('/blogs');
      setBlogs(response.data.blogs || []);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      toast.error('Failed to load blogs.');
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this blog?')) return;

    try {
      await axiosClient.delete(`/blogs/${id}`);
      toast.success('Blog deleted successfully');
      setBlogs(blogs.filter(blog => blog._id !== id));
    } catch (error) {
      console.error('Error deleting blog:', error);
      toast.error('Failed to delete blog.');
    }
  };

  const filteredBlogs = blogs.filter(blog => {
    const titleMatch = blog.title?.toLowerCase().includes(searchTerm.toLowerCase());
    const categoryName = blog.category?.name || '----';
    const categoryMatch = categoryName.toLowerCase().includes(searchTerm.toLowerCase());
    return titleMatch || categoryMatch;
  });

  const role = localStorage.getItem('role') || 'admin';
  const basePath = role === 'editor' ? '/editor' : '/admin';

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Manage Blogs</h2>
          <p className="text-sm text-slate-500 mt-1">View, edit, and manage all your blog posts.</p>
        </div>
        <Link
          to={`${basePath}/blogs/create`}
          className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors shadow-sm font-medium"
        >
          <Plus size={20} />
          <span>Create New Blog</span>
        </Link>
      </div>

      {/* Controls */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
        <div className="relative max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-slate-400" />
          </div>
          <input
            type="text"
            placeholder="Search blogs by title or category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 w-full border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 text-sm">
                <th className="px-6 py-4 font-semibold">Blog Title</th>
                <th className="px-6 py-4 font-semibold">Author</th>
                <th className="px-6 py-4 font-semibold">Category</th>
                <th className="px-6 py-4 font-semibold">Subcategory</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold">Date</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr>
                  <td colSpan="5" className="px-6 py-8 text-center text-slate-500">
                    <div className="flex justify-center items-center gap-2">
                      <div className="w-5 h-5 border-2 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
                      <span>Loading blogs...</span>
                    </div>
                  </td>
                </tr>
              ) : filteredBlogs.length === 0 ? (
                <tr>
                  <td colSpan="5" className="px-6 py-8 text-center text-slate-500">
                    No blogs found matching your search.
                  </td>
                </tr>
              ) : (
                filteredBlogs.map((blog) => (
                  <tr key={blog._id} className="hover:bg-slate-50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        {blog.featuredImage ? (
                          <img src={blog.featuredImage} alt="" className="w-10 h-10 rounded-md object-cover border border-slate-200" />
                        ) : (
                          <div className="w-10 h-10 rounded-md bg-slate-100 flex items-center justify-center border border-slate-200 text-slate-400">
                            <FileText size={20} />
                          </div>
                        )}
                        <div>
                          <p className="font-medium text-slate-800 line-clamp-1">{blog.title}</p>
                          <p className="text-xs text-slate-500 mt-0.5">{blog.slug}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      {blog.author?.name || '----'}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      {blog.category?.name || '---'}
                    </td>

                    <td className="px-6 py-4 text-sm text-slate-600">
                      {blog.subCategory?.name || '----'}
                    </td>
                    <td className="px-6 py-4">
                      {blog.status === 'published' ? (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
                          Published
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 border border-amber-200">
                          {blog.status ? blog.status.charAt(0).toUpperCase() + blog.status.slice(1) : 'Draft'}
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 whitespace-nowrap">
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <Link
                          to={`/blog/${blog.slug}`}
                          target="_blank"
                          className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                          title="View Blog"
                        >
                          <Eye size={18} />
                        </Link>
                        <Link
                          to={`${basePath}/blogs/edit/${blog._id}`}
                          className="p-1.5 text-slate-400 hover:text-orange-500 hover:bg-orange-50 rounded-md transition-colors"
                          title="Edit Blog"
                        >
                          <Edit size={18} />
                        </Link>
                        {role === 'admin' && (
                          <button
                            onClick={() => handleDelete(blog._id)}
                            className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-md transition-colors"
                            title="Delete Blog"
                          >
                            <Trash2 size={18} />
                          </button>
                        )}
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
