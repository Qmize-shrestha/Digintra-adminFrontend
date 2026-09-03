import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'; // Import Link for navigation
import RecentBlogPostCard from './RecentBlogPostCard';
import DOMPurify from 'dompurify';
import  axiosClient  from './AxiosClient';
import { toast } from 'react-hot-toast';
import './BlogPostDetail.css'
import Aos from 'aos';

const BlogPostDetail = () => {
  // const { postId } = useParams();
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [recentpost, setRecentpost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [headingContents, setHeadingContents] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  // Function to process HTML and extract heading contents
  const processHeadingsFromHtml = (html) => {
    if (typeof window === 'undefined') return { modifiedHtml: html, headingContents: [] };
  
    const container = document.createElement('div');
    container.innerHTML = html;
  
    const headingContents = [];
    const headings = container.querySelectorAll('h2, h3, h4, h5, h6');
    console.log(headings);
    headings.forEach((heading, index) => {
     
      const sectionNumber = index + 1;
      const sectionId = `section${sectionNumber}`;
      heading.setAttribute('id', sectionId);
      headingContents.push({ id: sectionId, text: heading.textContent });
     
    });
  
    return { modifiedHtml: container.innerHTML, headingContents };
  };


  // Function to create heading elements
  const modifyHeadingContents = (headingsArray) => {
    return headingsArray.map(({ id, text }) => (
      <p
        key={id}
        className="text-gray-500 hover:text-blue-700 cursor-pointer mt-4"
        onClick={() => scrollToStep(id)}
      >
        {text}
      </p>
    ));
  };


  // Function to scroll to the specified step
  const scrollToStep = (id) => {
    requestAnimationFrame(() => {
      const element = document.querySelector(`#${id}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        console.error(`Element not found for id: ${id}`);
      }
    });
  };

  // Fetch the post data
  useEffect(() => {
    window.scrollTo(0, 0);
    Aos.init({duration:1300});
    const fetchPost = async () => {
      try {
        const response = await axiosClient.get(`/blogpost/getpost/${slug}`);
        setPost(response.data);
        fetchRecentPost(response.data._id);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching post details:', error);
        toast.error('Failed to fetch post details.');
        setLoading(false);
      }
    };

    const fetchRecentPost = async (currPostId) => {
      try {
        const response = await axiosClient.get(`/blogpost/getrecentpost?currentPostId=${currPostId}`);
        setRecentpost(response.data);
      } catch (error) {
        console.error('Error fetching recent posts:', error);
        toast.error('Failed to fetch recent posts.');
      }
    };

    const checkAdminStatus = async () => {
      try {
        const userId = localStorage.getItem('userId');
        if (userId) {
          const response = await axiosClient.get(`/user/isadmincheck/${userId}`);
          setIsAdmin(response.data.isAdmin);
        }
      } catch (error) {
        console.error('Error checking admin status:', error);
      }
    };

    fetchPost();
    checkAdminStatus();
  }, [slug]);

  // Update heading contents when post data is available
  useEffect(() => {
    if (post) {
      console.log(post.content)
      const { headingContents } = processHeadingsFromHtml(post.content);
      setHeadingContents(headingContents);
      console.log(headingContents)
    }
  }, [post]);

  if (loading) {
    return <div className="flex justify-center items-center h-screen text-xl text-gray-500">Loading...</div>;
  }

  if (!post) {
    return <div className="flex justify-center items-center h-screen text-xl text-gray-500">Post not found.</div>;
  }

  const { modifiedHtml } = processHeadingsFromHtml(post.content);
  const modifiedHeadingsArray = modifyHeadingContents(headingContents);

  // Sanitize HTML content
  const sanitizedContent = DOMPurify.sanitize(modifiedHtml);

  const renderPosts = () => (
    <div className="bg-gray-100 p-4 h-auto rounded-lg">
      {/* <h3 className="text-xl font-semibold mb-2">Recent Posts</h3> */}
      <div className='bg-gradient-to-bl from-[#1302fa] via-[#000000] to-[#1302fa] px-4 rounded-xl'><h3 className="text-xl font-semibold mb-2 text-white text-transparent bg-clip-text text-center" >Recent Posts</h3></div>
      {recentpost?.length > 0 ? (
        <ul className="mt-8 flex flex-col md:flex-row md:justify-between gap-y-12  md:gap-y-0 gap-x-10 w-[100%]">
          {recentpost.map((post) => (
            <RecentBlogPostCard
              key={post._id} // Use unique id from MongoDB as key
              post={post}
            />
          ))}
        </ul>
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );

   // delete post
   const handleDelete = async (id) => {
    console.log(id);
    
    try {
      const response = await axiosClient.delete(`/blogpost/deleteblogpost/${id}`);
      console.log('Delete response:', response.data);
      toast.success('Blog post deleted successfully!');
      // Handle success (e.g., update UI or notify the user)
    } catch (error) {
      console.error('Error deleting blog post:', error);
      toast.error('Error deleting blog post');
      // Handle error (e.g., show an error message)
    }
  };


  // Function to handle logout
function handleLogout() {
  // Remove userId from localStorage
  localStorage.removeItem('userId');
  window.location.href = '/loginblog';
}

  return (
    <div className='w-full pt-40 mb-12'>
      <div className="w-[90%] m-auto ">
        <h1 className='mt-4 text-center text-xl md:text-4xl font-bold' >{post.title} | MSG24x7</h1>
        <div className='min-w-[200px] max-w-[500px] m-auto flex justify-center items-center mt-4 gap-2 md:gap-6'>
          <img src="https://msg24x7.com/assets/mSg24x7_Communications_Logo_1_x97-De0z8R1X.png" className='rounded-full w-12' alt="" />
          <h5 className='text-[12px] md:text-xl'>{post.author}</h5>
          <p className='text-gray-400  text-[6px] md:text-sm'>. last edited on .</p>
          <p className='text-gray-400 text-[6px] md:text-sm'>{new Date(post.updatedAt).toLocaleDateString()}</p>
        </div>
      </div>
      <div className='w-[90%] m-auto flex flex-col md:flex-row mt-2'>
        <div className='w-full md:w-[25%] h-[50%] md:h-screen md:sticky top-16'>
          <div className=" scrollbar-style shadow-xl w-full rounded-lg p-3 h-[200px] md:h-[45%] mt-8 overflow-y-auto">
            <p className='border-[#5a595950] text-center pb-4 font-semibold text-lg border-l border-t-4 border-r rounded-lg border-[#050A16] bg-gradient-to-r from-orange-400 via-red-600 to-blue-400 text-transparent bg-clip-text'>Table of Content</p>
            {modifiedHeadingsArray}
          </div>
          <div className='p-4 md:flex flex-col mt-8 shadow-xl rounded-lg items-center hidden '>
            <p className='text-lg font-semibold text-[#050A16] text-justify'>Switch to Msg24x7: Smarter choice for WhatsApp Campaigns 🚀</p>
            <button className='bg-gradient-to-r from-blue-800 to-green-600 text-white py-1 px-3 mt-1 rounded-full'>TRY NOW</button>
          </div>
        </div>

        <div className="w-full md:w-[70%] max-w-4xl mx-auto mt-12 px-1 md:px-6">
          <img src={post.coverImage} className="w-full  object-cover rounded-lg shadow-lg" alt={post.title} />
          <div className="mt-6">
            <div className="prose lg:prose-xl each-post-content" dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
          </div>
          
          
          <div className="bg-white p-2  md:p-6 rounded-lg shadow-lg">
            <p className="text-sm text-purple-600 font-semibold">{post.category} / {post.subCategory}</p>
            <p className="text-lg text-gray-700 mt-4">{post.summary}</p>
            <div className="flex items-center mt-6 gap-2">
              <p className="text-sm font-semibold text-gray-800">{post.author}</p>
              <p className="text-xs text-gray-500">● {new Date(post.publishedAt).toLocaleDateString()}</p>
            </div>
          </div>
          {isAdmin && (
            <div className='flex gap-4'>
            <div className="mt-4">
              <Link
                to={`/edit/${post._id}`} // Link to the edit form
                className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700"
              >
                Edit Post
              </Link>
            </div>
            <div className="mt-2 px-4 py-2 bg-green-500 font-semibold rounded-md shadow-sm hover:bg-green-700" onClick={handleLogout}>
              Logout
            </div>
              <button onClick={() => handleDelete(post?._id)}
                className="px-2 py-2 bg-red-600 text-white mt-2 active:bg-green-800 font-semibold rounded-md shadow-sm hover:bg-red-800">
              Delete Blog Post
            </button>
            </div>
          )}
        </div>
        {/* Placeholder divs to assign IDs */}
        {headingContents.map(({ id }) => (
          <div key={id} id={id} style={{ marginTop: '1px' }} />
        ))}
      </div>
      <div className="w-[80%] m-auto mt-5">
        {renderPosts()}
      </div>
    </div>
  );
};

export default BlogPostDetail;
