import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import "./enterprise.css";
import Footer from '../components/Footer';
import image1 from "../assets/sms-india.webp"

export default function Enterprise_messaging() {

  return (
    <>
        <Helmet>
        <meta name="robots" content="index, follow" />

                  <meta charSet="utf-8" />
                  <title>Bulk SMS India – Send Bulk Text Messages Instantly</title>
                  <meta name="description" content="Send bulk text messages in India with DIGINTRA. Reliable bulk SMS provider with secure SMS gateway India, high delivery rates, and TRAI-compliant messaging.
"/>
 <meta name="keywords" content="bulk sms services, bulk sms service, bulk sms, bulk sms provider
" />
<link rel="canonical" href="https://digintra.com/bulk-sms-india" />
                
              </Helmet>   

     <section className="w-full pt-[180px] pb-20 bg-gradient-to-r from-blue-50 via-white to-green-50 relative overflow-hidden">

  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

    {/* Left Content */}
    <div>

      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
        Bulk SMS India
      </h1>

      <p className="text-lg text-gray-600 mb-6">
        Send Bulk Text Messages Instantly Across India with 
        <span className="font-semibold text-green-600"> DIGINTRA</span>, a secure,
        TRAI-compliant bulk SMS service designed for businesses.
      </p>

      

      <h2 className="text-xl font-semibold text-gray-900 mb-3">
        Powerful Bulk SMS Service in India for Businesses
      </h2>

      <p className="text-gray-600 leading-relaxed mb-4">
        Organizations across India rely on fast, secure, and scalable communication
        to connect with customers, employees, and partners. Bulk SMS India enables
        businesses to send high-volume text messages instantly, ensuring critical
        information reaches recipients within seconds.
      </p>

      <p className="text-gray-600 leading-relaxed mb-8">
        As a trusted bulk SMS provider in India, DIGINTRA helps organizations
        streamline communication through reliable messaging infrastructure and
        enterprise-grade delivery systems.
      </p>

      {/* CTA Buttons */}
      <div className="flex gap-4 flex-wrap">

        <button className="bg-green-600 text-white px-7 py-3 rounded-lg font-medium shadow-md hover:bg-green-700 transition">
          Start Sending SMS
        </button>

        <button className="bg-white border border-gray-300 px-7 py-3 rounded-lg font-medium text-gray-700 hover:bg-gray-100 transition">
          Contact Sales
        </button>

      </div>

    </div>


    {/* Right Image */}
    <div className="flex justify-center relative">

      {/* glow background */}
      <div className="absolute w-[420px] h-[420px] bg-blue-200 rounded-full blur-3xl opacity-40"></div>

      <img
        src={image1}
        alt="Bulk SMS India"
        className="relative w-full max-w-lg drop-shadow-xl"
      />

    </div>

  </div>

</section>     

       




      
   
        <Footer/>
      </>
  )
}
