import React, { useEffect } from 'react';
import "./about.css"
import { Helmet } from 'react-helmet';
import icons1 from "../assets/icons8-arrow-100.png";
import icons2 from "../assets/icons8-call-50.png";
import icons3 from "../assets/mission.png";
import icons4 from "../assets/achivement.png";
import icons5 from "../assets/reward.png";
import Footer from '../components/Footer';
import {FaUserPlus, FaWhatsapp } from 'react-icons/fa';


export default function About() {
useEffect(()=>{
  window.scrollTo(0,0);
},[])
  
  return (
    <>
    <Helmet>
      <title>About Digintra</title>
      <meta name="description" content=''/>
    </Helmet>
     
    <div className=" patterncon relative w-auto pt-[230px] lg:h-[720px] pb-[50px] ">
      <div className='absolute inset-0 backdrop-blur-md w-full h-full'></div>
            <div className='relative w-[310px] lg:w-[1140px] py-10 h-auto mx-auto z-10'>
        <h1 className="text-center text-[30px] font-semibold " style={{fontFamily:"'Montserrat', sans-serif"}}>Learn About The{<br/>}Services We Provide </h1>
      <p className='text-center mt-4' style={{fontFamily:"'Poppins', sans-serif"}}>  DIGINTRA is a cloud-based SMS marketing solution, which helps small to large businesses enhance audience engagement. We offers easy, powerful & self–serve messaging platform..{<br/>}
                        <span className="client-name-bold">Some of our specialties include:</span>{<br/>}At DIGINTRA we offer feature rich solution for Global SMS messaging service. Our customers can easily trigger cost-effective bulk SMS campaigns to thousands or millions of customers. Our SMS solutions provide you with the ability to send personalised notification, alerts, discounts, surveys text to engage your customers. Using DIGINTRA API's, you can easily send SMS to your customer's phones from your website, Mobile Apps etc.</p>
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
     <div className='w-auto bg-white  h-auto py-[90px]'>
        <div className='w-[310px] h-auto mx-auto lg:w-[1140px]'>
   <h1 className='text-xl lg:text-[30px] text-center font-semibold' style={{fontFamily:"'Montserrat', sans-serif"}}>Rest Assured ! Your are in Experienced & Responsible Hands</h1>
   <div className='w-[200px] h-[4px] bg-blue-600 mx-auto mt-3'></div>
   <div className='w-[310px] h-auto mx-auto flex flex-col lg:flex-row gap-12 justify-between lg:w-[1140px] lg:py-10'>
 
 <div className="w-[300px] bg-gradient-to-t from-orange-50 border-l-4 border-t-2 border-r-2 border-b-4 rounded-lg border-blue-800 h-auto p-4">
<img src={icons3} className='h-[200px] mx-auto' />
<h2 className='text-xl font-semibold text-center' style={{fontFamily:"'Montserrat', sans-serif"}}>Mission</h2>
<p className='text-center pt-2' style={{fontFamily:"'Poppins',sans-serif"}}>Our Mission is to popularize brands and companies by offering our business messaging gateway to reach their business goals. We are a quality driven and we are consistently challenging ourselves to better understand what influences behavior, an engagement that drives sales, and not just what looks artsy.</p>

</div>

{/* second  card */}
<div className="w-[300px] bg-gradient-to-t from-orange-50 border-l-4 border-t-2 border-r-2 border-b-4 rounded-lg border-blue-800 h-auto p-4">
<img src={icons4}  className='h-[200px] mx-auto' />
<h2 className='text-xl font-semibold text-center' style={{fontFamily:"'Montserrat', sans-serif"}}>Our Target & Achievement</h2>
<p className='text-center pt-2' style={{fontFamily:"'Poppins',sans-serif"}}>After a successful starting 5+ years of operations, with 2800+ large and growing enterprises worldwide as our clients. We understand the value of being in the right place at the right time. Our experience and customer- focused approach will get you there, on-time and on-budget. </p>

</div>


{/* third card */}
<div className="w-[300px] bg-gradient-to-t from-orange-50 border-l-4 border-t-2 border-r-2 border-b-4 rounded-lg border-blue-800 h-auto p-4">
<img src={icons5} className='h-[200px] mx-auto' />
<h2 className='text-xl font-semibold text-center' style={{fontFamily:"'Montserrat', sans-serif"}}>Benefits & Rewards</h2>
<p className='text-center pt-2' style={{fontFamily:"'Poppins', sans-serif"}}>We care about our client's business as our own business and build results-oriented strategies for optimal outcome. For us, it is important to ensure that our clients are satisfied with our services and are being served with the care and respect they deserve.</p>

</div>

   </div>
        </div>


     </div>
     <Footer/>
   </>
  )
}
