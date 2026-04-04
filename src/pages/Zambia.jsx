import React from 'react'
import { motion } from "framer-motion";
import {Helmet} from "react-helmet";
import Footer from '../components/Footer';
import { Shield, Lock, Signal, Check } from "lucide-react";
import { FiSmartphone, FiClock, FiGlobe, FiTarget } from "react-icons/fi";
import { FiAward, FiCpu, FiStar } from "react-icons/fi";
import image from "../assets/bulksmszambia.png"
import {
  FiShoppingBag,
  FiDollarSign,
  FiHeart,
  FiBookOpen,
  FiTruck,
  FiBriefcase,
} from "react-icons/fi";
import {
  Megaphone,
  Bell,
  Server,
  LayoutDashboard,
} from "lucide-react";
import { 
  FiTrendingUp, 
  FiBarChart2, 
  FiRepeat, 
  FiSettings, 
  FiShield, 
} from "react-icons/fi";  

const Zambia = () => {

  // 3rd section data
  const features = [
    { icon: "🚀", title: "High delivery rates across Zambian mobile networks" },
    { icon: "⚡", title: "Instant SMS delivery with real-time reporting" },
    { icon: "🔐", title: "Secure and compliant messaging infrastructure" },
    { icon: "🛠", title: "Easy integration via API and web platform" },
    { icon: "📊", title: "Campaign analytics and delivery insights" },
    { icon: "🌍", title: "Local and international SMS coverage" },
  ];

   const sections = [
    {
      icon: Shield,
      tag: "Regulatory",
      title: "Zambia Regulatory Alignment",
      items: [
        "Messaging practices aligned with Zambian telecom guidelines",
        "Support for approved sender IDs and content rules",
        "Opt-in and opt-out mechanisms for ethical messaging",
        "Compliance-focused routing for lawful SMS delivery",
      ],
    },
    {
      icon: Lock,
      tag: "Security",
      title: "Secure SMS Gateway Zambia",
      items: [
        "Enterprise-grade SMS gateway with encrypted transmission",
        "Secure APIs for websites, mobile apps, CRM, and ERP systems",
        "Protected data handling and access control",
      ],
    },
    {
      icon: Signal,
      tag: "Reliability",
      title: "Reliable Local Delivery",
      items: [
        "Direct connectivity to major Zambian mobile operators",
        "Redundant routing and delivery failover",
        "Real-time delivery status and reporting",
      ],
    },
  ];



  // 5th section data
  const SOLUTIONS = [
    {
      number: "01",
      Icon: Megaphone,
      title: "Promotional & Marketing SMS",
      subtitle: "Drive engagement and awareness with bulk SMS campaigns",
      items: [
        "Promotions and special offers",
        "Product and service announcements",
        "Customer engagement campaigns",
      ],
      featured: false,
    },
    {
      number: "02",
      Icon: Bell,
      title: "Transactional & Alert SMS",
      subtitle: "Send time-critical messages instantly",
      items: [
        "OTP and verification codes",
        "Payment and billing alerts",
        "Service notifications and reminders",
      ],
      featured: true,
    },
    {
      number: "03",
      Icon: Server,
      title: "SMS Gateway Zambia",
      subtitle:
        "High-performance SMS gateway delivering messages at scale with speed and reliability.",
      items: [],
      featured: false,
    },
    {
      number: "04",
      Icon: LayoutDashboard,
      title: "Bulk SMS Sender Platform",
      subtitle:
        "Manage contacts, personalize messages, schedule campaigns, and track results easily.",
      items: [],
      featured: false,
    },
  ];


  // 6th section data
  const feature = [
  {
    icon: <FiTrendingUp size={22} />,
    title: "High open rates and instant reach",
    gradient: "from-orange-500 to-orange-400",
  },
  {
    icon: <FiBarChart2 size={22} />,
    title: "Real-time delivery and performance reports",
    gradient: "from-blue-500 to-blue-400",
  },
  {
    icon: <FiRepeat size={22} />,
    title: "Two-way messaging support",
    gradient: "from-green-500 to-emerald-400",
  },
  {
    icon: <FiSettings size={22} />,
    title: "Scalable infrastructure for high-volume messaging",
    gradient: "from-purple-500 to-indigo-400",
  },
  {
    icon: <FiShield size={22} />,
    title: "Secure APIs and encrypted transmission",
    gradient: "from-pink-500 to-rose-400",
  },
  {
    icon: <FiGlobe size={22} />,
    title: "Nationwide coverage across Zambia",
    gradient: "from-sky-500 to-cyan-400",
  },
];


// 7th section data
const industries = [
  { icon: <FiShoppingBag size={22} />, title: "Retail & Wholesale" },
  { icon: <FiDollarSign size={22} />, title: "Financial Services & Microfinance" },
  { icon: <FiHeart size={22} />, title: "Healthcare & NGOs" },
  { icon: <FiBookOpen size={22} />, title: "Education & Training Institutions" },
  { icon: <FiTruck size={22} />, title: "Logistics & Utilities" },
  { icon: <FiBriefcase size={22} />, title: "Government & Public Services" },
];

const gradients = [
  "from-orange-400 to-yellow-400",
  "from-orange-500 to-red-400",
  "from-pink-500 to-rose-400",
  "from-purple-600 to-indigo-500",
  "from-blue-500 to-indigo-400",
  "from-teal-500 to-cyan-400",
];


// 8th section data
const why = [
  {
    icon: <FiSmartphone size={22} />,
    title: "High mobile phone usage across urban and rural areas",
  },
  {
    icon: <FiClock size={22} />,
    title: "Messages delivered and read quickly",
  },
  {
    icon: <FiGlobe size={22} />,
    title: "Works on all mobile phones without internet",
  },
  {
    icon: <FiTarget size={22} />,
    title: "Ideal for urgent, wide-reach communication",
  },
];


// 9th section
const Provider = [
  {
    icon: <FiAward size={26} />,
    title: "Experience",
    description:
      "Proven success delivering high-volume messaging across Africa.",
    color: "from-cyan-400 to-blue-500",
  },
  {
    icon: <FiCpu size={26} />,
    title: "Expertise",
    description:
      "Deep technical knowledge of SMS gateway Zambia and local routing.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: <FiStar size={26} />,
    title: "Authoritativeness",
    description:
      "Recognized as a reliable bulk SMS provider in Zambia by businesses and organizations.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: <FiShield size={26} />,
    title: "Trustworthiness",
    description:
      "Secure infrastructure, transparent pricing, and dependable customer support.",
    color: "from-purple-500 to-pink-500",
  },
];

  return (
    <>


     <Helmet>
        <meta name="robots" content="index, follow" />
        <title>Bulk SMS Zambia 2026 | Top SMS Marketing Company</title>
        <meta
          name="description"
          content="Discover the best SMS marketing platforms in 2026. Compare top SMS marketing services, features, pricing fit, and industry use cases to grow your business."
        />
        <link rel="canonical" href="https://digintra.com/bulk-sms-zambia" />


</Helmet>

     {/* Hero Section */}
      <section className="flex min-h-screen w-full items-center justify-center bg-gradient-to-r from-sky-950 to-sky-900 px-4 md:px-6">
      <div className="flex w-full max-w-6xl items-center gap-6 md:gap-10 flex-col md:flex-row">

        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex w-full md:w-1/2 items-center justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="rounded-2xl bg-gradient-to-r from-blue-200 to-orange-200 p-4 md:p-6 w-full"
          >
            <img
              src={image}
              alt="Bulk SMS Laptop"
              className="rounded-xl w-full"
            />
          </motion.div>
        </motion.div>

        {/* Right Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex w-full md:w-1/2 flex-col justify-center text-white mt-4 md:mt-0 text-center md:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-3 md:mb-4 text-2xl md:text-4xl font-bold leading-snug md:leading-tight"
          >
            Bulk SMS Zambia –{" "}
            <span className="text-red-400 block md:inline">
              Fast, Reliable & Scalable
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="mb-4 md:mb-6 text-base md:text-lg text-gray-300"
          >
            Reach Customers Nationwide with a Trusted Bulk SMS Provider in Zambia. 
            Secure, High-Delivery Bulk SMS Service for Businesses in Zambia
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex gap-3 md:gap-4 justify-center md:justify-start flex-col sm:flex-row"
          >
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              className="rounded-lg transition bg-white px-4 md:px-6 py-2 md:py-3 font-semibold text-black w-full sm:w-auto"
            >
              Get Started
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              className="rounded-lg transition hover:bg-[#e4415b] bg-[#f64f6a] px-4 md:px-6 py-2 md:py-3 font-semibold text-white w-full sm:w-auto"
            >
              Request Free Demo
            </motion.button>
          </motion.div>
        </motion.div>

      </div>
    </section>

    {/* 2nd section */}
     <section className="relative overflow-hidden py-24 bg-gradient-to-b from-white via-green-50 to-white">
  
  {/* Soft Background Shapes */}
  <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-emerald-200/40 rounded-full blur-3xl" />
  <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-green-100/50 rounded-full blur-3xl" />

  <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

    {/* LEFT CONTENT */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
        Reliable Bulk SMS Service in{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-400">
          Zambia
        </span>
      </h2>

      <p className="mt-6 text-lg text-gray-600 leading-relaxed">
        Organizations across Zambia require a simple, dependable, and
        cost-effective way to communicate at scale.{" "}
        <span className="text-green-600 font-semibold">
          Bulk SMS Zambia
        </span>{" "}
        enables businesses, NGOs, and institutions to deliver important
        messages directly to mobile phones with immediate visibility.
      </p>

      <p className="mt-4 text-gray-600">
        Whether it’s marketing promotions, customer notifications, or
        service updates, SMS remains one of the most effective communication
        channels in Zambia.
      </p>

      <p className="mt-4 text-gray-600">
        <span className="text-green-600 font-semibold">DIGINTRA</span>{" "}
        empowers organizations with a powerful{" "}
        <span className="text-green-600 font-semibold">
          SMS Gateway Zambia
        </span>
        , making us a trusted bulk SMS provider for high-volume and
        mission-critical messaging.
      </p>

      
    </motion.div>

    {/* RIGHT IMAGE */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="flex justify-center"
    >
      <div className="relative">
        
        {/* Soft Card Effect */}
        <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl" />
        
        <img
          src={image}
          alt="Bulk SMS Zambia Business"
          className="relative w-[420px] md:w-[480px] rounded-3xl shadow-lg border border-gray-200"
        />
      </div>
    </motion.div>

  </div>
</section>



{/* 3rd section */}
<section className="relative py-28 bg-gradient-to-br from-white via-emerald-50/40 to-indigo-50/30 overflow-hidden">
      
      {/* Decorative Blur Background */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto ">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-green-500 to-indigo-500">
            Why Choose DIGINTRA for Bulk SMS Zambia?
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            DIGINTRA delivers secure, scalable, and enterprise-grade SMS
            solutions tailored for the Zambian market with reliable routing
            and consistent performance.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-indigo-500 rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>

              <div className="relative bg-white/80 backdrop-blur-lg border border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-500 h-full">
                
                {/* Number Badge */}
                <div className="absolute -top-4 -right-4 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-indigo-500 text-white text-sm font-bold shadow-md">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-100 to-indigo-100 text-3xl mb-6">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-800 leading-snug">
                  {item.title}
                </h3>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>




{/* 4th section */}
 <section className="relative py-24 px-6 bg-slate-950 overflow-hidden">

      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-cyan-400 bg-cyan-500/10 border border-cyan-500/25 rounded-full px-6 py-2 mb-6">
            Bulk SMS Zambia · DIGINTRA
          </span>

          <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-400 mb-6">
           Compliance, Security & Trust You Can Rely on in Zambia
          </h1>

          <p className="text-slate-400 max-w-xl mx-auto">
            DIGINTRA delivers Bulk SMS Zambia services with a strong focus on compliance, 
            data protection, and network reliability. Our platform supports responsible
             messaging while aligning with local telecom standards.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => {
            const Icon = section.icon;

            return (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                className="group relative rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-sm p-8 transition-all duration-500 hover:border-cyan-400/40 hover:shadow-2xl"
              >
                {/* Tag */}
                <span className="inline-block text-[11px] font-semibold tracking-widest uppercase text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-1 mb-6">
                  {section.tag}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-400/10 border border-cyan-500/30 flex items-center justify-center mb-5 text-cyan-400 transition-transform duration-500 group-hover:scale-110">
                  <Icon size={20} />
                </div>

                {/* Title */}
                <h3 className="text-white text-lg font-semibold mb-5">
                  {section.title}
                </h3>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-cyan-500/40 to-transparent mb-6" />

                {/* Items */}
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                      <span className="mt-1 w-5 h-5 rounded-md border border-cyan-500/30 bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                        <Check size={14} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
    

{/* 5th section */}
<section className="relative py-24 px-6 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Our Bulk SMS{" "}
            <span className="bg-gradient-to-r from-sky-500 via-violet-500 to-emerald-500 bg-clip-text text-transparent">
              Zambia Solutions
            </span>
          </h2>

          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            Everything you need to send, manage, and optimise SMS communications
            at scale — built for businesses operating in Zambia.
          </p>
        </div>


        {/* Solutions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {SOLUTIONS.map((sol, index) => {
    const Icon = sol.Icon;

    return (
      <motion.div
        key={index}
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 220, damping: 18 }}
        className={`relative rounded-2xl bg-white overflow-hidden transition-all duration-300
        ${
          sol.featured
            ? "shadow-xl border border-violet-200"
            : "border border-gray-200 shadow-sm hover:shadow-lg"
        }`}
      >
        {/* 🔥 Top Gradient Line */}
        <div
          className={`h-1.5 w-full bg-gradient-to-r ${
            sol.featured
              ? "from-violet-500 via-purple-500 to-indigo-500"
              : "from-sky-400 via-blue-500 to-indigo-500"
          }`}
        />

        {/* Featured Badge */}
        {sol.featured && (
          <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider bg-violet-100 text-violet-700 px-3 py-1 rounded-full">
            Popular
          </span>
        )}

        <div className="p-7 flex flex-col h-full">

          {/* Top Row */}
          <div className="flex items-start justify-between mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-50 to-indigo-50 flex items-center justify-center text-sky-600 shadow-sm">
              <Icon size={22} />
            </div>

            <span className="text-2xl font-extrabold text-gray-100">
              {sol.number}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-gray-900 font-semibold text-lg mb-2">
            {sol.title}
          </h3>

          {/* Subtitle */}
          <p className="text-gray-500 text-sm leading-relaxed mb-4">
            {sol.subtitle}
          </p>

          {/* Features */}
          {sol.items.length > 0 && (
            <>
              <div className="h-px bg-gray-100 mb-4" />
              <ul className="space-y-3 mb-4">
                {sol.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-gray-600"
                  >
                    <Check size={14} className="text-emerald-500 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </motion.div>
    );
  })}
</div>


      </div>
    </section>



{/* 6th section */}

<section className="py-28 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
            Key Features of Our Bulk SMS Service
          </h2>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {feature.map((feature, index) => (
            <div
              key={index}
              className={`relative p-10 rounded-3xl text-white 
              bg-gradient-to-r ${feature.gradient}
              shadow-lg hover:shadow-2xl 
              transition-all duration-500 hover:-translate-y-3`}
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center 
                rounded-full bg-white text-gray-800 mb-8 shadow-md">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold leading-relaxed">
                {feature.title}
              </h3>

              {/* Number */}
              <span className="absolute bottom-6 right-8 text-3xl font-bold text-white/40">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>




{/* 7th section */}
        <section className="py-28 bg-gradient-to-br from-gray-100 via-white to-gray-200">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
            Industries We Serve in Zambia
          </h2>
          <p className="mt-6 text-gray-500 max-w-2xl mx-auto">
            DIGINTRA supports a wide range of sectors with reliable Bulk SMS Zambia solutions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">

          {industries.map((item, index) => (
            <div
              key={index}
              className="flex items-center bg-white rounded-3xl shadow-lg overflow-hidden"
            >
              {/* Left Gradient Step */}
              <div
                className={`w-28 h-full bg-gradient-to-br ${gradients[index]} 
                flex flex-col items-center justify-center text-white py-10`}
              >
                <span className="text-2xl font-bold">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Right Content */}
              <div className="flex-1 p-8 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h3>
                </div>

                <div className="w-12 h-12 flex items-center justify-center 
                  rounded-xl bg-gray-100 text-gray-600">
                  {item.icon}
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* Bottom Text */}
        <p className="text-center text-gray-500 mt-20 max-w-3xl mx-auto">
          Our experience ensures effective and compliant communication for every industry.
        </p>

      </div>
    </section>





    {/* 8th section */}
    <section className="py-28 bg-[#f4f6f9]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
            Why Bulk SMS Works in Zambia
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {why.map((item, index) => (
            <div
              key={index}
              className="group rounded-2xl p-[1.5px] 
              bg-gradient-to-r from-indigo-300 via-blue-300 to-cyan-300
              transition-all duration-300 hover:-translate-y-2"
            >
              {/* Inner Card */}
              <div
                className="bg-white rounded-2xl p-8 h-full
                shadow-[0_8px_20px_rgba(0,0,0,0.06)]
                group-hover:shadow-[0_14px_30px_rgba(0,0,0,0.12)]
                transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center 
                  rounded-xl bg-blue-100 text-indigo-600 mb-6">
                  {item.icon}
                </div>

                {/* Title */}
                <p className="text-gray-800 font-medium leading-relaxed">
                  {item.title}
                </p>
              </div>
            </div>
          ))}

        </div>

        {/* Bottom Statement */}
        <div className="mt-24 flex justify-center">
          <div className="rounded-2xl p-[1.5px] 
            bg-gradient-to-r from-indigo-300 via-blue-300 to-cyan-300">
            
            <div className="bg-white rounded-2xl px-10 py-6 
              shadow-[0_10px_25px_rgba(0,0,0,0.08)]
              max-w-3xl text-center">
              
              <p className="text-gray-700 text-lg">
                Bulk SMS continues to be a trusted and cost-effective channel in Zambia.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>



    {/* 9th section */}
    <section className="py-28 bg-gradient-to-b from-[#e9f0f7] to-[#cfdcf0]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Why DIGINTRA is a Trusted Bulk SMS Provider in Zambia
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {Provider.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -12, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 250, damping: 15 }}
              className="rounded-3xl p-[2px] 
              bg-gradient-to-br from-blue-400 via-purple-400 to-indigo-400"
            >
              {/* Inner Card */}
              <div
                className="bg-white rounded-3xl p-10 text-center h-full
                shadow-[0_15px_30px_rgba(0,0,0,0.08)]
                hover:shadow-[0_25px_50px_rgba(0,0,0,0.15)]
                transition-all duration-300"
              >
                {/* Glowing Icon Circle */}
                <div
                  className={`mx-auto w-20 h-20 flex items-center justify-center 
                  rounded-full bg-gradient-to-br ${item.color} 
                  text-white shadow-lg mb-8`}
                >
                  <div className="w-16 h-16 flex items-center justify-center 
                    rounded-full bg-white/20 backdrop-blur-sm">
                    {item.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.description}
                </p>

                {/* Bottom Gradient Line */}
                <div
                  className={`mt-8 h-1 w-20 mx-auto rounded-full bg-gradient-to-r ${item.color}`}
                ></div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>

        


        {/* cta section */}
        <section className="py-28 bg-gradient-to-br from-[#eef3fb] via-white to-[#e6f0ff]">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
        >
          Get Started with Bulk SMS Zambia Today
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 text-lg text-gray-600 leading-relaxed"
        >
          Whether you want to send mass text messages, integrate a reliable SMS gateway Zambia,
          or work with a trusted bulk SMS sender, DIGINTRA is your messaging partner.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-4 text-gray-600"
        >
          Contact us today to launch Bulk SMS campaigns and reach audiences across Zambia instantly.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col sm:flex-row justify-center gap-6"
        >
          {/* Primary Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 rounded-xl text-white font-semibold 
            bg-gradient-to-r from-blue-600 to-indigo-600
            shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Talk to an SMS Expert
          </motion.button>

          {/* Secondary Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 rounded-xl font-semibold 
            border border-blue-500 text-blue-600 
            bg-white hover:bg-blue-50
            shadow-sm hover:shadow-md transition-all duration-300"
          >
            Start Bulk SMS Now
          </motion.button>
        </motion.div>

      </div>
    </section>
    <Footer/>

    </>
  )
}

export default Zambia