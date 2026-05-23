import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import "./enterprise.css";
import { motion } from 'framer-motion';
import enterprisekey from "../assets/enterprise_key.webp";
import { useEffect } from 'react';
import { Autoplay, Pagination } from "swiper/modules";
import icons1 from "../assets/icons8-arrow-100.png";
import icons2 from "../assets/icons8-call-50.png";
import icons3 from "../assets/product.png";
import icons4 from "../assets/attention.png";
import icons5 from "../assets/reach.png";
import icons6 from "../assets/conf.png";
import icons7 from "../assets/t1-8.png";
import icons8 from "../assets/t2.png";
import icons9 from "../assets/t3.png";
import icons10 from "../assets/c1.png";
import icons11 from "../assets/c2.png";
import icons12 from "../assets/c3.png";
import icons13 from "../assets/c4.png";
import icons14 from "../assets/Get_started_img.webp";
import icons15 from "../assets/icons8-plus-501.png";
import Footer2 from '../components/Footer2';
import Footer from '../components/Footer';
import enterprisemsgimg from '../assets/enterprise_msg.webp';
import enterprisesms from "../assets/enterprisesms.png";
import enterprisemessg from "../assets/enterprisemessg.jpeg";
import { FaCog, FaShieldAlt, FaChartLine, FaSearch, FaInbox,FaUserPlus, FaWhatsapp, FaArrowRight, FaBell, FaKey, FaBullhorn, FaUniversity, FaShoppingCart, FaHeadset, FaHeartbeat, FaTruck, FaUsersCog, FaCheckCircle } from 'react-icons/fa';
import { MdCheckCircle } from 'react-icons/md';
import Getstarted from '../components/Getstarted';
import Client from '../components/Client';
import { Sparkles } from 'lucide-react';
import {
    FaLayerGroup,
  FaClock,
  FaUserCheck,
  FaPlug,
  FaComments,
  FaGlobe,
  FaBolt,
  FaServer,
   FaCogs,
    FaCode,
  FaTachometerAlt,
  FaLock,
  FaProjectDiagram,
} from "react-icons/fa";
export default function Enterprise_messaging() {
    const [Ques1, setQues1] = useState(false);
    const [Ques2, setQues2] = useState(false);
    const [Ques3, setQues3] = useState(false);
    const [Ques4, setQues4] = useState(false);
    const [Ques5, setQues5] = useState(false);
    function handleQues1() {
      setQues1(!Ques1);
      setQues2(false);
      setQues3(false);
      setQues4(false);
      setQues5(false);
    }
    function handleQues2() {
      setQues2(!Ques2);
      setQues1(false);
      setQues3(false);
      setQues4(false);
      setQues5(false);
    }
  
    function handleQues3() {
      setQues3(!Ques3);
      setQues1(false);
      setQues2(false);
      setQues4(false);
      setQues5(false);
    }
    function handleQues4() {
      setQues4(!Ques4);
      setQues1(false);
      setQues2(false);
      setQues3(false);
      setQues5(false);
    }
    function handleQues5() {
      setQues5(!Ques5);
      setQues1(false);
      setQues2(false);
      setQues3(false);
      setQues4(false);
    }



    const services = [
      {
        title: "Seamless Integration",
        description: "Integrate our messaging services effortlessly with your existing systems and applications. Our solutions support a wide range of integration options, ensuring a smooth fit into your current infrastructure.",
        icon: <FaCog className="w-12 h-12 mx-auto text-blue-500" />,
      },
      {
        title: "High Reliability",
        description: "Count on our robust infrastructure to deliver messages with unmatched reliability. Our systems are designed for high availability, minimizing downtime and ensuring your messages are always on time.",
        icon: <MdCheckCircle className="w-12 h-12 mx-auto text-green-500" />,
      },
      {
        title: "Advanced Security",
        description: "Protect your sensitive information with our state-of-the-art security features. We utilize encryption, authentication, and compliance measures to safeguard your communications against unauthorized access.",
        icon: <FaShieldAlt className="w-12 h-12 mx-auto text-red-500" />,
      },
      {
        title: "Scalability",
        description: "Scale your messaging capabilities as your business grows. Whether you’re expanding your user base or increasing message volume, our solutions are designed to adapt to your evolving needs.",
        icon: <FaChartLine className="w-12 h-12 mx-auto text-yellow-500" />,
      },
      {
        title: "Real-time Analytics",
        description: "Gain insights into your messaging activities with our real-time analytics tools. Monitor performance, track delivery rates, and make data-driven decisions to optimize your communication strategies.",
        icon: <FaSearch className="w-12 h-12 mx-auto text-purple-500" />,
      },
      {
        title: "Multi-channel Support",
        description: "Engage with your audience through multiple channels including SMS, email, and in-app messaging. Our solutions provide a unified platform to manage all your communication needs in one place.",
        icon: <FaInbox className="w-12 h-12 mx-auto text-teal-500" />,
      }
    ];

    useEffect(()=>{
      window.scrollTo(0,0);
    },[])
  return (
    <>
        <Helmet>
        <meta name="robots" content="index, follow" />

                  <meta charSet="utf-8" />
                  <title> Enterprise Messaging Solutions | Enterprise SMS Gateway & Business Text Messaging Platform</title>
                  <meta name="description" content=" Boost communication with Enterprise Messaging solutions. Scalable enterprise SMS solution, business text messaging platform, and secure enterprise SMS gateway for global business growth"/>
                   <meta name="keywords" content=" Enterprise Messaging solutions, Enterprise SMS Solution, business text messaging platform, Enterprise Messaging solution, business text messaging solution, enterprise messaging service, enterprise sms gateway" />
                     <link rel="canonical" href="https://digintra.com//enterprise-messaging-solutions" />
                
              </Helmet>   

    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-10 px-6 md:px-12 lg:px-20">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center mt-3">

    {/* LEFT CONTENT */}
    <div className="flex flex-col gap-6 text-center md:text-left" >

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900">
        Enterprise <span className="text-green-600">Messaging</span> Solutions
      </h1>

      <p
        className="text-[14px] sm:text-[15px] lg:text-[16px] text-gray-700 leading-relaxed max-w-xl mx-auto md:mx-0"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        Empower your business communication with scalable, secure, and intelligent
        enterprise messaging solutions designed to deliver instant connectivity,
        higher engagement, and seamless customer interactions across global markets.
      </p>

      {/* BUTTONS */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 justify-center md:justify-start items-center">

<a href="https://digintra.com/">
        <button className="border-b-2 border-[#1e3b8d] bg-gradient-to-tr from-[#3e8646] to-[#2fac13] w-[200px] h-14 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl text-white font-semibold flex items-center justify-center gap-2">
          Get Started Today <FaArrowRight />
        </button>
</a>
      <a href="https://wa.me/919031011559" target="_blank" rel="noopener noreferrer">
  <button className="border-b-2 border-[#1e3b8d] bg-gradient-to-tr from-[#00b09b] to-[#96c93d] w-[200px] h-14 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl text-white font-semibold flex items-center justify-center gap-2">
    <FaWhatsapp className="h-5 w-5" />
    WhatsApp
  </button>
</a>

      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-center md:justify-end mt-5">
      <img
        src={enterprisemsgimg}
        alt="Enterprise Messaging"
        className="w-full max-w-md md:max-w-lg lg:max-w-xl object-contain"
      />
    </div>

  </div>
</section>

 <section className="w-full bg-white py-12 px-6 md:px-12 lg:px-20">
     <div className="max-w-6xl mx-auto mb-5 -mt-6 ">

        <div className="flex items-center justify-center gap-3 
                        bg-green-50 border border-green-100 
                        rounded-xl py-3 px-6 shadow-sm">

          {/* ICON */}
          <Sparkles className="text-green-600 w-5 h-5" />
           <Sparkles className="text-green-600 w-5 h-5" />

          {/* TEXT */}
          <p className="text-sm sm:text-base md:text-lg font-medium text-gray-800 text-center">
            Transform Your{" "}
            <span className="text-green-600 font-semibold">
              Messaging Strategy
            </span>{" "}
            Today
          </p>

        </div>

      </div>

      <div className="max-w-6xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Transform Business Communication with{" "}
            <span className="text-green-600">
              Enterprise Messaging Solutions
            </span>
          </h2>
        </div>

        {/* CONTENT GRID */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">

          {/* LEFT TEXT */}
          <p
            className="text-gray-700 text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Communication plays a vital role in business success. So, all enterprises
            require fast, reliable, and scalable messaging systems to connect with
            their customers, partners, and internal teams in real time. Our <span className='font-bold'>enterprise
            messaging solutions </span> are built to deliver high-performance communication
            capabilities that enhance engagement, improve operational efficiency, and
            drive measurable results.
          </p>

          {/* RIGHT TEXT */}
          <p
            className="text-gray-700 text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            With the growing demand for instant communication, businesses need more
            than just basic messaging. They need a complete  <span className='font-bold'> enterprise messaging
            solution </span>that integrates seamlessly with their systems, supports multiple
            use cases, and ensures high deliverability across regions. That’s exactly
            what DIGINTRA Teleservices offers: advanced messaging infrastructure
            combined with enterprise-grade reliability.
          </p>

        </div>
      </div>
    </section>       

    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-6 text-center md:text-left">

          {/* HEADING */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Comprehensive{" "}
            <span className="text-green-600">
              Enterprise SMS Solution
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="text-black text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed max-w-xl mx-auto md:mx-0">
            Our <span className='font-bold'> enterprise SMS solution </span>is designed to handle mission-critical
            communication needs for businesses of all sizes. Whether it's sending
            OTPs, transactional SMS alerts, reminders, or promotional SMS campaigns,
            our business text messaging platform ensures that every message is
            delivered quickly and securely.
          </p>

          {/* BULLET POINTS */}
          <div className="flex flex-col gap-3 mt-2 text-left max-w-md mx-auto md:mx-0">
            {[
              "High-speed bulk SMS delivery with low latency",
              "Intelligent routing for maximum delivery success",
              "Personalized messaging with dynamic content",
              "Secure transmission with industry-standard protocols",
              "Real-time delivery reports and analytics",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-green-600 text-lg mt-[2px]">✔</span>
                <p className="text-black text-sm sm:text-base">{item}</p>
              </div>
            ))}
          </div>

          {/* FOOT TEXT */}
          <p className="text-black text-sm sm:text-base mt-2 max-w-xl mx-auto md:mx-0">
            This makes it easier for enterprises to maintain consistent communication
            with their audience while ensuring compliance and data security.
          </p>

        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <img
            src={enterprisesms}
            alt="Enterprise SMS Solution"
            className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl object-contain drop-shadow-xl transition duration-300 hover:scale-105"
          />
        </div>

      </div>
    </section>


 <section className="w-full bg-gradient-to-b from-white to-gray-50 py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <div className="flex justify-center md:justify-start order-2 md:order-1">
          <img
            src={enterprisemessg}
            alt="Business Messaging Platform"
            className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl object-contain drop-shadow-xl transition duration-300 hover:scale-105"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col gap-6 text-center md:text-left order-1 md:order-2">

          {/* HEADING */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
            Powerful{" "}
            <span className="text-green-600">
              Business Text Messaging Platform
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="text-black text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed max-w-xl mx-auto md:mx-0">
            Our advanced <span className='font-bold'> business text messaging platform </span> enables organizations to
            manage, automate, and optimize their messaging operations from a single
            unified interface. It simplifies communication workflows and enhances
            productivity by eliminating manual processes.
          </p>
     <p className='text-black text-[14px]  sm:text-[15px] lg:text-[16px]'>With our platform, businesses can:</p>
          {/* BULLETS */}
          <div className="flex flex-col gap-3 mt-2 text-left max-w-md mx-auto md:mx-0">
            {[
              "Launch and manage large-scale messaging campaigns",
              "Automate notifications based on triggers and events",
              "Enable two-way messaging for customer interaction",
              "Integrate messaging APIs into CRM, ERP, or applications",
              "Monitor performance with detailed analytics dashboards",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-green-600 text-lg mt-[2px]">✔</span>
                <p className="text-black text-sm sm:text-base">{item}</p>
              </div>
            ))}
          </div>

          {/* FOOT TEXT */}
          <p className="text-black text-sm sm:text-base mt-2 max-w-xl mx-auto md:mx-0">
            This platform is ideal for businesses looking to improve customer engagement
            and streamline communication processes.
          </p>

        </div>

      </div>
    </section>


  <section className="w-full bg-gradient-to-b from-gray-50 to-white py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">

        {/* HEADING */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6">
          Scalable{" "}
          <span className="text-green-600">
            Enterprise Messaging Service
          </span>
        </h2>

        {/* DESCRIPTION */}
        <p className="text-black text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed max-w-3xl mx-auto mb-10">
          Our <span className='font-bold'> enterprise messaging service </span> is built with scalability at its core.
          Whether you're sending a few thousand messages or millions daily, our
          infrastructure ensures consistent performance, speed, and reliability.
        </p>
  
        {/* FEATURES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {[
            {
          text: "Global connectivity with direct operator routes",
          icon: <FaGlobe />,
        },
        {
          text: "High throughput messaging capabilities",
          icon: <FaBolt />,
        },
        {
          text: "24/7 uptime with proactive monitoring",
          icon: <FaServer />,
        },
        {
          text: "Redundant systems for uninterrupted service",
          icon: <FaShieldAlt />,
        },
        {
          text: "Flexible deployment options for enterprise needs",
          icon: <FaCogs />,
        },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm 
                         hover:shadow-xl transition duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-3">
                <span className="text-green-600 text-xl mt-1">  {item.icon}</span>
                <p className="text-black text-sm sm:text-base text-left">
                    {item.text}
                </p>
              </div>
            </div>
          ))}

        </div>

        {/* FOOT TEXT */}
        <p className="text-black text-sm sm:text-base mt-10 max-w-3xl mx-auto">
          This ensures your communication never faces downtime, even during peak
          demand periods.
        </p>

      </div>
    </section>  

  <section className="w-full bg-gradient-to-b from-white to-gray-50 py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
            Advanced{" "}
            <span className="text-green-600">
              Business Text Messaging Solution
            </span>
          </h2>
        </div>

        {/* DESCRIPTION */}
        <p className="text-black text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed text-center max-w-3xl mx-auto mb-12">
          Our customizable <span className='font-bold'> business text messaging solution </span> allows enterprises to
          deliver personalized and targeted communication to their customers. By
          leveraging customer data and behavioral insights, businesses can send
          messages that truly resonate.
        </p>

        {/* CAPABILITIES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {[
             {
          text: "Segmentation-based messaging campaigns",
          icon: <FaLayerGroup />,
        },
        {
          text: "Automated workflows and scheduling",
          icon: <FaClock />,
        },
        {
          text: "Personalized content delivery",
          icon: <FaUserCheck />,
        },
        {
          text: "Integration with marketing automation tools",
          icon: <FaPlug />,
        },
        {
          text: "Enhanced customer engagement strategies",
          icon: <FaComments />,
        },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-xl p-6 
                         shadow-sm hover:shadow-xl transition duration-300 
                         hover:-translate-y-1"
            >
              <div className="flex items-start gap-3">
                <span className="text-green-600 text-xl mt-1">{item.icon}</span>
                <p className="text-black text-sm sm:text-base text-left">
                    {item.text}
                </p>
              </div>
            </div>
          ))}

        </div>

        {/* FOOT TEXT */}
        <p className="text-black text-sm sm:text-base mt-12 text-center max-w-3xl mx-auto">
          This helps businesses not only communicate but also build stronger
          relationships with their customers.
        </p>

      </div>
    </section>   

 <section className="w-full bg-gradient-to-b from-gray-50 to-white py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
            Reliable{" "}
            <span className="text-green-600">
              Enterprise SMS Gateway
            </span>
          </h2>
        </div>

        {/* DESCRIPTION */}
        <p className="text-black text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed text-center max-w-3xl mx-auto mb-12">
          Our robust <span className='font-bold'> enterprise SMS gateway </span> ensures seamless communication between
          your systems and mobile networks worldwide. With developer-friendly APIs
          and secure connectivity, integration becomes quick and hassle-free.
        </p>

        {/* FEATURE CONTAINER */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-10">

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
               {
            text: "RESTful APIs for easy integration",
            icon: <FaCode />,
          },
          {
            text: "High-speed message processing",
            icon: <FaTachometerAlt />,
          },
          {
            text: "Real-time delivery tracking",
            icon: <FaChartLine />,
          },
          {
            text: "Secure data encryption and compliance",
            icon: <FaLock />,
          },
          {
            text: "Multi-channel support for future scalability",
            icon: <FaProjectDiagram />,
          },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-gray-50 rounded-xl p-4 
                           hover:shadow-md transition duration-300"
              >
                <span className="text-green-600 text-lg mt-1"> {item.icon}</span>
                <p className="text-black text-sm sm:text-base">
                       {item.text}
                </p>
              </div>
            ))}

          </div>

        </div>

        {/* FOOT TEXT */}
        <p className="text-black text-sm sm:text-base mt-10 text-center max-w-3xl mx-auto">
          This enables enterprises to embed messaging capabilities directly into
          their applications and workflows.
        </p>

      </div>
    </section>

   <section className="w-full bg-gradient-to-b from-white to-gray-50 py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
            Key Use Cases of{" "}
            <span className="text-green-600">
              Enterprise Messaging Solutions
            </span>
          </h2>
        </div>

        {/* DESCRIPTION */}
        <p className="text-black text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed text-center max-w-3xl mx-auto mb-12">
          Our <span className='font-bold'>  enterprise messaging solutions </span> support a wide range of business
          applications across industries. Here are some of the most impactful
          use cases:
        </p>

        {/* USE CASES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {[
            {
              title: "Customer Notifications & Alerts",
              desc: "Send real-time updates such as order confirmations, delivery status, payment reminders, and appointment alerts.",
                icon: <FaBell />,
            },
            {
              title: "OTP & Authentication",
              desc: "Ensure secure user verification with instant one-time passwords (OTPs) for login and transactions.",
                icon: <FaKey />,
            },
            {
              title: "Marketing & Promotions",
              desc: "Run targeted SMS campaigns to promote products, services, discounts, and offers.",
              icon: <FaBullhorn />,
            },
            {
              title: "Banking & Financial Services",
              desc: "Deliver transaction alerts, fraud notifications, balance updates, and account activity messages securely.",
              icon: <FaUniversity />,
            },
            {
              title: "E-commerce Communication",
              desc: "Enhance the customer journey with order updates, shipping notifications, and feedback requests.",
              icon: <FaShoppingCart />,
            },
            {
              title: "Customer Support & Engagement",
              desc: "Enable two-way messaging for customer queries, feedback collection, and support interactions.",
                icon: <FaHeadset />,
            },
            {
              title: "Healthcare Communication",
              desc: "Send appointment reminders, test results, prescription alerts, and health notifications to patients.",
                icon: <FaHeartbeat />,
            },
            {
              title: "Logistics & Delivery Updates",
              desc: "Provide real-time shipment tracking, delivery confirmations, and delay notifications.",
               icon: <FaTruck />,
            },
            {
              title: "Internal Business Communication",
              desc: "Streamline internal alerts, employee notifications, and operational updates within organizations.",
               icon: <FaUsersCog />,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-xl p-6 
                         shadow-sm hover:shadow-xl transition duration-300 
                         hover:-translate-y-1 flex flex-col gap-3 text-center"
            >
              <div className="flex justify-center">
                 <span className=" bg-green-100 text-green-600  p-3 rounded-lg w-fit text-xl">
            {item.icon}
          </span>
          </div>
              {/* TITLE */}
              <h3 className="text-black font-semibold text-base sm:text-lg">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-black text-sm sm:text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section> 

    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
            Why Choose{" "}
            <span className="text-green-600">
              DIGINTRA Teleservices?
            </span>
          </h2>
        </div>

        {/* DESCRIPTION */}
        <p className="text-black text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed text-center max-w-3xl mx-auto mb-12">
          Choosing the right messaging partner is crucial for enterprise success.
          DIGINTRA Teleservices stands out by offering reliable, scalable, and secure
    <span className='font-bold'> enterprise messaging solutions </span> tailored to your business needs.
        </p>

        {/* FEATURES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">

          {[
             {
      text: " Global Coverage: Reach customers across multiple countries effortlessly",
      icon: <FaGlobe />
    },
    {
      text: "High Deliverability: Direct routes ensure maximum message delivery rates",
      icon: <FaCheckCircle/>
    },
    {
      text: "Scalable Infrastructure: Designed for enterprises with high messaging volumes",
      icon: <FaServer />
    },
    {
      text: "Secure Platform: Advanced encryption and compliance standards",
      icon: <FaShieldAlt />
    },
    {
      text: "Custom Solutions: Tailored messaging strategies for different industries",
      icon: <FaCogs />
    },
    {
      text: "Expert Support: Dedicated team available for assistance and optimization",
      icon: <FaHeadset />
    },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-xl p-6 
                         shadow-sm hover:shadow-xl transition duration-300 
                         hover:-translate-y-1 flex items-start gap-3"
            >
              <span className="text-green-600 text-xl mt-1"> {item.icon}</span>
              <p className="text-black text-sm sm:text-base">
             {item.text}
              </p>
            </div>
          ))}

        </div>

        {/* CTA BOX */}
        <div className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-2xl p-8 md:p-12 text-center shadow-sm mb-32">

          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-4">
            Get Started Today 
          </h3>

          <p className="text-black text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed max-w-2xl mx-auto mb-6">
            Upgrade your business communication with DIGINTRA’s powerful <span className='font-bold'>Enterprise
            Messaging solutions</span>. Whether you need an <span className='font-bold'>enterprise SMS gateway</span>, a complete
               <span className='font-bold'> business text messaging solution</span>, or a scalable <span className='font-bold'>enterprise messaging
            service </span>, we have the expertise and technology to support your growth.
          </p>

          <p className="text-black text-sm sm:text-base mb-8 font-bold">
            Contact us today and take the first step toward smarter, faster, and more
            reliable enterprise communication.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">

<a href="https://digintra.com/">
            <button className="bg-gradient-to-tr from-[#3e8646] to-[#2fac13] 
                               text-white px-6 py-3 rounded-lg shadow-lg 
                               hover:scale-105 hover:shadow-2xl transition duration-300  flex items-center gap-2">
              Get Started <FaArrowRight />
            </button>
</a>
           <a href="https://wa.me/919031011559" target="_blank" rel="noopener noreferrer">
  <button className="border-b-2 border-[#1e3b8d] bg-gradient-to-tr from-[#00b09b] to-[#96c93d] w-[200px] h-14 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl text-white font-semibold flex items-center justify-center gap-2">
    <FaWhatsapp className="h-5 w-5" />
    WhatsApp
  </button>
</a>

          </div>

        </div>

      </div>
    </section> 
        <Footer/>
      </>
  )
}
