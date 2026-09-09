import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, ArrowRight, BookOpen, Sparkles, ArrowUpRight, Compass } from 'lucide-react';
import axiosClient from '../Blog/AxiosClient';

export default function BlogNavigation({ currentSlug, prevBlog: initialPrev, nextBlog: initialNext }) {
  const [prevBlog, setPrevBlog] = useState(initialPrev || null);
  const [nextBlog, setNextBlog] = useState(initialNext || null);
  const [loading, setLoading] = useState(!initialPrev && !initialNext);
  
  let routerLocation = null;
  try {
    routerLocation = useLocation();
  } catch (e) {
    // In case used outside Router context
  }

  const activeSlug = currentSlug || (routerLocation ? routerLocation.pathname.split('/').filter(Boolean).pop() : (typeof window !== 'undefined' ? window.location.pathname.split('/').filter(Boolean).pop() : ''));

  useEffect(() => {
    if (initialPrev || initialNext) {
      setPrevBlog(initialPrev);
      setNextBlog(initialNext);
      setLoading(false);
      return;
    }

    if (!activeSlug) return;

    const fetchNavigation = async () => {
      try {
        setLoading(true);
        const response = await axiosClient.get(`/public/blogs/${activeSlug}`);
        if (response.data && response.data.success) {
          setPrevBlog(response.data.prevBlog || null);
          setNextBlog(response.data.nextBlog || null);
        }
      } catch (error) {
        console.warn('Could not fetch blog navigation:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNavigation();
  }, [activeSlug, initialPrev, initialNext]);

  if (loading || (!prevBlog && !nextBlog)) {
    return null;
  }

  return (
    <div className="mt-16 pt-10 border-t-2 border-slate-100">
      {/* Top Banner / Section Header */}
      <div className="flex items-center justify-between gap-4 mb-7">
        <div className="flex items-center gap-2.5">
          <span className="flex h-3 w-3 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
          </span>
          <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-widest bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Continue Reading
          </h3>
        </div>

        <Link
          to="/blogs#allblog"
          className="group inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-blue-600 bg-slate-100/90 hover:bg-blue-50/80 px-3.5 py-1.5 rounded-full transition-all border border-slate-200/80 shadow-sm"
        >
          <span>All Articles</span>
          <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>

      {/* 2-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* PREVIOUS BLOG CARD */}
        {prevBlog ? (
          <Link
            to={`/blog/${prevBlog.slug}`}
            className="group relative overflow-hidden flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30 border border-slate-200/90 hover:border-blue-400 shadow-sm hover:shadow-xl hover:shadow-blue-500/15 transition-all duration-300 hover:-translate-y-1 text-left"
          >
            {/* Ambient hover glow */}
            <div className="absolute -left-10 -top-10 w-36 h-36 bg-blue-400/15 rounded-full blur-2xl group-hover:bg-blue-400/30 transition-all duration-500 pointer-events-none" />

            {/* Thumbnail with overlay effect */}
            <div className="relative w-full sm:w-24 h-24 sm:h-24 rounded-xl overflow-hidden flex-shrink-0 shadow-sm border border-slate-200/80 bg-slate-100">
              {prevBlog.featuredImage ? (
                <img
                  src={prevBlog.featuredImage}
                  alt={prevBlog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white">
                  <BookOpen size={24} />
                </div>
              )}
              {/* Overlay directional arrow */}
              <div className="absolute inset-0 bg-blue-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-9 h-9 rounded-full bg-white text-blue-600 flex items-center justify-center shadow-lg transform -translate-x-2 group-hover:translate-x-0 transition-transform duration-300">
                  <ArrowLeft size={18} />
                </div>
              </div>
            </div>

            {/* Content info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-blue-600 text-white shadow-sm shadow-blue-500/30">
                  <ArrowLeft size={11} className="transition-transform duration-300 group-hover:-translate-x-1" />
                  Previous
                </span>
                <span className="text-[11px] font-semibold text-slate-400">Earlier Post</span>
              </div>

              <h4 className="text-sm sm:text-base font-bold text-slate-800 group-hover:text-blue-600 line-clamp-2 transition-colors leading-snug">
                {prevBlog.title}
              </h4>

              <div className="inline-flex items-center gap-1 text-xs font-bold text-blue-600/90 group-hover:text-blue-600 mt-2 transition-colors">
                <span>Read Story</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </div>
            </div>
          </Link>
        ) : (
          /* When there is no previous blog, show Explore All Library */
          <Link
            to="/blogs#allblog"
            className="group relative overflow-hidden flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-dashed border-slate-300 hover:border-blue-400 hover:bg-blue-50/20 transition-all duration-300 text-left shadow-sm hover:shadow-md"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-100/80 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
              <Compass size={22} />
            </div>
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 block mb-0.5">
                Beginning of Library
              </span>
              <h4 className="text-sm font-bold text-slate-700 group-hover:text-blue-600 transition-colors">
                Browse All Articles & Guides
              </h4>
            </div>
          </Link>
        )}

        {/* NEXT BLOG CARD */}
        {nextBlog ? (
          <Link
            to={`/blog/${nextBlog.slug}`}
            className="group relative overflow-hidden flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-white via-emerald-50/20 to-teal-50/30 border border-slate-200/90 hover:border-emerald-400 shadow-sm hover:shadow-xl hover:shadow-emerald-500/15 transition-all duration-300 hover:-translate-y-1 text-left sm:text-right"
          >
            {/* Ambient hover glow */}
            <div className="absolute -right-10 -top-10 w-36 h-36 bg-emerald-400/15 rounded-full blur-2xl group-hover:bg-emerald-400/30 transition-all duration-500 pointer-events-none" />

            {/* Content info */}
            <div className="flex-1 min-w-0 order-2 sm:order-1">
              <div className="flex items-center sm:justify-end gap-2 mb-1.5">
                <span className="text-[11px] font-semibold text-slate-400">Up Next</span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-emerald-600 text-white shadow-sm shadow-emerald-500/30">
                  Next
                  <ArrowRight size={11} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>

              <h4 className="text-sm sm:text-base font-bold text-slate-800 group-hover:text-emerald-600 line-clamp-2 transition-colors leading-snug">
                {nextBlog.title}
              </h4>

              <div className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600/90 group-hover:text-emerald-600 mt-2 transition-colors">
                <span>Read Story</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </div>
            </div>

            {/* Thumbnail with overlay effect */}
            <div className="relative w-full sm:w-24 h-24 sm:h-24 rounded-xl overflow-hidden flex-shrink-0 shadow-sm border border-slate-200/80 bg-slate-100 order-1 sm:order-2">
              {nextBlog.featuredImage ? (
                <img
                  src={nextBlog.featuredImage}
                  alt={nextBlog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center text-white">
                  <BookOpen size={24} />
                </div>
              )}
              {/* Overlay directional arrow */}
              <div className="absolute inset-0 bg-emerald-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-9 h-9 rounded-full bg-white text-emerald-600 flex items-center justify-center shadow-lg transform translate-x-2 group-hover:translate-x-0 transition-transform duration-300">
                  <ArrowRight size={18} />
                </div>
              </div>
            </div>
          </Link>
        ) : (
          /* When there is no next blog, show Explore All Library */
          <Link
            to="/blogs#allblog"
            className="group relative overflow-hidden flex items-center justify-between gap-4 p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-dashed border-slate-300 hover:border-emerald-400 hover:bg-emerald-50/20 transition-all duration-300 text-right shadow-sm hover:shadow-md"
          >
            <div className="flex-1">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 block mb-0.5">
                Latest Article
              </span>
              <h4 className="text-sm font-bold text-slate-700 group-hover:text-emerald-600 transition-colors">
                Explore All Topics & Articles
              </h4>
            </div>
            <div className="w-12 h-12 rounded-xl bg-emerald-100/80 text-emerald-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
              <Compass size={22} />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
