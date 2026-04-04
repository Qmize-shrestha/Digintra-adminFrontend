import React from 'react';
import { Link } from 'react-router-dom';
import { MdLocationPin } from "react-icons/md";
import {FaSkype} from "react-icons/fa";
import { MdEmail } from 'react-icons/md';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import {IoMdCall} from "react-icons/io";
import digintralogo from "../assets/digintra-logo.png";
import footermap from "../assets/footermap.svg";
export default function Footer2Del() {
  return (
    <div className="w-auto relative h-auto bg-[#064DAB]">
    <div class="custom-shape-divider-top-1688619222">
  <svg  data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill fill-white "></path>
  </svg>
</div>
  <div className="w-[310px] lg:w-[1140px] h-auto mx-auto space-y-5 pt-16 lg:py-11">
    <div className='lg:w-[1140px] lg:h-auto lg:pt-14 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-5 '>

  
    {/* first */}
    <div data-aos="fade-up" className="w-[300px] h-auto mx-auto text-center">
  <h1 className="text-[16px] font-[600] w-fit mx-auto text-yellow-500 text-lg border-b-2 border-[#00D180]" style={{fontFamily:"'Montserrat',sans-serif"}}>
        Messaging Services
      </h1>

      <div className="pt-1">
      <Link to="/enterprise-messaging">  <h2 className="text-[16px] font-[200] text-[#ffffff]" style={{fontFamily:"'Poppins',sans-serif"}}>
          Enterprise Messaging
        </h2> </Link>
        <Link to="/transactional-sms"><h2 className="text-[16px] font-[200] text-[#ffffff]" style={{fontFamily:"'Poppins',sans-serif"}}>
          Transactional SMS
        </h2></Link>
        <Link to="/business-sms">     <h2 className="text-[16px] font-[200] text-[#ffffff]" style={{fontFamily:"'Poppins',sans-serif"}}>
          Business SMS
        </h2> </Link>
        <Link to="/wholesale-messaging" ><h2 className="text-[16px] font-[200] text-[#ffffff]" style={{fontFamily:"'Poppins',sans-serif"}}>
          Wholesale Messaging
        </h2></Link>
      </div>
    </div>

    {/* second */}

    <div data-aos="fade-up" className="w-[300px] h-auto mx-auto text-center">
      <h1 className="text-[16px] font-[600] w-fit mx-auto text-yellow-500 text-lg border-b-2 border-[#00D180]" style={{fontFamily:"'Montserrat',sans-serif"}}>
        Promotion Channel
      </h1>
      <div className="pt-1">
      <Link to="/promotional-email">    <h2 className="text-[16px] font-[200] text-[#ffffff]" style={{fontFamily:"'Poppins',sans-serif"}}>
          Email Campaign
        </h2> </Link>

        <Link to="/smtp-server">    <h2 className="text-[16px] font-[200] text-[#ffffff]" style={{fontFamily:"'Poppins',sans-serif"}}>
          SMTP Server
        </h2> </Link>
        <Link to="/voice-broadcast">  <h2 className="text-[16px] font-[200] text-[#ffffff]" style={{fontFamily:"'Poppins',sans-serif"}}> 
          Voice Broadcast
        </h2></Link>
      </div>
    </div>
    {/* third */}

    <div data-aos="fade-up" className="w-[300px] h-auto mx-auto text-center">
      <h1 className="text-[16px] font-[600] w-fit mx-auto text-yellow-500 text-lg border-b-2 border-[#00D180]" style={{fontFamily:"'Montserrat',sans-serif"}}>
        SMS Gateway Software
      </h1>
   <div className="pt-1">
   <Link to="#">   <h2 className="text-[16px] font-[200] text-[#ffffff]" style={{fontFamily:"'Poppins',sans-serif"}}>
          A2P SMS hubbing platform
        </h2></Link>

      <Link to="#">  <h2 className="text-[16px] font-[200] text-[#ffffff]" style={{fontFamily:"'Poppins',sans-serif"}}>
          SMPP Load Balancer
        </h2></Link>
    <Link to="#"> <h2 className="text-[16px] font-[200] text-[#ffffff]" style={{fontFamily:"'Poppins',sans-serif"}}>
          SMPP Gateway
        </h2> </Link>   
      </div>
    </div>

    {/* fourth */}
    <div data-aos="fade-up" className="w-[300px] h-auto mx-auto text-center">
      <h1 className="text-[16px] w-fit mx-auto font-[600] text-yellow-500 text-lg border-b-2 border-[#00D180]" style={{fontFamily:"'Montserrat',sans-serif"}}>
        Trending Channel
      </h1>
      <div className="pt-1">
      <Link to="/whatsapp-business-api">  <h2 className="text-[16px] font-[200] text-[#ffffff]" style={{fontFamily:"'Poppins',sans-serif"}}>
          WhatsApp Business API
        </h2> </Link>

        <Link to ="/whatsapp-api-pricing"  >    <h2 className="text-[16px] font-[200] text-[#ffffff]" style={{fontFamily:"'Poppins',sans-serif"}}>
          WhatsApp API Pricing
        </h2> </Link>
      </div>
    </div>
    {/* fifth */}
    <div data-aos="fade-up" className="w-[300px] h-auto mx-auto text-center">
      <h1 className="text-[16px] font-[600] w-fit mx-auto text-yellow-500 text-lg border-b-2 border-[#00D180]" style={{fontFamily:"'Montserrat',sans-serif"}}>
        Company
      </h1>
      <div className="pt-1">
  <Link to="/about"><h2 className="text-[16px] font-[200] text-[#ffffff]" style={{fontFamily:"'Poppins',sans-serif"}}>About Us</h2></Link>      
        <Link href="/pricing">      <h2 className="text-[16px] font-[200] text-[#ffffff]" style={{fontFamily:"'Poppins',sans-serif"}}>Pricing</h2> </Link>
        <Link href="/contact-us">      <h2 className="text-[16px] font-[200] text-[#ffffff]" style={{fontFamily:"'Poppins',sans-serif"}}>
          Contact Us
        </h2> </Link>

   <Link to="/partner">  <h2 className="text-[16px] font-[200] text-[#ffffff]" style={{fontFamily:"'Poppins',sans-serif"}}>Partner</h2></Link>   
      </div>
    </div>

    {/* Sixth */}

    <div data-aos="fade-up" className="w-[300px] h-auto mx-auto text-center">
      <h1 className="text-[16px] font-[600] w-fit mx-auto text-yellow-500 text-lg border-b-2 border-[#00D180]" style={{fontFamily:"'Montserrat',sans-serif"}}>
        Get To Know Us
      </h1>
      <div className="pt-1">
    <Link to="/about">  <h2 className="text-[16px] font-[200] text-[#ffffff]" style={{fontFamily:"'Poppins',sans-serif"}}>
          About DIGINTRA
        </h2></Link>  
      <Link to="/contact-us"> <h2 className="text-[16px] font-[200] text-[#ffffff]" style={{fontFamily:"'Poppins',sans-serif"}}>
          Contact Sales
        </h2></Link> 
     <Link to="/refund-policy">   <h2 className="text-[16px] font-[200] text-[#ffffff]" style={{fontFamily:"'Poppins',sans-serif"}}>
          Refund Policy
        </h2> </Link>
      </div>
      </div>

      {/* seven */}
      <div data-aos="fade-up" className="w-[300px] h-auto mx-auto text-center">
        <h1 className="text-[16px] font-[600] w-fit mx-auto text-yellow-500 text-lg border-b-2 border-[#00D180]" style={{fontFamily:"'Montserrat',sans-serif"}}>
          Resources
        </h1>
        <div className="pt-1">
     <Link to="/blog">   <h2 className="text-[16px] font-[200] text-[#ffffff]" style={{fontFamily:"'Montserrat',sans-serif"}}>Blogs</h2></Link>  
       <Link to="#"> <h2 className="text-[16px] font-[200] text-[#ffffff]">
            Use-Cases
          </h2></Link>  
        </div>
      </div>
      </div>
    

     
      {/* eight */}
      <div data-aos="fade-up" className=" lg:w-[1140px] lg:flex mt-7 space-y-6 lg:space-y-0">
        <div className="w-[300px] text-center lg:px-4 h-auto mx-auto">
          <ul>
         <Link to="/whatsapp-api-provider-bangalore">   <li className="text-yellow-500 font-semibold" style={{fontFamily:"'Poppins',sans-serif"}}>WhatsApp Business Api Provider Bangalore</li> </Link>
         <Link to="/whatsapp-api-provider-chennai">   <li className="text-yellow-500 font-semibold" style={{fontFamily:"'Poppins',sans-serif"}}>WhatsApp Business Api Provider Chennai</li> </Link>
         <Link to="/whatsapp-api-provider-delhi">   <li className="text-yellow-500 font-semibold" style={{fontFamily:"'Poppins',sans-serif"}}>WhatsApp Business Api Provider Delhi</li> </Link>
         <Link to="/whatsapp-api-provider-hyderabad">   <li className="text-yellow-500 font-semibold" style={{fontFamily:"'Poppins',sans-serif"}}>
         WhatsApp Business Api Provider Hyderabad
            </li> </Link>
          </ul>
        </div>

        {/* nine */}

        <div data-aos="fade-up" className="w-[300px] lg:px-4 text-center  h-auto mx-auto">
          <ul>
         <Link to="#"> <li className="text-yellow-500 font-semibold" style={{fontFamily:"'Poppins',sans-serif"}}>Bulk SMS Provider in Kanpur</li></Link>  
          <Link to="/whatsapp-api-provider-kolkata"> <li className="text-yellow-500 font-semibold">
          WhatsApp Business Api Provider Kolkata
            </li></Link> 
          </ul>
        </div>
        

        {/* tenth */}

        <div data-aos="fade-up" className="w-[300px] lg:px-4 text-center h-auto mx-auto">
          <ul>
          <Link to="/seo">  <li className="text-yellow-500 font-semibold" style={{fontFamily:"'Poppins',sans-serif"}}>SEO</li>  </Link>
          <Link to="/smo">  <li className="text-yellow-500 font-semibold" style={{fontFamily:"'Poppins',sans-serif"}}> SMO </li>  </Link>
          <Link to="/logo-designing">  <li className="text-yellow-500 font-semibld" style={{fontFamily:"'Poppins',sans-serif"}}>Logo Designing</li>  </Link>
          <Link to="/social-page-promotional">  <li className="text-yellow-500 font-semibold "  style={{fontFamily:"'Poppins',sans-serif"}}>Social Page Promotional</li>  </Link>
          </ul>
        </div>
        {/* eleventh */}

        <div data-aos="fade-up" className="w-[300px] lg:px-4 text-center h-auto mx-auto">
          <ul>
          <Link to="/social-media-profiling">  <li className="text-yellow-500 font-semibold" style={{fontFamily:"'Poppins',sans-serif"}}> Social Media Profiling  </li>  </Link>
          <Link to="/bulk-sms-provider-in-delhi">  <li className="text-yellow-500 font-semibold" style={{fontFamily:"'Poppins',sans-serif"}}>Bulk SMS Provider in Delhi</li>  </Link>
          <Link to="/bulk-sms-provider-in-kolkata">  <li className="text-yellow-500 font-semibold" style={{fontFamily:"'Poppins',sans-serif"}}>Bulk SMS Provider in Kolkata</li>  </Link>
          <Link to="/bulk-sms-provider-in-chennai">  <li className="text-yellow-500 font-semibold" style={{fontFamily:"'Poppins',sans-serif"}}>Bulk SMS Provider in Chennai</li>  </Link>
          </ul>
        </div>
        
      </div>
      </div>
      <div className='lg:flex  lg:relative'>

    <div className='lg:w-[1200px] lg:flex  lg:mx-auto lg:h-auto '>
   
 
      <div data-aos="fade-right" className="w-[310px] z-10 h-auto p-7 lg:pl-14 mt-5 lg:w-[1400px] mx-auto lg:-ml-1  lg:gap-x-2  bg-white lg:grid lg:grid-cols-3">
        <div>
       
        <img
          src={digintralogo}
          alt=""
          className="w-[180px] h-[75px] mx-auto "
        />
        <p className='text-[#0b439a] px-6  text-center lg:text-left' style={{fontFamily:"'Poppins',sans-serif"}}>
        DIGINTRA Teleservices - FZCO (referred as "DIGINTRA") , founded in 2015 with the
          ultimate goal to provide International SMS termination and other
          marketing related services worldwide.
        </p>
        </div>
      
        
        <div className='space-y-3'>
<h2 className='text-[#0b439a] text-[20px] text-center font-[600] border-b-2 py-1 my-2 border-[#00D180] lg:mt-5'style={{fontFamily:"'Montserrat',sans-serif"}} >Contact Us</h2>
        
         <div className='flex space-x-3'>
         <MdLocationPin className='text-[25px] text-[#0b439a] '/>
         <p className='text-left text-[#0b439a]' style={{fontFamily:"'Poppins',sans-serif"}}>43, 7th B Cross Rd, KHB Block
Koramangala, Bengaluru
560034</p>
         </div>
         <div className='flex space-x-3'>
        <FaSkype className='text-[20px] text-[#0b439a]'/>
         <p className='text-[#0b439a]' style={{fontFamily:"'Poppins',sans-serif"}}>digintra.tm</p>
         </div>

         <div className='flex space-x-3'>
        <MdEmail className='text-[20px] text-[#0b439a]'/>
         <p className='text-[#0b439a]' style={{fontFamily:"'Poppins',sans-serif"}}>support@digintra.com</p>
         </div>
         <div className='flex space-x-3'>
            <IoMdCall className='text-[20px] text-[#0b439a]'/>
            <p className='text-[#0b439a]' style={{fontFamily:"'Poppins',sans-serif"}}>+91-90979 09079</p>
         </div>
         </div>

        
         <div>

     
       
<h1 className='text-[20px] font-[500] text-center text-[#0b439a] mt-5 lg:mt-7' style={{fontFamily:"'Poppins',sans-serif"}}>Follow Us</h1>
<div className='w-[100px] h-[2px] bg-[#00D180] mx-auto'></div>
<div className='w-[100px] h-auto flex space-x-6 my-2 mx-auto'>

<FaFacebookF className='text-[25px] text-[#0b439a]'/>
<FaInstagram className='text-[30px] text-[#0b439a]'/>
<FaTwitter className='text-[30px] text-[#0b439a]'/>
</div>
</div>
</div>

      <div data-aos="zoom-in" className='lg:w-[1100px]  lg:h-[400px]  lg:mt-5 lg:bg-gradient-to-tr from-[rgba(0,0,0,0.23)] to-[rgba(0,0,0,0.2)] '>
       <img src={footermap} alt="" />
      </div>
      {/* <div className='lg:w-[1300px] lg:h-[440px]  lg:absolute lg:bg-transparent lg:border-b-[15px] lg:border-t-[15px] lg:border-r-[15px] lg:border-white lg:right-3'>

      </div> */}
      </div>
      </div>



         <div className='text-center px-3 lg:pt-16'>

        
      <h1 className='text-[#dfdfdf] text-[16px] font-[500] lg:text-[20px]' style={{fontFamily:"'Poppins',sans-serif"}}>World Connected - Start Quickly, Scale Globally</h1>
      <ul className=' lg:w-fit mx-auto lg:flex lg:space-x-5'>
     <Link to="/terms&conditions" >  <li className='text-[#dfdfdf] hover:text-orange-400 text-[16px] font-[500] lg:text-[16px]' style={{fontFamily:"'Poppins',sans-serif"}}>Terms of Services</li>  </Link>
     <Link to="/privacy-policy" >  <li className='text-[#dfdfdf] hover:text-orange-400  text-[16px] font-[500] lg:text-[16px]' style={{fontFamily:"'Poppins',sans-serif"}}>Privacy Policy</li>  </Link>
     <Link to="/cookie" >  <li className='text-[#dfdfdf] hover:text-orange-400  text-[16px] font-[500] lg:text-[16px]' style={{fontFamily:"'Poppins',sans-serif"}}>Cookie Policy</li>  </Link>
     <Link to="/refund-policy" >  <li className='text-[#dfdfdf] hover:text-orange-400  text-[16px] font-[500] lg:text-[16px]' style={{fontFamily:"'Poppins',sans-serif"}}>Refund Policy</li>  </Link>

      </ul>
      <h1 className='text-[#dfdfdf] text-[16px] font-[400]' style={{fontFamily:"'Poppins',sans-serif"}}>Copyrights @ DIGINTRA Teleservices - FZCO. {<br/>}

<span className='text-[10px] font-[400]' style={{fontFamily:"'Poppins',sans-serif"}}> All Rights Reserved</span></h1>
    </div>
   
    </div>
  )
}
