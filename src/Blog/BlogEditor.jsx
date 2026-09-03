import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CategoryForm from '../Blog/CategoryForm';
import SubCategoryForm from '../Blog/SubCaegoryForms';
import BlogPostForm from '../Blog/BlogPostForm';
import  axiosClient  from './AxiosClient'; 
import { toast } from 'react-hot-toast';


function BlogEditor() {
  const { userId } = useParams();
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkAdminStatus = async () => {
      try {
        console.log(userId);
        const response = await axiosClient.get(`/user/isadmincheck/${userId}`);
        const isAdminResponse = response?.data?.isAdmin;
  
        if (typeof isAdminResponse === 'boolean') {
          setIsAdmin(isAdminResponse);
        } else {
          throw new Error('Invalid response from server');
        }
  
      } catch (error) {
        toast.error('Failed to check admin status.');
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
  
    checkAdminStatus();
  }, [userId]);
  

  if (loading) {
    return <p>Loading...</p>;
  }
  
  if (error) {
    return <p>Error: {error}</p>;
  }
  
  if (!isAdmin) {
    return (
     
      <div className="pt-40 text-center">
        
        <p className="text-red-500 text-xl">You are not an admin</p>
       
      </div>
    );
  }
  
  return (
    <div className='w-[90%] m-auto flex justify-between pt-40 mb-12'>
      <div className='w-[25%] flex flex-col gap-6'>
        <CategoryForm />
        <SubCategoryForm />
      </div>
      <div className='w-[70%]'>
        <BlogPostForm />
      </div>
    </div>
  );
  
}

export default BlogEditor;
