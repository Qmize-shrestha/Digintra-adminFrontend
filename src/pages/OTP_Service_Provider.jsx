import React from 'react';
import "./bulk.css";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { motion  } from 'framer-motion';
import { useState, useEffect } from 'react';

import { Smartphone } from "lucide-react";

import {
  Lock, 
} from "lucide-react";




import { ShieldCheck,  KeyRound } from "lucide-react";
import { FiSmartphone, FiMail, FiPhone, FiShield } from "react-icons/fi";
import { FiShoppingCart, FiCreditCard, FiActivity, FiBookOpen, FiBriefcase, FiChevronDown,FiChevronUp } from "react-icons/fi";
import {
 
  FiClock,
  FiGlobe,
  FiCodesandbox,
  FiCheckCircle,
  FiBarChart2,
  FiDollarSign,
} from "react-icons/fi";


import Footer from '../components/Footer';

import { Helmet } from 'react-helmet';

export default function Bulk_sms_provider_bangalore() {
 
   
      useEffect(()=>{
        window.scrollTo(0,0);
      },[])


      



      const faqData = [
  {
    question: "What does OTP mean and why is it important?",
    answer:
      "OTP stands for One-Time Password, a unique and temporary code used to verify user identity or authorize transactions. It adds an extra layer of security by ensuring that only the authorized user can complete an action like login, payment, or password reset. Using an OTP service helps protect against unauthorized access, phishing attacks, and online fraud.",
  },
  {
    question: "What is an OTP Service Provider?",
    answer:
      "An OTP service provider offers businesses a secure system to generate and deliver OTPs through channels such as SMS, email, or voice calls. These providers use OTP SMS gateways and OTP service APIs to ensure OTPs reach users instantly and reliably.",
  },
  {
    question: "How does DIGINTRA’s OTP Service work?",
    answer: `DIGINTRA’s OTP service API works in four simple steps:
1. A user initiates a login or transaction.
2. DIGINTRA’s system generates a unique OTP code.
3. The OTP is sent instantly via SMS, email, or voice using our global OTP SMS gateway.
4. The user enters the code, and our system verifies it in real time for secure authentication.`,
  },
  {
    question: "What channels are available for sending OTPs?",
    answer:
      "DIGINTRA supports multiple OTP delivery methods including SMS OTP Service, Email OTP Service, Voice OTP Service, and App-Based OTP (TOTP).",
  },
  {
    question: "Can I integrate DIGINTRA’s OTP Service with my website or app?",
    answer:
      "Absolutely. DIGINTRA provides a developer-friendly OTP service API that allows easy integration with websites, mobile apps, or enterprise systems. The API is lightweight, secure, and supports all major programming languages, making it simple to implement SMS OTP verification or two-factor authentication (2FA).",
  },
  {
    question: "Is DIGINTRA’s OTP Service secure?",
    answer:
      "Yes. Security is DIGINTRA’s top priority. Our platform uses end-to-end encryption, time-sensitive OTPs, and secure token algorithms to prevent misuse or interception. We comply with global data protection regulations including GDPR and ISO standards to ensure complete privacy and reliability.",
  },
  {
    question: "How fast are OTPs delivered through DIGINTRA?",
    answer:
      "DIGINTRA’s OTP SMS gateway is optimized for real-time OTP delivery. Most OTPs are delivered within 2–5 seconds, even during peak hours. Our global infrastructure ensures maximum uptime and redundancy for consistent performance.",
  },
  {
    question: "What industries can benefit from OTP services?",
    answer:
      "DIGINTRA’s OTP SMS service platform is used by Banking & Finance, E-commerce, Healthcare, Education, and Enterprise IT for secure logins, transactions, and data protection.",
  },
  {
    question: "What makes DIGINTRA different from other OTP service providers?",
    answer:
      "DIGINTRA stands out for high delivery rates, scalable infrastructure, customizable API solutions, global coverage, 24/7 support, and affordability. Our gateway handles millions of OTPs daily with near-zero downtime.",
  },
  {
    question: "How can I start using DIGINTRA’s OTP Service?",
    answer:
      "Sign up for a DIGINTRA account, integrate our OTP service API into your website or app, and start sending OTPs instantly via SMS, email, or voice.",
  },
  {
    question: "Does DIGINTRA support global OTP delivery?",
    answer:
      "Yes, DIGINTRA provides global OTP delivery through its advanced OTP SMS gateway.",
  },
  {
    question: "What are the pricing options for DIGINTRA’s OTP Services?",
    answer:
      "DIGINTRA offers flexible pricing plans based on OTP volume and delivery channels. Start-up-friendly or enterprise-grade packages are available with guaranteed performance.",
  },
  {
    question: "Can I use DIGINTRA for Two-Factor Authentication (2FA)?",
    answer:
      "Yes. DIGINTRA’s OTP service API is fully compatible with 2FA systems for logins, transactions, and account verifications.",
  },
];




       const advantages = [
    {
      title: "Enhanced Security",
      desc: "Prevent unauthorized access and fraud with one-time verification codes.",
      icon: <FiShield className="w-8 h-8 text-purple-700" />,
    },
    {
      title: "Instant Delivery",
      desc: "Fast OTP delivery via SMS, email, or voice for real-time authentication.",
      icon: <FiClock className="w-8 h-8 text-pink-500" />,
    },
    {
      title: "Global Reach",
      desc: "Deliver OTPs worldwide using our powerful OTP SMS gateway infrastructure.",
      icon: <FiGlobe className="w-8 h-8 text-indigo-600" />,
    },
    {
      title: "Easy Integration",
      desc: "Plug-and-play OTP service API for quick setup on any platform.",
      icon: <FiCodesandbox className="w-8 h-8 text-green-600" />,
    },
    {
      title: "High Reliability",
      desc: "Guaranteed delivery rates with redundancy and failover systems.",
      icon: <FiCheckCircle className="w-8 h-8 text-yellow-600" />,
    },
    {
      title: "Scalable Solution",
      desc: "From start-ups to enterprises, handle any message volume effortlessly.",
      icon: <FiBarChart2 className="w-8 h-8 text-purple-500" />,
    },
    {
      title: "Cost-Effective",
      desc: "Affordable OTP SMS service provider packages without compromising quality.",
      icon: <FiDollarSign className="w-8 h-8 text-pink-400" />,
    },
  ];


      const industries = [
    {
      title: "E-commerce Platforms",
      description:
        "Verify user logins, orders, and payments with OTP SMS authentication.",
      icon: <FiShoppingCart className="w-6 h-6 text-white" />,
      color: "bg-purple-600",
    },
    {
      title: "Banks & Fintechs",
      description:
        "Protect online transactions and customer data with two-factor authentication (2FA).",
      icon: <FiCreditCard className="w-6 h-6 text-white" />,
      color: "bg-indigo-600",
    },
    {
      title: "Healthcare Providers",
      description:
        "Secure patient portals and digital health records.",
      icon: <FiActivity className="w-6 h-6 text-white" />,
      color: "bg-green-600",
    },
    {
      title: "Educational Institutions",
      description:
        "Authenticate online exam access and student logins.",
      icon: <FiBookOpen className="w-6 h-6 text-white" />,
      color: "bg-pink-500",
    },
    {
      title: "Corporate Applications",
      description:
        "Enable secure employee logins and system access.",
      icon: <FiBriefcase className="w-6 h-6 text-white" />,
      color: "bg-yellow-600",
    },
  ];




      



       const services = [
    {
      title: "SMS OTP Service",
      description:
        "Send instant OTPs to mobile numbers using our robust OTP SMS gateway.",
      icon: <FiSmartphone className="w-6 h-6 text-white" />,
      bgColor: "bg-purple-700",
    },
    {
      title: "Email OTP Service",
      description:
        "Deliver secure OTPs to users’ registered email addresses.",
      icon: <FiMail className="w-6 h-6 text-white" />,
      bgColor: "bg-pink-500",
    },
    {
      title: "Voice OTP Service",
      description:
        "Use automated voice calls to deliver OTPs, ideal for regions with poor SMS connectivity.",
      icon: <FiPhone className="w-6 h-6 text-white" />,
      bgColor: "bg-indigo-600",
    },
    {
      title: "App-Based OTP (TOTP)",
      description:
        "Generate OTPs within mobile or desktop apps for offline, high-security authentication.",
      icon: <FiShield className="w-6 h-6 text-white" />,
      bgColor: "bg-green-600",
    },
  ];




      const steps = [
    {
      title: "User Initiates Action",
      description:
        "A customer requests to log in, make a payment, or verify their identity.",
    },
    {
      title: "OTP Generation",
      description:
        "DIGINTRA’s system generates a unique, time-sensitive OTP code.",
    },
    {
      title: "OTP Delivery",
      description:
        "The OTP is sent instantly via SMS, email, or voice call using our high-performance OTP SMS gateway.",
    },
    {
      title: "User Verification",
      description:
        "The user enters the OTP, and the system validates it before granting access or confirming the transaction.",
    },
  ];


  
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };




  return (
    <>
      <Helmet>
      <meta name="robots" content="index, follow" />

        <title>DIGINTRA – Leading OTP Service Provider | Secure OTP SMS Gateway & API Solutions
</title>
        <meta name="description" content='DIGINTRA is a trusted OTP SMS service provider offering secure OTP service API, SMS OTP gateway, and one-time password verification solutions for global businesses.
'/>
   <meta name="keywords" content="otp service provider, otp sms service, otp sms gateway, otp service api, sms otp service provider, otp sender, otp gateway provider, otp sms platform, secure otp delivery, otp authentication
" />
      <link rel="canonical" href="https://digintra.com/otp-service-provider" />
      </Helmet>
      {/* <div className=" patterncon relative w-auto pt-[230px] lg:h-[720px] pb-[0px] border-2 border-red-500">
    
    </div> */}



     <section className="relative w-full min-h-[60vh] md:min-h-[72vh] flex items-center py-24">
      {/* Decorative Glazing SVG (absolute, behind content) */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          viewBox="0 0 1600 900"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full block"
          aria-hidden="true"
        >
          <defs>
            {/* animated linear gradient for soft shifting color */}
            <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFE8D2" stopOpacity="0.95">
                <animate attributeName="stop-color" dur="10s" repeatCount="indefinite"
                  values="#FFE8D2; #FFF1E0; #FDEBD0; #FFE8D2" />
              </stop>
              <stop offset="100%" stopColor="#FFD1A9" stopOpacity="0.9">
                <animate attributeName="stop-color" dur="12s" repeatCount="indefinite"
                  values="#FFD1A9; #FFDCC2; #FFE9D6; #FFD1A9" />
              </stop>
            </linearGradient>

            <linearGradient id="g2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFF7ED" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#FEEBC8" stopOpacity="0.6" />
            </linearGradient>

            {/* soft blur filter for glassy feel */}
            <filter id="f-blur" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="18" result="b" />
              <feColorMatrix type="matrix"
                values="1 0 0 0 0
                        0 1 0 0 0
                        0 0 1 0 0
                        0 0 0 0.6 0" in="b" />
            </filter>
          </defs>

          {/* Large gradient base */}
          <rect x="0" y="0" width="1600" height="900" fill="url(#g1)" />

          {/* Layered glazed shapes */}
          <g filter="url(#f-blur)" opacity="0.9">
            <path
              id="shapeA"
              d="M-120 160 C 120 40, 400 40, 700 140 C 1000 240, 1320 200, 1700 120 L1700 900 L-120 900 Z"
              fill="url(#g2)"
              style={{ transformOrigin: "50% 50%" }}
            >
              <animateTransform attributeName="transform"
                type="translate"
                dur="18s"
                repeatCount="indefinite"
                values="0 0; -40 -20; 0 0; 40 20; 0 0" />
            </path>

            <path
              id="shapeB"
              d="M-100 320 C 150 260, 400 160, 800 220 C 1150 280, 1350 360, 1700 320 L1700 900 L-100 900 Z"
              fill="white"
              fillOpacity="0.14"
              style={{ mixBlendMode: "soft-light" }}
            >
              <animateTransform attributeName="transform"
                type="translate"
                dur="22s"
                repeatCount="indefinite"
                values="0 0; 30 -10; 0 0; -30 10; 0 0" />
            </path>

            <ellipse cx="1200" cy="120" rx="420" ry="160" fill="#fff" fillOpacity="0.06">
              <animate attributeName="rx" dur="12s" repeatCount="indefinite" values="420;470;420" />
            </ellipse>

            <ellipse cx="200" cy="60" rx="260" ry="100" fill="#fff" fillOpacity="0.03">
              <animate attributeName="cx" dur="20s" repeatCount="indefinite" values="200;260;200" />
            </ellipse>
          </g>

          {/* sharp glossy overlay (no blur) */}
          <path
            d="M0 0 L1600 0 L1600 120 C 1200 200 900 160 600 220 C 350 270 120 200 0 160 Z"
            fill="rgba(255,255,255,0.06)"
          />
        </svg>
      </div>

      {/* Content container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          {/* Text column */}
          <div className="text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
              OTP Service Provider:
              <span className="block text-orange-600 mt-2 text-2xl sm:text-3xl md:text-3xl font-semibold">
                Secure, Fast, and Reliable OTP Solutions for Your Business
              </span>
            </h1>

            <p className="mt-6 text-gray-700 max-w-xl text-base sm:text-lg">
              Deliver seamless authentication and verification with DIGINTRA’s advanced OTP services.
              Protect your users, prevent fraud, and enhance digital trust in real-time using enterprise-grade
              delivery and compliance.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-orange-600 text-white font-semibold shadow-lg hover:bg-orange-700 transition"
              >
                Request a Demo
              </a>
              <a
                href="#docs"
                className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-orange-200 text-orange-700 bg-white/60 backdrop-blur-sm hover:backdrop-blur-md transition"
              >
                OTP API Docs
              </a>
            </div>
          </div>

          {/* Illustration column (responsive) */}
          <div className="flex justify-center md:justify-end">
            {/* Simple SVG phone + shield illustration (scales on small screens) */}
            <svg
              viewBox="0 0 360 360"
              className="w-56 sm:w-64 md:w-72 lg:w-80"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="phoneGrad" x1="0" x2="1">
                  <stop offset="0" stopColor="#fff" stopOpacity="0.9" />
                  <stop offset="1" stopColor="#fff" stopOpacity="0.55" />
                </linearGradient>
              </defs>

              <rect x="72" y="36" rx="28" ry="28" width="216" height="288" fill="url(#phoneGrad)" opacity="0.95" />
              <rect x="92" y="60" rx="16" ry="16" width="176" height="232" fill="#fff" />
              <motion.g
                initial={{ scale: 0.92, rotate: -6 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
              >
                <rect x="116" y="92" width="128" height="56" rx="8" fill="#FFEDD5" />
                <rect x="116" y="160" width="128" height="56" rx="8" fill="#FEF3C7" />
                <rect x="116" y="228" width="72" height="20" rx="6" fill="#FEEBC8" />
              </motion.g>

              {/* Shield icon */}
              <motion.path
                d="M180 118 L200 132 C200 132 190 180 180 190 C170 180 160 132 160 132 Z"
                fill="#F97316"
                initial={{ y: 6, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>


    <section className="relative bg-gradient-to-br from-indigo-50 via-white to-blue-100 py-16 px-6 md:px-20 overflow-hidden">
      {/* Background Glazing Animation */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-30"
        animate={{
          background:
            "radial-gradient(circle at 20% 30%, rgba(99,102,241,0.2), transparent 70%), radial-gradient(circle at 80% 70%, rgba(147,197,253,0.2), transparent 70%)",
        }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-8"
        >
          🔐 What is <span className="text-blue-600">OTP?</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="bg-white/70 backdrop-blur-md rounded-3xl shadow-xl p-8 md:p-12 text-gray-700 leading-relaxed"
        >
          <p className="text-lg md:text-xl mb-6">
            An <strong>OTP (One-Time Password)</strong> is a temporary, unique code generated
            for user verification. It’s used for logins, transactions, and secure access,
            valid only once or for a limited time. Unlike traditional passwords, OTPs provide
            an extra layer of protection by ensuring that only authorized users can complete
            sensitive actions.
          </p>

          <div className="flex flex-wrap justify-center gap-6 my-10">
            {[
              { icon: <ShieldCheck size={40} />, title: "Enhanced Security" },
              { icon: <Lock size={40} />, title: "Single Use Verification" },
              { icon: <KeyRound size={40} />, title: "Unique Authentication" },
              { icon: <Smartphone size={40} />, title: "Instant Delivery" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center bg-gradient-to-tr from-blue-100 to-indigo-100 p-6 rounded-2xl w-[140px] md:w-[160px] shadow-md"
              >
                <div className="text-blue-600 mb-2">{item.icon}</div>
                <p className="font-semibold text-gray-700 text-sm md:text-base">
                  {item.title}
                </p>
              </motion.div>
            ))}
          </div>

          <h3 className="text-2xl md:text-3xl font-semibold text-blue-700 mt-10 mb-4">
            What is an OTP Service?
          </h3>
          <p className="text-lg md:text-xl">
            An OTP service is a system that automatically generates and sends one-time
            passwords to users via <strong>SMS, email, or voice call</strong> for verification
            purposes. These services are crucial for businesses that handle sensitive data or
            financial transactions.
          </p>
          <p className="text-lg md:text-xl mt-4">
            <strong>DIGINTRA’s OTP SMS platform</strong> enables enterprises to send OTPs
            instantly and securely through multiple channels. With our OTP service API,
            businesses can integrate OTP verification seamlessly into their apps, websites,
            and customer portals.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="w-full py-12 px-6 md:px-12 bg-gradient-to-r from-indigo-100 via-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-12 text-center">
          How Our OTP Service Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative p-6 bg-white/30 backdrop-blur-md rounded-2xl shadow-lg border border-white/40 hover:scale-105 transition-transform duration-300"
            >
              <div className="absolute -top-5 left-6 w-12 h-12 flex items-center justify-center rounded-full bg-blue-700 text-white font-bold text-lg shadow-md">
                {index + 1}
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-blue-800 mt-4 md:mt-6 ml-16">
                {step.title}
              </h3>
              <p className="text-gray-700 mt-2 ml-16">{step.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-gray-700 font-medium text-lg">
          DIGINTRA ensures OTP delivery within seconds, offering unmatched
          reliability and security for every verification request.
        </p>
      </div>
    </section>





     <section className="w-full py-12 px-6 md:px-12 bg-gradient-to-r from-indigo-100 via-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-purple-800 mb-12 text-center">
          Types of OTP Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative p-6 bg-white/30 backdrop-blur-md rounded-2xl shadow-lg border border-white/40 hover:scale-105 transition-transform duration-300"
            >
              <div
                className={`absolute -top-5 left-6 w-12 h-12 flex items-center justify-center rounded-full ${service.bgColor} text-white font-bold text-lg shadow-md`}
              >
                {service.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-purple-800 mt-4 md:mt-6 ml-16">
                {service.title}
              </h3>
              <p className="text-gray-700 mt-2 ml-16">{service.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-gray-700 font-medium text-lg">
          Each service can be integrated through our easy-to-use OTP service API for
          seamless communication and control.
        </p>
      </div>
    </section>



     <section className="w-full py-12 px-6 md:px-12 bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-purple-800 mb-12 text-center">
          How Businesses Can Use OTP Service
        </h2>

        <div className="relative before:absolute before:top-0 before:left-9 before:w-1 before:h-full before:bg-purple-300/50">
          {industries.map((industry, index) => (
            <div key={index} className="flex flex-col md:flex-row items-start mb-12 relative">
              {/* Icon Circle */}
              <div className={`flex items-center justify-center w-12 h-12 rounded-full ${industry.color} text-white font-bold shadow-lg relative z-10`}>
                {industry.icon}
              </div>

              {/* Card */}
              <div className="bg-white/30 backdrop-blur-md rounded-2xl shadow-lg border border-white/40 p-6 ml-6 md:ml-10 flex-1 hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl md:text-2xl font-semibold text-purple-800">
                  {industry.title}
                </h3>
                <p className="text-gray-700 mt-2">{industry.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-gray-700 font-medium text-lg">
          With DIGINTRA’s OTP sender and OTP service API, businesses can send millions of OTPs daily — quickly, securely, and affordably.
        </p>
      </div>
    </section>




 <section className="w-full py-16 px-6 md:px-12 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-purple-800 mb-12 text-center">
          Advantages of Using DIGINTRA’s OTP Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white/30 backdrop-blur-md rounded-3xl shadow-lg border border-white/40 hover:scale-105 transition-transform duration-300 flex items-start gap-4"
            >
              <div className="flex-shrink-0">{item.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-purple-800">{item.title}</h3>
                <p className="text-gray-700 mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose DIGINTRA */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-6">
            Why Choose DIGINTRA? – OTP SMS Service Provider
          </h2>
          <p className="text-gray-700 md:text-lg max-w-3xl mx-auto mb-6">
            At DIGINTRA, we specialize in providing robust, secure, and scalable OTP services that empower businesses to safeguard user identities and transactions.  
            Our global delivery network, advanced API, and 24/7 support make us the preferred OTP SMS service provider for companies across industries.
          </p>
          <p className="text-gray-700 md:text-lg max-w-3xl mx-auto mb-10">
            Secure your digital ecosystem with DIGINTRA’s trusted OTP SMS service, OTP SMS gateway, and OTP service API. Experience lightning-fast OTP delivery, maximum uptime, and enterprise-grade security, all from a single platform.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <button className="bg-purple-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:bg-purple-800 transition-colors">
              Request a Demo
            </button>
            <button className="bg-white text-purple-700 font-semibold py-3 px-6 rounded-xl shadow-lg border border-purple-700 hover:bg-purple-700 hover:text-white transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>

    <section className="w-full py-16 px-6 md:px-12 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-purple-800 mb-12 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white/30 backdrop-blur-md rounded-2xl shadow-lg border border-white/40 overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center p-6 focus:outline-none hover:bg-white/20 transition-colors"
                onClick={() => toggleIndex(index)}
              >
                <span className="text-lg md:text-xl font-semibold text-purple-800 text-left">
                  {item.question}
                </span>
                <span className="text-purple-700">
                  {openIndex === index ? (
                    <FiChevronUp className="w-6 h-6" />
                  ) : (
                    <FiChevronDown className="w-6 h-6" />
                  )}
                </span>
              </button>
              {openIndex === index && (
                <div className="p-6 pt-0 text-gray-700 text-md md:text-lg border-t border-white/40">
                  {item.answer.split("\n").map((line, i) => (
                    <p key={i} className="mb-2">
                      {line}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>










   

     <Footer/>
   </>
  )
}
