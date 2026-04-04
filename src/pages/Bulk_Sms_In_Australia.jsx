
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
import bulksmsuk from '../assets/bulkImageAus.webp';
import ukImage from '../assets/bulkImageAustralia.webp';
import BulkSMSAustraliaImages from '../assets/bulksmsAus.jpg';
import Hreflang from "../HrefComp";
import { hreflangConfig } from "../HreflangConfig";



export default function Bulk_sms_provider_abudhabi() {
  
      useEffect(()=>{
        window.scrollTo(0,0);
      },[])
  return (
    <>
     <Hreflang links={hreflangConfig} />
    <Helmet>
    <meta name="robots" content="index, follow" />

      <title>SMS Broadcast Australia | SMS Broadcast & SMS Gateway - DIGINTRA</title>
      <meta name="description" content='DIGINTRA Teleservices offers fast, reliable SMS broadcast Australia. Affordable SMS Broadcast, secure SMS gateway & enterprise messaging across Australia.

'/>
 <meta name="keywords" content="SMS Broadcast provider in Australia, SMS Broadcast Australia
" />
    <link rel="canonical" href="https://digintra.com/sms-broadcast-australia" />
    </Helmet>
      
   <section className="w-full bg-sky-950 text-white pt-[195px] pb-[150px]">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

    {/* Phone Image Left */}
    <div className="flex justify-center md:justify-center bg-gradient-to-br from-blue-300 to-orange-300 py-10 rounded-3xl">
      <img 
        src={bulksmsuk}
        alt="SMS Broadcast Australia"
        className="w-[260px] md:w-[520px] drop-shadow-2xl"
      />
    </div>

    {/* Content Right */}
    <div>
      <h1 className="text-3xl md:text-4xl font-bold leading-tight">
       SMS Broadcast Australia – 
        <span className="text-[#F64F6A]"> Fast, Reliable & Affordable Messaging</span>
      </h1>

      <p className="text-white/80 mt-2 text-base md:text-md leading-7">
     Send SMS Broadcast in seconds with SMS Broadcast, helping Australian businesses reach thousands of customers instantly and reliably. Boost engagement, streamline communication, and deliver important updates with ease.
      </p>

      <div className="mt-7 flex flex-wrap gap-4">
        <a 
          href="https://sms-login.digintra.com/User/SignUp"
          className="px-6 py-3 bg-white text-[#06273F] font-semibold rounded-lg 
                     shadow hover:bg-gray-100 transition"
        >
Get Started        </a>

        <a 
          href="https://sms-login.digintra.com/User/SignUp"
          className="px-6 py-3 bg-[#F64F6A] text-white font-semibold rounded-lg 
                     shadow hover:bg-[#e4415b] transition"
        >
          Request Free Demo
        </a>
      </div>

      <p className="mt-6 text-white/80 text-md">
        Delivering Messages Across <span className="text-[#F64F6A] font-bold">190+ Countries</span>
      </p>
    </div>
  </div>
</section>


<section className="relative w-full bg-gradient-to-br from-white via-[#F8FBFF] to-[#E8F3FF] text-[#0A2137] overflow-hidden py-24">

  {/* Soft Background Glow */}
  <div className="absolute top-10 left-16 w-48 h-48 bg-blue-300/30 blur-[100px] rounded-full"></div>
  <div className="absolute bottom-10 right-20 w-52 h-52 bg-orange-300/30 blur-[120px] rounded-full"></div>

  <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

    {/* LEFT CONTENT */}
    <div className="space-y-6 animate-[fadeInLeft_1.2s_ease]">

      <h2 className="text-3xl md:text-4xl font-bold leading-tight text-[#0A2137]">
        Reach More Customers with  
        <span className="text-yellow-600"> DIGINTRA’s SMS Broadcast Australia</span>
      </h2>

      <p className="text-[#0A2137]/80 text-md leading-7">
        DIGINTRA Teleservices is a leading provider of SMS broadcast in Australia, helping organisations of all sizes deliver time-critical and high-impact messages with ease. Whether you’re promoting a new product, sending appointment reminders, or running large-scale marketing campaigns, our advanced SMS solutions ensure your message lands exactly where it matters right in your customer’s mobile inbox.
      </p>

      <p className="text-[#0A2137]/80 text-md leading-7">
       With years of expertise and a strong reputation across Australian industries, DIGINTRA Teleservices offers a robust platform that combines simplicity, scalability, and enterprise-grade reliability. Our mission is to empower businesses with fast, secure, and cost-effective SMS tools that enhance customer engagement and drive real results.
      </p>

      
    </div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-center md:justify-end animate-[float_6s_ease-in-out_infinite]">
      <img
        src={ukImage}
        alt="SMS Broadcast Australia"
        className="w-[270px] md:w-[530px] drop-shadow-[0px_10px_40px_rgba(37,99,235,0.35)] rounded-xl"
      />
    </div>

  </div>

  {/* WAVE BOTTOM DIVIDER */}
  <svg
    className="absolute bottom-0 left-0 w-full"
    viewBox="0 0 1440 220"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#FFFFFF"
      d="M0,256L80,240C160,224,320,192,480,186.7C640,181,800,203,960,208C1120,213,1280,203,1360,197.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
    ></path>
  </svg>

  {/* Animations */}
  <style>
    {`
      @keyframes fadeInLeft {
        0% { opacity: 0; transform: translateX(-40px); }
        100% { opacity: 1; transform: translateX(0); }
      }
      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-15px); }
      }
    `}
  </style>

</section>




<section className="relative w-full py-24 bg-gradient-to-br from-[#FFF9D9] via-[#FFEFA8] to-[#FFE37A] overflow-hidden">

  {/* Soft Glow Elements */}
  <div className="absolute top-10 right-16 w-32 h-32 bg-yellow-200/40 blur-2xl rounded-full animate-pulse"></div>
  <div className="absolute bottom-10 left-10 w-28 h-28 bg-orange-300/30 blur-3xl rounded-full animate-bounce"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

    {/* Left Side Content */}
    <div className="animate-[fadeInLeft_1s_ease]">

      <h2 className="text-3xl md:text-4xl font-bold text-[#3A2C00] leading-tight mb-6">
        The Power of SMS Broadcasting
      </h2>

      <p className="text-[#4A3A00]/80 text-md leading-relaxed">
        SMS remains the most potent communication tool available, boasting an impressive <span className="font-semibold text-[#3A2C00]">98% open rate.</span>
        SMS Broadcast Australia ensures your important updates, promotions, or emergency alerts are read within minutes.
      </p>

      <p className="text-[#4A3A00]/80 text-md mt-5 leading-relaxed">
        This instant reach transforms customer engagement - whether you're confirming appointments, sending one-time passwords (OTPs), or launching a flash sale.
      </p>

      <p className="text-[#4A3A00]/80 text-md mt-5 leading-relaxed">
        With an effective <span className="font-semibold text-[#3A2C00]">SMS Broadcast Australia</span> strategy, organizations guarantee direct connectivity that delivers measurable and immediate results.
      </p>

    </div>

    {/* Right Side Image */}
    <div className="relative animate-[fadeInRight_1s_ease]">
      <div className="relative bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl p-4 border border-yellow-200 hover:border-yellow-300 transition-all">

        {/* Glow behind image */}
        <div className="absolute inset-0 -z-10 bg-yellow-200/40 blur-xl rounded-2xl"></div>

        <img 
          src={BulkSMSAustraliaImages}
          alt="SMS Broadcasting"
          className="rounded-xl w-full object-cover drop-shadow-lg hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>

  </div>

  {/* Animations */}
  <style>
    {`
      @keyframes fadeInLeft {
        from { opacity: 0; transform: translateX(-20px); }
        to { opacity: 1; transform: translateX(0); }
      }
      @keyframes fadeInRight {
        from { opacity: 0; transform: translateX(20px); }
        to { opacity: 1; transform: translateX(0); }
      }
    `}
  </style>

</section>




<section className="relative w-full py-20 bg-gradient-to-b from-[#FFF9D8] via-[#FFF3B0] to-[#FFE98A] overflow-hidden">

  {/* Background Decorative Blobs */}
  <div className="absolute top-10 left-10 w-28 h-28 bg-yellow-300/30 blur-2xl rounded-full animate-pulse"></div>
  <div className="absolute bottom-12 right-14 w-32 h-32 bg-orange-300/30 blur-3xl rounded-full animate-bounce"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6">

    {/* Section Header */}
    <div className="text-center mb-16 animate-[fadeInDown_1s_ease]">
      <h2 className="text-3xl md:text-4xl font-bold text-[#3A2C00]">
        Why Choose DIGINTRA for SMS Broadcast in Australia?
      </h2>
      <p className="text-[#4A3A00]/70 mt-4 max-w-3xl mx-auto">
        We understand the Australian market. DIGINTRA’s platform supports both small businesses and large enterprises with flexible SMS broadcast solutions designed for your communication goals.
      </p>
    </div>

    {/* Feature Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

      {/* Feature Item */}
      {[
        {
          title: "High-Delivery Reliability",
          desc: "Our delivery infrastructure is built for speed and accuracy. We use premium routing channels to deliver high-priority messages instantly - perfect for alerts, confirmations, and urgent updates.",
          icon: "https://cdn-icons-png.flaticon.com/512/190/190411.png"
        },
        {
          title: "Easy-to-Use SMS Platform",
          desc: "You don’t need any technical knowledge. Upload contacts, craft messages, schedule broadcasts, and track performance through a clean, intuitive dashboard.",
          icon: "https://cdn-icons-png.flaticon.com/512/1827/1827504.png"
        },
        {
          title: "Cost-Effective Bulk Messaging",
          desc: "We offer some of the most affordable SMS Broadcast Australia pricing. Whether you send 500 or 500,000 messages, you get transparent, competitive rates without compromise.",
          icon: "https://cdn-icons-png.flaticon.com/512/1040/1040230.png"
        },
        {
          title: "Enterprise-Grade Security",
          desc: "Your data is protected with industry-leading encryption and fully aligned with Australian privacy laws. DIGINTRA ensures secure routing and safe data handling.",
          icon: "https://cdn-icons-png.flaticon.com/512/3064/3064197.png"
        },
        {
          title: "Local Australian Support",
          desc: "Our local support team is available to help with onboarding, campaign setup, troubleshooting, and strategy - ensuring your broadcasts always perform at their best.",
          icon: "https://cdn-icons-png.flaticon.com/512/1828/1828817.png"
        }
      ].map((item, index) => (
        <div
          key={index}
          className="p-8 bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all border border-yellow-200"
        >
          <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center shadow-md mb-5">
            <img src={item.icon} alt="" className="w-8 h-8" />
          </div>

          <h3 className="text-xl font-semibold text-[#3A2C00]">{item.title}</h3>
          <p className="text-[#4A3A00]/70 mt-3 leading-relaxed">{item.desc}</p>
        </div>
      ))}

    </div>
  </div>

  {/* Animations */}
  <style>
    {`
      @keyframes fadeInDown {
        from { opacity: 0; transform: translateY(-20px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `}
  </style>

</section>















<section className="relative w-full py-24 bg-white overflow-hidden">

  {/* Soft Yellow Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#FFF7C7] via-[#FFF1A8] to-transparent opacity-70 pointer-events-none"></div>

  {/* Decorative Floating Shapes */}
  <div className="absolute top-10 left-10 w-24 h-24 bg-yellow-300/30 blur-2xl rounded-full animate-pulse"></div>
  <div className="absolute bottom-12 right-14 w-32 h-32 bg-orange-300/25 blur-3xl rounded-full animate-bounce"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6">

    {/* Header */}
    <div className="text-center mb-16 animate-[fadeInDown_1s_ease]">
      <h2 className="text-3xl md:text-4xl font-bold text-[#3A2C00]">
        Types of SMS Broadcast Services We Offer in Australia
      </h2>
      <p className="text-[#4A3A00]/70 mt-3 max-w-3xl mx-auto">
        DIGINTRA provides a versatile suite of services tailored to every business need.
      </p>
    </div>

    {/* Feature Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

      {[
        {
          title: "Promotional SMS",
          desc: "High-volume promotional broadcasts supporting personalized content and tracking links.",
          icon: "https://cdn-icons-png.flaticon.com/512/1827/1827504.png"
        },
        {
          title: "Transactional SMS",
          desc: "Perfect for OTPs, order confirmations, system alerts, and time-sensitive messages.",
          icon: "https://cdn-icons-png.flaticon.com/512/1827/1827504.png"
        },
        {
          title: "2-Way SMS",
          desc: "Interactive messaging via dedicated virtual numbers - customers can reply, opt-in, and engage.",
          icon: "https://cdn-icons-png.flaticon.com/512/561/561127.png"
        },
        {
          title: "Developer API",
          desc: "Secure API integration for CRMs, ERPs, and apps with complete developer documentation.",
          icon: "https://cdn-icons-png.flaticon.com/512/1827/1827504.png"
        }
      ].map((item, index) => (
        <div
          key={index}
          className="p-8 bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all border border-yellow-200/60"
        >
          {/* Icon */}
          <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center shadow-lg mb-5">
            <img src={item.icon} alt="" className="w-8 h-8" />
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold text-[#3A2C00] mb-3">
            {item.title}
          </h3>

          {/* Description */}
          <p className="text-[#4A3A00]/70 leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}

    </div>
  </div>

  {/* Keyframe Animation */}
  <style>
    {`
      @keyframes fadeInDown {
        from { opacity: 0; transform: translateY(-20px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `}
  </style>

</section>














<section className="relative w-full py-24 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    {/* Section Header */}
    <div className="text-center mb-16 animate-[fadeInDown_1s_ease]">
      <h2 className="text-3xl md:text-4xl font-bold text-yellow-600 leading-tight">
        Comprehensive SMS Broadcast Solutions for Every Industry in Australia
      </h2>
      <p className="text-[#0A2137]/70 mt-3 max-w-3xl mx-auto">
        DIGINTRA Teleservices delivers tailored SMS solutions designed for the unique needs of each industry across Australia.
      </p>
    </div>

    {/* Industry Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

      {[
        {
          title: "Healthcare & Medical",
          desc: "Send appointment reminders, test results, follow-ups, and patient notifications to reduce no-shows and improve satisfaction.",
          icon: "https://cdn-icons-png.flaticon.com/512/2966/2966481.png"
        },
        {
          title: "Retail & E-Commerce",
          desc: "Boost promotions, flash sales, and loyalty programs. Engage customers with personalised SMS offers that drive conversions.",
          icon: "https://cdn-icons-png.flaticon.com/512/891/891462.png"
        },
        {
          title: "Education & Training",
          desc: "Notify students and parents of schedules, exams, closures, or events. SMS ensures urgent updates are always seen.",
          icon: "https://cdn-icons-png.flaticon.com/512/3135/3135731.png"
        },
        {
          title: "Real Estate",
          desc: "Reach buyers and tenants with property updates, inspection alerts, lease reminders, and follow-up communication.",
          icon: "https://cdn-icons-png.flaticon.com/512/912/912214.png"
        },
        {
          title: "Hospitality & Tourism",
          desc: "Send booking confirmations, promotional deals, event details, and reminders to keep your guests informed.",
          icon: "https://cdn-icons-png.flaticon.com/512/2972/2972185.png"
        },
        {
          title: "Finance & Banking",
          desc: "Deliver secure OTPs, alerts, statements, and transaction updates through a trusted SMS gateway.",
          icon: "https://cdn-icons-png.flaticon.com/512/2331/2331970.png"
        },
      ].map((item, index) => (
        <div
          key={index}
          className="p-8 bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center shadow mb-5">
            <img src={item.icon} alt="icon" className="w-8 h-8" />
          </div>

          <h3 className="text-xl font-semibold text-[#0A2137]">{item.title}</h3>
          <p className="text-[#0A2137]/70 mt-3 leading-relaxed">{item.desc}</p>
        </div>
      ))}

    </div>

    {/* Closing Text */}
    <div className="text-center max-w-4xl mx-auto mt-14">
      <p className="text-[#0A2137]/80 text-lg leading-relaxed">
        Whatever your sector, DIGINTRA provides versatile communication tools that streamline workflows,
        strengthen engagement, and deliver measurable results.
      </p>
    </div>

  </div>

  {/* Animation */}
  <style>
    {`
      @keyframes fadeInDown {
        from { opacity: 0; transform: translateY(-20px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `}
  </style>

</section>









<section className="relative w-full py-2 bg-gradient-to-b from-[#F5F9FF] to-white overflow-hidden">

  {/* Floating Blobs */}
  <div className="absolute top-10 right-10 w-24 h-24 bg-blue-300/20 blur-2xl rounded-full animate-pulse"></div>
  <div className="absolute bottom-16 left-16 w-28 h-28 bg-purple-300/20 blur-3xl rounded-full animate-bounce"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6">

    {/* Title */}
    <div className="text-center mb-20 animate-[fadeInDown_1s_ease]">
      <h2 className="text-3xl md:text-4xl font-bold text-[#0A2137]">
        Key Features of SMS Broadcast Australia
      </h2>
      <p className="text-[#0A2137]/70 mt-4 max-w-2xl mx-auto">
        DIGINTRA combines power with ease of use - strong features without any complexity.
      </p>
    </div>

    {/* Timeline Style Feature List */}
    <div className="relative">

      {/* Vertical Timeline Line */}
      <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-300/50 to-transparent rounded-full"></div>

      <div className="space-y-16">

        {/* Feature 1 */}
        <div className="relative flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
          
          {/* Icon */}
          <div className="md:absolute md:left-1/2 md:-translate-x-1/2 w-16 h-16 bg-blue-50 rounded-full shadow-lg flex items-center justify-center z-10">
            <img src="https://cdn-icons-png.flaticon.com/512/1827/1827504.png" className="w-8 h-8" />
          </div>

          {/* Content */}
          <div className="md:w-1/2 md:pr-10 bg-white/80 backdrop-blur-xl rounded-xl shadow-xl p-7 border border-blue-100 hover:border-blue-300 transition-all">
            <h3 className="text-lg font-semibold text-[#0A2137]">
              User-Friendly Dashboard for Fast Campaign Setup
            </h3>
            <p className="text-[#0A2137]/70 mt-3">
              Upload contacts, create campaigns, and send SMS in just a few simple steps.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="relative flex flex-col md:flex-row-reverse items-center md:items-start gap-6 md:gap-10">
          
          <div className="md:absolute md:left-1/2 md:-translate-x-1/2 w-16 h-16 bg-green-50 rounded-full shadow-lg flex items-center justify-center z-10">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135681.png" className="w-8 h-8" />
          </div>

          <div className="md:w-1/2 md:pl-10 bg-white/80 backdrop-blur-xl rounded-xl shadow-xl p-7 border border-green-100 hover:border-green-300 transition-all">
            <h3 className="text-lg font-semibold text-[#0A2137]">
              Smart Targeting, Personalization & Contact Management
            </h3>
            <p className="text-[#0A2137]/70 mt-3">
              Segment by city, customer type, or behavior — personalize with names or custom fields.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="relative flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
          
          <div className="md:absolute md:left-1/2 md:-translate-x-1/2 w-16 h-16 bg-yellow-50 rounded-full shadow-lg flex items-center justify-center z-10">
            <img src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png" className="w-8 h-8" />
          </div>

          <div className="md:w-1/2 md:pr-10 bg-white/80 backdrop-blur-xl rounded-xl shadow-xl p-7 border border-yellow-100 hover:border-yellow-300 transition-all">
            <h3 className="text-lg font-semibold text-[#0A2137]">
              Real-Time Reports & Delivery Analytics
            </h3>
            <p className="text-[#0A2137]/70 mt-3">
              Track delivered, failed, clicked, and responded messages with clear insights.
            </p>
          </div>
        </div>

        {/* Feature 4 */}
        <div className="relative flex flex-col md:flex-row-reverse items-center md:items-start gap-6 md:gap-10">
          
          <div className="md:absolute md:left-1/2 md:-translate-x-1/2 w-16 h-16 bg-purple-50 rounded-full shadow-lg flex items-center justify-center z-10">
            <img src="https://cdn-icons-png.flaticon.com/512/2620/2620974.png" className="w-8 h-8" />
          </div>

          <div className="md:w-1/2 md:pl-10 bg-white/80 backdrop-blur-xl rounded-xl shadow-xl p-7 border border-purple-100 hover:border-purple-300 transition-all">
            <h3 className="text-lg font-semibold text-[#0A2137]">
              API Integration & Automation
            </h3>
            <p className="text-[#0A2137]/70 mt-3">
              Connect with CRMs, websites, or apps to automate messages for orders, signups, and alerts.
            </p>
          </div>
        </div>

        {/* Feature 5 */}
        <div className="relative flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
          
          <div className="md:absolute md:left-1/2 md:-translate-x-1/2 w-16 h-16 bg-red-50 rounded-full shadow-lg flex items-center justify-center z-10">
            <img src="https://cdn-icons-png.flaticon.com/512/1048/1048942.png" className="w-8 h-8" />
          </div>

          <div className="md:w-1/2 md:pr-10 bg-white/80 backdrop-blur-xl rounded-xl shadow-xl p-7 border border-red-100 hover:border-red-300 transition-all">
            <h3 className="text-lg font-semibold text-[#0A2137]">
              Security, Compliance & Opt-Out Management
            </h3>
            <p className="text-[#0A2137]/70 mt-3">
              Fully aligned with Canadian privacy laws and carrier regulations to keep your messaging compliant.
            </p>
          </div>
        </div>

      </div>

    </div>
  </div>

  {/* Animation Keyframes */}
  <style>
    {`
      @keyframes fadeInDown {
        from { opacity: 0; transform: translateY(-20px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `}
  </style>
</section>




<section className="relative w-full py-24 bg-gradient-to-b from-white to-[#F4F8FF] overflow-hidden">

  {/* Decorative Blobs */}
  <div className="absolute top-16 left-10 w-28 h-28 bg-blue-300/20 blur-2xl rounded-full animate-pulse"></div>
  <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-300/20 blur-3xl rounded-full animate-bounce"></div>

  <div className="relative z-10 max-w-6xl mx-auto px-6">

    {/* Title */}
    <div className="text-center mb-16 animate-[fadeInDown_1s_ease]">
      <h2 className="text-3xl md:text-4xl font-bold text-[#0A2137]">
        Pricing: SMS Broadcast Service Australia
      </h2>
      <p className="text-[#0A2137]/70 mt-4 max-w-2xl mx-auto">
        We offer flexible, transparent pricing designed to match your SMS needs.
      </p>
    </div>

    {/* Pricing Content Box */}
    <div className="relative bg-white/70 backdrop-blur-xl shadow-xl rounded-2xl p-10 border border-blue-100 hover:border-blue-300 transition-all max-w-4xl mx-auto">

      {/* Floating Price Icon */}
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-blue-600 text-white flex items-center justify-center rounded-full shadow-xl animate-bounce">
        $
      </div>

      <h3 className="text-2xl font-semibold text-[#0A2137] text-center mt-6">
        Simple & Transparent Pricing
      </h3>

      <p className="text-[#0A2137]/70 text-center mt-4 mb-8">
        Your pricing depends on the exact needs of your business:
      </p>

      {/* List of Pricing Factors */}
      <ul className="space-y-4 text-[#0A2137]/80 text-lg md:text-xl">
        <li className="flex items-start gap-3">
          <span className="text-blue-600 text-xl">✔</span>
          SMS volume (monthly or bulk purchase)
        </li>

        <li className="flex items-start gap-3">
          <span className="text-blue-600 text-xl">✔</span>
          Type of SMS route (Promotional / Transactional)
        </li>

        <li className="flex items-start gap-3">
          <span className="text-blue-600 text-xl">✔</span>
          Platform usage or API integration for CRMs/Apps
        </li>

        <li className="flex items-start gap-3">
          <span className="text-blue-600 text-xl">✔</span>
          Additional features like sender ID, automation, or advanced analytics
        </li>
      </ul>

      {/* CTA Button */}
      <div className="text-center mt-10">
        <a href="https://sms-login.digintra.com/User/SignUp">
          <button className="px-10 py-3 bg-[#2563EB] text-white font-semibold text-lg rounded-xl shadow-lg hover:bg-[#1e45c6] hover:scale-105 transition-all">
            Request a Quote
          </button>
        </a>

        <p className="text-[#0A2137]/60 mt-3 text-sm">
          Get the best SMS Broadcast service pricing in Australia tailored to your business.
        </p>
      </div>

    </div>
  </div>

  {/* Keyframe Animation */}
  <style>
    {`
      @keyframes fadeInDown {
        from { opacity: 0; transform: translateY(-20px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `}
  </style>
</section>
















<section className="relative w-full py-2 bg-gradient-to-b from-[#F5FAFF] to-white overflow-hidden">

  {/* Decorative Blobs */}
  <div className="absolute top-14 right-10 w-24 h-24 bg-blue-300/25 blur-2xl rounded-full animate-pulse"></div>
  <div className="absolute bottom-14 left-10 w-28 h-28 bg-pink-300/25 blur-3xl rounded-full animate-bounce"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6">

    {/* Title */}
    <div className="text-center mb-16 animate-[fadeInDown_1s_ease]">
      <h2 className="text-3xl md:text-4xl font-bold text-[#0A2137] leading-tight">
        Benefits of Using <span className="text-red-600">DIGINTRA’s SMS Broadcast Australia</span> Platform
      </h2>
    </div>

    {/* Benefits Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

      {[
        {
          icon: "https://cdn-icons-png.flaticon.com/512/992/992651.png",
          text: "Reach thousands instantly across Australia"
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/709/709790.png",
          text: "Higher open rates than email (98%+ open rate)"
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/942/942748.png",
          text: "Improve customer engagement and loyalty"
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/1250/1250593.png",
          text: "Increase sales and conversions"
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/1041/1041372.png",
          text: "Automate repetitive messaging tasks"
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/1828/1828817.png",
          text: "Enhance customer experience with instant updates"
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/1086/1086741.png",
          text: "Cost-effective communication for any business size"
        },
      ].map((item, index) => (
        <div
          key={index}
          className="group p-8 bg-white/80 backdrop-blur-xl rounded-2xl border border-transparent hover:border-blue-300 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2"
        >
          {/* Icon */}
          <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto shadow-md group-hover:bg-blue-100 transition">
            <img src={item.icon} className="w-8 h-8" />
          </div>

          {/* Text */}
          <p className="text-[#0A2137] text-center font-medium mt-5 leading-relaxed">
            {item.text}
          </p>
        </div>
      ))}

    </div>
  </div>

  {/* Animations */}
  <style>
    {`
      @keyframes fadeInDown {
        from { opacity: 0; transform: translateY(-20px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `}
  </style>
</section>







<section className="relative w-full py-20 bg-gradient-to-b from-[#F5FAFF] to-white overflow-hidden">

  {/* Decorative Blobs */}
  <div className="absolute top-10 right-10 w-28 h-28 bg-blue-300/20 blur-2xl rounded-full animate-pulse"></div>
  <div className="absolute bottom-16 left-10 w-32 h-32 bg-purple-300/20 blur-3xl rounded-full animate-bounce"></div>

  <div className="relative z-10 max-w-6xl mx-auto px-6">

    {/* Header */}
    <div className="text-center mb-16 animate-[fadeInDown_1s_ease]">
      <h2 className="text-3xl md:text-4xl font-bold text-yellow-600">
        How Our SMS Broadcast Australia Process Works
      </h2>
      <p className="text-[#0A2137]/70 mt-3 max-w-2xl mx-auto">
        A simple, smooth, and fast workflow to send SMS across Australia.
      </p>
    </div>

    {/* Steps Wrapper */}
    <div className="relative">

      {/* Desktop Horizontal Line */}
      <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200 rounded-full"></div>

      {/* Steps Grid (Horizontal for Desktop, Vertical for Mobile) */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-12 md:gap-6">

        {[
          {
            step: "1",
            title: "Create your DIGINTRA account",
          },
          {
            step: "2",
            title: "Choose a plan and get SMS credits",
          },
          {
            step: "3",
            title: "Upload your contact list",
          },
          {
            step: "4",
            title: "Write your SMS or use a saved template",
          },
          {
            step: "5",
            title: "Send SMS instantly or schedule it",
          },
          {
            step: "6",
            title: "Track delivery & analytics in real time",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center text-center animate-[fadeInUp_1s_ease]"
            style={{ animationDelay: `${index * 0.12}s` }}
          >
            {/* Step Icon */}
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-white text-2xl font-bold shadow-xl mb-4 transition-all duration-300 hover:scale-110">
              {item.step}
            </div>

            {/* Step Text */}
            <p className="text-[#0A2137] font-medium leading-relaxed text-sm md:text-base px-3">
              {item.title}
            </p>

            {/* Mobile Vertical Connector */}
            {index < 5 && (
              <div className="md:hidden w-1 h-10 bg-blue-200 rounded-full mt-4"></div>
            )}
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
    `}
  </style>
</section>






<section className="relative w-full py-20 bg-gradient-to-br from-white via-[#F5F9FF] to-[#E9F2FF] overflow-hidden">

  {/* Floating Decorative Blobs */}
  <div className="absolute top-10 right-10 w-28 h-28 bg-blue-300/20 blur-2xl rounded-full animate-pulse"></div>
  <div className="absolute bottom-16 left-10 w-32 h-32 bg-purple-400/20 blur-3xl rounded-full animate-bounce"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

    {/* LEFT SIDE – TEXT */}
    <div className="space-y-6 animate-[fadeInLeft_1s_ease]">

      <h2 className="text-3xl md:text-4xl font-bold text-[#0A2137] leading-tight">
        Ready to Start Sending SMS Broadcast in Australia with <span className="text-yellow-600">DIGINTRA?</span>
      </h2>

      <p className="text-[#0A2137]/75 text-md leading-relaxed">
        DIGINTRA makes SMS Broadcast Australia simple. Start with a free demo, send sample messages, and watch your reports in action - no long contracts, no complex setup.
      </p>

      <p className="text-[#0A2137]/75 text-md leading-relaxed">
        You don’t have to guess if SMS will work for you. Try the free demo, send a test campaign, and see real results in minutes.
      </p>

      <p className="text-[#0A2137]/75 text-md leading-relaxed">
        Need help? Our support team is ready to guide you from your first login to your first message. Sign up, explore the platform, and launch your first SMS Broadcast Australia campaign with confidence.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <a href="https://sms-login.digintra.com/User/SignUp">
          <button className="px-8 py-3 bg-blue-600 text-white font-semibold text-lg rounded-xl shadow-xl hover:bg-blue-700 hover:scale-105 transition-all">
            Try Free Demo
          </button>
        </a>

        <a href="https://sms-login.digintra.com/User/SignUp">
          <button className="px-8 py-3 border border-blue-600 text-blue-600 font-semibold text-lg rounded-xl shadow hover:bg-blue-50 transition-all">
            Create Your Account
          </button>
        </a>
      </div>

    </div>

    {/* RIGHT SIDE – IMAGE */}
    <div className="relative animate-[fadeInRight_1s_ease]">
      <div className="relative bg-white/60 backdrop-blur-xl rounded-2xl shadow-2xl p-4 border border-blue-100 hover:border-blue-300 transition-all">

        {/* Floating Glow Behind Image */}
        <div className="absolute inset-0 -z-10 bg-blue-300/20 blur-2xl rounded-2xl"></div>

        <img
          src={BulkSMSAustraliaImages}
          alt="SMS Broadcast in Australia"
          className="rounded-xl w-full object-cover drop-shadow-xl hover:scale-105 transition-transform duration-500"
        />

      </div>
    </div>

  </div>

  {/* Keyframe Animations */}
  <style>
    {`
      @keyframes fadeInLeft {
        from { opacity: 0; transform: translateX(-20px); }
        to { opacity: 1; transform: translateX(0); }
      }
      @keyframes fadeInRight {
        from { opacity: 0; transform: translateX(20px); }
        to { opacity: 1; transform: translateX(0); }
      }
    `}
  </style>

</section>





        <section className="relative w-full py-24 mb-5 bg-gradient-to-br from-white via-[#F4F9FF] to-[#EAF4FF] overflow-hidden">

  {/* Decorative Floating Shapes */}
  <div className="absolute top-10 left-10 w-24 h-24 bg-blue-300/20 blur-2xl rounded-full animate-pulse"></div>
  <div className="absolute bottom-12 right-12 w-32 h-32 bg-purple-300/20 blur-3xl rounded-full animate-bounce"></div>

  <div className="relative z-10 max-w-5xl mx-auto px-6">

    {/* Section Title */}
    <div className="text-center mb-14 animate-[fadeInDown_1s_ease]">
      <h2 className="text-3xl md:text-4xl font-bold text-yellow-600">FAQ - SMS Broadcast Australia</h2>
      <p className="text-[#0A2137]/70 mt-3 max-w-2xl mx-auto">
        Find answers to the most common questions about using DIGINTRA’s SMS Broadcast Australia platform.
      </p>
    </div>

    {/* FAQ Accordion */}
    <div className="space-y-5">

      {[
        {
          q: "What is SMS Broadcast Australia and how does it work?",
          a: "SMS Broadcast Australia is the process of sending many text messages at once to customers across Australia. You upload your list, write your SMS, and send it through DIGINTRA. The system connects with carriers, delivers messages quickly, and shows real-time reports."
        },
        {
          q: "Is DIGINTRA’s SMS Broadcast service Australia legal and compliant?",
          a: "Yes. DIGINTRA supports fully compliant SMS campaigns that follow Canadian regulations. Messages are only sent to users who have given consent, and opt-out links help you maintain a clean, compliant list."
        },
        {
          q: "How much does it cost to send SMS Broadcast in Australia?",
          a: "Pricing depends on message volume and route type, but DIGINTRA keeps costs clear and transparent—no setup fees or hidden charges. Try the free demo or contact sales for the best plan."
        },
        {
          q: "How fast can I start sending SMS Broadcast in Australia?",
          a: "You can sign up, use the free demo, and send test campaigns the same day. Larger campaigns may require a quick setup or approval, but the process is still fast and simple."
        },
        {
          q: "Can I send SMS Broadcast in French?",
          a: "Yes. DIGINTRA supports SMS in English, French, or both—perfect for serving customers across all regions of Australia."
        },
        {
          q: "Can I integrate DIGINTRA with my website or CRM?",
          a: "Absolutely. DIGINTRA provides APIs and connectors for CRMs, websites, and apps. You can automate SMS for signups, orders, updates, and more."
        }
      ].map((item, index) => (
        <details
          key={index}
          className="group bg-white/80 backdrop-blur-xl rounded-xl border border-blue-100 shadow-lg hover:shadow-2xl transition-all p-6"
        >
          <summary className="cursor-pointer text-md font-semibold text-[#0A2137] flex justify-between items-center">
            {item.q}
            <span className="text-blue-600 text-2xl leading-none group-open:rotate-45 transition-transform">
              +
            </span>
          </summary>
          <p className="text-[#0A2137]/70 mt-4 leading-relaxed">
            {item.a}
          </p>
        </details>
      ))}

    </div>
  </div>

  {/* Animations */}
  <style>
    {`
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
