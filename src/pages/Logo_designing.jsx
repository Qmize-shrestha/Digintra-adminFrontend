import React from 'react';
import "./logo.css"
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect } from 'react';
import icons1 from "../assets/icons8-arrow-100.png";
import icons2 from "../assets/icons8-call-50.png";
import icons3 from "../assets/logo-design.png";
import icons4 from "../assets/logo-dsn.png";
import icons5 from "../assets/brand.png";
import icons6 from "../assets/recall.png";
import icons7 from "../assets/satis.png";
import icons8 from "../assets/c1.png";
import icons9 from "../assets/c2.png";
import icons10 from "../assets/c3.png";
import icons11 from "../assets/c4.png";
import icons12 from "../assets/start2.png";
import {FaUserPlus, FaWhatsapp } from 'react-icons/fa';
import Footer2 from '../components/Footer2';
import { Helmet } from 'react-helmet';
import Client from '../components/Client';
import Getstarted from '../components/Getstarted';
export default function Logo_designing() {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <>
    <Helmet>
    <meta name="robots" content="index, follow" />

      <title>Best Logo Designer service Provider in India - Digintra</title>
      <meta name='description' content='Looking for the Best Logo Designer? At Digintra We design logos with a perfect combination of style, color, font, style,& related elements. Conatct Us Today'/>
    <link rel="canonical" href="https://digintra.com/logo-designing" />
    </Helmet>
   
    <div className=" patterncon relative w-auto pt-[230px] lg:h-[720px] pb-[50px] ">
    <div className='absolute inset-0 backdrop-blur-md w-full h-full'></div>
        <div className='w-auto relative z-10 h-auto'>
            <div className='w-[310px] lg:w-[1140px] pb-5 h-auto mx-auto'>

            
        <h3 class="text-center text-[20px] lg:text-[30px] font-semibold " style={{fontFamily:"'Montserrat',sans-serif"}}>Your Project Is Delivered To You.</h3>
        <h1 class=" text-center text-[28px] text-blue-600 lg:text-[30px] font-semibold" style={{fontFamily:"'Montserrat',sans-serif"}}>Logo Designer</h1>
							<p className='text-center' style={{fontFamily:"'Poppins',sans-serif"}}>In just a few easy steps</p>
              <div className="h-auto mx-auto px-12 mt-7 flex md:justify-center items-center gap-4 md:gap-8 flex-col md:flex-row">
            <a href="https://sms-login.digintra.com/User/SignUp">
              <button className="border-b-2 border-[#1e3b8d] ml-2 lg:ml-0 bg-gradient-to-tr from-[#3e8646] to-[#2fac13] w-[220px] h-16 rounded-lg shadow-xl transition-transform transform hover:scale-110 hover:shadow-2xl text-white font-bold flex items-center justify-center gap-2">
                <FaUserPlus className="h-6 w-6" />
                Register Now
              </button>
            </a>
            <a href='https://api-wa.co/nVOl41'>
              <button className="border-b-2 text-white  border-[#1e3b8d] mt-6 md:mt-0  ml-2 lg:ml-0 bg-gradient-to-tr from-[#00b09b] to-[#96c93d] w-[220px] h-16 rounded-lg font-bold shadow-xl transition-transform transform hover:scale-110 hover:shadow-2xl flex items-center justify-center gap-2">
                <FaWhatsapp className="h-6 w-6" />
                Chat on WhatsApp
              </button>
            </a>
          </div>
             </div>
        </div>
        </div>
        <div className='w-auto h-auto'>
    <div className='w-[310px] lg:w-[1140px] lg:flex lg:flex-row-reverse h-auto mx-auto'>
  <img src={icons3} className='lg:w-[510px]' alt='Logo Designer'/>
    <div className='pt-[50px]'>
    <p style={{fontFamily:"'Poppins',sans-serif"}}>A logo should reflect a specific brand or companies identity, it is the picture of your product/service offering that is easily remembered by your customers and other companies, if it's designed and applied properly. Gain the attention of your viewers with logo designs concepts. Our design concepts are well known in the market.
                          {<br/>}Our talented designers know you need a professional yet affordable logo. Our logo designers work in a team where brainstorming is required and supervised by a Senior Art Director, and also report to the Creative Director ensuring all designs have at least two pairs of eyes on their creation – all part of our quality assurance. Our website and logo designers get to continuously develop their skills and experience by exposure to our design work flow and the sheer number and variety of clients they get to work with.</p>
  
 
 </div>
    </div>
       </div>

       {/* third content */}
       <div className='w-auto h-auto'>
    <div className='w-[310px] lg:w-[1140px] lg:flex lg:space-x-[20px]  h-auto mx-auto'>
  <img src={icons4} className='lg:w-[510px]' alt='Logo Designer'/>
    <div className='pt-[50px]'>
    <h3 class="head text-xl lg:text-[30px] font-bold" style={{fontFamily:"'Montserrat',sans-serif"}}>How important is a Logo?</h3>
    <p style={{fontFamily:"'Poppins',sans-serif"}}>If you don't have a logo, then why not? Your logo is the main way to provide a powerful long term brand identity for your business. Unfortunately too many people make the mistake of not investing in a UNIQUE logo at the start and end up with a less than professional looking logo which can be costly in the long term. We are typically at least 7-10 times cheaper & better we say it 10 times better than any design companies. Our logos never get used again or recycled.</p>
  
 
 </div>
    </div>
       </div>
       
<div className='w-auto h-auto pt-[100px] '>
<div className='w-[310px] lg:w-[1140px] h-auto mx-auto'>
<h3 className='text-center text-[20px] lg:text-[30px] font-semibold' style={{fontFamily:"'Montserrat',sans-serif"}}>How we design the best logo for you !</h3>
<div className='w-[200px] h-[4px] bg-blue-700 mx-auto'></div>

<div className='w-[310px] lg:flex justify-between lg:w-[1140px] lg:py-10 h-auto mx-auto'>

{/* first card */}

<div className="w-[300px] bg-gradient-to-t from-orange-50 border-l-4 border-t-2 border-r-2 border-b-4 rounded-lg border-blue-800 h-auto p-4">
<img src={icons5} className='h-[200px] mx-auto' alt='Logo Designer' />
<h2 className='text-xl font-semibold text-blue-800 text-center' style={{fontFamily:"'Montserrat',sans-serif"}}>Logo for your brand</h2>
<p className='text-center pt-2' style={{fontFamily:"'Poppins',sans-serif"}}>We create a logo for you, which can ideally represent your organization, business, products and services. It clearly imparts your business philosophy and goals to your target market.</p>

</div>

{/* second  card */}
<div className="w-[300px] bg-gradient-to-t from-orange-50 border-l-4 border-t-2 border-r-2 border-b-4 rounded-lg border-blue-800 h-auto p-4">
<img src={icons6}  className='h-[200px] mx-auto' alt='Logo Designer' />
<h2 className='text-xl font-semibold text-blue-800 text-center' style={{fontFamily:"'Montserrat',sans-serif"}}>Brand recall value</h2>
<p className='text-center pt-2' style={{fontFamily:"'Poppins',sans-serf"}}>Our designers follow the rule of simplicity to enhance brand recall value, but they also add style factor to make the logo more appealing.</p>

</div>


{/* third card */}
<div className="w-[300px] bg-gradient-to-t from-orange-50 border-l-4 border-t-2 border-r-2 border-b-4 rounded-lg border-blue-800 h-auto p-4">
<img src={icons7}   className='h-[200px] mx-auto' alt='Logo Designer' />
<h2 className='text-xl font-semibold text-blue-800 text-center' style={{fontFamily:"'Montserrat',sans-seif"}}>100% Satisfaction</h2>
<p className='text-center pt-2' style={{fontFamily:"'Poppins', sans-serif"}}>We design logos with a perfect combination of style, color, font, style and related elements. From this point you will go back and forth with the designer until you are 100% happy.</p>

</div>
</div>

</div>
</div>

{/* fifth content */}

<Client/>

{/* sixth content */}
<Getstarted/>
<Footer2/>
        </>
  )
}
