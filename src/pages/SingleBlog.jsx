import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { toast } from 'react-hot-toast';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import axiosClient from '../Blog/AxiosClient';
import Blogpart from '../components/Blogpart';
import Footer from '../components/Footer';
import BlogNavigation from '../components/BlogNavigation';

export default function SingleBlog() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [prevBlog, setPrevBlog] = useState(null);
  const [nextBlog, setNextBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axiosClient.get(`/public/blogs/${slug}`);
        if (response.data && response.data.success) {
          setBlog(response.data.blog);
          setPrevBlog(response.data.prevBlog || null);
          setNextBlog(response.data.nextBlog || null);
        } else {
          setError(true);
        }
        setLoading(false);
      } catch (err) {
        console.error('Error fetching blog:', err);
        toast.error(err.response?.data?.message || 'Failed to fetch blog post');
        setError(true);
        setLoading(false);
      }
    };

    fetchBlog();
    window.scrollTo(0, 0);
  }, [slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
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

      <article className="bg-white min-h-screen pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12">

          {/* Left Column: Blog Content */}
          <div className="w-full lg:w-2/3 xl:w-3/4">
            {/* Header Section */}
            {!blog.content?.includes('<h1') && !['best-bulk-sms-providers-in-india', 'bulk-sms-uae', 'rcs-messaging-the-future-of-business-messaging', 'dlt-registration-india-guide', 'bsnl-dlt-registration-guide', 'vi-dlt-registration-guide', 'promotional-text-message-examples', 'sms-api', 'a2p-sms-messaging-business-guide'].includes(blog.slug) && (
              <header className="mb-6 text-left">
                <h1 className="text-4xl font-extrabold text-black leading-tight">
                  {blog.title}
                </h1>
              </header>
            )}

            {/* Cover Image */}
            {blog.featuredImage && !['best-bulk-sms-providers-in-india', 'bulk-sms-uae', 'rcs-messaging-the-future-of-business-messaging', 'dlt-registration-india-guide', 'bsnl-dlt-registration-guide', 'vi-dlt-registration-guide', 'promotional-text-message-examples', 'sms-api', 'a2p-sms-messaging-business-guide'].includes(blog.slug) && (
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
              className="prose prose-lg md:prose-xl prose-blue max-w-none text-gray-800 blog-content overflow-x-auto [&_table]:w-full [&_table]:border-collapse 
              [&_table]:my-6 [&_th]:border [&_th]:border-slate-300 [&_th]:bg-slate-100 [&_th]:p-3 [&_th]:font-bold [&_td]:border [&_td]:border-slate-200 [&_td]:p-3
              [&_tr:nth-child(even)]:bg-slate-50/70 [&_a]:text-blue-600 [&_a]:hover:text-blue-800 [&_a]:underline"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* Previous / Next Article Navigation */}
            <BlogNavigation currentSlug={slug} prevBlog={prevBlog} nextBlog={nextBlog} />

            {/* Tags */}
            {/* {blog.tags && blog.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">Tags</h4>
                <div className="flex flex-wrap gap-2
                ">
                  {blog.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )} */}
          </div>

          {/* Right Column: Sidebar */}
          <div className="w-full lg:w-1/3 xl:w-1/4 mt-12 lg:mt-0">
            <Blogpart />
          </div>

        </div>
      </article>
      <Footer />
    </>
  );
}
