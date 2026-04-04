import React, { useEffect } from 'react'
import nullerror from "../assets/nullerror.jpg";
import Footer from '../components/Footer';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Error() {
    useEffect(()=>{
        window.scrollTo(0,0);
    },[]);
  return (
    <div className='w-[100%] pt-[10rem] h-[100vh]'>
      <img src={nullerror} alt=""  className='w-[300px] mx-auto md:w-[500px]' />
     <Link to="/"><div className='md:w-[200px]  md:h-14 w-[150px] h-10 rounded-lg hover:scale-105 transition-transform flex items-center justify-center bg-gradient-to-r from-orange-500 to-green-500 mx-auto'>
        <button className='text-white font-semibold flex items-center gap-[1rem]' style={{fontFamily:"'Montserrat',sans-serif"}}>Go Back <FaArrowRight/> </button>

      </div></Link> 
      <Footer/>
    </div>
  )
}
