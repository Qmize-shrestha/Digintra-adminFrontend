import React from 'react'
import { motion } from 'framer-motion';
import { Megaphone, ShieldCheck, Server, Code, MessageSquare } from "lucide-react";
import Footer from '../components/Footer';
import image from "../assets/bulk-sms-vietnam.png";
import {
  TrendingUp,
  BarChart3,
  RefreshCcw,
  Settings,
  Globe
} from "lucide-react";

import {
  ShoppingCart,
  Landmark,
  HeartPulse,
  Truck,
  GraduationCap,
  Cpu
} from "lucide-react";

import {
  Smartphone,
  Clock,
  Target
} from "lucide-react";

import {
  Award,
  Building2
} from "lucide-react";

const Vietnam = () => {

    // 4th section data
    const items = [
    {
      title: "Vietnam Regulatory Alignment",
      color: "from-sky-500 to-blue-600",
      icon: "📜",
      points: [
        "Messaging practices aligned with Vietnam telecom regulations",
        "Approved sender IDs and content guidelines support",
        "Opt-in & opt-out mechanisms for responsible messaging",
        "Compliance-focused routing for lawful delivery",
      ],
    },
    {
      title: "Secure SMS Gateway & API",
      color: "from-emerald-500 to-green-600",
      icon: "🔐",
      points: [
        "Enterprise-grade encrypted SMS gateway",
        "Secure SMS API for apps & enterprise systems",
        "Protected data handling with access controls",
      ],
    },
    {
      title: "Reliable Local Delivery",
      color: "from-orange-500 to-amber-600",
      icon: "📡",
      points: [
        "Direct routes to Vietnamese mobile operators",
        "Redundant routing & automatic failover",
        "Real-time delivery reports & status visibility",
      ],
    },
  ];


//   5th section data
const item = [
  {
    icon: <Megaphone className="w-6 h-6 text-blue-300" />,
    title: "Our Bulk SMS Vietnam Solutions",
    content: [
      "1. Promotional Bulk SMS",
      "Engage customers and drive conversions with targeted campaigns:",
      "Promotions, discounts, and flash sales",
      "Product launches and announcements",
      "Customer engagement and retention",
    ],
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-blue-300" />,
    title: "Transactional & OTP SMS",
    content: [
      "Deliver time-sensitive messages instantly:",
      "OTP and verification messages",
      "Payment confirmations and alerts",
      "Order, delivery, and appointment updates",
    ],
  },
  {
    icon: <Server className="w-6 h-6 text-blue-300" />,
    title: "SMS Gateway Vietnam",
    content: [
      "Our high-performance SMS gateway Vietnam enables businesses to send messages at scale with consistent delivery and reliability.",
    ],
  },
  {
    icon: <Code className="w-6 h-6 text-blue-300" />,
    title: "SMS API Vietnam",
    content: [
      "Automate and integrate messaging using our secure SMS API Vietnam:",
      "Easy system integration",
      "High throughput for enterprise use",
      "Flexible and scalable message delivery",
    ],
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-blue-300" />,
    title: "Best Mass Text Messaging Service",
    content: [
      "DIGINTRA provides one of the best mass text messaging services in Vietnam, offering intuitive tools for campaign management, personalization, and analytics",
    ],
  },
];

// 6th section data
const features = [
  {
    icon: TrendingUp,
    text: "High SMS open rates and instant reach",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: BarChart3,
    text: "Real-time delivery and performance analytics",
    color: "from-emerald-500 to-teal-500"
  },
  {
    icon: RefreshCcw,
    text: "Two-way messaging support",
    color: "from-orange-500 to-amber-500"
  },
  {
    icon: Settings,
    text: "Scalable platform for high-volume campaigns",
    color: "from-violet-500 to-purple-500"
  },
  {
    icon: ShieldCheck,
    text: "Secure infrastructure and encrypted APIs",
    color: "from-rose-500 to-pink-500"
  },
  {
    icon: Globe,
    text: "Nationwide coverage across Vietnam",
    color: "from-indigo-500 to-sky-500"
  }
];



// 7th section data
const industries = [
  { icon: ShoppingCart, text: "Retail & E-commerce" },
  { icon: Landmark, text: "Banking & Financial Services" },
  { icon: HeartPulse, text: "Healthcare & Clinics" },
  { icon: Truck, text: "Logistics & Transportation" },
  { icon: GraduationCap, text: "Education & Training" },
  { icon: Cpu, text: "Technology & Digital Platforms" }
];

// 8th section data
const points = [
  { icon: Smartphone, text: "Extremely high mobile penetration" },
  { icon: Clock, text: "Messages read within minutes" },
  { icon: Globe, text: "Works on all mobile phones (no internet required)" },
  { icon: Target, text: "Ideal for urgent and large-scale communication" }
];


//9th section data
const trustPoints = [
  {
    icon: Award,
    title: "Experience",
    text: "Proven success delivering high-volume messaging campaigns across Vietnam and Asia.",
    color: "from-cyan-400 to-sky-500"
  },
  {
    icon: Cpu,
    title: "Expertise",
    text: "Deep technical expertise in SMS gateway Vietnam and SMS API Vietnam integrations.",
    color: "from-sky-400 to-blue-500"
  },
  {
    icon: Building2,
    title: "Authoritativeness",
    text: "Recognized as a reliable bulk SMS sender and messaging partner for growing and enterprise businesses.",
    color: "from-indigo-400 to-violet-500"
  },
  {
    icon: ShieldCheck,
    title: "Trustworthiness",
    text: "Secure infrastructure, transparent pricing, dedicated support, and consistent delivery performance.",
    color: "from-violet-400 to-purple-500"
  }
];

  return (
    <>

    <Helmet>
        <meta name="robots" content="index, follow" />
        <title>Bulk SMS Vietnam 2026 | Top SMS Marketing Company</title>
        <meta
          name="description"
          content="Discover the best SMS marketing platforms in 2026. Compare top SMS marketing services, features, pricing fit, and industry use cases to grow your business."
        />
        <link rel="canonical" href="https://digintra.com/bulk-sms-vietnam" />


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
              alt="Bulk SMS Vietnam"
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
            Bulk SMS Vietnam –{" "}
            <span className="text-red-400 block md:inline">
              Reliable & Scalable Bulk Messaging
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="mb-4 md:mb-6 text-base md:text-lg text-gray-300"
          >
            Send Bulk SMS Across Vietnam with a Secure, High-Performance SMS Platform.
             Fast, Compliant & Scalable Bulk Messaging Service in Vietnam
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
    <section className="relative w-full min-h-[520px] flex items-center overflow-hidden">
      
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="https://i.pinimg.com/736x/6b/05/cd/6b05cd0ad2f628887bc3a5bd5c701090.jpg"
          alt="Vietnam business communication"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/80 to-slate-950/90" />
      </div>

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 max-w-6xl mx-auto px-4 md:px-6"
      >
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6
          bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">
            Reliable Bulk SMS Service in Vietnam for Businesses of All Sizes
          </h2>

          <p className="text-slate-300 leading-relaxed mb-5">
            Businesses across Vietnam require a fast, dependable, and scalable
            way to communicate with customers and users.{" "}
            <span className="text-white font-medium">
              Bulk SMS Vietnam solutions
            </span>{" "}
            enable organizations to reach millions of mobile subscribers
            instantly, ensuring messages are delivered and read within seconds.
            From marketing campaigns to transactional alerts, bulk messaging
            service remains one of the most effective communication channels in
            Vietnam.
          </p>

          <p className="text-slate-300 leading-relaxed">
            DIGINTRA empowers businesses to send bulk SMS using a robust{" "}
            <span className="text-white font-medium">
              SMS gateway Vietnam
            </span>{" "}
            and high-performance{" "}
            <span className="text-white font-medium">
              SMS API Vietnam
            </span>
            , ensuring consistent delivery, automation, and full control over
            messaging workflows.
          </p>
        </div>
      </motion.div>
    </section>

    {/* 3rd section */}
    <section
      className="
        relative w-full py-24 px-4 overflow-hidden
        bg-gradient-to-br from-sky-50 via-white to-emerald-50
      "
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="
              text-3xl md:text-4xl font-bold mb-6
              bg-gradient-to-r from-sky-600 to-emerald-600
              bg-clip-text text-transparent
            "
          >
            Why Choose DIGINTRA for Bulk SMS in Vietnam?
          </h2>

          <p className="text-gray-600 text-base leading-relaxed max-w-xl">
            DIGINTRA is a trusted provider of{" "}
            <span className="font-medium text-gray-800">
              Bulk SMS Vietnam
            </span>{" "}
            solutions, helping businesses communicate reliably at scale.
            Our local connectivity, technical expertise, and enterprise-grade
            infrastructure make us a preferred bulk SMS sender for
            organizations across Vietnam.
          </p>
        </motion.div>

        {/* RIGHT FEATURE CARD */}
       <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
          relative rounded-3xl p-8 md:p-10
          bg-white/70
          backdrop-blur-xl
          border border-gray-200/60
          shadow-[0_12px_30px_rgba(0,0,0,0.08)]
        "
      >
        {/* subtle top light */}
        <div
          className="
            pointer-events-none absolute inset-0 rounded-3xl
            bg-gradient-to-b from-white/60 via-transparent to-transparent
          "
        />

        <ul className="space-y-6">
          {[
            ["🚀", "High delivery rates across Vietnamese mobile networks"],
            ["⚡", "Instant SMS delivery with real-time reports"],
            ["🔐", "Secure and scalable SMS infrastructure"],
            ["🛠", "Easy integration via SMS API Vietnam"],
            ["📊", "Campaign analytics and delivery tracking"],
            ["🌍", "Local and international SMS coverage"],
          ].map(([icon, text], i) => (
            <li key={i} className="flex items-start gap-4">
              <span
                className="
                  flex h-10 w-10 shrink-0 items-center justify-center
                  rounded-xl
                  bg-gradient-to-br from-sky-500 to-emerald-500
                  text-white
                  shadow-sm
                "
              >
                {icon}
              </span>
              <span className="text-gray-900 leading-relaxed">
                {text}
              </span>
            </li>
          ))}
        </ul>
      </motion.div>



      </div>
    </section>
    

    {/* 4th section */}
    <section className="
      relative w-full py-28 px-4
      bg-gradient-to-br from-sky-50 via-white to-emerald-50
    ">
      <div className="max-w-6xl mx-auto">

        {/* TOP CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h2 className="
            text-3xl md:text-4xl font-bold mb-4
            bg-gradient-to-r from-sky-600 to-emerald-600
            bg-clip-text text-transparent
          ">
            Compliance, Security & Trust You Can Rely on in Vietnam
          </h2>

          <p className="text-gray-600 leading-relaxed">
            DIGINTRA delivers Bulk SMS Vietnam services with a strong focus on
            regulatory compliance, data security, and message reliability.
            Our platform is built to support lawful, high-volume messaging
            while maintaining user privacy and network standards.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative w-[300px] h-[380px]"
            >
              {/* TOP COLOR TAB */}
              <div
                className={`h-14 rounded-t-3xl bg-gradient-to-r ${item.color}`}
              />

              {/* ICON OVERLAP */}
              <div className="
                absolute top-8 left-1/2 -translate-x-1/2
                h-14 w-14 rounded-full
                bg-white shadow-lg
                flex items-center justify-center text-2xl
              ">
                {item.icon}
              </div>

              {/* CARD BODY */}
              <div className="
                h-full -mt-6 bg-white rounded-3xl
                shadow-xl px-6 pt-16 pb-8
              ">
                <h3 className="text-center font-semibold text-gray-800 mb-4">
                  {item.title}
                </h3>

                <ul className="space-y-2 text-sm text-gray-600">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-emerald-500">✔</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>


    {/* 5th section */}
    <section
      className="relative w-full py-28 bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      <div className="relative max-w-5xl mx-auto px-4">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-4xl font-bold mb-20
          bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500
          bg-clip-text text-transparent tracking-wide"
        >
          Our Bulk SMS Vietnam Solutions
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-blue-500/50 via-blue-400/30 to-transparent" />

          <div className="space-y-12">
            {item.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-16"
              >
                {/* Outer Ring */}
                <div className="absolute left-0 top-6 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 animate-pulse" />
                  <div className="absolute w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 shadow-[0_0_25px_rgba(59,130,246,0.9)]" />
                </div>

                {/* Card */}
                <div className="relative backdrop-blur-xl 
                bg-gradient-to-r from-blue-800/50 to-blue-700/30 
                border border-white/15 rounded-2xl p-7 shadow-xl">

                  {/* Heading row */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-blue-400/20 border border-blue-300/30">
                      {item.icon}
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                  </div>

                  {/* Points – directly under heading */}
                  <ul className="space-y-2 pl-[52px] text-blue-100/95 text-sm md:text-base">
                    {item.content.map((line, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="mt-2 w-2 h-2 rounded-full 
                        bg-gradient-to-r from-cyan-400 to-blue-500 shrink-0" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>

                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>



    {/* 6th section */}
    <section className="relative w-full py-28 overflow-hidden
      bg-gradient-to-br from-[#f8fafc] via-[#eef2ff] to-[#ecfeff]">

      {/* soft decorative blur */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2
        w-[500px] h-[500px] bg-blue-300/30 blur-[140px]" />

      <div className="relative max-w-6xl mx-auto px-4">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-4xl font-extrabold mb-20
          bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600
          bg-clip-text text-transparent"
        >
          Key Features of Our Bulk Messaging Service
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={`relative rounded-2xl p-[1px]
                bg-gradient-to-br ${item.color}`}
              >
                <div className="h-full rounded-2xl bg-white p-6
                shadow-md hover:shadow-xl transition">

                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl
                      bg-gradient-to-br ${item.color}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <p className="text-gray-700 font-medium text-sm md:text-base">
                      {item.text}
                    </p>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>


    {/* 7th section */}
    <section className="w-full py-28 bg-gradient-to-br from-[#ffffff] via-[#f1f5f9] to-[#eef2ff]">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-4xl font-extrabold mb-6
          bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600
          bg-clip-text text-transparent"
        >
          Industries We Serve in Vietnam
        </motion.h2>

        {/* Sub text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-600 max-w-3xl mx-auto mb-16"
        >
          DIGINTRA supports a wide range of industries with reliable Bulk SMS Vietnam solutions.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group relative bg-white rounded-2xl p-6
                border border-gray-200
                hover:border-transparent
                hover:shadow-lg transition"
              >
                {/* Top accent bar */}
                <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl
                bg-gradient-to-r from-emerald-500 to-sky-500" />

                <div className="flex items-center gap-4 mt-2">
                  <div className="p-3 rounded-xl
                  bg-gradient-to-br from-emerald-100 to-sky-100
                  group-hover:from-emerald-500 group-hover:to-sky-500
                  transition">
                    <Icon className="w-6 h-6 text-emerald-600 group-hover:text-white transition" />
                  </div>

                  <p className="font-semibold text-gray-800">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-gray-600 max-w-3xl mx-auto mt-16"
        >
          Our industry experience ensures compliant and effective messaging strategies.
        </motion.p>

      </div>
    </section>


    {/* 8th section */}
    <section className="relative w-full py-28 overflow-hidden
      bg-gradient-to-b from-[#020617] via-[#020617] to-[#020617]">

      {/* background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2
        w-[600px] h-[600px] bg-blue-600/20 blur-[160px]" />

      <div className="relative max-w-6xl mx-auto px-4">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-4xl font-extrabold mb-20
          bg-gradient-to-r from-cyan-400 to-blue-500
          bg-clip-text text-transparent"
        >
          Why Bulk SMS Works in Vietnam
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {points.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl p-[1px]
                bg-gradient-to-br from-transparent to-transparent
                hover:from-cyan-400 hover:via-blue-500 hover:to-indigo-500
                transition-all duration-300"
              >
                <div className="rounded-2xl p-6 h-full
                  bg-[#020617]/90
                  border border-blue-500/30
                  group-hover:border-transparent
                  transition-all duration-300
                  backdrop-blur-md
                  shadow-[0_0_30px_rgba(59,130,246,0.15)]
                  group-hover:shadow-[0_0_60px_rgba(59,130,246,0.45)]">

                  <div className="flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center
                      bg-gradient-to-br from-blue-500 to-cyan-500
                      group-hover:from-cyan-400 group-hover:to-indigo-500
                      transition">
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <p className="text-white font-semibold leading-snug">
                      {item.text}
                    </p>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Glassy Footer Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center
          rounded-2xl p-6
          bg-white/5
          backdrop-blur-xl
          border border-white/10
          shadow-[0_0_40px_rgba(59,130,246,0.25)]"
        >
          <p className="text-gray-200 text-sm md:text-base">
            Bulk SMS remains a trusted and cost-effective channel for businesses in Vietnam.
          </p>
        </motion.div>

      </div>
    </section>

    {/* 9th section */}
    <section className="w-full py-28 bg-gradient-to-br from-white via-[#acc6e1] to-[#889bdb]">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-4xl font-extrabold mb-20
          bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600
          bg-clip-text text-transparent"
        >
          Why DIGINTRA is a Trusted Bulk SMS Provider in Vietnam
        </motion.h2>

        {/* Infographic Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {trustPoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="relative group h-full"
              >
                {/* Card */}
                <div className="relative bg-white rounded-3xl px-6 pt-10 pb-16
                  border border-gray-200
                  shadow-[0_25px_45px_rgba(0,0,0,0.08)]
                  h-full flex flex-col">

                  {/* Icon */}
              
              <div className="relative mx-auto mb-6 flex items-center justify-center">

                {/* Glowing ring */}
                <div
                  className={`absolute w-20 h-20 rounded-full
                  border-2 border-transparent
                  bg-gradient-to-br ${item.color}
                  bg-origin-border
                  mask-[linear-gradient(#000_0_0)_padding-box,linear-gradient(#000_0_0)]
                  mask-composite-exclude
                  blur-[1px]
                  opacity-80`}
                />

                {/* Glow shadow */}
                <div
                  className={`absolute w-20 h-20 rounded-full
                  shadow-[0_0_25px_rgba(59,130,246,0.45)]`}
                />

                {/* Inner icon circle */}
                <div
                  className={`relative w-16 h-16 rounded-full
                  flex items-center justify-center
                  bg-white
                  border border-gray-200`}
                >
                  <div
                    className={`w-14 h-14 rounded-full
                    flex items-center justify-center
                    bg-gradient-to-br ${item.color}`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

              </div>



                  {/* Title */}
                  <h3 className="text-center font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>

                  {/* Text (this makes height equal) */}
                  <p className="text-center text-gray-600 text-sm leading-relaxed flex-grow">
                    {item.text}
                  </p>

                  {/* Bottom strip */}
                  <div className="absolute inset-x-0 -bottom-4 flex justify-center">
                    <span
                      className={`h-2 w-24 rounded-full
                      bg-gradient-to-r ${item.color}`}
                    />
                  </div>
                </div>
              </motion.div>

            );
          })}
        </div>

      </div>
    </section>

    {/* 10th section */}
    <section className="relative w-full min-h-[520px] flex items-center overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://i.pinimg.com/736x/19/a7/88/19a7880e6c44a4c0d36cc719febca0d0.jpg" 
          alt="Bulk SMS Vietnam"
          className="w-full h-full object-cover brightness-75"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-blue/65" />

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-4xl mx-auto px-4 text-center py-24">

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-extrabold mb-6
            bg-gradient-to-r from-cyan-400 to-blue-500
            bg-clip-text text-transparent"
          >
            Get Started with Bulk SMS Vietnam Today
          </motion.h2>

          {/* Paragraph 1 */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-gray-200 text-base md:text-lg leading-relaxed mb-4"
          >
            Whether you need a powerful SMS gateway Vietnam, flexible SMS API Vietnam,
            or a complete bulk messaging service, DIGINTRA is your trusted partner.
          </motion.p>

          {/* Paragraph 2 */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="text-gray-200 text-base md:text-lg leading-relaxed mb-10"
          >
            Contact us today to launch your Bulk SMS campaigns and reach customers across Vietnam instantly.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <button
              className="px-8 py-4 rounded-xl font-semibold text-white
              bg-gradient-to-r from-cyan-500 to-blue-600
              shadow-lg hover:shadow-xl
              hover:from-cyan-600 hover:to-blue-700
              transition"
            >
              Talk to an SMS Expert
            </button>

            <button
              className="px-8 py-4 rounded-xl font-semibold text-white
              bg-white/10 backdrop-blur-md
              border border-white/30
              hover:bg-white/20
              transition"
            >
              Start Bulk SMS Now
            </button>
          </motion.div>

        </div>
      </div>

    </section>
<Footer/>
    </>



  )
}

export default Vietnam