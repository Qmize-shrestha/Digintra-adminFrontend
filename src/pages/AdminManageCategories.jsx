import React, { useState, useEffect } from 'react';
import { Edit, Trash2, Plus, Search, FolderTree, Folder, Layers, X, CheckCircle, AlertCircle } from 'lucide-react';
import axiosClient from '../Blog/AxiosClient';
import { toast } from 'react-toastify';

export default function AdminManageCategories() {
  const [activeTab, setActiveTab] = useState('categories'); // 'categories' or 'subcategories'
  
  // Categories State
  const [categories, setCategories] = useState([]);
  const [catLoading, setCatLoading] = useState(true);
  const [catSearch, setCatSearch] = useState('');
  const [catModalOpen, setCatModalOpen] = useState(false);
  const [catModalMode, setCatModalMode] = useState('add');
  const [catForm, setCatForm] = useState({ _id: '', name: '', slug: '', description: '', status: 'active' });

  // Subcategories State
  const [subCategories, setSubCategories] = useState([]);
  const [subLoading, setSubLoading] = useState(true);
  const [subSearch, setSubSearch] = useState('');
  const [subCategoryFilter, setSubCategoryFilter] = useState('');
  const [subModalOpen, setSubModalOpen] = useState(false);
  const [subModalMode, setSubModalMode] = useState('add');
  const [subForm, setSubForm] = useState({ _id: '', name: '', slug: '', category: '', description: '' });

  useEffect(() => {
    fetchCategories();
    fetchSubCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      setCatLoading(true);
      const response = await axiosClient.get('/categories');
      if (response.data && response.data.success) {
        setCategories(response.data.categories || []);
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
      toast.error('Failed to load categories.');
    } finally {
      setCatLoading(false);
    }
  };

  const fetchSubCategories = async () => {
    try {
      setSubLoading(true);
      const response = await axiosClient.get('/subcategories');
      if (response.data && response.data.success) {
        setSubCategories(response.data.subCategories || []);
      }
    } catch (error) {
      console.error('Error fetching subcategories:', error);
      toast.error('Failed to load subcategories.');
    } finally {
      setSubLoading(false);
    }
  };

  // ---------------- CATEGORY ACTIONS ----------------
  const openAddCategory = () => {
    setCatModalMode('add');
    setCatForm({ _id: '', name: '', slug: '', description: '', status: 'active' });
    setCatModalOpen(true);
  };

  const openEditCategory = (cat) => {
    setCatModalMode('edit');
    setCatForm({
      _id: cat._id,
      name: cat.name || '',
      slug: cat.slug || '',
      description: cat.description || '',
      status: cat.status || 'active',
    });
    setCatModalOpen(true);
  };

  const handleCategorySubmit = async (e) => {
    e.preventDefault();
    if (!catForm.name.trim()) {
      toast.error('Category name is required');
      return;
    }

    try {
      if (catModalMode === 'add') {
        const response = await axiosClient.post('/categories', catForm);
        if (response.data.success) {
          toast.success('Category created successfully');
          setCategories([...categories, response.data.category]);
          setCatModalOpen(false);
        }
      } else {
        const response = await axiosClient.put(`/categories/${catForm._id}`, catForm);
        if (response.data.success) {
          toast.success('Category updated successfully');
          setCategories(categories.map(c => c._id === catForm._id ? response.data.category : c));
          setCatModalOpen(false);
          // Refetch subcategories to reflect potential name changes
          fetchSubCategories();
        }
      }
    } catch (error) {
      console.error('Error saving category:', error);
      toast.error(error.response?.data?.message || 'Failed to save category.');
    }
  };

  const handleDeleteCategory = async (id) => {
    if (!window.confirm('Are you sure you want to delete this category?')) return;

    try {
      await axiosClient.delete(`/categories/${id}`);
      toast.success('Category deleted successfully');
      setCategories(categories.filter(c => c._id !== id));
    } catch (error) {
      console.error('Error deleting category:', error);
      toast.error(error.response?.data?.message || 'Failed to delete category.');
    }
  };

  // ---------------- SUBCATEGORY ACTIONS ----------------
  const openAddSubCategory = () => {
    setSubModalMode('add');
    setSubForm({
      _id: '',
      name: '',
      slug: '',
      category: categories.length > 0 ? categories[0]._id : '',
      description: '',
    });
    setSubModalOpen(true);
  };

  const openEditSubCategory = (sub) => {
    setSubModalMode('edit');
    setSubForm({
      _id: sub._id,
      name: sub.name || '',
      slug: sub.slug || '',
      category: typeof sub.category === 'object' && sub.category !== null ? sub.category._id : sub.category,
      description: sub.description || '',
    });
    setSubModalOpen(true);
  };

  const handleSubCategorySubmit = async (e) => {
    e.preventDefault();
    if (!subForm.name.trim() || !subForm.category) {
      toast.error('Subcategory name and parent category are required');
      return;
    }

    try {
      if (subModalMode === 'add') {
        const response = await axiosClient.post('/subcategories', subForm);
        if (response.data.success) {
          toast.success('Subcategory created successfully');
          setSubCategories([...subCategories, response.data.subCategory]);
          setSubModalOpen(false);
        }
      } else {
        const response = await axiosClient.put(`/subcategories/${subForm._id}`, subForm);
        if (response.data.success) {
          toast.success('Subcategory updated successfully');
          setSubCategories(subCategories.map(s => s._id === subForm._id ? response.data.subCategory : s));
          setSubModalOpen(false);
        }
      }
    } catch (error) {
      console.error('Error saving subcategory:', error);
      toast.error(error.response?.data?.message || 'Failed to save subcategory.');
    }
  };

  const handleDeleteSubCategory = async (id) => {
    if (!window.confirm('Are you sure you want to delete this subcategory?')) return;

    try {
      await axiosClient.delete(`/subcategories/${id}`);
      toast.success('Subcategory deleted successfully');
      setSubCategories(subCategories.filter(s => s._id !== id));
    } catch (error) {
      console.error('Error deleting subcategory:', error);
      toast.error(error.response?.data?.message || 'Failed to delete subcategory.');
    }
  };

  // Filtered lists
  const filteredCategories = categories.filter(c => 
    c.name?.toLowerCase().includes(catSearch.toLowerCase()) ||
    c.slug?.toLowerCase().includes(catSearch.toLowerCase())
  );

  const filteredSubCategories = subCategories.filter(s => {
    const nameMatch = s.name?.toLowerCase().includes(subSearch.toLowerCase());
    const slugMatch = s.slug?.toLowerCase().includes(subSearch.toLowerCase());
    const catId = typeof s.category === 'object' && s.category !== null ? s.category._id : s.category;
    const catFilterMatch = !subCategoryFilter || catId === subCategoryFilter;
    return (nameMatch || slugMatch) && catFilterMatch;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Categories & Subcategories</h2>
          <p className="text-sm text-slate-500 mt-1">Organize your blog taxonomy and content structure.</p>
        </div>
        <div className="flex items-center gap-3">
          {activeTab === 'categories' ? (
            <button
              onClick={openAddCategory}
              className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors shadow-sm font-medium"
            >
              <Plus size={18} />
              <span>Add Category</span>
            </button>
          ) : (
            <button
              onClick={openAddSubCategory}
              className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors shadow-sm font-medium"
            >
              <Plus size={18} />
              <span>Add Subcategory</span>
            </button>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 bg-white px-4 pt-2 rounded-t-xl">
        <button
          onClick={() => setActiveTab('categories')}
          className={`flex items-center gap-2 px-5 py-3 border-b-2 font-medium text-sm transition-all ${
            activeTab === 'categories'
              ? 'border-orange-500 text-orange-600 font-semibold'
              : 'border-transparent text-slate-500 hover:text-slate-700'
          }`}
        >
          <Folder size={18} />
          <span>Categories ({categories.length})</span>
        </button>
        <button
          onClick={() => setActiveTab('subcategories')}
          className={`flex items-center gap-2 px-5 py-3 border-b-2 font-medium text-sm transition-all ${
            activeTab === 'subcategories'
              ? 'border-orange-500 text-orange-600 font-semibold'
              : 'border-transparent text-slate-500 hover:text-slate-700'
          }`}
        >
          <Layers size={18} />
          <span>Subcategories ({subCategories.length})</span>
        </button>
      </div>

      {/* ======================= CATEGORIES TAB ======================= */}
      {activeTab === 'categories' && (
        <div className="space-y-4">
          {/* Search Controls */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
            <div className="relative max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-slate-400" />
              </div>
              <input
                type="text"
                placeholder="Search categories..."
                value={catSearch}
                onChange={(e) => setCatSearch(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all text-sm"
              />
            </div>
          </div>

          {/* Categories Table */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 text-sm">
                    <th className="px-6 py-4 font-semibold">Category Name</th>
                    <th className="px-6 py-4 font-semibold">Slug</th>
                    <th className="px-6 py-4 font-semibold">Blogs Count</th>
                    <th className="px-6 py-4 font-semibold">Status</th>
                    <th className="px-6 py-4 font-semibold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {catLoading ? (
                    <tr>
                      <td colSpan="5" className="px-6 py-8 text-center text-slate-500">
                        <div className="flex justify-center items-center gap-2">
                          <div className="w-5 h-5 border-2 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
                          <span>Loading categories...</span>
                        </div>
                      </td>
                    </tr>
                  ) : filteredCategories.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="px-6 py-8 text-center text-slate-500">
                        No categories found. Click "Add Category" to create one.
                      </td>
                    </tr>
                  ) : (
                    filteredCategories.map((cat) => (
                      <tr key={cat._id} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center font-bold">
                              <Folder size={16} />
                            </div>
                            <div>
                              <p className="font-semibold text-slate-800">{cat.name}</p>
                              {cat.description && (
                                <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{cat.description}</p>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-600 font-mono">
                          {cat.slug}
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-600">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                            {cat.blogCount || 0} blogs
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                            cat.status === 'active' 
                              ? 'bg-green-100 text-green-800 border border-green-200'
                              : 'bg-slate-100 text-slate-600 border border-slate-200'
                          }`}>
                            {cat.status || 'active'}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex justify-end gap-2">
                            <button
                              onClick={() => openEditCategory(cat)}
                              className="p-1.5 text-slate-400 hover:text-orange-500 hover:bg-orange-50 rounded-md transition-colors"
                              title="Edit Category"
                            >
                              <Edit size={18} />
                            </button>
                            <button
                              onClick={() => handleDeleteCategory(cat._id)}
                              className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-md transition-colors"
                              title="Delete Category"
                            >
                              <Trash2 size={18} />
                            </button>
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
      )}

      {/* ======================= SUBCATEGORIES TAB ======================= */}
      {activeTab === 'subcategories' && (
        <div className="space-y-4">
          {/* Controls: Search & Category Filter */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col sm:flex-row gap-4 justify-between items-center">
            <div className="relative w-full sm:max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-slate-400" />
              </div>
              <input
                type="text"
                placeholder="Search subcategories..."
                value={subSearch}
                onChange={(e) => setSubSearch(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all text-sm"
              />
            </div>
            <div className="w-full sm:w-auto flex items-center gap-2">
              <span className="text-xs font-medium text-slate-500 whitespace-nowrap">Filter by Parent:</span>
              <select
                value={subCategoryFilter}
                onChange={(e) => setSubCategoryFilter(e.target.value)}
                className="px-3 py-2 border border-slate-300 rounded-lg text-sm bg-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
              >
                <option value="">All Parent Categories</option>
                {categories.map((c) => (
                  <option key={c._id} value={c._id}>{c.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Subcategories Table */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 text-sm">
                    <th className="px-6 py-4 font-semibold">Subcategory Name</th>
                    <th className="px-6 py-4 font-semibold">Parent Category</th>
                    <th className="px-6 py-4 font-semibold">Slug</th>
                    <th className="px-6 py-4 font-semibold">Blogs Count</th>
                    <th className="px-6 py-4 font-semibold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {subLoading ? (
                    <tr>
                      <td colSpan="5" className="px-6 py-8 text-center text-slate-500">
                        <div className="flex justify-center items-center gap-2">
                          <div className="w-5 h-5 border-2 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
                          <span>Loading subcategories...</span>
                        </div>
                      </td>
                    </tr>
                  ) : filteredSubCategories.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="px-6 py-8 text-center text-slate-500">
                        No subcategories found. Click "Add Subcategory" to create one.
                      </td>
                    </tr>
                  ) : (
                    filteredSubCategories.map((sub) => {
                      const parentName = typeof sub.category === 'object' && sub.category !== null ? sub.category.name : 'Unknown';
                      return (
                        <tr key={sub._id} className="hover:bg-slate-50 transition-colors">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                                <Layers size={16} />
                              </div>
                              <div>
                                <p className="font-semibold text-slate-800">{sub.name}</p>
                                {sub.description && (
                                  <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{sub.description}</p>
                                )}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-orange-50 text-orange-700 border border-orange-200">
                              {parentName}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-slate-600 font-mono">
                            {sub.slug}
                          </td>
                          <td className="px-6 py-4 text-sm text-slate-600">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                              {sub.blogCount || 0} blogs
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <div className="flex justify-end gap-2">
                              <button
                                onClick={() => openEditSubCategory(sub)}
                                className="p-1.5 text-slate-400 hover:text-orange-500 hover:bg-orange-50 rounded-md transition-colors"
                                title="Edit Subcategory"
                              >
                                <Edit size={18} />
                              </button>
                              <button
                                onClick={() => handleDeleteSubCategory(sub._id)}
                                className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-md transition-colors"
                                title="Delete Subcategory"
                              >
                                <Trash2 size={18} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ======================= CATEGORY MODAL ======================= */}
      {catModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl animate-in fade-in zoom-in duration-150">
            <div className="flex justify-between items-center pb-4 border-b border-slate-100">
              <h3 className="text-lg font-bold text-slate-800">
                {catModalMode === 'add' ? 'Add New Category' : 'Edit Category'}
              </h3>
              <button
                onClick={() => setCatModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleCategorySubmit} className="mt-4 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Category Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. SMS Marketing"
                  value={catForm.name}
                  onChange={(e) => setCatForm({ ...catForm, name: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Slug (optional)</label>
                <input
                  type="text"
                  placeholder="Auto-generated if left empty"
                  value={catForm.slug}
                  onChange={(e) => setCatForm({ ...catForm, slug: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Description</label>
                <textarea
                  rows="3"
                  placeholder="Brief description..."
                  value={catForm.description}
                  onChange={(e) => setCatForm({ ...catForm, description: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                ></textarea>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Status</label>
                <select
                  value={catForm.status}
                  onChange={(e) => setCatForm({ ...catForm, status: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none bg-white"
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setCatModalOpen(false)}
                  className="px-4 py-2 border border-slate-300 text-slate-600 rounded-lg hover:bg-slate-50 text-sm font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-sm font-medium shadow-sm transition-colors"
                >
                  {catModalMode === 'add' ? 'Create Category' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ======================= SUBCATEGORY MODAL ======================= */}
      {subModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl animate-in fade-in zoom-in duration-150">
            <div className="flex justify-between items-center pb-4 border-b border-slate-100">
              <h3 className="text-lg font-bold text-slate-800">
                {subModalMode === 'add' ? 'Add New Subcategory' : 'Edit Subcategory'}
              </h3>
              <button
                onClick={() => setSubModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubCategorySubmit} className="mt-4 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Parent Category *</label>
                <select
                  required
                  value={subForm.category}
                  onChange={(e) => setSubForm({ ...subForm, category: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none bg-white"
                >
                  <option value="">Select Parent Category</option>
                  {categories.map((cat) => (
                    <option key={cat._id} value={cat._id}>{cat.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Subcategory Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Bulk SMS Provider"
                  value={subForm.name}
                  onChange={(e) => setSubForm({ ...subForm, name: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Slug (optional)</label>
                <input
                  type="text"
                  placeholder="Auto-generated if left empty"
                  value={subForm.slug}
                  onChange={(e) => setSubForm({ ...subForm, slug: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Description</label>
                <textarea
                  rows="3"
                  placeholder="Brief description..."
                  value={subForm.description}
                  onChange={(e) => setSubForm({ ...subForm, description: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                ></textarea>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setSubModalOpen(false)}
                  className="px-4 py-2 border border-slate-300 text-slate-600 rounded-lg hover:bg-slate-50 text-sm font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-sm font-medium shadow-sm transition-colors"
                >
                  {subModalMode === 'add' ? 'Create Subcategory' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
