
import React from 'react';
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import icons1 from "../assets/icons8-arrow-100.png";
import icons2 from "../assets/icons8-call-50.png";
import icons3 from "../assets/whole.png";
import icons4 from "../assets/fast.png";
import icons5 from "../assets/media.png";
import icons6 from "../assets/customer.png";
import icons7 from "../assets/all.png";
import icons8 from "../assets/acc.png";
import icons9 from "../assets/realtime.png";
import {FaUserPlus, FaWhatsapp } from 'react-icons/fa';
import icons10 from "../assets/c1.png";
import icons11 from "../assets/c2.png";
import icons12 from "../assets/c3.png";
import icons13 from "../assets/c4.png";
import icons14 from "../assets/start2.png";
import icons15 from "../assets/Wholesale_sms_img.webp"
import Footer from '../components/Footer';
import "./wholesale.css";
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Getstarted from '../components/Getstarted';
import Client from '../components/Client';
import wholesalekey from "../assets/wholesale_key.webp";

export default function Wholesale_messaging() {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <>
        <div className=" patterncon relative w-auto pt-[230px] lg:h-[720px] pb-[50px]">
        <div className='absolute inset-0 backdrop-blur-md w-full h-full'></div>
          <Helmet>
          <meta charSet="utf-8" />
                  <title>Best Wholesale Messaging - SMS Service Provider in India - Digintra</title>
                  <meta name="description" content="Get Low-cost wholesale messaging at DIGINTRA. Send texts in bulk without breaking the bank. Get connected fast.
"/>
 <meta name="keywords" content="wholsale messaging, bulk messaging, wholesale sms
" />
  <link rel="canonical" href="https://digintra.com/wholesale-messaging" />
                  <meta name="keywords" content=""/>
          </Helmet>
          <div className='w-[90%] m-auto flex flex-col lg:flex-row justify-center items-center gap-12'>
            <div className='w-[90%] lg:w-[45%] z-10'>
            <div className=" h-auto space-y-3 mx-auto ">
            <div className=" mx-auto bg-[#0053b7]">
              <h3 data-aos="fade-right" className="text-center lg:text-[16px] lg:tracking-widest text-white" style={{fontFamily:"'Montserrat', sans-serif"}}>
                GLOBAL MESSAGING SERVICE TO CONNECT WITH YOUR CUSTOMERS
              </h3>
            </div>
  
            <h1 data-aos="fade-right" className="text-[21px] font-[700] text-[#0053b7] text-center lg:text-[40px]" style={{fontFamily:"'Montserrat', sans-serif"}}>
            Wholesale Messaging
            </h1>
            <p data-aos="fade-right" className="text-center text-[13px] text-black lg:text-[16px]" style={{fontFamily:"'Poppins', sans-serif"}}>
              Use bulk SMS to raise brand awareness, optimise your communications
              and enhance the customer journey
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
            <div className='w-[90%] md:w-[35%] z-10'>
            <img src={icons15} alt="" className='w-full mix-blend-multiply lg:-mt-18'/>
          </div>
            </div>
         
        </div>
      <div className='w-auto h-auto bg-white py-10'>


  
        <div className="w-[310px] h-screen lg:h-auto mx-auto lg:w-[1140px] lg:flex">
          <div data-aos="fade-right" className="space-y-2 lg:space-y-7 lg:w-[500px] lg:pt-5">
            <p className="text-[13px] lg:text-left lg:text-[16px] text-center font-[400]" style={{fontFamily:"'Poppins', sans-serif"}}>
              DIGINTRA offers a one-stop solution for wholesalers looking to
              facilitate superior messaging services to any network instantly,
              securely and in a cost-effective manner. Focused on meeting your
              requirements with a tailored and effective routing profile, our
              global experts address each individual wholesaler's challenges and
              needs.
              {<br />}{" "}
            </p>
            <p className="text-[13px] lg:text-left lg:text-[16px] text-center font-[400] " style={{fontFamily:"'Poppins', sans-serif"}}>
              Connect to us using HTTP, SMPP, or FTP or simply upload your numbers
              and click-send using our web service - no complicated setups or
              hardware required. With direct connections to over 122 carriers and
              more than 550 MNO’s in more than 100+ countries worldwide, DIGINTRA
              consistently offers the highest quality and most stable routes.
            </p>
          </div>
          <div data-aos="zoom-in-up" className="w-[310px] mx-auto mt-5 lg:mt-0 lg:w-[500px]">
            <img src={icons3} alt="Wholesale Messaging" />
          </div>
        </div>
  
        <div className=" lg:mt-12 h-auto mx-auto lg:w-[80%] lg:flex justify-between items-center border-2 border-blue-800 rounded-lg border-dashed bg-gradient-to-tr from-indigo-100 via-green-100 to-orange-100 md:px-11 py-11">
          <div className='flex-1'>
            <img src={wholesalekey} alt="" className='h-[50%] md:h-[80%]' />
          </div>
          <div data-aos="fade-up" className='flex-1'>
            <h3 className="head text-center font-[700] text-[21px] lg:text-[40px] text-[#0053b7] lg:text-center" style={{fontFamily:"'Montserrat', sans-serif"}}>
              {" "}
              Key features of {<br/>} <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-indigo-600 to-pink-500 '>

              
  Wholesale {<br/>}
  Messaging</span>
            </h3>
            <p className="text-[13px] font-[400] text-center lg:text-[16px] m-10 "  style={{fontFamily:"'Poppins', sans-serif"}}>
            Global Reach Connect with your global audiences effortlessly via single or bulk SMS messages without overspending.
            </p>
          </div>
        </div>

        
        <div className="mt-7 w-[310px] h-auto mx-auto lg:w-[1140px] mb-16">
          <h3 data-aos="fade-right" className="text-[21px] font-[700] text-[#0053b7] text-center px-4 lg:text-[40px] "  style={{fontFamily:"'Montserrat', sans-serif"}}> 
          Benefits of Wholesale Messaging
          </h3>
          <div className="w-[200px] h-[3px] bg-gray-700 mx-auto mb-4"></div>
          <div className="w-[310px] h-auto mx-auto lg:w-[1140px] grid grid-cols-1 lg:grid-cols-3 gap-12 lg:mt-8 ">
            {/* first card */}
            <div className="w-[300px] bg-gradient-to-t from-orange-50 border-l-4 border-t-2 border-r-2 border-b-4 rounded-lg border-blue-800 h-auto p-4">
              <img src={icons7} alt="Wholesale Messaging" />
              <h3 className="text-[16px] lg:text-[21px] font-semibold text-blue-800 text-center" style={{fontFamily:"'Montserrat', sans-serif"}}>
              Dedicated Sender IDs
              </h3>
              <p className="text-[13px] lg:text-[16px] text-center font-[400]" style={{fontFamily:"'Poppins',sans-serif"}}>
              Get a sender IDs like short-code, alphanumeric or long-code for your SMS. Take the next steps with Sender ID
              </p>
            </div>
  
            {/* second card */}
  
            <div className="w-[300px] bg-gradient-to-t from-orange-50 border-l-4 border-t-2 border-r-2 border-b-4 rounded-lg border-blue-800 h-auto p-4">
              <img src={icons8} alt="Wholesale Messaging" />
              <h3 className="text-[16px] lg:text-[21px] font-semibold text-blue-800 text-center" style={{fontFamily:"'Montserrat',sans-serif"}}>
              All message (Contents) types supported
              </h3>
              <p className="text-[13px] lg:text-[16px] text-center font-[400]" style={{fontFamily:"'Poppins',sans-serif"}}>
              Login to your customer portal and start sending TEXT, flash messages, WAP push, long messages in any Country language.
              </p>
            </div>
  
            {/* third card */}
  
            <div className="w-[300px] bg-gradient-to-t from-orange-50 border-l-4 border-t-2 border-r-2 border-b-4 rounded-lg border-blue-800 h-auto p-4">
              <img src={icons9} alt="Wholesale Messaging" />
              <h3 className="text-[16px] lg:text-[21px] font-semibold text-blue-800 text-center" style={{fontFamily:"'Montserrat',sans-serif"}}>
              Real-time Delivery
              </h3>
              <p className="text-[13px] lg:text-[16px] text-center font-[400]" style={{fontFamily:"'Poppins',sans-serif"}}>
              Check the delivery of your messages in real time. Start sending SMS without any programming - No Contracts Required.
              </p>
            </div>
          </div>
        </div>
     
       <Client/>

        <div className="w-[310px] h-auto mx-auto lg:w-[1140px]">
          <h3 data-aos="fade-right" className="text-[21px] font-[700] text-[#0053b7] text-center px-4 lg:text-[40px] " style={{fontFamily:"'Montserrat',sans-serif"}}>Flexible pricing model for your business needs</h3>
          <div className="w-[200px] h-[4px] bg-blue-600 mt-2 mx-auto"></div>
          <div className="w-[310px] h-auto mx-auto mt-10 space-y-5 pb-14 lg:flex lg:w-[1140px] lg:space-y-0 lg:space-x-7">
  
  
          <div data-aos="fade-up">
              <h3 className="text-[16px] lg:text-[21px] font-[500] text-[#ffab03] text-center" style={{fontFamily:"'Montserrat',sans-serif"}}>Pay-As-You-Go Model Pricing</h3>
              <p className="text-center lg:px-4" style={{fontFamily:"'Poppins',sans-serif"}}>Pay for what you use when you start. No commitment or unncessary contracts.{<br/>} Pre-pay and you're set!</p>
          </div>
          <div data-aos="fade-up">
              <h3 className="text-[16px] lg:text-[21px] font-[500] text-[#ffab03] text-center" style={{fontFamily:"'Montserrat',sans-serif"}}>Volume Discount As You Scale Pricing</h3>
              <p className="text-center lg:px-2" style={{fontFamily:"'Poppins',sans-serif"}}>Avail Pricing for large volume can go as low as you scale your usage.</p>
          </div>
          </div>
        </div>
        <Getstarted/>
        </div>
        <Footer/>
      </>
  )
}
