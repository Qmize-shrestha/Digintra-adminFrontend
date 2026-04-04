import React, { useState } from 'react';
import axiosClient from './AxiosClient'; // ✅ CORRECT
 // Import the custom axios client

const SubCategoryForm = ({ onSubmit, initialSubCategory = { name: '', categoryName: '', blogPostIds: [] } }) => {
  const [name, setName] = useState(initialSubCategory.name);
  const [categoryName, setCategoryName] = useState(initialSubCategory.categoryName);
  const [blogPostIds, setBlogPostIds] = useState(initialSubCategory.blogPostIds);
  const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosClient.post('/subcategory/create', {
        name,
        categoryName,
        blogPostIds
      });
      setSuccess('Sub-Category created successfully!');

      // Axios response data is available directly
      console.log('SubCategory created:', response.data);

      if (onSubmit) onSubmit(response.data);
    } catch (error) {
      if (error.response) {
        setError('Failed to create Sub-Category. Please try again.');
        // Axios provides error details in error.response
        console.error('Error response:', error.response.data);
      } else {
        console.error('Error:', error.message);
      }
      // Handle error, e.g., show an error message to the user
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white border rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Sub-Category Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Sub-Category Name</label>
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
          <label htmlFor="categoryName" className="block text-gray-700 text-sm font-bold mb-2">Category Name</label>
          <input
            id="categoryName"
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="blogPostIds" className="block text-gray-700 text-sm font-bold mb-2">Blog Post IDs (comma separated)</label>
          <input
            id="blogPostIds"
            type="text"
            value={blogPostIds.join(', ')}
            onChange={(e) => setBlogPostIds(e.target.value.split(',').map(id => id.trim()))}
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

export default SubCategoryForm;
