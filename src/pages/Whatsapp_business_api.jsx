import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import "./whatsapp.css"
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import icons1 from "../assets/icons8-arrow-100.png";
import icons2 from "../assets/icons8-call-50.png";
import icons3 from "../assets/whatsapp-api-integrations.png";
import icons4 from "../assets/satis.png";
import icons5 from "../assets/moneyback.png";
import icons6 from "../assets/afford.png";
import icons7 from "../assets/manage.png";
import icons8 from "../assets/eng.png";
import icons9 from "../assets/grow.png";
import icons10 from "../assets/c1.png";
import icons11 from "../assets/c2.png";
import icons12 from "../assets/c3.png";
import icons13 from "../assets/c4.png";
import icons14 from "../assets/start2.png";
import icons15 from "../assets/Whatsapp_business_api_img.webp"
import {FaUserPlus, FaWhatsapp } from 'react-icons/fa';
import Footer from '../components/Footer';
import Getstarted from '../components/Getstarted';
import whatsappkey from "../assets/Whatsapp_key.webp";
import Client from '../components/Client';
export default function Whatsapp_business_api() {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <>

    <div className="relative patterncon enterprise w-auto pt-[230px] lg:h-[720px] pb-[50px] flex flex-col gap-6 lg:flex-row justify-center items-center">
    <div className='absolute inset-0 backdrop-blur-md w-full h-full'></div>
  <Helmet>
  <meta name="robots" content="index, follow" />

      <meta charSet="utf-8" />
      <title>DIGINTRA - WhatsApp Business API & Engagement Platform
</title>
<meta name="description" content=" DIGINTRA WABA is the Smartest WhatsApp Engagement Platform based on official WhatsApp Business APIs. Broadcast offers, automate notifications &amp; solve for support"/>
           <link rel="canonical" href="https://www.digintra.com/whatsapp-business-api" />  
      </Helmet>
      <div  className='w-[90%] lg:w-[40%] z-10 '>
      <div className=" h-auto space-y-3 md:w-full lg:-mt-[74px]">
        <div className=" mx-auto bg-[#0053b7]">
          <h3 data-aos="fade-right" className="text-center lg:text-[16px] lg:tracking-widest text-white" style={{fontFamily:"'Montserrat',sans-serif"}}>
            BUSINESSES DRIVE 25-60% REVENUES USING DIGINTRA
          </h3>
        </div>

        <h1 data-aos="fade-right" className="text-[21px] font-[700] text-[#0053b7] text-center lg:text-[40px]" style={{fontFamily:"'Montserrat' , sans-serif"}}>
        WhatsApp Business Api
        </h1>
        <p  className="text-center text-[13px] text-black lg:text-[16px]" style={{fontFamily:"'Poppins',sans-serif"}}>
          (✓)Broadcast Promotional Offers to Unlimited Users...
        </p>
        <p data-aos="fade-right" className="text-center text-[13px] text-black lg:text-[16px]" style={{fontFamily:"'Poppins',sans-serif"}}>
          (✓)Automate Messages via easy Integrations process
        </p>
        <p data-aos="fade-right" className="text-center text-[13px] text-black lg:text-[16px]" style={{fontFamily:"'Poppins',sans-serif"}}>
          (✓)Enable Multi-Agent Live Chat for Customer Support
        </p>
        <p className="text-center text-[13px] text-black lg:text-[16px]" style={{fontFamily:"'Poppins',sans-serif"}}>
          (✓)Install and Setup Chatbots and be available 24 x 7
        </p>
        <p data-aos="fade-right" className="text-center text-[13px] text-black lg:text-[16px]" style={{fontFamily:"'Poppins',sans-serif"}}>
          ⚡️Powered by Official WhatsApp Business API
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
            <div className='w-[90%] md:w-[32%] z-10'>
              <img src={icons15} alt="" className='w-full my-auto'/>
            </div>
      
    </div>
    {/* <div class="custom-shape-divider-bottom-1689311171">
  <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
  </svg>
</div>
*/}
<div className='w-auto h-auto bg-white'>

    <div className="w-[310px] h-auto mx-auto py-10 lg:w-[1140px]">
      <div className="w-[310px] h-auto space-y-4 lg:w-[1140px] lg:mx-auto">
        <h3 data-aos="fade-right" className="text-[16px] font-[700] text-[#ffab03] text-center lg:text-[21px] lg:text-left" style={{fontFamily:"'Montserrat',sans-serif"}}>
          Whatsapp Business API India
        </h3>
        <p data-aos="fade-right" className="text-center text-[13px] font-[400] px-2 lg:text-[16px] lg:text-left" style={{fontFamily:"'Poppins',sans-serif"}}>
          Using the <b>WhatsApp Business API</b>, a company may receive and
          reply to an unlimited number of WhatsApp messages. Facebook launched{" "}
          <b> WhatsApp API </b> in August 2018 to provide enterprises of all
          sizes with a dedicated channel for engaging with customers.
        </p>
        <p data-aos="fade-right" className="text-center text-[13px] font-[400] px-2 lg:text-[16px] lg:text-left " style={{fontFamily:"'Poppins',sans-serif"}}>
          From the beginning, businesses have embraced and utilised{" "}
          <b> best WhatsApp API provider in India </b> for commercial
          communication with customers. There are several compelling reasons
          why businesses choose <b>WhatsApp business API</b> over alternative
          platforms.
        </p>
      </div>
      <div className="w-[310px] h-auto mx-auto mt-5 lg:w-[1140px]">
        <h3 data-aos="fade-right" className="text-[16px] font-[700] text-[#ffab03] text-center lg:text-[21px] lg:text-left" style={{fontFamily:"'Montserrat', sans-serif"}}>
          Top Reasons to Use Indian Whatsapp API
        </h3>
        <p data-aos="fade-right" className="text-[13px] text-center mt-2 lg:text-[16px] lg:text-left" style={{fontFamily:"'Poppins',sans-serif"}}>
          {" "}
          Using WhatsApp, companies can easily positively communicate with
          their consumers. Here are some of the many advantages that WhatsApp
          offers for commercial use.
        </p>
        <ul data-aos="fade-right" className="space-y-6 px-7 mt-5 lg:px-16">
          <li className="list-disc lg:text-[16px]" style={{fontFamily:"'Poppins',sans-serif"}}>
            WhatsApp has quickly become one of the most widely used messaging
            apps worldwide. Given that over 1.1 million messages are posted
            every second, it's easy to imagine that using this platform for
            communication has become commonplace.
          </li>
          <li className="list-disc lg:text-[16px] " style={{fontFamily:"'Poppins',sans-serif"}}>
            WhatsApp messages are far more likely to be opened than emails or
            electronic correspondence. Businesses can bypass the middleman and
            speak directly to their customers using{" "}
            <b>WhatsApp API in India</b> .
          </li>
          <li className="list-disc lg:text-[16px]" style={{fontFamily:"'Poppins',sans-serif"}}>
            {" "}
            Businesses may more swiftly reply to customer queries thanks to
            message automation. The end effect might be an increase in revenue
            and contented clients.
          </li>
          <li className="list-disc lg:text-[16px]" style={{fontFamily:"'Poppins',sans-serif"}}>
            {" "}
            The usage of <b>WhatsApp API Business Vendor In India</b> may
            liven up conversations and make them more productive. Emoticons,
            stickers, and multimedia in the rich text allow users to connect
            and maintain communication. Broad
          </li>
        </ul>
      </div>
    </div>
    <div data-aos="fade-up" className="w-[310px] h-auto mx-auto lg:w-[1140px] lg:flex lg:gap-x-4">
      <div className="lg:mt-12 lg:px-5">
        <h3 className="text-[40px] font-[700] text-center leading-tight my-4 lg:text-left" style={{fontFamily:"'Montserrat',sans-serif"}}>
          Broadcast Promotional Messages (Officially)
        </h3>
        <p className="text-[13px] text-center mt-4 font-[400] lg:text-left lg:text-[16px]" style={{fontFamily:"'Poppins',sans-serif"}}>
          Well, WhatsApp recently allowed Businesses to Broadcast and Automate
          Promotional Messages via WhatsApp Business API.
        </p>
        {<br />}

        <p className="text-[13px] text-center font-[400] lg:text-[16px] lg:text-left" style={{fontFamily:"'Poppins',sans-serif"}}>
          You can Now Send Exciting Offers, Discount Coupon Code and Festival
          Wishes without getting your Number blocked!
        </p>
      </div>
      <div className="lg:w-[800px] ">
        <img src={icons3} alt="WhatsApp Business Api" />
      </div>
    </div>

    <div className=" mt-8 lg:mt-12 h-auto mx-auto lg:w-[80%] lg:flex justify-between items-center border-2 border-blue-800 border-dashed rounded-lg md:px-11 mdLpy-11 bg-gradient-to-tr from-indigo-100 via-green-100 to-orange-100">
     <div className='w-full h-full flex-1'>
      <img src={whatsappkey} alt=""  className='h-[50%] md:h-[80%]'/>
     </div>
      <div className='flex-1'>
        <h3 className="head text-center font-[700] text-[21px] lg:text-[40px] text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-indigo-600 to-pink-500  " style={{fontFamily:"'Montserrat', sans-serif"}}>
          {" "}
          Smart Retargeting for{<br />}
          3X Sales
        </h3>

        <div className="space-y-4 mt-2">
          <p className="text-[13px] font-[400] text-center lg:text-[16px] p-4 " style={{fontFamily:"'Poppins',sans-serif"}}>
            Your brand is obviously very important and so our WABA API will
            always be on hand to help to turn potential customer problems into
            praise
          </p>
          <p className="text-[13px] font-[400] text-center lg:text-[16px] p-4" style={{fontFamily:"'Poppins',sans-serif"}}>
            ⚡️ Segregate your Audiences Smartly and Re-Broadcast for Higher
            Conversions!
          </p>
        </div>
      </div>
    </div>
    <div className="w-[310px] h-auto mx-auto space-y-5 mt-5 lg:w-[1140px]">
      <p className="text-[16px] font-[500]" style={{fontFamily:"'Poppins',sans-serif"}}>
        By its very nature, WhatsApp is where its users already are. It's the
        easiest method for companies to get in touch with their consumers and
        fix any issues that may arise. It guarantees improved customer
        experiences and quicker, more direct relationships. Now that we've
        established what it is and discussed why it's useful for companies, we
        can discuss how to integrate <b>WhatsApp's business API</b> into your
        operations.
      </p>
      <p className="text-[16px] font-[500]" style={{fontFamily:"'Poppins',sans-serif"}}>
        Despite first impressions, the <b>WhatsApp Business API</b> is rather
        simple to implement. It's a straightforward method of automating
        communications to provide your customers with prompt replies. This
        article provided information on every facet of the <b>WhatsApp API</b>{" "}
        . Don't hesitate to contact us at whatever convenient method; we're
        always happy to help.
      </p>
    </div>
    <div className="w-[310px] h-auto mx-auto my-20 lg:w-[1140px] ">
      <h3 data-aos="fade-right" className="text-[21px] text-[#0053b7] font-[700] text-center lg:text-[40px]" style={{fontFamily:"'Montserrat',sans-serif"}}> 
        The Most 'Complete' WhatsApp Platform
      </h3>
      <p className="text-[13px] font-[400] text-center lg:text-[16px] " style={{fontFamily:"'Poppins',sans-serif"}}>
        Everything you need to notify, chat & engage your users All in one
        place.
      </p>
      <div className="w-[200px] h-[4px] bg-blue-600 mx-auto mt-4"></div>
        
        <div className="w-[310px] h-auto mx-auto space-y-5 mt-12 grid grid-cols-1 lg:grid-cols-3 lg:w-[1140px] lg:space-y-0">


      {/* first card */}
      <div className="w-[300px] bg-gradient-to-t from-orange-50 border-l-4 border-t-2 border-r-2 border-b-4 rounded-lg border-blue-800 h-auto p-4">
        <img src={icons7} alt="WhatsApp Business Api" />
        <h3 className="text-[16px] font-semibold text-blue-800 text-center mt-5 lg:text-[21px]" style={{fontFamily:"'Montserrat',sans-serif"}}>Brand Management</h3>

        <p className=" font-[400] text-center" style={{fontFamily:"'Poppins',sans-serif"}}>
          Your brand is obviously very important and so our WABA API Features
          will always be on hand to help to turn potential customer problems
          into praise.
        </p>
      </div>

      {/* second card */}
      <div className="w-[300px] bg-gradient-to-t from-orange-50 border-l-4 border-t-2 border-r-2 border-b-4 rounded-lg border-blue-800 h-auto p-4">
        <img src={icons8} alt="WhatsApp Business Api" />
        <h3 className="text-[16px] font-semibold text-blue-800 text-center mt-5 lg:text-[21px]" style={{fontFamily:"'Montserrat',sans-serif"}}>Engage Your Audience</h3>
        <p className=" font-[400] text-center" style={{fontFamily:"'Poppins',sans-serif"}}>
          WhatsApp Business API help users to be engaged, which means they
          want to see intriguing and relevant posts that appeal to their
          interests.
        </p>
      </div>

      {/* third card */}

      <div className="w-[300px] bg-gradient-to-t from-orange-50 border-l-4 border-t-2 border-r-2 border-b-4 rounded-lg border-blue-800 h-auto p-4">
        <img src={icons9} alt="WhatsApp Business Api" />
        <h3 className="text-[16px] font-semibold text-blue-800 text-center mt-5 lg:text-[21px]" style={{fontFamily:"'Montserrat',sans-serif"}}>Grow Your Audience</h3>
        <p className=" font-[400] text-center" style={{fontFamily:"'Poppins', sans-serif"}}>
          Cultivating an audience online is more challenging than ever. With
          so many social outlets, it’s hard for business owners to find the
          time to manage social outlets effectively.
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
