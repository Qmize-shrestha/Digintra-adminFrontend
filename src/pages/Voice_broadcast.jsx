import React from 'react';
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./voice.css"
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import icons1 from "../assets/icons8-arrow-100.png";
import icons2 from "../assets/icons8-call-50.png";
import icons3 from "../assets/voice.png";
import icons4 from "../assets/enh.png";
import icons5 from "../assets/afford.png";
import icons6 from "../assets/pramotion.png";
import icons7 from "../assets/c1.png";
import icons8 from "../assets/c2.png";
import icons9 from "../assets/c3.png";
import icons10 from "../assets/c4.png";
import icons11 from "../assets/start2.png";
import icons12 from "../assets/Voicebroadcast_img.webp"
import {FaUserPlus, FaWhatsapp } from 'react-icons/fa';
import Footer from '../components/Footer';
import Getstarted from '../components/Getstarted';
import Client from '../components/Client';
export default function Voice_broadcast() {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <>
    <div className="  patterncon relative w-auto  pt-[230px] lg:h-[720px] pb-[50px] ">
    <div className='absolute inset-0 backdrop-blur-md w-full h-full'></div>
    <Helmet>
    <meta name="robots" content="index, follow" />

      <meta charSet="utf-8" />
      <title>Best Voice Broadcasting service Provider in India - DIGINTRA 
</title>
<meta name="description" content=" DIGINTRA offers a secure, reliable end-to-end voice portal with a diverse product line up, allowing enterprises to manage all types of calls. Call Now!"/>
            <link rel="canonical" href="https://www.digintra.com/voice-broadcast" />
      </Helmet>
      <div className='w-[90%] m-auto flex flex-col lg:flex-row justify-center items-center gap-12'>
            <div className='w-[90%] lg:w-[45%] z-10'>
            <div className=" h-auto space-y-3 mx-auto ">
        <div className=" mx-auto bg-[#0053b7]">
          <h3 data-aos="fade-right" className="text-center lg:text-[16px] lg:tracking-widest text-white" style={{fontFamily:"'Montserrat',sans-serif"}}>
            BUSINESS SMS API PLATFORM FOR YOUR ENTERPRISES.
          </h3>
        </div>

        <h1 data-aos="fade-right" className="text-[21px] font-[700] text-[#0053b7] text-center lg:text-[40px]" style={{fontFamily:"'Montserrat',sans-serif"}}>
        Voice Broadcasting
        </h1>
        <p data-aos="fade-right" className="text-center text-[13px] text-black lg:text-[16px]" style={{fontFamily:"'Poppins',sans-serif"}}>
          Send business messages to your customers globally using the API.
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
            <img src={icons12} alt="" className='w-full mix-blend-multiply lg:-mt-18'/>
          </div>
            </div>
      
    </div>
   <div className='w-auto h-auto bg-white py-10'>


    <div className="w-[310px] my-6 lg:h-auto mx-auto lg:w-[1140px] lg:flex">
      <div data-aos="fade-right" className="space-y-2 lg:space-y-7 lg:w-[500px] lg:pt-5">
        <p className="text-[13px] lg:text-left lg:text-[16px] text-center font-[400]"  style={{fontFamily:"'Poppins',sans-serif"}}> 
          DIGINTRA offers a secure, reliable end-to-end voice portal with a
          diverse product line up, allowing enterprises to manage all types of
          calls (inbound & outbound). Create unique experiences for your
          customers by personalising campaigns with voice applications. Choose
          the best one that suits your needs.
          {<br />}{" "}
        </p>
       
      </div>
      <div className="w-[310px] mx-auto mt-5 lg:mt-0 lg:w-[500px]">
        <img src={icons3} alt="Voice Broadcasting" />
      </div>
    </div>

   
    <div className="mt-7 w-[310px] h-auto mx-auto lg:w-[1140px]">
      <h3 data-aos="fade-right" className="text-[21px] font-[700] text-[#0053b7] text-center px-4 lg:text-[40px] " style={{fontFamily:"'Montserrat',sans-serif"}} >
      Voice BroadCasting
      </h3>
      <div className="w-[200px] h-[3px] bg-gray-700 mx-auto"></div>
      <div className="w-[310px] h-auto mx-auto lg:w-[1140px] grid grid-cols-1 lg:grid-cols-3 lg:mt-8 gap-16 mb-10 ">
        {/* first card */}
        <div className="w-[300px] bg-gradient-to-t from-orange-50 border-l-4 border-t-2 border-r-2 border-b-4 rounded-lg border-blue-800 h-auto p-4">
          <img src={icons4} alt="Voice Broadcasting" />
          <h3 className="text-[16px] lg:text-[21px] font-semibold text-blue-800 text-center" style={{fontFamily:"'Montserrat',sans-serif"}}>
          Enhance your customer service
          </h3>
          <p className="text-[13px] lg:text-[16px] text-center font-[400]" style={{fontFamily:"'Poppins', sans-serif"}}>
          Provide easier solutions for your customers to connect with you,anywhere in the world.
          </p>
        </div>

        {/* second card */}

        <div className="w-[300px] bg-gradient-to-t from-orange-50 border-l-4 border-t-2 border-r-2 border-b-4 rounded-lg border-blue-800 h-auto p-4">
          <img src={icons5} alt="Voice Broadcasting" />
          <h3 className="text-[16px] lg:text-[21px] font-semibold text-blue-800 text-center" style={{fontFamily:"'Montserrat',sans-serif"}}>
          Save on budgets
          </h3>
          <p className="text-[13px] lg:text-[16px] text-center font-[400]" style={{fontFamily:"'Poppins',sans-serif"}}>
          Minimise operational costs by creating more efficient processes to send messages.
          </p>
        </div>

        {/* third card */}

        <div className="w-[300px] bg-gradient-to-t from-orange-50 border-l-4 border-t-2 border-r-2 border-b-4 rounded-lg border-blue-800 h-auto p-4">
          <img src={icons6} alt="Voice Broadcasting" />
          <h3 className="text-[16px] lg:text-[21px] font-semibold text-blue-800 text-center" style={{fontFamily:"'Montserrat',sans-serif"}}>
          Strength your channels
          </h3>
          <p className="text-[13px] lg:text-[16px] text-center font-[400]" style={{fontFamily:"'Poppins',sans-serif"}}>
          Complement channel communications strategy efficiently by enabling voice for your services.
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
