import React from "react";
import { motion } from "framer-motion";
import {Helmet} from "react-helmet";
import Footer from "../components/Footer";
import Image from "../assets/two-way-sms.png";
import Image2 from "../assets/two-way-bg-image.jpg";
import Image3 from "../assets/two-way-image.jpg";


// 3rd section
import {CheckCircle } from "lucide-react";
// 4th section icons
import {
  MessageCircle,
  TrendingUp,
  LayoutDashboard,
  ShieldCheck,
  Layers,
} from "lucide-react";


// 5th section icons
import {
  HeartPulse,
  ShoppingCart,
  Landmark,
  GraduationCap,
} from "lucide-react";

// 6th icons
import {
  Send,
  Reply,
  Zap,
} from "lucide-react";

// 3rd section content
const features = [
    "Reply to promotions",
    "Confirm appointments",
    "Ask questions",
    "Give feedback instantly",
  ];


  // 4th section content
  const cards = [
    {
      title: "Instant Customer Engagement",
      desc: "Start real conversations and get faster replies with two way text messaging.",
      icon: MessageCircle,
      number: "01",
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      title: "Higher Response Rates",
      desc: " SMS has an open rate of over 98%, making 2 way SMS one of the most effective communication channels.",
      icon: TrendingUp,
      number: "02",
      gradient: "from-cyan-500 to-sky-500",
    },
    {
      title: "Simple & User-Friendly Platform",
      desc: "Send, receive, and manage messages from one dashboard.",
      icon: LayoutDashboard,
      number: "03",
      gradient: "from-purple-500 to-violet-500",
    },
    {
      title: "Trusted & Secure Messaging",
      desc: " Built with data security and compliance in mind to protect your business and customers.",
      icon: ShieldCheck,
      number: "04",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      title: "Scalable for Any Business Size",
      desc: "From startups to enterprises, our 2 way messaging service grows with you.",
      icon: Layers,
      number: "05",
      gradient: "from-emerald-500 to-teal-500",
    },
  ];

  // 5th section content
  const industries = [
    {
      title: "Healthcare",
      icon: HeartPulse,
      gradient: "from-rose-500 to-pink-500",
      points: [
        "Appointment confirmations and reminders",
        "Patient feedback and follow-up messages",
        "Secure two way SMS for non-urgent communication",
      ],
    },
    {
      title: "Retail & E-Commerce",
      icon: ShoppingCart,
      gradient: "from-orange-500 to-amber-500",
      points: [
        "Order updates and delivery confirmations",
        "Promotional campaigns with instant replies",
        "Customer support via two way text messaging",
      ],
    },
    {
      title: "Banking & Finance",
      icon: Landmark,
      gradient: "from-blue-500 to-indigo-600",
      points: [
        "Transaction alerts and customer verification",
        "Service updates and inquiry handling",
        "Secure two way SMS communication",
      ],
    },
    {
      title: "Education",
      icon: GraduationCap,
      gradient: "from-emerald-500 to-teal-500",
      points: [
        "Student and parent notifications",
        "Attendance and schedule updates",
        "Emergency announcements",
      ],
    },
  ];

  // 6th section content
  const steps = [
    {
      year: "STEP 01",
      title: "Message Sent",
      desc: "Messages are sent to customers through SMS.",
      icon: Send,
      color: "from-yellow-400 to-orange-500",
    },
    {
      year: "STEP 02",
      title: "Customer Reply",
      desc: "Customers reply instantly using the same number.",
      icon: Reply,
      color: "from-pink-500 to-red-500",
    },
    {
      year: "STEP 03",
      title: "Central Dashboard",
      desc: "Conversations are managed from a single dashboard.",
      icon: LayoutDashboard,
      color: "from-purple-500 to-indigo-500",
    },
    {
      year: "STEP 04",
      title: "Actions Triggered",
      desc: "Responses trigger actions, workflows, or support follow ups.",
      icon: Zap,
      color: "from-emerald-400 to-teal-500",
    },
  ];

  // 7th section
  const items = [
    {
      number: "01",
      title: "Proven Expertise",
      desc: "Proven expertise in business messaging solutions.",
      color: "text-rose-400",
      line: "bg-rose-400",
    },
    {
      number: "02",
      title: "Reliable Delivery",
      desc: "Reliable message delivery with high uptime.",
      color: "text-orange-400",
      line: "bg-orange-400",
    },
    {
      number: "03",
      title: "Easy-to-Use Platform",
      desc: "Easy to use platform with automation options.",
      color: "text-purple-400",
      line: "bg-purple-400",
    },
    {
      number: "04",
      title: "Transparent Pricing",
      desc: "Transparent pricing and dedicated support.",
      color: "text-emerald-400",
      line: "bg-emerald-400",
    },
    {
      number: "05",
      title: "Trusted Partner",
      desc: "Trusted two way messaging service for growing businesses.",
      color: "text-cyan-400",
      line: "bg-cyan-400",
    },
  ];

const TwoWaySMSSection = () => {
  return (

    <>


     <Helmet>
                    <meta name="robots" content="index, follow" />
                    <title>Two Way SMS Messaging Service | 2 Way SMS - DIGINTRA</title>
                    <meta
                      name="description"
                      content="Engage customers with two way SMS messaging. Send and receive texts, improve response rates, and grow faster using DIGINTRA’s secure 2 way messaging service."
                    />
                    <link
                      rel="canonical"
                      href="https://digintra.com/two-way-sms"
                    />
                  </Helmet>
        {/* 1st section */}
        <section className="flex min-h-screen w-full items-center justify-center bg-gradient-to-r from-sky-950 to-sky-900 px-4 md:px-6">
        <div className="flex w-full max-w-6xl items-center gap-6 md:gap-10 flex-col md:flex-row">

            {/* Left Side - Image */}
            <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex w-full md:w-1/2 items-center justify-center"
            >
            <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="rounded-2xl bg-gradient-to-r from-blue-200 to-orange-200 p-4 md:p-6 w-full"
            >
                <img
                src={Image}
                alt="two way messaging by digintra"
                className="rounded-xl w-full"
                />
            </motion.div>
            </motion.div>

            {/* Right Side - Text */}
            <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex w-full md:w-1/2 flex-col justify-center text-white mt-4 md:mt-0 text-center md:text-left"
            >
            <h1 className="mb-3 md:mb-4 text-2xl md:text-4xl font-bold leading-snug md:leading-tight">
               Two Way {" "}
                <span className="text-red-400 block md:inline">
               SMS Messaging
                </span>
            </h1>

            <p className="mb-4 md:mb-6 text-base md:text-lg text-gray-300">
                Turn SMS into conversations. Engage customers instantly, get faster responses, 
                and drive more conversions with powerful two way SMS messaging by DIGINTRA
            </p>

            {/* Buttons */}
            <div className="flex gap-3 md:gap-4 justify-center md:justify-start flex-col sm:flex-row">
                <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-lg transition bg-white px-4 md:px-6 py-2 md:py-3 font-semibold text-black w-full sm:w-auto"
                >
                Get Started
                </motion.button>

                <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-lg transition hover:bg-[#e4415b] bg-[#f64f6a] px-4 md:px-6 py-2 md:py-3 font-semibold text-white w-full sm:w-auto"
                >
                Request Free Demo
                </motion.button>
            </div>
            </motion.div>

        </div>
        </section>

      {/* 2nd section */}
      
      <section className="w-full bg-emerald-900">
        <div className="relative w-full">
          
          {/* Background Image (NO MOTION) */}
          <div className="absolute inset-0">
            <img
              src={Image3}
              alt="Customer communication"
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/95 via-emerald-900/80 to-emerald-900/30" />
          </div>

          {/* Content Wrapper */}
          <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
            
            {/* TEXT MOTION START */}
            <motion.div
              className="max-w-xl text-white"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {/* Brand */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <span className="inline-block text-sm font-semibold tracking-widest uppercase text-emerald-300">
                  DIGINTRA
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold leading-tight mb-6"
              >
                Smarter Conversations <br />
                That Drive Real Results
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-emerald-100 mb-5 text-base md:text-lg"
              >
                Clear and fast communication plays a major role in customer
                experience. DIGINTRA’s two-way SMS messaging service allows
                businesses to send and receive messages in real time—creating
                meaningful conversations instead of one-sided notifications.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-emerald-100 mb-8 text-base md:text-lg"
              >
                With two-way text messaging, customers can reply instantly, ask
                questions, and take action without friction.
              </motion.p>
            </motion.div>
            {/* TEXT MOTION END */}

          </div>
        </div>
      </section>




      {/* 3rd section */}
       <section className="w-full py-20 bg-gradient-to-b from-gray-200 to-blue-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="mb-4">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent">
              What Is Two Way SMS Messaging?
            </h2>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Two way SMS messaging allows businesses and customers to send and
            receive text messages using the same number or platform. Unlike
            one-way messages that only deliver information, two way SMS opens
            a real conversation.
          </p>
        </motion.div>

        {/* Right Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-white border border-gray-200 rounded-3xl shadow-xl p-8"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
           With DIGINTRA’s 2 way messaging service, customers can:

          </h3>

          <ul className="space-y-4">
            {features.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 text-gray-700"
              >
                <CheckCircle className="w-6 h-6 text-green-500 mt-0.5" />
                <span className="text-lg">{item}</span>
              </motion.li>
            ))}
          </ul>

          <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-4">
            <p className="text-blue-800 font-medium">
              🚀 This creates better engagement, stronger relationships, and faster responses.
            </p>
          </div>
        </motion.div>

      </div>
        </section>



        {/* 4th section */}
         <section className="w-full py-24 bg-gradient-to-b from-blue-300 to-orange-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent mb-4">
            Why Choose DIGINTRA’s Two Way Messaging Service?
          </h2>
          <p className="text-gray-600 text-lg">
            DIGINTRA is a trusted two way SMS service provider delivering reliable,
            secure, and easy-to-use communication solutions for real business needs.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="relative group"
              >
                {/* Gradient Side Layer */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${card.gradient} translate-x-3 translate-y-3 opacity-90`}
                  whileHover={{ translateX: 6, translateY: 6 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Card */}
                <motion.div
                  className="relative bg-white rounded-2xl p-6 shadow-xl h-full flex flex-col justify-between"
                  whileHover={{ boxShadow: "0px 25px 50px rgba(0,0,0,0.15)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div>
                    <Icon className="w-8 h-8 text-gray-800 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {card.desc}
                    </p>
                  </div>

                  {/* Number */}
                  <div className="mt-6">
                    <span
                      className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r ${card.gradient} text-white font-semibold`}
                    >
                      {card.number}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
          </section>


          {/* 5th section */}
           <section className="w-full py-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent mb-4">
            Industry-Specific Two Way SMS Messaging Solutions
          </h2>
          <p className="text-gray-600 text-lg">
            Different industries require tailored communication approaches.
            DIGINTRA’s two way SMS service adapts to industry needs while
            maintaining simplicity and security.
          </p>
        </motion.div>

        {/* Industry Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                {/* Glow */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${industry.gradient} opacity-20 blur-xl`}
                />

                {/* Card */}
                <div className="relative bg-white rounded-3xl p-8 shadow-xl h-full border border-gray-100">
                  
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${industry.gradient} flex items-center justify-center mb-6`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {industry.title}
                  </h3>

                  {/* Points */}
                  <ul className="space-y-3 text-gray-600 text-sm leading-relaxed">
                    {industry.points.map((point, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gray-400" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
          </section>

          {/* 6th section */}
          <section className="w-full py-16 md:py-24 bg-black overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-6">

          {/* Header */}
          <div className="text-center mb-14 md:mb-20">
            <h2 className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-blue-500">
              How Two Way SMS Messaging Works
            </h2>
          </div>

    {/* ================= MOBILE (COLUMN) ================= */}
    <div className="flex flex-col gap-10 md:hidden">
      {steps.map((step, index) => {
        const Icon = step.icon;
        return (
          <div
            key={index}
            className="relative bg-black border border-white/20 rounded-xl p-6 shadow-lg"
          >
            <div
              className={`absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center`}
            >
              <Icon className="w-5 h-5 text-white" />
            </div>

            <h3 className="text-white font-semibold mt-6 mb-2">
              {step.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {step.desc}
            </p>
          </div>
        );
      })}
    </div>

    {/* ================= DESKTOP (HORIZONTAL) ================= */}
    <div className="hidden md:block overflow-x-auto scrollbar-hide">
      <div className="min-w-[1000px] relative">

        {/* Gradient Line */}
        <div className="absolute top-16 left-6 right-6 h-2 rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 via-purple-500 to-emerald-500" />

        {/* Steps */}
        <div className="relative flex justify-between px-10">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex flex-col items-center">

                <span className="text-sm text-gray-400 mb-3">
                  {step.year}
                </span>

                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-xl`}
                >
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="w-px h-10 bg-gray-600" />

                <div
                  className="border rounded-xl p-5 w-60 text-center mt-2 bg-black shadow-lg"
                  style={{ borderColor: "rgba(255,255,255,0.2)" }}
                >
                  <h3 className="text-white font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>

  </div>
          </section>


          {/* 7th section */}
           <section className="w-full bg-[#0b1220] py-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-blue-500 mb-3">
            Why Trust DIGINTRA for Two Way SMS
          </h2>
          
        </motion.div>

        {/* Agenda Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative"
            >
              {/* Number */}
              <div className={`text-5xl font-extrabold mb-4 ${item.color}`}>
                {item.number}
              </div>

              {/* Vertical Line */}
              <div className={`w-1 h-14 mb-4 ${item.line}`} >
              </div>

              {/* Content */}
              <h3 className="text-white font-semibold mb-2">
                {item.desc}
              </h3>
              
            </motion.div>
          ))}
        </div>
      </div>
        </section>



        <section className="relative w-full overflow-hidden pb-10">
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src={Image2}
      alt="Two Way SMS Communication"
      className="w-full h-full object-cover"
    />

    {/* Dark Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/100 via-black/85 to-black/60" />
  </div>

  {/* Content */}
  <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
    <div className="max-w-2xl text-white">

     
      <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold tracking-widest uppercase rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-400/30">
        Two Way SMS Messaging
      </span>

      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
        Start Using Two Way SMS Messaging <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
          with DIGINTRA
        </span>
      </h2>

      {/* Description */}
      <p className="text-gray-300 text-lg mb-6 leading-relaxed">
        Better communication starts with real conversations. DIGINTRA’s
        two way SMS messaging service helps businesses connect, respond,
        and build trust through simple and effective messaging.
      </p>

      <p className="text-gray-400 mb-10 text-base">
        Contact DIGINTRA today to activate your secure and scalable
        two way SMS solution.
      </p>

    </div>
  </div>
        </section>

        <Footer/>


    </>
  );
};

export default TwoWaySMSSection;
