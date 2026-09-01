import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
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
  const [metaTitle, setMetaTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [canonicalUrl, setCanonicalUrl] = useState('');

  // Category and Subcategory list states
  const [categoriesList, setCategoriesList] = useState([]);
  const [subCategoriesList, setSubCategoriesList] = useState([]);

  const quillRef = useRef(null);

  const [lastSaved, setLastSaved] = useState(null);
  const [showPreview, setShowPreview] = useState(false);

  // Initial load: check for draft
  useEffect(() => {
    const savedDraft = localStorage.getItem('blog_draft_new');
    if (savedDraft) {
      if (window.confirm("An unsaved draft was found. Do you want to restore it?")) {
        try {
          const draft = JSON.parse(savedDraft);
          setTitle(draft.title || '');
          setSlug(draft.slug || '');
          setContent(draft.content || '');
          setSummary(draft.summary || '');
          setTags(draft.tags || '');
          setAuthor(draft.author || '');
          setCategory(draft.category || '');
          setSubCategory(draft.subCategory || '');
          setCoverImage(draft.coverImage || '');
          setIsPublished(draft.isPublished || false);
          setMetaTitle(draft.metaTitle || '');
          setMetaDescription(draft.metaDescription || '');
          setCanonicalUrl(draft.canonicalUrl || '');
        } catch (e) {
          console.error("Failed to parse draft", e);
        }
      } else {
        localStorage.removeItem('blog_draft_new');
      }
    }
  }, []);

  // Auto-save logic (every 30 seconds)
  useEffect(() => {
    if (!title && !content) return; // Don't save empty drafts initially

    const interval = setInterval(() => {
      const draft = {
        title, slug, content, summary, tags, author, category, subCategory, coverImage, isPublished, metaTitle, metaDescription, canonicalUrl
      };
      localStorage.setItem('blog_draft_new', JSON.stringify(draft));
      setLastSaved(new Date());
    }, 30000);

    return () => clearInterval(interval);
  }, [title, slug, content, summary, tags, author, category, subCategory, coverImage, isPublished, metaTitle, metaDescription, canonicalUrl]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axiosClient.get('/categories');
      if (response.data && response.data.success) {
        setCategoriesList(response.data.categories || []);
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleCategoryChange = async (selectedCatId) => {
    setCategory(selectedCatId);
    setSubCategory('');
    if (!selectedCatId) {
      setSubCategoriesList([]);
      return;
    }

    try {
      const response = await axiosClient.get(`/subcategories/by-category/${selectedCatId}`);
      if (response.data && response.data.success) {
        setSubCategoriesList(response.data.subCategories || []);
      }
    } catch (error) {
      console.error('Error fetching subcategories for category:', error);
      setSubCategoriesList([]);
    }
  };

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

  const modules = useMemo(() => ({
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
        image: imageHandler
      }
    },
    history: {
      delay: 2000,
      maxStack: 500,
      userOnly: true
    }
  }), [imageHandler]);



  const handleSubmit = async (event) => {
    event.preventDefault();

    const blogPostData = {
      title,
      slug,
      category,
      subCategory,
      content,
      summary,
      tags: tags.split(',').map(tag => tag.trim().toLowerCase()), // Example tag handling
      author,

      coverImage,
      status: isPublished ? "published" : "draft",
      seo: {
        metaTitle,
        metaDescription,
        canonicalUrl
      }
    };

    try {
      await axiosClient.post('/blogs', blogPostData);
      localStorage.removeItem('blog_draft_new'); // Clear draft on successful submission
      alert('Blog post created successfully');
      const role = localStorage.getItem('role') || 'admin';
      navigate(role === 'editor' ? '/editor/blogs' : '/admin/blogs');
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
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <select
              value={category}
              onChange={(e) => handleCategoryChange(e.target.value)}
              required
              className="mt-1 block w-full h-10 px-3 border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white"
            >
              <option value="">Select a Category</option>
              {categoriesList.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Sub-Category</label>
            <select
              value={subCategory}
              onChange={(e) => setSubCategory(e.target.value)}
              disabled={!category || subCategoriesList.length === 0}
              className="mt-1 block w-full h-10 px-3 border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white disabled:bg-gray-100 disabled:text-gray-400"
            >
              <option value="">
                {!category
                  ? 'Select a Category first'
                  : subCategoriesList.length === 0
                    ? 'No subcategories available'
                    : 'Select a Sub-Category (Optional)'}
              </option>
              {subCategoriesList.map((sub) => (
                <option key={sub._id} value={sub._id}>
                  {sub.name}
                </option>
              ))}
            </select>
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

          {/* SEO Settings */}
          <div className="bg-white p-4 rounded-md border-2 border-gray-300 space-y-4">
            <h3 className="text-lg font-bold text-gray-800">SEO Settings</h3>

            <div>
              <label className="block text-sm font-medium text-gray-700">Meta Title</label>
              <input
                type="text"
                value={metaTitle}
                onChange={(e) => setMetaTitle(e.target.value)}
                placeholder="SEO Title (leave blank to use post title)"
                className="mt-1 block w-full h-9 border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Meta Description</label>
              <textarea
                rows="3"
                value={metaDescription}
                onChange={(e) => setMetaDescription(e.target.value)}
                placeholder="Brief description for search engines"
                className="mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Canonical URL</label>
              <input
                type="text"
                value={canonicalUrl}
                onChange={(e) => setCanonicalUrl(e.target.value)}
                placeholder="https://example.com/blog/my-post"
                className="mt-1 block w-full h-9 border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-2"
              />
            </div>
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
          <div className="flex flex-col space-y-3 mt-4">
            {lastSaved && (
              <span className="text-xs text-gray-500 text-center font-medium">
                Draft auto-saved at {lastSaved.toLocaleTimeString()}
              </span>
            )}
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setShowPreview(true)}
                className="w-1/3 py-2 px-4 bg-green-600 text-white font-semibold rounded-md shadow-sm hover:bg-gray-700 transition"
              >
                Preview
              </button>
              <button
                type="submit"
                className="w-2/3 py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 transition"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 overflow-y-auto pt-20 pb-10">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl min-h-[50vh] flex flex-col relative mx-4">
            <button
              onClick={() => setShowPreview(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl transition z-10"
            >
              &times;
            </button>
            <div className="p-8 overflow-y-auto max-h-[85vh]">
              <article className="prose prose-lg md:prose-xl prose-blue max-w-none text-gray-800">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                  {title || 'Untitled Post'}
                </h1>
                {coverImage && (
                  <img src={coverImage} alt="Cover" className="w-full h-auto object-cover max-h-[500px] rounded-2xl mb-8 shadow-md" />
                )}
                <div dangerouslySetInnerHTML={{ __html: content || '<p className="text-gray-400 italic">No content yet...</p>' }} />
              </article>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogPostForm;


