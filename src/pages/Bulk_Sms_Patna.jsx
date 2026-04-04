import React, { useState, useEffect } from 'react';
import "./bulk.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';
import {
  FaUserPlus,
  FaWhatsapp
} from 'react-icons/fa';
import { Helmet } from 'react-helmet';

import Footer from '../components/Footer';
import Client from '../components/Client';
import Getstarted from '../components/Getstarted';
import Businesskeycomp from '../components/Businesskeycomp';

// Assets
import icons3 from "../assets/business.png";

// Key features images
import ReliDelivery from '../assets/key1.jpg';
import UserFriend from '../assets/key2.jpg';
import API from '../assets/key3.jpg';
import Customize from '../assets/key4.jpg';
import Transactional from '../assets/key5.jpg';
import Time from '../assets/key6.jpg';
import Pricing from '../assets/key_7.jpg';
import Management from '../assets/key8.jpg';
import Security from '../assets/key9.jpg';

// Industries
import Hotel from '../assets/hotel.png';
import Education from '../assets/education.png';
import Retail from '../assets/retail.png';
import Home from '../assets/home.png';
import Health from '../assets/health.png';
import CostEffect from '../assets/costeffective.png';
import Personalisation from '../assets/personalisation.png';

export default function Bulk_sms_provider_patna() {
  const [activeQues, setActiveQues] = useState(null);

  const toggleQues = (id) => {
    setActiveQues(activeQues === id ? null : id);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <meta name="robots" content="index, follow" />
        <title>Bulk SMS Provider in Patna, Bihar | SMS Services in Patna</title>
        <meta
          name="description"
          content="Bulk SMS provider in Patna. Boost your outreach with cost-effective SMS campaigns. Signup DIGINTRA Today!"
        />
        <meta
          name="keywords"
          content="bulk sms patna, bulk sms provider in patna, bulk sms service in patna, bulk sms company in patna, bulk sms service provider in patna"
        />
        <link
          rel="canonical"
          href="https://digintra.com/bulk-sms-provider-in-patna"
        />
      </Helmet>

      {/* Hero Section */}
      <div className="patterncon relative w-auto pt-[230px] lg:h-[720px] pb-[50px]">
        <div className="absolute inset-0 backdrop-blur-md w-full h-full"></div>
        <div className="w-auto relative z-10 h-auto">
          <div className="w-[310px] lg:w-[1140px] py-10 h-auto mx-auto">
            <h1
              className="text-center text-[30px] font-semibold"
              style={{ fontFamily: "'Montserrat',sans-serif" }}
            >
              Bulk SMS Service Provider in Patna
            </h1>
            <p
              className="text-center px-4 mt-4"
              style={{ fontFamily: "'Poppins',sans-serif" }}
            >
              Grow your Business with DIGINTRA A2P Messaging Services
            </p>
            <p
              className="text-center px-4 mt-4"
              style={{ fontFamily: "'Poppins',sans-serif" }}
            >
              All it takes is <strong>30 seconds.</strong> Simply click the
              sign-up button below and you will receive FREE DEMO Credit to
              test.
            </p>
            <div className="h-auto mx-auto px-12 mt-7 flex md:justify-center items-center gap-4 md:gap-8 flex-col md:flex-row">
              <a href="https://sms-login.digintra.com/User/SignUp">
                <button className="border-b-2 border-[#1e3b8d] ml-2 lg:ml-0 bg-gradient-to-tr from-[#3e8646] to-[#2fac13] w-[220px] h-16 rounded-lg shadow-xl transition-transform transform hover:scale-110 hover:shadow-2xl text-white font-bold flex items-center justify-center gap-2">
                  <FaUserPlus className="h-6 w-6" />
                  Register Now
                </button>
              </a>
              <a href="https://api-wa.co/nVOl41">
                <button className="border-b-2 text-white border-[#1e3b8d] mt-6 md:mt-0 ml-2 lg:ml-0 bg-gradient-to-tr from-[#00b09b] to-[#96c93d] w-[220px] h-16 rounded-lg font-bold shadow-xl transition-transform transform hover:scale-110 hover:shadow-2xl flex items-center justify-center gap-2">
                  <FaWhatsapp className="h-6 w-6" />
                  Chat on WhatsApp
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Why DIGINTRA Section */}
      <div className="w-auto bg-white h-auto">
        <div className="w-[310px] lg:w-[1140px] lg:flex lg:flex-row-reverse h-auto mx-auto">
          <img
            src={icons3}
            alt="Bulk SMS Provider in Patna"
            className="lg:w-[510px]"
          />
          <div className="pt-[50px] space-y-4">
            <h2
              className="text-xl text-center lg:text-left"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <strong>
                Connecting Patna: Why Your Business Needs a Reliable Bulk SMS
                Provider
              </strong>
            </h2>
            <p style={{ fontFamily: "'Poppins',sans-serif" }}>
              Looking for a reliable bulk SMS service provider in Patna to grow
              your business and engage customers effectively? At DIGINTRA, we
              deliver fast, secure, and affordable bulk SMS services in Patna
              designed to help startups, SMEs, and enterprises reach their
              audience instantly. With high delivery rates, powerful
              infrastructure, and advanced features, our SMS solutions ensure
              maximum impact for your campaigns.
            </p>
          </div>
        </div>
      </div>




      {/* Why Choose DIGINTRA Section */}
<div className="w-auto bg-gray-50 py-16">
  <div className="w-[310px] lg:w-[1140px] mx-auto text-center">
    <h2
      className="text-3xl md:text-4xl font-bold text-gray-800"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      Why Choose <span className="text-green-600">DIGINTRA</span> as Your Bulk SMS Company in Patna?
    </h2>
    <p
      className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      DIGINTRA is trusted by businesses as the best bulk SMS company in Patna,
      offering scalable messaging solutions that drive results. Here’s why brands prefer us:
    </p>

    {/* Features Grid */}
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "Fast & Reliable Delivery",
          desc: "Guaranteed high SMS delivery rate for every campaign.",
        },
        {
          title: "Easy-to-Use SMS Panel",
          desc: "Simple dashboard with advanced tools for managing bulk messaging.",
        },
        {
          title: "Affordable Packages",
          desc: "Flexible pricing plans for small, medium, and large businesses.",
        },
        {
          title: "24/7 Customer Support",
          desc: "Dedicated assistance to ensure smooth operations.",
        },
        {
          title: "Custom Messaging Solutions",
          desc: "Promotional, transactional, OTP, and API integration available.",
        },
      ].map((item, idx) => (
        <div
          key={idx}
          className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1"
        >
          <div className="flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-full mx-auto mb-4">
            ✅
          </div>
          <h3
            className="text-xl font-semibold text-gray-800"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {item.title}
          </h3>
          <p
            className="mt-2 text-gray-600"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</div>





{/* Our Bulk SMS Services Section */}
<div className="w-auto bg-white py-16">
  <div className="w-[310px] lg:w-[1140px] mx-auto text-center">
    <h2
      className="text-3xl md:text-4xl font-bold text-gray-800"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      Our Bulk SMS Services in Patna
    </h2>
    <p
      className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      We provide a wide range of SMS solutions customized to your industry
      needs. Whether you want to send <strong>1,000</strong> or{" "}
      <strong>1 million</strong> messages, DIGINTRA is the most trusted bulk SMS
      provider in Patna delivering scalable solutions.
    </p>

    {/* Services Grid */}
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          title: "Promotional SMS",
          desc: "Promote discounts, offers, and campaigns instantly.",
          icon: "📢",
        },
        {
          title: "Transactional SMS",
          desc: "Deliver OTPs, alerts, updates, and notifications in seconds.",
          icon: "⚡",
        },
        {
          title: "API Integration",
          desc: "Connect bulk SMS with your website, CRM, or mobile application.",
          icon: "🔗",
        },
        {
          title: "Reports & Analytics",
          desc: "Monitor campaign performance with detailed delivery insights.",
          icon: "📊",
        },
      ].map((item, idx) => (
        <div
          key={idx}
          className="p-8 bg-gradient-to-tr from-green-50 to-green-100 rounded-2xl shadow-md hover:shadow-2xl transition-all transform hover:-translate-y-2"
        >
          <div className="flex items-center justify-center w-14 h-14 bg-green-600 text-white text-2xl rounded-full mx-auto mb-6">
            {item.icon}
          </div>
          <h3
            className="text-xl font-semibold text-gray-800 mb-2"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {item.title}
          </h3>
          <p
            className="text-gray-600"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</div>




{/* Who Can Benefit Section */}
<div className="w-auto bg-gradient-to-r from-green-50 to-green-100 py-16">
  <div className="w-[310px] lg:w-[1140px] mx-auto text-center">
    <h2
      className="text-3xl md:text-4xl font-bold text-gray-800"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      Who Can Benefit from Our Bulk SMS Service in Patna?
    </h2>
    <p
      className="mt-4 text-gray-700 text-lg max-w-3xl mx-auto"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      Our services are designed to help businesses across industries achieve
      better communication. With DIGINTRA, you get the most reliable and
      cost-effective bulk SMS service in Patna for your industry.
    </p>

    {/* Benefit List */}
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
      {[
        {
          title: "Retail & E-commerce",
          desc: "Drive sales through targeted promotional campaigns.",
          icon: "🛍️",
        },
        {
          title: "Healthcare & Hospitals",
          desc: "Send reminders, reports, and health alerts instantly.",
          icon: "🏥",
        },
        {
          title: "Schools & Colleges",
          desc: "Share announcements, results, and updates with parents and students.",
          icon: "🎓",
        },
        {
          title: "Banks & Financial Institutions",
          desc: "Deliver secure OTPs and transaction alerts.",
          icon: "🏦",
        },
        {
          title: "Restaurants & Hotels",
          desc: "Promote offers, events, and loyalty programs effectively.",
          icon: "🍽️",
        },
        {
          title: "Startups & Enterprises",
          desc: "Scale customer communication at affordable costs.",
          icon: "🚀",
        },
      ].map((item, idx) => (
        <div
          key={idx}
          className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all"
        >
          <div className="flex items-center justify-center w-12 h-12 bg-green-600 text-white text-2xl rounded-full">
            {item.icon}
          </div>
          <div>
            <h3
              className="text-lg font-semibold text-gray-800"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {item.title}
            </h3>
            <p
              className="text-gray-600 mt-1"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>




{/* Why DIGINTRA is Best Section */}
<div className="w-auto bg-gray-900 py-16">
  <div className="w-[310px] lg:w-[1140px] mx-auto text-center text-white">
    <h2
      className="text-3xl md:text-4xl font-bold"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      Why DIGINTRA is the Best Bulk SMS Provider in Patna
    </h2>
    <p
      className="mt-4 text-gray-300 text-lg max-w-3xl mx-auto"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      We are more than just another bulk SMS company in Patna; we are your
      <span className="text-green-400 font-semibold"> growth partner</span>,
      helping businesses improve communication, engagement, and conversions.
    </p>

    {/* Checklist */}
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
      {[
        "Trusted by leading brands and fast-growing businesses.",
        "Transparent pricing with no hidden charges.",
        "Local presence in Patna for personalized support.",
        "Advanced features to make campaigns more effective.",
      ].map((point, idx) => (
        <div
          key={idx}
          className="flex items-start gap-4 p-6 bg-gray-800 rounded-xl shadow-lg hover:bg-gray-700 transition-colors"
        >
          <div className="flex items-center justify-center w-10 h-10 bg-green-500 text-white rounded-full text-xl">
            ✔
          </div>
          <p
            className="text-gray-200 text-lg"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {point}
          </p>
        </div>
      ))}
    </div>
  </div>
</div>



{/* Start Campaign CTA Section */}
<div className="w-auto bg-gradient-to-r from-green-600 via-green-500 to-green-700 py-16 text-center text-white relative overflow-hidden">
  {/* Decorative Background */}
  <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')]"></div>
  
  <div className="relative z-10 w-[310px] lg:w-[1140px] mx-auto">
    <h2
      className="text-3xl md:text-4xl font-bold mb-4"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      Start Your Bulk SMS Campaign Today!
    </h2>
    <p
      className="text-lg md:text-xl max-w-3xl mx-auto mb-8"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      Boost your marketing and customer communication with{" "}
      <span className="font-semibold">DIGINTRA</span> – the best bulk SMS service provider in Patna.
    </p>
    <p
      className="text-lg mb-10"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      👉 Get in touch today for a free demo and discover our affordable packages
      tailored for your business.
    </p>

    {/* Contact Info */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <div className="bg-white/10 p-6 rounded-xl shadow-lg hover:bg-white/20 transition-all">
        <p className="text-xl font-bold">📞 Call Us</p>
        <a href="tel:09097909079" className="text-lg mt-2 block text-white">
          09097909079
        </a>
      </div>
      <div className="bg-white/10 p-6 rounded-xl shadow-lg hover:bg-white/20 transition-all">
        <p className="text-xl font-bold">📧 Email</p>
        <a
          href="mailto:support@digintra.com"
          className="text-lg mt-2 block text-white"
        >
          support@digintra.com
        </a>
      </div>
      <div className="bg-white/10 p-6 rounded-xl shadow-lg hover:bg-white/20 transition-all">
        <p className="text-xl font-bold">🌐 Website</p>
        <a
          href="https://digintra.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg mt-2 block text-white underline"
        >
          digintra.com
        </a>
      </div>
    </div>

    {/* CTA Button */}
    <a
      href="https://sms-login.digintra.com/User/SignUp"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="px-8 py-4 bg-white text-green-700 font-bold text-lg rounded-full shadow-xl hover:scale-105 transition-transform">
        🚀 Get Started Now
      </button>
    </a>
  </div>
</div>



      {/* Other Sections */}
      <Client />
      <Getstarted />
      <Footer />
    </>
  );
}
