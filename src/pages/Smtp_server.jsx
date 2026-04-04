import React from 'react';
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./smtp.css";
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import icons1 from "../assets/icons8-arrow-100.png";
import icons2 from "../assets/icons8-call-50.png";
import icons3 from "../assets/smtp.png";
import icons4 from "../assets/any.png";
import icons5 from "../assets/speed.png";
import icons6 from "../assets/track.png";
import icons7 from "../assets/c1.png";
import icons8 from "../assets/c2.png";
import icons9 from "../assets/c3.png";
import icons10 from "../assets/c4.png";
import icons11 from "../assets/start2.png";
import icons12 from "../assets/Smtp_server_img.webp"
import Footer from '../components/Footer';
import Getstarted from '../components/Getstarted';
import Client from '../components/Client';
import {FaUserPlus, FaWhatsapp } from 'react-icons/fa';
import smtpkey from "../assets/smtpserver_key.webp";


export default function Smtp_server() {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <>
    <div className=" patterncon relative w-auto pt-[230px] lg:h-[720px] pb-[50px]">
    <div className='absolute inset-0 backdrop-blur-md w-full h-full'></div>
      <Helmet>
      <meta name="robots" content="index, follow" />

      <meta charSet="utf-8" />
      <title>Best SMTP Server Service Provider in India - DIGINTRA
</title>
<meta name="description" content=" Looking for the Best SMTP server Service Provider? DIGINTRA provides a reliable and cost-effective SMTP service. Contact us Today!"/>
             <link rel="canonical" href="https://www.digintra.com/smtp-server" />
      </Helmet>
      <div className='w-[90%] m-auto flex flex-col lg:flex-row justify-center items-center gap-12'>
            <div className='w-[90%] lg:w-[45%] z-10'>
            <div className="h-auto space-y-3 mx-auto ">
      

      <h1 data-aos="fade-right" className="text-[21px] font-[700] text-[#0053b7] text-center lg:text-[40px]" style={{fontFamily:"'Montserrat',sans-serif"}}>
      SMTP Server
      </h1>
      <p data-aos="fade-right" className="text-center text-[13px] text-black lg:text-[16px]" style={{fontFamily:"'Poppins',sans-serif"}}> 
        A reliable SMTP server, easy integration to reach more customers
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
            <img src={icons12} alt="" className='w-full  mix-blend-multiply lg:-mt-18'/>
          </div>
            </div>
     
    </div>
  <div className='w-auto h-auto bg-white py-10'>



    <div className="w-[310px]  h-screen lg:h-auto mx-auto lg:w-[1140px] lg:flex">
      <div data-aos="fade-right" className="space-y-2 lg:space-y-7 lg:w-[500px] lg:pt-5">
        <p className="text-[13px] lg:text-left lg:text-[16px] text-center font-[400]" style={{fontFamily:"'Poppins',sans-serif"}}>
          Now a day, its very important to choose a best & professional SMTP
          server: in the past (before the spam era), sending emails was not
          problematical, whereas nowadays it is extremely important to follow
          the regulations of all email servers in order to avoid messages
          ending up in spam folders or even being deleted by email
          servers.Different email servers treat emails in different ways,
          according to the reputability of SMTP servers, white-lists and
          black-lists.
          {<br />}{" "}
        </p>
        <p style={{fontFamily:"'Poppins',sans-serif"}}>
          We at DIGINTRA, delivered time-sensitive, business-critical emails
          into user inboxes. We do not compromise on email sending and have
          stringently kept spammers away from our platform.
        </p>
        <p className="text-[13px] lg:text-left lg:text-[16px] text-center font-[400] " style={{fontFamily:"'Poppins',sans-serif"}}>
          Whether you send 10 or 1 million emails a day - we have the
          expertise to get your emails to inboxes. We use industry standards
          like SPF, DKIM and DMARC to certify your outgoing email. Getting
          email to the recipient with your professional email identity is a
          discipline with no compromises. We work closely together and provide
          supports.
        </p>
      </div>
      <div data-aos="zoom-in-up" className="w-[310px] mx-auto mt-5 lg:mt-0 lg:w-[500px]">
        <img src={icons3} alt="SMTP Server" />
      </div>
    </div>

    <div className=" pt-[100px] lg:mt-12 h-auto mx-auto lg:w-[80%] lg:flex justify-between items-center md:px-11 md:py-11 border-2 border-blue-800 border-dashed rounded-lg bg-gradient-to-tr from-indigo-100 via-green-100 to-orange-100">
      <div className='w-full h-full flex-1'>
      <img src={smtpkey} alt="" className='h-[50%] md:h-[80%]' />
      </div> 
      <div data-aos="fade-up" className='flex-1'>
        <h3 className="head text-center font-[700] text-[21px] lg:text-[40px] text-[#0053b7] " style={{fontFamily:"'Montserrat',sans-serif"}}>
          {" "}
          Key features of {<br />} <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-indigo-600 to-pink-500 '>

        
          SMTP {<br />}
          SERVER  </span>
        </h3>
        <p className="text-[13px]  font-[400] text-center lg:text-[16px] p-4 " style={{fontFamily:"'Poppins',sans-serif"}}>
          DIGINTRA provide a reliable and cost-effective SMTP service.{<br />}{" "}
          We constantly monitor blacklists and focus on maintaining 
          relationships with major email providers to keep our servers
          whitelisted. This means that all email servers recognise
          your messages as safe and all of your messages are delivered.
        </p>
        <p className="text-[13px] font-[400] text-center lg:text-[16px] p-4 " style={{fontFamily:"'Poppins',sans-serif"}}>
          Easily Integrate and deliver emails via DIGINTRA API.{<br />} Our
          email relay and {<br />} flexible API offers an easy way to
          integrate your transactional emails.{<br />} Find information
          whenever you need through our in-depth documentation and dedicated
          customer support.
        </p>
      </div>
    </div>
    <div className="mt-7 w-[310px] h-auto mx-auto lg:w-[1140px]">
      <h3 data-aos="fade-right" className="text-[21px] font-[700] text-[#0053b7] text-center px-4 lg:text-[40px] " style={{fontFamily:"'Montserrat',sans-serif"}}>
        A reliable SMTP server
      </h3>
      <div className="w-[200px] h-[3px] bg-gray-700 mx-auto"></div>
      <div className="w-[310px] h-auto mx-auto lg:w-[1140px] grid grid-cols-1 lg:grid-cols-3 lg:mt-8 gap-16 mb-10">
        {/* first card */}
        <div className="w-[300px] bg-gradient-to-t from-orange-50 border-l-4 border-t-2 border-r-2 border-b-4 rounded-lg border-blue-800 h-auto p-4">
          <img src={icons4} alt="SMTP Server" />
          <h3 className="text-[16px] lg:text-[21px] font-semibold text-blue-800 text-center" style={{fontFamily:"'Montserrat',sans-serif"}} >
            Send email from anywhere, anytime
          </h3>
          <p className="text-[13px] lg:text-[16px] text-center font-[400]" style={{fontFamily:"'Poppins',sans-serif"}}>
            You set your SMTP settings one time only, in your email client or
            mailing program, and you'll never need to change them again.
            Anytime you're connected to the Internet, from your laptop, iPhone
            or PC, you'll be ready to send email, from any of your email
            addresses, regardless of your Internet connection.
          </p>
        </div>

        {/* second card */}

        <div className="w-[300px] bg-gradient-to-t from-orange-50 border-l-4 border-t-2 border-r-2 border-b-4 rounded-lg border-blue-800 h-auto p-4">
          <img src={icons5} alt="SMTP Server" />
          <h3 className="text-[16px] lg:text-[21px] font-semibold text-blue-800 text-center" style={{fontFamily:"'Montserrat',sans-serif"}}>
            Enjoy super, high-speed delivery
          </h3>
          <p className="text-[13px] lg:text-[16px] text-center font-[400]" style={{fontFamily:"'Poppins',sans-serif"}}>
            Most of the SMTP servers tend to get overloaded, causing frequent
            delays and/or errors in email delivery. Our SMTP server deliver
            your emails quickly and reliably, guaranteeing the same level of
            dependable professional service, always..
          </p>
        </div>

        {/* third card */}

        <div className="w-[300px] bg-gradient-to-t from-orange-50 border-l-4 border-t-2 border-r-2 border-b-4 rounded-lg border-blue-800 h-auto p-4">
          <img src={icons6} alt="SMTP Server" />
          <h3 className="text-[16px] lg:text-[21px] font-semibold text-blue-800 text-center" style={{fontFamily:"'Montserrat',sans-serif"}}>
            Keep track of your emails
          </h3>
          <p className="text-[13px] lg:text-[16px] text-center font-[400]" style={{fontFamily:"'Poppins',sans-serif"}}>
            Check out the real-time delivery statistics available. Our system
            will show you what messages have been successfully delivered and,
            further, let you know exactly why an email has not delivered. We
            actively seek to get our servers whitelisted by major email
            providers and strictly follow the Email senders' best practices
            and guidelines.
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
