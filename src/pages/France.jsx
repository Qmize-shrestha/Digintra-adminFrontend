import React from 'react'
import { motion } from "framer-motion";
import { FaRocket, FaChartLine, FaUserShield, FaGlobe, FaClock, FaEnvelope, FaCogs } from "react-icons/fa";
import {
  FaUserPlus,
  FaAddressBook,
  FaPenNib,
  FaGlobeEurope,
  
} from "react-icons/fa";
import { FaCheck, FaDollarSign } from "react-icons/fa";
// 10th section icon
import { BsCheckCircleFill } from "react-icons/bs";
import { Helmet } from 'react-helmet';
import Image from "../assets/bulk-sms-france.png"
import Image2 from "../assets/france-image.svg"
import Footer from '../components/Footer';
import Image3 from "../assets/security-image.png";
import Image4 from "../assets/promotional-image.jpeg"
import Image5 from "../assets/transactional-image.jpeg"
import Image6 from "../assets/otp-image.jpeg"
import Image7 from "../assets/api-image.jpeg"
import Hreflang from "../HrefComp";
import { hreflangConfig } from "../HreflangConfig";

const France = () => {


    // 3rs section content
    const features = [
    "Direct routes to French mobile operators",
    "High throughput France SMS gateway",
    "Proven delivery performance and uptime",
    "User friendly dashboard and automation tools",
    "Powerful bulk SMS API for system integration",
    "GDPR compliant data handling and messaging policies",
    "Dedicated account management and technical support",
  ];

  // 4th section content
  const solutions = [
    {
      title: "Promotional SMS",
      description:
        "Drive sales, brand awareness, and customer engagement with targeted promotional SMS campaigns. Ideal for discounts, special offers, and product announcements.",
      img: Image4
      
    },
    {
      title: "Transactional SMS",
      description:
        "Ensure reliable delivery of critical messages such as order confirmations, payment alerts, and account notifications.",
      img: Image5,
      
    },
    {
      title: "OTP and Verification SMS",
      description:
        "Secure authentication through fast OTP delivery for login verification, signups, and transactions.",
      img: Image6,
      
    },
    {
      title: "API Based Messaging",
      description:
        "Integrate SMS functionality directly into your applications using our flexible and developer-friendly bulk SMS API.",
      img: Image7,
     
    },
  ];

  // 5th section content
  const fea = [
  {
    title: "High delivery rate via direct France SMS gateway",
    icon: <FaRocket />,
    color: "from-purple-500 to-indigo-500",
  },
  {
    title: "Real-time delivery reports and analytics",
    icon: <FaChartLine />,
    color: "from-pink-500 to-red-500",
  },
  {
    title: "Custom sender ID and brand identity support",
    icon: <FaUserShield />,
    color: "from-green-400 to-teal-500",
  },
  {
    title: "Unicode support for French language messaging",
    icon: <FaGlobe />,
    color: "from-yellow-400 to-orange-500",
  },
  {
    title: "Scheduled SMS campaigns and instant delivery",
    icon: <FaClock />,
    color: "from-blue-400 to-blue-600",
  },
  {
    title: "Message personalization for better engagement",
    icon: <FaEnvelope />,
    color: "from-pink-300 to-purple-400",
  },
  {
    title: "API access for automation and scalability",
    icon: <FaCogs />,
    color: "from-teal-400 to-cyan-500",
  },
];



// 7th section content
const steps = [
  {
    id: "01",
    title: "Register & Access Platform",
    desc: "Register with DIGINTRA and access our bulk SMS platform for France.",
    icon: <FaUserPlus />,
    color: "border-yellow-400 text-yellow-400",
  },
  {
    id: "02",
    title: "Upload Contacts / API",
    desc: "Upload your contact list or connect seamlessly via Bulk SMS API.",
    icon: <FaAddressBook />,
    color: "border-cyan-400 text-cyan-400",
  },
  {
    id: "03",
    title: "Create SMS Content",
    desc: "Create your SMS content and choose an approved Sender ID.",
    icon: <FaPenNib />,
    color: "border-emerald-400 text-emerald-400",
  },
  {
    id: "04",
    title: "Schedule or Send",
    desc: "Schedule campaigns or send messages instantly.",
    icon: <FaClock />,
    color: "border-pink-400 text-pink-400",
  },
  {
    id: "05",
    title: "France SMS Gateway",
    desc: "Messages are delivered through our high-speed France SMS gateway.",
    icon: <FaGlobeEurope />,
    color: "border-indigo-400 text-indigo-400",
  },
  {
    id: "06",
    title: "Track Performance",
    desc: "Track delivery status and performance using real-time reports.",
    icon: <FaChartLine />,
    color: "border-orange-400 text-orange-400",
  },
];

// 9th section content
const benefits = [
    "Instant reach with high open rates",
    "Cost effective communication channel",
    "Improved customer engagement and response",
    "Scalable platform for growing businesses",
    "Reliable support from a trusted SMS provider",
  ];


  // 10th section content
  const points = [
    "Messages are read within minutes",
    "Works on all mobile devices without internet",
    "Ideal for time sensitive communication",
    "Trusted by consumers for official notifications",
    "This makes bulk SMS a powerful tool for business growth",
  ];


  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };



const featureAnimations = [
  { x: -50, opacity: 0 },
  { y: 50, opacity: 0 },
  { x: 50, opacity: 0 },
  { y: -50, opacity: 0 },
  { scale: 0.8, opacity: 0 },
  { rotate: -5, opacity: 0 },
  { rotate: 5, opacity: 0 },
];

  


  return (
    <>
 <Hreflang links={hreflangConfig} />
     <Helmet>
            <meta name="robots" content="index, follow" />
            <title>Bulk SMS France Services | Send Bulk SMS Online with DIGINTRA</title>
            <meta
              name="description"
              content="Send bulk SMS in France with DIGINTRA Teleservices. Reliable France SMS gateway, bulk SMS API, high delivery rates, and affordable pricing for businesses."
            />
            <link
              rel="canonical"
              href="https://digintra.com/blog/bulk-sms-france"
            />
          </Helmet>
        {/* France Hero Section */}
        <section className="flex min-h-screen w-full items-center justify-center bg-gradient-to-r from-sky-950 to-sky-900 px-4 md:px-6">
  <div className="flex w-full max-w-6xl items-center gap-6 md:gap-10 flex-col md:flex-row">

    {/* Left Side - Image */}
    <motion.div
      className="flex w-full md:w-1/2 items-center justify-center"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="rounded-2xl bg-gradient-to-r from-blue-200 to-orange-200 p-4 md:p-6 w-full">
        <img
          src={Image}
          alt="Bulk SMS France"
          className="rounded-xl w-full"
        />
      </div>
    </motion.div>

    {/* Right Side - Text */}
    <motion.div
      className="flex w-full md:w-1/2 flex-col justify-center text-white mt-4 md:mt-0 text-center md:text-left"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
    >
      <h1 className="mb-3 md:mb-4 text-2xl md:text-4xl font-bold leading-snug md:leading-tight">
        Send Bulk SMS to {"  "}
        <span className="text-red-400 block md:inline text-6xl">
          France
        </span>
      </h1>

      <p className="mb-4 md:mb-6 text-base md:text-lg text-gray-300">
        Reach customers across France instantly with reliable bulk SMS solutions, 
        driving engagement, boosting conversions, and delivering compliant,
        high-delivery messaging that scales your sales and marketing efforts.
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
    </motion.div>

  </div>
        </section>


        {/* 2nd section */}
        <section className="bg-gradient-to-b from-indigo-50 via-white to-blue-50 py-20 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto lg:flex lg:items-center lg:gap-12">
          <motion.div
            className="lg:w-1/2 space-y-6 text-center lg:text-left"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-3xl sm:text-4xl font-extrabold text-indigo-900">
              Bulk SMS Services in France
            </h1>
            <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
              Connect with customers across France instantly using <span className="font-semibold text-indigo-700">DIGINTRA Teleservices</span>, a reliable and performance-driven messaging partner. Our <span className="font-semibold text-indigo-700">Bulk SMS France</span> solutions help businesses deliver important messages, promotions, and alerts with speed and accuracy. With a robust France SMS gateway and enterprise-grade infrastructure, DIGINTRA ensures your messages reach the right audience at the right time.
            </p>
            <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
              Businesses looking to send bulk SMS at scale trust DIGINTRA for <span className="font-semibold text-indigo-700">secure delivery, transparent pricing,</span> and easy integration through advanced SMS technology.
            </p>
          </motion.div>

          <motion.div
            className="lg:w-1/2 mt-10 lg:mt-0"
            initial={{ rotateY: 90, opacity: 0 }}
            whileInView={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img
              src={Image2}
              alt="Bulk SMS France"
              className="w-full rounded-2xl shadow-xl object-cover"
            />
          </motion.div>
        </div>
        </section>

        {/* 3rd section */}
        <section className="bg-gray-900 text-green-400 py-16 px-5 sm:px-10">
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-blue-500 text-center mb-8">
          Why Choose DIGINTRA for Bulk SMS in France?
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-lg sm:text-xl leading-relaxed text-center mb-10">
          DIGINTRA Teleservices is recognized as a best SMS service provider with global expertise and local connectivity in France. Our platform is built to support high volume messaging while maintaining compliance and quality. Our experience and infrastructure make France SMS services online simple and effective.
        </p>

        {/* Features Cards with Motion */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-5 rounded-xl border-2 border-transparent hover:border-green-500 transition-all duration-300 shadow-md cursor-pointer"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 flex-shrink-0 text-green-500 mt-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-200 text-lg">{feature}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
        </section>


          {/* 4th section */}
         <section className="py-16 px-5 sm:px-10 bg-gradient-to-b from-gray-200 via-blue-100 to-gray-300 overflow-hidden">
          <div className="max-w-6xl mx-auto">
  <div className="max-w-6xl mx-auto text-center mb-12">
    <h2 className="text-3xl sm:text-4xl font-bold text-black">
      Our Bulk SMS Solutions for France
    </h2>
    <p className="text-blue-900 text-lg sm:text-xl mt-4">
      DIGINTRA provides tailored messaging solutions designed for different communication goals.
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
    {solutions.map((sol, index) => (
      <motion.div
        key={index}
        className="relative bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-300"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: index * 0.15 }}
      >
        {/* Image with blue gradient overlay */}
        <div className="relative h-60 sm:h-65 lg:h-40">
          <img
            src={sol.img}
            alt={sol.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-600/70 to-transparent"></div>
        </div>

        {/* Overlay info */}
        <div className="p-3">
          <h3 className="text-gray-900 text-xl font-semibold mb-2">{sol.title}</h3>
          <p className="text-black text-sm sm:text-base">{sol.description}</p>
        </div>
      </motion.div>
    ))}
  </div>
  </div>
        </section>

          {/* 5th section */}
       <section className="py-16 px-5 sm:px-6 bg-gray-900 overflow-hidden">
 
        <div className="max-w-6xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-blue-500">
        Advanced Features of Bulk SMS France
      </h2>
      <p className="text-gray-300 text-lg sm:text-xl mt-4">
        Our platform is equipped with advanced features that enhance control, performance, and visibility.
      </p>
    </div>

    {/* Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {fea.map((feature, index) => (
        <motion.div
          key={index}
          className="bg-gray-800/50 backdrop-blur-lg rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
          initial={featureAnimations[index]}
          whileInView={{ x: 0, y: 0, scale: 1, rotate: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
        >
          {/* Icon */}
          <div
            className={`w-16 h-16 flex items-center justify-center rounded-full mb-5 bg-gradient-to-br ${feature.color} text-white text-3xl`}
          >
            {feature.icon}
          </div>

          {/* Text */}
          <h3 className="text-lg sm:text-xl font-semibold text-white">
            {feature.title}
          </h3>
        </motion.div>
      ))}
    </div>

  </div>
        </section>

        {/* 6th section */}
      <section className="py-16 px-5 sm:px-10 bg-gradient-to-b from-blue-50 via-white to-blue-50">
  <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

    {/* LEFT SIDE – IMAGE */}
    <div className="relative">
      <img
        src={Image3} 
        alt="Secure and Trusted Messaging"
        className="w-full rounded-3xl shadow-lg"
      />
    </div>

    {/* RIGHT SIDE – CONTENT */}
    <div>

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        Compliance & Data Security
      </h2>

      <p className="text-gray-600 text-lg mb-8">
        DIGINTRA follows strict compliance and security standards to protect customer data and ensure safe messaging across France and the EU.
      </p>

      {/* FEATURES */}
      <div className="space-y-6">

        {/* Item 1 */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xl">
            🛡️
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              GDPR Compliance
            </h3>
            <p className="text-gray-600 text-sm">
              Fully compliant with GDPR regulations for France and EU messaging.
            </p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-green-600 text-xl">
            🔐
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Secure Data Encryption
            </h3>
            <p className="text-gray-600 text-sm">
              Advanced encryption and strict access control to safeguard data.
            </p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 text-xl">
            ✅
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Opt-in & Opt-out Management
            </h3>
            <p className="text-gray-600 text-sm">
              Built-in tools to manage consent and unsubscribe requests easily.
            </p>
          </div>
        </div>

        {/* Item 4 */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-cyan-100 text-cyan-600 text-xl">
            📊
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Transparent Reporting
            </h3>
            <p className="text-gray-600 text-sm">
              Clear message routing, delivery tracking, and audit-ready logs.
            </p>
          </div>
        </div>

      </div>

      {/* Bottom Line */}
      <p className="text-gray-600 mt-8 text-sm sm:text-base">
        Your messaging campaigns remain safe, compliant, and trustworthy.
      </p>

    </div>

  </div>
        </section>


        {/* 7th section */}
        <section className="w-full min-h-screen bg-gradient-to-b from-[#020617] via-[#020617] to-[#020617] py-24 px-6">
              <div className="max-w-6xl mx-auto">
        
                {/* Heading */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-center max-w-3xl mx-auto mb-20 "
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-blue-500">
                    How Our Bulk SMS Works
                  </h2>
                  <p className="text-gray-400">
                    Sending bulk SMS in France with DIGINTRA is simple, fast, and reliable.
                  </p>
                </motion.div>
        
                {/* Timeline */}
                <div className="relative">
                  {/* Vertical Line */}
                  <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-gray-600 to-gray-800"></div>
        
                  <div className="space-y-16">
                    {steps.map((step, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="relative flex items-start gap-10"
                      >
                        {/* Step Number */}
                        <div
                          className={`z-10 flex items-center justify-center w-12 h-12 rounded-full border-2 bg-[#020617] font-semibold ${step.color}`}
                        >
                          {step.id}
                        </div>
        
                        {/* Card */}
                        <div
                          className={`relative flex items-center gap-5 rounded-full border px-6 py-4 w-full max-w-xl backdrop-blur-md bg-white/5 ${step.color}`}
                        >
                          {/* Icon */}
                          <div className="w-12 h-12 rounded-full border flex items-center justify-center text-lg bg-black/40">
                            {step.icon}
                          </div>
        
                          {/* Text */}
                          <div>
                            <h3 className="text-white font-semibold mb-1">
                              {step.title}
                            </h3>
                            <p className="text-sm text-gray-400">
                              {step.desc}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </section>



          {/* 8th section */}
        <section className="w-full bg-blue-100 py-20 px-6">
            <div className="max-w-6xl mx-auto">
    
            {/* Heading */}
            <div className="text-center max-w-3xl mx-auto mb-14">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Pricing for Bulk SMS France
                </h2>
                <p className="text-slate-600 text-lg">
                DIGINTRA offers flexible pricing options designed for businesses of all sizes.
                </p>
            </div>
    
            {/* Pricing Card Wrapper */}
                            <div className="relative max-w-5xl mx-auto">
    
                            {/* Floating Dollar Icon */}
                            <motion.div
                    className="absolute left-1/2 -top-8 -translate-x-1/2 z-10"
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    >
                    <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center shadow-lg">
                        <FaDollarSign className="text-white text-xl" />
                    </div>
                    </motion.div>
    
    
                {/* Card */}
                <div className="relative border border-blue-200 rounded-3xl px-8 md:px-16 py-16 bg-white shadow-lg shadow-blue-200 hover:shadow-blue-300 transform hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                
                {/* Decorative background */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none"></div>
    
                {/* Header */}
                <h3 className="text-3xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-500">
                    Simple & Transparent Pricing
                </h3>
    
                <p className="text-center text-slate-600 mb-10">
                    Our pricing is structured to ensure cost efficiency and scalability for your business.
                </p>
    
                {/* Feature List */}
                <ul className="space-y-6 max-w-3xl mx-auto">
                    {[
                    "Competitive per SMS pricing",
                    "Volume based discounts for large campaigns",
                    "Custom enterprise pricing for high traffic users",
                    "No setup fees or hidden charges",
                    ].map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                        <motion.span
                        className="flex-shrink-0 mt-1 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center"
                        initial={{ scale: 0, rotate: -45, opacity: 0 }}
                        whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 500, damping: 20,  delay:0.5 }}
                        viewport={{ once: true }}
                        >
                        <FaCheck className="text-purple-600 text-lg" />
                        </motion.span>
    
                        <span className="text-slate-700 text-lg">{item}</span>
                    </li>
                    ))}
                </ul>
    
                {/* Footer Text */}
                <p className="text-center text-slate-600 mt-10 max-w-3xl mx-auto">
                    Reach out to our sales team to get a customized pricing plan that fits your business goals.
                </p>
                
                        </div>
    
            </div>
            </div>
        </section>


          {/* 9th section */}
        <section className="w-full py-20 bg-gradient-to-b from-[#0B1220] via-[#0F172A] to-[#020617]">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16 px-4"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-blue-500 mb-4">
              Benefits of Using DIGINTRA Bulk SMS France
            </h2>
            <p className="text-gray-400 text-base sm:text-lg">
              Using DIGINTRA provides measurable advantages for business communication.
              Bulk SMS remains one of the most effective channels for direct outreach.
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/20 transition-all"
              >
                {/* Number Badge */}
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-lg font-bold mr-4 shadow-md">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {benefit}
                  </h3>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed">
                  This feature helps improve your SMS campaigns by increasing customer
                  engagement, delivery speed, and overall communication efficiency.
                </p>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-0 hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </section>



        {/* 10th section */}
        <section className="w-full py-20 px-5 bg-gradient-to-b from-blue-100 via-white to-gray-300">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Why Bulk SMS Is <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Effective in France
            </span>
          </h2>

          <p className="text-gray-600 text-lg max-w-xl">
            SMS continues to be a preferred communication channel in France due to
            its speed, simplicity, and wide accessibility.
          </p>
        </motion.div>

        {/* RIGHT SIDE CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ y: -8, scale: 1.02 }}
          className="bg-white rounded-3xl p-10 shadow-xl border border-gray-200 hover:shadow-blue-200/60 transition-all"
        >
          <ul className="space-y-6">
            {points.map((point, idx) => (
              <motion.li
                key={idx}
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-start group cursor-default"
              >
                <BsCheckCircleFill className="text-blue-600 mr-4 mt-1 text-2xl flex-shrink-0 group-hover:scale-110 transition-transform" />
                <p className="text-gray-800 text-lg group-hover:text-gray-900 transition-colors">
                  {point}
                </p>
              </motion.li>
            ))}
          </ul>
        </motion.div>

      </div>
        </section>


        {/* 11th section */}

         <section className="w-full py-20 pb-32 px-5 bg-gradient-to-br from-[#020617] via-[#0F172A] to-[#020617]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl px-8 md:px-16 py-16 shadow-2xl"
      >
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
          Get Started with{" "}
          <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
            DIGINTRA Bulk SMS France
          </span>
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
          DIGINTRA Teleservices helps businesses send bulk SMS in France with
          confidence and control. Our France SMS services combine performance,
          security, and ease of use to deliver real business results.
        </p>

        <p className="text-gray-500 text-base md:text-lg max-w-3xl mx-auto mb-12">
          Partner with DIGINTRA and experience a reliable messaging platform built
          to support your growth and communication needs.
        </p>

        
      </motion.div>
          </section>



<Footer/>



    </>
  )
}

export default France