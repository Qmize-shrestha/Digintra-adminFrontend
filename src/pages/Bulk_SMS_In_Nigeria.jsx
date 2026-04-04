
import React from 'react';
import "./bulk.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useState } from 'react';
import { useEffect } from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import icons1 from "../assets/icons8-arrow-100.png";
import icons2 from "../assets/icons8-call-50.png";
import icons3 from "../assets/business.png";
import icons4 from "../assets/otp.png";
import icons5 from "../assets/appa.png";
import icons6 from "../assets/pay.png";
import icons7 from "../assets/update.png";
import icons8 from "../assets/rate.png";
import icons9 from "../assets/fast.png";
import icons10 from "../assets/t3.png";
import icons11 from "../assets/c1.png";
import icons12 from "../assets/c2.png";
import icons13 from "../assets/c3.png";
import icons14 from "../assets/c4.png";
import icons15 from "../assets/start2.png";
import icons16 from "../assets/icons8-plus-501.png";
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import Client from '../components/Client';
import Getstarted from '../components/Getstarted';
import {FaUserPlus, FaWhatsapp } from 'react-icons/fa';
import Businesskeycomp from '../components/Businesskeycomp';
import ReliDelivery from '../assets/key1.jpg'
import UserFriend from '../assets/key2.jpg';
import API from '../assets/key3.jpg';
import Customize from '../assets/key4.jpg';
import Transactional from '../assets/key5.jpg';
import Time from '../assets/key6.jpg';
import Pricing from '../assets/key_7.jpg';
import Management from '../assets/key8.jpg';
import Security from '../assets/key9.jpg';
import Hotel from '../assets/hotel.png';
import Education from '../assets/education.png';
import Retail from '../assets/retail.png';
import Home from '../assets/home.png';
import Health from '../assets/health.png';
import CostEffect from '../assets/costeffective.png';
import Personalisation from '../assets/personalisation.png';
import key7 from '../assets/key_7.jpg'
import key8 from '../assets/key8.jpg';
import bulksmsnigeria from '../assets/bulksmsnigeria.png';
import nigeriaImage from '../assets/nigeriaImage.jpg';
import BulkSMSAustraliaImages from '../assets/bulksmsAus.jpg';
import Hreflang from "../HrefComp";
import { hreflangConfig } from "../HreflangConfig";



export default function Bulk_sms_provider_abudhabi() {
    
    


    const [open, setOpen] = useState(null);


      useEffect(()=>{
        window.scrollTo(0,0);
      },[])
  return (
    <>

      <Hreflang links={hreflangConfig} />
    <Helmet>
    <meta name="robots" content="index, follow" />

      <title>Bulk SMS Nigeria | SMS Gateway & Marketing Solutions</title>
      <meta name="description" content='Send fast and reliable Bulk SMS in Nigeria with DIGINTRA. High delivery rates, SMS marketing tools, API gateway, and affordable pricing for all businesses.

'/>
 <meta name="keywords" content="bulk SMS Nigeria, bulk SMS service Nigeria, SMS marketing Nigeria, SMS gateway Nigeria, SMS marketing company in Nigeria
" />
    <link rel="canonical" href="https://digintra.com/bulk-sms-nigeria" />
    </Helmet>


     <section className="w-full bg-sky-950 text-white pt-[120px] pb-[20px] md:pt-[195px] md:pb-[150px]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    
        {/* Phone Image Left */}
        <div className="flex justify-center md:justify-center bg-gradient-to-br from-blue-300 to-orange-300 py-10 rounded-3xl">
          <img 
            src={bulksmsnigeria}
            alt="Bulk SMS Nigeria"
            className="w-[260px] md:w-[520px] drop-shadow-2xl rounded-xl"
          />
        </div>
    
        {/* Content Right */}
        <div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-center md:text-left">
           Bulk SMS Nigeria - 
            <span className="text-[#F64F6A]"> Fast, Reliable & Affordable Messaging</span>
          </h1>
    
          <p className="text-white/80 mt-4 text-base md:text-lg leading-7 text-center md:text-left">
          Send fast, reliable, and cost-effective bulk SMS across Nigeria with our secure, high-delivery platform.
          </p>
    
          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <a 
              href="https://sms-login.digintra.com/User/SignUp"
              className="px-6 py-3 bg-white text-[#06273F] font-semibold rounded-lg 
                         shadow hover:bg-gray-100 transition"
            >
    Get Started        </a>
    
            <a 
              href="#"
              className="px-6 py-3 bg-[#F64F6A] text-white font-semibold rounded-lg 
                         shadow hover:bg-[#e4415b] transition"
            >
              Request Free Demo
            </a>    
          </div>
    
          <p className="mt-6 text-white/80 text-lg text-center md:text-left">
            Delivering Messages Across <span className="text-[#F64F6A] font-bold">190+ Countries</span>
          </p>
        </div>
      </div>
    </section>


   

    
       <section className="relative w-full py-16 bg-gradient-to-br from-white via-[#F3FFF4] to-[#FFFBE5] overflow-hidden">

  {/* Soft Floating Glows */}
  <div className="absolute top-12 left-10 w-32 h-32 bg-green-300/20 blur-2xl rounded-full animate-pulse"></div>
  <div className="absolute bottom-10 right-10 w-36 h-36 bg-yellow-300/25 blur-3xl rounded-full animate-bounce"></div>

 

  <div className="relative z-10 max-w-6xl mx-auto px-6">

    {/* Header */}
    <div className="text-center mb-16 animate-[fadeInDown_1s_ease]">
      <h2 className="text-3xl md:text-4xl font-bold text-[#093E14] leading-snug">
        Why Choose DIGINTRA for Bulk SMS in Nigeria?
      </h2>
      <p className="text-[#093E14]/70 mt-3 max-w-3xl mx-auto text-lg">
        At DIGINTRA, we provide a feature-rich bulk SMS service in Nigeria designed for businesses that want results.
      </p>
    </div>

    {/* Feature List - Unique RIBBON Style */}
    <div className="space-y-10 pr-0 lg:pr-60">

      {[
        "High Delivery Speed: Messages deliver within seconds across all Nigerian networks including MTN, Airtel, Glo, and 9mobile.",
        "Affordable Pricing: Some of the cheapest bulk SMS rates in Nigeria without compromising quality.",
        "Easy-to-Use Dashboard: Send thousands of messages instantly from a clean, intuitive interface.",
        "Smart Routing Technology: Uses premium local routes for exceptional delivery accuracy.",
        "24/7 Support: Our team is available round-the-clock for assistance.",
        "Secure & Reliable: Advanced encryption protects your data at all times.",
      ].map((item, index) => (
        <div
          key={index}
          className="flex items-start gap-4 animate-[fadeInUp_1s_ease]"
          style={{ animationDelay: `${index * 0.12}s` }}
        >
          {/* Custom Icon Bubble */}
          <div className="w-10 h-10 flex-shrink-0 rounded-full bg-green-600 text-white flex items-center justify-center text-xl font-bold shadow-md">
            ✓
          </div>

          {/* Text */}
          <p className="text-lg text-[#093E14]/80 leading-relaxed">
            {item}
          </p>
        </div>
      ))}

    </div>

    {/* Closing Statement */}
    <div className="text-center max-w-4xl mx-auto mt-16 animate-[fadeInUp_1s_ease]">
      <p className="text-[#093E14]/90 text-xl font-medium">
        DIGINTRA is not just another bulk SMS provider in Nigeria - we are your long-term messaging partner.
      </p>
    </div>

  </div>

  {/* Animations */}
  <style>
    {`
      @keyframes floatAnim {
        0% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0); }
      }
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes fadeInDown {
        from { opacity: 0; transform: translateY(-20px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `}
  </style>

</section>






        <section className="relative w-full py-16 bg-gradient-to-br from-white via-[#F2FFF5] to-[#FFFBE8] overflow-hidden">

  {/* Soft Glow Elements */}
  <div className="absolute top-10 left-10 w-32 h-32 bg-green-300/20 blur-2xl rounded-full animate-pulse"></div>
  <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-300/25 blur-3xl rounded-full animate-bounce"></div>

  <div className="relative z-10 max-w-6xl mx-auto px-6">

    {/* Header */}
    <div className="text-center mb-16 animate-[fadeInDown_1s_ease]">
      <h2 className="text-3xl md:text-4xl font-bold text-[#063B18] leading-snug">
        Types of Bulk SMS Services in Nigeria
      </h2>
      <p className="text-[#063B18]/70 max-w-3xl mx-auto mt-4 text-lg">
        DIGINTRA supports all major SMS categories to power every business need.
      </p>
    </div>

    {/* TIMELINE STYLE — NO CARDS */}
    <div className="relative pl-10 md:pl-20">

      {/* Vertical Line */}
      <div className="absolute left-4 md:left-8 top-0 w-1 h-full bg-gradient-to-b from-green-400 to-green-700 rounded-full opacity-70"></div>

      {/* List Items */}
      <div className="space-y-14">

        {[
          {
            num: "01",
            title: "Promotional Bulk SMS",
            desc: "Great for marketing campaigns, sales alerts, product updates, and customer engagement."
          },
          {
            num: "02",
            title: "Transactional SMS",
            desc: "Instant delivery of OTPs, account alerts, payment notifications, and verification messages."
          },
          {
            num: "03",
            title: "DND-Bypass (Corporate Route)",
            desc: "Reach customers even when they are on DND using our premium corporate messaging route."
          },
          {
            num: "04",
            title: "API SMS (Developer Gateway)",
            desc: "Integrate our fast Nigeria SMS gateway API into websites, CRMs, mobile apps, or software."
          },
          {
            num: "05",
            title: "Personalized Bulk SMS",
            desc: "Send customized messages including names, dates, or any dynamic fields for better engagement."
          }
        ].map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col md:flex-row items-start gap-6 animate-[fadeInUp_1s_ease]"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            {/* Number Bubble */}
            <div className="absolute -left-1 md:-left-5 w-12 h-12 rounded-full bg-green-700 text-white flex items-center justify-center text-lg font-bold shadow-lg">
              {item.num}
            </div>

            {/* Text Section */}
            <div className="pl-14 md:pl-16">
              <h3 className="text-xl font-semibold text-[#063B18]">{item.title}</h3>
              <p classname="text-[#063B18]/70 mt-2 leading-relaxed text-lg">
                {item.desc}
              </p>
            </div>
          </div>
        ))}

      </div>

    </div>

  </div>

  {/* Animations */}
  <style>
    {`
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes fadeInDown {
        from { opacity: 0; transform: translateY(-20px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `}
  </style>

</section>






        <section className="relative w-full py-16 bg-gradient-to-br from-white via-[#F3FFF6] to-[#F9FFE8] overflow-hidden">

  {/* Floating Glow Effects */}
  <div className="absolute top-10 left-12 w-32 h-32 bg-green-300/20 blur-2xl rounded-full animate-pulse"></div>
  <div className="absolute bottom-14 right-12 w-40 h-40 bg-yellow-300/25 blur-3xl rounded-full animate-bounce"></div>

  <div className="relative z-10 max-w-6xl mx-auto px-6">

    {/* Section Header */}
    <div className="text-center mb-16 animate-[fadeInDown_1s_ease]">
      <h2 className="text-3xl md:text-4xl font-bold text-[#063B18] leading-snug">
        Industries That Benefit from DIGINTRA’s Bulk SMS Service Nigeria
      </h2>
      <p className="text-[#063B18]/70 mt-4 max-w-3xl mx-auto text-lg">
        Bulk SMS is one of the most cost-effective communication tools for every sector:
      </p>
    </div>

    {/* Wave-Style Industry Grid (NO CARDS) */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-14">

      {[
        { icon: "https://cdn-icons-png.flaticon.com/512/2910/2910768.png", text: "Banks & Fintechs - OTPs, transaction alerts, notifications" },
        { icon: "https://cdn-icons-png.flaticon.com/512/891/891419.png", text: "E-commerce - Order updates, delivery alerts, promotions" },
        { icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", text: "Schools & Universities - Attendance alerts, announcements, fee reminders" },
        { icon: "https://cdn-icons-png.flaticon.com/512/806/806137.png", text: "Real Estate - Property listings, client follow-ups, appointment reminders" },
        { icon: "https://cdn-icons-png.flaticon.com/512/1029/1029022.png", text: "Churches & Mosques - Event updates, service reminders, member communication" },
        { icon: "https://cdn-icons-png.flaticon.com/512/2966/2966481.png", text: "Healthcare - Appointment reminders, health tips, patient updates" },
        { icon: "https://cdn-icons-png.flaticon.com/512/1034/1034507.png", text: "Political Campaigns - Voter mobilization, awareness campaigns" },
        { icon: "https://cdn-icons-png.flaticon.com/512/679/679720.png", text: "Logistics - Tracking updates, pickup notifications" },
        { icon: "https://cdn-icons-png.flaticon.com/512/891/891462.png", text: "Retail & SMEs - Product promotions, customer engagement" }
      ].map((item, index) => (
        <div 
          key={index}
          className={`flex items-start gap-6 animate-[fadeInUp_1s_ease]`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {/* Icon Badge */}
          <div className="w-16 h-16 flex-shrink-0 rounded-full bg-green-100 shadow-md flex items-center justify-center">
            <img src={item.icon} alt="industry-icon" className="w-8 h-8" />
          </div>

          {/* Text */}
          <p className="text-lg text-[#063B18]/80 leading-relaxed">
            {item.text}
          </p>
        </div>
      ))}

    </div>

    {/* Bottom Statement */}
    <div className="text-center mt-16 animate-[fadeInUp_1s_ease]">
      <p className="text-[#063B18]/90 text-xl font-medium">
        Whatever your industry, DIGINTRA helps you communicate faster and better.
      </p>
    </div>

  </div>

  {/* Keyframe Animations */}
  <style>
    {`
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `}
  </style>

</section>






      




        <section className="relative w-full py-16 bg-gradient-to-br from-white via-[#F4FFF7] to-[#FFFBE7] overflow-hidden">

  {/* Glows */}
  <div className="absolute top-10 left-12 w-32 h-32 bg-green-300/25 blur-2xl rounded-full animate-pulse"></div>
  <div className="absolute bottom-10 right-14 w-36 h-36 bg-yellow-300/30 blur-3xl rounded-full animate-bounce"></div>

  <div className="relative z-10 max-w-6xl mx-auto px-6">

    {/* Header */}
    <div className="text-center mb-16 animate-[fadeInDown_1s_ease]">
      <h2 className="text-3xl md:text-4xl font-bold text-[#063B18]">
        Key Features of DIGINTRA Bulk SMS Nigeria
      </h2>
      <p className="text-[#063B18]/70 mt-3 text-lg">
        Everything you need to run smart, fast and scalable SMS campaigns.
      </p>
    </div>

    {/* TWO-COLUMN FEATURE LIST */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">

      {[
        "Super-fast delivery to all networks",
        "Sender ID customization",
        "SMS scheduling",
        "Delivery reports & analytics",
        "SMS API for developers",
        "DND-bypass available",
        "Upload contacts (CSV/Excel)",
        "Personalized messaging",
        "Unlimited sender IDs",
        "24/7 customer support",
      ].map((item, index) => (
        <div
          key={index}
          className="flex items-start gap-4 animate-[fadeInUp_1s_ease]"
          style={{ animationDelay: `${index * 0.08}s` }}
        >
          {/* Check Icon */}
          <span className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center text-xl font-bold shadow-md">
            ✓
          </span>

          {/* Text */}
          <p className="text-lg text-[#063B18]/85 font-medium leading-relaxed">
            {item}
          </p>
        </div>
      ))}

    </div>

  </div>

  {/* Animations */}
  <style>
    {`
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(16px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes fadeInDown {
        from { opacity: 0; transform: translateY(-16px); }
        to { opacity:1; transform: translateY(0); }
      }
    `}
  </style>

</section>




        <section className="relative w-full py-16 bg-gradient-to-br from-white via-[#F5FFF4] to-[#FFFCE8] overflow-hidden">

  {/* Floating Glows */}
  <div className="absolute top-10 left-10 w-32 h-32 bg-green-300/20 blur-2xl rounded-full animate-pulse"></div>
  <div className="absolute bottom-10 right-12 w-40 h-40 bg-yellow-300/25 blur-3xl rounded-full animate-bounce"></div>

  <div className="relative z-10 max-w-6xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-16 animate-[fadeInDown_1s_ease]">
      <h2 className="text-3xl md:text-4xl font-bold text-[#063B18]">
        Bulk SMS Price in Nigeria
      </h2>
      <p className="text-[#063B18]/70 mt-3 text-lg">
        DIGINTRA offers competitive, flexible pricing designed for every business size.
      </p>
    </div>

    {/* TWO COLUMN LAYOUT */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

      {/* Left Column – Description */}
      <div className="animate-[fadeInUp_1s_ease]">
        <p className="text-lg text-[#063B18]/85 leading-relaxed mb-6 ">
          DIGINTRA offers highly competitive pricing to help you send bulk messages in Nigeria at lower
          costs. Our bulk SMS units are priced to match every budget and ensure maximum ROI.
        </p>

        <p className="text-lg text-[#063B18]/85 leading-relaxed">
          Whether you’re a startup, NGO, school, religious group, SME, or enterprise - we provide cost-effective
          SMS solutions tailored to your needs.
        </p>
      </div>

      {/* Right Column – Cool Feature List */}
      <div className="space-y-6 animate-[fadeInUp_1s_ease]">

        {[
          "Lower unit cost as volume increases",
          "Special discounts for NGOs, schools, and religious organizations",
          "Affordable corporate route for verified sender IDs",
          "Transparent billing with no hidden fees",
          "Flexible top-up & monthly plans available",
        ].map((item, index) => (
          <div 
            key={index}
            className="flex items-start gap-4"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Icon Bubble */}
            <span className="w-10 h-10 flex-shrink-0 rounded-full bg-green-600 text-white flex items-center justify-center text-xl font-bold shadow-md">
              ✓
            </span>

            {/* Text */}
            <p className="text-lg text-[#063B18]/85 leading-relaxed font-medium">
              {item}
            </p>
          </div>
        ))}
      </div>

    </div>

    {/* Footer Note */}
    <div className="text-center mt-14 animate-[fadeInUp_1s_ease]">
      <p className="text-[#063B18]/80 text-lg">
        <strong>Contact our team</strong> for updated bulk SMS Nigeria pricing plans customized to your volume.
      </p>
    </div>

  </div>

  {/* Animations */}
  <style>
    {`
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes fadeInDown {
        from { opacity: 0; transform: translateY(-20px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `}
  </style>

</section>


        <section className="relative w-full py-16 bg-gradient-to-br from-white via-[#F2FFF6] to-[#FFF9E6] overflow-hidden">

  {/* Background Glow Effects */}
  <div className="absolute top-10 left-10 w-32 h-32 bg-green-300/30 blur-2xl rounded-full animate-pulse"></div>
  <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-300/25 blur-3xl rounded-full animate-bounce"></div>

  {/* Right Side Illustration (Desktop Only) */}
  <div className="hidden lg:block absolute right-10 top-[500px] -translate-y-1/2 w-[420px] opacity-90">
    <img
      src={nigeriaImage}
      alt="SMS Nigeria"
      className="w-full animate-[floatAnim_5s_ease-in-out_infinite]"
    />
  </div>

  <div className="relative z-10 max-w-6xl mx-auto px-6">

    {/* Title */}
    <div className="text-center mb-16 animate-[fadeInDown_1s_ease]">
      <h2 className="text-3xl md:text-4xl font-bold text-[#063B18]">
        How Our Bulk SMS Nigeria Process Works
      </h2>
      <p className="text-[#063B18]/70 mt-4 max-w-2xl mx-auto text-lg">
        Sending bulk SMS in Nigeria with DIGINTRA is simple, fast and seamless.
      </p>
    </div>

    {/* Wavy Step Layout */}
    <div className="space-y-12 pr-0 lg:pr-64">

      {[
        "Create an Account – Sign up on our platform within seconds.",
        "Fund Your Wallet – Pay using bank transfer, card or online payment.",
        "Upload or Add Contacts – Import CSV lists or add manually.",
        "Compose Your SMS – Write your message or use a template.",
        "Send or Schedule – Deliver instantly or schedule for later.",
        "Track Delivery Reports – Monitor real-time performance and delivery status."
      ].map((step, index) => (
        <div
          key={index}
          className={`flex items-start gap-6 animate-[fadeInUp_1s_ease]`}
          style={{ animationDelay: `${index * 0.15}s` }}
        >
          {/* Number Bubble */}
          <div className="w-14 h-14 rounded-full bg-green-600 text-white text-xl font-bold flex items-center justify-center shadow-xl">
            {index + 1}
          </div>

          {/* Step Text */}
          <p className="text-lg text-[#063B18]/85 leading-relaxed font-medium max-w-xl">
            {step}
          </p>
        </div>
      ))}

    </div>

    {/* Closing CTA Block */}
    <div className="text-center max-w-3xl mx-auto mt-20 animate-[fadeInUp_1s_ease]">
      <h3 className="text-2xl md:text-3xl font-bold text-[#063B18]">
        Ready to Send Bulk SMS in Nigeria with DIGINTRA?
      </h3>

      <p className="text-[#063B18]/75 mt-4 text-lg leading-relaxed">
        If you want a fast, affordable, professional bulk SMS service in Nigeria,
        DIGINTRA is your best choice. Our platform delivers high delivery rates,
        maximum reliability, and unmatched customer support.
      </p>

      <a href="https://sms-login.digintra.com/User/SignUp">
        <button className="mt-8 px-10 py-3 bg-green-600 text-white font-semibold rounded-xl shadow-lg hover:bg-green-700 hover:scale-105 transition-all">
          Start Sending Bulk SMS in Nigeria
        </button>
      </a>
    </div>
  </div>

  {/* Animations */}
  <style>
    {`
      @keyframes floatAnim {
        0% { transform: translateY(0); }
        50% { transform: translateY(-12px); }
        100% { transform: translateY(0); }
      }
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes fadeInDown {
        from { opacity: 0; transform: translateY(-20px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `}
  </style>

</section>



        <section className="relative w-full py-16 mb-10 bg-gradient-to-br from-white via-[#F4FFF6] to-[#FFFBE9] overflow-hidden">

  {/* Decorative Glows */}
  <div className="absolute top-12 left-12 w-32 h-32 bg-green-300/25 blur-2xl rounded-full animate-pulse"></div>
  <div className="absolute bottom-12 right-10 w-40 h-40 bg-yellow-300/25 blur-3xl rounded-full animate-bounce"></div>

  <div className="relative z-10 max-w-6xl mx-auto px-6">

    {/* Header */}
    <div className="text-center mb-16 animate-[fadeInDown_1s_ease]">
      <h2 className="text-3xl md:text-4xl font-bold text-[#063B18]">FAQ - Bulk SMS Nigeria (DIGINTRA)</h2>
      <p className="text-[#063B18]/70 mt-3 text-lg">Your most important questions, answered clearly.</p>
    </div>

    {/* FAQ Container */}
    <div className="space-y-8">

      {[
        {
          q: "1. What is Bulk SMS Nigeria?",
          a: "Bulk SMS Nigeria refers to sending large volumes of text messages at once to customers, clients, or members. DIGINTRA provides a fast, reliable, and affordable bulk SMS platform designed specifically for Nigerian businesses."
        },
        {
          q: "2. Why should I use DIGINTRA for bulk SMS?",
          a: "DIGINTRA offers high delivery rates, affordable pricing, DND-bypass routes, API integration, real-time delivery reports, and 24/7 customer support — making it one of the best bulk SMS platforms in Nigeria."
        },
        {
          q: "3. Can I send bulk SMS to all Nigerian networks?",
          a: "Yes. DIGINTRA delivers messages to MTN, Glo, Airtel, and 9mobile with high delivery speed and accuracy."
        },
        {
          q: "4. Do you offer DND-bypass or corporate route SMS?",
          a: "Yes. Our corporate route allows you to deliver messages to numbers on DND for important notifications and marketing campaigns."
        },
        {
          q: "5. How much does bulk SMS cost in Nigeria?",
          a: "Our rates are among the cheapest bulk SMS in Nigeria, with flexible pricing depending on your volume. Discounts are available for NGOs, schools, churches, and political campaigns."
        },
        {
          q: "6. Can developers integrate DIGINTRA using an SMS API?",
          a: "Absolutely. DIGINTRA provides a robust and easy-to-use SMS gateway API in Nigeria that integrates with websites, CRMs, apps, and software systems."
        },
        {
          q: "7. Can I schedule SMS messages?",
          a: "Yes. You can schedule SMS for any time or date using our platform’s built-in scheduling tool."
        },
        {
          q: "8. Can I use my own sender ID?",
          a: "Yes, you can create and send with your preferred sender ID. Verified IDs help improve delivery, especially on corporate routes."
        }
      ].map((item, index) => (
        <details
          key={index}
          className="group bg-white/70 backdrop-blur-xl border border-green-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 animate-[fadeInUp_1s_ease]"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {/* Question Row */}
          <summary className="flex justify-between cursor-pointer text-xl font-semibold text-[#063B18]">
            {item.q}
            <span className="text-green-600 text-3xl transform group-open:rotate-45 transition-all">
              +
            </span>
          </summary>

          {/* Answer */}
          <p className="mt-4 text-[#063B18]/70 leading-relaxed text-lg pl-1">
            {item.a}
          </p>
        </details>
      ))}

    </div>

  </div>

  {/* Animations */}
  <style>
    {`
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes fadeInDown {
        from { opacity: 0; transform: translateY(-20px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `}
  </style>

</section>















  
  



   <Footer/>
   </>
  )
}
