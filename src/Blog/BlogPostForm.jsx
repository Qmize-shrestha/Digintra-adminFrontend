import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import ReactQuill, { Quill } from 'react-quill';

const Font = Quill.import('formats/font');
Font.whitelist = ['', 'serif', 'monospace', 'poppins', 'inter', 'roboto', 'open-sans', 'lato', 'montserrat', 'lora', 'merriweather', 'nunito', 'playfair-display'];
Quill.register(Font, true);

const Size = Quill.import('attributors/style/size');
Size.whitelist = ['10px', '12px', '14px', '16px', '18px', '20px', '24px', '32px', '48px'];
Quill.register(Size, true);
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
      toast((t) => (
        <div className="bg-white rounded-2xl shadow-2xl border border-indigo-100 p-4 max-w-sm w-full transition-all duration-300 transform hover:scale-[1.01]">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-green-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/25 flex-shrink-0">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-gray-900 tracking-tight">Unsaved Draft Found</h4>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100">
                  Auto-saved
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                We found a previously saved draft. Would you like to restore your content?
              </p>
              <div className="flex items-center justify-end gap-2 mt-3 pt-2 border-t border-gray-100">
                <button
                  onClick={() => {
                    toast.dismiss(t.id);
                    localStorage.removeItem('blog_draft_new');
                    toast('Draft discarded', { icon: '🗑️' });
                  }}
                  className="px-3 py-1.5 text-xs font-semibold text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-xl transition duration-150 active:scale-95 cursor-pointer"
                >
                  Discard
                </button>
                <button
                  onClick={() => {
                    toast.dismiss(t.id);
                    try {
                      const draft = JSON.parse(savedDraft);
                      setTitle(draft.title || '');
                      setSlug(draft.slug || '');
                      setSummary(draft.summary || '');
                      setTags(draft.tags || '');
                      setAuthor(draft.author || '');
                      setCoverImage(draft.coverImage || '');
                      setIsPublished(draft.isPublished || false);
                      setMetaTitle(draft.metaTitle || '');
                      setMetaDescription(draft.metaDescription || '');
                      setCanonicalUrl(draft.canonicalUrl || '');

                      const restoredContent = draft.content || '';
                      setContent(restoredContent);

                      if (draft.category) {
                        handleCategoryChange(draft.category, draft.subCategory || '');
                      } else {
                        setCategory('');
                        setSubCategory('');
                      }

                      setTimeout(() => {
                        if (quillRef.current) {
                          try {
                            const quill = quillRef.current.getEditor();
                            if (quill) {
                              quill.clipboard.dangerouslyPasteHTML(restoredContent);
                            }
                          } catch (err) {
                            console.error("Error setting quill content:", err);
                          }
                        }
                      }, 50);

                      toast.success('Draft restored successfully!', {
                        icon: '✨',
                        style: { borderRadius: '12px', background: '#1e1b4b', color: '#fff' }
                      });
                    } catch (e) {
                      console.error("Failed to parse draft", e);
                      toast.error('Failed to restore draft');
                    }
                  }}
                  className="px-4 py-1.5 text-xs font-semibold text-white bg-green-500 hover:from-indigo-700 hover:to-purple-700 rounded-xl shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/35 transition duration-150 active:scale-95 cursor-pointer flex items-center gap-1"
                >
                  <span>Restore</span>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      ), {
        duration: 15000,
        id: 'restore-draft-toast-new',
        style: {
          background: 'transparent',
          boxShadow: 'none',
          padding: 0,
          maxWidth: '400px'
        }
      });
    }
  }, []);

  // Auto-save logic (debounced auto-save)
  useEffect(() => {
    let currentContent = content;
    if (quillRef.current) {
      try {
        const editor = quillRef.current.getEditor();
        if (editor && editor.root) {
          const innerHTML = editor.root.innerHTML;
          if (innerHTML && innerHTML !== '<p><br></p>') {
            currentContent = innerHTML;
          }
        }
      } catch (e) {}
    }

    if (!title && (!currentContent || currentContent === '<p><br></p>') && !summary) return;

    const timer = setTimeout(() => {
      const draft = {
        title, slug, content: currentContent, summary, tags, author, category, subCategory, coverImage, isPublished, metaTitle, metaDescription, canonicalUrl
      };
      localStorage.setItem('blog_draft_new', JSON.stringify(draft));
      setLastSaved(new Date());
    }, 2000);

    return () => clearTimeout(timer);
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

  const handleCategoryChange = async (selectedCatId, targetSubCatId = '') => {
    setCategory(selectedCatId);
    setSubCategory(targetSubCatId);
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
        formData.append('upload_preset', 'tdcahggc');

        try {
          const response = await axios.post(
            'https://api.cloudinary.com/v1_1/dtqo1n4mc/image/upload',
            formData
          );

          const url = response.data.secure_url;
          const quill = quillRef.current.getEditor();
          const range = quill.getSelection(true);
          const index = range ? range.index : 0;
          quill.insertEmbed(index, 'image', url);
        } catch (error) {
          console.error('Error uploading image:', error);
          toast.error('Failed to upload image. Please try again.');
        }
      }
    };
  }, []);

  const formatVideoUrl = (url) => {
    if (!url) return '';
    let trimmed = url.trim();

    if (trimmed.includes('youtube.com/embed/') || trimmed.includes('player.vimeo.com/video/')) {
      return trimmed;
    }

    const youtubeShortsMatch = trimmed.match(/(?:https?:\/\/)?(?:www\.)?youtube\.com\/shorts\/([a-zA-Z0-9_-]+)/i);
    if (youtubeShortsMatch && youtubeShortsMatch[1]) {
      return `https://www.youtube.com/embed/${youtubeShortsMatch[1]}`;
    }

    const youtubeWatchMatch = trimmed.match(/(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?.*v=([a-zA-Z0-9_-]+)/i);
    if (youtubeWatchMatch && youtubeWatchMatch[1]) {
      return `https://www.youtube.com/embed/${youtubeWatchMatch[1]}`;
    }

    const youtuBeMatch = trimmed.match(/(?:https?:\/\/)?youtu\.be\/([a-zA-Z0-9_-]+)/i);
    if (youtuBeMatch && youtuBeMatch[1]) {
      return `https://www.youtube.com/embed/${youtuBeMatch[1]}`;
    }

    const vimeoMatch = trimmed.match(/(?:https?:\/\/)?(?:www\.)?vimeo\.com\/([0-9]+)/i);
    if (vimeoMatch && vimeoMatch[1]) {
      return `https://player.vimeo.com/video/${vimeoMatch[1]}`;
    }

    return trimmed;
  };

  const videoHandler = useCallback(() => {
    toast((t) => {
      let inputVal = '';
      return (
        <div className="flex flex-col gap-2 p-1 min-w-[280px]">
          <div className="flex items-center gap-2">
            <span className="text-lg">🎬</span>
            <p className="font-semibold text-gray-800 text-sm">Add Video URL</p>
          </div>
          <input
            type="text"
            placeholder="Paste YouTube, Vimeo, or MP4 URL..."
            className="w-full px-3 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-indigo-500 focus:outline-none bg-white text-gray-800"
            onChange={(e) => { inputVal = e.target.value; }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && inputVal) {
                toast.dismiss(t.id);
                const formattedUrl = formatVideoUrl(inputVal);
                const quill = quillRef.current.getEditor();
                const range = quill.getSelection(true);
                const index = range ? range.index : 0;
                quill.insertEmbed(index, 'video', formattedUrl);
                toast.success('Video inserted successfully');
              }
            }}
          />
          <div className="flex justify-end gap-2 mt-1">
            <button
              onClick={() => {
                if (inputVal) {
                  toast.dismiss(t.id);
                  const formattedUrl = formatVideoUrl(inputVal);
                  const quill = quillRef.current.getEditor();
                  const range = quill.getSelection(true);
                  const index = range ? range.index : 0;
                  quill.insertEmbed(index, 'video', formattedUrl);
                  toast.success('Video inserted successfully');
                } else {
                  toast.error('Please enter a video URL');
                }
              }}
              className="px-3 py-1 bg-indigo-600 text-white text-xs font-semibold rounded hover:bg-indigo-700 transition cursor-pointer"
            >
              Insert
            </button>
            <button
              onClick={() => toast.dismiss(t.id)}
              className="px-3 py-1 bg-gray-200 text-gray-700 text-xs font-semibold rounded hover:bg-gray-300 transition cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      );
    }, { duration: 30000, id: 'video-url-toast' });
  }, []);

  const handleContent = () => {
    if (quillRef.current) {
      const quill = quillRef.current.getEditor();
      const content1 = quill.root.innerHTML;
      setContent(content1);
      const draft = {
        title, slug, content: content1, summary, tags, author, category, subCategory, coverImage, isPublished, metaTitle, metaDescription, canonicalUrl
      };
      localStorage.setItem('blog_draft_new', JSON.stringify(draft));
      setLastSaved(new Date());
      toast.success('Content saved successfully!');
    }
  };

  const modules = useMemo(() => ({
    toolbar: {
      container: [
        [{ 'font': ['', 'serif', 'monospace', 'poppins', 'inter', 'roboto', 'open-sans', 'lato', 'montserrat', 'lora', 'merriweather', 'nunito', 'playfair-display'] }],
        [{ 'size': ['10px', '12px', '14px', '16px', '18px', '20px', '24px', '32px', '48px'] }],
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'indent': '-1' }, { 'indent': '+1' }],
        [{ 'align': [] }],
        ['bold', 'italic', 'underline', 'strike', 'sub', 'super'],
        [{ 'color': [] }, { 'background': [] }],
        ['link', 'image', 'video', 'code-block', 'blockquote'],
        [{ 'table': [] }],
        ['clean']
      ],
      handlers: {
        image: imageHandler,
        video: videoHandler
      }
    },
    history: {
      delay: 2000,
      maxStack: 500,
      userOnly: true
    }
  }), [imageHandler, videoHandler]);



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

      featuredImage: coverImage,
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
      toast.success('Blog post created successfully');
      const role = localStorage.getItem('role') || 'admin';
      navigate(role === 'editor' ? '/editor/blogs' : '/admin/blogs');
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to create blog post');
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

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'tdcahggc');

    try {
      const response = await axios.post('https://api.cloudinary.com/v1_1/dtqo1n4mc/image/upload', formData);
      const imageUrl = response.data.secure_url;
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
              className="mt-1 block w-full h-10 px-3 py-2 border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Slug (hyphen-separated)</label>
            <input
              type="text"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              required
              className="mt-1 block w-full h-10 px-3 py-2 border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white"
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
              <option value="" hidden>Select a Category</option>
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
              <option value="" hidden>
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
              value={content}
              onChange={setContent}
              className="mt-1 h-80 mb-12 bg-white text-gray-800"
            />
            <button
              type="button"
              onClick={handleContent}
              className="mt-5 px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700"
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
              className="mt-1 block w-full h-9 px-3 py-2 border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Tags (comma-separated)</label>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="mt-1 block w-full h-10 px-3 py-2 border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Author</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
              className="mt-1 block w-full h-10 px-3 py-2 border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white"
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
                className="mt-1 block w-full px-3 py-2 border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white"
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


