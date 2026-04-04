
import React from "react";
import Footer from "../components/Footer.jsx";
import {Helmet} from "react-helmet";

// key features icons
import {
  FaShoppingCart,
  FaLock,
  FaHospital,
  FaUniversity,
  FaGlobe,
  FaHeadset,
  FaCode,
  FaCalendarAlt,
  FaBan,
  FaRocket,
} from "react-icons/fa";

// pricing section icons
import { TbPointerBolt } from "react-icons/tb";

// process icons
import {
  UserPlusIcon,
  UsersIcon,
  PencilSquareIcon,
  IdentificationIcon,
  PaperAirplaneIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";


// faq related
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import bulksmsgermany from '../assets/bulk-sms-germany.png';
import Hreflang from "../HrefComp";
import { hreflangConfig } from "../HreflangConfig";












const App = () => {


  // FAQ TOGGLE
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  // feature section related
   const featureList = [
    {
      id: "01",
      title: "GDPR-compliant SMS routing",
      desc: "We follow all European and German data-protection regulations to keep your customer data sicher und geschützt (safe and protected).",
      icon: "🔐",
    },
    {
      id: "02",
      title: "High delivery and conversion rates",
      desc: "Our direct carrier routes ensure maximum Zustellrate (delivery rate) with ultra-fast messaging.",
      icon: "🚀",
    },
    {
      id: "03",
      title: "Multilingual support (English & German)",
      desc: "Send SMS in Deutsch or any preferred language without any technical complexity.",
      icon: "🌍",
    },
    {
      id: "04",
      title: "Powerful SMS Gateway Germany",
      desc: "Integrate our SMS API into CRMs, apps, websites, or ERP systems effortlessly.",
      icon: "⚙️",
    },
    {
      id: "05",
      title: "Affordable & transparent pricing",
      desc: "We offer clear, flexible pricing without hidden fees.",
      icon: "💶",
    },
  ];


  // Bulk SMS section content Array
  const smsTypes = [
  {
    title: "Promotional Bulk SMS Germany",
    desc: "Perfect for marketing campaigns, discounts, product launches, and Kundenaktionen.",
  },
  {
    title: "Transactional SMS Germany",
    desc: "Send OTPs, alerts, confirmations, and system-generated notifications with real-time speed.",
  },
  {
    title: "SMS API Gateway Germany",
    desc: "Developers can use our powerful REST API to automate messaging at scale.",
  },
  {
    title: "Two-Way SMS Germany",
    desc: "Receive responses from customers directly—ideal for feedback, surveys, and customer service.",
  },
  {
    title: "Voice & Hybrid SMS Options",
    desc: "Combine SMS with voice alerts for higher engagement.",
  },
  ];


  // industries related content
  const industries = [
  {
    id: "01",
    title: "E-Commerce & Retail",
    desc: "Order updates, delivery alerts, flash sales notifications to engage customers in real time across Germany.",
  },
  {
    id: "02",
    title: "Banking & Finance",
    desc: "OTPs, transaction alerts, fraud notifications with secure and instant SMS communication.",
  },
  {
    id: "03",
    title: "Healthcare & Clinics",
    desc: "Appointment reminders, health alerts, patient notifications for better service delivery.",
  },
  {
    id: "04",
    title: "Education",
    desc: "Timetables, exam updates, admission alerts, and emergency notifications to students.",
  },
  {
    id: "05",
    title: "Real Estate",
    desc: "Property promotions, lead nurturing, client follow-ups using high-volume SMS campaigns.",
  },
  {
    id: "06",
    title: "Logistics & Transport",
    desc: "Tracking updates, driver alerts, delivery confirmations through automated SMS.",
  },
  {
    id: "07",
    title: "Hospitality & Tourism",
    desc: "Booking confirmations, seasonal offers, customer engagement messages.",
  },
  {
    id: "08",
    title: "Tech & SaaS",
    desc: "Authentication messages, user notifications, system alerts instantly.",
  },
  {
    id: "09",
    title: "NGOs & Government",
    desc: "Awareness campaigns, public alerts, citizen communication at scale.",
  },
  ];


  // key features array
  const points = [
    {
      id: "01",
      title: "E-Commerce & Retail",
      desc: "Order updates, delivery alerts, flash sales notifications to engage customers in real time.",
      icon: <FaShoppingCart />,
      color: "bg-blue-500",
    },
    {
      id: "02",
      title: "Banking & Finance",
      desc: "OTPs, transaction alerts, fraud notifications with secure and instant SMS communication.",
      icon: <FaLock />,
      color: "bg-cyan-500",
    },
    {
      id: "03",
      title: "Healthcare",
      desc: "Appointment reminders, patient alerts, emergency notifications instantly.",
      icon: <FaHospital />,
      color: "bg-green-500",
    },
    {
      id: "04",
      title: "Education",
      desc: "Admission alerts, exam schedules, fee reminders via bulk SMS.",
      icon: <FaUniversity />,
      color: "bg-lime-500",
    },
    {
      id: "05",
      title: "Logistics",
      desc: "Real-time package tracking and delivery communication.",
      icon: <FaGlobe />,
      color: "bg-yellow-500",
    },
    {
      id: "06",
      title: "Customer Support",
      desc: "24/7 multilingual support for all campaigns.",
      icon: <FaHeadset />,
      color: "bg-orange-500",
    },
    {
      id: "07",
      title: "Developer APIs",
      desc: "Seamless API integration for programmers.",
      icon: <FaCode />,
      color: "bg-red-500",
    },
    {
      id: "08",
      title: "Campaign Scheduling",
      desc: "Automated SMS campaigns with custom timing.",
      icon: <FaCalendarAlt />,
      color: "bg-pink-500",
    },
    {
      id: "09",
      title: "GDPR Compliance",
      desc: "Secure and compliant messaging platform for European standards.",
      icon: <FaBan />,
      color: "bg-purple-500",
    },
    {
      id: "10",
      title: "High Performance",
      desc: "Send millions of messages across Germany in seconds with smart routing.",
      icon: <FaRocket />,
      color: "bg-indigo-500",
    },
  ];

  // process cotent object
  const steps = [
  {
    step: "1",
    title: "Create Your Account",
    desc: "Sign up on DIGINTRA and access your dashboard instantly.",
    color: "bg-yellow-200",
    icon: UserPlusIcon,
  },
  {
    step: "2",
    title: "Upload or Add Contacts",
    desc: "Import your contact lists or sync your CRM easily.",
    color: "bg-purple-200",
    icon: UsersIcon,
  },
  {
    step: "3",
    title: "Compose Your Message",
    desc: "Write your SMS in Deutsch or English with personalization.",
    color: "bg-green-200",
    icon: PencilSquareIcon,
  },
  {
    step: "4",
    title: "Choose Sender ID & Route",
    desc: "Select promotional or transactional messaging routes.",
    color: "bg-orange-200",
    icon: IdentificationIcon,
  },
  {
    step: "5",
    title: "Send or Schedule",
    desc: "Send instantly or schedule campaigns in advance.",
    color: "bg-blue-200",
    icon: PaperAirplaneIcon,
  },
  {
    step: "6",
    title: "Track Performance",
    desc: "Monitor delivery, CTR, and engagement in real time.",
    color: "bg-pink-200",
    icon: ChartBarIcon,
  },
  ];


  // FAQ QUESTIONS
  const faqs = [
  {
    q: "What is Bulk SMS?",
    a: "Bulk SMS refers to sending large volumes of SMS messages to phone numbers for marketing, notifications, alerts, or customer engagement.",
  },
  {
    q: "Why should I use DIGINTRA for bulk SMS in Germany?",
    a: "DIGINTRA offers direct German carrier routes, fast delivery, multilingual support, GDPR-compliant messaging, and an easy-to-use SMS gateway with transparent pricing.",
  },
  {
    q: "Is DIGINTRA’s SMS platform GDPR compliant?",
    a: "Yes. We follow all EU and German Datenschutz regulations. Your customer data remains encrypted, safe, and fully compliant.",
  },
  {
    q: "What types of messages can I send in Germany?",
    a: "You can send promotional SMS (marketing, offers) and transactional SMS (OTPs, alerts, confirmations). SMS API integration is also available.",
  },
  {
    q: "How much does bulk SMS cost in Germany?",
    a: "Pricing depends on volume, route type, and sender ID. DIGINTRA offers affordable, transparent pricing with volume discounts.",
  },
  {
    q: "Can I send SMS in German language (Deutsch)?",
    a: "Yes. DIGINTRA supports Unicode messaging, allowing you to send SMS in German, English, or any language.",
  },
  {
    q: "How fast are SMS delivered in Germany?",
    a: "Most messages are delivered within seconds using direct carrier routes and enterprise-grade infrastructure.",
  },
  {
    q: "Do you provide an SMS API for developers?",
    a: "Yes. DIGINTRA provides a powerful REST SMS API for CRMs, websites, mobile apps, and ERP integrations.",
  },
  {
    q: "Can DIGINTRA help with marketing campaigns in Germany?",
    a: "Yes. Features include scheduling, personalization, segmentation, and analytics to maximize ROI.",
  },
  {
    q: "How do I get started with DIGINTRA in Germany?",
    a: "Create an account, upload contacts, write your message, and send or schedule your campaign. Our support team assists you at every step.",
  },
  ];
  
  



  
 



  return (
    <>

 <Hreflang links={hreflangConfig} />
     <Helmet>
        <meta name="robots" content="index, follow" />
        <title>Bulk SMS Germany | Best Bulk SMS Provider & SMS Gateway – DIGINTRA</title>
        <meta
          name="description"
          content="Send bulk SMS in Germany with DIGINTRA. High delivery rates, GDPR-compliant routing, powerful SMS gateway, and affordable pricing."
        />
        <link
          rel="canonical"
          href="https://digintra.com/blog/bulk-sms-germany"
        />
      </Helmet>
      {/* Hero Section */}
      <section className="flex min-h-screen w-full items-center justify-center bg-gradient-to-r from-sky-950 to-sky-900 px-4 md:px-6">
  <div className="flex w-full max-w-6xl items-center gap-6 md:gap-10 flex-col md:flex-row">
    
    {/* Left Side - Image */}
    <div className="flex w-full md:w-1/2 items-center justify-center">
      <div className="rounded-2xl bg-gradient-to-r from-blue-200 to-orange-200 p-4 md:p-6 w-full">
        <img
          src={bulksmsgermany}
          alt="Bulk SMS Germany"
          className="rounded-xl w-full"
        />
      </div>
    </div>

    {/* Right Side - Text */}
    <div className="flex w-full md:w-1/2 flex-col justify-center text-white mt-4 md:mt-0 text-center md:text-left">
      
      <h1 className="mb-3 md:mb-4 text-2xl md:text-4xl font-bold leading-snug md:leading-tight">
        Bulk SMS Germany –{" "}
        <span className="text-red-400 block md:inline">
          Reach Your Audience Instantly across Germany
        </span>
      </h1>

      <p className="mb-4 md:mb-6 text-base md:text-lg text-gray-300">
        Send millions of text messages to Germany in seconds with DIGINTRA,
        a German API, transparent pricing, and compliance with GDPR regulations.
      </p>

      {/* Buttons */}
      <div className="flex gap-3 md:gap-4 justify-center md:justify-start flex-col sm:flex-row">
        
        <button className="rounded-lg active:scale-95 transition bg-white px-4 md:px-6 py-2 md:py-3 font-semibold text-black w-full sm:w-auto">
          Get Started
        </button>

        <button className="rounded-lg active:scale-95 transition hover:bg-[#e4415b] bg-[#f64f6a] px-4 md:px-6 py-2 md:py-3 font-semibold text-white w-full sm:w-auto">
          Request Free Demo
        </button>

      </div>
    </div>

  </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-b from-green-50 to-white py-20 px-6 overflow-hidden">
      
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-extrabold text-green-900 mb-6 transition-all duration-700 hover:scale-105">
          Why Choose <span className="text-yellow-500">DIGINTRA</span> for Bulk SMS in Germany?
        </h2>

        <p className="text-black text-lg max-w-3xl mx-auto transition-opacity duration-700">
          Choosing the right partner for SMS marketing is crucial.  
          DIGINTRA stands out because we provide reliable and  
          industry-leading features.
        </p>
      </div>

      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        
        {featureList.map((item, index) => (
          
          <div
            key={item.id}
            className="bg-white rounded-2xl p-6 shadow-lg border border-green-100 transform transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.03]"
          >
            
            
            <div className="flex items-center gap-4 mb-4">
              
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-200 to-orange-200  text-white text-2xl flex items-center justify-center transition-all duration-500 hover:rotate-12">
                {item.icon}
              </div>

              <span className="text-2xl font-bold text-gray-900 opacity-80">
                {item.id}
              </span>
            </div>

            {/* Card Content */}
            <h3 className="text-xl font-semibold text-green-900 mb-3">
              {item.title}
            </h3>

            <p className="text-gray-600 leading-relaxed">
              {item.desc}
            </p>

            
            <div className="mt-5 h-1 w-12 bg-green-400 group-hover:w-18 transition-all duration-700 group-hover:w-full"></div>
          
          </div>
        
        ))}
      
      </div>

      </section>

      {/* BUlk SMS Section */}
      <section className="w-full bg-gradient-to-b from-blue-50 via-green-50 to-orange-50 px-6 py-16">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Types of Bulk SMS Services in Germany
          </h2>
          <p className="text-green-700 text-lg max-w-3xl mx-auto">
            Whether you need promotional messaging or secure transactional alerts,
            DIGINTRA covers all your business communication needs.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {smsTypes.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white border-l-4 border-blue-500 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                {index + 1}. {item.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
      </section>

      {/* IndusTries Benifit Section */}
      <section className="w-full bg-gradient-to-b from-orange-50 to-blue-50 px-6 py-16">
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Industries That Benefit from DIGINTRA’s Bulk SMS Service Germany
            </h2>
            <p className="text-gray-600">
              No matter your sector, DIGINTRA helps you reach your audience instantly with reliable bulk SMS delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {industries.map((industry) => (
                            <div
                  key={industry.id}
                  className="relative bg-white rounded-2xl shadow-md border border-gray-100 p-6 hover:shadow-xl hover:scale-105 transition-all"
                >
                  {/* Circle overlay for ID */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-r from-blue-200 to-orange-200 flex items-center justify-center text-orange-500 font-bold shadow-lg">
                    {industry.id}
                  </div>

                  {/* Card content */}
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {industry.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {industry.desc}
                    </p>
                  </div>
                </div>

            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-gray-700 font-medium">
              No matter your sector, DIGINTRA helps you send bulk SMS in Germany efficiently.
            </p>
          </div>
        </div>
      </section>

        {/* key features */}
       <section className="py-16 bg-gray-50 px-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">

                <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900">
            Key Features of DIGINTRA’s Bulk SMS Germany Platform
          </h2>
        </div>

        {points.map((point, index) => (
          <div
            key={point.id}
            className={`flex flex-col md:flex items-center gap-6 md:gap-0 relative ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Card */}
            <div
              className="relative w-full md:w-2/3 bg-white rounded-3xl border border-gray-200
              shadow-lg px-14 py-6 hover:shadow-2xl transition-all"
            >
              <div className=" flex flex-col md:flex-row items-start gap-4">
                
                {/* Icon Container */}
                <div
                  className={`${
                    index % 2 === 0
                      ? "md:absolute md:-right-6"
                      : "md:absolute md:-left-6"
                  } md:top-1/2 md:transform md:-translate-y-1/2
                  w-16 h-16 rounded-full flex items-center justify-center
                  text-white text-2xl shadow-xl ${point.color}
                  mb-4 md:mb-0`}
                >
                  {point.icon}
                </div>

                {/* Text Content */}
                <div className="flex-1 pt-2 md:pt-0 md:pl-2">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{point.desc}</p>
                </div>

              </div>
            </div>

            {/* Connector Line */}
            {index !== points.length - 1 && (
              <div className="hidden md:block absolute top-full left-1/2 w-1 h-12 bg-gray-300"></div>
            )}
          </div>
        ))}
      </div>
        </section>


        {/* Pricing section */}x``
        <section className="w-full bg-gradient-to-b from-blue-50 to-white px-6 py-16 transition-all duration-700">
      <div className="max-w-6xl mx-auto">
        <div className="flex w-full items-center gap-10 flex-col md:flex-row">
          
          {/* left Side - Content */}
          <div className="w-full md:w-1/2 transform transition-all duration-700 hover:-translate-y-1">
            <h2 className="text-2xl md:text-7xl font-extrabold text-blue-950 mb-4 transition-colors duration-500">
              Bulk SMS Price in Germany
            </h2>
            <div className="h-1 w-1/2 bg-gradient-to-r from-orange-400 to-blue-800 rounded-full mb-7 transition-all duration-500 hover:w-32"></div>


            <p className="text-orange-500 mb-6 leading-relaxed text-base md:text-lg transition-all duration-500">
              DIGINTRA offers transparent and affordable bulk SMS pricing in Germany
              to suit businesses of all sizes. Whether you're a startup, SME, or
              enterprise, our flexible pricing ensures you get the best value
              without compromising delivery quality.
            </p>

            <p className="text-blue-800 mb-6 leading-relaxed text-base md:text-lg transition-all duration-500">
              Our rates depend on message volume, route type (promotional or
              transactional), and whether you use our SMS API. We provide
              competitive per-SMS pricing, discounts on high-volume messaging,
              and cost-efficient packages designed for long-term campaigns.
            </p>

          </div>

          {/* right Pricing Card */}
          <div className="w-full md:w-1/2 flex items-center justify-center relative p-6 transition-all duration-700">

 
          <div className="absolute inset-0 bg-gradient-to-r from-blue-200 via-orange-200 to-blue-200 rounded-[40px] blur-2xl opacity-50 transition-all duration-700"></div>

          <div className="w-full relative bg-white rounded-[32px] shadow-2xl border border-blue-100 p-8 transition-all duration-700 hover:-translate-y-2 hover:shadow-blue-200">
            
            <h3 className="text-2xl md:text-3xl font-extrabold text-blue-950 mb-6 tracking-tight transition-all duration-500">
              What You Get with DIGINTRA Pricing
            </h3>

            
            <div className="h-1 w-20 bg-gradient-to-r from-orange-400 to-blue-800 rounded-full mb-7 transition-all duration-500 hover:w-32"></div>

            <ul className="space-y-5 text-blue-900 text-base md:text-lg">
              
              <li className="group flex items-center p-4 rounded-2xl bg-blue-50 border border-blue-100 transition-all duration-500 hover:bg-orange-50 hover:border-orange-200 hover:translate-x-2">
                <span className="text-orange-500 text-2xl mr-4 transition-all duration-500 group-hover:scale-110">
                  <TbPointerBolt />
                </span>
                <span className=" transition-all duration-300">
                  Cost-effective tariffs
                </span>
              </li>

              <li className="group flex items-center p-4 rounded-2xl bg-blue-50 border border-blue-100 transition-all duration-500 hover:bg-orange-50 hover:border-orange-200 hover:translate-x-2">
                <span className="text-orange-500 text-2xl mr-4 transition-all duration-500 group-hover:scale-110">
                  <TbPointerBolt />
                </span>
                High-delivery German routes
              </li>

              <li className="group flex items-center p-4 rounded-2xl bg-blue-50 border border-blue-100 transition-all duration-500 hover:bg-orange-50 hover:border-orange-200 hover:translate-x-2">
                <span className="text-orange-500 text-2xl mr-4 transition-all duration-500 group-hover:scale-110">
                  <TbPointerBolt />
                </span>
                No hidden fees
              </li>

              <li className="group flex items-center p-4 rounded-2xl bg-blue-50 border border-blue-100 transition-all duration-500 hover:bg-orange-50 hover:border-orange-200 hover:translate-x-2">
                <span className="text-orange-500 text-2xl mr-4 transition-all duration-500 group-hover:scale-110">
                  <TbPointerBolt />
                </span>
                Volume-based discounts
              </li>

              <li className="group flex items-center p-4 rounded-2xl bg-blue-50 border border-blue-100 transition-all duration-500 hover:bg-orange-50 hover:border-orange-200 hover:translate-x-2">
                <span className="text-orange-500 text-2xl mr-4 transition-all duration-500 group-hover:scale-110">
                  <TbPointerBolt />
                </span>
                Fast, secure, GDPR-compliant messaging
              </li>

            </ul>

            {/* Creative CTA box */}
            <div className="mt-8 p-5 rounded-3xl bg-gradient-to-r from-blue-100 to-orange-100 border border-orange-200 transition-all duration-700 hover:scale-[1.02]">
              <p className="text-blue-950 font-semibold text-sm md:text-base">
                Contact with our team for a custom bulk SMS quote in Germany based on your business needs.
              </p>
            </div>
          </div>
        </div>


        </div>
      </div>
        </section>
        
        {/* process section */}
        <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800">
            How to Send Bulk SMS to Germany
          </h2>
          <p className="mt-4 text-slate-500 max-w-3xl mx-auto text-sm md:text-base">
            Sending SMS to Germany with{" "}
            <span className="font-semibold text-indigo-600">DIGINTRA</span> is
            simple and schnell.
          </p>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-16 gap-x-8 relative">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="relative text-center group transition-all duration-500"
              >
                
                {index !== steps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 -right-6 text-2xl text-slate-400">
                    →
                  </div>
                )}

                
                {index !== steps.length - 1 && (
                  <div className="lg:hidden absolute -bottom-10 left-1/2 -translate-x-1/2 text-2xl text-slate-400">
                    ↓
                  </div>
                )}

                
                <div
                  className="mx-auto w-14 md:w-16 h-24 md:h-28 bg-slate-100 rounded-full
                  flex items-start justify-center pt-4 text-lg md:text-xl font-bold
                  text-slate-700 group-hover:bg-indigo-50 transition"
                >
                  {step.step}
                </div>

                
                <div
                  className={`mx-auto -mt-10 w-14 md:w-16 h-14 md:h-16 rounded-full
                  flex items-center justify-center ${step.color}
                  transition-transform duration-500 group-hover:scale-110`}
                >
                  <Icon className="w-6 md:w-8 h-6 md:h-8 text-slate-700" />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-base md:text-lg font-semibold text-slate-800">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm text-slate-500 leading-relaxed max-w-xs mx-auto">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
        </section>

        {/* FAQ sections */}
        <section className="w-full bg-gradient-to-b from-blue-50 to-white px-6 py-16">
              <div className="max-w-4xl mx-auto">
                
                {/* Heading */}
                <div className="text-center mb-10">
                  <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
                    FAQ – Bulk SMS Germany
                  </h2>
                  <p className="text-blue-700 mt-3">
                    Answers to common questions about DIGINTRA’s SMS services
                  </p>
                </div>
        
                {/* FAQ Items */}
                <div className="space-y-4">
                  {faqs.map((item, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl shadow-md border border-blue-100 hover:border-blue-500"
                    >
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full flex justify-between items-center p-5 text-left"
                      >
                        <span className="text-lg font-semibold text-blue-900">
                          {item.q}
                        </span>
                        <ChevronDown
                          className={`w-6 h-6 text-blue-700 transition-transform duration-300 ${
                            openIndex === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>
        
                      
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          openIndex === index ? "max-h-40 p-5 pt-0" : "max-h-0"
                        }`}
                      >
                        <p className="text-gray-700 leading-relaxed">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
        
              </div>
        </section>
    
<Footer/>


    </>
  );
};

export default App;
