
import React from 'react';
import "./smo.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect } from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import {FaUserPlus, FaWhatsapp } from 'react-icons/fa';
import Footer2 from '../components/Footer2';
import { Helmet } from 'react-helmet';
import icons1 from "../assets/icons8-arrow-100.png";
import icons2 from "../assets/icons8-call-50.png";
import icons3 from "../assets/original.png";
import icons4 from "../assets/c1.png";
import icons5 from "../assets/c2.png";
import icons6 from "../assets/c3.png";
import icons7 from "../assets/c4.png";
import icons8 from "../assets/start2.png";
import Client from '../components/Client';
import Getstarted from '../components/Getstarted';
export default function Smo() {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <>
      <Helmet>
        <title>Affordable SMO Service Provider in India - Digintra</title>
        <meta name="description" content='Digintra is a renowned SMO Company that offers quality Social media optimization (SMO) Services and Internet Marketing Solutions to the clients. Call Now!'/>
        <link rel="canonical" href="https://digintra.com/smo" />
      </Helmet>
      <div className=" patterncon relative w-auto pt-[230px] lg:h-[720px] pb-[50px] ">
      <div className='absolute inset-0 backdrop-blur-md w-full h-full'></div>
            <div className='w-auto relative z-10 h-auto'>
                <div className='w-[310px] lg:w-[1140px] py-10 h-auto mx-auto'>

                
            <h3 class="text-center text-[20px]  lg:text-[30px] font-semibold " style={{fontFamily:"'Montserrat',sans-serif"}}>Thinking of hiring the best SMO company? Don’t think twice, hire DIGINTRA!</h3>
            <h1 className='text-center text-[28px] text-blue-600 lg:text-[30px] font-semibold' style={{fontFamily:"'Montserrat',sans-serif"}}>SMO</h1>
            <p className='text-center px-4 mt-4' style={{fontFamily:"'Poppins',sans-serif"}}>Affordable SMO Services That Truly Works For Your Business</p>
			
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
  <img src={icons3} className='lg:w-[510px]' alt='SMO'/>
    <div className='pt-[50px]'>
    <p style={{fontFamily:"'Poppins',sans-serif"}}>DIGINTRA is a renowned SMO Company that offers quality Social media optimization (SMO) Services and Internet Marketing Solutions to the clients. Our dedicated team of Professionals Guarantee Top 10 search engine ranking on Google, Yahoo and MSN. Our on-page / Off-Page optimization Processes are designed as per Google guidelines.{<br/>}
                          {<br/>}

Social media optimization (SMO) is the use of social media networks to manage and grow an organization's message and online presence. As a digital marketing strategy, social media optimization can be used to increase awareness of new products and services, connect with customers, and ameliorate potential damaging news.</p>
  
 
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
