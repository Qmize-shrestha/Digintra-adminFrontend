import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import axiosClient from '../Blog/AxiosClient';

export default function SingleBlog() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axiosClient.get(`/public/blogs/${slug}`);
        if (response.data && response.data.success) {
          setBlog(response.data.blog);
        } else {
          setError(true);
        }
        setLoading(false);
      } catch (err) {
        console.error('Error fetching blog:', err);
        setError(true);
        setLoading(false);
      }
    };

    fetchBlog();
    window.scrollTo(0, 0);
  }, [slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-gray-50">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Blog Post Not Found</h1>
        <p className="text-gray-600 mb-8">The article you're looking for doesn't exist or has been removed.</p>
        <Link to="/home" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Return Home
        </Link>
      </div>
    );
  }

  // Fallback SEO values if none are provided
  const metaTitle = blog.seo?.metaTitle || blog.title || "Digintra Blog";
  const metaDescription = blog.seo?.metaDescription || blog.excerpt || "Read this amazing blog post on Digintra.";
  const canonicalUrl = blog.seo?.canonicalUrl || `https://digintra.com/blog/post/${slug}`;

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      <article className="bg-gray-50 min-h-screen py-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header Section */}
          <header className="mb-10 text-center">
            {blog.category && (
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4 uppercase tracking-wide">
                {blog.category.name}
              </span>
            )}
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              {blog.title}
            </h1>
            
            <div className="flex items-center justify-center gap-4 text-gray-600 font-medium">
              <span>By {blog.author?.name || 'Digintra Team'}</span>
              <span>•</span>
              <span>
                {new Date(blog.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
          </header>

          {/* Cover Image */}
          {blog.featuredImage && (
            <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={blog.featuredImage} 
                alt={blog.title} 
                className="w-full h-auto object-cover max-h-[500px]"
              />
            </div>
          )}

          {/* Blog Content */}
          <div 
            className="prose prose-lg md:prose-xl prose-blue max-w-none text-gray-800"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">Tags</h4>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  );
}
