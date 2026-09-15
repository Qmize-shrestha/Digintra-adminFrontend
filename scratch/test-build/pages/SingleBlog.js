import React, { useState, useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { toast } from "react-hot-toast";
import { ArrowLeft, ArrowRight } from "lucide-react";
import axiosClient from "../Blog/AxiosClient";
import Blogpart from "../components/Blogpart";
import Footer from "../components/Footer";
import BlogNavigation from "../components/BlogNavigation";
const formatBlogContent = (content) => {
  if (!content) return "";
  let cleaned = content.replace(/<table([^>]*?)style="([^"]*?)"/gi, (match, attrs, style) => {
    const filteredStyle = style.replace(/width\s*:\s*[^;]+;?/gi, "").trim();
    return `<table${attrs}${filteredStyle ? ` style="${filteredStyle}"` : ""}`;
  });
  cleaned = cleaned.replace(/<p([^>]*?)style="([^"]*?)"/gi, (match, attrs, style) => {
    const filteredStyle = style.replace(/width\s*:\s*[^;]+;?/gi, "").trim();
    return `<p${attrs}${filteredStyle ? ` style="${filteredStyle}"` : ""}`;
  });
  cleaned = cleaned.replace(
    /(<div[^>]*class=["'][^"']*(?:table-responsive|ql-table-wrapper)[^"']*["'][^>]*>\s*)?(<table[\s\S]*?<\/table>)/gi,
    (match, existingWrapper, tableHtml) => {
      if (existingWrapper) {
        return `${existingWrapper}${tableHtml}`;
      }
      return `<div class="table-responsive">${tableHtml}</div>`;
    }
  );
  cleaned = cleaned.replace(/<div[^>]*class=["'][^"']*lg:w-\[320px\][^"']*["'][^>]*>[\s\S]*$/gi, "");
  cleaned = cleaned.replace(/<div[^>]*class=["'][^"']*rounded-2xl shadow-xl[^"']*["'][^>]*>\s*<\/div>/gi, "");
  return cleaned;
};
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
        console.error("Error fetching blog:", err);
        toast.error(err.response?.data?.message || "Failed to fetch blog post");
        setError(true);
        setLoading(false);
      }
    };
    fetchBlog();
    window.scrollTo(0, 0);
  }, [slug]);
  if (loading) {
    return /* @__PURE__ */ React.createElement("div", { className: "flex justify-center items-center h-screen" }, /* @__PURE__ */ React.createElement("div", { className: "w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" }));
  }
  if (error || !blog) {
    return /* @__PURE__ */ React.createElement("div", { className: "flex flex-col justify-center items-center h-screen bg-gray-50" }, /* @__PURE__ */ React.createElement("h1", { className: "text-4xl font-bold text-gray-800 mb-4" }, "Blog Post Not Found"), /* @__PURE__ */ React.createElement("p", { className: "text-gray-600 mb-8" }, "The article you're looking for doesn't exist or has been removed."), /* @__PURE__ */ React.createElement(Link, { to: "/home", className: "px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition" }, "Return Home"));
  }
  const metaTitle = blog.seo?.metaTitle || blog.title || "Digintra Blog";
  const metaDescription = blog.seo?.metaDescription || blog.excerpt || "Read this amazing blog post on Digintra.";
  const canonicalUrl = blog.seo?.canonicalUrl || `https://digintra.com/blog/post/${slug}`;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Helmet, null, /* @__PURE__ */ React.createElement("title", null, metaTitle), /* @__PURE__ */ React.createElement("meta", { name: "description", content: metaDescription }), /* @__PURE__ */ React.createElement("link", { rel: "canonical", href: canonicalUrl })), /* @__PURE__ */ React.createElement("article", { className: "bg-white min-h-screen pt-32 pb-16" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12" }, /* @__PURE__ */ React.createElement("div", { className: "w-full lg:w-2/3 xl:w-3/4 min-w-0 max-w-full" }, !blog.content?.includes("<h1") && !["best-bulk-sms-providers-in-india", "bulk-sms-uae", "rcs-messaging-the-future-of-business-messaging", "dlt-registration-india-guide", "bsnl-dlt-registration-guide", "vi-dlt-registration-guide", "promotional-text-message-examples", "sms-api", "a2p-sms-messaging-business-guide"].includes(blog.slug) && /* @__PURE__ */ React.createElement("header", { className: "mb-6 text-left" }, /* @__PURE__ */ React.createElement("h1", { className: "text-4xl font-extrabold text-black leading-tight" }, blog.title)), blog.featuredImage && !["best-bulk-sms-providers-in-india", "bulk-sms-uae", "rcs-messaging-the-future-of-business-messaging", "dlt-registration-india-guide", "bsnl-dlt-registration-guide", "vi-dlt-registration-guide", "promotional-text-message-examples", "sms-api", "a2p-sms-messaging-business-guide"].includes(blog.slug) && /* @__PURE__ */ React.createElement("div", { className: "mb-12 rounded-2xl overflow-hidden shadow-xl" }, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: blog.featuredImage,
      alt: blog.title,
      className: "w-full h-auto object-cover max-h-[500px]"
    }
  )), /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "prose prose-lg md:prose-xl prose-blue max-w-none text-gray-800 blog-content w-full min-w-0 max-w-full break-words\n              [&_a]:text-blue-600 [&_a]:hover:text-blue-800 [&_a]:underline",
      dangerouslySetInnerHTML: { __html: formatBlogContent(blog.content) }
    }
  ), /* @__PURE__ */ React.createElement(BlogNavigation, { currentSlug: slug, prevBlog, nextBlog })), /* @__PURE__ */ React.createElement("div", { className: "w-full lg:w-1/3 xl:w-1/4 mt-12 lg:mt-0" }, /* @__PURE__ */ React.createElement(Blogpart, null)))), /* @__PURE__ */ React.createElement(Footer, null));
}
