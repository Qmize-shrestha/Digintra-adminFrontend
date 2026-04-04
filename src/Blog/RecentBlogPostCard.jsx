import React from 'react';
import { Link } from 'react-router-dom';

const RecentBlogPostCard = ({ post }) => {
  const category= post.category.replace(/ /g, '-')
  const subCategory= post.subCategory.replace(/ /g, '-')
  return (
    <Link to={`/${category}/${subCategory}/${post.slug}`} className="w-[100%] lg:w-[25%]  shadow-lg rounded-xl ">
      <img src={post.coverImage} className="w-full rounded-t-2xl" alt={post.title} />
      <div className="p-3">
        <p className="text-[12px] mt-4 text-purple-600">{post.category}</p>
        <p className="text-lg font-semibold">{post.title}</p>
        <p className="text-[12px] mt-4 text-gray-600">{post.summary}</p>
      </div>
    </Link>
  );
};

export default RecentBlogPostCard;