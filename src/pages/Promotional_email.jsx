import React from 'react';
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./promotional.css";
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';
import icons1 from "../assets/icons8-arrow-100.png";
import icons2 from "../assets/icons8-call-50.png";
import icons3 from "../assets/promoemail.png";
import icons4 from "../assets/support.png";
import icons5 from "../assets/emaillist.png";
import icons6 from "../assets/templ.png";
import icons7 from "../assets/send.png";
import icons8 from "../assets/c1.png";
import icons9 from "../assets/c2.png";
import icons10 from "../assets/c3.png";
import icons11 from "../assets/c4.png";
import icons12 from "../assets/start2.png";
import icons13 from "../assets/Promotional_Email_img.webp"
import Getstarted from '../components/Getstarted';
import Client from '../components/Client';
import {FaUserPlus, FaWhatsapp } from 'react-icons/fa';
import promotionalkey from "../assets/promotional_key.webp";



export default function Promotional_email() {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <>
        <div className="patterncon relative w-auto pt-[230px] lg:h-[720px] pb-[50px] ">
        <div className='absolute inset-0 backdrop-blur-md w-full h-full'></div>
          <Helmet>
          <meta charSet="utf-8" />
                  <title>Best Promotional Email Marketing service provider in India </title>
                  <meta name="description" content="Looking for a Promotional Email Marketing service provider? Digintra helps you to go closer to your target audience, affording you opportunities to nurture."/>
                 <link rel="canonical" href="https://www.digintra.com/promotional-email" />
          </Helmet>
          <div className='w-[90%] m-auto flex flex-col lg:flex-row justify-center items-center gap-12'>
            <div className='w-[90%] lg:w-[45%] z-10'>
              <div className=" h-auto space-y-3 mx-auto ">
            <div className=" mx-auto bg-[#0053b7]">
              <h3 data-aos="fade-right" className="text-center lg:text-[16px] lg:tracking-widest text-white" style={{fontFamily:"'Montserrat',sans-serif"}}>
                BULK EMAIL MARKETING FOR YOUR BUSINESS.
              </h3>
            </div>
  
            <h1 data-aos="fade-right" className="text-[21px] font-[700] text-[#0053b7] text-center lg:text-[40px]" style={{fontFamily:"'Montserrat',sans-serif"}}>
              Promotional Email
            </h1>
            <p data-aos="fade-right" className="text-center text-[13px] text-black lg:text-[16px]" style={{fontFamily:"'Poppins',sans-serif"}}>
              With our powerful yet easy-to-use tools, it's never been easier to
              make an impact with email marketing
            </p>
           
          </div>
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
          <div className='w-[90%] md:w-[33%] z-10'>
            <img src={icons13} alt="" className='w-full  mix-blend-multiply lg:-mt-16'/>
          </div>
          </div>
          
          
        </div>
        <div className='w-auto h-auto bg-white py-10'>

     
        <div className="w-[310px] h-screen lg:h-auto mx-auto lg:w-[1140px] lg:flex">
          <div data-aos="fade-right" className="space-y-2 lg:space-y-7 lg:w-[500px] lg:pt-5">
            <p className="text-[13px] lg:text-left lg:text-[16px] text-center font-[400]" style={{fontFamily:"'Poppins',sans-serif"}}>
              E-mail Marketing are very common, fast, convenient and effective way
              of communication. With over more than 3 years of experience,
              DIGINTRA specializes in providing E-mail Marketing to make your
              business more profitable, competitive and efficient.
              {<br />}{" "}
            </p>
            <p style={{fontFamily:"'Poppins',sans-serif"}}>
              We provide simple & easy online interface for sending E-mail in easy
              steps, and also track the delivery & bounces.
            </p>
            <p className="text-[13px] lg:text-left lg:text-[16px] text-center font-[400] " style={{fontFamily:"'Poppins',sans-serif"}}> 
              Our services can help you to go closer to your target audience,
              affording you opportunities to nurture that relationship. To make
              your marketing efforts more fruitful, these are the modern
              techniques which are great for one to one communication with your
              prospective clients
            </p>
          </div>
          <div data-aos="zoom-in-up" className="w-[310px] mx-auto mt-5 lg:mt-0 lg:w-[500px]">
            <img src={icons3} alt="Promotional Email" />
          </div>
        </div>
  
        <div className="border-2 border-dashed border-blue-800 rounded-lg bg-gradient-to-tr from-indigo-100 via-green-100 to-orange-100 lg:mt-12 h-auto mx-auto lg:w-[80%] lg:flex md:px-11 md:py-11 justify-normal items-center b ">
          <div className='flex-1 w-full h-full'>
            <img src={promotionalkey} alt="" className='h-[50%] md:h-[80%]' />
          </div>
          <div className='flex-1'>
            <h3 data-aos="fade-right" className="head text-center font-[700] text-[21px] lg:text-[40px] text-[#0053b7] " style={{fontFamily:"'Montserrat',sans-serif"}}>
              {" "}
              Key features of {<br />} <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-indigo-600 to-pink-500 '>

              Promotional {<br />}
              Email </span>
            </h3>
            <p data-aos="fade-right" className="text-[13px]  font-[400] text-center lg:text-[16px] p-10" style={{fontFamily:"'Poppins',sans-serif"}}>
              Our services can help you to go closer to your target audience, {<br/>} 
              affording you opportunities to nurture that relationship.{<br/>}To make
              your marketing efforts more fruitful, these are the modern
              techniques  which are great for one to one communication with your
              prospective clients
            </p>
          </div>
        </div>

        
        <div className="mt-7 w-[310px] h-auto mx-auto lg:w-[1140px]">
          <h3 data-aos="fade-right" className="text-[21px] font-[700] text-[#0053b7] text-center px-4 lg:text-[40px] " style={{fontFamily:"'Montserrat',sans-serif"}}>
          How To Create Email Campaign
          </h3>
          <div className="w-[200px] h-[3px] bg-gray-700 mx-auto"></div>
          <div className="w-[310px] h-auto mx-auto lg:w-[1140px] grid grid-cols-1 lg:grid-cols-3 gap-12 lg:mt-8 ">
            {/* first card */}
            <div className="w-[300px] bg-gradient-to-t from-orange-50 border-l-4 border-t-2 border-r-2 border-b-4 rounded-lg border-blue-800 h-auto p-4">
              <img src={icons5} alt="Promotional Email" />
              <h3 className="text-[16px] lg:text-[21px] font-semibold text-blue-800 text-center" style={{fontFamily:"'Montserrat',sans-serif"}}> 
              Add Your Mailing ListT
              </h3>
              <p className="text-[13px] lg:text-[16px] text-center font-[400]" style={{fontFamily:"'Poppins',sans-serif"}}>
              Import/upload your customers
  list to send Emails to
  thousands of Individuals.
              </p>
            </div>
  
            {/* second card */}
  
            <div className="w-[300px] bg-gradient-to-t from-orange-50 border-l-4 border-t-2 border-r-2 border-b-4 rounded-lg border-blue-800 h-auto p-4">
              <img src={icons6} alt="Promotional Email" />
              <h3 className="text-[16px] lg:text-[21px] font-semibold text-blue-800 text-center" style={{fontFamily:"'Montserrat',sans-serif"}}>
              Create Your Email Template
              </h3>
              <p className="text-[13px] lg:text-[16px] text-center font-[400]" style={{fontFamily:"'Poppins',sans-serif"}}>
              You can send plain text, graphics
  or html page whichever suits best–design
  options helps to convey branding
  for your business.
              </p>
            </div>
  
            {/* third card */}
  
            <div className="w-[300px] bg-gradient-to-t from-orange-50 border-l-4 border-t-2 border-r-2 border-b-4 rounded-lg border-blue-800 h-auto p-4">
              <img src={icons7} alt="Promotional Email" />
              <h3 className="text-[16px] lg:text-[21px] font-semibold text-blue-800 text-center" style={{fontFamily:"'Montserrat',sans-serif"}}> 
              Send Your Email
              </h3>
              <p className="text-[13px] lg:text-[16px] text-center font-[400]" style={{fontFamily:"'Poppins',sans-serif"}}>
              Review the email template you created,
  click "Send" and see the delivery stats
  later in your Email account.
              </p>
            </div>
          </div>
        </div>
        <Client/>
      
        <Getstarted/>
        </div>
        <Footer/>
      </>
  )
}
