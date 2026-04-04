import React from 'react';
import { Link } from 'react-router-dom';
import msgLogo from '../assets/mSg24x7_Communications_Logo_1_x97.png';

const BlogPostCard = ({ post }) => {
  const category= post.category.replace(/ /g, '-')
  const subCategory= post.subCategory.replace(/ /g, '-')
  
  
  return (
    <Link to={`/${category}/${subCategory}/${post.slug}`} >
      <div className="w-[100%] lg:w-[90%]  shadow-lg rounded-xl pb-4">
      <img src={post.coverImage} className="w-full rounded-t-2xl h-[10%] " alt={post.title} />
      <div className="px-3">
        <p className="text-[12px] mt-4 text-purple-600">{post.category}</p>
        <p className="text-lg font-semibold">{post.title}</p>
        <p className="text-[12px] mt-4 text-gray-600">{post.summary}</p>
        <div className="flex items-center mt-4 gap-2">
          <img src={msgLogo} className="h-[40px] w-[40px] rounded-full " alt={post.author} />
          <p className="text-[12px] font-semibold">{post.author}</p>
          <p className="text-gray-600 text-[8px]"> ●  {new Date(post.publishedAt).toLocaleDateString()}  ●</p>
        </div>
      </div>
      </div>
    </Link>
  );
};

export default BlogPostCard;
