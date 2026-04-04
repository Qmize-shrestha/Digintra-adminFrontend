
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
import bulksmsmalaysia from '../assets/singaporeheroImage.png';
import ukImage from '../assets/bulkImageAustralia.webp';
import BulkSMSAustraliaImages from '../assets/bulksmsAus.jpg';
import Hreflang from "../HrefComp";
import { hreflangConfig } from "../HreflangConfig";


export default function Bulk_sms_provider_abudhabi() {
    
    
const faqs = [
  {
    q: "What is bulk SMS and how does it work in Singapore?",
    a: "Bulk SMS lets businesses send large volumes of messages such as offers, OTPs, updates, and alerts. DIGINTRA uses a high-performance SMS gateway to ensure fast delivery across Singapore networks."
  },
  {
    q: "Why should I choose DIGINTRA for bulk SMS service in Singapore?",
    a: "DIGINTRA offers high delivery rates, PDPA-compliant systems, real-time tracking, Sender ID options, cost-effective pricing, and enterprise-ready APIs."
  },
  {
    q: "What industries benefit most from SMS marketing in Singapore?",
    a: "Retail, e-commerce, healthcare, finance, logistics, education, hospitality, and service businesses benefit the most from SMS communication."
  },
  {
    q: "Do you provide promotional and transactional SMS?",
    a: "Yes, DIGINTRA supports promotional campaigns and transactional messages such as OTPs, alerts, confirmations, and reminders."
  },
  {
    q: "How fast are SMS delivered in Singapore?",
    a: "Most messages are delivered within seconds using direct routes and high-speed messaging infrastructure."
  },
  {
    q: "Is your platform PDPA-compliant?",
    a: "Yes. DIGINTRA follows strict data security measures and complies with PDPA standards for safe messaging."
  },
  {
    q: "What is the cost of Bulk SMS Singapore?",
    a: "Pricing depends on message volume, routing, sender ID, and API usage. We offer flexible and affordable plans with custom quotes."
  },
  {
    q: "Can I integrate DIGINTRA SMS API with my software?",
    a: "Yes. Our REST API allows seamless integration with websites, CRMs, ERPs, POS systems, and mobile apps."
  },
  {
    q: "Do you provide campaign analytics?",
    a: "Yes. You can track delivery status, link clicks (with short URLs), and campaign performance via dashboard reports."
  },
  {
    q: "How can I get started with DIGINTRA?",
    a: "Register, upload contacts, compose your message, and send campaigns instantly. Our support team is always available for help."
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

      <title>Bulk SMS Singapore | Reliable SMS Marketing & Gateway Service</title>
      <meta name="description" content=' Boost engagement with DIGINTRA’s bulk SMS Singapore solutions. High delivery rates, API SMS gateway, affordable pricing & enterprise-grade SMS marketing.

'/>
 <meta name="keywords" content="bulk SMS Singapore, bulk SMS service Singapore, SMS marketing Singapore, SMS gateway Singapore, SMS marketing company in Singapore
" />
    <link rel="canonical" href="https://digintra.com/bulk-sms-singapore" />
    </Helmet>


     <section className="w-full bg-sky-950 text-white pt-[120px] pb-[20px] md:pt-[195px] md:pb-[150px]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    
        {/* Phone Image Left */}
        <div className="flex justify-center md:justify-center bg-gradient-to-br from-blue-300 to-orange-300 py-10 rounded-3xl">
          <img 
            src={bulksmsmalaysia}
            alt="Bulk SMS Malaysia"
            className="w-[260px] md:w-[520px] drop-shadow-2xl"
          />
        </div>
    
        {/* Content Right */}
        <div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-center md:text-left">
            Bulk SMS Solutions for  
            <span className="text-[#F64F6A]"> Singapore Businesses</span>
          </h1>
    
          <p className="text-white/80 mt-4 text-base md:text-lg leading-7 text-center md:text-left">
           Send bulk SMS messages to Singapore, ensuring rapid, trustworthy, and high-delivery messaging, including promotional and transactional content at a cost-effective price.
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





    <section className="bg-gradient-to-br from-white via-gray-50 to-blue-50 py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Why Choose DIGINTRA for Bulk SMS in Singapore
          </h2>

          <p className="text-gray-600 mt-4">
            DIGINTRA is one of the most trusted SMS marketing providers in Singapore,
            delivering fast, accurate, and scalable communication for modern businesses.
          </p>

          <p className="text-gray-600 mt-3">
            Our technology is designed to help you reach customers reliably while ensuring
            compliance with Singapore’s data protection guidelines.
          </p>

          <p className="text-gray-700 mt-4 font-medium">
            Our expert team ensures your campaigns stay optimized, effective, and relevant
            to your audience.
          </p>
        </div>

        {/* Right Features */}
        <div className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-xl p-8 shadow-sm">
          <ul className="space-y-4 text-gray-800">

            <li className="flex items-start gap-3">
              <span className="text-blue-500 text-xl">✓</span>
              High delivery rates across all major Singapore telecom networks
            </li>

            <li className="flex items-start gap-3">
              <span className="text-blue-500 text-xl">✓</span>
              Real-time analytics & tracking to measure campaign success
            </li>

            <li className="flex items-start gap-3">
              <span className="text-blue-500 text-xl">✓</span>
              Secure and PDPA-compliant messaging platform
            </li>

            <li className="flex items-start gap-3">
              <span className="text-blue-500 text-xl">✓</span>
              24/7 professional customer support
            </li>

            <li className="flex items-start gap-3">
              <span className="text-blue-500 text-xl">✓</span>
              API-ready SMS Gateway for easy system integration
            </li>

          </ul>
        </div>

      </div>
    </section>




    <section className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            Types of Bulk SMS Services in Singapore
          </h2>
          <p className="text-gray-400 mt-3">
            DIGINTRA provides a complete set of SMS solutions built to fit every business need.
          </p>
        </div>

        {/* Services List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          <div className="border border-gray-700 rounded-xl p-6">
            <h3 className="font-semibold text-xl mb-2">Promotional SMS</h3>
            <p className="text-gray-400">
              Launch offers, promote products, and engage customers instantly.
            </p>
          </div>

          <div className="border border-gray-700 rounded-xl p-6">
            <h3 className="font-semibold text-xl mb-2">Transactional SMS</h3>
            <p className="text-gray-400">
              Send OTPs, invoices, confirmations, and service alerts.
            </p>
          </div>

          <div className="border border-gray-700 rounded-xl p-6">
            <h3 className="font-semibold text-xl mb-2">OTP & Authentication SMS</h3>
            <p className="text-gray-400">
              Deliver fast, secure verification messages through our SMS gateway.
            </p>
          </div>

          <div className="border border-gray-700 rounded-xl p-6">
            <h3 className="font-semibold text-xl mb-2">API Bulk SMS</h3>
            <p className="text-gray-400">
              Integrate with your CRM, website, or app using our high-speed API.
            </p>
          </div>

          <div className="border border-gray-700 rounded-xl p-6 sm:col-span-2 lg:col-span-1">
            <h3 className="font-semibold text-xl mb-2">Enterprise Messaging</h3>
            <p className="text-gray-400">
              Custom-built solutions for enterprises, banks, logistics, and retailers.
            </p>
          </div>

        </div>
      </div>
    </section>






      <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Industries That Benefit from Our Bulk SMS Service in Singapore
          </h2>
          <p className="text-gray-600 mt-4">
            Bulk messaging plays a vital role across industries. DIGINTRA supports businesses of
            all types with reliable and scalable messaging solutions.
          </p>
        </div>

        {/* Industry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {[ 
            {
              title: "Retail & E-Commerce",
              desc: "Promotions, flash sales, order updates"
            },
            {
              title: "Finance & Banking",
              desc: "OTPs, account alerts, loan updates"
            },
            {
              title: "Healthcare",
              desc: "Appointment reminders, patient updates"
            },
            {
              title: "Education",
              desc: "Exam alerts, announcements, fee reminders"
            },
            {
              title: "Hospitality & Travel",
              desc: "Booking confirmations, itineraries"
            },
            {
              title: "Logistics & Delivery",
              desc: "Tracking updates, pickup messages"
            },
            {
              title: "Food & Beverage",
              desc: "Offers, loyalty campaigns, re-engagement"
            }
          ].map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

        {/* Footer Line */}
        <div className="text-center mt-12 max-w-3xl mx-auto">
          <p className="text-gray-700">
            Our messaging solutions are customized to meet each industry's communication needs,
            helping businesses connect better and perform faster.
          </p>
        </div>

      </div>
    </section>




    <section className="bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Features of DIGINTRA Bulk SMS Singapore
          </h2>

          <p className="text-gray-400 mt-4 max-w-xl">
            Enjoy a powerful set of features designed for speed, security, and scale.
            Built for modern businesses that demand reliability and performance.
          </p>

          <p className="text-gray-300 mt-6 max-w-xl">
            DIGINTRA ensures your communication stays smooth, measurable, and scalable.
          </p>
        </div>

        {/* Feature List */}
        <div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8 text-lg">

            {[
              "High-Speed Delivery",
              "Smart Scheduling & Automation",
              "Custom Sender ID",
              "Personalised SMS with Dynamic Fields",
              "Campaign Reports & Analytics",
              "User-Friendly Dashboard",
              "Unicode Messaging for Multiple Languages",
              "Secure API Access",
              "Cloud-Based Platform with 99.9% Uptime"
            ].map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-blue-500 text-xl">➤</span>
                <span className="text-gray-200">{feature}</span>
              </li>
            ))}

          </ul>
        </div>

      </div>
    </section>



    <section className="bg-gradient-to-r from-white via-blue-50 to-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-64 items-center">

        {/* Left Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Bulk SMS Singapore Pricing
          </h2>

          <p className="text-gray-600 mt-4">
            DIGINTRA provides flexible and transparent pricing designed for businesses
            of every size.
          </p>

          <p className="text-gray-700 mt-4 font-medium">
            Packages are affordable while maintaining premium delivery quality.
          </p>
        </div>

        {/* Pricing Factors */}
        <ul className="text-gray-800  text-lg">
          {[
            "Number of messages",
            "Sender ID requirements",
            "Selected delivery routes",
            "API integration needs",
            "Total campaign volume"
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              <span className="text-blue-500 text-xl">✔</span>
              {item}
            </li>
          ))}
        </ul>

        

      </div>
    </section>




     <section className="bg-gray-950 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            How Our Bulk SMS Singapore Process Works
          </h2>
          <p className="text-gray-400 mt-4">
            A simple workflow designed for speed and success.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8">

          {[
            "Create Your Account with DIGINTRA",
            "Upload or Sync Contacts effortlessly",
            "Compose your SMS using templates or custom text",
            "Select target audience & schedule campaigns",
            "Send & track performance in real time",
            "Optimize using insights from detailed reports"
          ].map((text, index) => (
            <div key={index} className="flex items-start gap-6">
              <div className="text-blue-400 font-bold text-2xl min-w-[40px]">
                {index + 1}
              </div>
              <p className="text-gray-200 text-lg">{text}</p>
            </div>
          ))}

        </div>

        {/* Footer */}
        <div className="mt-14 text-center">
          <p className="text-gray-300">
            Every step is guided to help you run perfect SMS campaigns.
          </p>
        </div>

      </div>
    </section>




    <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Send Bulk SMS in Singapore with DIGINTRA?
        </h2>

        <p className="max-w-3xl mx-auto text-lg leading-relaxed mb-8">
          Reach customers faster and increase engagement with Singapore’s most reliable
          Bulk SMS platform. DIGINTRA delivers performance, accuracy and scalability for
          businesses that value communication.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-white text-blue-700 px-7 py-3 rounded-full font-semibold hover:scale-105 transition">
            Start Campaign
          </button>

          <button className="border-2 border-white px-7 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-700 transition">
            Get Quote
          </button>
        </div>

      </div>
    </section>






    <section className="bg-gray-950 text-white py-32 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            FAQs for Bulk SMS Singapore
          </h2>
          <p className="text-gray-400 mt-3">
            Answers to common questions about our SMS services in Singapore.
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
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full flex justify-between items-center p-5 text-left text-base md:text-lg"
              >
                <span>{item.q}</span>
                <span className="text-blue-400 text-xl">
                  {open === index ? "–" : "+"}
                </span>
              </button>

              {open === index && (
                <div className="px-5 pb-5 text-gray-300 text-sm md:text-base">
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
