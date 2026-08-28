import React, { useState, useRef, useCallback } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axiosClient from './AxiosClient';
import { useNavigate } from 'react-router-dom';


const BlogPostForm = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [content, setContent] = useState('');
  const [summary, setSummary] = useState('');
  const [tags, setTags] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [isPublished, setIsPublished] = useState(false);

  const quillRef = useRef(null);

  // const imageHandler = useCallback(() => {
  //   const input = document.createElement('input');
  //   input.setAttribute('type', 'file');
  //   input.setAttribute('accept', 'image/*');
  //   input.click();

  //   input.onchange = async () => {
  //     const file = input.files[0];
  //     if (file) {
  //       const formData = new FormData();
  //       formData.append('file', file);
  //       formData.append('upload_preset', 'tdcahggc');

  //       try {
  //         const response = await axios.post(
  //           'https://api.cloudinary.com/v1_1/dtqo1n4mc/image/upload',
  //           formData
  //         );

  //         const url = response.data.secure_url;
  //         const quill = quillRef.current.getEditor();
  //         const range = quill.getSelection();
  //         quill.insertEmbed(range.index, 'image', url);
  //       } catch (error) {
  //         console.error('Error uploading image:', error);
  //       }
  //     }
  //   };
  // }, []);
  const imageHandler = useCallback(() => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      if (file) {
        const formData = new FormData();
        formData.append('file', file);

        try {
          const response = await axiosClient.post('/image/upload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });

          const url = response.data.url;
          const quill = quillRef.current.getEditor();
          const range = quill.getSelection();
          quill.insertEmbed(range.index, 'image', url);
        } catch (error) {
          console.error('Error uploading image:', error);
        }
      }
    };
  }, []);

  const handleContent = () => {
    const quill = quillRef.current.getEditor();
    const content1 = quill.root.innerHTML;
    setContent(content1);
  };

  const modules = {
    toolbar: {
      container: [
        [{ 'font': [] }],
        [{ 'size': ['small', 'medium', 'large', 'huge'] }],
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'indent': '-1' }, { 'indent': '+1' }],
        [{ 'align': [] }],
        ['bold', 'italic', 'underline', 'strike', 'sub', 'super'],
        [{ 'color': [] }, { 'background': [] }],
        ['link', 'image', 'code-block', 'blockquote'],
        [{ 'table': [] }],
        ['clean']
      ],
      handlers: {
        image: imageHandler,
        // Remove handlers for audio and video
      }
    },
    history: {
      delay: 2000,
      maxStack: 500,
      userOnly: true
    }
  };
  
  

  const handleSubmit = async (event) => {
    event.preventDefault();

    const blogPostData = {
      title,
      slug,
      content,
      summary,
      tags: tags.split(',').map(tag => tag.trim().toLowerCase()), // Example tag handling
      author,
      category,
      subCategory,
      coverImage,
      isPublished
    };

    try {
      await axiosClient.post('/blogs', blogPostData);
      alert('Blog post created successfully');
      navigate('/admin/blogs');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to create blog post');
    }
  };

  // const handleCoverImageUpload = async (event) => {
  //   const file = event.target.files[0];
  //   if (!file) return;

  //   // Create a FormData object to send the file to Cloudinary
  //   const formData = new FormData();
  //   formData.append('file', file);
  //   formData.append('upload_preset', 'tdcahggc'); // replace with your upload preset

  //   try {
  //     const response = await axios.post('https://api.cloudinary.com/v1_1/dtqo1n4mc/image/upload', formData);
  //     const imageUrl = response.data.secure_url;
  //     setCoverImage(imageUrl);
  //   } catch (error) {
  //     console.error('Error uploading image:', error);
  //   }
  // };
  const handleCoverImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Create a FormData object to send the file to your server
    const formData = new FormData();
    formData.append('file', file);

    try {
      // Post to your local server endpoint
      const response = await axiosClient.post('/image/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const imageUrl = response.data.url; // Assuming your server returns the URL in the 'url' field
      setCoverImage(imageUrl);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  
  return (
    <>
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Create a New Blog Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Cover Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleCoverImageUpload}
            className="mt-1 block w-full text-gray-800"
          />
          {coverImage && (
            <img
              src={coverImage}
              alt="Cover"
              className="mt-2 w-32 h-auto rounded-md shadow-sm"
            />
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="mt-1 block w-full h-9 border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Slug (hyphen-separated)</label>
          <input
            type="text"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            required
            className="mt-1 block w-full h-9 border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium  text-gray-700">Content</label>
          <ReactQuill
            ref={quillRef}
            modules={modules}
            theme="snow"
            className="mt-1"
          />
          <button
            type="button"
            onClick={handleContent}
            className="mt-2 px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700"
          >
            Save
          </button>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Summary</label>
          <input
            type="text"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            className="mt-1 block w-full h-9 border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Tags (comma-separated)</label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="mt-1 block w-full h-9 border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
            className="mt-1 block w-full h-9 border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="mt-1 block w-full h-9 border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Sub-Category</label>
          <input
            type="text"
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
            className="mt-1 block w-full h-9 border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={isPublished}
            onChange={() => setIsPublished(!isPublished)}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label className="text-sm font-medium text-gray-700">Is Published</label>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700"
        >
          Submit
        </button>
      </form>
    </div>
    {/* <Footer/> */}
    </>
  );
};

export default BlogPostForm;


