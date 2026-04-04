
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
import bulksmsindia from '../assets/bulk-sms-india.png';
import brazilImage from '../assets/brazilImage.jpg';
import BulkSMSAustraliaImages from '../assets/bulksmsAus.jpg';
import Hreflang from "../HrefComp";
import { hreflangConfig } from "../HreflangConfig";
import smsdesign from "../assets/designbulksmsindia.png";


export default function Bulk_sms_provider_abudhabi() {
    const faqs = [
    {
      q: "What is Bulk SMS India?",
      a: "Bulk SMS India is a messaging service that allows businesses to send large volumes of SMS messages instantly to customers across India using an SMS gateway platform."
    },
    {
      q: "How can I send bulk SMS in India?",
      a: "To send bulk SMS in India, you need to register on a DLT platform, get sender ID and template approval, and then use a bulk SMS provider like DIGINTRA to send messages via web panel or API."
    },
    {
      q: "What is the cost of bulk SMS in India?",
      a: "The cost of bulk SMS in India depends on volume, route, and message type (promotional or transactional). Pricing typically decreases as message volume increases."
    },
    {
      q: "Which is the best SMS gateway in India?",
      a: "The best SMS gateway in India offers high delivery rates, DLT compliance, fast API integration, and real-time reporting. DIGINTRA is a reliable choice for scalable bulk messaging."
    },
    {
      q: "Is bulk SMS legal in India?",
      a: "Yes, bulk SMS is legal in India when sent through TRAI-approved DLT platforms with proper sender ID registration and user consent (opt-in)."
    }
  ];


    const industries = [
    "Retail & E-commerce",
    "Banking & Financial Services",
    "Healthcare & Hospitals",
    "Education & EdTech",
    "Logistics & Transportation",
    "Healthcare & Hospitals",
    "Travel & Hospitality",
    "Government & Public Services"
  ];


    const features = [
    "Instant delivery of bulk SMS",
    "Detailed delivery reports and analytics",
    "Easy campaign management dashboard",
    "API integration for developers",
    "Secure and scalable messaging infrastructure",
    "Nationwide coverage across India"
  ];



 const data = [
    {
      title: "Promotional SMS Campaigns",
      desc: "Engage customers and promote products through targeted SMS campaigns.",
      list: [
        "Marketing promotions and offers",
        "Product launches",
        "Seasonal sales campaigns"
      ]
    },
    {
      title: "Transactional SMS Alerts",
      desc: "Deliver important messages instantly to customers.",
      list: [
        "OTP verification messages",
        "Payment confirmations",
        "Appointment reminders",
        "Delivery notifications"
      ]
    },
    {
      title: "SMS Gateway India",
      desc: "DIGINTRA’s powerful SMS gateway India allows businesses and developers to integrate messaging into applications, websites, and platforms.",
      list: [
        "Fast API integration",
        "Automated SMS sending",
        "Reliable delivery infrastructure"
      ]
    },
    {
      title: "Bulk SMS Sender Platform",
      desc: "Our user-friendly messaging platform allows businesses to:",
      list: [
        "Upload contacts easily",
        "Personalize SMS messages",
        "Schedule campaigns",
        "Track performance through real-time reports"
      ]
    }
  ];

    const [open, setOpen] = useState(null);


      useEffect(()=>{
        window.scrollTo(0,0);
      },[])
  return (
    <>
     <Hreflang links={hreflangConfig} />
    <Helmet>
    <meta name="robots" content="index, follow" />

      <title>Bulk SMS India - Send Bulk Text Messages Instantly</title>
      <meta name="description" content='Send bulk text messages in India with DIGINTRA. Reliable bulk SMS provider with secure SMS gateway India, high delivery rates, and TRAI-compliant messaging.

'/>
 <meta name="keywords" content="bulk SMS India, bulk SMS service india, SMS marketing india, SMS gateway India, SMS marketing company in India
" />
    <link rel="canonical" href="https://digintra.com/bulk-sms-india" />
    </Helmet>


     <section className="w-full bg-sky-950 text-white pt-[120px] pb-[20px] md:pt-[195px] md:pb-[150px]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    
        {/* Phone Image Left */}
        <div className="flex justify-center md:justify-center bg-gradient-to-br from-blue-300 to-orange-300 py-10 rounded-3xl">
          <img 
            src={bulksmsindia}
            alt="Bulk SMS Brazil"
            className="w-[260px] md:w-[520px] drop-shadow-2xl"
          />
        </div>
    
        {/* Content Right */}
        <div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-center md:text-left">
            Bulk SMS India -   
            <span className="text-[#F64F6A]"> Reach Millions Instantly</span>
          </h1>
    
          <p className="text-white/80 mt-4 text-base md:text-lg leading-7 text-center md:text-left">
           Send Bulk Text Messages Instantly Across India with DIGINTRA, Secure, TRAI-Compliant Bulk SMS Service for Businesses.
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


   <section className="relative w-full py-20  overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-green-300/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-52 h-52 bg-emerald-300/20 blur-3xl rounded-full animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-6">

            <h2 className="text-3xl md:text-4xl font-bold text-[#0A3D1C] leading-tight">
              Powerful Bulk SMS Service in India for Businesses
            </h2>

            <p className="text-md text-[#0A3D1C]/70 leading-relaxed">
              Organizations across India rely on fast, secure, and scalable communication to connect with customers, employees, and partners. Bulk SMS India enables businesses to send high-volume text messages instantly, ensuring critical information reaches recipients within seconds.
            </p>

            <p className="text-md text-[#0A3D1C]/70 leading-relaxed">
              Whether for marketing campaigns, transactional alerts, OTP verification, or customer notifications, SMS continues to be one of the most effective communication channels in India. With DIGINTRA’s advanced SMS gateway India, businesses can easily send bulk text messages with high delivery rates and real-time tracking.
            </p>

            <p className="text-md text-[#0A3D1C]/70 leading-relaxed">
              As a trusted bulk SMS provider in India, DIGINTRA helps organizations streamline communication through reliable bulk SMS service and enterprise-grade infrastructure.
            </p>

            {/* CTA */}
            <div className="pt-4">
              <button className="px-8 py-3 bg-green-600 text-white rounded-xl font-semibold shadow-lg hover:bg-green-700 hover:scale-105 transition-all">
                Start Sending SMS 🚀
              </button>
            </div>

          </div>

          {/* RIGHT SVG IMAGE */}
          <div className="flex justify-center items-center">
            <div className="relative w-[320px] md:w-[420px] animate-float">

              {/* YOUR SVG FILE */}
              <img
                src={smsdesign}
                alt="Bulk SMS Illustration"
                className="w-full h-auto "
              />

              {/* Glass Glow */}
              <div className="absolute inset-0  blur-3xl rounded-full"></div>
            </div>
          </div>

        </div>
      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
          }

          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
        `}
      </style>

    </section>













    <section className="relative w-full py-10 bg-gradient-to-br from-[#F7FFFA] via-[#ECFFF5] to-[#E3FFF0] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-green-300/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-52 h-52 bg-emerald-300/20 blur-3xl rounded-full animate-pulse"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A3D1C] leading-tight">
            Why Choose DIGINTRA for Bulk SMS India
          </h2>

          <p className="text-md text-[#0A3D1C]/70 mt-5 leading-relaxed">
            DIGINTRA provides a powerful bulk SMS sender platform designed for businesses that need reliable and scalable messaging services.
          </p>
        </div>

        {/* ADVANTAGES GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {[
            {
              title: "High Delivery Rates",
              desc: "Reach customers reliably across all major Indian telecom networks."
            },
            {
              title: "Instant Delivery",
              desc: "Send messages in seconds with real-time delivery reports."
            },
            {
              title: "Secure Infrastructure",
              desc: "Enterprise-grade platform ensuring safe and compliant messaging."
            },
            {
              title: "Advanced Analytics",
              desc: "Track campaigns with detailed insights and performance metrics."
            },
            {
              title: "Easy Integration",
              desc: "Seamlessly connect with websites, apps, and CRM systems."
            },
            {
              title: "Nationwide Coverage",
              desc: "Deliver messages anywhere across India without limitations."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="group p-6 bg-white/70 backdrop-blur-xl border border-green-100 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Top Accent Line */}
              <div className="w-10 h-1 bg-green-600 rounded-full mb-4 group-hover:w-16 transition-all"></div>

              <h3 className="text-lg font-semibold text-[#0A3D1C]">
                {item.title}
              </h3>

              <p className="text-sm text-[#0A3D1C]/70 mt-3 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

        {/* FOOTER TEXT */}
        <div className="text-center max-w-3xl mx-auto mt-16">
          <p className="text-md text-[#0A3D1C]/80 leading-relaxed">
            Our robust SMS gateway India allows businesses to manage messaging campaigns efficiently while ensuring reliability and performance.
          </p>
        </div>

      </div>
    </section>

    





    







    <section className="relative w-full py-10 bg-gradient-to-br from-[#F6FFFA] via-[#ECFFF5] to-[#E2FFF0] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-green-300/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-52 h-52 bg-emerald-300/20 blur-3xl rounded-full animate-pulse"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A3D1C] leading-tight">
            Compliance & Trust - TRAI and DLT Ready Messaging
          </h2>

          <p className="text-md text-[#0A3D1C]/70 mt-5 leading-relaxed">
            DIGINTRA delivers Bulk SMS India services while adhering to regulatory requirements and responsible messaging practices.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="p-8 bg-white/70 backdrop-blur-xl border border-green-100 rounded-2xl shadow-md hover:shadow-xl transition">

            <h3 className="text-xl font-semibold text-[#0A3D1C] mb-4">
              TRAI & DLT Compliance
            </h3>

            <p className="text-[#0A3D1C]/70 mb-4 leading-relaxed">
              India’s messaging ecosystem is regulated by the Distributed Ledger Technology (DLT) framework under TRAI. DIGINTRA supports compliant messaging workflows including:
            </p>

            <ul className="space-y-3">
              {[
                "Sender ID registration support",
                "Template approval for SMS campaigns",
                "Secure routing through compliant telecom networks",
                "Opt-in and opt-out mechanisms for responsible communication"
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-[#0A3D1C]/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CARD 2 */}
          <div className="p-8 bg-white/70 backdrop-blur-xl border border-green-100 rounded-2xl shadow-md hover:shadow-xl transition">

            <h3 className="text-xl font-semibold text-[#0A3D1C] mb-4">
              Secure SMS Gateway India
            </h3>

            <p className="text-[#0A3D1C]/70 mb-4 leading-relaxed">
              Our enterprise-grade SMS gateway India ensures:
            </p>

            <ul className="space-y-3">
              {[
                "Encrypted API connections",
                "Secure data handling and access control",
                "Reliable infrastructure for high-volume messaging"
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-[#0A3D1C]/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CARD 3 */}
          <div className="p-8 bg-white/70 backdrop-blur-xl border border-green-100 rounded-2xl shadow-md hover:shadow-xl transition">

            <h3 className="text-xl font-semibold text-[#0A3D1C] mb-4">
              Reliable Nationwide SMS Delivery
            </h3>

            <ul className="space-y-3">
              {[
                "Direct routing through Indian telecom operators",
                "High throughput for bulk messaging campaigns",
                "Real-time delivery status and reporting"
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-[#0A3D1C]/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
   


        



         <section className="relative w-full py-10 bg-gradient-to-br from-[#F7FFFA] via-[#ECFFF5] to-[#E3FFF0] overflow-hidden">

      {/* Glow */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-green-300/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-52 h-52 bg-emerald-300/20 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A3D1C]">
            Our Bulk SMS India Solutions
          </h2>
        </div>

        {/* CONTENT */}
        <div className="space-y-20">

          {data.map((item, index) => (
            <div
              key={index}
              className="grid md:grid-cols-2 gap-10 items-start border-b border-green-100 pb-12"
            >
              {/* LEFT SIDE */}
              <div>
                <span className="text-green-600 text-sm font-semibold tracking-wider">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="text-2xl md:text-3xl font-semibold text-[#0A3D1C] mt-2">
                  {item.title}
                </h3>
              </div>

              {/* RIGHT SIDE */}
              <div>
                <p className="text-md text-[#0A3D1C]/70 leading-relaxed">
                  {item.desc}
                </p>

                <ul className="mt-4 space-y-2">
                  {item.list.map((li, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-green-600">→</span>
                      <span className="text-[#0A3D1C]/80">{li}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>



        


        <section className="relative w-full py-10 bg-gradient-to-br from-[#F9FFFB] via-[#F1FFF6] to-[#E9FFF2] overflow-hidden">

      {/* Soft Glow */}
      <div className="absolute top-10 left-10 w-36 h-36 bg-green-200/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-44 h-44 bg-emerald-200/30 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A3D1C]">
            Key Features of DIGINTRA Bulk SMS Service
          </h2>
        </div>

        {/* FEATURES LIST */}
        <div className="divide-y divide-green-100">

          {features.map((feature, index) => (
            <div
              key={index}
              className="group flex items-center justify-between py-6 transition-all duration-300"
            >
              {/* LEFT TEXT */}
              <div className="flex items-center gap-5">

                {/* Number */}
                <span className="text-green-600 font-semibold text-sm tracking-wider">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Feature */}
                <p className="text-lg md:text-xl text-[#0A3D1C] font-medium group-hover:text-green-700 transition">
                  {feature}
                </p>
              </div>

              {/* RIGHT ARROW */}
              <div className="text-green-500 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-2 transition-all">
                →
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>





    
    <section className="relative w-full py-10  overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-green-200/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-emerald-200/30 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A3D1C]">
            Industries Using Bulk SMS India
          </h2>

          <p className="text-md text-[#0A3D1C]/70 mt-5 leading-relaxed">
            DIGINTRA supports organizations across multiple sectors in India.
          </p>
        </div>

        {/* INDUSTRY LIST */}
        <div className="grid sm:grid-cols-2 gap-x-16 gap-y-6">

          {industries.map((item, index) => (
            <div
              key={index}
              className="group flex items-center justify-between border-b border-green-100 pb-3"
            >
              <div className="flex items-center gap-4">

                {/* Dot */}
                <span className="w-2.5 h-2.5 bg-green-600 rounded-full group-hover:scale-125 transition"></span>

                {/* Text */}
                <p className="text-lg text-[#0A3D1C] font-medium group-hover:text-green-700 transition">
                  {item}
                </p>
              </div>

              {/* Arrow */}
              <span className="text-green-500 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-2 transition-all">
                →
              </span>
            </div>
          ))}

        </div>

        {/* FOOTER TEXT */}
        <div className="text-center mt-16 max-w-3xl mx-auto">
          <p className="text-md text-[#0A3D1C]/80 leading-relaxed">
            Our solutions help businesses deliver reliable communication at scale.
          </p>
        </div>

      </div>
    </section>





     <section className="relative w-full py-10 bg-gradient-to-br from-[#F7FFFA] via-[#ECFFF5] to-[#E3FFF0] overflow-hidden">

      {/* Glow */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-green-200/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-52 h-52 bg-emerald-200/30 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 space-y-24">

        {/* ================= WHY SMS ================= */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A3D1C]">
            Why Bulk SMS Remains Powerful in India
          </h2>

          <p className="text-md text-[#0A3D1C]/70 mt-6 leading-relaxed">
            SMS continues to be one of the most effective communication tools in India because:
          </p>

          {/* Points */}
          <div className="mt-10 grid sm:grid-cols-2 gap-6 text-left">
            {[
              "High mobile penetration across India",
              "Instant delivery and high open rates",
              "Works on all mobile devices without internet",
              "Ideal for urgent communication and notifications"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <p className="text-[#0A3D1C]/80 text-lg">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-md text-[#0A3D1C]/80 mt-10 leading-relaxed">
            This makes Bulk SMS India one of the most efficient marketing and communication channels available.
          </p>
        </div>

        {/* ================= TRUST / EEAT ================= */}
        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold text-[#0A3D1C] text-center">
            Why DIGINTRA is a Trusted Bulk SMS Provider in India
          </h2>

          <p className="text-center text-[#0A3D1C]/70 mt-4 text-lg">
            DIGINTRA follows the EEAT framework to ensure reliable and professional messaging services.
          </p>

          {/* EEAT Grid */}
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10 mt-14">

            {[
              {
                title: "Experience",
                desc: "Years of experience delivering high-volume messaging solutions across multiple countries."
              },
              {
                title: "Expertise",
                desc: "Deep technical expertise in SMS gateway India infrastructure and telecom integration."
              },
              {
                title: "Authoritativeness",
                desc: "Trusted by businesses worldwide as a reliable bulk SMS provider in India."
              },
              {
                title: "Trustworthiness",
                desc: "Secure infrastructure, transparent pricing, and dependable customer support."
              }
            ].map((item, index) => (
              <div key={index} className="border-l-4 border-green-600 pl-5">
                <h3 className="text-lg font-semibold text-[#0A3D1C]">
                  {item.title}
                </h3>
                <p className="text-[#0A3D1C]/70 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>

        {/* ================= CTA ================= */}
        <div className="text-center max-w-3xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold text-[#0A3D1C]">
            Start Sending Bulk SMS in India Today
          </h2>

          <p className="text-lg text-[#0A3D1C]/70 mt-5 leading-relaxed">
            Whether you want to send bulk text messages, launch SMS marketing campaigns, or integrate a reliable SMS gateway India, DIGINTRA provides the tools you need to communicate effectively.
          </p>

          <p className="text-lg text-[#0A3D1C]/80 mt-4">
            Contact DIGINTRA today to start using our Bulk SMS India platform and reach customers instantly.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">

            <button className="px-8 py-3 bg-green-600 text-white rounded-xl font-semibold shadow-md hover:bg-green-700 hover:scale-105 transition">
              Get Started with Bulk SMS
            </button>

            <button className="px-8 py-3 border border-green-600 text-green-700 rounded-xl font-semibold hover:bg-green-50 transition">
              Talk to an SMS Expert
            </button>

          </div>

        </div>

      </div>
    </section>



<section className="relative w-full py-24 bg-gradient-to-br from-[#F8FFFB] via-[#F1FFF6] to-[#E8FFF2] overflow-hidden">

      {/* Glow */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-green-200/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-emerald-200/30 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0A3D1C]">
            FAQ - Bulk SMS India
          </h2>
        </div>

        {/* FAQ LIST */}
        <div className="divide-y divide-green-100">

          {faqs.map((item, index) => (
            <details
              key={index}
              className="group py-6 cursor-pointer"
            >
              {/* QUESTION */}
              <summary className="flex justify-between items-center text-lg md:text-xl font-semibold text-[#0A3D1C] list-none">
                <span>
                  {index + 1}. {item.q}
                </span>

                <span className="text-green-600 text-2xl transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>

              {/* ANSWER */}
              <p className="mt-4 text-[#0A3D1C]/70 leading-relaxed text-lg">
                {item.a}
              </p>
            </details>
          ))}

        </div>

      </div>
    </section>



  
  



   <Footer/>
   </>
  )
}
