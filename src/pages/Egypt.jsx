import React from 'react'
import { motion } from "framer-motion";
import { MessageSquare, Globe, Zap } from "lucide-react";
// 4th section icons
import { ShieldCheck, Lock, Truck } from "lucide-react";
import Image from "../assets/bulk-sms-egypt.png";
import Footer from '../components/Footer';

// 5th section icons
import {
  Megaphone,
  Server,
  LayoutGrid,
} from "lucide-react";

// 6th section icons
import {
  TrendingUp,
  BarChart3,
  RefreshCcw,
  Settings
} from "lucide-react";

// 7th section icon
import {
  ShoppingCart,
  Landmark,
  HeartPulse,
  GraduationCap,
  Building2,
} from "lucide-react";

// 8th section icons
import { Smartphone, Clock, Target } from "lucide-react";

// 9th section icons
import {
  Award,
  Brain,
  BadgeCheck,
} from "lucide-react";
import { section } from 'framer-motion/client';

import { MessageCircle, Send } from "lucide-react";
import Hreflang from "../HrefComp";
import { hreflangConfig } from "../HreflangConfig";



const Egypt = () => {

    // 3rd section data
    const points = [
  { icon: "🚀", text: "High delivery rates across Egyptian mobile networks" },
  { icon: "⚡", text: "Instant SMS delivery with real-time reporting" },
  { icon: "🔐", text: "Secure and compliant messaging infrastructure" },
  { icon: "🛠", text: "Easy API integration with business systems" },
  { icon: "📊", text: "Campaign analytics and performance tracking" },
  { icon: "🌍", text: "Local and international SMS coverage" },
    ];


    // 4th section data
    const complianceCards = [
  {
    title: "Egypt Regulatory Alignment",
    icon: ShieldCheck,
    points: [
      "Messaging practices aligned with Egyptian telecom regulations",
      "Support for approved sender IDs and content guidelines",
      "Opt-in and opt-out mechanisms for responsible messaging",
      "Compliance-focused routing to ensure lawful delivery",
    ],
    gradient: "from-emerald-500 to-teal-500",
    bg: "bg-emerald-50",
  },
  {
    title: "Secure SMS Gateway Egypt",
    icon: Lock,
    points: [
      "Enterprise-grade SMS gateway Egypt with encrypted transmission",
      "Secure APIs for websites, mobile apps, CRM, and ERP systems",
      "Protected data handling and access controls",
    ],
    gradient: "from-sky-500 to-blue-500",
    bg: "bg-sky-50",
  },
  {
    title: "Reliable Local Delivery",
    icon: Truck,
    points: [
      "Direct routes to Egyptian mobile operators",
      "Redundant routing and failover systems",
      "Real-time delivery reports and message status visibility",
    ],
    gradient: "from-indigo-500 to-purple-500",
    bg: "bg-indigo-50",
  },
];

// 5th section content
const steps = [
  {
    step: "01",
    title: "SMS Campaign Egypt (Promotional SMS)",
    desc: "Increase engagement and conversions with targeted SMS campaigns:",
    points: [
      "Promotions, discounts, and special offers",
      "Product launches and announcements",
      "Customer retention and re-engagement",
    ],
    icon: Megaphone,
    color: "from-yellow-400 to-orange-400",
  },
  {
    step: "02",
    title: "Transactional & OTP SMS",
    desc: "Deliver time-sensitive messages instantly:",
    points: [
      "OTP and verification messages",
      "Payment confirmations",
      "Appointment and delivery alerts",
    ],
    icon: ShieldCheck,
    color: "from-cyan-400 to-sky-400",
  },
  {
    step: "03",
    title: "SMS Gateway Egypt",
    desc: "Our high-performance SMS gateway Egypt allows businesses to send SMS at scale with speed, security, and reliability.",
    points: [],
    icon: Server,
    color: "from-emerald-400 to-teal-400",
  },
  {
    step: "04",
    title: "Bulk Messaging Platform",
    desc: "DIGINTRA provides a powerful bulk messaging platform to manage contacts, personalize messages, schedule campaigns, and track delivery results.",
    points: [],
    icon: LayoutGrid,
    color: "from-violet-400 to-purple-400",
  },
];

// 6th section content
const cards = [
  {
    title: "High SMS Open Rates",
    desc: "High SMS open rates and instant reach",
    icon: TrendingUp,
    color: "bg-orange-400",
    iconGradient: "from-orange-400 to-rose-400",
  },
  {
    title: "Real-time Reports",
    desc: "Real-time delivery and performance reports",
    icon: BarChart3,
    color: "bg-pink-400",
    iconGradient: "from-pink-400 to-fuchsia-400",
  },
  {
    title: "Two-way Messaging",
    desc: "Two-way messaging support",
    icon: RefreshCcw,
    color: "bg-teal-400",
    iconGradient: "from-teal-400 to-cyan-400",
  },
  {
    title: "Scalable Platform",
    desc: "Scalable platform for high-volume campaigns",
    icon: Settings,
    color: "bg-green-400",
    iconGradient: "from-green-400 to-emerald-400",
  },
  {
    title: "Secure Infrastructure",
    desc: "Secure APIs and encrypted infrastructure",
    icon: ShieldCheck,
    color: "bg-blue-400",
    iconGradient: "from-blue-400 to-indigo-400",
  },
  {
    title: "Nationwide Coverage",
    desc: "Nationwide coverage across Egypt",
    icon: Globe,
    color: "bg-indigo-400",
    iconGradient: "from-indigo-400 to-purple-400",
  },
];

// 7th section content
const industries = [
  {
    name: "Retail & E-commerce",
    icon: ShoppingCart,
    gradient: "from-orange-400 via-rose-400 to-pink-400",
  },
  {
    name: "Banking & Financial Services",
    icon: Landmark,
    gradient: "from-blue-400 via-indigo-400 to-violet-400",
  },
  {
    name: "Healthcare & Clinics",
    icon: HeartPulse,
    gradient: "from-red-400 via-pink-400 to-rose-400",
  },
  {
    name: "Logistics & Transportation",
    icon: Truck,
    gradient: "from-teal-400 via-cyan-400 to-sky-400",
  },
  {
    name: "Education & Training",
    icon: GraduationCap,
    gradient: "from-green-400 via-emerald-400 to-teal-400",
  },
  {
    name: "Government & Enterprises",
    icon: Building2,
    gradient: "from-purple-400 via-violet-400 to-indigo-400",
  },
];


// 8th section content
const point = [
  {
    text: "Extremely high mobile phone penetration",
    icon: Smartphone,
  },
  {
    text: "Messages read within minutes",
    icon: Clock,
  },
  {
    text: "Works on all mobile phones (no internet required)",
    icon: Globe,
  },
  {
    text: "Ideal for urgent, direct, and large-scale communication",
    icon: Target,
  },
];

// 9th section content
const trustItems = [
    {
      title: "Experience",
      desc: "Proven success delivering high-volume messaging campaigns across Egypt and the MENA region.",
      icon: Award,
      color: "cyan",
    },
    {
      title: "Expertise",
      desc: "Deep knowledge of SMS gateway Egypt, routing optimization, and compliance requirements.",
      icon: Brain,
      color: "teal",
    },
    {
      title: "Authoritativeness",
      desc: "Recognized as a reliable bulk SMS provider in Egypt by businesses across industries.",
      icon: BadgeCheck,
      color: "sky",
    },
    {
      title: "Trustworthiness",
      desc: "Secure infrastructure, transparent pricing, dedicated support, and consistent delivery performance.",
      icon: ShieldCheck,
      color: "emerald",
    },
  ];
 const colorMap = {
    cyan: {
      ring: "border-cyan-400 text-cyan-600 shadow-[0_0_25px_rgba(34,211,238,0.45)]",
      line: "bg-cyan-400",
      border: "border-cyan-200",
    },
    teal: {
      ring: "border-teal-400 text-teal-600 shadow-[0_0_25px_rgba(45,212,191,0.45)]",
      line: "bg-teal-400",
      border: "border-teal-200",
    },
    sky: {
      ring: "border-sky-400 text-sky-600 shadow-[0_0_25px_rgba(56,189,248,0.45)]",
      line: "bg-sky-400",
      border: "border-sky-200",
    },
    emerald: {
      ring: "border-emerald-400 text-emerald-600 shadow-[0_0_25px_rgba(52,211,153,0.45)]",
      line: "bg-emerald-400",
      border: "border-emerald-200",
    },
  };
  return (
    <>

     <Hreflang links={hreflangConfig} />
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
              src={Image}
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
            Bulk SMS Egypt – {" "}
            <span className="text-red-400 block md:inline">
              Reliable & Secure Bulk text Messaging
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="mb-4 md:mb-6 text-base md:text-lg text-gray-300"
          >
            Send SMS to Egypt Instantly with DIGINTRA, Fast, Secure & Scalable Bulk SMS Service in Egypt.
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
    <section className="relative py-24 bg-gradient-to-br from-sky-50 via-white to-teal-50">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            <span className="bg-gradient-to-r from-sky-600 to-teal-600 bg-clip-text text-transparent">
              Reliable Bulk SMS Service in Egypt
            </span>{" "}
            for Businesses
          </h1>

          <p className="mt-6 text-gray-700 text-lg leading-relaxed">
            Businesses across Egypt need a fast, compliant, and cost-effective way to communicate with customers at scale. 
            Bulk SMS Egypt solutions enable organizations to reach audiences directly on their mobile phones, 
            ensuring messages are delivered and read within minutes. From promotional campaigns to critical transactional alerts,
            SMS in Egypt remains one of the most effective and trusted communication channels.
          </p>

          <p className="mt-4 text-gray-700 text-lg leading-relaxed">
            DIGINTRA helps businesses send SMS to Egypt using a powerful SMS gateway Egypt, delivering high-volume
            messaging with consistent performance and nationwide reach.
          </p>

          {/* Highlight points */}
          <div className="mt-8 flex flex-wrap gap-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700">
              <Zap className="h-4 w-4" />
              Fast Delivery
            </span>

            <span className="inline-flex items-center gap-2 rounded-full bg-teal-100 px-4 py-2 text-sm font-medium text-teal-700">
              <MessageSquare className="h-4 w-4" />
              High Read Rates
            </span>

            <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
              <Globe className="h-4 w-4" />
              Nationwide Reach
            </span>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative flex justify-center lg:justify-end"
        >
          

            <img
              src="/src/assets/egypt.png"
              alt="Bulk SMS Service in Egypt"
              className="w-full max-w-lg rounded-3xl"
            />
         
        </motion.div>

      </div>
    </section>

    {/* 3rd section */}
    <section className="relative overflow-hidden py-28 bg-[#121a32]">
      
      {/* Background Mesh / Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-sky-500/20 blur-[120px]" />
        <div className="absolute top-1/2 -right-40 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-emerald-500/20 blur-[140px]" />
        <div className="absolute bottom-[-200px] left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[160px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight
            bg-gradient-to-r from-sky-400 via-emerald-400 to-indigo-400
            bg-clip-text text-transparent">
            Why Choose{" "}
            <span className="underline decoration-emerald-400/40 decoration-4 underline-offset-8">
              DIGINTRA
            </span>{" "}
            for Bulk SMS in Egypt?
          </h2>

          <p className="mt-8 text-slate-300 text-lg leading-relaxed">
            DIGINTRA is a reliable bulk SMS provider in Egypt, supporting businesses
            with secure, scalable, and high-performance messaging solutions. Our
            experience, enterprise-grade infrastructure, and local routing make us
            a preferred partner for the SMS campaign Egypt needs.
          </p>
        </motion.div>

        {/* Right Cards */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {points.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-white/10
                bg-white/5 backdrop-blur-xl p-5
                transition-all duration-300
                hover:-translate-y-2
                hover:border-sky-400/40
                hover:shadow-[0_0_40px_rgba(56,189,248,0.35)]"
            >
              {/* Top Accent */}
              <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl
                bg-gradient-to-r from-sky-400 to-emerald-400" />

              <div className="flex items-start gap-4 pt-3">
                <span className="text-2xl">{item.icon}</span>
                <p className="text-slate-200 text-base leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>

          {/* 4th section */}
          <section className="py-28 bg-gradient-to-br from-sky-50 via-white to-teal-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold
            bg-gradient-to-r from-sky-600 via-teal-600 to-emerald-600
            bg-clip-text text-transparent">
            Compliance, Security & Trust You Can Rely on in Egypt
          </h2>

          <p className="mt-6 text-gray-700 text-lg leading-relaxed">
            DIGINTRA delivers Bulk SMS Egypt services with a strong focus on regulatory
            alignment, data protection, and message reliability. Our platform is designed
            to support lawful messaging while protecting user data and meeting local
            telecom standards.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
          {complianceCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-3xl bg-white border border-gray-100 p-8
                  shadow-sm transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_20px_45px_rgba(59,130,246,0.18)]"
              >
                {/* Icon */}
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl
                  bg-gradient-to-r ${card.gradient} text-white shadow-md`}
                >
                  <Icon className="h-7 w-7" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-800">
                  {card.title}
                </h3>

                {/* Bullet Points */}
                <ul className="mt-5 space-y-3 text-gray-700">
                  {card.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className={`mt-2 h-2.5 w-2.5 rounded-full bg-gradient-to-r ${card.gradient}`} />
                      <span className="leading-relaxed">
                        {point}
                      </span>
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
    <section className="relative py-28 bg-gradient-to-br from-[#050B1E] via-[#070E2B] to-[#050B1E] text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Our Bulk SMS Egypt Solutions
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-yellow-400 via-cyan-400 to-emerald-400" />

          <div className="space-y-14">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-start gap-10"
                >
                  {/* Step Circle */}
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full
                    border border-white/20 bg-[#050B1E] text-sm font-semibold text-white">
                    {item.step}
                  </div>

                  {/* Redesigned Card */}
                  <div className="relative flex-1 rounded-2xl bg-white/5 backdrop-blur
                    border border-white/10 p-7
                    hover:border-white/20 transition-all duration-300
                    hover:shadow-[0_0_40px_rgba(56,189,248,0.25)]">

                    {/* Gradient Accent */}
                    <div className={`absolute left-0 top-0 h-full w-1.5 rounded-l-2xl bg-gradient-to-b ${item.color}`} />

                    <div className="flex gap-5">
                      {/* Icon Badge */}
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-xl
                        bg-gradient-to-br ${item.color} text-black shadow-lg`}
                      >
                        <Icon className="h-7 w-7" />
                      </div>

                      {/* Content */}
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-sm text-slate-400">
                          {item.desc}
                        </p>

                        {/* Bullet Points */}
                        {item.points.length > 0 && (
                          <ul className="mt-4 space-y-2 text-sm text-slate-300">
                            {item.points.map((point, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>

    {/* 6th section  */}
    <section className="py-24 bg-gradient-to-b from-[#a2cccc] to-[#d7ecec]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-600 to-sky-600 bg-clip-text text-transparent">
            Key Features of Our Bulk SMS Service in Egypt
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="relative"
              >
                {/* White Outline */}
                <div className="relative w-[270px] h-[150px] bg-white clip-chevron p-[6px] shadow-lg">

                  {/* Inner Card */}
                  <div
                    className={`relative h-full w-full ${card.color} clip-chevron
                    px-5 pt-5 text-white`}
                  >
                    {/* Icon Badge */}
                    <div
                      className={`absolute top-4 left-4 flex h-10 w-10 items-center justify-center
                      rounded-full bg-gradient-to-r ${card.iconGradient} shadow-md`}
                    >
                      <Icon className="h-5 w-5 text-white" />
                    </div>

                    {/* Text */}
                    <div className="mt-12">
                      <h4 className="text-sm font-semibold">
                        {card.title}
                      </h4>
                      <p className="mt-1 text-xs opacity-90 leading-snug">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Chevron Clip Path */}
      <style>{`
        .clip-chevron {
          clip-path: polygon(
            0 0,
            90% 0,
            100% 50%,
            90% 100%,
            0 100%,
            6% 50%
          );
        }
      `}</style>
    </section>

        {/* 7th section */}
         <section className="py-24 bg-gradient-to-b from-slate-50 via-white to-sky-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-600 to-sky-600 bg-clip-text text-transparent">
            Industries We Serve in Egypt
          </h2>

          <p className="mt-4 text-gray-700 text-lg">
            DIGINTRA supports a wide range of industries with reliable Bulk SMS Egypt solutions:
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="relative group"
              >
                {/* Gradient Border */}
                <motion.div
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  className={`p-[2px] rounded-2xl bg-gradient-to-r ${item.gradient}
                  bg-[length:200%_200%]`}
                >
                  {/* Card */}
                  <div className="rounded-2xl bg-white p-6 h-full
                    shadow-sm transition-all duration-300
                    group-hover:shadow-[0_20px_45px_rgba(59,130,246,0.18)]">

                    {/* Icon */}
                    <div
                      className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl
                      bg-gradient-to-r ${item.gradient} text-white shadow-md`}
                    >
                      <Icon className="h-7 w-7" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.name}
                    </h3>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Text */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <p className="text-gray-700 text-lg">
            Our industry expertise ensures compliant and effective messaging strategies.
          </p>
        </div>

      </div>
    </section>

    {/* 8th section */}
          <section className="relative overflow-hidden py-28 bg-[#020617] text-white">
      
      {/* Top Cyan Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[300px] w-[600px]
        bg-cyan-500/30 blur-[140px]" />

      {/* Top Accent Line */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 h-[2px] w-[160px] bg-cyan-400" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r
            from-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Why Bulk SMS Works in Egypt
          </h2>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Points */}
          <div className="space-y-6">
            {point.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded-xl
                  border border-white/10 bg-white/5 backdrop-blur
                  p-5 transition-all duration-300
                  hover:border-cyan-400/40
                  hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]"
                >
                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg
                    bg-cyan-400/10 text-cyan-400">
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Text */}
                  <p className="text-slate-200 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Highlighted Paragraph */}
          <div className="relative rounded-2xl border border-cyan-400/20
            bg-gradient-to-br from-white/5 to-white/0 backdrop-blur
            p-8 shadow-[0_0_40px_rgba(34,211,238,0.15)]">

            {/* Accent Line */}
            <div className="absolute top-0 left-0 h-full w-1 rounded-l-2xl
              bg-gradient-to-b from-cyan-400 to-teal-400" />

            <p className="text-slate-300 text-lg leading-relaxed pl-4">
              <span className="text-cyan-400 font-semibold">
                Bulk SMS continues to be one of the most effective customer
                engagement channels for businesses in Egypt.
              </span>{" "}
              With unmatched reach, instant visibility, and device-independent
              delivery, SMS enables organizations to communicate critical
              messages at scale with speed and reliability.
            </p>
          </div>

        </div>
      </div>
    </section>

    {/* 9th section */}
    <section className="relative py-28 bg-gradient-to-br from-teal-50 via-white to-sky-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Why{" "}
            <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-sky-600 bg-clip-text text-transparent">
              DIGINTRA
            </span>{" "}
            is a Trusted Bulk SMS Provider in Egypt
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            const colors = colorMap[item.color];

            return (
              <div
                key={index}
                className={`relative rounded-3xl bg-white p-8 text-center
                border ${colors.border}
                shadow-sm transition-all duration-300
                hover:-translate-y-1
                hover:shadow-[0_20px_45px_rgba(59,130,246,0.18)]`}
              >
                {/* Glowing Ring */}
                <div
                  className={`mx-auto flex h-20 w-20 items-center justify-center
                  rounded-full border-2 bg-white ${colors.ring}`}
                >
                  <Icon className="h-9 w-9" />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>

                {/* Bottom Line */}
                <div
                  className={`mx-auto mt-6 h-[3px] w-16 rounded-full ${colors.line}`}
                />
              </div>
            );
          })}
        </div>

      </div>
    </section>


    {/* 10th section */}
    <section className="relative overflow-hidden py-32 bg-gradient-to-br from-sky-50 via-white to-teal-50">
      
      {/* Soft Background Glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[320px] w-[520px]
        bg-teal-300/30 blur-[140px]" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Get Started with{" "}
          <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-sky-600 bg-clip-text text-transparent">
            Bulk SMS Egypt
          </span>{" "}
          Today
        </h2>

        {/* Description */}
        <p className="mt-6 text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Whether you need to send SMS to Egypt, launch an SMS campaign Egypt, or
          integrate a reliable SMS gateway Egypt, DIGINTRA is your trusted
          messaging partner.
        </p>

        <p className="mt-3 text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Contact us today to start your Bulk SMS campaigns and reach customers
          across Egypt instantly.
        </p>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">

          {/* Talk to Expert */}
          <button
            className="inline-flex items-center justify-center gap-3 rounded-full
            border border-teal-500 bg-white px-8 py-4 text-teal-600 font-semibold
            transition-all duration-300
            hover:bg-teal-50 hover:shadow-[0_15px_35px_rgba(20,184,166,0.25)]"
          >
            <MessageCircle className="h-5 w-5" />
            Talk to an SMS Expert
          </button>

          {/* Start Bulk SMS */}
          <button
            className="inline-flex items-center justify-center gap-3 rounded-full
            bg-gradient-to-r from-teal-600 to-sky-600 px-8 py-4 text-white font-semibold
            shadow-md transition-all duration-300
            hover:shadow-[0_20px_45px_rgba(14,165,233,0.35)]"
          >
            <Send className="h-5 w-5" />
            Start Bulk SMS Now
          </button>

        </div>

      </div>
    </section>


    <Footer/>
    </>
  )
}

export default Egypt