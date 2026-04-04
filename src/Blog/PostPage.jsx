// import React, { useState, useEffect } from 'react';
// import axiosClient from './AxiosClient';
// import BlogPostCard from './BlogPostCard';
// import banner from '../assets/benner_12.jpg';
// import './PostPage.css';
// import Footer from '../components/Footer';

// const PostsPage = () => {
//   const [categories, setCategories] = useState([]);
//   const [selectedCategoryId, setSelectedCategoryId] = useState(null);
//   const [selectedSubCategoryId, setSelectedSubCategoryId] = useState(null);
//   const [posts, setPosts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [expandedCategoryId, setExpandedCategoryId] = useState(null);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await axiosClient.get('/category/getcategory');
//         setCategories(response.data);
//         if (response.data.length > 0) {
//           setSelectedCategoryId(response.data[0]._id);
//         }
//       } catch (error) {
//         console.error('Error fetching categories:', error);
//       }
//     };
//     fetchCategories();
//   }, []);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       if (!selectedCategoryId && !selectedSubCategoryId) return;

//       try {
//         const endpoint = selectedSubCategoryId
//           ? `/subcategory/getallpost?subCategoryId=${selectedSubCategoryId}`
//           : `/category/getallpost?categoryId=${selectedCategoryId}`;
//         const response = await axiosClient.get(endpoint);
//         setPosts(response.data);
//       } catch (error) {
//         console.error('Error fetching posts:', error);
//       }
//     };

//     fetchPosts();
//   }, [selectedCategoryId, selectedSubCategoryId]);

//   const handleSearch = async () => {
//     if (!searchTerm.trim()) return;

//     try {
//       const res = await axiosClient.get(`/posts/search?keyword=${searchTerm}`);
//       setPosts(res.data);
//       setSelectedCategoryId(null);
//       setSelectedSubCategoryId(null);
//     } catch (err) {
//       console.error('Error searching posts:', err);
//     }
//   };

//   const handleCategoryClick = (categoryId) => {
//     setSelectedCategoryId(categoryId);
//     setSelectedSubCategoryId(null);
//   };

//   const handleSubCategoryClick = (subCategoryId) => {
//     setSelectedSubCategoryId(subCategoryId);
//   };

//   const toggleCategory = (categoryId) => {
//     setExpandedCategoryId(expandedCategoryId === categoryId ? null : categoryId);
//   };

//   const renderCategories = () => (
//     <div className="space-y-4">
//       {categories.map((category) => (
//         <div
//           key={category._id}
//           className="bg-white shadow-md rounded-lg p-4 bg-cover bg-center bg-no-repeat"
//           style={{ backgroundImage: `url(${banner})` }}
//         >
//           <div className="flex items-center justify-between">
//             <h2
//               className="text-2xl text-green-500 hover:text-blue-900 cursor-pointer font-bold mb-2 flex items-center"
//               onClick={() => handleCategoryClick(category._id)}
//             >
//               {category.name}
//             </h2>
//             <button
//               className="text-green-500 hover:text-blue-900"
//               onClick={() => toggleCategory(category._id)}
//             >
//               {expandedCategoryId === category._id ? 'Close' : 'View'}
//             </button>
//           </div>

//           {expandedCategoryId === category._id && (
//             <div className="flex flex-col space-y-2 items-start py-1 gap-3">
//               {category.subCategoryIds.length > 0 &&
//                 category.subCategoryIds.map((subCategory) => (
//                   <button
//                     key={subCategory._id}
//                     className="text-black font-semibold hover:text-blue-900 ml-3"
//                     onClick={() => handleSubCategoryClick(subCategory._id)}
//                   >
//                     {subCategory.name}
//                   </button>
//                 ))}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );

//   const renderPosts = () => (
//     <div className="rounded-lg flex justify-center flex-col items-center">
//       {posts.length > 0 ? (
//         <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-y-8 w-full">
//           {posts.map((post) => (
//             <BlogPostCard key={post._id} post={post} />
//           ))}
//         </div>
//       ) : (
//         <p>No posts available</p>
//       )}
//     </div>
//   );

//   return (
//     <>
//       <div className="w-full mb-12">
//         {/* Banner */}
//         <div className="w-auto h-[40vh] md:h-[50vh] bg-gradient-to-tr from-green-900 via-black to-green-900 flex items-center justify-center">
//           <h1
//             className="text-[1rem] px-6 text-white font-semibold md:text-[2.5rem] pt-20 text-center"
//             style={{ fontFamily: "'manrope', sans-serif" }}
//           >
//             Dive into Expert Content and Expand Your Horizons
//           </h1>
//         </div>

//         {/* 🔍 Search Input */}
//         <div className="w-full flex justify-center mt-10 mb-4">
//           <input
//             type="text"
//             placeholder="Search blog posts..."
//             className="w-[70%] md:w-[40%] p-2 border border-gray-300 rounded-l"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
//           />
//           <button
//             onClick={handleSearch}
//             className="bg-green-600 text-white px-4 rounded-r hover:bg-green-700"
//           >
//             Search
//           </button>
//         </div>

//         {/* Layout: Categories + Posts */}
//         <div className="flex w-[90%] m-auto justify-between flex-col md:flex-row">
//           <div className="w-full scrollbar-style md:w-[25%] h-[300px] md:sticky top-24 mt-14 overflow-y-scroll md:h-[95vh] mb-5">
//             {renderCategories()}
//           </div>
//           <div className="w-full md:w-[73%]">{renderPosts()}</div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default PostsPage;







import React, { useState, useEffect } from 'react';
import axiosClient from './AxiosClient';
import BlogPostCard from './BlogPostCard';
import banner from '../assets/benner_12.jpg';
import './PostPage.css';
import Footer from '../components/Footer';

const PostsPage = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [selectedSubCategoryId, setSelectedSubCategoryId] = useState(null);
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCategoryId, setExpandedCategoryId] = useState(null);

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axiosClient.get('/category/getcategory');
        setCategories(response.data);
        if (response.data.length > 0) {
          setSelectedCategoryId(response.data[0]._id);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  // Fetch posts based on selected category or subcategory
  useEffect(() => {
    const fetchPosts = async () => {
      if (!selectedCategoryId && !selectedSubCategoryId) return;

      try {
        const endpoint = selectedSubCategoryId
          ? `/subcategory/getallpost?subCategoryId=${selectedSubCategoryId}`
          : `/category/getallpost?categoryId=${selectedCategoryId}`;

        const response = await axiosClient.get(endpoint);
        if (Array.isArray(response.data)) {
          setPosts(response.data);
        } else {
          setPosts([]);
          console.warn('Posts response is not an array:', response.data);
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
        setPosts([]);
      }
    };

    fetchPosts();
  }, [selectedCategoryId, selectedSubCategoryId]);

  // Handle search
  const handleSearch = async () => {
    if (!searchTerm.trim()) return;

    try {
      const res = await axiosClient.get(`/posts/search?keyword=${searchTerm}`);
      const data = res.data;

      if (Array.isArray(data)) {
        setPosts(data);
      } else {
        console.warn('Search result is not an array:', data);
        setPosts([]);
      }

      setSelectedCategoryId(null);
      setSelectedSubCategoryId(null);
    } catch (err) {
      console.error('Error searching posts:', err);
      setPosts([]);
    }
  };

  const handleCategoryClick = (categoryId) => {
    setSelectedCategoryId(categoryId);
    setSelectedSubCategoryId(null);
  };

  const handleSubCategoryClick = (subCategoryId) => {
    setSelectedSubCategoryId(subCategoryId);
  };

  const toggleCategory = (categoryId) => {
    setExpandedCategoryId(expandedCategoryId === categoryId ? null : categoryId);
  };

  const renderCategories = () => (
    <div className="space-y-4">
      {categories.map((category) => (
        <div
          key={category._id}
          className="bg-white shadow-md rounded-lg p-4 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${banner})` }}
        >
          <div className="flex items-center justify-between">
            <h2
              className="text-2xl text-green-500 hover:text-blue-900 cursor-pointer font-bold mb-2 flex items-center"
              onClick={() => handleCategoryClick(category._id)}
            >
              {category.name}
            </h2>
            <button
              className="text-green-500 hover:text-blue-900"
              onClick={() => toggleCategory(category._id)}
            >
              {expandedCategoryId === category._id ? 'Close' : 'View'}
            </button>
          </div>

          {expandedCategoryId === category._id && (
            <div className="flex flex-col space-y-2 items-start py-1 gap-3">
              {category.subCategoryIds.length > 0 &&
                category.subCategoryIds.map((subCategory) => (
                  <button
                    key={subCategory._id}
                    className="text-black font-semibold hover:text-blue-900 ml-3"
                    onClick={() => handleSubCategoryClick(subCategory._id)}
                  >
                    {subCategory.name}
                  </button>
                ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );

  const renderPosts = () => (
    <div className="rounded-lg flex justify-center flex-col items-center">
      {Array.isArray(posts) && posts.length > 0 ? (
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-y-8 w-full">
          {posts.map((post) => (
            <BlogPostCard key={post._id} post={post} />
          ))}
        </div>
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );

  return (
    <>
      <div className="w-full mb-12">
        <div className="w-auto h-[40vh] md:h-[50vh] bg-gradient-to-tr from-green-900 via-black to-green-900 flex items-center justify-center">
          <h1
            className="mtext-[1rem] px-6 text-white font-semibold md:text-[2.5rem] pt-20 text-center"
            style={{ fontFamily: "'manrope', sans-serif" }}
          >
            Dive into Expert Content and Expand Your Horizons
          </h1>
        </div>

        {/* 🔍 Search Bar */}
        <div className="w-full flex justify-center mt-10 mb-4">
          <input
            type="text"
            placeholder="Search blog posts..."
            className="w-[70%] md:w-[40%] p-2 border border-gray-300 rounded-l"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          />
          <button
            onClick={handleSearch}
            className="bg-green-600 text-white px-4 rounded-r hover:bg-green-700"
          >
            Search
          </button>
        </div>

        <div className="flex w-[90%] m-auto justify-between flex-col md:flex-row">
          <div className="w-full scrollbar-style md:w-[25%] h-[300px] md:sticky top-24 mt-14 overflow-y-scroll md:h-[95vh] mb-5">
            {renderCategories()}
          </div>
          <div className="w-full md:w-[73%]">{renderPosts()}</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PostsPage;

