
import React from 'react';
import "./bulk.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import { Target, Send, Layers, BarChart3, Megaphone,CalendarCheck,CalendarDays,MessageSquare,Gift,ClipboardList,MessageSquareText,Clock,Plug,Headphones    } from "lucide-react";
import { ShoppingBag, Building2,Hotel,  Stethoscope, GraduationCap, Banknote } from "lucide-react";
import { Link } from 'react-router-dom';
import { FaCode, FaUsers, FaShieldAlt, FaGlobe, FaSms } from "react-icons/fa";
import { FaShoppingCart, FaUniversity, FaHospital, FaSchool, FaTruck } from "react-icons/fa";
import { MdSpeed } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
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
// import Hotel from '../assets/hotel.png';
import Education from '../assets/education.png';
import Retail from '../assets/retail.png';
import Home from '../assets/home.png';
import Health from '../assets/health.png';
import CostEffect from '../assets/costeffective.png';
import Personalisation from '../assets/personalisation.png';
import SMSDUBAI from '../assets/sms-marketing-in-dubai.jpg'
import SMSDUBAI2 from '../assets/sms-marketing-2.png';
import SMSGATEWAY1 from '../assets/smsgateway1.png'
import SMSGATEWAY2 from '../assets/smsgateway2.png'




const faqs = [
  {
    question: "What is an SMS Gateway API?",
    answer:
      "An SMS Gateway API is an interface that allows applications, websites, or systems to send and receive SMS messages programmatically through a reliable gateway.",
  },
  {
    question: "How does your SMS API service work?",
    answer:
      "Our SMS API service connects directly with telecom operators. You simply integrate our API into your application, and it enables you to send bulk SMS or transactional alerts instantly.",
  },
  {
    question: "Can I send bulk SMS using your API?",
    answer:
      "Yes, our bulk SMS API supports sending messages to thousands of recipients simultaneously with real-time delivery reports.",
  },
  {
    question: "Do you provide global SMS coverage?",
    answer:
      "Absolutely. As a leading SMS gateway provider, we offer worldwide connectivity with direct operator partnerships, ensuring fast and reliable delivery.",
  },
  {
    question: "Is your SMS API secure?",
    answer:
      "Yes. We use encryption, token-based authentication, and secure HTTPS protocols to keep your data and messages safe.",
  },
  {
    question: "How quickly can I integrate the API?",
    answer:
      "With our developer-friendly setup, most clients integrate our SMS API service within a few hours, depending on system complexity.",
  },
];



export default function Sms_marketing_in_dubai() {
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
      setQues2(false);
      setQues3(false);
      setQues4(false);
      setQues5(false);
      setQues6(false);
      setQues7(false);
      setQues8(false);
      setQues9(false);
      setQues10(false);
    }
    function handleQues2() {
      setQues2(!Ques2);
      setQues1(false);
      setQues3(false);
      setQues4(false);
      setQues5(false);
      setQues6(false);
      setQues7(false);
      setQues8(false);
      setQues9(false);
      setQues10(false);
    }
  
    function handleQues3() {
      setQues3(!Ques3);
      setQues2(false);
      setQues1(false);
      setQues4(false);
      setQues5(false);
      setQues6(false);
      setQues7(false);
      setQues8(false);
      setQues9(false);
      setQues10(false);
    }
    function handleQues4() {
      setQues4(!Ques4);
      setQues2(false);
      setQues3(false);
      setQues1(false);
      setQues5(false);
      setQues6(false);
      setQues7(false);
      setQues8(false);
      setQues9(false);
      setQues10(false);
    }
    function handleQues5() {
      setQues5(!Ques5);
      setQues2(false);
      setQues3(false);
      setQues4(false);
      setQues1(false);
      setQues6(false);
      setQues7(false);
      setQues8(false);
      setQues9(false);
      setQues10(false);
    }
    function handleQues6() {
        setQues6(!Ques6);
        setQues2(false);
        setQues3(false);
        setQues4(false);
        setQues5(false);
        setQues1(false);
        setQues7(false);
        setQues8(false);
        setQues9(false);
        setQues10(false);
      }
      function handleQues7() {
        setQues7(!Ques7);
        setQues2(false);
        setQues3(false);
        setQues4(false);
        setQues5(false);
        setQues6(false);
        setQues1(false);
        setQues8(false);
        setQues9(false);
        setQues10(false);
      }
      function handleQues8() {
        setQues8(!Ques8);
        setQues2(false);
        setQues3(false);
        setQues4(false);
        setQues5(false);
        setQues6(false);
        setQues7(false);
        setQues1(false);
        setQues9(false);
        setQues10(false);
      }
      function handleQues9() {
        setQues9(!Ques9);
        setQues2(false);
        setQues3(false);
        setQues4(false);
        setQues5(false);
        setQues6(false);
        setQues7(false);
        setQues8(false);
        setQues1(false);
        setQues10(false);
      }
      function handleQues10() {
        setQues10(!Ques10);
        setQues2(false);
        setQues3(false);
        setQues4(false);
        setQues5(false);
        setQues6(false);
        setQues7(false);
        setQues8(false);
        setQues9(false);
        setQues1(false);
      }

      const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

    
      useEffect(()=>{
        window.scrollTo(0,0);
      },[])
  return (
    <>
    <Helmet>
  <meta name="robots" content="index, follow" />

      <title>SMS Gateway API | Reliable Bulk SMS Gateway Solutions
</title>
      <meta name="description" content='Discover a robust SMS Gateway API and Bulk SMS Gateway to send bulk messages with ease. High performance, easy integration, and reliable delivery.
'/>
 <meta name="keywords" content="SMS Gateway API, Bulk SMS Gateway, SMS API Integration, Bulk Messaging, Business SMS Solutions, SMS Platform, Send Bulk SMS, Messaging API, SMS Delivery Gateway, bulk sms api
" />
 <link rel="canonical" href="https://digintra.com/sms-gateway-api
" />
    </Helmet>


 <section className="bg-green-50 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center mt-32">
        
        {/* Left Content */}
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold text-green-900 mb-6">
            SMS Gateway API: Reliable & Scalable Messaging Solutions
          </h1>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Are you in search of a seamless way to connect with your customers through SMS? 
            Our SMS Gateway API empowers businesses to send, receive, and track SMS in real time 
            with high reliability and global coverage. Whether you want to send transactional 
            alerts, promotional campaigns, or critical updates, our API ensures fast delivery 
            with minimal latency.
          </p>
          <p className="text-gray-700 leading-relaxed">
            As a leading SMS gateway provider, we simplify communication for enterprises, startups, 
            and developers by offering an easy-to-integrate and secure platform. With just a few 
            lines of code, you can unlock the power of instant mobile messaging across multiple 
            networks and regions.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={SMSGATEWAY1}
            alt="SMS Gateway"
            className="w-full max-w-md rounded-2xl shadow-lg"
          />
        </div>

      </div>
    </section>






    <section className="bg-green-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <img
          src={SMSGATEWAY2}
          alt="SMS Illustration"
          className="w-full h-auto rounded-2xl shadow-lg object-cover transform hover:scale-105 transition duration-300"
        />
      </div>
    </section>



    <section className="bg-gradient-to-r from-green-50 via-blue-50 to-green-100 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold text-green-900 mb-12">
          Why Choose Our SMS Gateway API?
        </h2>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          
          {/* 1. Seamless Integration */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <div className="flex justify-center mb-4 text-green-600 text-5xl">
              <FaCode />
            </div>
            <h3 className="text-xl font-semibold mb-2">Seamless Integration</h3>
            <p className="text-gray-600">
              Developer-friendly API with docs, SDKs, and code samples in PHP, 
              Python, Java, and .NET for easy integration into apps, sites, or CRMs.
            </p>
          </div>

          {/* 2. Scalable Bulk Messaging */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <div className="flex justify-center mb-4 text-green-600 text-5xl">
              <MdSpeed />
            </div>
            <h3 className="text-xl font-semibold mb-2">Scalable Bulk Messaging</h3>
            <p className="text-gray-600">
              Send thousands of messages at once—perfect for promotions, OTPs, 
              and automated campaigns without worrying about delivery queues.
            </p>
          </div>

          {/* 3. Reliable SMS Delivery */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <div className="flex justify-center mb-4 text-green-600 text-5xl">
              <FaSms />
            </div>
            <h3 className="text-xl font-semibold mb-2">Reliable SMS Delivery</h3>
            <p className="text-gray-600">
              Direct operator connections and smart routing ensure fast, secure, 
              and cost-effective SMS delivery with high success rates.
            </p>
          </div>

          {/* 4. Comprehensive Features */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <div className="flex justify-center mb-4 text-green-600 text-5xl">
              <FaShieldAlt />
            </div>
            <h3 className="text-xl font-semibold mb-2">Comprehensive Features</h3>
            <p className="text-gray-600">
              Two-way messaging, delivery receipts, Unicode, scheduling, and secure 
              authentication—all built to empower your SMS campaigns.
            </p>
          </div>

          {/* 5. Global Coverage */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <div className="flex justify-center mb-4 text-green-600 text-5xl">
              <FaGlobe />
            </div>
            <h3 className="text-xl font-semibold mb-2">Global Coverage</h3>
            <p className="text-gray-600">
              Worldwide reach with local compliance and strong operator 
              partnerships to ensure your SMS connects with every customer.
            </p>
          </div>

        </div>
      </div>
      </section>




     <section className="bg-gradient-to-r from-green-50 via-blue-50 to-green-100 py-5">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold text-green-900 mb-12">
          Benefits of Using Our SMS API Service
        </h2>

        {/* Benefits List */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {[
            "Automate notifications, reminders, and alerts",
            "Improve customer engagement with personalized SMS",
            "Reduce operational costs with efficient communication",
            "Access detailed analytics & reporting for campaigns",
            "Scale your business communication effortlessly",
          ].map((benefit, index) => (
            <div
              key={index}
              className="flex items-center bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition"
            >
              <FaCheckCircle className="text-green-600 text-3xl mr-4" />
              <p className="text-gray-700 text-lg text-left">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>


     <section className="bg-gradient-to-r from-purple-50 via-pink-50 to-red-50 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold text-purple-900 mb-12">
          Who Can Use Our Bulk SMS API?
        </h2>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          
          {/* E-commerce & Retail */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <div className="flex justify-center mb-4 text-purple-600 text-5xl">
              <FaShoppingCart />
            </div>
            <h3 className="text-xl font-semibold mb-2">E-commerce & Retail</h3>
            <p className="text-gray-600">
              Send order updates, promotions, and offers to customers in real-time.
            </p>
          </div>

          {/* Banks & Fintechs */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <div className="flex justify-center mb-4 text-purple-600 text-5xl">
              <FaUniversity />
            </div>
            <h3 className="text-xl font-semibold mb-2">Banks & Fintechs</h3>
            <p className="text-gray-600">
              Deliver OTPs, account alerts, and fraud prevention messages securely.
            </p>
          </div>

          {/* Healthcare */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <div className="flex justify-center mb-4 text-purple-600 text-5xl">
              <FaHospital />
            </div>
            <h3 className="text-xl font-semibold mb-2">Healthcare</h3>
            <p className="text-gray-600">
              Share appointment reminders, lab results, and health alerts instantly.
            </p>
          </div>

          {/* Educational Institutes */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <div className="flex justify-center mb-4 text-purple-600 text-5xl">
              <FaSchool />
            </div>
            <h3 className="text-xl font-semibold mb-2">Educational Institutes</h3>
            <p className="text-gray-600">
              Notify students and parents with exam alerts, fee reminders, and notices.
            </p>
          </div>

          {/* Logistics */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition md:col-span-2 lg:col-span-1">
            <div className="flex justify-center mb-4 text-purple-600 text-5xl">
              <FaTruck />
            </div>
            <h3 className="text-xl font-semibold mb-2">Logistic Companies</h3>
            <p className="text-gray-600">
              Provide shipment tracking, delivery confirmations, and updates on-the-go.
            </p>
          </div>

        </div>
      </div>
    </section>



    <section className="bg-gradient-to-r from-green-50 via-blue-50 to-green-100 py-20">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold text-green-900 mb-12 text-center">
          Frequently Asked Questions
        </h2>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="flex justify-between items-center w-full text-left"
              >
                <span className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </span>
                <FaChevronDown
                  className={`text-green-600 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`mt-2 text-gray-600 overflow-hidden transition-all duration-500 ${
                  openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="mt-3">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>



































  
 





















   



   




    {/* fifth content */}

    <Client/>

{/* sixth content */}

<Getstarted/>

   
   <Footer/>
   </>
  )
}
