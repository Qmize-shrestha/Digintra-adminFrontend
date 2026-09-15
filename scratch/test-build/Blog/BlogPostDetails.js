import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import RecentBlogPostCard from "./RecentBlogPostCard";
import DOMPurify from "dompurify";
import axiosClient from "./AxiosClient";
import { toast } from "react-hot-toast";
import "./BlogPostDetail.css";
import Aos from "aos";
const BlogPostDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [recentpost, setRecentpost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [headingContents, setHeadingContents] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const processHeadingsFromHtml = (html) => {
    if (typeof window === "undefined") return { modifiedHtml: html, headingContents: [] };
    const container = document.createElement("div");
    container.innerHTML = html;
    const headingContents2 = [];
    const headings = container.querySelectorAll("h2, h3, h4, h5, h6");
    console.log(headings);
    headings.forEach((heading, index) => {
      const sectionNumber = index + 1;
      const sectionId = `section${sectionNumber}`;
      heading.setAttribute("id", sectionId);
      headingContents2.push({ id: sectionId, text: heading.textContent });
    });
    return { modifiedHtml: container.innerHTML, headingContents: headingContents2 };
  };
  const modifyHeadingContents = (headingsArray) => {
    return headingsArray.map(({ id, text }) => /* @__PURE__ */ React.createElement(
      "p",
      {
        key: id,
        className: "text-gray-500 hover:text-blue-700 cursor-pointer mt-4",
        onClick: () => scrollToStep(id)
      },
      text
    ));
  };
  const scrollToStep = (id) => {
    requestAnimationFrame(() => {
      const element = document.querySelector(`#${id}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      } else {
        console.error(`Element not found for id: ${id}`);
      }
    });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    Aos.init({ duration: 1300 });
    const fetchPost = async () => {
      try {
        const response = await axiosClient.get(`/blogpost/getpost/${slug}`);
        setPost(response.data);
        fetchRecentPost(response.data._id);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching post details:", error);
        toast.error("Failed to fetch post details.");
        setLoading(false);
      }
    };
    const fetchRecentPost = async (currPostId) => {
      try {
        const response = await axiosClient.get(`/blogpost/getrecentpost?currentPostId=${currPostId}`);
        setRecentpost(response.data);
      } catch (error) {
        console.error("Error fetching recent posts:", error);
        toast.error("Failed to fetch recent posts.");
      }
    };
    const checkAdminStatus = async () => {
      try {
        const userId = localStorage.getItem("userId");
        if (userId) {
          const response = await axiosClient.get(`/user/isadmincheck/${userId}`);
          setIsAdmin(response.data.isAdmin);
        }
      } catch (error) {
        console.error("Error checking admin status:", error);
      }
    };
    fetchPost();
    checkAdminStatus();
  }, [slug]);
  useEffect(() => {
    if (post) {
      console.log(post.content);
      const { headingContents: headingContents2 } = processHeadingsFromHtml(post.content);
      setHeadingContents(headingContents2);
      console.log(headingContents2);
    }
  }, [post]);
  if (loading) {
    return /* @__PURE__ */ React.createElement("div", { className: "flex justify-center items-center h-screen text-xl text-gray-500" }, "Loading...");
  }
  if (!post) {
    return /* @__PURE__ */ React.createElement("div", { className: "flex justify-center items-center h-screen text-xl text-gray-500" }, "Post not found.");
  }
  const { modifiedHtml } = processHeadingsFromHtml(post.content);
  const modifiedHeadingsArray = modifyHeadingContents(headingContents);
  const sanitizedContent = DOMPurify.sanitize(modifiedHtml, {
    ADD_TAGS: ["iframe"],
    ADD_ATTR: ["src", "width", "height", "frameborder", "allow", "allowfullscreen", "class", "style", "title", "target"]
  });
  const formatTables = (html) => {
    if (!html) return "";
    let cleaned = html.replace(/<table([^>]*?)style="([^"]*?)"/gi, (match, attrs, style) => {
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
  const processedSanitizedContent = formatTables(sanitizedContent);
  const renderPosts = () => /* @__PURE__ */ React.createElement("div", { className: "bg-gray-100 p-4 h-auto rounded-lg" }, /* @__PURE__ */ React.createElement("div", { className: "bg-gradient-to-bl from-[#1302fa] via-[#000000] to-[#1302fa] px-4 rounded-xl" }, /* @__PURE__ */ React.createElement("h3", { className: "text-xl font-semibold mb-2 text-white text-transparent bg-clip-text text-center" }, "Recent Posts")), recentpost?.length > 0 ? /* @__PURE__ */ React.createElement("ul", { className: "mt-8 flex flex-col md:flex-row md:justify-between gap-y-12  md:gap-y-0 gap-x-10 w-[100%]" }, recentpost.map((post2) => /* @__PURE__ */ React.createElement(
    RecentBlogPostCard,
    {
      key: post2._id,
      post: post2
    }
  ))) : /* @__PURE__ */ React.createElement("p", null, "No posts available"));
  const handleDelete = async (id) => {
    console.log(id);
    try {
      const response = await axiosClient.delete(`/blogpost/deleteblogpost/${id}`);
      console.log("Delete response:", response.data);
      toast.success("Blog post deleted successfully!");
    } catch (error) {
      console.error("Error deleting blog post:", error);
      toast.error("Failed to delete blog post.");
    }
  };
  function handleLogout() {
    localStorage.removeItem("userId");
    window.location.href = "/loginblog";
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Helmet, null, /* @__PURE__ */ React.createElement("title", null, post.metaTitle), /* @__PURE__ */ React.createElement("meta", { name: "description", content: post.metaDescription }), /* @__PURE__ */ React.createElement("link", { rel: "canonical", href: post.canonicalUrl })), /* @__PURE__ */ React.createElement("div", { className: "flex flex-col md:flex-row justify-between w-full p-4 mt-28" }, /* @__PURE__ */ React.createElement("div", { className: "w-full md:w-[25%] p-4 rounded-lg self-start" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "border-[#5a595950] text-center pb-4 font-semibold text-lg border-l border-t-4 border-r rounded-lg border-[#050A16] bg-gradient-to-r from-orange-400 via-red-600 to-blue-400 text-transparent bg-clip-text" }, "Table of Content"), modifiedHeadingsArray), /* @__PURE__ */ React.createElement("div", { className: "p-4 md:flex flex-col mt-8 shadow-xl rounded-lg items-center hidden " }, /* @__PURE__ */ React.createElement("p", { className: "text-lg font-semibold text-[#050A16] text-justify" }, "Switch to Msg24x7: Smarter choice for WhatsApp Campaigns \u{1F680}"), /* @__PURE__ */ React.createElement("button", { className: "bg-gradient-to-r from-blue-800 to-green-600 text-white py-1 px-3 mt-1 rounded-full" }, "TRY NOW"))), /* @__PURE__ */ React.createElement("div", { className: "w-full md:w-[70%] max-w-4xl mx-auto mt-12 px-1 md:px-6 min-w-0 max-w-full" }, /* @__PURE__ */ React.createElement("img", { src: post.coverImage, className: "w-full  object-cover rounded-lg shadow-lg", alt: post.title }), /* @__PURE__ */ React.createElement("div", { className: "mt-6" }, /* @__PURE__ */ React.createElement("div", { className: "prose lg:prose-xl each-post-content w-full min-w-0 max-w-full break-words", dangerouslySetInnerHTML: { __html: processedSanitizedContent } })), /* @__PURE__ */ React.createElement("div", { className: "bg-white p-2  md:p-6 rounded-lg shadow-lg" }, /* @__PURE__ */ React.createElement("p", { className: "text-sm text-purple-600 font-semibold" }, post.category, " / ", post.subCategory), /* @__PURE__ */ React.createElement("p", { className: "text-lg text-gray-700 mt-4" }, post.summary), /* @__PURE__ */ React.createElement("div", { className: "flex items-center mt-6 gap-2" }, /* @__PURE__ */ React.createElement("p", { className: "text-sm font-semibold text-gray-800" }, post.author), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-gray-500" }, "\u25CF ", new Date(post.publishedAt).toLocaleDateString()))), isAdmin && /* @__PURE__ */ React.createElement("div", { className: "flex gap-4" }, /* @__PURE__ */ React.createElement("div", { className: "mt-4" }, /* @__PURE__ */ React.createElement(
    Link,
    {
      to: `/edit/${post._id}`,
      className: "px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700"
    },
    "Edit Post"
  )), /* @__PURE__ */ React.createElement("div", { className: "mt-2 px-4 py-2 bg-green-500 font-semibold rounded-md shadow-sm hover:bg-green-700", onClick: handleLogout }, "Logout"), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => handleDelete(post?._id),
      className: "px-2 py-2 bg-red-600 text-white mt-2 active:bg-green-800 font-semibold rounded-md shadow-sm hover:bg-red-800"
    },
    "Delete Blog Post"
  ))), headingContents.map(({ id }) => /* @__PURE__ */ React.createElement("div", { key: id, id, style: { marginTop: "1px" } }))), /* @__PURE__ */ React.createElement("div", { className: "w-[80%] m-auto mt-5" }, renderPosts()));
};
export default BlogPostDetail;
