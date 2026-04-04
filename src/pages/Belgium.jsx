import { motion } from "framer-motion";
import { section } from "framer-motion/client";
import Footer from "../components/Footer";
import image from "../assets/bulk-sms-belgium.png"
import {
  TrendingUp,
  BarChart3,
  Repeat,
  Globe,
  Lock,
  Settings,
  CheckCircle2
} from "lucide-react";

import { ShieldCheck, Award, Brain} from "lucide-react";

const Belgium = () => {

    // 3rd section data
    const features = [
  {
    icon: "🚀",
    text: "High delivery rates across Belgian mobile networks",
  },
  {
    icon: "🔐",
    text: "GDPR-compliant messaging and data handling",
  },
  {
    icon: "⚡",
    text: "Instant message delivery with real-time reporting",
  },
  {
    icon: "🛠",
    text: "Easy API integration with business systems",
  },
  {
    icon: "🌍",
    text: "Local and international SMS coverage",
  },
  {
    icon: "💬",
    text: "Multilingual support (English, French, Dutch)",
  },
];


// 4th section data
const blocks = [
  {
    title: "EU & Belgium Regulatory Compliance",
    icon: "📜",
    points: [
      "Full compliance with GDPR (General Data Protection Regulation)",
      "Alignment with BIPT / IBPT telecom guidelines",
      "Support for approved sender IDs and content validation",
      "Opt-in and opt-out mechanisms aligned with EU consumer laws",
    ],
    gradient: "from-emerald-400 to-lime-400",
  },
  {
    title: "Secure SMS Gateway Belgium",
    icon: "🔐",
    points: [
      "Enterprise-grade SMS gateway Belgium with encrypted message transmission",
      "Secure APIs for web, mobile app, CRM, and ERP integrations",
      "EU-based data processing standards for enhanced privacy",
    ],
    gradient: "from-blue-400 to-cyan-400",
  },
  {
    title: "Reliable Message Delivery",
    icon: "⚡",
    points: [
      "Direct routes to Belgian mobile operators",
      "Redundant routing and failover systems",
      "Real-time delivery reports and performance insights",
    ],
    gradient: "from-purple-400 to-pink-400",
  },
];


// 5th section data
const solutions = [
  {
    title: "Promotional Bulk SMS",
    icon: "📣",
    desc: "Increase engagement and conversions with targeted marketing campaigns.",
    points: [
      "Sales promotions and discounts",
      "Product launches and events",
      "Customer re-engagement campaigns",
    ],
    accent: "from-pink-500 to-rose-500",
  },
  {
    title: "Transactional & OTP SMS",
    icon: "🔑",
    desc: "Deliver time-critical messages instantly with guaranteed delivery.",
    points: [
      "OTP and verification codes",
      "Payment and order confirmations",
      "Appointment and delivery updates",
    ],
    accent: "from-emerald-500 to-lime-500",
  },
  {
    title: "SMS Gateway Belgium",
    icon: "🔌",
    desc: "",
    points: [
      "Our robust SMS gateway Belgium enables seamless integration with your digital systems, allowing automated and scalable SMS delivery through APIs",
    ],
    accent: "from-blue-500 to-cyan-500",
  },
  {
    title: "Mass Text Message Service",
    icon: "📊",
    desc: "Manage and optimize large-scale SMS campaigns with advanced tools.",
    points: [
      "Contact list management",
      "Message personalization",
      "Scheduling and automation",
      "Real-time analytics",
    ],
    accent: "from-violet-500 to-purple-500",
  },
];


// 6th section data
const fea = [
  { icon: TrendingUp, text: "High open rates and instant reach" },
  { icon: BarChart3, text: "Real-time delivery and performance reports" },
  { icon: Repeat, text: "Two-way messaging support" },
  { icon: Globe, text: "Local and international SMS support" },
  { icon: Lock, text: "Secure infrastructure and encrypted APIs" },
  { icon: Settings, text: "Scalable platform for high-volume messaging" }
];


// 7th section data
const industries = [
  "Retail & E-commerce",
  "Banking & Financial Services",
  "Healthcare & Medical Centers",
  "Logistics & Transportation",
  "Education & Training",
  "Technology & SaaS Companies",
];

// 8th section data
const data = [
    {
      color: "from-indigo-500 to-sky-500",
      icon: "📲",
      title: "95%+ Open Rates",
      desc: "SMS delivers unmatched visibility compared to emails or push notifications.",
    },
    {
      color: "from-amber-400 to-orange-500",
      icon: "⏱",
      title: "Read Instantly",
      desc: "Most messages are opened within minutes of delivery.",
    },
    {
      color: "from-rose-500 to-pink-500",
      icon: "🌍",
      title: "All Devices Supported",
      desc: "Works on every mobile phone without internet access.",
    },
    {
      color: "from-emerald-400 to-teal-500",
      icon: "🎯",
      title: "Urgent Communication",
      desc: "Perfect for OTPs, alerts, reminders, and promotions.",
    },
  ];

  // 9th section data
  const items = [
    {
      icon: BarChart3,
      title: "Experience",
      desc: "Proven track record delivering high-volume SMS campaigns across Belgium and Europe.",
    },
    {
      icon: Brain,
      title: "Expertise",
      desc: "Deep understanding of GDPR, telecom regulations, and SMS delivery optimization.",
    },
    {
      icon: Award,
      title: "Authoritativeness",
      desc: "Recognized as a reliable bulk SMS provider in Belgium by businesses across industries.",
    },
    {
      icon: ShieldCheck,
      title: "Trustworthiness",
      desc: "Secure infrastructure, transparent pricing, dedicated support, and consistent performance.",
    },
  ];

  return (
    <>


     <Helmet>
        <meta name="robots" content="index, follow" />
        <title>Bulk SMS Belgium 2026 | Top SMS Marketing Company</title>
        <meta
          name="description"
          content="Discover the best SMS marketing platforms in 2026. Compare top SMS marketing services, features, pricing fit, and industry use cases to grow your business."
        />
        <link rel="canonical" href="https://digintra.com/bulk-sms-belgium" />


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
              alt="Bulk SMS Belgium"
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
            Bulk SMS Belgium –{" "}
            <span className="text-red-400 block md:inline">
              Secure & Reliable Bulk Messaging
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="mb-4 md:mb-6 text-base md:text-lg text-gray-300"
          >
            Send Bulk SMS Across Belgium with a Trusted, GDPR-Compliant SMS Provider.
            Fast, Secure & Scalable Bulk SMS Service in Belgium
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
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE - CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-slate-800"
        >
          <h2 className="text-2xl md:text-4xl font-extrabold leading-snug mb-4">
            Reliable{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-lime-500 bg-clip-text text-transparent">
              Bulk SMS Service in Belgium
            </span>{" "}
            for Businesses of All Sizes
          </h2>

          <p className="text-slate-600 text-base md:text-lg mb-4">
            Businesses in Belgium require a fast, compliant, and cost-effective
            way to communicate with customers at scale. Bulk SMS Belgium
            solutions allow organizations to reach their audience directly on
            mobile devices, ensuring messages are delivered and read within
            seconds.
          </p>

          <p className="text-slate-600 text-base md:text-lg mb-6">
            From marketing campaigns to critical transactional alerts, bulk SMS
            service in Belgium remains one of the most reliable communication
            channels. With nationwide coverage and enterprise-grade
            infrastructure, DIGINTRA enables secure, high-volume messaging using
            a powerful SMS gateway in Belgium.
          </p>
        </motion.div>

        {/* RIGHT SIDE - IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative ">
            <img
              src="/src/assets/Belgium.png"
              alt="Bulk SMS Belgium"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Soft background accent */}
          <div className="absolute -inset-6 -z-10 rounded-3xl bg-emerald-200/40 blur-3xl" />
        </motion.div>

      </div>
    </section>

    {/* 3rd section */}
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-white to-blue-100">
      <div className="max-w-6xl mx-auto px-4 md:px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4 text-slate-800">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">
              DIGINTRA
            </span>{" "}
            for Bulk SMS in Belgium?
          </h2>

          <p className="text-slate-600 text-base md:text-lg">
            DIGINTRA is a trusted bulk SMS provider in Belgium, helping businesses
            engage customers through reliable, GDPR-compliant messaging solutions.
            Our experience, local connectivity, and technical expertise make us a
            preferred choice for enterprises and growing businesses.
          </p>
        </div>

        {/* Gradient Cards – Advanced Reference Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((item, index) => {
            const gradients = [
              "from-emerald-400 to-lime-500",
              "from-blue-400 to-cyan-500",
              "from-purple-400 to-pink-500",
              "from-orange-400 to-red-500",
              "from-teal-400 to-emerald-500",
              "from-indigo-400 to-blue-500",
            ];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="relative flex items-center gap-4"
              >
                {/* Icon Wrapper */}
                <div className="relative flex-shrink-0">

                  {/* Pulse Effect */}
                  <motion.div
                    animate={{ scale: [1, 1.25, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                    className={`absolute inset-0 rounded-full bg-gradient-to-br ${gradients[index]} opacity-20`}
                  />

                  {/* Icon Circle */}
                  <motion.div
                    animate={{ rotate: [0, 6, -6, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className={`relative h-16 w-16 rounded-full bg-gradient-to-br ${gradients[index]} flex items-center justify-center shadow-lg`}
                  >
                    <span className="text-2xl text-white">
                      {item.icon}
                    </span>
                  </motion.div>
                </div>

                {/* Connecting Line */}
                <div className="h-[2px] w-6 bg-gradient-to-r from-slate-300 to-transparent" />

                {/* Pill Card */}
                <div className="flex-1 rounded-full bg-white px-6 py-4 shadow-md border border-slate-100">
                  <p className="text-slate-700 font-medium">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>



      </div>
    </section>

    {/* 4th section */}
     <section className="w-full py-16 md:py-24 bg-gradient-to-b from-white to-slate-100">
      <div className="max-w-6xl mx-auto px-4 md:px-6">

        {/* Heading */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-800 mb-4">
            Compliance, Security &{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">
              Trust You Can Rely on in Belgium
            </span>
          </h2>

          <p className="text-slate-600 text-base md:text-lg">
            DIGINTRA delivers Bulk SMS Belgium services with strict adherence to
            Belgian and EU regulatory standards. Our secure infrastructure ensures
            businesses can confidently run messaging campaigns without compliance
            or data-privacy risks.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blocks.map((block, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="relative rounded-2xl p-[1px] bg-gradient-to-br from-slate-200 to-slate-300"
            >
              <div className="h-full rounded-2xl bg-white p-6 shadow-md">

                {/* Icon + Title */}
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`h-12 w-12 rounded-full bg-gradient-to-br ${block.gradient} flex items-center justify-center text-xl text-white shadow`}
                  >
                    {block.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800">
                    {block.title}
                  </h3>
                </div>

                {/* Points */}
                <ul className="space-y-3">
                  {block.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500 flex-shrink-0" />
                      <span className="text-slate-600 text-sm md:text-base">
                        {point}
                      </span>
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
    <section className="relative w-full py-20 md:py-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto px-4 md:px-6">

        {/* Heading */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Bulk SMS Belgium
            </span>{" "}
            Solutions
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            Powerful, secure, and scalable Bulk SMS solutions designed for
            marketing, transactional messaging, automation, and enterprise
            integrations.
          </p>
        </div>

        {/* Vertical Panels */}
        <div className="space-y-8">
          {solutions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="relative rounded-2xl bg-slate-900/80 backdrop-blur border border-slate-800 p-8"
            >
              {/* Accent Glow Line */}
              <div
                className={`absolute left-0 top-6 bottom-6 w-[4px] rounded-full bg-gradient-to-b ${item.accent}`}
              />

              {/* Header */}
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`h-12 w-12 rounded-xl bg-gradient-to-br ${item.accent} flex items-center justify-center text-xl`}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-slate-400 mb-4 max-w-3xl">
                {item.desc}
              </p>

              {/* Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {item.points.map((point, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 text-slate-300"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-emerald-400 flex-shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>

          {/* 6th section */}
          <section className="w-full py-20 bg-gradient-to-b from-gray-200 to-blue-100">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-center text-4xl font-bold mb-16
          bg-gradient-to-r from-sky-500 to-indigo-600
          bg-clip-text text-transparent">
          Key Features of Our Bulk SMS Service in Belgium
        </h2>

        <div className="grid gap-8 sm:grid-cols-2">
          {fea.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="relative h-16"
              >
                {/* BACK COLOR RIBBON */}
                <div
                  className="absolute inset-0 rounded-full
                  bg-gradient-to-r from-sky-500 to-indigo-600"
                  style={{
                    clipPath:
                      "polygon(0 0, 92% 0, 100% 50%, 92% 100%, 0 100%, 6% 50%)",
                  }}
                />

                {/* FRONT WHITE RIBBON */}
                <div
                  className="relative z-10 flex items-center h-16 ml-4
                  bg-white rounded-full shadow-md"
                  style={{
                    clipPath:
                      "polygon(0 0, 94% 0, 100% 50%, 94% 100%, 0 100%, 7% 50%)",
                  }}
                >
                  {/* Icon */}
                  <div className="flex items-center justify-center w-14 h-14 ml-1
                    rounded-full bg-gradient-to-br from-sky-500 to-indigo-600">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Text */}
                  <p className="ml-4 text-slate-700 font-medium text-lg">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
          </section>


          {/* 7th section */}
           <section className="w-full py-24 bg-[#f4f7f6] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-4
            bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600
            bg-clip-text text-transparent"
        >
          Industries We Serve in Belgium
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-slate-600 max-w-3xl mb-8"
        >
          DIGINTRA supports businesses across multiple sectors with reliable bulk SMS Belgium solutions. Our experience across industries ensures compliant and effective messaging strategies.
        </motion.p>

        {/* Content Wrapper */}
        <div className="relative flex items-center">

          {/* Green Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative z-10 max-w-2xl w-full ml-0 md:ml-18
              bg-gradient-to-br from-green-400 to-emerald-500
              rounded-[36px] p-8 md:p-10 shadow-2xl"
          >
            <ul className="space-y-5 ">
              {industries.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.08 }}
                  className="flex items-center gap-4 text-white text-lg font-medium"
                >
                  <CheckCircle2 className="w-6 h-6 text-white/90 shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Girl Image */}
          <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="
                absolute right-0 top-1/2
                -translate-y-1/2
                z-20
                right-[-90px]
                hidden md:block
              "
          >
            <img
                src="/src/assets/serve.png"
                alt="Girl pointing to industries"
                className="
                  h-[420px] md:h-[520px] lg:h-[680px]
                  w-auto
                  max-w-none
                  pointer-events-none
                "
              />

          </motion.div>

          

        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-slate-600 max-w-3xl mb-5 mt-12" 
        >
          Our experience across industries ensures compliant and effective messaging strategies.
        </motion.p>
      </div>
    </section>



    {/* 8th section */}
    <section className="relative w-full py-28 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-4xl font-extrabold mb-4
          bg-gradient-to-r from-sky-400 to-emerald-400
          bg-clip-text text-transparent"
        >
          Why Bulk SMS Works in Belgium
        </motion.h2>

        <p className="text-center text-slate-400 max-w-3xl mx-auto mb-20">
          Bulk SMS remains one of the most powerful and reliable communication
          channels for businesses across Belgium.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {data.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative flex items-center justify-center"
            >
              {/* Gradient Ring */}
              <div
                className={`absolute w-56 h-56 rounded-full bg-gradient-to-br ${item.color} blur-[1px]`}
              />

              {/* Inner Card */}
              <div className="relative z-10 w-48 h-48 rounded-full bg-slate-900
              border border-white/10 shadow-xl
              flex flex-col items-center justify-center text-center px-5">

                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="text-sm font-semibold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 leading-snug">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>



    {/* 9th section */}
    <section className="relative w-full py-24 overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-sky-50">
      
      {/* Decorative Blur */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-emerald-300/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-sky-300/30 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 md:px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 via-green-600 to-sky-600 bg-clip-text text-transparent">
            Why DIGINTRA is a Trusted Bulk SMS Provider in Belgium
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Built on experience, compliance, and reliability — DIGINTRA helps
            businesses communicate with confidence.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl p-6 bg-white/80 backdrop-blur border border-gray-200 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-sky-500 text-white mb-4">
                <item.icon size={24} />
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>


  {/* 10th section */}
  <section className="relative w-full py-24 px-4 overflow-hidden bg-[#020617]">
      
      {/* Background radial glow */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[900px] h-[500px] bg-cyan-500/20 blur-[140px] rounded-full -translate-y-40" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="
          relative max-w-5xl mx-auto
          rounded-[32px]
          border border-white/10
          bg-gradient-to-br from-slate-900/80 to-slate-950/90
          backdrop-blur-xl
          px-6 sm:px-12 py-14
          text-center
          shadow-[0_0_120px_-40px_rgba(34,211,238,0.35)]
        "
      >
        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-semibold mb-6
        bg-gradient-to-r from-cyan-300 to-cyan-500
        bg-clip-text text-transparent">
          Get Started with Bulk SMS Belgium Today
        </h3>

        {/* Description */}
        <p className="text-slate-300 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed mb-6">
          Whether you need a powerful{" "}
          <span className="text-white font-medium">SMS gateway in Belgium</span>,
          a scalable{" "}
          <span className="text-white font-medium">mass text messaging service</span>,
          or a fully managed{" "}
          <span className="text-white font-medium">bulk SMS solution</span>,{" "}
          DIGINTRA is your trusted messaging partner.
        </p>

        {/* Contact line */}
        <p className="text-slate-400 mb-10 flex items-center justify-center gap-2">
          <span className="text-pink-400">📞</span>
          Contact us today to launch your Bulk SMS campaign and start reaching customers instantly.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="
              px-7 py-3 rounded-xl font-medium
              text-slate-900
              bg-gradient-to-r from-cyan-400 to-cyan-500
              hover:brightness-110
              transition shadow-lg
            "
          >
            Talk to an SMS Expert
          </a>

          <a
            href="#pricing"
            className="
              px-7 py-3 rounded-xl font-medium
              text-cyan-400
              border border-cyan-500/40
              hover:bg-cyan-500/10
              transition
            "
          >
            Start Bulk SMS Now
          </a>
        </div>
      </motion.div>
    </section>
<Footer/>

    </>

    

  )
}

export default Belgium