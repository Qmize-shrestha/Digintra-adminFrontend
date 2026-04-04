import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaUserPlus, FaWhatsapp } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./transaction.css";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import icons1 from "../assets/icons8-arrow-100.png";
import icons2 from "../assets/icons8-call-50.png";
import icons3 from "../assets/product.png";
import icons4 from "../assets/ccc.png";
import icons5 from "../assets/ggg.png";
import icons6 from "../assets/cus.png";
import icons7 from "../assets/save time.png";
import icons8 from "../assets/business.png";
import icons9 from "../assets/satis.png";
import icons10 from "../assets/c1.png";
import icons11 from "../assets/c2.png";
import icons12 from "../assets/c3.png";
import icons13 from "../assets/c4.png";
import icons14 from "../assets/Get_started_img.webp";
import icons15 from "../assets/icons8-plus-501.png";
import icons16 from "../assets/Transactional_sms_img.webp";
import Footer from "../components/Footer";
import Getstarted from "../components/Getstarted";
import Client from "../components/Client";
import transactionalkey from "../assets/transactional_key.webp";
import HeroImage from "../assets/heroimage.jpg";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export default function Transactionsl_sms() {
  const [Ques1, setQues1] = useState(false);
  const [Ques2, setQues2] = useState(false);
  const [Ques3, setQues3] = useState(false);

  function handleQues1() {
    setQues1(!Ques1);
    setQues2(false);
    setQues3(false);
  }
  function handleQues2() {
    setQues2(!Ques2);
    setQues1(false);
    setQues3(false);
  }

  function handleQues3() {
    setQues3(!Ques3);
    setQues1(false);
    setQues2(false);
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  const messages = [
    {
      title: "OTP Messages",
      desc: "Secure your login and transactions.",
      icon: (
        <svg
          className="w-10 h-10 text-blue-200 mb-3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M12 11c.8 0 1.5-.7 1.5-1.5S12.8 8 12 8s-1.5.7-1.5 1.5S11.2 11 12 11z" />
          <path d="M12 13v6" />
          <circle cx="12" cy="12" r="10" />
        </svg>
      ),
    },
    {
      title: "Order & Payment Updates",
      desc: "Confirmations, invoices, and status alerts.",
      icon: (
        <svg
          className="w-10 h-10 text-blue-200 mb-3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M3 3h18v4H3zM3 8h18v13H3z" />
        </svg>
      ),
    },
    {
      title: "Banking & Financial Alerts",
      desc: "Balance updates, withdrawal alerts, and more.",
      icon: (
        <svg
          className="w-10 h-10 text-blue-200 mb-3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M2 9l10-5 10 5v11H2z" />
          <path d="M12 22V12" />
        </svg>
      ),
    },
    {
      title: "Appointment Reminders",
      desc: "For hospitals, clinics, and service providers.",
      icon: (
        <svg
          className="w-10 h-10 text-blue-200 mb-3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M8 7V3M16 7V3M3 11h18M5 20h14a2 2 0 002-2V7H3v11a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Important Notifications",
      desc: "Policy updates, account activity, and system alerts.",
      icon: (
        <svg
          className="w-10 h-10 text-blue-200 mb-3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M12 9v4m0 4h.01M21 19H3l9-16z" />
        </svg>
      ),
    },
    {
      title: "Travel & Ticketing Alerts",
      desc: "Booking confirmations, check-in alerts, and itinerary updates.",
      icon: (
        <svg
          className="w-10 h-10 text-blue-200 mb-3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M10.9 2l9 9-1.4 1.4-9-9L10.9 2zM2 12l1.4-1.4 9 9L11 21z" />
        </svg>
      ),
    },
    {
      title: "Educational Updates",
      desc: "Send exam schedules, results, and fee reminders.",
      icon: (
        <svg
          className="w-10 h-10 text-blue-200 mb-3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M12 3L1 9l11 6 9-5v8h2V9z" />
        </svg>
      ),
    },
  ];


   const points = [
    {
      number: "1",
      title: "Leading transactional SMS service provider with proven reliability.",
    },
    {
      number: "2",
      title: "Advanced infrastructure for instant transactional message delivery.",
    },
    {
      number: "3",
      title: "Dedicated support team to assist with setup and integration.",
    },
  ];


  const faqs = [
    {
      question: "1. What is a transactional SMS?",
      answer:
        "A transactional SMS is a message used to send critical updates like OTPs, alerts, and confirmations. These messages are delivered instantly and can be sent to DND numbers.",
    },
    {
      question:
        "2. How is DIGINTRA Teleservices different from other transactional SMS service providers?",
      answer:
        "DIGINTRA offers a high-speed, reliable transactional SMS API, transparent pricing, and 24x7 delivery, making us one of the best transactional SMS providers in India.",
    },
    {
      question: "3. Can transactional SMS be sent to DND numbers?",
      answer:
        "Yes, transactional SMS can be delivered to all numbers, including DND, as they contain critical information.",
    },
    {
      question: "4. What types of businesses use transactional SMS services?",
      answer:
        "Banks, e-commerce companies, healthcare providers, and service-based businesses use transactional SMS services to improve customer communication.",
    },
    {
      question: "5. How do I integrate DIGINTRA’s transactional SMS API?",
      answer:
        "Our API is easy to integrate with websites, CRMs, ERPs, and mobile apps. Our technical team provides full support to ensure seamless integration.",
    },
  ];

  return (
    <>
      <Helmet>
        <meta name="robots" content="index, follow" />

        <meta charSet="utf-8" />
        <title>
          Transactional SMS Service Provider | Best Transactional SMS API –
          DIGINTRA Teleservices
        </title>
        <meta
          name="description"
          content=" Send secure and instant transactional messages with DIGINTRA Teleservices – the best transactional SMS service provider. 24x7 delivery, easy API integration & affordable pricing.
"
        />
        <meta
          name="keywords"
          content="transactional sms, transactional sms service provider, transactional sms service, transactional sms provider, transactional sms price
"
        />
        <link rel="canonical" href="https://digintra.com/transactional-sms" />
      </Helmet>

      <section className="w-full min-h-screen flex flex-col lg:flex-row items-center lg:text-left justify-between px-6 text-center lg:px-20 pt-[160px] lg:pt-[230px] pb-[50px]   bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 overflow-hidden">
        <motion.div
          className="flex flex-col gap-6 max-w-xl text-white"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-2xl lg:text-3xl font-bold leading-snug"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Transactional SMS - Reliable Messaging with
            <span className="text-yellow-300"> DIGINTRA Teleservices</span>
          </motion.h1>

          <motion.p
            className="text-md text-blue-100 max-w-lg"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Deliver Important Information Instantly with the Best Transactional
            SMS Service Provider
          </motion.p>

          <motion.a
            href="#contact"
            className="mt-4 font-semibold text-blue-600 transition hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            <Link to='/' ><span className="bg-white px-6 py-2 rounded-2xl hover:bg-blue-50 transition">
              Get Started
            </span></Link>
          </motion.a>
        </motion.div>

        {/* Right Section (Animated Image) */}
        <motion.div
          className="relative mt-10 lg:mt-0"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1, type: "spring" }}
        >
          <motion.img
            src={HeroImage}
            alt="Transactional SMS"
            className="w-[250px] lg:w-[400px] drop-shadow-2xl rounded-3xl"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </section>

      <section className="w-full py-20 px-6 lg:px-20 bg-white flex flex-col lg:flex-row items-center gap-10">
        {/* Left Text Section */}
        <motion.div
          className="flex-1 text-gray-800"
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-blue-600">
            Reliable Transactional SMS for Every Industry
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            At{" "}
            <span className="font-semibold text-blue-600">
              DIGINTRA Teleservices
            </span>
            , we understand how crucial it is to keep your customers informed in
            real time. Our transactional SMS service ensures that your business
            communications, such as OTPs, alerts, confirmations, and updates are
            delivered instantly and securely, 24x7.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mt-4">
            Whether you’re a bank, e-commerce platform, healthcare provider, or
            any growing business, our transactional SMS API makes it simple to
            integrate reliable messaging into your existing systems.
          </p>
        </motion.div>

        {/* Right SVG Section */}
        <motion.div
          className="flex-1 grid grid-cols-2 gap-6 justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Mail Icon */}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-24 h-24 text-blue-500 mx-auto"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
            <path d="M22 6 12 13 2 6" />
          </motion.svg>

          {/* Clock Icon */}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-24 h-24 text-cyan-500 mx-auto"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </motion.svg>

          {/* Integration Icon */}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-24 h-24 text-blue-400 mx-auto"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 10h-3a2 2 0 0 0-2 2v6H8a2 2 0 0 1-2-2V4h6" />
            <polyline points="15 3 21 3 21 9" />
          </motion.svg>

          {/* User Icon */}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-24 h-24 text-indigo-500 mx-auto"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 21v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </motion.svg>
        </motion.div>
      </section>

      <section className="w-full py-20 px-6 lg:px-20 bg-gradient-to-br from-gray-800 via-blue-400 to-gray-500 text-white overflow-hidden">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">
            Why Choose <span className="text-yellow-300">DIGINTRA</span> as Your
            Transactional SMS Provider?
          </h2>

          <motion.ul
            className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left mt-10"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {[
              {
                icon: (
                  <svg
                    className="w-12 h-12 text-yellow-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 12l2-2 4 4 8-8 4 4-10 10z" />
                  </svg>
                ),
                text: "24x7 Message Delivery – Ensure your customers never miss critical updates.",
              },
              {
                icon: (
                  <svg
                    className="w-12 h-12 text-blue-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13 16h-1v-4h-1m1-4h.01M21 12A9 9 0 1 1 3 12a9 9 0 0 1 18 0z" />
                  </svg>
                ),
                text: "Fast & Secure SMS Gateway – High-priority routes for maximum delivery speed.",
              },
              {
                icon: (
                  <svg
                    className="w-12 h-12 text-green-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 20h9" />
                    <path d="M12 4h9" />
                    <path d="M4 9h16v6H4z" />
                  </svg>
                ),
                text: "Scalable API Integration – Simple and robust transactional SMS API for seamless automation.",
              },
              {
                icon: (
                  <svg
                    className="w-12 h-12 text-cyan-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 11l3 3L22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                ),
                text: "DND-Compliant Messaging – Deliver messages to all users, even those under DND.",
              },
              {
                icon: (
                  <svg
                    className="w-12 h-12 text-pink-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 8c-3.3 0-6 2.7-6 6h12c0-3.3-2.7-6-6-6z" />
                    <circle cx="12" cy="4" r="2" />
                    <path d="M12 14v6" />
                  </svg>
                ),
                text: "Affordable & Transparent Pricing – Get the best ROI with our flexible plans.",
              },
            ].map((item, index) => (
              <motion.li
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 flex flex-col items-center text-center shadow-lg hover:shadow-2xl transition"
                whileHover={{ scale: 1.05 }}
              >
                <div className="mb-4">{item.icon}</div>
                <p className="text-base text-blue-50 leading-relaxed">
                  {item.text}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.p
            className="mt-12 text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            As the best transactional SMS provider,{" "}
            <span className="font-semibold text-yellow-300">
              DIGINTRA Teleservices
            </span>{" "}
            is trusted by businesses across industries to deliver timely and
            secure messages that build trust and enhance customer experience.
          </motion.p>
        </motion.div>
      </section>





       <section className="w-full py-20 px-5 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 text-white overflow-hidden">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Types of <span className="text-blue-200">Transactional Messages</span> You Can Send
        </h2>
        <p className="text-blue-100 max-w-3xl mx-auto mb-12 text-lg">
          Transactional SMS can be used across industries to deliver critical, real-time information. With{" "}
          <span className="font-semibold text-blue-200">DIGINTRA Teleservices</span>, you can send:
        </p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } },
          }}
        >
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              className="bg-white/10 rounded-2xl p-6 text-left flex flex-col items-start shadow-lg hover:bg-white/20 transition backdrop-blur-md"
              whileHover={{ scale: 1.05 }}
            >
              {msg.icon}
              <h3 className="text-xl font-semibold text-blue-100 mb-2">{msg.title}</h3>
              <p className="text-blue-200 text-sm leading-relaxed">{msg.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="mt-14 text-blue-100 max-w-3xl mx-auto text-lg leading-relaxed"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          With <span className="font-semibold text-blue-200">DIGINTRA</span> as your transactional SMS provider, you can ensure these vital messages are delivered instantly, securely, and even to DND numbers.
        </motion.p>
      </motion.div>
    </section>





     <section className="w-full py-20 px-5 bg-white text-black overflow-hidden">
      <motion.div
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Left Content */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Seamless Integration with{" "}
            <span className="text-teal-300">Transactional SMS API</span>
          </h2>
          <p className="text-black text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
            Our platform for transactional SMS service comes with an easy-to-use API that integrates
            smoothly with your CRM, ERP, websites, and mobile apps. With{" "}
            <span className="font-semibold text-teal-200">DIGINTRA</span>, you get real-time delivery
            reports, powerful analytics, and full control over your messaging campaigns — ensuring
            reliability and efficiency in every message sent.
          </p>

          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="inline-block mt-8 bg-white border border-teal-300 text-teal-400 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-blue-50 transition"
          >
            Explore API Docs
          </motion.a>
        </motion.div>

        {/* Right SVG Illustration */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end"
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <svg
            className="w-72 h-72 md:w-96 md:h-96 text-teal-200"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M40,-60C55,-55,72,-46,76,-32C80,-18,70,0,61,17C52,34,45,50,33,57C21,64,4,63,-14,65C-33,68,-55,73,-67,62C-80,51,-83,25,-82,2C-81,-21,-76,-42,-63,-56C-50,-70,-29,-77,-9,-74C11,-71,22,-57,40,-60Z"
              transform="translate(100 100)"
              fill="currentColor"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 8,
                ease: "easeInOut",
              }}
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>


    <section className="w-full py-20 px-5 bg-gradient-to-r from-sky-700 via-blue-800 to-indigo-900 text-white">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Why Businesses <span className="text-sky-300">Trust DIGINTRA Teleservices</span>
        </h2>

        <div className="space-y-6 text-left max-w-3xl mx-auto">
          {points.map((point, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-5 bg-white/10 backdrop-blur-lg rounded-2xl p-5 hover:bg-white/20 transition"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-sky-400 text-white font-bold text-lg rounded-full shadow-md">
                {point.number}
              </div>
              <p className="text-blue-100 text-base md:text-lg leading-relaxed">{point.title}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>



     <section className="relative w-full py-24 px-5 bg-gradient-to-br from-indigo-500 via-blue-300 to-sky-500 text-white overflow-hidden">
      {/* Background Glow Animation */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0%,transparent_70%)] animate-pulse"></div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
          Start Sending <span className="text-yellow-300">Transactional SMS</span> Today
        </h2>

        {/* Subheading */}
        <p className="text-blue-100 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
          Take your business communication to the next level with{" "}
          <span className="font-semibold text-yellow-200">DIGINTRA Teleservices</span> – the best
          transactional SMS provider you can trust.
        </p>

        {/* Call to Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-5 mt-6"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {/* Call Button */}
          <motion.a
            href="tel:9097909079"
            whileHover={{ scale: 1.08 }}
            className="flex items-center gap-3 bg-yellow-400 text-indigo-900 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.518 4.55a1 1 0 01-.272.986l-2.12 2.12a16.018 16.018 0 006.364 6.364l2.12-2.12a1 1 0 01.986-.272l4.55 1.518a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C10.611 21 3 13.389 3 4V3a2 2 0 012-2z"
              />
            </svg>
            Call Us: 90979 09079
          </motion.a>

          {/* Email Button */}
          <motion.a
            href="mailto:support@digintra.com"
            whileHover={{ scale: 1.08 }}
            className="flex items-center gap-3 bg-white/20 backdrop-blur-lg border border-white/30 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-white/30 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18a2 2 0 002-2V6a2 2 0 00-2-2H3a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            Request a Demo
          </motion.a>
        </motion.div>

        {/* Animated Floating Shapes */}
        <motion.div
          className="absolute -bottom-10 left-10 w-32 h-32 bg-yellow-400 rounded-full mix-blend-overlay blur-2xl opacity-30"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>

        <motion.div
          className="absolute -top-10 right-10 w-40 h-40 bg-blue-400 rounded-full mix-blend-overlay blur-2xl opacity-30"
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
      </motion.div>
    </section>





 <section className="py-16 px-6 md:px-16 bg-gradient-to-b from-white via-blue-50 to-white text-gray-800">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-blue-700"
        >
          FAQs
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 mt-2"
        >
          Find answers to common questions about our Transactional SMS services.
        </motion.p>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white shadow-lg rounded-2xl p-5 md:p-6 border border-blue-100 hover:shadow-xl transition"
          >
            <h3 className="text-lg md:text-xl font-semibold text-blue-600 mb-2">
              {faq.question}
            </h3>
            <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
          </motion.div>
        ))}
      </div>
    </section>






      <Footer />
    </>
  );
}
