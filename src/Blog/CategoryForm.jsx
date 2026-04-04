import React, { useState } from 'react';
import axiosClient from './AxiosClient'; // Import the custom axios client

const CategoryForm = ({ initialCategory = { name: '', subCategoryIds: [] } }) => {
  const [name, setName] = useState(initialCategory.name);
  const [subCategoryIds, setSubCategoryIds] = useState(initialCategory.subCategoryIds);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const response = await axiosClient.post('/category/create', {
        name,
        subCategoryIds
      });
      setSuccess('Category created successfully!');
      console.log('Category created:', response.data);
    } catch (err) {
      setError('Failed to create category. Please try again.');
      console.error('Error creating category:', err);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white border rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Category Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="subCategoryIds" className="block text-gray-700 text-sm font-bold mb-2">Sub-Category IDs (comma separated)</label>
          <input
            id="subCategoryIds"
            type="text"
            value={subCategoryIds.join(', ')}
            onChange={(e) => setSubCategoryIds(e.target.value.split(',').map(id => id.trim()))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button type="submit" className="w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          Submit
        </button>
        {error && <p className="mt-4 text-red-500">{error}</p>}
        {success && <p className="mt-4 text-green-500">{success}</p>}
      </form>
    </div>
  );
};

export default CategoryForm;
