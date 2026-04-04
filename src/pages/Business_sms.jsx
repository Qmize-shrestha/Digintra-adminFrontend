
import React from 'react';
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./business.css";
import { Helmet } from 'react-helmet';
import { useState } from 'react';
import { useEffect } from 'react';
import icons1 from "../assets/icons8-arrow-100.png";
import icons2 from "../assets/icons8-call-50.png";
import icons3 from "../assets/business 11.png";
import icons4 from "../assets/otp.png";
import icons5 from "../assets/appa.png";
import icons6 from "../assets/pay.png";
import icons7 from "../assets/rate.png";
import icons8 from "../assets/fast.png";
import icons9 from "../assets/t3 (1).png";
import icons10 from "../assets/c1.png";
import icons11 from "../assets/c2.png";
import icons12 from "../assets/c3.png";
import icons13 from "../assets/c4.png";
import icons14 from "../assets/start2.png";
import icons15 from "../assets/icons8-plus-501.png";
import icons16 from "../assets/Business_sms_img.webp"
import Footer from '../components/Footer';
import Getstarted from '../components/Getstarted';
import Client from '../components/Client';
import {FaUserPlus, FaWhatsapp } from 'react-icons/fa';
import businesskey from "../assets/business_key.webp"


export default function Business_sms() {
    const [Ques1, setQues1] = useState(false);
    const [Ques2, setQues2] = useState(false);
    const [Ques3, setQues3] = useState(false);
    
    function handleQues1() {
      setQues1(!Ques1);
      setQues2(false);
      setQues3(false);
    }
    function handleQues2() {
      setQues2(!Ques2);
      setQues1(false);
      setQues3(false);
    }
  
    function handleQues3() {
      setQues3(!Ques3);
      setQues1(false);
      setQues2(false);
    }
    useEffect(()=>{
      window.scrollTo(0,0);
    },[])
  return (
   
    <>
    <div className=" patterncon relative  w-auto pt-[230px] lg:h-[720px] pb-[50px]">
    <div className='absolute inset-0 backdrop-blur-md w-full h-full'></div>
    <Helmet>
    <meta name="robots" content="index, follow" />

    <meta charSet="utf-8" />
            <title>Business SMS | Business Text Messaging 
</title>
<link rel="canonical" href="https://digintra.com/business-sms" />
<meta name="description" content="Boost sales with business SMS! Reach customers instantly. Try our text messaging service today and see results.
"/>
 <meta name="keywords" content="business sms, business text messaging
" />
        
    </Helmet>
    <div className='w-[90%] m-auto flex flex-col lg:flex-row justify-center items-center gap-12'>
            <div className='w-[90%] lg:w-[45%] z-10'>
            <div className=" h-auto space-y-3 mx-auto ">
      <div className=" mx-auto bg-[#0053b7]">
        <h3 data-aos="fade-right" className="text-center lg:text-[16px] lg:tracking-widest text-white" style={{fontFamily:"'Montserrat', sans-serif"}}>
          EVERYTHING YOU NEED TO START USING SMS FORMARKETING, NOTIFICATION.
          REMINDER AND MUCHMORE
        </h3>
      </div>

      <h1 data-aos="fade-right" className="text-[21px] font-[700] text-[#0053b7] text-center lg:text-[40px]" style={{fontFamily:"'Montserrat', sans-serif"}}>
        Business SMS
      </h1>
      <p data-aos="fade-right" className="text-center text-[13px] text-black lg:text-[16px]" style={{fontFamily:"'Poppins', sans-serif"}}>
        All it takes is 30 seconds. Simply click the sign-up buttonbelow and
        you will receive FREE DEMO Credit to test.
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
            <img src={icons16} alt="" className='w-full lg:-mt-18'/>
          </div>
            </div>
   
  </div>
  {/* <div class="custom-shape-divider-bottom-1689164512">
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
    </svg>
  </div> */}
  <div className='w-auto h-auto bg-white py-10'>


  <div className="w-[310px] h-screen lg:h-auto mx-auto lg:w-[1140px] lg:flex">
    <div data-aos="fade-right" className="space-y-2 lg:space-y-7 lg:w-[500px] lg:pt-5">
      <p className="text-[13px] lg:text-left lg:text-[16px] text-center font-[400]" style={{fontFamily:"'Poppins', sans-serif"}}>
        Business SMS is the most effective way for companies to send quick
        updates – either transactions, promotions, reminders related, or of
        any other nature – to their customers. It is a vital customer
        communication channel for businesses, offering higher open and
        engagement rates than other channels like email, without being too
        intrusive. {<br />}{" "}
      </p>
      <p className="text-[13px] lg:text-left lg:text-[16px] text-center font-[400] " style={{fontFamily:"'Poppins', sans-serif"}}>
        DIGINTRA service allows you to send out thousands of SMS messages to
        your customers within seconds. We have multiple priority SMS routes
        to deliver your messages, to ensure high delivery rates and
        cost-efficiency.
      </p>
    </div>
    <div data-aos="zoom-in-up" className="w-[310px] mx-auto mt-5 lg:mt-0 lg:w-[500px]">
      <img src={icons3} alt="Business SMS" />
    </div>
  </div>

  <div className=" lg:mt-12 h-auto mx-auto lg:w-[80%] lg:flex justify-center items-center md:px-11 md:py-11 border-2 border-blue-800 rounded-lg border-dashed bg-gradient-to-tr from-indigo-100 via-green-100 to-orange-100">
    <div className='w-full h-full flex-1 '>
      <img src={businesskey} alt="" className='h-[50%] md:h-[80%]' />
    </div>
    <div className='flex-1'>
      <h3 data-aos="fade-right" className="head text-center font-[700] text-[21px] lg:text-[40px] text-[#0053b7] md:text-center" style={{fontFamily:"'Montserrat', sans-serif"}}>
        {" "}
        Key features of {<br />}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-indigo-600 to-pink-500  '>
        Business {<br />}
        SMS</span>
      </h3>
      <p data-aos="fade-right" className="text-[13px] font-[400] text-center lg:text-[16px] lg:text-center" style={{fontFamily:"'Poppins', sans-serif"}}>
        Different ways in which you can use SMS to Streamline Customer
        Communication
      </p>
    </div>
  </div>
  <div className="mt-7 w-[310px] h-auto mx-auto lg:w-[1140px] mb-16">
    <h3 data-aos="fade-right" className="text-[21px] font-[700] text-[#0053b7] text-center px-4 lg:text-[40px] " style={{fontFamily:"'Montserrat', sans-serif"}}>
      Benefits of using SMS for Business Communication
    </h3>
    <div className="w-[200px] h-[3px] bg-gray-700 mx-auto"></div>
    <div className="w-[310px] h-auto mx-auto lg:w-[1140px] grid grid-cols-1 lg:grid-cols-3 gap-12 lg:mt-8 ">
      {/* first card */}
      <div className="w-[300px] bg-gradient-to-t from-orange-50 border-l-4 border-t-2 border-r-2 border-b-4 rounded-lg border-blue-800 h-auto p-4">
        <img src={icons7} alt="Business SMS" />
        <h3 className="text-[16px] lg:text-[21px] font-semibold text-blue-800 text-center" style={{fontFamily:"'Montserrat', sans-serif"}}>
          High open rates
        </h3>
        <p className="text-[13px] lg:text-[16px] text-center font-[400]" style={{fontFamily:"'Poppins', sans-serif"}}>
          SMS offers some of the highest open and engagement rates compared
          to other communication channels.
        </p>
      </div>

      {/* second card */}

      <div className="w-[300px] bg-gradient-to-t from-orange-50 border-l-4 border-t-2 border-r-2 border-b-4 rounded-lg border-blue-800 h-auto p-4">
        <img src={icons8} alt="Business SMS" />
        <h3 className="text-[16px] lg:text-[21px] font-semibold text-blue-800 text-center" style={{fontFamily:"'Montserrat', sans-serif"}}>
          Secure & fast communication
        </h3>
        <p className="text-[13px] lg:text-[16px] text-center font-[400]" style={{fontFamily:"'Poppins', sans-serif"}}>
          SMS is the most preferred channel for sending OTPs to customers on
          priority.
        </p>
      </div>

      {/* third card */}

      <div className="w-[300px] bg-gradient-to-t from-orange-50 border-l-4 border-t-2 border-r-2 border-b-4 rounded-lg border-blue-800 h-auto p-4">
        <img src={icons9} alt="Business SMS" />
        <h3 className="text-[16px] lg:text-[21px] font-semibold text-blue-800 text-center" style={{fontFamily:"'Montserrat', sans-serif"}}>
          Customer insights
        </h3>
        <p className="text-[13px] lg:text-[16px] text-center font-[400]" style={{fontFamily:"'Poppins', sans-serif"}}>
          Track and monitor customers’ responses to your SMSes. Gain the
          visibility and insight you need to run effective campaigns.
        </p>
      </div>
    </div>
  </div>
 
  <Client/>


 <Getstarted/>
  {/* Frequently asked questiohns */}
  <div data-aos="fade-up" className="w-[310px] space-y-7 h-auto pt-[60px] mx-auto lg:w-[1140px]">
    <h3 className="text-[21px] font-[700] text-[#0053b7] text-center lg:text-[40px] " style={{fontFamily:"'Montserrat', sans-serif"}}>
      Frequently Asked Questions
    </h3>
    <div className="w-[200px] h-[4px] bg-blue-600 mx-auto "></div>
    <div className="lg:pt-[60px] w-[310px] pt-[50px] pb-7 lg:pb-14 h-auto lg:w-[1100px] mx-auto space-y-6">
      <div
        className="w-[310px] h-10 bg-[#FBFBFB] rounded-lg flex justify-between px-4 lg:w-[1000px] lg:h-14 lg:mx-auto"
        onClick={handleQues1}
      >
        <h3 className="text-[13px] font-[600] text-[#01cf80] py-3 lg:text-[19px] " style={{fontFamily:"'Montserrat', sans-serif"}}>
          What is Business SMS?{" "}
        </h3>
        <span>
          <img
            src={icons15}
            alt=""
            className="lg:h-8 h-4 l my-3"
          />
        </span>
      </div>
      {Ques1 && (
        <p className="bg-[#FBFBFB] text-[13px] px-4 lg:w-[1000px] lg:mx-auto lg:text-[16px] font-[400] text-[#646464]"  style={{fontFamily:"'Poppins', sans-serif"}}>
          Business SMS is the most effective way for companies to send quick
          updates - be it transactional, promotional, reminders, or of any
          other nature - to their customers. These are usually short text
          message sent out in bulk to customers.
        </p>
      )}

      <div
        className="w-[310px] h-10 bg-[#FBFBFB] rounded-lg flex justify-between px-4 lg:w-[1000px] lg:h-14 lg:mx-auto"
        onClick={handleQues2}
      >
        <h3 className="text-[13px] font-[600] text-[#01cf80] flex justify-between py-3 lg:text-[19px]" style={{fontFamily:"'Montserrat', sans-serif"}}>
          How can businesses use SMS?{" "}
        </h3>
        <span>
          <img
            src={icons15}
            alt=""
            className="h-4 lg:h-8 my-3"
          />
        </span>
      </div>
      {Ques2 && (
        <p className="bg-[#FBFBFB] px-4 text-[13px] lg:w-[1000px] lg:mx-auto lg:text-[16px] font-[400] text-[#646464]" style={{fontFamily:"'Poppins', sans-serif"}}>
          Businesses can use SMSes in many ways - for appointment reminders,
          delivery or order confirmation, running promotional campaigns,
          gathering feedback from their customers and more.
        </p>
      )}

      <div
        className="w-[310px] h-10 bg-[#FBFBFB] rounded-lg flex justify-between px-4 lg:w-[1000px] lg:h-14 lg:mx-auto"
        onClick={handleQues3}
      >
        <h3 className="text-[13px] font-[600] text-[#01cf80] py-3 lg:text-[19px]" style={{fontFamily:"'Montserrat', sans-serif"}}>
          Why should you use business SMS?
        </h3>
        <span>
          <img
            src={icons15}
            alt=""
            className="h-4 lg:h-8 my-3"
          />
        </span>
      </div>
      {Ques3 && (
        <p className="text-[13px] bg-[#FBFBFB] px-4 lg:w-[1000px] lg:mx-auto lg:text-[16px] font-[400] text-[#646464]" style={{fontFamily:"'Poppins', sans-serif"}}>
          SMS offers high open rates and unmatched ROI for your marketing
          campaigns. It’s a secure, non-intrusive channel via which you can
          communicate with your customers.
        </p>
      )}

      
    </div>
  </div>
  </div>
  <Footer/>
</>
  )
}
