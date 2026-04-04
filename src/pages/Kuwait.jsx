import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle } from "lucide-react";
import Image from "../assets/bulk-sms-kuwait.png"
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import Image2 from "../assets/kuwait-bulk-sms.jpg"
import Image3 from "../assets/kuwait-image1.jpg"
import Image4 from "../assets/kuwait-image2.jpg"
import Image5 from "../assets/kuwait-image3.jpg"
import Hreflang from "../HrefComp";
import { hreflangConfig } from "../HreflangConfig";

// 4th section icons
import { Monitor, Search } from "lucide-react";

// 5th section icon
import {
  Rocket,
  ShieldCheck,
  Zap,
  BarChart3,
  Plug,
  MessageSquare,
  Smartphone,
} from "lucide-react";
import { section } from 'framer-motion/client';

import {
  
  Settings,
  Award,
  Users,
} from "lucide-react";

const Kuwait = () => {


    // 3rd section content
    const cards = [
  {
    title: "Kuwait Regulatory Compliance",
    points: [
      "Fully compliant with CITRA guidelines",
      "Kuwait-approved Sender IDs & templates",
      "Authorized local telecom routing",
      "Opt-in & opt-out compliance"
    ],
    gradient: "from-amber-400 to-orange-500",
    bg: "bg-amber-50"
  },
  {
    title: "Secure SMS Gateway Infrastructure",
    points: [
      "Enterprise-grade SMS gateway Kuwait",
      "Encrypted message transmission",
      "Secure APIs for integrations",
      "Protected data handling"
    ],
    gradient: "from-emerald-400 to-teal-500",
    bg: "bg-emerald-50"
  },
  {
    title: "Reliable Local Delivery",
    points: [
      "Direct connectivity with Kuwait networks",
      "Redundant routes & failover systems",
      "High delivery success rates",
      "Real-time delivery reports"
    ],
    gradient: "from-sky-400 to-indigo-500",
    bg: "bg-sky-50"
  }
];

// 5th section content
const industries = [
  { title: "Banking & Financial Services", icon: "💰" },
  { title: "Retail & E-commerce", icon: "🛒" },
  { title: "Healthcare & Clinics", icon: "🏥" },
  { title: "Education & Training Centers", icon: "🎓" },
  { title: "Logistics & Transportation", icon: "🚚" },
  { title: "Government & Enterprises", icon: "🏢" },
];


// 7th section content
const points = [
  "Over 95% SMS open rate",
  "Messages read within minutes",
  "Works on all mobile phones (no internet required)",
  "Perfect for direct and urgent communication",
];

// 8th section content
const steps = [
  {
    step: "01",
    title: "Experience",
    desc: "Years of hands-on experience delivering high-volume bulk SMS messaging campaigns across Kuwait.",
    icon: Settings,
  },
  {
    step: "02",
    title: "Expertise",
    desc: "Our SMS specialists understand local telecom regulations, sender ID approvals, and best practices for higher delivery rates.",
    icon: ShieldCheck,
  },
  {
    step: "03",
    title: "Authoritativeness",
    desc: "DIGINTRA is recognized as a reliable bulk SMS provider in Kuwait, serving SMEs, enterprises, and government organizations.",
    icon: Award,
  },
  {
    step: "04",
    title: "Trustworthiness",
    desc: "Secure infrastructure, transparent pricing, dedicated customer support, and 99.9% uptime SMS gateway.",
    icon: Users,
  },
];
    

  return (
    <>
<Hreflang links={hreflangConfig} />
    <Helmet>
                        <meta name="robots" content="index, follow" />
                        <title>Bulk SMS Kuwait | Trusted Bulk SMS Provider – DIGINTRA</title>
                        <meta
                          name="description"
                          content="Reliable bulk SMS Kuwait services by DIGINTRA. Secure SMS gateway, high delivery rates & compliant bulk messaging for businesses."
                        />
                        <link
                          rel="canonical"
                          href="https://digintra.com/bulk-sms-kuwait"
                        />
                      </Helmet>
      {/* Hero Section */}
      <section className="flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-r from-sky-950 to-sky-900 px-4 pt-[120px] md:px-6">
        
        {/* Main Content */}
        <div className="flex w-full max-w-6xl items-center gap-6 md:gap-10 flex-col md:flex-row">
          
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex w-full md:w-1/2 items-center justify-center"
          >
            <div className="rounded-2xl bg-gradient-to-r from-blue-200 to-orange-200 p-4 md:p-6 w-full">
              <img
                src={Image}
                alt="Bulk SMS Kuwait"
                className="rounded-xl w-full"
              />
            </div>
          </motion.div>

          {/* Right Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="flex w-full md:w-1/2 flex-col justify-center text-white mt-4 md:mt-0 text-center md:text-left"
          >
            <h1 className="mb-3 md:mb-4 text-2xl md:text-4xl font-bold leading-snug md:leading-tight">
              Bulk SMS Kuwait –{" "}
              <span className="text-red-400 block md:inline">
                Reliable Bulk Messaging Solutions
              </span>
            </h1>

            <p className="mb-4 md:mb-6 text-base md:text-lg text-gray-300">
              Reach Thousands Instantly with Kuwait’s Trusted Bulk SMS Provider, Powerful, 
              Fast & Secure Bulk SMS Messaging for Businesses in Kuwait
            </p>

            {/* Buttons */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15 }
                }
              }}
              className="flex gap-3 md:gap-4 justify-center md:justify-start flex-col sm:flex-row"
            >
              <motion.button
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-lg transition bg-white px-4 md:px-6 py-2 md:py-3 font-semibold text-black w-full sm:w-auto"
              >
                Get Started
              </motion.button>

              <motion.button
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-lg transition hover:bg-[#e4415b] bg-[#f64f6a] px-4 md:px-6 py-2 md:py-3 font-semibold text-white w-full sm:w-auto"
              >
                Request Free Demo
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Boxed Description */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-10 w-full max-w-6xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8 shadow-lg"
        >
          <p className="text-center text-sm md:text-base text-gray-200 leading-relaxed">
            Businesses across Kuwait rely on fast and compliant communication channels to engage customers effectively. 
            Bulk SMS Kuwait solutions enable brands to reach audiences directly on their mobile phones, ensuring messages 
            are delivered and read within seconds. From promotional campaigns to time-sensitive transactional alerts, 
            bulk SMS messaging remains one of the most trusted communication methods in Kuwait. DIGINTRA operates with 
            Kuwait-approved sender IDs, direct routes to local telecom operators, and adherence to Kuwait CITRA regulations, 
            making us a dependable bulk SMS provider in Kuwait. With nationwide coverage and enterprise-grade infrastructure, 
            our secure SMS gateway Kuwait supports scalable and reliable messaging for businesses across the country.
          </p>
        </motion.div>

      </section>

        {/* Why Choose Us Section */}
      <section className="w-full bg-slate-50 py-16 px-4 md:px-6">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-10">
        
        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full md:w-1/2"
        >
          <div className="rounded-2xl bg-white p-4 shadow-lg">
            <img
              src={Image2}
              alt="DIGINTRA Bulk SMS Kuwait"
              className="rounded-xl w-full"
            />
          </div>
        </motion.div>

        {/* Content Side */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
          className="w-full md:w-1/2"
        >
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-2xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            Why Choose DIGINTRA for Bulk SMS in Kuwait?
          </motion.h2>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-slate-600 text-base md:text-lg mb-4 leading-relaxed"
          >
            DIGINTRA is a leading bulk SMS provider in Kuwait, delivering fast,
            secure, and scalable bulk SMS messaging solutions for businesses of
            all sizes. Whether you want to send promotions, alerts, OTPs, or
            transactional messages, our SMS gateway Kuwait ensures instant
            delivery and maximum reach.
          </motion.p>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-slate-600 text-base md:text-lg leading-relaxed"
          >
            With years of experience in mass texting platforms, DIGINTRA helps
            Kuwaiti businesses communicate effectively, improve customer
            engagement, and drive higher conversions.
          </motion.p>

          {/* Optional CTA */}
          <motion.button
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 inline-flex rounded-lg bg-sky-900 px-6 py-3 text-white font-semibold shadow-md hover:bg-sky-800 transition"
          >
            Talk to Our Experts
          </motion.button>
        </motion.div>
      </div>
    </section>

    {/* 3rd Section - Compliance, Security & Trust */}
    <section className="w-full bg-white py-20 px-4 md:px-6">
      <div className="mx-auto max-w-6xl">
        
        {/* Heading */}
        <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="text-center mb-14"
>
  <h2 className="mb-5 text-2xl md:text-4xl font-bold leading-tight
    bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-600
    bg-clip-text text-transparent">
    Compliance, Security & Trust You Can Rely on in Kuwait
  </h2>

  {/* Accent Line */}
  <div className="mx-auto mb-5 h-1 w-24 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500"></div>

  <p className="max-w-4xl mx-auto text-slate-500 text-base md:text-lg leading-relaxed">
    DIGINTRA is committed to delivering <span className="font-medium text-slate-700">Bulk SMS Kuwait</span> services that meet
    the highest standards of regulatory compliance, data security, and operational
    reliability. Our infrastructure and processes are aligned with Kuwait’s telecom
    and data protection requirements, giving businesses complete confidence in their
    messaging campaigns.
  </p>
        </motion.div>


        {/* Cards */}
         <div className="mx-auto max-w-6xl">

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 }
            }
          }}
          className="grid md:grid-cols-3 gap-8"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 }
              }}
              className={`relative rounded-2xl ${card.bg} shadow-lg hover:shadow-xl transition p-6`}
            >
              {/* Gradient Heading */}
              <div
                className={`inline-block rounded-lg bg-gradient-to-r ${card.gradient} px-4 py-1.5 mb-4`}
              >
                <h3 className="text-sm font-semibold text-white">
                  {card.title}
                </h3>
              </div>

              {/* Content */}
              <ul className="space-y-3 text-slate-700 text-sm md:text-base leading-relaxed">
                {card.points.map((point, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-slate-900 font-semibold">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

      </div>

        {/* Trust Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 rounded-2xl bg-sky-900 px-6 py-10 text-center text-white"
        >
          <h3 className="text-xl md:text-2xl font-semibold mb-3">
            Trusted by Businesses Across Kuwait
          </h3>
          <p className="max-w-4xl mx-auto text-sky-100 text-sm md:text-base leading-relaxed">
            Organizations across retail, banking, healthcare, logistics,
            education, and government sectors trust DIGINTRA as a reliable bulk
            SMS provider in Kuwait. Our proven experience with high-volume bulk
            messaging campaigns ensures consistent performance, regulatory peace
            of mind, and long-term reliability.
          </p>
        </motion.div>

      </div>
    </section>

    {/* 4th Section - Our Bulk SMS Kuwait Solutions */}
         <section className="bg-gradient-to-b from-teal-50 to-red-100 py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4
            bg-gradient-to-r from-teal-600 via-indigo-500 to-purple-600
            bg-clip-text text-transparent">
            Our Bulk SMS Kuwait Solutions
          </h2>
          <div className="mx-auto h-1 w-45 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500"></div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Card 01 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative bg-white rounded-xl p-6 shadow-xl overflow-hidden"
          >
            <Monitor className="w-6 h-6 mb-4 text-slate-800" />
            <h3 className="font-semibold text-slate-900 mb-3">
              Promotional Bulk SMS
            </h3>
            <p className="mb-2 text-sm text-slate-600">
              Boost sales and brand awareness with targeted bulk messaging campaigns. Ideal for:
            </p>
            <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
              <li>Retail offers & discounts</li>
              <li>Event promotions</li>
              <li>New product launches</li>
            </ul>
            <div className="absolute bottom-0 left-0 w-full h-5 bg-gradient-to-r from-pink-400 to-red-400" />
            <span className="absolute -bottom-0 right-4 text-4xl font-bold text-pink-400">01</span>
          </motion.div>

          {/* Card 02 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-white rounded-xl p-6 shadow-xl overflow-hidden"
          >
            <Rocket className="w-6 h-6 mb-4 text-slate-800" />
            <h3 className="font-semibold text-slate-900 mb-3">
              Transactional SMS
            </h3>
            <p className="mb-2 text-sm text-slate-600">
              Deliver time-critical messages with high reliability:
            </p>
            <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
              <li>OTP & verification codes</li>
              <li>Payment confirmations</li>
              <li>Booking & delivery updates</li>
            </ul>
            <div className="absolute bottom-0 left-0 w-full h-5 bg-gradient-to-r from-orange-400 to-amber-400" />
            <span className="absolute -bottom-0 right-4 text-4xl font-bold text-orange-400">02</span>
          </motion.div>

          {/* Card 03 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative bg-white rounded-xl p-6 shadow-xl overflow-hidden"
          >
            <BarChart3 className="w-6 h-6 mb-4 text-slate-800" />
            <h3 className="font-semibold text-slate-900 mb-3">
              SMS Gateway Kuwait
            </h3>
            <p className="mb-2 text-sm text-slate-600">
              Our robust SMS gateway Kuwait integrates seamlessly with:
            </p>
            <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
              <li>Websites</li>
              <li>Mobile apps</li>
              <li>CRM & ERP systems</li>
            </ul>
            <p className="mt-2 text-sm text-slate-600">
              Using APIs that ensure speed, security, and compliance.
            </p>
            <div className="absolute bottom-0 left-0 w-full h-5 bg-gradient-to-r from-blue-400 to-indigo-400" />
            <span className="absolute -bottom-0 right-4 text-4xl font-bold text-blue-400">03</span>
          </motion.div>

          {/* Card 04 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-white rounded-xl p-6 shadow-xl overflow-hidden"
          >
            <Search className="w-6 h-6 mb-4 text-slate-800" />
            <h3 className="font-semibold text-slate-900 mb-3">
              Mass Texting Platforms
            </h3>
            <p className="mb-2 text-sm text-slate-600">
              Manage your campaigns easily with DIGINTRA’s advanced mass texting platforms:
            </p>
            <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
              <li>Contact list management</li>
              <li>Message scheduling</li>
              <li>Real-time delivery reports</li>
              <li>Personalization & sender ID support</li>
            </ul>
            <div className="absolute bottom-0 left-0 w-full h-5 bg-gradient-to-r from-violet-400 to-teal-400" />
            <span className="absolute -bottom-0 right-4 text-4xl font-bold text-purple-400">04</span>
          </motion.div>

        </div>
      </div>
        </section>


          {/* 5th Section - CTA */}
           <section className="bg-[#0a0702] py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-lg">
            DIGINTRA Bulk SMS Features
          </h2>
          <div className="mx-auto h-1 w-32 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 shadow-lg"></div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl bg-gradient-to-br from-purple-900 to-indigo-900 p-6
              border border-purple-400/50 shadow-[0_0_15px_rgba(128,0,255,0.4)]
              hover:shadow-[0_0_25px_rgba(128,0,255,0.7)] transition transform hover:-translate-y-1"
          >
            <Rocket className="mb-4 text-purple-400" size={36} />
            <p className="text-white font-semibold text-lg">
              🚀 High Delivery Rate in Kuwait
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl bg-gradient-to-br from-blue-900 to-indigo-800 p-6
              border border-blue-400/50 shadow-[0_0_15px_rgba(0,191,255,0.4)]
              hover:shadow-[0_0_25px_rgba(0,191,255,0.7)] transition transform hover:-translate-y-1"
          >
            <ShieldCheck className="mb-4 text-blue-400" size={36} />
            <p className="text-white font-semibold text-lg">
              🔐 Secure & Compliant SMS Gateway
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl bg-gradient-to-br from-yellow-900 to-orange-900 p-6
              border border-yellow-400/50 shadow-[0_0_15px_rgba(255,215,0,0.4)]
              hover:shadow-[0_0_25px_rgba(255,215,0,0.7)] transition transform hover:-translate-y-1"
          >
            <Zap className="mb-4 text-yellow-400" size={36} />
            <p className="text-white font-semibold text-lg">
              ⚡ Instant Message Delivery
            </p>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl bg-gradient-to-br from-emerald-900 to-teal-900 p-6
              border border-emerald-400/50 shadow-[0_0_15px_rgba(0,255,128,0.4)]
              hover:shadow-[0_0_25px_rgba(0,255,128,0.7)] transition transform hover:-translate-y-1"
          >
            <BarChart3 className="mb-4 text-emerald-400" size={36} />
            <p className="text-white font-semibold text-lg">
              📊 Real-Time Analytics & Reports
            </p>
          </motion.div>

          {/* Card 5 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative rounded-2xl bg-gradient-to-br from-purple-800 to-pink-900 p-6
              border border-pink-400/50 shadow-[0_0_15px_rgba(255,0,255,0.4)]
              hover:shadow-[0_0_25px_rgba(255,0,255,0.7)] transition transform hover:-translate-y-1"
          >
            <Plug className="mb-4 text-pink-400" size={36} />
            <p className="text-white font-semibold text-lg">
              🛠 Easy API Integration
            </p>
          </motion.div>

          {/* Card 6 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative rounded-2xl bg-gradient-to-br from-pink-900 to-red-900 p-6
              border border-red-400/50 shadow-[0_0_15px_rgba(255,0,128,0.4)]
              hover:shadow-[0_0_25px_rgba(255,0,128,0.7)] transition transform hover:-translate-y-1"
          >
            <MessageSquare className="mb-4 text-red-400" size={36} />
            <p className="text-white font-semibold text-lg">
              💬 Arabic & English SMS Support
            </p>
          </motion.div>

          {/* Card 7 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1 }}
            className="relative rounded-2xl bg-gradient-to-br from-indigo-900 to-purple-900 p-6
              border border-indigo-400/50 shadow-[0_0_15px_rgba(75,0,130,0.4)]
              hover:shadow-[0_0_25px_rgba(75,0,130,0.7)] transition transform hover:-translate-y-1"
          >
            <Smartphone className="mb-4 text-indigo-400" size={36} />
            <p className="text-white font-semibold text-lg">
              📱 Supports All Kuwait Mobile Networks
            </p>
          </motion.div>

        </div>
      </div>
    </section>


          {/* 6th Section - Industries We Serve */}
          <section className="flex justify-center bg-gray-50 py-12 px-6">
      {/* Container to limit max width */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl">
        
        {/* Left Image + Circle */}
        <div className="relative w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
          <div className="w-74 h-74 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl border-4 border-gradient-to-r from-green-300 via-teal-200 to-blue-200">
            <img
              src={Image5}
              alt="Industries Illustration" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-500">
            Industries We Serve in Kuwait
          </h2>
          <p className="text-gray-700">
            DIGINTRA’s bulk SMS Kuwait services are trusted by businesses across multiple sectors:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {industries.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-gradient-to-r from-green-50 via-teal-50 to-blue-50"
              >
                <div className="text-3xl">{item.icon}</div>
                <div className="text-gray-800 font-semibold">{item.title}</div>
              </div>
            ))}
          </div>

          <p className="text-gray-600 mt-4">
            Our experience across industries ensures messaging strategies that comply with local regulations and customer expectations.
          </p>
        </div>
      </div>
    </section>

        {/* 7th section */}
     <section className="relative w-full min-h-[520px] overflow-hidden flex items-center">
      
      {/* FULL BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src={Image4}
          alt="Two Way SMS Communication"
          className="w-full h-full object-cover"
        />

        {/* DARK GRADIENT FOR READABILITY */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/60" />
      </div>

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        
        {/* HEADING & PARAGRAPH (OUTSIDE CARD) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mb-8"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Why Bulk SMS Works in Kuwait
          </h2>

          
        </motion.div>

        {/* BULLET CARD ONLY */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          animate={{ y: [0, -6, 0] }}
          className="
            max-w-lg
            rounded-3xl
            bg-[#2f3e34]/85
            backdrop-blur-xl
            p-8
            shadow-2xl
          "
        >
          <ul className="space-y-4">
            {points.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 }}
                className="flex items-start gap-3 text-gray-100"
              >
                <CheckCircle className="text-green-400 mt-1" size={20} />
                <span className="leading-relaxed">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
            <p className="text-gray-200 leading-relaxed mt-7">
            Bulk SMS remains one of the most effective digital communication <br />
            channels in Kuwait, especially for businesses seeking instant reach.
          </p>
      </div>
    </section>

    {/* 8th Section - Timeline */}
    <section className="w-full py-24 bg-gradient-to-br from-[#f7fbff] via-[#f1f9f6] to-[#eef6f4]">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mb-20 mx-auto"
        >
          <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-teal-500 via-emerald-500 to-sky-500 bg-clip-text text-transparent">
            Why DIGINTRA is a Trusted Bulk SMS Provider in Kuwait
          </h2>
          <p className="text-gray-600">
            Our approach is built on experience, expertise, and a commitment to
            delivering secure, reliable, and compliant bulk SMS solutions.
          </p>
        </motion.div>

        {/* TIMELINE (CENTERED BLOCK, NOT CENTER TEXT) */}
        <div className="relative max-w-3xl mx-auto">

          {/* Vertical Line */}
          <div className="absolute left-8 top-0 h-full w-[2px] bg-gradient-to-b from-teal-300 to-emerald-300" />

          <div className="space-y-14">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-8 items-start"
                >
                  {/* LEFT ICON CARD */}
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center border border-teal-200">
                      <Icon className="text-teal-600" size={26} />
                    </div>

                  </div>

                  {/* RIGHT CONTENT */}
                  <div className="rounded-2xl p-6 max-w-xl shadow-md bg-gradient-to-br from-white via-teal-50 to-emerald-50">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>

                    {item.title === "Trustworthiness" && (
                      <ul className="mt-4 space-y-2">
                        {[
                          "Secure infrastructure",
                          "Transparent pricing",
                          "Dedicated customer support",
                          "99.9% uptime SMS gateway",
                        ].map((point, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-gray-600"
                          >
                            <CheckCircle
                              size={16}
                              className="text-emerald-500 mt-1"
                            />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>

    {/* 9th Section - Final CTA */}
    <section className="relative w-full min-h-[520px] flex items-center overflow-hidden py-32">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src={Image3}
          alt="Bulk SMS Kuwait"
          className="w-full h-full object-cover"
        />

        {/* DARK BASE OVERLAY */}
        <div className="absolute inset-0 bg-black/60" />

        {/* ANIMATED GRADIENT OVERLAY */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-gray-500/50 via-teal-400/25 to-sky-500/25 bg-[length:200%_200%]"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {/* HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-extrabold mb-6
              bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400
              bg-clip-text text-transparent"
          >
            Get Started with Bulk SMS Kuwait Today
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="text-gray-200 text-lg leading-relaxed mb-10"
          >
            Whether you need a reliable SMS gateway Kuwait, powerful mass texting
            platforms, or end-to-end bulk messaging solutions, DIGINTRA is your
            trusted partner.
            <br />
            <br />
            Contact us today to launch your Bulk SMS campaign in Kuwait and
            connect with your audience instantly.
          </motion.p>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap gap-4">
            {/* PRIMARY BUTTON */}
            <motion.a
              whileHover={{ scale: 1.08, boxShadow: "0px 0px 30px rgba(16,185,129,0.6)" }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="
                px-9 py-4 rounded-full
                bg-gradient-to-r from-emerald-500 to-teal-500
                text-white font-semibold
                shadow-xl
              "
            >
              Talk to an SMS Expert
            </motion.a>

            {/* SECONDARY BUTTON */}
            <motion.a
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              href="#start"
              className="
                px-9 py-4 rounded-full
                border border-white/70
                text-white font-semibold
                backdrop-blur-sm
                hover:bg-white hover:text-gray-900
                transition
              "
            >
              Start Bulk SMS Now
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>

    <Footer/>
    </>
  )
}

export default Kuwait
