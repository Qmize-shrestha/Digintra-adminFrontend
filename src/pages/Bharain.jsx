import { motion } from "framer-motion";
import Image1 from "../assets/bahrain-image.jpeg"
import Image2 from "../assets/bulk-sms-bahrain.png"
import Hreflang from "../HrefComp";
import { hreflangConfig } from "../HreflangConfig";

// 5rd section icon
import {
  Megaphone,
  ShieldCheck,
  Server,
  Send,
} from "lucide-react";


// 6th section icon
import {
  TrendingUp,
  BarChart3,
  RefreshCcw,
  Settings,
} from "lucide-react";

// 7th section icons
import {
  ShoppingCart,
  Landmark,
  HeartPulse,
  Plane,
  GraduationCap,
  Building2,
} from "lucide-react";


// 8th section icons
import {
  Smartphone,
  Clock,
  Globe,
  Target,
} from "lucide-react";

// 9th section icons
import {
  BadgeCheck,
} from "lucide-react";


import { PhoneCall} from "lucide-react";
import Footer from "../components/Footer";


export default function BulkSMSHeroLight() {

    // 5rd section data
    const services = [
  {
    title: "SMS Marketing Bahrain",
    label: "SMS MARKETING",
    icon: <Megaphone className="w-6 h-6 text-white" />,
    gradient: "from-orange-400 to-pink-500",
    content: [
      "Drive engagement and conversions with targeted SMS campaigns:",
      "Promotional offers and discounts",
      "Product launches and announcements",
      "Customer retention campaigns",
    ],
  },
  {
    title: "Transactional & OTP SMS",
    label: "OTP & ALERTS",
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
    gradient: "from-cyan-400 to-blue-500",
    content: [
      "Deliver time-sensitive messages instantly:",
      "OTP and verification messages",
      "Payment confirmations",
      "Appointment and delivery alerts",
    ],
  },
  {
    title: "SMS Gateway Bahrain",
    label: "SMS GATEWAY",
    icon: <Server className="w-6 h-6 text-white" />,
    gradient: "from-violet-400 to-indigo-500",
    content: [
      "Our high-performance SMS gateway Bahrain enables businesses to send bulk messages reliably and at scale.",
    ],
  },
  {
    title: "Bulk SMS Sender Platform",
    label: "SENDER PLATFORM",
    icon: <Send className="w-6 h-6 text-white" />,
    gradient: "from-emerald-400 to-teal-500",
    content: [
      "DIGINTRA provides a powerful bulk SMS sender platform with intuitive tools for campaign management, personalization, and reporting.",
    ],
  },
];

// 6th section data
const features = [
  {
    text: "High open rates and instant reach",
    icon: <TrendingUp className="w-5 h-5 text-orange-600" />,
    bg: "from-orange-500 to-red-500",
  },
  {
    text: "Real-time delivery and performance reports",
    icon: <BarChart3 className="w-5 h-5 text-sky-600" />,
    bg: "from-sky-500 to-blue-600",
  },
  {
    text: "Two-way messaging support",
    icon: <RefreshCcw className="w-5 h-5 text-emerald-600" />,
    bg: "from-emerald-500 to-teal-600",
  },
  {
    text: "Scalable infrastructure for high-volume messaging",
    icon: <Settings className="w-5 h-5 text-violet-600" />,
    bg: "from-violet-500 to-indigo-600",
  },
  {
    text: "Secure APIs and encrypted transmission",
    icon: <ShieldCheck className="w-5 h-5 text-rose-600" />,
    bg: "from-rose-500 to-pink-600",
  },
  {
    text: "Nationwide coverage across Bahrain",
    icon: <Globe className="w-5 h-5 text-cyan-600" />,
    bg: "from-cyan-500 to-blue-500",
  },
];

// 7th section data
const industries = [
  { name: "Retail & E-commerce", icon: ShoppingCart, gradient: "from-green-400 to-emerald-500" },
  { name: "Banking & Financial Services", icon: Landmark, gradient: "from-blue-400 to-sky-500" },
  { name: "Healthcare & Clinics", icon: HeartPulse, gradient: "from-rose-400 to-pink-500" },
  { name: "Hospitality & Travel", icon: Plane, gradient: "from-yellow-400 to-orange-500" },
  { name: "Education & Training", icon: GraduationCap, gradient: "from-indigo-400 to-violet-500" },
  { name: "Government & Enterprises", icon: Building2, gradient: "from-teal-400 to-cyan-500" },
];

// 8th section data
const cards = [
  {
    icon: Smartphone,
    title: "Extremely high mobile penetration",
  },
  {
    icon: Clock,
    title: "Messages read within minutes",
  },
  {
    icon: Globe,
    title: "Works on all mobile phones (no internet required)",
  },
  {
    icon: Target,
    title: "Ideal for urgent and direct communication",
  },
];

// 9th section data
const car = [
  {
    title: "Experience",
    desc: "Proven success delivering high-volume messaging campaigns across Bahrain and the GCC.",
    icon: TrendingUp,
    color: "from-green-400 to-green-500",
  },
  {
    title: "Expertise",
    desc: "Deep understanding of local telecom requirements and SMS delivery optimization.",
    icon: Settings,
    color: "from-yellow-400 to-orange-400",
  },
  {
    title: "Authoritativeness",
    desc: "Recognized as a reliable SMS company in Bahrain serving enterprises and growing businesses.",
    icon: BadgeCheck,
    color: "from-pink-500 to-red-500",
  },
  {
    title: "Trustworthiness",
    desc: "Secure infrastructure, transparent pricing, dedicated support, and consistent delivery performance.",
    icon: ShieldCheck,
    color: "from-gray-500 to-gray-700",
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
              src={Image2}
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
            Bulk SMS Bahrain – {" "}
            <span className="text-red-400 block md:inline">
              Reliable & Secure Bulk Messaging
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="mb-4 md:mb-6 text-base md:text-lg text-gray-300"
          >
            Send Bulk SMS Across Bahrain with a Trusted, High-Performance SMS Platform. 
            Fast, Secure & Scalable Bulk SMS Service in Bahrain
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
    <section className="relative overflow-hidden bg-[#f6f7f2] py-20">

      {/* Soft background circles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-24 left-16 w-32 h-32 bg-gray-200/60 rounded-full" />
        <div className="absolute bottom-28 left-1/3 w-20 h-20 bg-gray-200/60 rounded-full" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-gray-200/60 rounded-full" />
      </div>

      {/* CONTENT WRAPPER — FIXED WIDTH */}
      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-16 z-10">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            <span className="text-teal-700">Bulk SMS</span>
            <br />
            Service in Bahrain
          </h1>

          <p className="mt-6 text-gray-600 max-w-lg leading-relaxed">
            Businesses across Bahrain rely on fast, compliant, and cost-effective
            communication channels to engage customers effectively. Bulk SMS Bahrain
            solutions enable organizations to reach their audience instantly on
            mobile devices, ensuring messages are delivered and read within seconds.
            From promotions to critical transactional alerts, bulk SMS remains one
            of the most trusted communication methods in Bahrain.
          </p>

          <p className="mt-4 text-gray-600 max-w-lg">
            <strong className="text-gray-900">DIGINTRA </strong>
            empowers businesses with a robust SMS gateway Bahrain, enabling secure
            and high-volume messaging for SMS marketing campaigns and transactional
            communications.
          </p>
        </motion.div>

        {/* RIGHT IMAGE + SHAPES */}
        <motion.div
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="relative flex justify-center h-[460px]"
>
  {/* Orange abstract box (UNCHANGED) */}
  <div className="absolute w-62 h-62 bg-orange-300 rounded-[40px] rotate-45 z-0" />

  {/* Main Image (ONLY IMAGE CHANGED) */}
  <img
    src={Image1}
    alt="Bulk SMS Bahrain"
    className="absolute bottom-0 z-10 h-[420px] object-contain drop-shadow-xl"
  />
</motion.div>


      </div>
    </section>

    {/* 3rd section */}
    <section className="relative py-24 bg-gradient-to-br from-sky-50 via-white to-teal-50">

      {/* CONTENT WRAPPER */}
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-700 to-sky-600 bg-clip-text text-transparent">
            Why Choose DIGINTRA for Bulk SMS in Bahrain?
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            DIGINTRA is a trusted SMS company in Bahrain, helping businesses connect
            with customers through reliable and compliant messaging solutions. Our
            experience, enterprise-grade infrastructure, and local connectivity make
            us a preferred bulk SMS sender for organizations across Bahrain.
          </p>
        </motion.div>

        {/* INFOGRAPHIC CARDS */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {[
            "🚀 High delivery rates across Bahraini mobile networks",
            "⚡ Instant SMS delivery with real-time reports",
            "🔐 Secure and compliant messaging infrastructure",
            "🛠 Easy API integration with business systems",
            "📊 Campaign tracking and analytics",
            "🌍 Local and international SMS coverage",
          ].map((item, index) => {
            const icon = item.split(" ")[0];
            const text = item.replace(icon + " ", "");

            return (
              <div
                key={index}
                className="flex items-center gap-4 px-5 py-4 rounded-full
                           bg-gradient-to-r from-white to-sky-50
                           border border-gray-200 hover:border-teal-600
                           shadow-sm transition"
              >
                {/* Icon */}
                <div className="flex h-10 w-10 items-center justify-center rounded-full
                                bg-gradient-to-br from-teal-600 to-sky-500
                                text-white text-lg shrink-0">
                  {icon}
                </div>

                {/* Text */}
                <p className="text-gray-700 text-sm leading-relaxed">
                  {text}
                </p>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>

    {/* 4th section */}
    <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-sky-50">

      {/* CONTENT WRAPPER */}
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-700 to-sky-600 bg-clip-text text-transparent">
            Compliance, Security & Trust You Can Rely on in Bahrain
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            DIGINTRA delivers Bulk SMS Bahrain services with a strong focus on
            regulatory compliance, data security, and message reliability. Our
            platform is built to meet Bahrain’s telecom standards while protecting
            user data and ensuring lawful SMS delivery.
          </p>
        </motion.div>

        {/* CARDS */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >

          {/* CARD 1 */}
          <div className="relative rounded-2xl bg-white p-7 border border-rose-200
                          shadow-sm hover:shadow-md transition">
            <div className="mb-5 flex items-center gap-4">
              <div className="h-12 w-12 flex items-center justify-center rounded-xl
                              bg-gradient-to-br from-rose-500 to-orange-400 text-white">
                🛡️
              </div>
              <h3 className="font-semibold text-gray-900">
                Bahrain Regulatory Compliance
              </h3>
            </div>

            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex gap-2">
                <span className="text-rose-500">•</span>
                Messaging practices aligned with Bahrain telecom regulations
              </li>
              <li className="flex gap-2">
                <span className="text-rose-500">•</span>
                Support for approved sender IDs and content guidelines
              </li>
              <li className="flex gap-2">
                <span className="text-rose-500">•</span>
                Opt-in and opt-out mechanisms for responsible messaging
              </li>
              <li className="flex gap-2">
                <span className="text-rose-500">•</span>
                Compliance-focused routing to ensure lawful delivery
              </li>
            </ul>
          </div>

          {/* CARD 2 */}
          <div className="relative rounded-2xl bg-white p-7 border border-sky-200
                          shadow-sm hover:shadow-md transition">
            <div className="mb-5 flex items-center gap-4">
              <div className="h-12 w-12 flex items-center justify-center rounded-xl
                              bg-gradient-to-br from-sky-500 to-indigo-500 text-white">
                🔐
              </div>
              <h3 className="font-semibold text-gray-900">
                Secure SMS Gateway Bahrain
              </h3>
            </div>

            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex gap-2">
                <span className="text-sky-500">•</span>
                Enterprise-grade SMS gateway Bahrain with encrypted message transmission
              </li>
              <li className="flex gap-2">
                <span className="text-sky-500">•</span>
                Secure APIs for websites, mobile apps, CRM, and ERP systems
              </li>
              <li className="flex gap-2">
                <span className="text-sky-500">•</span>
                Protected data handling and access controls
              </li>
            </ul>
          </div>

          {/* CARD 3 */}
          <div className="relative rounded-2xl bg-white p-7 border border-emerald-200
                          shadow-sm hover:shadow-md transition">
            <div className="mb-5 flex items-center gap-4">
              <div className="h-12 w-12 flex items-center justify-center rounded-xl
                              bg-gradient-to-br from-emerald-500 to-teal-500 text-white">
                📡
              </div>
              <h3 className="font-semibold text-gray-900">
                Reliable Local Delivery
              </h3>
            </div>

            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex gap-2">
                <span className="text-emerald-500">•</span>
                Direct routes to Bahraini mobile operators
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-500">•</span>
                Redundant routing and failover systems
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-500">•</span>
                Real-time delivery reports and performance insights
              </li>
            </ul>
          </div>

        </motion.div>
      </div>
    </section>
    
    {/* 5th section */}
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-center mb-20 text-3xl md:text-4xl font-extrabold
          bg-gradient-to-r from-indigo-600 via-sky-500 to-emerald-500
          bg-clip-text text-transparent">
          Our Bulk SMS Bahrain Solutions
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white rounded-3xl
              shadow-[0_15px_40px_rgba(0,0,0,0.08)]
              px-6 pb-8 pt-16"
            >
              {/* Icon bubble */}
              <div
                className={`absolute -top-7 left-1/2 -translate-x-1/2
                w-14 h-14 rounded-full flex items-center justify-center
                bg-gradient-to-r ${service.gradient}
                shadow-lg`}
              >
                {service.icon}
              </div>

              {/* Label strip */}
              <div
                className={`mx-auto mb-5 w-fit px-5 py-1.5 rounded-full
                text-xs font-semibold tracking-wide text-white
                bg-gradient-to-r ${service.gradient}`}
              >
                {service.label}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 text-center mb-4">
                {service.title}
              </h3>

              {/* Content */}
              <ul className="space-y-2 text-sm text-gray-600">
                {service.content.map((item, i) => (
                  <li
                    key={i}
                    className={i === 0 ? "font-medium text-gray-700" : "flex gap-2"}
                  >
                    {i !== 0 && (
                      <span className="mt-2 w-1.5 h-1.5 rounded-full
                        bg-gradient-to-r from-indigo-400 to-emerald-400">
                      </span>
                    )}
                    {item}
                  </li>
                ))}
              </ul>

              {/* Dots decoration */}
              <div className="flex justify-center gap-2 mt-6">
                <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                <span className="w-2 h-2 rounded-full bg-gray-300"></span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>

    {/* 6th section */}
     <section className="py-20 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-center mb-14 text-3xl md:text-4xl font-extrabold
          bg-gradient-to-r from-indigo-600 via-sky-500 to-emerald-500
          bg-clip-text text-transparent">
          Key Features of Our Bulk SMS Service
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className={`relative rounded-2xl px-6 py-7
              bg-gradient-to-r ${item.bg}
              shadow-[0_15px_40px_rgba(0,0,0,0.15)]`}
            >
              <div className="flex items-center gap-5">

                {/* Icon circle */}
                <div className="w-12 h-12 rounded-full bg-white
                  flex items-center justify-center shadow">
                  {item.icon}
                </div>

                {/* Text */}
                <p className="text-white font-medium text-sm md:text-base">
                  {item.text}
                </p>

              </div>

              {/* Step number (optional – image inspired) */}
              <span className="absolute bottom-4 right-5 text-white/30
                font-bold text-lg">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>

    {/* 7th section */}
    <section className="py-24 bg-gradient-to-br from-sky-50 via-gray-200 to-sky-200">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold
            bg-gradient-to-r from-indigo-600 via-blue-600 to-sky-500
            bg-clip-text text-transparent">
            Industries We Serve in Bahrain
          </h2>

          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            DIGINTRA supports businesses across multiple sectors with reliable
            Bulk SMS Bahrain solutions:
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <div
                key={index}
                className={`relative rounded-2xl p-[1px]
                bg-gradient-to-br ${industry.gradient}`}
              >

                {/* Card body */}
                <div
                  className="relative bg-white rounded-2xl p-6
                  flex items-center gap-5
                  hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Icon inside colored div */}
                  <div
                    className={`w-14 h-14 rounded-xl
                    flex items-center justify-center
                    bg-gradient-to-br ${industry.gradient}
                    shadow-[0_10px_30px_rgba(0,0,0,0.25)]`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Text */}
                  <h3 className="text-lg font-semibold text-gray-900 leading-snug">
                    {industry.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <p className="mt-16 text-center text-gray-600 max-w-3xl mx-auto">
          Our industry experience ensures compliant and effective messaging strategies.
        </p>

      </div>
    </section>


    {/* 8th section */}
        <section className="py-20 px-6 bg-slate-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto 
       "
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-3xl md:text-4xl font-bold text-indigo-600 mb-14"
        >
          Why Bulk SMS Works in Bahrain
        </motion.h2>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {cards.map((item, index) => {
  const Icon = item.icon;
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl p-[1.5px]
      bg-gradient-to-br from-indigo-400 via-blue-400 to-cyan-400
      hover:from-indigo-500 hover:via-blue-500 hover:to-cyan-500
      transition-all duration-300"
    >
      {/* Inner Card */}
      <div
        className="bg-white rounded-2xl p-6 h-full
        shadow-sm hover:shadow-xl
        hover:-translate-y-1
        transition-all duration-300"
      >
        <div className="w-12 h-12 flex items-center justify-center
        rounded-xl bg-indigo-100 text-indigo-600 mb-4">
          <Icon size={22} />
        </div>

        <p className="font-medium text-gray-800 leading-snug">
          {item.title}
        </p>
      </div>
    </motion.div>
  );
})}

        </motion.div>

        {/* Bottom Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
          className="mt-14 flex justify-center"
        >
          <div
            className="bg-white/80 backdrop-blur
            border border-indigo-100
            shadow-md
            rounded-2xl px-8 py-5 max-w-3xl text-center"
          >
            <p className="text-gray-700">
              Bulk SMS continues to be one of the most effective customer
              communication channels for businesses in Bahrain.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>

    {/* 9th section */}
    <section className="py-24 px-6 bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      
      <div className="max-w-6xl mx-auto" >
        {/* Heading */}
      <h2
        className="text-center text-4xl md:text-3xl font-extrabold mb-16
        bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-500
        bg-clip-text text-transparent"
      >
        Why DIGINTRA is a Trusted Bulk SMS Sender in Bahrain
      </h2>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {car.map((card, index) => {
          const Icon = card.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg
              hover:shadow-2xl transition-all duration-300
              overflow-hidden"
            >
              {/* Top Curved Header */}
              <div
                className={`h-28 bg-gradient-to-br ${card.color}
                flex items-center justify-center rounded-b-[2.5rem]`}
              >
                <div className="w-14 h-14 rounded-full bg-white/90
                flex items-center justify-center shadow-md">
                  <Icon className="text-gray-800" size={26} />
                </div>
              </div>

              {/* Content */}
              <div className="px-6 py-8 text-center">
                <h4 className="font-semibold text-lg text-gray-900 mb-3">
                  {card.title}
                </h4>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </section>

    {/* 10th section */}
    <section className="py-32 px-6 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 ">
      <div
        className="max-w-6xl mx-auto rounded-3xl
        bg-white/80 backdrop-blur
        border border-indigo-100
        shadow-[0_30px_90px_rgba(0,0,0,0.08)]
        px-10 py-16 text-center"
      >
        {/* Heading */}
        <h2
          className="text-3xl md:text-4xl font-extrabold mb-6
          bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-500
          bg-clip-text text-transparent"
        >
          Get Started with Bulk SMS Bahrain Today
        </h2>

        {/* Description */}
        <p className="max-w-3xl mx-auto text-gray-600 text-base md:text-lg leading-relaxed mb-4">
          Whether you need <strong>SMS marketing in Bahrain</strong>, a powerful
          <strong> SMS gateway Bahrain</strong>, or a complete
          <strong> bulk SMS sender platform</strong>, DIGINTRA is your trusted
          messaging partner.
        </p>

        <p className="max-w-2xl mx-auto text-gray-600 mb-10">
          📞 Contact us today to launch your Bulk SMS campaigns and connect with
          customers across Bahrain instantly.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          {/* Primary CTA */}
          <button
            className="inline-flex items-center gap-3
            px-8 py-4 rounded-xl text-white font-semibold
            bg-gradient-to-r from-indigo-600 to-blue-600
            shadow-lg hover:shadow-xl
            hover:scale-[1.03]
            transition-all duration-300"
          >
            <PhoneCall size={20} />
            Talk to an SMS Expert
          </button>

          {/* Secondary CTA */}
          <button
            className="inline-flex items-center gap-3
            px-8 py-4 rounded-xl font-semibold
            border border-indigo-200 text-indigo-600
            bg-white hover:bg-indigo-50
            hover:scale-[1.03]
            transition-all duration-300"
          >
            <Send size={20} />
            Start Bulk SMS Now
          </button>
        </div>
      </div>
    </section>

    <Footer/>
    </>
  );
}