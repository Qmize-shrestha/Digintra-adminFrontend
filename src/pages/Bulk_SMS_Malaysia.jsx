
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
import bulksmsmalaysia from '../assets/malaysiaheroImage.png';
import ukImage from '../assets/bulkImageAustralia.webp';
import BulkSMSAustraliaImages from '../assets/bulksmsAus.jpg';
import Hreflang from "../HrefComp";
import { hreflangConfig } from "../HreflangConfig";



export default function Bulk_sms_provider_abudhabi() {
    
    
const faqs = [
  {
    q: "What is Bulk SMS Malaysia?",
    a: "Bulk SMS Malaysia allows businesses to send thousands of SMS instantly for promotions, OTPs, alerts, and notifications."
  },
  {
    q: "Why should I choose DIGINTRA for Bulk SMS in Malaysia?",
    a: "DIGINTRA offers high delivery, secure routes, competitive pricing, a simple dashboard, and 24/7 support."
  },
  {
    q: "Is DIGINTRA a licensed bulk SMS provider in Malaysia?",
    a: "Yes. DIGINTRA works with authorized telecom partners and follows Malaysian messaging regulations."
  },
  {
    q: "How fast are SMS messages delivered?",
    a: "Most messages are delivered within 1–5 seconds based on route and traffic conditions."
  },
  {
    q: "Can I run SMS marketing campaigns with DIGINTRA?",
    a: "Yes. You can send promotions, offers, announcements, and customer updates easily."
  },
  {
    q: "Do you provide SMS Gateway API for Malaysia?",
    a: "Yes. We offer a developer-friendly API for websites, CRMs, ERPs, and mobile apps."
  },
  {
    q: "What types of messages can I send?",
    a: "Promotional SMS, Transactional SMS, API-based automation, and Two-way messaging."
  },
  {
    q: "Do you support Sender ID registration?",
    a: "Yes. Custom Sender IDs are supported and subject to approval."
  },
  {
    q: "How much does Bulk SMS Malaysia cost?",
    a: "Pricing depends on volume and route type. We offer affordable plans with discounts on bulk usage."
  },
  {
    q: "Is there a minimum purchase requirement?",
    a: "Low-volume starter plans are available. Larger packs give better rates."
  },
  {
    q: "Can I schedule SMS in advance?",
    a: "Yes. You can schedule one-time or recurring campaigns easily."
  }
];

    const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


      useEffect(()=>{
        window.scrollTo(0,0);
      },[])
  return (
    <>
      <Hreflang links={hreflangConfig} />
    <Helmet>
    <meta name="robots" content="index, follow" />

      <title>Bulk SMS Malaysia | Bulk SMS Service in Malaysia</title>
      <meta name="description" content=' Send fast, secure & affordable Bulk SMS in Malaysia with DIGINTRA. High delivery rates, SMS marketing, API gateway, and real-time tracking. Start messaging today!

'/>
 <meta name="keywords" content="Bulk SMS provider in Malaysia, SMS Broadcast Malaysia
" />
    <link rel="canonical" href="https://digintra.com/bulk-sms-malaysia" />
    </Helmet>


     <section className="w-full bg-sky-950 text-white pt-[120px] pb-[20px] md:pt-[195px] md:pb-[150px]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    
        {/* Phone Image Left */}
        <div className="flex justify-center md:justify-center bg-gradient-to-br from-blue-300 to-orange-300 py-10 rounded-3xl">
          <img 
            src={bulksmsmalaysia}
            alt="Bulk SMS UK Phone"
            className="w-[260px] md:w-[520px] drop-shadow-2xl"
          />
        </div>
    
        {/* Content Right */}
        <div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-center md:text-left">
            Bulk SMS Solutions for  
            <span className="text-[#F64F6A]"> Malaysia Businesses</span>
          </h1>
    
          <p className="text-white/80 mt-4 text-base md:text-lg leading-7 text-center md:text-left">
           Send bulk SMS messages to Malaysia, ensuring rapid, trustworthy, and high-delivery messaging, including promotional and transactional content at a cost-effective price.
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






    <section className="bg-sky-950 text-white py-16 px-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-5">
            Bulk SMS in Malaysia Made Simple
          </h2>

          <p className="text-gray-300 mb-4">
            Over 90% of people in Malaysia use mobile phones daily. This makes SMS the fastest way to reach your customers.
          </p>

          <p className="text-gray-300 mb-4">
            Unlike emails and social media, Bulk SMS sends your message directly to your customer’s phone within seconds.
          </p>

          <p className="text-gray-300">
            Send OTPs, promotions, reminders, and alerts easily with DIGINTRA’s reliable Bulk SMS platform.
          </p>
        </div>

        {/* Feature Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Why Choose DIGINTRA?</h3>

          <ul className="space-y-3 text-gray-200">
            <li>✅ Fast SMS delivery</li>
            <li>✅ High open rates</li>
            <li>✅ Simple dashboard</li>
            <li>✅ OTP & marketing SMS</li>
            <li>✅ Reliable gateway</li>
          </ul>
        </div>

      </div>
    </section>



    <section className="bg-gradient-to-br from-white via-yellow-50 to-yellow-100 py-20 px-5">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Why Choose DIGINTRA for Bulk SMS in Malaysia
          </h2>

          <p className="text-gray-600 mt-4">
            As a trusted Bulk SMS service provider in Malaysia, we help businesses
            communicate faster with secure routes, powerful tools, and affordable pricing.
          </p>

          <p className="text-gray-600 mt-2">
            DIGINTRA is built for brands that want speed, reliability, and scalable messaging.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Feature Card */}
          {[
            {
              title: "High Delivery Rates",
              desc: "Premium SMS routes ensure your messages reach inboxes faster and reliably."
            },
            {
              title: "Real-Time Analytics",
              desc: "Track delivery, status, and performance with live reporting tools."
            },
            {
              title: "Instant SMS Delivery",
              desc: "Deliver messages in seconds across Malaysia and overseas."
            },
            {
              title: "Enterprise-Level Security",
              desc: "Protect customer data with advanced encryption and secure networks."
            },
            {
              title: "Easy API Integration",
              desc: "Connect with CRMs, websites, and apps without complexity."
            },
            {
              title: "24/7 Expert Support",
              desc: "Our team is always ready to assist you when you need help."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-7 shadow-lg hover:shadow-2xl transition-all duration-300 border border-yellow-100"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

        {/* Bottom Text */}
        <div className="text-center mt-14 max-w-3xl mx-auto">
          <p className="text-gray-700">
            Whether you’re running SMS marketing in Malaysia or sending transactional alerts,
            DIGINTRA ensures smooth delivery and reliable communication every time.
          </p>
        </div>

      </div>
    </section>



           <section className="bg-gray-50 py-16 px-5">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Types of Bulk SMS Services in Malaysia
          </h2>
          <p className="text-gray-600 mt-4">
            DIGINTRA offers flexible messaging solutions designed to match different business needs.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Promotional SMS */}
          <div className="bg-white rounded-xl p-7 shadow hover:shadow-xl transition-all">
            <h3 className="text-lg font-semibold mb-3">Promotional SMS</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>✅ Offers & discounts</li>
              <li>✅ Festival promotions</li>
              <li>✅ Product launches</li>
              <li>✅ Event invitations</li>
            </ul>
          </div>

          {/* Transactional SMS */}
          <div className="bg-white rounded-xl p-7 shadow hover:shadow-xl transition-all">
            <h3 className="text-lg font-semibold mb-3">Transactional SMS</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>✅ OTP & verification codes</li>
              <li>✅ Payment confirmations</li>
              <li>✅ Order updates</li>
              <li>✅ Account alerts</li>
            </ul>
          </div>

          {/* SMS Gateway API */}
          <div className="bg-white rounded-xl p-7 shadow hover:shadow-xl transition-all">
            <h3 className="text-lg font-semibold mb-3">
              SMS Gateway Malaysia (API SMS)
            </h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>✅ Easy API integration</li>
              <li>✅ High throughput messaging</li>
              <li>✅ Secure & reliable delivery</li>
            </ul>
          </div>

          {/* Voice & WhatsApp */}
          <div className="bg-white rounded-xl p-7 shadow hover:shadow-xl transition-all">
            <h3 className="text-lg font-semibold mb-3">
              Voice SMS & WhatsApp Messaging
            </h3>
            <p className="text-sm text-gray-600">
              Reach customers through voice calls and WhatsApp for higher engagement and faster response.
            </p>
          </div>

        </div>

      </div>
    </section>


        
         <section className="bg-white py-16 px-5">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Industries That Benefit from Our Bulk SMS in Malaysia
          </h2>
          <p className="text-gray-600 mt-4">
            DIGINTRA provides a flexible Bulk SMS platform trusted by businesses across industries.
          </p>
        </div>

        {/* Industry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {[
            {
              title: "E-Commerce & Retail",
              desc: "Send offers, confirm orders, and drive repeat sales."
            },
            {
              title: "Banking & Finance",
              desc: "Send OTPs, account updates, and important alerts securely."
            },
            {
              title: "Education",
              desc: "Notify students about exams, announcements, and fees."
            },
            {
              title: "Healthcare",
              desc: "Send appointment reminders and health alerts to patients."
            },
            {
              title: "Logistics",
              desc: "Update customers about delivery and tracking status."
            },
            {
              title: "Telecommunications",
              desc: "Send recharge alerts and service activation messages."
            },
            {
              title: "Real Estate",
              desc: "Promote projects and follow up with leads instantly."
            }
          ].map((industry, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all bg-gray-50"
            >
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                {industry.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {industry.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>





    <section className="bg-gray-900 text-white py-16 px-5">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Features of DIGINTRA Bulk SMS Malaysia
          </h2>
          <p className="text-gray-400 mt-4">
            Everything you need to manage SMS campaigns smoothly and securely.
          </p>
        </div>

        {/* Feature List */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 text-lg">

          {[
            "User-Friendly Dashboard",
            "Unlimited Sender IDs (Subject to Approval)",
            "Bulk Upload via Excel & CSV",
            "High-Speed SMS Processing",
            "Detailed Delivery Reports & Analytics",
            "Two-Way Messaging (Optional)",
            "Multi-Language Support (English, Malay, Chinese & more)",
            "Secure & Encrypted Messaging Routes"
          ].map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-yellow-400 text-xl">✔</span>
              <span className="text-gray-200">{feature}</span>
            </li>
          ))}

        </ul>

      </div>
    </section>




    <section className="bg-gradient-to-br from-yellow-50 via-white to-yellow-100 py-16 px-5">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Bulk SMS Malaysia Pricing
          </h2>
          <p className="text-gray-600 mt-4">
            Transparent and flexible pricing based on your message volume.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Left Points */}
          <ul className="space-y-4 text-gray-800 text-lg">
            {[
              "Competitive per-SMS rates",
              "Discounts on high-volume packages",
              "No hidden charges",
              "Premium or standard routing options"
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <span className="text-yellow-500 text-xl">✔</span>
                {item}
              </li>
            ))}
          </ul>

          {/* Right Callout */}
          <div className="bg-white border border-yellow-200 rounded-xl p-8 shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Need Custom Pricing?
            </h3>
            <p className="text-gray-600 mb-5">
              Get pricing based on your exact SMS volume and route preference.
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-full font-semibold transition-all">
              Contact Us
            </button>
          </div>

        </div>

      </div>
    </section>

      



         <section className="bg-gray-100 py-16 px-5">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            How Our Bulk SMS UK Process Works (Also Used in Malaysia)
          </h2>
          <p className="text-gray-600 mt-4">
            A simple workflow designed for speed, accuracy, and scale.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8">

          {[
            {
              step: "01",
              title: "Create Your Account",
              desc: "Quick registration with instant dashboard access."
            },
            {
              step: "02",
              title: "Choose Your SMS Route & Package",
              desc: "Select promotional or transactional routes based on your needs."
            },
            {
              step: "03",
              title: "Upload Contacts or Connect via API",
              desc: "Import CSV files or integrate with your system."
            },
            {
              step: "04",
              title: "Compose Your Message",
              desc: "Use our editor or message templates for fast campaigns."
            },
            {
              step: "05",
              title: "Send & Track",
              desc: "Send instantly and monitor real-time delivery reports."
            }
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-6">
              
              {/* Step Counter */}
              <div className="text-4xl font-bold text-yellow-500 w-16">
                {item.step}
              </div>

              {/* Text */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>




    <section className="bg-gray-900 text-white py-16 md:pb-[120px] px-5">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 mt-3">
            Everything you need to know about Bulk SMS in Malaysia.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-lg overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
                onClick={() => toggle(index)}
              >
                <span className="font-medium">{item.q}</span>
                <span className="text-yellow-400 text-xl">
                  {openIndex === index ? "–" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-5 pb-5 text-gray-300">
                  {item.a}
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
