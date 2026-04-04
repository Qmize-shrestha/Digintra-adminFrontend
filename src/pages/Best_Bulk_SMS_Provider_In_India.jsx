import React from 'react';
import "./bulk.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { motion,AnimatePresence  } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import icons1 from "../assets/icons8-arrow-100.png"
import icons2 from "../assets/icons8-call-50.png";
import icons3 from "../assets/business.png";
import icons4 from "../assets/otp.png";
import icons5 from "../assets/appa.png";
import icons6 from "../assets/pay.png";
import icons7 from "../assets/update.png";
import icons8 from "../assets/rate.png"
import icons9 from "../assets/fast.png";
import icons10 from "../assets/t3.png";
import icons11 from "../assets/c1.png";
import icons12 from "../assets/c2.png";
import icons13 from "../assets/c3.png";
import icons14 from "../assets/c4.png";
import icons15 from "../assets/start2.png";
import icons16 from "../assets/icons8-plus-501.png";
import {FaUserPlus, FaWhatsapp } from 'react-icons/fa';
import smsImage from '../assets/smsImage.png';
import { CheckCircle, Smartphone, DollarSign, Code, Headphones } from "lucide-react";
import { Smile, BarChart2 } from "lucide-react";
import {  MessageSquare } from "lucide-react";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  MessageCircle,
  Megaphone,
  Lock,
  
  
  PhoneCall,
  BarChart3,
} from "lucide-react";

import {
  ShoppingBag,
  HeartPulse,
  GraduationCap,
  Banknote,
  Plane,
} from "lucide-react";

import { Users, Rocket, ShieldCheck } from "lucide-react";


import Footer from '../components/Footer';

import { Helmet } from 'react-helmet';
import Client from '../components/Client';
import Getstarted from '../components/Getstarted';
import Businesskeycomp from '../components/Businesskeycomp';
import { Link } from 'react-router-dom';
export default function Bulk_sms_provider_bangalore() {
    const [Ques1, setQues1] = useState(false);
    const [Ques2, setQues2] = useState(false);
    const [Ques3, setQues3] = useState(false);
    function handleQues1() {
        setQues1(!Ques1);
      }
      function handleQues2() {
        setQues2(!Ques2);
      }
    
      function handleQues3() {
        setQues3(!Ques3);
      }
      useEffect(()=>{
        window.scrollTo(0,0);
      },[])



 const faqs = [
    {
      question: "Which is the best bulk SMS service provider in India?",
      answer:
        "DIGINTRA is recognized as one of the best bulk SMS service providers in India for its reliable delivery, affordable pricing, and scalable solutions suitable for businesses of all sizes.",
    },
    {
      question: "How does DIGINTRA’s bulk SMS service work?",
      answer:
        "DIGINTRA allows businesses to send promotional, transactional, and OTP messages instantly through its easy-to-use platform and robust SMS API integration.",
    },
    {
      question: "Why choose DIGINTRA as my SMS service provider?",
      answer:
        "DIGINTRA ensures 99.9% uptime, lightning-fast delivery, TRAI compliance, and cost-effective SMS plans, making it the best SMS service provider in India.",
    },
    {
      question: "What types of SMS services does DIGINTRA offer?",
      answer:
        "DIGINTRA provides transactional SMS, promotional SMS, OTP SMS, two-way messaging, and SMS API integration to meet diverse business needs.",
    },
    {
      question: "How can I start using DIGINTRA’s bulk SMS service?",
      answer:
        "You can easily get started by contacting DIGINTRA’s team for a demo or signing up for a plan that fits your business.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };






 const points = [
    {
      icon: <Smile className="w-8 h-8 text-green-500" />,
      title: "Improved Customer Experience",
      desc: "Keep customers informed and updated in real time for better satisfaction.",
    },
    {
      icon: <Megaphone className="w-8 h-8 text-orange-500" />,
      title: "Enhanced Marketing Campaigns",
      desc: "Deliver promotional messages at scale to boost your brand’s visibility and sales.",
    },
    {
      icon: <Code className="w-8 h-8 text-blue-500" />,
      title: "Seamless Integration",
      desc: "Connect DIGINTRA’s SMS API easily with your existing CRM, ERP, or website.",
    },
    {
      icon: <BarChart2 className="w-8 h-8 text-purple-500" />,
      title: "Measurable Results",
      desc: "Track SMS delivery, open rates, and campaign performance effortlessly.",
    },
  ];

      const features = [
    {
      icon: <CheckCircle className="w-10 h-10 text-green-500" />,
      title: "High Delivery Rates",
      desc: "Guaranteed fast and accurate SMS delivery to every network.",
    },
    {
      icon: <Smartphone className="w-10 h-10 text-blue-500" />,
      title: "User-Friendly Dashboard",
      desc: "Send campaigns, track results, and manage contacts effortlessly.",
    },
    {
      icon: <DollarSign className="w-10 h-10 text-yellow-500" />,
      title: "Affordable Pricing Plans",
      desc: "Cost-effective bulk SMS packages designed for every business need. Whether you need 10,000 SMS or 1 million SMS, DIGINTRA offers transparent pricing without hidden costs.",
    },
    {
      icon: <Code className="w-10 h-10 text-indigo-500" />,
      title: "Advanced API Integration",
      desc: "Seamlessly integrate our SMS gateway with your CRM, ERP, or website.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-red-500" />,
      title: "Secure & Compliant Services",
      desc: "Ensures full compliance with TRAI regulations, protecting your brand and customer trust.",
    },
    {
      icon: <Headphones className="w-10 h-10 text-purple-500" />,
      title: "24/7 Dedicated Support",
      desc: "Our expert team is always available to assist you anytime, anywhere.",
    },
  ];


   const industries = [
    {
      icon: <ShoppingBag className="w-10 h-10 text-blue-500" />,
      title: "E-Commerce & Retail",
      desc: "Send promotions, order updates, and personalized offers.",
    },
    {
      icon: <HeartPulse className="w-10 h-10 text-pink-500" />,
      title: "Healthcare",
      desc: "Appointment reminders, health tips, and patient engagement.",
    },
    {
      icon: <GraduationCap className="w-10 h-10 text-green-500" />,
      title: "Education",
      desc: "Alerts for admissions, exams, and important announcements.",
    },
    {
      icon: <Banknote className="w-10 h-10 text-yellow-500" />,
      title: "Banking & Finance",
      desc: "OTPs, transaction alerts, and account updates.",
    },
    {
      icon: <Plane className="w-10 h-10 text-purple-500" />,
      title: "Travel & Hospitality",
      desc: "Booking confirmations, discounts, and travel reminders.",
    },
  ];




   const services = [
  {
    icon: <MessageCircle className="w-10 h-10 text-orange-500" />,
    title: "Transactional SMS",
    desc: "Deliver instant OTPs, alerts, and notifications with high reliability.",
    link: "/transactional-sms",
  },
  {
    icon: <Megaphone className="w-10 h-10 text-pink-500" />,
    title: "Promotional SMS",
    desc: "Reach your customers with targeted offers, deals, and updates.",
    link: "/promotional-sms",
  },
  {
    icon: <Lock className="w-10 h-10 text-yellow-500" />,
    title: "OTP SMS",
    desc: "Secure and fast one-time password delivery for banking, e-commerce, and fintech platforms.",
    link: "/otp-service-provider",
  },
  {
    icon: <MessageSquare className="w-10 h-10 text-blue-500" />,
    title: "Two-Way Messaging",
    desc: "Engage customers with interactive communication for surveys, feedback, and more.",
    link: "#",
  },
  {
    icon: <Code className="w-10 h-10 text-indigo-500" />,
    title: "API Integration",
    desc: "Easy-to-use SMS API for developers to integrate with apps, CRMs, and websites.",
    link: "#",
  },
  {
    icon: <PhoneCall className="w-10 h-10 text-green-500" />,
    title: "Voice SMS",
    desc: "Add a personal touch with automated voice messages for your audience.",
    link: "#",
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-red-500" />,
    title: "Smart Campaign Analytics",
    desc: "Track delivery reports, open rates, and customer engagement insights.",
    link: "#",
  },
];
  return (
    <>
      <Helmet>
      <meta name="robots" content="index, follow" />

        <title>Best Bulk SMS Service Provider in India | DIGINTRA
</title>
        <meta name="description" content='Looking for the best bulk SMS service provider in India? DIGINTRA offers fast, reliable, and affordable SMS solutions. Send transactional, promotional, and OTP SMS with ease.
'/>
   <meta name="keywords" content="bulk sms service provider in bangalore, bulk sms service in bangalore, bulk sms in bangalore
" />
      <link rel="canonical" href="https://digintra.com/best-bulk-sms-service-provider-in-india" />
      </Helmet>
      {/* <div className=" patterncon relative w-auto pt-[230px] lg:h-[720px] pb-[0px] border-2 border-red-500">
    
    </div> */}


  <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-500 overflow-hidden px-6 py-36 ">
      {/* Animated background bubbles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.3),transparent_60%)]"
      />

      {/* Content Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col md:flex-row items-center gap-10 max-w-6xl"
      >
        {/* Left Text Section */}
        <div className="text-white md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Best Bulk SMS Service Provider in India
          </h1>
          <p className="text-lg mb-4 opacity-90">
            Looking for the best bulk SMS service provider in India to scale your business communication?
          </p>
          <p className="text-base opacity-85 leading-relaxed">
            At <span className="font-semibold">DIGINTRA</span>, we deliver powerful, reliable, and affordable SMS
            solutions that help businesses of all sizes connect with their customers instantly. Whether you’re a
            start-up, an enterprise, or an e-commerce brand, our feature-rich platform ensures seamless communication
            with maximum delivery rates.
          </p>
        </div>

        {/* Right Image Section */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 flex justify-center"
        >
          <img
            src={smsImage}
            alt="Best Bulk SMS Provider In India"
            className="w-[85%] md:w-[70%] drop-shadow-2xl rounded-2xl"
          />
        </motion.div>
      </motion.div>
    </section>


    <section className="relative w-full py-20 px-6 bg-gradient-to-b from-white via-blue-50 to-blue-100 overflow-hidden">
      {/* Animated background pattern */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,0,0,0.05),transparent_60%)]"
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-6xl mx-auto text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Why Choose <span className="text-blue-600">DIGINTRA</span> as Your Bulk SMS Service Provider?
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          When it comes to customer engagement, speed and reliability matter. Here’s why businesses across India trust DIGINTRA – the best SMS service provider in India:
        </p>
      </motion.div>

      {/* Features Grid */}
      <div className="relative z-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-white/80 backdrop-blur-md shadow-md hover:shadow-xl hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              {feature.icon}
              <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>




    <section className="relative w-full py-20 px-6 bg-gradient-to-r from-orange-100 via-amber-50 to-orange-200 overflow-hidden">
      {/* Subtle glowing background circles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_10%_30%,rgba(255,165,0,0.25),transparent_60%)]"
      />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Services <span className="text-orange-600">We Offer</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          As a trusted bulk SMS service provider, DIGINTRA offers a wide range of messaging solutions to meet your business goals.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="relative z-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
  {services.map((service, index) => (
    <Link to={service.link} key={index}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.6 }}
        viewport={{ once: true }}
        className="p-6 bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300 text-center cursor-pointer"
      >
        <motion.div
          whileHover={{ rotate: 10, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="flex justify-center mb-4"
        >
          {service.icon}
        </motion.div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {service.title}
        </h3>
        <p className="text-sm text-gray-600">{service.desc}</p>
      </motion.div>
    </Link>
  ))}
</div>

    </section>




     <section className="relative w-full py-20 bg-gradient-to-b from-indigo-50 to-white overflow-hidden">
      {/* Decorative wave background using SVG */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,83.14C906,64.12,823.78,42.84,743,24.87c-68.15-15-136.32-27.46-204.62-35.37C379.17-22.48,217.26-16,0,57.35V120H1200V95.8C1133.16,90.33,1066.31,87.38,985.66,83.14Z"
            className="fill-indigo-100"
          ></path>
        </svg>
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center mb-12 px-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Industries <span className="text-indigo-600">We Serve</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          From start-ups to enterprises, DIGINTRA supports businesses across diverse industries.
        </p>
      </motion.div>

      {/* Industries Cards */}
      <div className="relative z-10 flex flex-col md:grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto px-6 overflow-x-auto md:overflow-visible scrollbar-hide">
        {industries.map((industry, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.7 }}
            viewport={{ once: true }}
            className="min-w-[250px] md:min-w-0 flex flex-col items-center text-center p-6 rounded-3xl bg-white/80 backdrop-blur-md shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="mb-4">{industry.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {industry.title}
            </h3>
            <p className="text-sm text-gray-600">{industry.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Decorative wave bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,83.14C906,64.12,823.78,42.84,743,24.87c-68.15-15-136.32-27.46-204.62-35.37C379.17-22.48,217.26-16,0,57.35V120H1200V95.8C1133.16,90.33,1066.31,87.38,985.66,83.14Z"
            className="fill-indigo-100"
          ></path>
        </svg>
      </div>
    </section>


    <section className="relative w-full py-20 px-6 bg-white overflow-hidden">
      {/* Decorative SVG background pattern */}
      <svg
        className="absolute top-0 right-0 w-64 md:w-96 opacity-10"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 600 600"
        fill="none"
      >
        <path
          d="M300,532C435.138,532,544,423.138,544,288C544,152.862,435.138,44,300,44C164.862,44,56,152.862,56,288C56,423.138,164.862,532,300,532Z"
          stroke="#f97316"
          strokeWidth="40"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Container */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-10">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
            Why <span className="text-orange-600">DIGINTRA</span> is the Best SMS Provider in India
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            With years of expertise and a customer-centric approach, DIGINTRA stands as the best SMS provider in India
            trusted by <span className="font-semibold text-gray-800">1,000+ businesses</span>. Our scalable platform
            ensures you can reach millions of customers instantly without compromising quality.
          </p>

          {/* Highlights */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-6 mt-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 bg-orange-50 px-4 py-3 rounded-xl shadow-sm"
            >
              <Users className="text-orange-600 w-6 h-6" />
              <span className="text-gray-800 font-semibold text-sm">Trusted by 1000+ Clients</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 bg-orange-50 px-4 py-3 rounded-xl shadow-sm"
            >
              <Rocket className="text-orange-600 w-6 h-6" />
              <span className="text-gray-800 font-semibold text-sm">Fast & Scalable Platform</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 bg-orange-50 px-4 py-3 rounded-xl shadow-sm"
            >
              <ShieldCheck className="text-orange-600 w-6 h-6" />
              <span className="text-gray-800 font-semibold text-sm">Secure & Reliable</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Right SVG Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="md:w-1/2 flex justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 600 400"
            className="w-72 md:w-[420px]"
          >
            <motion.circle
              cx="300"
              cy="200"
              r="150"
              fill="url(#grad)"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2, type: "spring" }}
            />
            <defs>
              <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#fb923c" />
              </linearGradient>
            </defs>

            <motion.text
              x="50%"
              y="50%"
              textAnchor="middle"
              dy=".3em"
              fill="white"
              fontSize="20"
              fontWeight="bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              DIGINTRA
            </motion.text>
          </svg>
        </motion.div>
      </div>
    </section>




     <section className="relative w-full py-20 px-6 bg-gradient-to-r from-orange-50 via-white to-amber-100 overflow-hidden">
      {/* Decorative Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,165,0,0.2),transparent_60%)]"
      />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            How <span className="text-orange-600">DIGINTRA</span> Helps Your Business Grow
          </h2>

          <div className="flex flex-col gap-6">
            {points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0">{point.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {point.title}
                  </h3>
                  <p className="text-sm text-gray-600">{point.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="md:w-1/2 flex justify-center"
        >
          {/* SVG Growth Illustration */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 300"
            className="w-80 md:w-[420px]"
          >
            <defs>
              <linearGradient id="growth" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#fb923c" />
              </linearGradient>
            </defs>
            <motion.path
              d="M30 250 L100 180 L170 210 L240 130 L310 160 L370 80"
              stroke="url(#growth)"
              strokeWidth="5"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.circle
              cx="370"
              cy="80"
              r="8"
              fill="url(#growth)"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.5, type: "spring" }}
            />
            <text
              x="200"
              y="280"
              textAnchor="middle"
              fill="#555"
              fontSize="16"
              fontWeight="500"
            >
              Business Growth with DIGINTRA
            </text>
          </svg>
        </motion.div>
      </div>
    </section>



     <section className="relative w-full py-20 px-6 bg-gradient-to-r from-orange-500 via-orange-400 to-amber-300 text-white overflow-hidden">
      {/* Decorative SVG Background */}
      <svg
        className="absolute inset-0 opacity-20 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 800 400"
      >
        <motion.path
          d="M0,300 Q200,200 400,300 T800,300 L800,400 L0,400 Z"
          fill="rgba(255,255,255,0.2)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2 }}
        />
      </svg>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Get Started <span className="text-yellow-200">Today!</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl leading-relaxed mb-6"
        >
          Supercharge your communication with{" "}
          <span className="font-semibold text-white underline decoration-yellow-200">
            DIGINTRA
          </span>{" "}
          – the best bulk SMS service provider in India. Whether you want to
          boost sales, improve engagement, or streamline notifications, we’ve
          got the perfect solution for you.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <button className="flex items-center gap-2 px-8 py-3 bg-white text-orange-600 font-semibold rounded-full shadow-lg hover:bg-yellow-50 transition-all duration-300">
            <PhoneCall className="w-5 h-5" />
            Contact DIGINTRA
          </button>

          <button className="flex items-center gap-2 px-8 py-3 border border-white rounded-full text-white hover:bg-white hover:text-orange-600 transition-all duration-300">
            <MessageSquare className="w-5 h-5" />
            Get Free Demo
          </button>
        </motion.div>
      </div>
    </section>


     <section className="relative w-full py-20 px-6 bg-gradient-to-br from-orange-50 via-white to-orange-100 overflow-hidden">
      {/* Decorative background SVG */}
      <svg
        className="absolute top-0 right-0 w-64 md:w-96 opacity-10"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 600 600"
        fill="none"
      >
        <path
          d="M300,532C435.138,532,544,423.138,544,288C544,152.862,435.138,44,300,44C164.862,44,56,152.862,56,288C56,423.138,164.862,532,300,532Z"
          stroke="#f97316"
          strokeWidth="40"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-3">
            <MessageCircle className="w-10 h-10 text-orange-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            FAQs – <span className="text-orange-600">Bulk SMS Service Provider</span>
          </h2>
          <p className="text-gray-600 mt-3 text-base md:text-lg">
            Have questions? We’ve got answers to help you understand why DIGINTRA is India’s most trusted bulk SMS platform.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md overflow-hidden border border-orange-100 hover:shadow-lg transition-all"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left"
              >
                <span className="font-semibold text-gray-800 text-lg">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="text-orange-600 w-6 h-6" />
                ) : (
                  <ChevronDown className="text-orange-600 w-6 h-6" />
                )}
              </button>

              {/* Answer */}
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="px-6 pb-5 text-gray-600 text-sm md:text-base leading-relaxed bg-orange-50/30"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>





   

     <Footer/>
   </>
  )
}
