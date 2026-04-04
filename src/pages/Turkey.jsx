
import { motion } from "framer-motion";
import { section } from "framer-motion/client";
import { MessageCircle } from "lucide-react";
import Image1 from "../assets/bulk-sms-turkey.png"
import Footer from "../components/Footer";

// 3rd section icon
import {
  Rocket,
  Zap,
  Wrench,
  Globe,
} from "lucide-react";

// 4th section icon
import {
  ShieldCheck,
  Lock,
  MapPin,
} from "lucide-react";

// 5ht section icon
import {
  Megaphone,
  Server,
} from "lucide-react";

// 6th section icon
import {
  TrendingUp,
  BarChart3,
  RefreshCcw,
  Settings
} from "lucide-react";

// 7th section icons
import {
  ShoppingCart,
  Landmark,
  HeartPulse,
  Truck,
  GraduationCap,
  Plane,
} from "lucide-react";

// 9th section icons
import { Award, BadgeCheck } from "lucide-react";
import Hreflang from "../HrefComp";
import { hreflangConfig } from "../HreflangConfig";




const Turkey = () => {

    // 3rd section data
    const features = [
  {
    icon: Rocket,
    text: "High delivery rates across Turkish mobile networks",
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: Zap,
    text: "Instant SMS delivery with real-time reports",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: ShieldCheck,
    text: "Secure and compliant SMS infrastructure",
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    icon: Wrench,
    text: "Easy API integration with business platforms",
    color: "bg-cyan-100 text-cyan-600",
  },
  {
    icon: BarChart3,
    text: "Campaign tracking and analytics",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Globe,
    text: "Local and international SMS coverage",
    color: "bg-pink-100 text-pink-600",
  },
];

// 4th section content
const cards = [
  {
    title: "Turkey Regulatory Alignment",
    points: [
      "Messaging practices aligned with Turkey telecom regulations",
      "Support for approved sender IDs and content guidelines",
      "Opt-in and opt-out mechanisms for responsible SMS Turkey campaigns",
      "Compliance-focused routing for lawful SMS delivery",
    ],
    icon: ShieldCheck,
    color: "border-emerald-400 text-emerald-600",
    accent: "bg-emerald-400",
    step: "01",
  },
  {
    title: "Secure Messaging Infrastructure",
    points: [
      "Enterprise-grade SMS gateway with encrypted transmission",
      "Secure APIs for websites, mobile apps, CRM, and ERP systems",
      "Protected data handling and access controls",
    ],
    icon: Lock,
    color: "border-cyan-400 text-cyan-600",
    accent: "bg-cyan-400",
    step: "02",
  },
  {
    title: "Reliable Local Delivery",
    points: [
      "Direct routes to Turkish mobile operators",
      "Redundant routing and failover systems",
      "Real-time delivery reports and message visibility",
    ],
    icon: MapPin,
    color: "border-purple-400 text-purple-600",
    accent: "bg-purple-400",
    step: "03",
  },
];


// 5th section content
const steps = [
  {
    number: "01",
    title: "SMS Messages Marketing",
    desc: "Drive customer engagement and conversions with targeted SMS campaigns:",
    points: [
      "Promotions and special offers",
      "Product launches and announcements",
      "Customer retention campaigns",
    ],
    icon: Megaphone,
    gradient: "from-orange-400 to-orange-600",
  },
  {
    number: "02",
    title: "Transactional & OTP SMS",
    desc: "Deliver time-sensitive messages instantly:",
    points: [
      "OTP and verification messages",
      "Payment confirmations",
      "Appointment and delivery alerts",
    ],
    icon: ShieldCheck,
    gradient: "from-pink-400 to-rose-500",
  },
  {
    number: "03",
    title: "Bulk SMS Sender Platform",
    desc: "DIGINTRA provides a powerful bulk SMS sender platform for managing, personalizing, and tracking SMS campaigns at scale.",
    icon: Server,
    gradient: "from-indigo-400 to-purple-500",
  },
  {
    number: "04",
    title: "International & Local SMS Delivery",
    desc: "Send SMS to Turkey from anywhere with reliable local routing and international connectivity.",
    icon: Globe,
    gradient: "from-emerald-400 to-teal-500",
  },
];

// 6th section content
const feature = [
  { icon: TrendingUp, text: "High SMS open rates and instant reach" },
  { icon: BarChart3, text: "Real-time delivery and performance reports" },
  { icon: RefreshCcw, text: "Two-way messaging support" },
  { icon: Settings, text: "Scalable platform for high-volume campaigns" },
  { icon: ShieldCheck, text: "Secure infrastructure and encrypted APIs" },
  { icon: Globe, text: "Nationwide coverage across Turkey" },
];

// 7th section content
const industries = [
  { name: "Retail & E-commerce", icon: ShoppingCart },
  { name: "Banking & Financial Services", icon: Landmark },
  { name: "Healthcare & Clinics", icon: HeartPulse },
  { name: "Logistics & Transportation", icon: Truck },
  { name: "Education & Training", icon: GraduationCap },
  { name: "Hospitality & Travel", icon: Plane },
];

// 8th section content
const points = [
  { icon: "📲", text: "High mobile phone usage nationwide" },
  { icon: "⏱", text: "Messages read within minutes" },
  { icon: "🌍", text: "Works on all mobile devices (no internet required)" },
  { icon: "🎯", text: "Ideal for urgent and direct communication" },
];

// 9th section content
const trustData = [
  {
    title: "Experience",
    desc: "Proven success delivering high-volume messaging campaigns across Turkey and international markets.",
    icon: Award,
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Expertise",
    desc: "Deep understanding of SMS Turkey routing, delivery optimization, and compliance.",
    icon: Settings,
    color: "from-sky-500 to-blue-500",
  },
  {
    title: "Authoritativeness",
    desc: "Recognized as a reliable bulk SMS provider in Turkey by businesses across industries.",
    icon: BadgeCheck,
    color: "from-cyan-500 to-sky-500",
  },
  {
    title: "Trustworthiness",
    desc: "Secure infrastructure, transparent pricing, dedicated support, and consistent delivery performance.",
    icon: ShieldCheck,
    color: "from-teal-500 to-emerald-500",
  },
];


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
              src={Image1}
              alt="Bulk SMS Turkey"
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
            Bulk SMS Turkey – {" "}
            <span className="text-red-400 block md:inline">
              Secure & Scalable Bulk Messaging
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="mb-4 md:mb-6 text-base md:text-lg text-gray-300"
          >
            Send SMS to Turkey Instantly with a Trusted Bulk SMS Provider.
             Fast, Compliant & High-Delivery Bulk SMS Service in Turkey.
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
    <section className="relative h-[620px] md:h-[700px] w-full overflow-hidden py-20">
      
      {/* Background Image */}
      <img
        src="https://i.pinimg.com/736x/cd/9d/ad/cd9dad80b2333647b29d7939c2317a8b.jpg"
        alt="Bulk SMS Turkey"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay for readability */}
      <div
        className="absolute inset-0 bg-gradient-to-r 
        from-black/55 via-black/35 to-black/10"
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto flex items-center mb-12">
        <div className="max-w-6xl px-6 w-full">
          
          {/* Text Wrapper (LEFT) */}
          <div className="max-w-2xl">            
            {/* Heading */}
            <h1
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6
            bg-gradient-to-r from-emerald-300 via-teal-200 to-green-100
            bg-clip-text text-transparent leading-tight"
          >
            Reliable Bulk SMS Messaging Service in Turkey
            <span className="block">
              for Businesses of All Sizes
            </span>
          </h1>


            {/* Paragraphs */}
            <p className="text-white/90 mb-4 leading-relaxed">
              Businesses across Turkey rely on fast, compliant, and cost-effective
              communication channels to reach customers directly. Bulk SMS Turkey
              solutions allow organizations to send SMS to Turkey instantly,
              ensuring messages are delivered and read within minutes.
            </p>

            <p className="text-white/90 mb-4 leading-relaxed">
              From promotional campaigns to critical transactional alerts, SMS
              message marketing remains one of the most effective communication
              channels in Turkey.
            </p>

            <p className="text-white/95 font-medium leading-relaxed">
              DIGINTRA enables businesses to send SMS to Turkey securely using
              enterprise-grade infrastructure and local routing, making us a
              trusted bulk SMS provider in Turkey for high-volume messaging.
            </p>

          </div>
        </div>
      </div>
    </section>

    {/* 3rd section */}
    <section className="py-24 px-6 bg-gradient-to-br from-emerald-100 via-white to-cyan-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">

        {/* LEFT CONTENT (WIDER) */}
        <div className="lg:col-span-3">
          <h2
            className="text-3xl md:text-4xl font-extrabold mb-6 leading-relaxed
            bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500
            bg-clip-text text-transparent"
          >
            Why Choose <span className="text-yellow-400">DIGINTRA</span> <br />for Bulk SMS in Turkey?
          </h2>

          <p className="text-gray-600 leading-relaxed text-lg">
            DIGINTRA is a reliable bulk SMS provider in Turkey, helping
            businesses engage customers through scalable and compliant
            messaging solutions.
          </p>

          <p className="text-gray-600 leading-relaxed mt-4">
            Our expertise, local connectivity, and enterprise-grade systems
            make us a preferred bulk SMS sender for companies across Turkey.
          </p>
        </div>

        {/* RIGHT CARD (SMALLER + COLORED) */}
        <div className="lg:col-span-2">
          <div
            className="rounded-3xl p-7
            bg-gradient-to-br from-white via-emerald-50 to-cyan-50
            border border-emerald-100
            shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
          >
            <ul className="space-y-4">
              {features.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li
                    key={index}
                    className="flex items-start gap-4 p-3 rounded-xl
                    hover:bg-white/70 transition"
                  >
                    {/* Icon Box */}
                    <div
                      className={`w-10 h-10 flex items-center justify-center
                      rounded-xl ${item.color}`}
                    >
                      <Icon size={18} />
                    </div>

                    {/* Text */}
                    <p className="text-gray-700 font-medium text-sm leading-snug">
                      {item.text}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

      </div>
    </section>

    {/* 4th section */}
    <section className="py-24 px-6 bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      <div className="max-w-6xl mx-auto">

        {/* CENTER HEADING */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-extrabold mb-4
            bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500
            bg-clip-text text-transparent"
          >
            Compliance, Security & Trust You Can Rely On in Turkey
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
            DIGINTRA delivers Bulk SMS Turkey services with a strong focus on
            compliance, data protection, and message reliability. Our platform
            supports lawful bulk messaging while protecting user data and
            ensuring network standards are met.
          </p>
        </div>

        {/* INFOGRAPHIC CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className={`relative bg-white rounded-3xl p-7
                border-2 border-dashed ${card.color}
                shadow-md hover:shadow-xl transition`}
              >
                {/* Step Number */}
                <div
                  className={`absolute -top-4 left-6 w-10 h-10 rounded-full
                  text-white font-bold flex items-center justify-center
                  ${card.accent}`}
                >
                  {card.step}
                </div>

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl mb-5
                  flex items-center justify-center
                  ${card.accent}`}
                >
                  <Icon className="text-white" size={22} />
                </div>

                {/* Title */}
                <h3 className="font-semibold text-gray-900 mb-4">
                  {card.title}
                </h3>

                {/* Bullet Points */}
                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                  {card.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

      </div>
    </section>

    {/* 5th section */}
    <section className="py-24 px-6 bg-gradient-to-b from-gray-50 via-blue-100 to-white">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl text-center font-extrabold mb-16 bg-gradient-to-r from-emerald-700 to-blue-600 bg-clip-text text-transparent">
          Our Bulk SMS Turkey Solutions
        </h2>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`p-[2px] rounded-full
                bg-gradient-to-r ${item.gradient}`}
              >
                {/* Inner Card */}
                <div
                  className="flex items-center justify-between
                  bg-white rounded-full px-6 py-6
                  shadow-[0_12px_35px_rgba(0,0,0,0.08)]"
                >
                  {/* Number Badge */}
                  <div
                    className={`flex items-center justify-center
                    w-14 h-14 rounded-full text-white font-bold
                    bg-gradient-to-r ${item.gradient}`}
                  >
                    {item.number}
                  </div>

                  {/* Content */}
                  <div className="flex-1 px-6">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h4>

                    <p className="text-gray-600 text-sm mb-2">
                      {item.desc}
                    </p>

                    {item.points && (
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        {item.points.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-full border-2
                    flex items-center justify-center
                    bg-white`}
                    style={{
                      borderImage: `linear-gradient(to right, ${
                        item.gradient.includes("orange")
                          ? "#fb923c, #ea580c"
                          : item.gradient.includes("pink")
                          ? "#fb7185, #e11d48"
                          : item.gradient.includes("indigo")
                          ? "#818cf8, #7c3aed"
                          : "#34d399, #14b8a6"
                      }) 1`,
                    }}
                  >
                    <Icon size={20} className="text-gray-700" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>

    {/* 6th section */}
    <section className="py-28 px-6 bg-gradient-to-br from-slate-100 via-white to-slate-200">
      <div className="max-w-6xl mx-auto">

        {/* Heading OUTSIDE */}
        <h2
          className="text-3xl md:text-4xl font-extrabold mb-16 text-center
          bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500
          bg-clip-text text-transparent"
        >
          Key Features of Our Bulk SMS Service
        </h2>

        {/* CARD (fixed height, image-independent) */}
        <div
          className="bg-[#f4f5f2] rounded-3xl
          shadow-[0_30px_70px_rgba(0,0,0,0.18)]
          grid grid-cols-1 md:grid-cols-5 overflow-hidden"
        >
          
         <div className="md:col-span-2 relative overflow-hidden">
          
          {/* Image */}
          <img
            src="https://i.pinimg.com/1200x/76/ba/59/76ba5989c19fd1dcb2efc73368cd91d8.jpg"
            alt="Bulk SMS Features"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>


          {/* RIGHT CONTENT */}
          <div className="md:col-span-3 p-12 flex flex-col justify-center">
            <ul className="space-y-6">
              {feature.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li key={index}>
                    <div className="flex items-start gap-5">
                      
                      {/* ICON RING */}
                      <div
                        className="w-12 h-12 rounded-full
                        border-2 border-emerald-400
                        flex items-center justify-center
                        text-emerald-600 flex-shrink-0"
                      >
                        <Icon size={20} />
                      </div>

                      {/* TEXT */}
                      <p className="text-gray-700 text-lg leading-relaxed">
                        {item.text}
                      </p>
                    </div>

                    {/* SMALL DIVIDER */}
                    {index !== features.length - 1 && (
                      <div className="ml-[68px] mt-4 w-16 h-[2px] bg-emerald-200 rounded-full" />
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

        </div>

      </div>
    </section>

    {/* 7th section */}
    <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Industries We Serve in Turkey
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            DIGINTRA supports a wide range of industries with reliable Bulk SMS Turkey solutions:
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                {/* Gradient Border */}
                <div className="p-[1.5px] rounded-full bg-gradient-to-r from-emerald-500 to-teal-500
                  transition-all duration-300
                  group-hover:shadow-[0_14px_40px_rgba(16,185,129,0.35)]">

                  {/* Card */}
                  <div className="flex items-center gap-4 rounded-full bg-white px-6 py-5">

                    {/* Icon */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-full
                      bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md">
                      <Icon className="h-6 w-6" />
                    </div>

                    {/* Text */}
                    <h3 className="text-gray-800 font-semibold text-base md:text-lg">
                      {item.name}
                    </h3>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Last Para */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center text-gray-700 text-lg max-w-3xl mx-auto"
        >
          Our industry experience ensures compliant and effective messaging strategies.
        </motion.p>

      </div>
    </section>

    {/* 8th section */}
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-sky-50">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent">
            Why Bulk SMS Works in Turkey
          </h2>

          <div className="mt-8 space-y-4">
            {points.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group flex items-start gap-4 rounded-xl border border-blue-100 bg-blue-50/60 p-4
                  transition-all duration-300 hover:-translate-y-1
                  hover:shadow-[0_12px_30px_rgba(59,130,246,0.25)]"
              >
                <span className="text-2xl">{item.icon}</span>
                <p className="text-gray-700 text-lg">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          <p className="mt-8 text-gray-700 text-lg">
            Bulk SMS remains one of the most effective messaging channels in Turkey.
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="https://i.pinimg.com/1200x/2e/ad/b8/2eadb821de1e554e0a34da30c8b9f7b7.jpg"
            alt="Bulk SMS in Turkey"
            className="max-w-md w-full rounded-2xl
              shadow-[0_20px_50px_rgba(59,130,246,0.25)]"
          />
        </motion.div>

      </div>
    </section>
  
    {/* 9th section */}
    <section className="py-24 bg-gradient-to-br from-emerald-50 via-white to-sky-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent">
            Why DIGINTRA is a Trusted Bulk SMS Provider in Turkey
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {trustData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Card */}
                <div className="relative h-full rounded-3xl bg-white pt-10 pb-16 px-6 text-center shadow-md
                  transition-all duration-300 hover:-translate-y-2
                  hover:shadow-[0_20px_50px_rgba(14,165,233,0.25)]">

                  {/* Top Accent */}
                  <div
                    className={`absolute top-0 left-1/2 -translate-x-1/2 h-2 w-20 rounded-b-full bg-gradient-to-r ${item.color}`}
                  />

                  {/* Icon */}
                  <div
                    className={`mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full
                    bg-gradient-to-r ${item.color} text-white shadow-lg`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h3>

                  {/* Desc */}
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Bottom Number Badge */}
                  <div
                    className={`absolute -bottom-6 left-1/2 -translate-x-1/2 h-12 w-12 rounded-full
                    bg-gradient-to-r ${item.color} text-white flex items-center justify-center
                    font-bold shadow-lg`}
                  >
                    {index + 1}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>

    {/* 10th section */}
     <section className="relative overflow-hidden py-32 bg-[#050B1E] ">
      
      {/* Background Rings */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full
          border border-sky-500/30 blur-sm" />

        <div className="absolute top-1/2 -right-40 h-[520px] w-[520px] -translate-y-1/2
          rounded-full border border-emerald-500/30 blur-sm" />

        <div className="absolute bottom-[-200px] left-1/2 h-[600px] w-[600px]
          -translate-x-1/2 rounded-full border border-blue-500/20 blur-sm" />
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 text-center text-white">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold
            bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent"
        >
          Get Started with Bulk SMS Turkey Today
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-6 text-lg text-slate-300 max-w-4xl mx-auto"
        >
          Whether you need to send SMS to Turkey, run SMS messages marketing campaigns,
          or use a scalable bulk SMS sender platform, DIGINTRA is your trusted messaging partner.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-lg text-slate-300"
        >
          Contact us today to launch your Bulk SMS campaigns and reach customers across Turkey instantly.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col sm:flex-row justify-center gap-6"
        >
          {/* Primary CTA */}
          <button className="group inline-flex items-center gap-2 rounded-full
            bg-gradient-to-r from-sky-500 to-emerald-500 px-8 py-4
            font-semibold text-white transition-all duration-300
            hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(56,189,248,0.5)]">
            <MessageCircle className="h-5 w-5" />
            Talk to an SMS Expert
          </button>

          {/* Secondary CTA */}
          <button className="inline-flex items-center gap-2 rounded-full
            border border-slate-500/40 px-8 py-4 text-white
            transition-all duration-300 hover:-translate-y-1
            hover:bg-white/10 hover:shadow-[0_0_30px_rgba(148,163,184,0.3)]">
            <Rocket className="h-5 w-5" />
            Start Bulk SMS Now
          </button>
        </motion.div>

      </div>
    </section>


<Footer/>


    </>
  )
}

export default Turkey