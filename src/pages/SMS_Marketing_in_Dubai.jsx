
import React from 'react';
import "./bulk.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import { Target, Send, Layers, BarChart3, Megaphone,CalendarCheck,CalendarDays,MessageSquare,Gift,ClipboardList,MessageSquareText,Clock,Plug,Headphones    } from "lucide-react";
import { ShoppingBag, Building2,Hotel,  Stethoscope, GraduationCap, Banknote } from "lucide-react";
import { Link } from 'react-router-dom';
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

      const services = [
    {
      icon: <ClipboardList className="w-8 h-8 text-white" />,
      title: "Campaign Planning",
      desc: "Aligning your SMS strategy with business goals.",
    },
    {
      icon: <MessageSquareText className="w-8 h-8 text-white" />,
      title: "Message Crafting",
      desc: "Writing clear, engaging, and action-oriented content.",
    },
    {
      icon: <Clock className="w-8 h-8 text-white" />,
      title: "Automation",
      desc: "Scheduling messages for the right time and audience.",
    },
    {
      icon: <Plug className="w-8 h-8 text-white" />,
      title: "API Integration",
      desc: "Seamlessly connecting SMS with your CRM or ERP systems.",
    },
    {
      icon: <Headphones className="w-8 h-8 text-white" />,
      title: "Dedicated Support",
      desc: "A team ready to assist you at every step.",
    },
  ];
    const industries = [
    { icon: <ShoppingBag className="w-8 h-8 text-black" />, title: "Retail & E-commerce" },
    { icon: <Building2 className="w-8 h-8 text-black" />, title: "Real Estate" },
    { icon: <Hotel className="w-8 h-8 text-black" />, title: "Hospitality & Tourism" },
    { icon: <Stethoscope className="w-8 h-8 text-black" />, title: "Healthcare & Clinics" },
    { icon: <GraduationCap className="w-8 h-8 text-black" />, title: "Education & Training" },
    { icon: <Banknote className="w-8 h-8 text-black" />, title: "Financial Services" },
  ];
      useEffect(()=>{
        window.scrollTo(0,0);
      },[])
  return (
    <>
    <Helmet>
  <meta name="robots" content="index, follow" />

      <title>SMS Marketing in Dubai | DIGINTRA – Bulk SMS Marketing Services
</title>
      <meta name="description" content='Boost your business with DIGINTRA’s SMS Marketing in Dubai. Trusted SMS marketing company offering bulk SMS services, campaigns & real-time analytics.
'/>
 <meta name="keywords" content="sms marketing in dubai, sms marketing dubai, sms marketing company in Dubai, bulk sms marketing in Dubai 
" />
 <link rel="canonical" href="https://digintra.com/sms-marketing-in-dubai
" />
    </Helmet>



     <section className="bg-gradient-to-br from-green-200 via-emerald-400 to-green-200  py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 mt-32">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-black space-y-6"
        >
          <h1 className="uppercase font-semibold  tracking-wider border-2 inline border-green-700 rounded-full p-2 -ml-1 bg-green-200">
            SMS Marketing in Dubai
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug ">
            Buzz Dubai with SMS Marketing
          </h2>
          <p className="text-lg leading-relaxed">
            SMS marketing, or text message marketing, is a form of direct
            marketing in which businesses use text messages to communicate with
            customers for promotional, transactional, or informational purposes.
          </p>
          <p className="text-lg leading-relaxed">
            In the competitive digital landscape of Dubai, reaching customers
            instantly and effectively is vital for business growth. At{" "}
            <span className="font-semibold">DIGINTRA</span>, we specialize in SMS
            marketing in Dubai, helping businesses connect with their audiences
            through personalized, targeted, and cost-effective campaigns.
          </p>
          <p className="text-lg leading-relaxed">
            Our SMS solutions are tailored for all sizes of business, including
            start-ups, SMEs, and large enterprises, aiming to enhance engagement
            and yield quantifiable outcomes.
          </p>
          <Link to="https://sms-login.digintra.com/">
          <button className="mt-4 px-6 py-3 bg-black text-white font-semibold rounded-full shadow-md hover:bg-gray-900 transition">
            Get Started
          </button></Link>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src={SMSDUBAI} // <-- replace with your image path
            alt="SMS Marketing Dubai"
            className="rounded-2xl shadow-lg max-h-[500px] object-cover"
          />
        </motion.div>
      </div>
    </section>




     <section className="relative bg-gradient-to-br from-green-50 via-green-100 to-green-200 py-16 px-6 md:px-12 overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-green-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-emerald-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      </div>

      {/* Main Container (same width as other section) */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6 z-10"
        >
          <h2 className="text-emerald-600 font-semibold tracking-wider uppercase">
            Why Choose SMS Marketing in Dubai?
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Connect Faster with Your Audience
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Dubai is a hub of innovation, commerce, and fast-paced consumer
            activity. With mobile phone penetration at an all-time high, SMS
            marketing in Dubai has become one of the most powerful tools for
            businesses to communicate directly with their customers. Unlike
            other channels like emails or social media posts that may go
            unnoticed, SMS messages are opened within minutes, ensuring your
            message reaches the right audience instantly.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            At <span className="font-semibold text-emerald-700">DIGINTRA</span>,
            we understand the local market dynamics and cultural touches that
            make Dubai SMS marketing highly effective. From promoting offers to
            sharing updates or running loyalty campaigns, SMS is a direct
            channel that guarantees visibility and action.
          </p>
          <Link to="https://sms-login.digintra.com/">
          <button className="mt-4 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-full shadow-md hover:bg-emerald-700 transition">
            Start Your Campaign
          </button></Link>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center relative z-10"
        >
          <img
            src={SMSDUBAI2} // replace with your image
            alt="Why Choose SMS Marketing in Dubai"
            className="rounded-2xl shadow-xl max-h-[500px] object-cover transform scale-x-[-1]"
          />
        </motion.div>
      </div>
    </section>




     <section className="relative bg-gradient-to-br from-green-50 via-green-100 to-green-200 py-20 px-6 md:px-12 overflow-hidden">
      {/* Decorative blur background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-green-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto text-center z-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          DIGINTRA – Your Trusted SMS Marketing Company in Dubai
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto"
        >
          When you partner with DIGINTRA, you are choosing more than just a
          messaging platform. You are choosing a trusted SMS marketing company
          in Dubai with years of experience in helping brands communicate
          smarter. Our solutions are tailored to meet your industry needs,
          ensuring every campaign delivers value.
        </motion.p>

        {/* Features Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
          >
            <Target className="w-12 h-12 text-emerald-600 mb-4" />
            <h3 className="font-semibold text-lg text-gray-900">
              Advanced Targeting
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              Segment your audience based on demographics, preferences, and
              behaviour.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
          >
            <Send className="w-12 h-12 text-emerald-600 mb-4" />
            <h3 className="font-semibold text-lg text-gray-900">
              High Deliverability
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              We ensure your SMS campaigns are delivered quickly and reliably.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
          >
            <Layers className="w-12 h-12 text-emerald-600 mb-4" />
            <h3 className="font-semibold text-lg text-gray-900">
              Custom Campaigns
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              From bulk promotions to personalized messages, we create
              strategies that resonate.
            </p>
          </motion.div>

          {/* Feature 4 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
          >
            <BarChart3 className="w-12 h-12 text-emerald-600 mb-4" />
            <h3 className="font-semibold text-lg text-gray-900">
              Real-Time Analytics
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              Track delivery rates, open rates, and customer engagement
              effortlessly.
            </p>
          </motion.div>
        </div>
      </div>
    </section>





     <section className="relative bg-gradient-to-br from-indigo-50 via-blue-100 to-purple-100 py-20 px-6 md:px-12 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-300 rounded-full blur-3xl opacity-25 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900 text-center"
        >
          Bulk SMS Marketing in Dubai Made Easy
        </motion.h2>

        {/* Intro Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 text-lg text-gray-700 text-center max-w-3xl mx-auto"
        >
          Looking for bulk SMS marketing in Dubai? <span className="font-semibold text-indigo-700">DIGINTRA</span> makes it simple and efficient. Whether you need to send thousands of messages in one go or run a continuous engagement campaign, our platform ensures flawless execution.
        </motion.p>

        {/* Features Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
          >
            <Megaphone className="w-10 h-10 text-indigo-600 mb-4" />
            <h3 className="font-semibold text-lg text-gray-900">Product Launches & Promotions</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Spread the word instantly when launching a product or promoting new services.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
          >
            <Gift className="w-10 h-10 text-indigo-600 mb-4" />
            <h3 className="font-semibold text-lg text-gray-900">Seasonal Offers & Discounts</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Run timely campaigns with attractive offers and limited-time deals.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
          >
            <CalendarCheck className="w-10 h-10 text-indigo-600 mb-4" />
            <h3 className="font-semibold text-lg text-gray-900">Appointment Reminders</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Send automated SMS reminders to reduce no-shows and missed appointments.
            </p>
          </motion.div>

          {/* Feature 4 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
          >
            <CalendarDays className="w-10 h-10 text-indigo-600 mb-4" />
            <h3 className="font-semibold text-lg text-gray-900">Event Invitations</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Invite and confirm attendance for events, webinars, or product demos.
            </p>
          </motion.div>

          {/* Feature 5 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
          >
            <MessageSquare className="w-10 h-10 text-indigo-600 mb-4" />
            <h3 className="font-semibold text-lg text-gray-900">Customer Feedback & Surveys</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Collect valuable insights from your customers through quick SMS surveys.
            </p>
          </motion.div>
        </div>

        {/* Closing Text */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-lg text-gray-800 text-center max-w-3xl mx-auto"
        >
          By merging high reach with cost-effectiveness, bulk SMS marketing in Dubai provides an unbeatable ROI for businesses across industries.
        </motion.p>
      </div>
    </section>


    <section className="relative bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 text-white py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Comprehensive SMS Marketing Services in Dubai
        </motion.h2>
        <motion.p
          className="text-lg mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          At DIGINTRA, we go beyond sending messages. We offer complete SMS marketing services in Dubai 
          that cover everything from campaign strategy to reporting.
        </motion.p>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-left shadow-lg hover:shadow-2xl transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <div className="flex items-center justify-center w-14 h-14 bg-white/20 rounded-full mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm opacity-90">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>


 <section className="relative bg-gradient-to-br from-indigo-50 via-blue-100 to-purple-100 text-black py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Industries We Serve
        </motion.h2>
        <motion.p
          className="text-lg mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Our expertise in SMS marketing in Dubai spans multiple industries, ensuring campaigns that
          resonate with your customers and drive conversions.
        </motion.p>

        {/* Industries Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {industries.map((industry, idx) => (
            <motion.div
              key={idx}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <div className="flex items-center justify-center w-14 h-14 bg-white/20 rounded-full mb-4">
                {industry.icon}
              </div>
              <h3 className="text-xl font-semibold">{industry.title}</h3>
            </motion.div>
          ))}
        </div>

        {/* Partner with DIGINTRA Section */}
        <motion.div
          className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 md:p-10 shadow-lg max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Partner with DIGINTRA Today
          </h3>
          <p className="text-lg mb-6">
            Ready to take your customer engagement to the next level? DIGINTRA is your ideal partner
            for SMS marketing in Dubai. We combine technology, expertise, and creativity to deliver
            campaigns that make an impact.
          </p>
          <p className="mb-6">
            Don’t let your message get lost in the crowd. Reach your audience instantly and effectively
            with DIGINTRA’s powerful SMS marketing solutions.
          </p>
          <motion.a
            href="/contact-us"
            className="inline-block px-6 py-3 bg-white text-green-700 font-semibold rounded-xl shadow hover:bg-gray-100 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us Today
          </motion.a>
        </motion.div>
      </div>
    </section>





























   {/* fourth content */}
 





















   



   




    {/* fifth content */}

    <Client/>

{/* sixth content */}

<Getstarted/>

   
   <Footer/>
   </>
  )
}
