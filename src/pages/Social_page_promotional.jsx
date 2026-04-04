import React from 'react';
import "./social_page.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useState } from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { useEffect } from 'react';
import icons1 from "../assets/icons8-arrow-100.png";
import icons2 from "../assets/icons8-call-50.png";
import icons3 from "../assets/social page promo.png";
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
import icons15 from "../assets/icons8-plus-501.png";
import {FaUserPlus, FaWhatsapp } from 'react-icons/fa';

import Footer2 from '../components/Footer2';
import { Helmet } from 'react-helmet';
import Client from '../components/Client';
import Getstarted from '../components/Getstarted';
export default function Social_page_promotional() {
    const [Ques1, setQues1] = useState(false);
    const [Ques2, setQues2] = useState(false);
    const [Ques3, setQues3] = useState(false);
    const [Ques4, setQues4] = useState(false);
    const [Ques5, setQues5] = useState(false);
    const [Ques6, setQues6] = useState(false);
    const [Ques7, setQues7] = useState(false);
    const [Ques8, setQues8] = useState(false);
    const [Ques9, setQues9] = useState(false);
    const [Ques10, setQues10] = useState(false);
    function handleQues1() {
      setQues1(!Ques1);
    }
    function handleQues2() {
      setQues2(!Ques2);
    }
  
    function handleQues3() {
      setQues3(!Ques3);
    }
    function handleQues4() {
      setQues4(!Ques4);
    }
    function handleQues5() {
      setQues5(!Ques5);
    }
    function handleQues6() {
        setQues6(!Ques6);
      }
      function handleQues7() {
        setQues7(!Ques7);
      }
      function handleQues8() {
        setQues8(!Ques8);
      }
      function handleQues9() {
        setQues9(!Ques9);
      }
      function handleQues10() {
        setQues10(!Ques10);
      }
      useEffect(()=>{
        window.scrollTo(0,0);
      },[])
  return (
    <>
      <Helmet>
      <meta name="robots" content="index, follow" />

        <title>Best Social Page Promotion Service Provider in India</title>
        <meta name="description" content='Looking for the Best Social Page Promotion Service Provider? Digintra Offers you to Meet Your Marketing Goals such as Brand Management, Engage Your Audience'/>
      <link rel="canonical" href="https://digintra.com/social-page-promotional" />
      </Helmet>
      <div className=" patterncon relative w-auto pt-[230px] lg:h-[720px] pb-[50px] ">
      <div className='absolute inset-0 backdrop-blur-md w-full h-full'></div>
        <div className='w-auto relative z-10 h-auto'>
            <div className='w-[310px] lg:w-[1140px] py-10 h-auto mx-auto'>

            
        <h3 class="text-center lg:text-[30px] text-[20px] font-semibold " style={{fontFamily:"'Montserrat',sans-serif"}}>Let Others Know About Your Business </h3>
        <h1 className='text-center text-[25px] font-semibold lg:text-[30px] text-blue-600 px-4 mt-4' style={{fontFamily:"'Montserrat',sans-serif"}}>Social Page Promotion</h1>
        <p className='text-center px-4 mt-4' style={{fontFamily:"'Poppins',sans-serif"}}>Social networks are at least as important as search engine marketing</p>
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
<img src={icons3} className='lg:w-[510px]' alt='Social Page Promotion'/>
<div className='pt-[50px]'>
<p style={{fontFamily:"'Poppins',sans-serif"}}>

DIGINTRA offers a one-stop solution for B2B, B2C, E-commerce, Education, Non-Profit, Enterprise, Startups looking for successful marketing on the internet, securely and in a cost-effective manner. Many companies and influencers define their corporate objectives exclusively through social networks. For other companies, social networks are at least as important as search engine marketing.{<br/>}

Now a day to become successful on the internet then you need to integrate platforms such as Facebook and Instagram into your marketing strategies & planning.
</p>
</div>
</div>
   </div>
   

   {/* third content */}
   <div className='w-auto h-auto'>
    <div className='w-[310px] h-auto lg:w-[1140px] mx-auto lg:flex'>

   
    <div className='w-[310px] lg:w-[500px] h-auto mx-auto'>
    <Swiper
  
  spaceBetween={30}
  centeredSlides={true}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  pagination={{
    clickable: true,
  }}
  modules={[Autoplay, Pagination]}
  className="mySwiper "
>

    <SwiperSlide>
        <div className='w-[310px] lg:w-[500px] h-auto mx-auto'>
            <img src={icons4} alt='Social Page Promotion'/>
        <h2 className='text-center text-xl font-semibold' style={{fontFamily:"'Montserrat',sans-serif"}}>Quality Delivery & Satisfaction</h2>
        <p className=' text-center mt-3' style={{fontFamily:"'Poppins',sanss-serif"}}>DIGINTRA's platform or API is the easiest way to reach users around the worlds and over 1000+ telecom networks.</p>
   
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className='w-[310px] lg:w-[500px] h-auto mx-auto'>
            <img src={icons5} alt='Social Page Promotion'/>
        <h2 className='text-center text-xl font-semibold' style={{fontFamily:"'Montserrat',sans-serif"}}>100% Money Back Guarantee</h2>
        <p className='text-center mt-3' style={{fontFamily:"'Poppins',sanss-serif"}}>DIGINTRA's platform or API is the easiest way to reach users around the worlds and over 1000+ telecom networks.</p>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className='w-[310px] lg:w-[500px] h-auto mx-auto'>
            <img src={icons6} alt='Social Page Promotion'/>
        <h2 className='text-center text-xl font-semibold' style={{fontFamily:"'Montserrat',sans-serif"}}>Affordable Price and Plans</h2>
        <p className='text-center mt-3' style={{fontFamily:"'Poppins',sans-serif"}}>DIGINTRA's platform or API is the easiest way to reach users around the worlds and over 1000+ telecom networks.</p>
        </div>
    </SwiperSlide>

 
    </Swiper>
    </div>
    
 <div className='w-[310px] lg:w-[500px] lg:pt-[140px] h-auto mx-auto '>
    <h3 className='text-xl font-semibold lg:text-[30px] lg:text-left text-center pt-[60px]' style={{fontFamily:"'Montserrat',sans-serif"}}>   Key features of Social Page Promotion</h3>
    <p className='text-center lg:text-left lg:mt-7 ' style={{fontFamily:"'Poppins',sans-serif"}}>Your brand is obviously very important and so our social team will always be on hand to help to turn potential customer problems into praise.</p>
 </div>
   </div>
   </div>
   

   {/* fourth content */}

   <div className='w-auto h-auto pt-[100px] '>
    <div className='w-[310px] lg:w-[1140px] h-auto mx-auto'>
    <h3 className='text-center text-[20px] lg:text-[30px] font-semibold' style={{fontFamily:"'Montserrat',sans-serif"}}>It Can Help You Meet Your Marketing Goals</h3>
    <div className='w-[200px] h-[4px] bg-blue-700 mx-auto'></div>

    <div className='w-[310px] lg:flex justify-between lg:w-[1140px] lg:py-10 h-auto mx-auto'>

  {/* first card */}

<div className="w-[300px] bg-gradient-to-t from-orange-50 border-l-4 border-t-2 border-r-2 border-b-4 rounded-lg border-blue-800 h-auto p-4">
<img src={icons7} className='h-[200px] mx-auto' />
<h2 className='text-xl font-semibold text-blue-800 text-center' style={{fontFamily:"'Montserrat',sans-serif"}}>Brand Management</h2>
<p className='text-center pt-2' style={{fontFamily:"'Poppins',sans-serif"}}>Your brand is obviously very important and so our social team will always be on hand to help to turn potential customer problems into praise.</p>

</div>

{/* second  card */}
<div className="w-[300px] bg-gradient-to-t from-orange-50 border-l-4 border-t-2 border-r-2 border-b-4 rounded-lg border-blue-800 h-auto p-4">
<img src={icons8}     className='h-[200px] mx-auto' />
<h2 className='text-xl font-semibold text-blue-800 text-center' style={{fontFamily:"'Montserrat',sans-serif"}}>Engage Your Audience</h2>
<p className='text-center pt-2' style={{fontFamily:"'Poppins',sans-serif"}}>Social media users want to be engaged, which means they want to see intriguing and relevant posts that appeal to their interests.</p>

</div>


{/* third card */}
<div className="w-[300px] bg-gradient-to-t from-orange-50 border-l-4 border-t-2 border-r-2 border-b-4 rounded-lg border-blue-800 h-auto p-4">
<img src={icons9}   className='h-[200px] mx-auto' />
<h2 className='text-xl font-semibold text-blue-800 text-center' style={{fontFamily:"'Montserrat',sans-serif"}}>Grow Your Audience</h2>
<p className='text-center pt-2' style={{fontFamily:"'Poppins',sans-serif"}}>Cultivating an audience online is more challenging than ever. With so many social outlets, it’s hard for business owners to find the time to manage social outlets effectively.</p>

</div>
    </div>

    </div>
    </div>

    {/* fifth content */}

   <Client/>

{/* sixth content */}
<Getstarted/>

    {/* seventh content */}

    <div className="w-[310px] space-y-7 h-auto pt-[60px] mx-auto lg:w-[1140px]">
      <h3 className="text-[21px] font-[700] text-[#0053b7] text-center lg:text-[40px] ">
        Frequently Asked Questions
      </h3>
      <div className="w-[200px] h-[4px] bg-blue-600 mx-auto "></div>
      <div className="lg:pt-[60px] w-[310px] pt-[50px] pb-7 lg:pb-14 h-auto lg:w-[1100px] mx-auto space-y-6">

      
      <div
        className="w-[310px] h-10 bg-[#FBFBFB] rounded-lg flex justify-between px-4 lg:w-[1000px] lg:h-14 lg:mx-auto"
        onClick={handleQues1}
      >
        <h3 className="text-[13px] font-[600] text-[#01cf80] py-3 lg:text-[19px] " style={{fontFamily:"'Montserrat',sans-serif"}}>
        What is Business SMS?{" "}
        </h3>
        <span>
          <img src={icons15} alt="" className="lg:h-8 h-4 l my-3" />
        </span>
      </div>
      {Ques1 && (
        <p className="bg-[#FBFBFB] text-[13px] px-4 lg:w-[1000px] lg:mx-auto lg:text-[16px] font-[400] text-[#646464]" style={{fontFamily:"'Poppins',sans-serif"}}>
          Business SMS is the most effective way for companies to send quick updates - be it transactional, promotional, reminders, or of any other nature - to their customers. These are usually short text message sent out in bulk to customers.
        </p>
      )}

      <div
        className="w-[310px] h-10 bg-[#FBFBFB] rounded-lg flex justify-between px-4 lg:w-[1000px] lg:h-14 lg:mx-auto"
        onClick={handleQues2}
      >
        <h3 className="text-[13px] font-[600] text-[#01cf80] flex justify-between py-3 lg:text-[19px]" style={{fontFamily:"'Montserrat',sans-serif"}}>
        How can businesses use SMS? 
        </h3>
        <span>
          <img src={icons15} alt="" className="h-4 lg:h-8 my-3" />
        </span>
      </div>
      {Ques2 && (
        <p className="bg-[#FBFBFB] px-4 text-[13px] lg:w-[1000px] lg:mx-auto lg:text-[16px] font-[400] text-[#646464]" style={{fontFamily:"'Poppins',sans-serif"}}>
          Businesses can use SMSes in many ways - for appointment reminders, delivery or order confirmation, running promotional campaigns, gathering feedback from their customers and more.
        </p>
      )}

      <div
        className="w-[310px] h-10 bg-[#FBFBFB] rounded-lg flex justify-between px-4 lg:w-[1000px] lg:h-14 lg:mx-auto"
        onClick={handleQues3}
      >
        <h3 className="text-[13px] font-[600] text-[#01cf80] py-3 lg:text-[19px]" style={{fontFamily:"'Montserrat',sans-serif"}}>
        Why should you use business SMS?
        </h3>
        <span>
          <img src={icons15} alt="" className="h-4 lg:h-8 my-3" />
        </span>
      </div>
      {Ques3 && (
        <p className="text-[13px] bg-[#FBFBFB] px-4 lg:w-[1000px] lg:mx-auto lg:text-[16px] font-[400] text-[#646464]" style={{fontFamily:"'Poppins',sans-serif"}}>
           SMS offers high open rates and unmatched ROI for your marketing campaigns. It’s a secure, non-intrusive channel via which you can communicate with your customers.
        </p>
      )}

      <div
        className="w-[310px] h-10 bg-[#FBFBFB] rounded-lg flex justify-between px-4 lg:w-[1000px] lg:h-14 lg:mx-auto"
        onClick={handleQues4}
      >
        <h3 className="text-[13px]  font-[600] text-[#01cf80] lg:text-[19px] " style={{fontFamily:"'Montserrat',sans-serif"}}>
        What is bulk SMS in Ahmedabad, and how does it work?
        </h3>
        <span>
          <img src={icons15} alt="" className="h-4 lg:h-8 my-3" />
        </span>
      </div>
      {Ques4 && (
        <p className="text-[13px] bg-[#FBFBFB] px-4 lg:w-[1000px] lg:mx-auto lg:text-[16px] font-[400] text-[#646464]" style={{fontFamily:"'Poppins',sans-serif"}}>
        Bulk SMS refers to sending many text messages to mobile devices. It works by using a software platform to send messages to targeted recipients.
        </p>
      )}

      <div
        className="w-[310px] h-10 bg-[#FBFBFB] rounded-lg flex justify-between px-4 lg:w-[1000px] lg:h-14 lg:mx-auto"
        onClick={handleQues5}
      >
        <h3 className="text-[13px] font-[600] text-[#01cf80]  lg:text-[19px]" style={{fontFamily:"'Montserrat',sans-serif"}}>
        How can bulk SMS services benefit my business in Ahmedabad?
        </h3>
        <span>
          <img src={icons15} alt="" className="h-4 lg:h-8 my-3" />
        </span>
      </div>
      {Ques5 && (
        <p className="text-[13px] bg-[#FBFBFB] px-4 lg:w-[1000px] lg:mx-auto lg:text-[16px] font-[400] text-[#646464]" style={{fontFamily:"'Poppins',sans-serif"}}>
           Bulk SMS services with Digintra can benefit your business by providing a cost-effective way to reach a large audience quickly, increase engagement, and generate leads. 
        </p>
      )}


<div
        className="w-[310px] h-10 bg-[#FBFBFB] rounded-lg flex justify-between px-4 lg:w-[1000px] lg:h-14 lg:mx-auto"
        onClick={handleQues6}
      >
        <h3 className="text-[13px] font-[600] text-[#01cf80]  lg:text-[19px]" style={{fontFamily:"'Montserrat',sans-serif"}}>
        Can I personalize my bulk SMS messages in Ahmedabad?
        </h3>
        <span>
          <img src={icons15} alt="" className="h-4 lg:h-8 my-3" />
        </span>
      </div>
      {Ques6 && (
        <p className="text-[13px] bg-[#FBFBFB] px-4 lg:w-[1000px] lg:mx-auto lg:text-[16px] font-[400] text-[#646464]" style={{fontFamily:"'Poppins',sans-serif"}}>
          Yes, you can personalize bulk SMS messages by including the recipient's name, location, or other relevant information, making the message more relevant and engaging. 
        </p>
      )}

      
<div
        className="w-[310px] h-10 bg-[#FBFBFB] rounded-lg flex justify-between px-4 lg:w-[1000px] lg:h-14 lg:mx-auto"
        onClick={handleQues7}
      >
        <h3 className="text-[13px] font-[600] text-[#01cf80]  lg:text-[19px]" style={{fontFamily:"'Montserrat', sans-serif"}}>
        What is the cost of bulk SMS in Ahmedabad?
        </h3>
        <span>
          <img src={icons15} alt="" className="h-4 lg:h-8 my-3" />
        </span>
      </div>
      {Ques7 && (
        <p className="text-[13px] bg-[#FBFBFB] px-4 lg:w-[1000px] lg:mx-auto lg:text-[16px] font-[400] text-[#646464]" style={{fontFamily:"'Poppins',sans-serif"}}>
        The cost of bulk SMS in Ahmedabad depends on factors such as the number of messages sent, the provider, and the type of service. Prices vary, but many providers offer affordable rates. 
        </p>
      )}

      
<div
        className="w-[310px] h-10 bg-[#FBFBFB] rounded-lg flex justify-between px-4 lg:w-[1000px] lg:h-14 lg:mx-auto"
        onClick={handleQues8}
      >
        <h3 className="text-[13px] font-[600] text-[#01cf80]  lg:text-[19px]" style={{fontFamily:"'Montserrat',sans-serif"}}>
        Are there any restrictions on the number of messages I can send in a day in Ahmedabad?
        </h3>
        <span>
          <img src={icons15} alt="" className="h-4 lg:h-8 my-3" />
        </span>
      </div>
      {Ques8 && (
        <p className="text-[13px] bg-[#FBFBFB] px-4 lg:w-[1000px] lg:mx-auto lg:text-[16px] font-[400] text-[#646464]" style={{fontFamily:"'Poppins',sans-serif"}}>
            Yes, there are restrictions on the number of messages you can send in a day in Ahmedabad, which vary depending on the provider and the type of service. Be sure to check with your provider for details. 
                        </p>
        
      )}

               
<div
        className="w-[310px] h-10 bg-[#FBFBFB] rounded-lg flex justify-between px-4 lg:w-[1000px] lg:h-14 lg:mx-auto"
        onClick={handleQues9}
      >
        <h3 className="text-[13px] font-[600] text-[#01cf80]  lg:text-[19px]" style={{fontFamily:"'Montserrat',sans-serif"}}>
        Is it possible to schedule bulk SMS campaigns in Ahmedabad?
        </h3>
        <span>
          <img src={icons15} alt="" className="h-4 lg:h-8 my-3" />
        </span>
      </div>
      {Ques9 && (
        <p className="text-[13px] bg-[#FBFBFB] px-4 lg:w-[1000px] lg:mx-auto lg:text-[16px] font-[400] text-[#646464]" style={{fontFamily:"'Poppins', sans-serif"}}>
              Yes, it is possible to schedule bulk SMS campaigns in Ahmedabad. This feature allows you to plan and execute your campaigns in advance, saving time and increasing efficiency. 
        </p>
      )}
                         
<div
        className="w-[310px] h-10 bg-[#FBFBFB] rounded-lg flex justify-between px-4 lg:w-[1000px] lg:h-14 lg:mx-auto"
        onClick={handleQues10}
      >
        <h3 className="text-[13px] font-[600] text-[#01cf80]  lg:text-[19px]" style={{fontFamily:"'Montserrat',sans-serif"}}>
        What is the difference between promotional and transactional bulk SMS in Ahmedabad?
        </h3>
        <span>
          <img src={icons15} alt="" className="h-4 lg:h-8 my-3" />
        </span>
      </div>
      {Ques10 && (
        <p className="text-[13px] bg-[#FBFBFB] px-4 lg:w-[1000px] lg:mx-auto lg:text-[16px] font-[400] text-[#646464]" style={{fontFamily:"'Poppins',sans-serif"}}>
                Promotional bulk SMS is used for marketing purposes and can be sent to non-DND (Do Not Disturb) numbers, while transactional bulk SMS is used for informational purposes and can be sent to both DND and non-DND numbers.
        </p>
      )}
    </div>
    </div>
   
    <Footer2/>
    
   </>
  )
}
