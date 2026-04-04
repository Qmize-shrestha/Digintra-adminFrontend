
import React from 'react';
import { Link } from 'react-router-dom';
import waveSVG from "../assets/wave.svg";
import { motion } from "framer-motion";
import "./blog.css"
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import icons1 from "../assets/Blog1.jpg";
import icons2 from "../assets/sms-notification-msg24x7.jpg";
import icons3 from "../assets/businessman-holding-message-notifications-social-media_110893-1321-1024x482.png";
import icons4 from "../assets/why-messages-are-not-being-delivered-1024x381.jpg";
import icons5 from "../assets/NGOs-uses-DIGINTRA-Bulk-SMS-Services.jpg";
import icons6 from "../assets/SMS-uses-in-School.jpg";
import icons7 from "../assets/Lead-Generation-from-SMS-marketing.jpg"
import icons8 from "../assets/dgntra-seo-1024x354.jpg";
import BULKSMS from '../assets/bulksms.jpg';
import SMSMARK from '../assets/smsvsmarketing.webp';
import SMSMARK2 from '../assets/SMSmarketing.jpg';
import BULKSMS2 from '../assets/WhatisBulkSMS.jpg';
import BULKSMS3 from '../assets/Bulksms2.jpg';
import BULKSMS4 from '../assets/bulksmssalonandapa.jpg';
import BULKHOSPITAL from '../assets/Bulkhospital.jpg';
import Dhanbad from '../assets/Dhanbad Bulk SMS.jpg';
import Meerut from '../assets/Meerut Bulk SMS.jpg';
import Kanpur from '../assets/Bulk SMS Kanpur.jpg';
import ecommerce from '../assets/bulkecommerce.jpg';
import smstips from '../assets/smstips.jpg';
import Footer from '../components/Footer';
import Latest from '../assets/bulksmstrend.jpg'
import BulkSMS from '../assets/bulksmsmarketing.jpg';
import AISMS from '../assets/impactaionsms.jpg';
import Future from '../assets/futureofbulksms.jpg';
import BULKSMS5 from '../assets/bulksmsmumbai.jpg';
import BEST from '../assets/bestbulksmsprovider.jpg';
import SMSCAM from '../assets/smscampaign.jpg';
import DLT from '../assets/dltregistration.jpg';
import PUNESMS from '../assets/punebulk.jpg';
import FACEBOOK from '../assets/facebook.jpg';
import SMSAI from '../assets/smsai.jpg';
import PERSONAL from '../assets/personalsms.jpg';
import BULKSMSAPI from '../assets/bulksmsapi.jpg';
import SMSREMINDERS from '../assets/SMSreminder.jpg'
import SMSALERTPIC from '../assets/smsalertpic.jpg';
import FAST2SMS from '../assets/fast2sms.jpg'
import INTEGRATE from '../assets/integrate.jpg';
import CAMPAIGN from '../assets/campaign.jpg';
import SMSABANDONED from '../assets/smsabndoned.jpg';
import SMSSUBSCRIBER from '../assets/smssubscriber.jpg';
import SERVICEPRO from '../assets/smsservice.jpg'
import INSIDER from '../assets/insider.webp';
import SERVICEIND from '../assets/serviceindia.webp'
import CompleteGuide from '../assets/completeguide.webp'
import BulkSMSBenefits from '../assets/bulksmsbenefits.webp';
import SMSCAMPAIGN from '../assets/bulksmsmarketing2.jpg';
import BULKSMSUNLOCK from '../assets/bulksmsunlock.jpg';
import DLTREGISTRATION from '../assets/dltregistration2.webp';
import CUSTOMERFEEDBACK from '../assets/feedback.webp';
import MULTIMEDIAMESSAGE from '../assets/multimediamessage.webp';
// import NEWPRICING from '../assets/Whatsappbusinessapi.png';
import SmsEmailWhatsapp from '../assets/smsemailwhatsapp.webp';
import TenIndustries from '../assets/tenindustries.jpg';
import SENDEXCEL from '../assets/sendthroughexcel.jpg';
import SMSMMS from '../assets/smsmms.jpg';
import BestBULK from '../assets/bestbulk10.jpg'
import SMSMAR from "../assets/sms_marketing.jpg";
import tentelecomcompanies from '../assets/ten_companies.jpg'
import TRA from '../assets/trauae.jpg'
import TRA2 from "../assets/top-ten-bulk-sms-service-provider-in-uae.jpg";
import Best_Bulk_SMS from "../assets/5_best_Bulk_SMS.jpg"
import Best_SMS from '../assets/best-sms-marketing.jpeg'

export default function Blog() {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <>
      
      <div className=" patterncon relative w-auto pt-[230px] lg:h-[720px] pb-[50px]  ">
      <div className='absolute inset-0 backdrop-blur-md w-full h-full'></div>
      <div className=' w-auto h-auto relative z-10'>


     <Helmet>
        <meta charSet="utf-8"/>
        <title>DIGINTRA® – A great source of information for any marketers or business owners who are interested in learning more about the world of mobile messaging.</title>
        <meta name="robots" content="noindex,follow"/>
        <link rel="canonical" href="https://www.digintra.com/blogs" />
        <meta name='description' content='DIGINTRA is a fast-growing SMS platform, offering secure A2P messaging solutions for all. Empower your communication with instant, reliable delivery.'/>
     </Helmet>
     <h1 data-aos="fade-right" className="text-blue-700 text-[28px] font-semibold text-center  lg:text-[48px]" style={{fontFamily:"'Montserrat', sans-serif"}}>TechTalk: Navigating the Digital Frontier</h1>
     <p data-aos="fade-up" className="text-center text-[16px] text-black px-3 lg:text-[20px] mt-2 " style={{fontFamily:"'Poppins', sans-serif"}}> "Exploring the latest trends, innovations, and insights in the world of technology." </p>
     <div className=' flex justify-center'>
     <a href="#allblogs"> <button className="w-[200px] h-14 hover:scale-125 bg-gradient-to-tr from-yellow-500 to-green-500 text-white  border-2 border-black  mt-5 rounded-lg  font-medium  ">Explore now</button> </a>
     </div>
     
    
      {/* <div className="w-[50px] h-[50px] mx-auto mt-4 animate-pulse rounded-full bg-white"><img src="./icons8-arrow-100.png" alt=""  /></div> */}
      </div>
    </div>
    <div id="allblogs" className="w-auto pt-[30px] bg-white h-auto mx-auto">
   
     <h3 data-aos="fade-right" className="text-[28px] font-semibold  text-center" style={{fontFamily:"'Montserrat', sans-serif"}}>All Blogs</h3>
     <div className="w-[200px] h-[4px] bg-blue-600 mx-auto rounded-full"></div>
      <div  className="w-[310px] h-auto lg:pb-64 mx-auto lg:w-[1140px] grid grid-cols-1 lg:grid-cols-3 mt-10 mb-10  gap-10">

    
     {/* first card */}
 <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.6 }}
      className="relative group w-[320px] h-[380px] mx-auto rounded-3xl overflow-hidden 
                 shadow-[0_0_25px_rgba(59,130,246,0.3)] bg-gradient-to-br from-blue-500 via-green-600 to-blue-500
                 hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transition-all duration-500"
    >
      {/* Floating wave background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      >
        <img src={waveSVG} alt="wave bg" className="w-full h-full object-cover" />
      </motion.div>

      {/* Card content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-6">
        {/* Image */}
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1, rotate: 3 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="mb-6"
        >
          <img
            src={icons1}
            alt="blog icon"
            className="w-60 h-40 object-cover rounded-2xl border-4 border-blue-400 shadow-lg shadow-blue-800/30"
          />
        </motion.div>

        {/* Blog heading */}
        <h3
          className="text-[20px] text-white font-semibold text-left leading-snug px-3 "
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Compliance Guidelines for Successful SMS Marketing
        </h3>

        {/* Read More Button */}
        <Link to="/blog/compliance-guidelines-for-successful-sms-marketing">
          <motion.button
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 20px rgba(59,130,246,0.7)",
            }}
            transition={{ duration: 0.3 }}
            className="mt-6 px-5 py-1 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 
                       text-white font-medium hover:from-blue-500 hover:to-cyan-300"
          >
            Read More...
          </motion.button>
        </Link>
      </div>

      {/* Hover Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
    </motion.div>
           {/* second card */}   

         <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  whileHover={{ scale: 1.04 }}
  transition={{ duration: 0.6 }}
  className="relative group w-[320px] h-[380px] mx-auto rounded-3xl overflow-hidden 
             shadow-[0_0_25px_rgba(59,130,246,0.3)] bg-gradient-to-br from-blue-500 via-black to-blue-500
             hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transition-all duration-500"
>
  {/* Floating wave background */}
  <motion.div
    className="absolute inset-0 opacity-20"
    animate={{ y: [0, 20, 0] }}
    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
  >
    <img src={waveSVG} alt="wave bg" className="w-full h-full object-cover" />
  </motion.div>

  {/* Card content */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full p-6">
    {/* Image */}
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1, rotate: 3 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="mb-6"
    >
      <img
        src={icons2}
        alt="blog icon"
        className="w-60 h-40 object-cover rounded-2xl border-4 border-blue-400 shadow-lg shadow-blue-800/30"
      />
    </motion.div>

    {/* Blog heading */}
    <h3
      className="text-[20px] text-white font-semibold text-left leading-snug px-3"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      The Top 10 Advantages of SMS Marketing for Business
    </h3>

    {/* Read More Button */}
    <Link to="/blog/the-top-10-advantages-of-sms-marketing-for-business">
      <motion.button
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 0px 20px rgba(59,130,246,0.7)",
        }}
        transition={{ duration: 0.3 }}
        className="mt-6 px-5 py-1 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 
                   text-white font-medium hover:from-blue-500 hover:to-cyan-300"
      >
        Read More...
      </motion.button>
    </Link>
  </div>

  {/* Hover Glow */}
  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
</motion.div>


      {/* third card */}
 <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  whileHover={{ scale: 1.04 }}
  transition={{ duration: 0.6 }}
  className="relative group w-[320px] h-[380px] mx-auto rounded-3xl overflow-hidden 
             shadow-[0_0_25px_rgba(59,130,246,0.3)] bg-gradient-to-br from-blue-500 via-green-600 to-blue-500
             hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transition-all duration-500"
>
  {/* Floating wave background */}
  <motion.div
    className="absolute inset-0 opacity-20"
    animate={{ y: [0, 20, 0] }}
    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
  >
    <img src={waveSVG} alt="wave bg" className="w-full h-full object-cover" />
  </motion.div>

  {/* Card content */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full p-6">
    {/* Image */}
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1, rotate: 3 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="mb-6"
    >
      <img
        src={icons3}
        alt="blog icon"
        className="w-60 h-40 object-cover rounded-2xl border-4 border-blue-400 shadow-lg shadow-blue-800/30"
      />
    </motion.div>

    {/* Blog heading */}
    <h3
      className="text-[20px] text-white font-semibold text-left leading-snug px-3"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      Budget-Friendly SMS Marketing Tactics for Effective Campaigns
    </h3>

    {/* Read More Button */}
    <Link to="/blog/budget-friendly-sms-marketing-tactics-for-effective-campaigns">
      <motion.button
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 0px 20px rgba(59,130,246,0.7)",
        }}
        transition={{ duration: 0.3 }}
        className="mt-6 px-5 py-1 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 
                   text-white font-medium hover:from-blue-500 hover:to-cyan-300"
      >
        Read More...
      </motion.button>
    </Link>
  </div>

  {/* Hover Glow */}
  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
</motion.div>


      {/* fourth card */}
  <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  whileHover={{ scale: 1.04 }}
  transition={{ duration: 0.6 }}
  className="relative group w-[320px] h-[380px] mx-auto rounded-3xl overflow-hidden 
             shadow-[0_0_25px_rgba(59,130,246,0.3)] bg-gradient-to-br from-blue-500 via-green-600 to-blue-500
             hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transition-all duration-500"
>
  {/* Floating wave background */}
  <motion.div
    className="absolute inset-0 opacity-20"
    animate={{ y: [0, 20, 0] }}
    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
  >
    <img src={waveSVG} alt="wave bg" className="w-full h-full object-cover" />
  </motion.div>

  {/* Card content */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full p-6">
    {/* Image */}
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1, rotate: 3 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="mb-6"
    >
      <img
        src={icons4}
        alt="blog icon"
        className="w-60 h-40 object-cover rounded-2xl border-4 border-blue-400 shadow-lg shadow-blue-800/30"
      />
    </motion.div>

    {/* Blog heading */}
    <h3
      className="text-[20px] text-white font-semibold text-left leading-snug px-3"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      Why Are My Bulk Messages Not Being Delivered?
    </h3>

    {/* Read More Button */}
    <Link to="/blog/why-are-my-bulk-messages-not-being-delivered">
      <motion.button
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 0px 20px rgba(59,130,246,0.7)",
        }}
        transition={{ duration: 0.3 }}
        className="mt-6 px-5 py-1 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 
                   text-white font-medium hover:from-blue-500 hover:to-cyan-300"
      >
        Read More...
      </motion.button>
    </Link>
  </div>

  {/* Hover Glow */}
  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
</motion.div>


   {/* fifth card */}

 <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  whileHover={{ scale: 1.04 }}
  transition={{ duration: 0.6 }}
  className="relative group w-[320px] h-[380px] mx-auto rounded-3xl overflow-hidden 
             shadow-[0_0_25px_rgba(59,130,246,0.3)] bg-gradient-to-br from-blue-500 via-green-600 to-blue-500
             hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transition-all duration-500"
>
  {/* Floating wave background */}
  <motion.div
    className="absolute inset-0 opacity-20"
    animate={{ y: [0, 20, 0] }}
    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
  >
    <img src={waveSVG} alt="wave bg" className="w-full h-full object-cover" />
  </motion.div>

  {/* Card content */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full p-6">
    {/* Image */}
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1, rotate: 3 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="mb-6"
    >
      <img
        src={icons5}
        alt="blog icon"
        className="w-60 h-40 object-cover rounded-2xl border-4 border-blue-400 shadow-lg shadow-blue-800/30"
      />
    </motion.div>

    {/* Blog heading */}
    <h3
      className="text-[20px] text-white font-semibold text-left leading-snug px-3"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      Bulk SMS Service for Charities, NGOs & Community Groups
    </h3>

    {/* Read More Button */}
    <Link to="/blog/bulk-sms-service-for-charities-trust-ngos-community-groups">
      <motion.button
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 0px 20px rgba(59,130,246,0.7)",
        }}
        transition={{ duration: 0.3 }}
        className="mt-6 px-5 py-1 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 
                   text-white font-medium hover:from-blue-500 hover:to-cyan-300"
      >
        Read More...
      </motion.button>
    </Link>
  </div>

  {/* Hover Glow */}
  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
</motion.div>



   {/* sixth card */}

   <div data-aos="zoom-in-up" className="w-[310px] h-auto  pt-[50px] mx-auto">
     
     <img src={icons6} alt="" className="lg:h-[250px]" />
   
     <h3 className="text-[20px] mt-2 font-semibold" style={{fontFamily:"'Montserrat', sans-serif"}}>How Bulk SMS can be used in the Education sector?</h3>
   
<Link to="/blog/how-bulk-sms-can-be-used-in-the-education-sector">     <button className="w-[200px] hover:scale-125 h-14 bg-gradient-to-tr from-blue-700 to-blue-500  mt-5 rounded-lg text-white font-medium">Read more</button> </Link>  
   </div>
{/* seventh card */}
   <div data-aos="zoom-in-up" className="w-[310px] h-auto  pt-[50px] mx-auto">
     
     <img src={icons7} alt="" className="lg:h-[250px]" />
   
     <h3 className="text-[20px] mt-2 font-semibold" style={{fontFamily:"'Montserrat', sans-serif"}}>How to use Bulk SMS for Lead Generation?</h3>
   
<Link to="/blog/how-to-use-bulk-sms-for-lead-generation">   <button className="w-[200px]  hover:scale-125 h-14 bg-gradient-to-tr from-blue-700 to-blue-500  mt-5 rounded-lg text-white font-medium">Read more</button> </Link>  
   </div>

   {/* eight card */}
   <div data-aos="zoom-in-up" className="w-[310px] h-auto  pt-[50px] mx-auto">
     
     <img src={icons8} alt="" className="lg:h-[250px]" />
  
     <h3 className="text-[20px] mt-2 font-semibold" style={{fontFamily:"'Montserrat', sans-serif"}}>How to use sms marketing to boost your website traffic</h3>
    
<Link to="/blog/how-to-use-sms-marketing-to-boost-your-website-traffic">    <button className="w-[200px] h-14 bg-gradient-to-tr  hover:scale-125 from-blue-700 to-blue-500  mt-5 rounded-lg  font-medium text-white">Read more</button> </Link> 
   </div>

   {/* nine card */}
   <div data-aos="zoom-in-up" className="w-[310px] h-auto  pt-[50px] mx-auto">
     
     <img src={icons8} alt="" className="lg:h-[250px]" />
     
     <h3 className="text-[20px] mt-2 font-semibold" style={{fontFamily:"'Montserrat', sans-serif"}}>How to Send Bulk Messages Without Being Marked as Spam</h3>
    
<Link to="/blog/how-to-send-bulk-messages-without-being-marked-as-spam">    <button className="w-[200px] h-14 bg-gradient-to-tr  hover:scale-125 from-blue-700 to-blue-500  mt-5 rounded-lg  font-medium text-white">Read more</button> </Link> 
   </div>

   {/* tenth card */}


   <div data-aos="zoom-in-up" className="w-[310px] h-auto  pt-[50px] mx-auto">
     
     <img src={icons8} alt="" className="lg:h-[250px]" />
    
     <h3 className="text-[20px] mt-2 font-semibold" style={{fontFamily:"'Montserrat',sans-serif"}}>Bulk SMS vs Whatsapp Messages Which is Better</h3>
    
<Link to="/blog/bulk-sms-vs-whatsapp-messages-which-is-better">    <button className="w-[200px] h-14 bg-gradient-to-tr  hover:scale-125 from-blue-700 to-blue-500  mt-5 rounded-lg  font-medium text-white">Read more</button> </Link> 
   </div>

   {/* eleventh card */}


   <div data-aos="zoom-in-up" className="w-[310px] h-auto  pt-[50px] mx-auto">
     
     <img src={icons8} alt="" className="lg:h-[250px]" />
     
     <h3 className="text-[20px] mt-2 font-semibold" style={{fontFamily:"'Montserrat', sans-serif"}}>What is Bulk SMS Service How Does It Help Businesses</h3>
    
<Link to="/blog/what-is-bulk-sms-service-how-does-it-help-businesses">    <button className="w-[200px] h-14 bg-gradient-to-tr  hover:scale-125 from-blue-700 to-blue-500  mt-5 rounded-lg  font-medium text-white">Read more</button> </Link> 
   </div>

   {/* twelve card */}

   <div data-aos="zoom-in-up" className="w-[310px] h-auto  pt-[50px] mx-auto">
     
     <img src={icons8} alt="" className="lg:h-[250px]" />
    
     <h3 className="text-[20px] mt-2 font-semibold" style={{fontFamily:"'Montserrat', sans-serif"}}>How to Send Bulk SMS without Getting Spammed</h3>
    
<Link to="/blog/how-to-send-bulk-sms-without-getting-spammed">    <button className="w-[200px] h-14 bg-gradient-to-tr  hover:scale-125 from-blue-700 to-blue-500  mt-5 rounded-lg   font-medium text-white">Read more</button> </Link> 
   </div>



   {/* thirteen card */}


   <div data-aos="zoom-in-up" className="w-[310px] h-auto  pt-[50px] mx-auto">
     
     <img src={BULKSMS} alt="" className="lg:h-[250px]" />
    
     <h3 className="text-[20px] mt-2 font-semibold" style={{fontFamily:"'Montserrat', sans-serif"}}>Top 5 Bulk SMS Provider in India</h3>
    
<Link to="/blog/top-5-bulk-sms-provider-in-india">    <button className="w-[200px] h-14 bg-gradient-to-tr  hover:scale-125 from-blue-700 to-blue-500  mt-5 rounded-lg   font-medium text-white">Read more</button> </Link> 
   </div>



   {/* fourteen card */}

   <div data-aos="zoom-in-up" className="w-[310px] h-auto  pt-[50px] mx-auto">
     
     <img src={SMSMARK} alt="" className="lg:h-[250px]" />
    
     <h3 className="text-[20px] mt-2 font-semibold" style={{fontFamily:"'Montserrat', sans-serif"}}>SMS v/s Email Marketing</h3>
    
<Link to="/blog/sms-vs-email-marketing">    <button className="w-[200px] h-14 bg-gradient-to-tr  hover:scale-125 from-blue-700 to-blue-500  mt-5 rounded-lg   font-medium text-white">Read more</button> </Link> 
   </div>



   {/* fifteen card */}

   <div data-aos="zoom-in-up" className="w-[310px] h-auto  pt-[50px] mx-auto">
     
     <img src={SMSMARK2} alt="" className="lg:h-[250px]" />
    
     <h3 className="text-[20px] mt-2 font-semibold" style={{fontFamily:"'Montserrat', sans-serif"}}>How Top Businesses Use SMS Marketing to Build Customer Satisfaction</h3>
    
<Link to="/blog/how-top-businesses-use-sms-marketing-to-build-customer-satisfaction">    <button className="w-[200px] h-14 bg-gradient-to-tr  hover:scale-125 from-blue-700 to-blue-500  mt-5 rounded-lg   font-medium text-white">Read more</button> </Link> 
   </div>


   {/* Sixteen card  */}

   <div data-aos="zoom-in-up" className="w-[310px] h-auto  pt-[50px] mx-auto">
     
     <img src={BULKSMS2} alt="" className="lg:h-[250px]" />
    
     <h3 className="text-[20px] mt-2 font-semibold" style={{fontFamily:"'Montserrat', sans-serif"}}>What is Bulk SMS and How Does It Work?   </h3>
    
<Link to="/blog/what-is-bulk-sms-and-how-does-it-work">    <button className="w-[200px] h-14 bg-gradient-to-tr  hover:scale-125 from-blue-700 to-blue-500  mt-5 rounded-lg   font-medium text-white">Read more</button> </Link> 
   </div>



   {/* seventeen card */}


   <div data-aos="zoom-in-up" className="w-[310px] h-auto  pt-[50px] mx-auto">
     
     <img src={BULKSMS3} alt="" className="lg:h-[250px]" />
    
     <h3 className="text-[20px] mt-2 font-semibold" style={{fontFamily:"'Montserrat', sans-serif"}}>Top 5 Benefits of Bulk SMS Marketing for Businesses</h3>
    
<Link to="/blog/top-5-benefits-of-bulk-sms-marketing-for-businesses">    <button className="w-[200px] h-14 bg-gradient-to-tr  hover:scale-125 from-blue-700 to-blue-500  mt-5 rounded-lg   font-medium text-white">Read more</button> </Link> 
   </div>


   {/* eighteen card */}

   <div data-aos="zoom-in-up" className="w-[310px] h-auto  pt-[50px] mx-auto">
     
     <img src={BULKSMS4} alt="" className="lg:h-[250px]" />
    
     <h3 className="text-[20px] mt-2 font-semibold" style={{fontFamily:"'Montserrat', sans-serif"}}>Bulk SMS for spa and salon</h3>
    
<Link to="/blog/bulk-sms-for-spa-and-salon">    <button className="w-[200px] h-14 bg-gradient-to-tr  hover:scale-125 from-blue-700 to-blue-500  mt-5 rounded-lg   font-medium text-white">Read more</button> </Link> 
   </div>


   {/* nineteen card */}

   <div data-aos="zoom-in-up" className="w-[310px] h-auto  pt-[50px] mx-auto">
     
     <img src={BULKHOSPITAL} alt="" className="lg:h-[250px]" />
    
     <h3 className="text-[20px] mt-2 font-semibold" style={{fontFamily:"'Montserrat', sans-serif"}}>Bulk SMS Services for hospitals</h3>
    
<Link to="/blog/bulk-sms-services-for-hospitals">    <button className="w-[200px] h-14 bg-gradient-to-tr  hover:scale-125 from-blue-700 to-blue-500  mt-5 rounded-lg   font-medium text-white">Read more</button> </Link> 
   </div>



   

{/* twenty-three */}

<div data-aos="zoom-in-up" className="w-[310px] h-auto  pt-[50px] mx-auto">
     
     <img src={ecommerce} alt="" className="lg:h-[250px]" />
    
     <h3 className="text-[20px] mt-2 font-semibold" style={{fontFamily:"'Montserrat', sans-serif"}}>Bulk SMS Service for Ecommerce</h3>
    
<Link to="/blog/bulk-sms-service-for-ecommerce">    <button className="w-[200px] h-14 bg-gradient-to-tr  hover:scale-125 from-blue-700 to-blue-500  mt-5 rounded-lg   font-medium text-white">Read more</button> </Link> 
   </div>

{/* twenty-four */}
   <div data-aos="zoom-in-up" className="w-[310px] h-auto  pt-[50px] mx-auto">
     
     <img src={smstips} alt="" className="lg:h-[250px]" />
    
     <h3 className="text-[20px] mt-2 font-semibold" style={{fontFamily:"'Montserrat', sans-serif"}}>How to Write Effective SMS Marketing Messages that Convert</h3>
    
<Link to="/blog/how-to-write-effective-sms-marketing-meassages-that-convert">    <button className="w-[200px] h-14 bg-gradient-to-tr  hover:scale-125 from-blue-700 to-blue-500  mt-5 rounded-lg   font-medium text-white">Read more</button> </Link> 
   </div>

{/* twenty-five */}

<div data-aos="zoom-in-up" className="w-[310px] h-auto  pt-[50px] mx-auto">
     
     <img src={BulkSMS} alt="" className="lg:h-[250px]" />
    
     <h3 className="text-[20px] mt-2 font-semibold" style={{fontFamily:"'Montserrat', sans-serif"}}>Bulk SMS Marketing Regulations</h3>
    
<Link to="/blog/bulk-sms-marketing-regulations">    <button className="w-[200px] h-14 bg-gradient-to-tr  hover:scale-125 from-blue-700 to-blue-500  mt-5 rounded-lg   font-medium text-white">Read more</button> </Link> 
   </div>




   {/* twenty-six */}
   <div data-aos="zoom-in-up" className="w-[310px] h-auto  pt-[50px] mx-auto">
     
     <img src={Latest} alt="" className="lg:h-[250px]" />
    
     <h3 className="text-[20px] mt-2 font-semibold" style={{fontFamily:"'Montserrat', sans-serif"}}>Latest Trends in Bulk SMS Marketing in 2025</h3>
    
<Link to="/blog/latest-trend-in-bulk-sms-marketing-in-2025">    <button className="w-[200px] h-14 bg-gradient-to-tr  hover:scale-125 from-blue-700 to-blue-500  mt-5 rounded-lg   font-medium text-white">Read more</button> </Link> 
   </div>


   {/* twenty-seven */}

   <div data-aos="zoom-in-up" className="w-[310px] h-auto  pt-[50px] mx-auto">
     
     <img src={AISMS} alt="" className="lg:h-[250px]" />
    
     <h3 className="text-[20px] mt-2 font-semibold" style={{fontFamily:"'Montserrat', sans-serif"}}>Impact of AI and Chatbots on Bulk SMS Marketing</h3>
    
<Link to="/blog/impact-of-ai-and-chatbots-on-bulk-sms-marketing">    <button className="w-[200px] h-14 bg-gradient-to-tr  hover:scale-125 from-blue-700 to-blue-500  mt-5 rounded-lg   font-medium text-white">Read more</button> </Link> 
   </div>


   {/* twenty-eight */}

   <div data-aos="zoom-in-up" className="w-[310px] h-auto  pt-[50px] mx-auto">
     
     <img src={Future} alt="" className="lg:h-[250px]" />
    
     <h3 className="text-[20px] mt-2 font-semibold" style={{fontFamily:"'Montserrat', sans-serif"}}>Future of Bulk SMS: What to Expect in the Next 5 Years</h3>
    
<Link to="/blog/future-of-bulk-SMS-what-to-expect-in-the-next-5-years">    <button className="w-[200px] h-14 bg-gradient-to-tr  hover:scale-125 from-blue-700 to-blue-500  mt-5 rounded-lg   font-medium text-white">Read more</button> </Link> 
   </div>

{/* twenty-nine */}

   <div data-aos="zoom-in-up" className="w-[310px] h-auto  pt-[50px] mx-auto">
     
     <img src={BULKSMS5} alt="" className="lg:h-[250px]" />
    
     <h3 className="text-[20px] mt-2 font-semibold" style={{fontFamily:"'Montserrat', sans-serif"}}>Top 4 Bulk SMS Provider in Mumbai</h3>
    
<Link to="/blog/top-4-bulk-sms-provider-in-mumbai">    <button className="w-[200px] h-14 bg-gradient-to-tr  hover:scale-125 from-blue-700 to-blue-500  mt-5 rounded-lg   font-medium text-white">Read more</button> </Link> 
   </div>


   {/* thirty */}


   <div data-aos="zoom-in-up" className="w-[310px] h-auto  pt-[50px] mx-auto">
     
     <img src={BEST} alt="" className="lg:h-[250px]" />
    
     <h3 className="text-[20px] mt-2 font-semibold" style={{fontFamily:"'Montserrat', sans-serif"}}>How to Choose the Best Bulk SMS Provider</h3>
    
<Link to="/blog/how-to-choose-the-best-bulk-sms-provider">    <button className="w-[200px] h-14 bg-gradient-to-tr  hover:scale-125 from-blue-700 to-blue-500  mt-5 rounded-lg   font-medium text-white">Read more</button> </Link> 
   </div>

   {/* thirty-one */}
   <div data-aos="zoom-in-up" className="w-[310px] h-auto  pt-[50px] mx-auto">
     
     <img src={SMSCAM} alt="" className="lg:h-[250px]" />
    
     <h3 className="text-[20px] mt-2 font-semibold" style={{fontFamily:"'Montserrat', sans-serif"}}>How to Run Automated SMS Campaigns: A Step-by-Step Guide</h3>
    
<Link to="/blog/how-to-run-automated-sms-campaigns">    <button className="w-[200px] h-14 bg-gradient-to-tr  hover:scale-125 from-blue-700 to-blue-500  mt-5 rounded-lg   font-medium text-white">Read more</button> </Link> 
   </div>



   {/* thirty-two */}

   <div data-aos="zoom-in-up" className="w-[310px] h-auto  pt-[50px] mx-auto">
     
     <img src={DLT} alt="" className="lg:h-[250px]" />
    
     <h3 className="text-[20px] mt-2 font-semibold" style={{fontFamily:"'Montserrat', sans-serif"}}>What is DLT Registration and why it is necessary in the SMS Industry</h3>
    
<Link to="/blog/what-is-dlt-registration-and-why-it-is-necessary-in-the-sms-industry">    <button className="w-[200px] h-14 bg-gradient-to-tr  hover:scale-125 from-blue-700 to-blue-500  mt-5 rounded-lg   font-medium text-white">Read more</button> </Link> 
   </div>


{/* thirty-three */}


<div data-aos="zoom-in-up" className="w-[310px] h-auto  pt-[50px] mx-auto">
     
     <img src={PUNESMS} alt="" className="lg:h-[250px]" />
    
     <h3 className="text-[20px] mt-2 font-semibold" style={{fontFamily:"'Montserrat', sans-serif"}}>Top 3 Bulk SMS Service Provider in Pune</h3>
    
<Link to="/blog/top-3-bulk-sms-service-provider-in-pune">    <button className="w-[200px] h-14 bg-gradient-to-tr  hover:scale-125 from-blue-700 to-blue-500  mt-5 rounded-lg   font-medium text-white">Read more</button> </Link> 
   </div>



   {/* thirty-four */}

   <div data-aos="zoom-in-up" className="w-[310px] h-auto  pt-[50px] mx-auto">
     
     <img src={FACEBOOK} alt="" className="lg:h-[250px]" />
    
     <h3 className="text-[20px] mt-2 font-semibold" style={{fontFamily:"'Montserrat', sans-serif"}}>Get your Facebook Business Manager Account verified in 5 easy steps</h3>
    
<Link to="/blog/get-your-facebook-business-manager-account-verified-in-5-easy-steps">    <button className="w-[200px] h-14 bg-gradient-to-tr  hover:scale-125 from-blue-700 to-blue-500  mt-5 rounded-lg   font-medium text-white">Read more</button> </Link> 
   </div>

   {/* thirty-five */}

   <div data-aos="zoom-in-up" className="w-[310px] h-auto  pt-[50px] mx-auto">
     
     <img src={SMSAI} alt="" className="lg:h-[250px]" />
    
     <h3 className="text-[20px] mt-2 font-semibold" style={{fontFamily:"'Montserrat', sans-serif"}}>How to Use AI for SMS Marketing: A Game-Changer for Modern Businesses</h3>
    
<Link to="/blog/how-to-use-ai-for-sms-marketing-a-game-changer-for-modern-business">    <button className="w-[200px] h-14 bg-gradient-to-tr  hover:scale-125 from-blue-700 to-blue-500  mt-5 rounded-lg   font-medium text-white">Read more</button> </Link> 
   </div>



   {/* thirty-six */}

   <div data-aos="zoom-in-up" className="w-[310px] h-auto  pt-[50px] mx-auto">
     
     <img src={PERSONAL} alt="" className="lg:h-[250px]" />
    
     <h3 className="text-[20px] mt-2 font-semibold" style={{fontFamily:"'Montserrat', sans-serif"}}>How to Send Personalized SMS at Scale</h3>
    
<Link to="/blog/how-to-send-personalized-sms-at-scale">    <button className="w-[200px] h-14 bg-gradient-to-tr  hover:scale-125 from-blue-700 to-blue-500  mt-5 rounded-lg   font-medium text-white">Read more</button> </Link> 
   </div>


   {/* thirty-seven */}

   <div data-aos="zoom-in-up" className="w-[310px] h-auto  pt-[50px] mx-auto">
     
     <img src={BULKSMSAPI} alt="" className="lg:h-[250px]" />
    
     <h3 className="text-[20px] mt-2 font-semibold" style={{fontFamily:"'Montserrat', sans-serif"}}>How to Integrate Bulk SMS API with Your Website or App</h3>
    
<Link to="/blog/how-to-integrate-bulk-sms-api-with-your-website-or-app">    <button className="w-[200px] h-14 bg-gradient-to-tr  hover:scale-125 from-blue-700 to-blue-500  mt-5 rounded-lg   font-medium text-white">Read more</button> </Link> 
   </div>


   {/* thirty-eight */}

   <div data-aos="zoom-in-up" className="w-[310px] h-auto  pt-[50px] mx-auto">
     
     <img src={SMSREMINDERS} alt="" className="lg:h-[250px]" />
    
     <h3 className="text-[20px] mt-2 font-semibold" style={{fontFamily:"'Montserrat', sans-serif"}}>How to Send SMS for Appointment Reminders</h3>
    
<Link to="/blog/how-to-send-sms-for-appointment-reminders">    <button className="w-[200px] h-14 bg-gradient-to-tr  hover:scale-125 from-blue-700 to-blue-500  mt-5 rounded-lg   font-medium text-white">Read more</button> </Link> 
   </div>

   {/* thirty-nine */}

   <div data-aos="zoom-in-up" className="w-[310px] h-auto  pt-[50px] mx-auto">
     
     <img src={SMSALERTPIC} alt="" className="lg:h-[250px]" />
    
     <h3 className="text-[20px] mt-2 font-semibold" style={{fontFamily:"'Montserrat', sans-serif"}}>How to Send SMS for Emergency alerts</h3>
    
<Link to="/blog/how-to-send-sms-for-emergency-alerts">    <button className="w-[200px] h-14 bg-gradient-to-tr  hover:scale-125 from-blue-700 to-blue-500  mt-5 rounded-lg   font-medium text-white">Read more</button> </Link> 
   </div>


{/* forty */}

<div data-aos="zoom-in-up" className="w-[310px] h-auto  pt-[50px] mx-auto">
     
     <img src={FAST2SMS} alt="" className="lg:h-[250px]" />
    
     <h3 className="text-[20px] mt-2 font-semibold" style={{fontFamily:"'Montserrat', sans-serif"}}>Top 4 Fast2SMS Alternatives in 2025</h3>
    
<Link to="/blog/top-4-fast2sms-alternative-in-2025">    <button className="w-[200px] h-14 bg-gradient-to-tr  hover:scale-125 from-blue-700 to-blue-500  mt-5 rounded-lg   font-medium text-white">Read more</button> </Link> 
   </div>

   {/* forty-one */}

   <div data-aos="zoom-in-up" className="w-[310px] h-auto  pt-[50px] mx-auto">
     
     <img src={INTEGRATE} alt="" className="lg:h-[250px]" />
    
     <h3 className="text-[20px] mt-2 font-semibold" style={{fontFamily:"'Montserrat', sans-serif"}}>How to integrate SMS with CRM</h3>
    
<Link to="/blog/how-to-integrate-sms-with-crm">    <button className="w-[200px] h-14 bg-gradient-to-tr  hover:scale-125 from-blue-700 to-blue-500  mt-5 rounded-lg   font-medium text-white">Read more</button> </Link> 
   </div>


   {/* forty-2 */}

   <div data-aos="zoom-in-up" className="w-[310px] h-auto  pt-[50px] mx-auto">
     
     <img src={CAMPAIGN} alt="" className="lg:h-[250px]" />
    
     <h3 className="text-[20px] mt-2 font-semibold" style={{fontFamily:"'Montserrat', sans-serif"}}>How to Use Bulk SMS for Political Campaigns</h3>
    
<Link to="/blog/how-to-use-bulk-sms-for-political-campaigns">    <button className="w-[200px] h-14 bg-gradient-to-tr  hover:scale-125 from-blue-700 to-blue-500  mt-5 rounded-lg   font-medium text-white">Read more</button> </Link> 
   </div>



   {/* forty-3 */}

   <div data-aos="zoom-in-up" className="w-[310px] h-auto  pt-[50px] mx-auto">
     
     <img src={SMSABANDONED} alt="" className="lg:h-[250px]" />
    
     <h3 className="text-[20px] mt-2 font-semibold" style={{fontFamily:"'Montserrat', sans-serif"}}>How to Use SMS for Abandoned Cart Recovery</h3>
    
<Link to="/blog/how-to-use-sms-for-abandoned-cart-recovery">    <button className="w-[200px] h-14 bg-gradient-to-tr  hover:scale-125 from-blue-700 to-blue-500  mt-5 rounded-lg   font-medium text-white">Read more</button> </Link> 
   </div>


   {/* forty-4 */}

   <div data-aos="zoom-in-up" className="w-[310px] h-auto  pt-[50px] mx-auto">
     
     <img src={SMSSUBSCRIBER} alt="" className="lg:h-[250px]" />
    
     <h3 className="text-[20px] mt-2 font-semibold" style={{fontFamily:"'Montserrat', sans-serif"}}>How to Build an SMS Subscriber List</h3>
    
<Link to="/blog/how-to-build-an-sms-subscriber-list">    <button className="w-[200px] h-14 bg-gradient-to-tr  hover:scale-125 from-blue-700 to-blue-500  mt-5 rounded-lg   font-medium text-white">Read more</button> </Link> 
   </div>

   {/* forty-5 */}

   <div data-aos="zoom-in-up" className="w-[310px] h-auto  pt-[50px] mx-auto">
     
     <img src={SERVICEPRO} alt="" className="lg:h-[250px]" />
    
     <h3 className="text-[20px] mt-2 font-semibold" style={{fontFamily:"'Montserrat', sans-serif"}}>Top 5 Things You Need to Know Before Choosing a Bulk SMS Service Provider</h3>
    
<Link to="/blog/top-5-things-you-need-to-know-before-choosing-a-bulk-sms-service-provider">    <button className="w-[200px] h-14 bg-gradient-to-tr  hover:scale-125 from-blue-700 to-blue-500  mt-5 rounded-lg   font-medium text-white">Read more</button> </Link> 
   </div>

   {/* forty-6 */}

   <div data-aos="zoom-in-up" className="w-[310px] h-auto  pt-[50px] mx-auto">
     
     <img src={INSIDER} alt="" className="lg:h-[250px]" />
    
     <h3 className="text-[20px] mt-2 font-semibold" style={{fontFamily:"'Montserrat', sans-serif"}}>Insider Guide to Select Best Bulk SMS Service Provider</h3>
    
<Link to="/blog/insider-guide-to-select-best-bulk-sms-service-provider">    <button className="w-[200px] h-14 bg-gradient-to-tr  hover:scale-125 from-blue-700 to-blue-500  mt-5 rounded-lg   font-medium text-white">Read more</button> </Link> 
   </div>


   {/* forty-7 */}

   <div data-aos="zoom-in-up" className="w-[310px] h-auto  pt-[50px] mx-auto">
     
     <img src={SERVICEIND} alt="" className="lg:h-[250px]" />
    
     <h3 className="text-[20px] mt-2 font-semibold" style={{fontFamily:"'Montserrat', sans-serif"}}>How to Choose the Best Bulk SMS Service Provider in India</h3>
    
<Link to="/blog/how-to-choose-the-best-bulk-sms-service-provider-in-india">    <button className="w-[200px] h-14 bg-gradient-to-tr  hover:scale-125 from-blue-700 to-blue-500  mt-5 rounded-lg   font-medium text-white">Read more</button> </Link> 
   </div>



   {/* forty -8 */}

   
   <div data-aos="zoom-in-up" className="w-[310px] h-auto  pt-[50px] mx-auto">
     
     <img src={CompleteGuide} alt="" className="lg:h-[250px]" />
    
     <h3 className="text-[20px] mt-2 font-semibold" style={{fontFamily:"'Montserrat', sans-serif"}}>Complete Guide on How to Contact Best Bulk SMS Service Provider</h3>
    
<Link to="/blog/complete-guide-on-how-to-contact-best-bulk-sms-service-provider">    <button className="w-[200px] h-14 bg-gradient-to-tr  hover:scale-125 from-blue-700 to-blue-500  mt-5 rounded-lg   font-medium text-white">Read more</button> </Link> 
   </div>



   {/* forty-9 */}

   <div data-aos="zoom-in-up" className="w-[310px] h-auto  pt-[50px] mx-auto">
     
     <img src={BulkSMSBenefits} alt="" className="lg:h-[250px]" />
    
     <h3 className="text-[20px] mt-2 font-semibold" style={{fontFamily:"'Montserrat', sans-serif"}}>Top 3 Benefits of Bulk SMS Services You Should Know About</h3>
    
<Link to="/blog/top-3-benefits-of-bulk-sms-services-you-should-know-about">    <button className="w-[200px] h-14 bg-gradient-to-tr  hover:scale-125 from-blue-700 to-blue-500  mt-5 rounded-lg   font-medium text-white">Read more</button> </Link> 
   </div>


   {/* 50 */}
    <div data-aos="zoom-in-up" className="w-[310px] h-auto  pt-[50px] mx-auto">
     
     <img src={SMSCAMPAIGN} alt="" className="lg:h-[250px]" />
    
     <h3 className="text-[20px] mt-2 font-semibold" style={{fontFamily:"'Montserrat', sans-serif"}}>Your SMS Campaigns Aren’t Converting?</h3>
    
<Link to="/blog/your-sms-campaigns-are-not-converting">    <button className="w-[200px] h-14 bg-gradient-to-tr  hover:scale-125 from-blue-700 to-blue-500  mt-5 rounded-lg   font-medium text-white">Read more</button> </Link> 
   </div>


   {/* fifity-one */}

   <div data-aos="zoom-in-up" className="w-[310px] h-auto  pt-[50px] mx-auto">
     
     <img src={BULKSMSUNLOCK} alt="" className="lg:h-[250px]" />
    
     <h3 className="text-[20px] mt-2 font-semibold" style={{fontFamily:"'Montserrat', sans-serif"}}>Unlocking the Power of Bulk SMS Transform Your Communication Strategy Today</h3>
    
<Link to="/blog/unlocking-the-power-of-bulk-sms-transform-your-communication-strategy-today">    <button className="w-[200px] h-14 bg-gradient-to-tr  hover:scale-125 from-blue-700 to-blue-500  mt-5 rounded-lg   font-medium text-white">Read more</button> </Link> 
   </div>



   {/* fifty-two */}
   <div data-aos="zoom-in-up" className="w-[310px] h-auto  pt-[50px] mx-auto">
     
     <img src={DLTREGISTRATION} alt="" className="lg:h-[250px]" />
    
     <h3 className="text-[20px] mt-2 font-semibold" style={{fontFamily:"'Montserrat', sans-serif"}}>DLT Registration for SMS in India: A Complete 2025 Guide</h3>
    
<Link to="/blog/dlt-registration-for-sms-in-india-a-complete-2025-guide">    <button className="w-[200px] h-14 bg-gradient-to-tr  hover:scale-125 from-blue-700 to-blue-500  mt-5 rounded-lg   font-medium text-white">Read more</button> </Link> 
   </div>


   {/* fifty-three */}
   <div data-aos="zoom-in-up" className="w-[310px] h-auto  pt-[50px] mx-auto">
     
     <img src={CUSTOMERFEEDBACK} alt="" className="lg:h-[250px]" />
    
     <h3 className="text-[20px] mt-2 font-semibold" style={{fontFamily:"'Montserrat', sans-serif"}}>How to Use SMS for Customer Feedback and Surveys</h3>
    
<Link to="/blog/how-to-use-sms-for-customer-feedback-and-surveys">    <button className="w-[200px] h-14 bg-gradient-to-tr  hover:scale-125 from-blue-700 to-blue-500  mt-5 rounded-lg   font-medium text-white">Read more</button> </Link> 
   </div>



   {/* fifty-five */}
   <div data-aos="zoom-in-up" className="w-[310px] h-auto  pt-[50px] mx-auto">
     
     <img src={MULTIMEDIAMESSAGE} alt="" className="lg:h-[250px]" />
    
     <h3 className="text-[20px] mt-2 font-semibold" style={{fontFamily:"'Montserrat', sans-serif"}}>Multimedia Messaging Service: A Comprehensive Guide to MMS Definition and Benefits</h3>
    
<Link to="/blog/multimedia-messaging-service-a-comprehensive-guide-to-mms-defination-and-benefits">    <button className="w-[200px] h-14 bg-gradient-to-tr  hover:scale-125 from-blue-700 to-blue-500  mt-5 rounded-lg   font-medium text-white">Read more</button> </Link> 
   </div>


   {/* fifity-six */}
   <div data-aos="zoom-in-up" className="w-[310px] h-auto  pt-[50px] mx-auto">
     
     <img src={SmsEmailWhatsapp} alt="" className="lg:h-[250px]" />
    
     <h3 className="text-[20px] mt-2 font-semibold" style={{fontFamily:"'Montserrat', sans-serif"}}>SMS vs WhatsApp vs Email Marketing: Which is Best for Your Business in 2025?</h3>
    
<Link to="/blog/sms-vs-whatsapp-vs-email-marketing-which-is-best-for-your-business-in-2025">    <button className="w-[200px] h-14 bg-gradient-to-tr  hover:scale-125 from-blue-700 to-blue-500  mt-5 rounded-lg   font-medium text-white">Read more</button> </Link> 
   </div>

   {/* fifty-seven */}
   <div data-aos="zoom-in-up" className="w-[310px] h-auto  pt-[50px] mx-auto">
     
     <img src={TenIndustries} alt="" className="lg:h-[250px]" />
    
     <h3 className="text-[20px] mt-2 font-semibold" style={{fontFamily:"'Montserrat', sans-serif"}}>10 Industries That Can Double Their Conversions with Bulk SMS Service</h3>
    
<Link to="/blog/10-industries-that-can-double-their-conversions-with-bulk-sms-service">    <button className="w-[200px] h-14 bg-gradient-to-tr  hover:scale-125 from-blue-700 to-blue-500  mt-5 rounded-lg   font-medium text-white">Read more</button> </Link> 
   </div>

   {/* fifty-eight */}
    <div data-aos="zoom-in-up" className="w-[310px] h-auto  pt-[50px] mx-auto">
     
     <img src={SENDEXCEL} alt="" className="lg:h-[250px]" />
    
     <h3 className="text-[20px] mt-2 font-semibold" style={{fontFamily:"'Montserrat', sans-serif"}}>How to Send Bulk SMS from Excel: Step-by-Step Tutorial</h3>
    
<Link to="/blog/how-to-send-bulk-sms-from-excel-step-by-step-tutorial">    <button className="w-[200px] h-14 bg-gradient-to-tr  hover:scale-125 from-blue-700 to-blue-500  mt-5 rounded-lg   font-medium text-white">Read more</button> </Link> 
   </div>



   {/* fifty-nine */}
   <div data-aos="zoom-in-up" className="w-[310px] h-auto  pt-[50px] mx-auto">
     
     <img src={SMSMMS} alt="" className="lg:h-[250px]" />
    
     <h3 className="text-[20px] mt-2 font-semibold" style={{fontFamily:"'Montserrat', sans-serif"}}>How to Choose Between SMS and MMS for Effective Marketing Campaigns</h3>
    
<Link to="/blog/how-to-choose-between-sms-and-mms-for-effective-marketing-campaigns">    <button className="w-[200px] h-14 bg-gradient-to-tr  hover:scale-125 from-blue-700 to-blue-500  mt-5 rounded-lg   font-medium text-white">Read more</button> </Link> 
   </div>
  
  {/* 60 */}
    <div data-aos="zoom-in-up" className="w-[310px] h-auto  pt-[50px] mx-auto">
     
     <img src={BestBULK} alt="" className="lg:h-[250px]" />
    
     <h3 className="text-[20px] mt-2 font-semibold" style={{fontFamily:"'Montserrat', sans-serif"}}>10 Best Bulk SMS Providers in India 2025</h3>
    
<Link to="/blog/best-bulk-sms-providers-in-india">    <button className="w-[200px] h-14 bg-gradient-to-tr  hover:scale-125 from-blue-700 to-blue-500  mt-5 rounded-lg   font-medium text-white">Read more</button> </Link> 
   </div>


   {/* 61 */}

   <div data-aos="zoom-in-up" className="w-[310px] h-auto  pt-[50px] mx-auto">
     
     <img src={SMSMAR} alt="" className="lg:h-[250px]" />
    
     <h3 className="text-[20px] mt-2 font-semibold" style={{fontFamily:"'Montserrat', sans-serif"}}>How to Choose Between SMS and MMS for Effective Marketing Campaigns</h3>
    
<Link to="/blog/sms-marketing">    <button className="w-[200px] h-14 bg-gradient-to-tr  hover:scale-125 from-blue-700 to-blue-500  mt-5 rounded-lg   font-medium text-white">Read more</button> </Link> 
   </div>




   <div data-aos="zoom-in-up" className="w-[310px] h-auto  pt-[50px] mx-auto">
     
     <img src={tentelecomcompanies} alt="" className="lg:h-[250px]" />
    
     <h3 className="text-[20px] mt-2 font-semibold" style={{fontFamily:"'Montserrat', sans-serif"}}>Top 10 Telecom Companies in UAE (2025 List and Picks)</h3>
    
<Link to="/blog/top-10-telecom-companies-in-uae">    <button className="w-[200px] h-14 bg-gradient-to-tr  hover:scale-125 from-blue-700 to-blue-500  mt-5 rounded-lg   font-medium text-white">Read more</button> </Link> 
   </div>




   <div data-aos="zoom-in-up" className="w-[310px] h-auto  pt-[50px] mx-auto">
     
     <img src={TRA} alt="" className="lg:h-[250px]" />
    
     <h3 className="text-[20px] mt-2 font-semibold" style={{fontFamily:"'Montserrat', sans-serif"}}>Telecom Regulatory Authority UAE: A Complete Guide</h3>
    
<Link to="/blog/telecom-regulatory-authority">    <button className="w-[200px] h-14 bg-gradient-to-tr  hover:scale-125 from-blue-700 to-blue-500  mt-5 rounded-lg   font-medium text-white">Read more</button> </Link> 
   </div>



   <div data-aos="zoom-in-up" className="w-[310px] h-auto  pt-[50px] mx-auto">
     
     <img src={TRA2} alt="" className="lg:h-[250px]" />
    
     <h3 className="text-[20px] mt-2 font-semibold" style={{fontFamily:"'Montserrat', sans-serif"}}>Top 10 Bulk SMS Service Provider in UAE (2025 Review)</h3>
    
<Link to="/blog/top-10-bulk-sms-service-provider-in-uae">    <button className="w-[200px] h-14 bg-gradient-to-tr  hover:scale-125 from-blue-700 to-blue-500  mt-5 rounded-lg   font-medium text-white">Read more</button> </Link> 
   </div>



   <div data-aos="zoom-in-up" className="w-[310px] h-auto  pt-[50px] mx-auto">
     
     <img src={Best_Bulk_SMS} alt="" className="lg:h-[250px]" />
    
     <h3 className="text-[20px] mt-2 font-semibold" style={{fontFamily:"'Montserrat', sans-serif"}}>5 Best Bulk SMS Service Providers in UAE – Features, Pricing</h3>
    
<Link to="/blog/best-bulk-sms-service-providers-in-uae">    <button className="w-[200px] h-14 bg-gradient-to-tr  hover:scale-125 from-blue-700 to-blue-500  mt-5 rounded-lg   font-medium text-white">Read more</button> </Link> 
   </div>




   <div data-aos="zoom-in-up" className="w-[310px] h-auto  pt-[50px] mx-auto">
     
     <img src={Best_SMS} alt="" className="lg:h-[250px]" />
    
     <h3 className="text-[20px] mt-2 font-semibold" style={{fontFamily:"'Montserrat', sans-serif"}}>10 Best SMS Marketing Platforms in 2026: A Complete Guide for Businesses</h3>
    
<Link to="/blog/sms-marketing-platforms">    <button className="w-[200px] h-14 bg-gradient-to-tr  hover:scale-125 from-blue-700 to-blue-500  mt-5 rounded-lg   font-medium text-white">Read more</button> </Link> 
   </div>






   
           </div>
           </div>
           <Footer/>
    </>
  )
}
