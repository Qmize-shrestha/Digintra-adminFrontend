import React from 'react';
import "./seo.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect } from 'react';
import {FaUserPlus, FaWhatsapp } from 'react-icons/fa';
import { Autoplay, Pagination } from 'swiper/modules';
import icons1 from "../assets/icons8-arrow-100.png";
import icons2 from "../assets/icons8-call-50.png";
import icons3 from "../assets/seo.png";
import icons4 from "../assets/seo2.png";
import icons5 from "../assets/key.png";
import icons6 from "../assets/link.png";
import icons7 from "../assets/comp.png";
import icons8 from "../assets/c1.png";
import icons9 from "../assets/c2.png";
import icons10 from "../assets/c3.png";
import icons11 from "../assets/c4.png";
import icons12 from "../assets/start2.png";

import Footer2 from '../components/Footer2';
import { Helmet } from 'react-helmet';
import Client from '../components/Client';
import Getstarted from '../components/Getstarted';
export default function Seo() {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <>
      <Helmet>
        <title>Best SEO Service Provider in India - Digintra</title>
        <meta name="description" content='Digintra is a renowned SEO Company that offers quality Search Engine Optimization / SEO Services and Internet Marketing Solutions to clients. Call Now!'/>
      <link rel="canonical" href="https://digintra.com/seo" />
      
      </Helmet>
      <div className=" patterncon relative w-auto pt-[230px] lg:h-[720px] pb-[50px] ">
      <div className='absolute inset-0 backdrop-blur-md w-full h-full'></div>
        <div className='w-[100%] relative z-10 h-auto '>
            <div className='w-[310px] lg:w-[1140px] py-10 h-auto mx-auto '>

            
        <h3 class="text-center lg:text-[30px] text-[20px] font-semibold" style={{fontFamily:"'Montserrat',sans-serif"}}>Thinking of hiring the best SEO company?{<br/>}Don’t think twice, hire DIGINTRA!</h3>
        <h1 className='text-center text-[28px] text-blue-600 lg:text-[30px] font-semibold' style={{fontFamily:"'Montserrat',sans-serif"}}>SEO</h1>
        <p className='text-center px-4 mt-4' style={{fontFamily:"'Poppins',sans-serif"}}>Affordable SEO Services That Truly Works For Your Business</p>
        
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
<img src={icons3} className='lg:w-[510px]' alt='SEO'/>
<div className='pt-[50px]' >
<p style={{fontFamily:"'Poppins',sans-serif"}}>

DIGINTRA is a renowned SEO Company that offers quality Search Engine Optimization / SEO Services and Internet Marketing Solutions to the clients. Our dedicated team of Professionals Guarantee Top 10 search engine ranking on Google, Yahoo and MSN. Our on-page / Off-Page optimization Processes are designed as per Google guidelines.{<br/>}

Search engine optimization services can be broadly classified into 2 broad categories On-page Optimization (Which ensures that the search engine understands your website well) and Off-page Optimization (Gaining the right signals / Vote from authority sources on the web). DIGINTRA takes care of both the aspects when it comes to optimizing your website to rank high on the search engines, and when we say high we aim Top 10 at least
</p>


</div>
</div>
   </div>

   <div className='w-auto h-auto'>
<div className='w-[310px] lg:w-[1140px] lg:flex lg:space-x-[20px]  h-auto mx-auto'>
<img src={icons4} className='lg:w-[510px]' alt='SEO'/>
<div className='pt-[50px] space-y-4'>
<h3 class="head text-xl lg:text-[30px] font-bold" style={{fontFamily:"'Montserrat',sans-serif"}}>Your brand identity should be obvious, even on the sign above your door</h3>
<p style={{fontFamily:"'Poppins',sans-serif"}}>Search Engine Optimization{<br/>}
Search Engine Optimization is the process of improving the visibility of a website on organic search engine result pages (SERPs), by incorporating search engine friendly elements into a website</p>


</div>
</div>
   </div>
  
   {/* fourth content */}

   <div className='w-auto h-auto pt-[100px] '>
    <div className='w-[310px] lg:w-[1140px] h-auto mx-auto'>
    <h3 className='text-center text-[20px] lg:text-[30px] font-semibold' style={{fontFamily:"'Montserrat',sans-serif"}}>Benefits of using SEO</h3>
    <div className='w-[200px] h-[4px] bg-blue-700 mx-auto'></div>

    <div className='w-[310px] lg:flex justify-between lg:w-[1140px] lg:py-10 h-auto mx-auto'>

  {/* first card */}

<div className="w-[300px] bg-gradient-to-t from-orange-50 border-l-4 border-t-2 border-r-2 border-b-4 rounded-lg border-blue-800 h-auto p-4">
<img src={icons5} className='h-[200px] mx-auto' alt='SEO' />
<h2 className='text-xl font-semibold text-blue-800 text-center' style={{fontFamily:"'Montserrat',sans-serif"}}>Keyword Research</h2>
<p className='text-center pt-2' style={{fontFamily:"'Poppins',sans-serif"}}>The foundation of a great SEO campaign starts by identifying the most effective keywords. This process is about gaining insight into your consumers’ questions and concerns.</p>

</div>

{/* second  card */}
<div className="w-[300px] bg-gradient-to-t from-orange-50 border-l-4 border-t-2 border-r-2 border-b-4 rounded-lg border-blue-800 h-auto p-4">
<img src={icons6}   className='h-[200px] mx-auto' alt='SEO' />
<h2 className='text-xl font-semibold text-blue-800 text-center' style={{fontFamily:"'Montserrat',sans-serif"}}>Link Building</h2>
<p className='text-center pt-2' style={{fontFamily:"'Poppins',sans-serif"}}>Links from established and high-quality sites drive relevant traffic to your site and build authority in Google.</p>

</div>


{/* third card */}
<div className="w-[300px] bg-gradient-to-t from-orange-50 border-l-4 border-t-2 border-r-2 border-b-4 rounded-lg border-blue-800 h-auto p-4">
<img src={icons7} className='h-[200px] mx-auto' alt='SEO' />
<h2 className='text-xl font-semibold text-blue-800 text-center' style={{fontFamily:"'Montserrat',sans-serif"}}>Competitive Analysis</h2>
<p className='text-center pt-2' style={{fontFamily:"'Poppins',sans-serif"}}>There are a lot of companies competing for the same keywords. We’ll analyze their strengths and weaknesses to find new opportunities for your continued online growth.</p>

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
