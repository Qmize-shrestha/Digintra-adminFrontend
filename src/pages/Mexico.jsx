import React from 'react'
import { motion } from "framer-motion";


// 6th section icons
import {
  FaSignal,
  FaChartLine,
  FaIdBadge,
  FaLanguage,
  FaRoute,
  FaServer,
  FaCode,
} from "react-icons/fa";
import Image from "../assets/bulk-sms-mexico.png";
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';
import Image2 from "../assets/mexico-bulk-sms.jpg";
import Image3 from "../assets/mexico-bulk-sms2.jpg"

// 9th section icons
import { FaShieldAlt, FaClipboardCheck, FaLock, FaNetworkWired } from "react-icons/fa";
import Hreflang from "../HrefComp";
import { hreflangConfig } from "../HreflangConfig";



// 2nd section content
const features = [
  "Direct interconnections with major Mexico telecom carriers",
  "High scalability for massive SMS campaigns",
  "Smooth Mexico SMS gateway with real-time delivery reports",
  "Compliant, secure, and reliable messaging infrastructure",
  "Support team with strong local market expertise",
];


    // 3rd section content
const smsTypes = [
  {
    step: "01",
    title: "PROMOTIONAL SMS",
    desc: "Special offers, discounts, product launches, and brand visibility campaigns with high open rates.",
  },
  {
    step: "02",
    title: "TRANSACTIONAL SMS",
    desc: "Order confirmations, payment alerts, account notifications, and time-sensitive updates.",
  },
  {
    step: "03",
    title: "OTP & VERIFICATION",
    desc: "Secure OTP delivery for authentication, login verification, and fraud prevention.",
  },
  {
    step: "04",
    title: "BULK SMS API",
    desc: "Powerful SMS API for websites, mobile apps, CRMs, and ERPs with automated messaging.",
  },
];


// 6th section object
const feature = [
  {
    id: "01",
    title: "High delivery rate across all Mexican carriers",
    icon: <FaSignal />,
    color: "from-red-400 to-orange-400",
  },
  {
    id: "02",
    title: "Real-time delivery reports and analytics",
    icon: <FaChartLine />,
    color: "from-orange-400 to-yellow-400",
  },
  {
    id: "03",
    title: "Sender ID and template management",
    icon: <FaIdBadge />,
    color: "from-blue-400 to-indigo-400",
  },
  {
    id: "04",
    title: "Unicode and Spanish language support",
    icon: <FaLanguage />,
    color: "from-indigo-400 to-purple-400",
  },
  {
    id: "05",
    title: "Intelligent routing for faster message delivery",
    icon: <FaRoute />,
    color: "from-teal-400 to-cyan-400",
  },
  {
    id: "06",
    title: "Scalable infrastructure for high-volume traffic",
    icon: <FaServer />,
    color: "from-green-400 to-emerald-400",
  },
  {
    id: "07",
    title: "Secure bulk SMS API for automation",
    icon: <FaCode />,
    color: "from-pink-400 to-rose-400",
  },
];


// 4th section animation
const floatAnim = (delay = 0) => ({
  animate: {
    y: [0, -8, 0],
  },
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
    delay,
  },
});



const Hex = ({ title, desc, icon, delay = 0 }) => (
 <motion.div
  {...floatAnim(delay)}
  className="relative w-56 h-64 p-[2px] clip-hexagon 
  bg-gradient-to-r from-indigo-500 via-sky-400 to-purple-500 
  animate-borderMove shadow-blue-600"
>
  {/* Inner Card */}
  <div
    className="w-full h-full clip-hexagon
    bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#020617]
    shadow-2xl flex flex-col items-center justify-center
    text-center px-6 text-white relative overflow-hidden"
  >
    {/* Texture Overlay */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_65%)] pointer-events-none" />

    <div className="relative z-10">
      <div className="text-3xl mb-4">{icon}</div>
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-sm text-gray-300">{desc}</p>
    </div>
  </div>
</motion.div>

);



// 7th section Animation
const cardAnim = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};


// 8th -section content
const steps = [
  {
    color: "from-orange-500 to-red-500",
    icon: "⚡",
    title: "Instant message delivery to mobile users",

  },
  {
    color: "from-green-500 to-emerald-500",
    icon: "📈",
    title: "High open and response rates compared to email",
   
  },
  {
    color: "from-sky-500 to-blue-600",
    icon: "💰",
    title: "Cost-effective communication channel",
    
  },
  {
    color: "from-indigo-500 to-violet-600",
    icon: "📶",
    title: "Direct reach without internet dependency",
    
  },
  {
    color: "from-pink-500 to-fuchsia-600",
    icon: "🛠️",
    title: "Easy campaign setup and management",
    
  },
];

// 9th section content
     const step = [
        {
          title: "Adherence to local SMS regulations in Mexico",
          icon: <FaClipboardCheck className="text-3xl text-gray-800" />,
          color: "bg-red-400",
        },
        {
          title: "Opt-in and opt-out support",
          icon: <FaShieldAlt className="text-3xl text-gray-800" />,
          color: "bg-yellow-400",
        },
        {
          title: "Secure data handling and encryption",
          icon: <FaLock className="text-3xl text-gray-800" />,
          color: "bg-teal-500",
        },
        {
          title: "Reliable message routing through approved channels",
          icon: <FaNetworkWired className="text-3xl text-gray-800" />,
          color: "bg-blue-600",
        },
      ];



    //   10th section content
    const defaultsteps = [
    {
      number: 1,
      title: "Register and SignUp",
      description: "Register your account and complete verification",
    },
    {
      number: 2,
      title: "Set Up Campaign",
      description: "Upload contacts or integrate using our bulk SMS API",
    },
    {
      number: 3,
      title: "Send Messages",
      description: "Create your SMS content and choose sender ID",
    },
    {
      number: 4,
      title: "Track Performance",
      description: "Launch your campaign or automate messages",
    },
    {
      number: 5,
      title: "Scale Up",
      description: "Track delivery and performance in real time",
    },
  ];
  const stepsToRender = steps.length > 0 ? steps : defaultSteps;

const Mexico = () => {
  return (
    <>
<Hreflang links={hreflangConfig} />
     <Helmet>
                <meta name="robots" content="index, follow" />
                <title>Bulk SMS Mexico Services | SMS Marketing & Bulk SMS API – DIGINTRA</title>
                <meta
                  name="description"
                  content="Send bulk SMS in Mexico with DIGINTRA Teleservices. Reliable SMS gateway Mexico, SMS marketing, transactional messaging, and bulk SMS API with high delivery rates."
                />
                <link
                  rel="canonical"
                  href="https://digintra.com/blog/bulk-sms-mexico"
                />
              </Helmet>
        {/* 1st- Hero Section */}
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
                alt="Bulk SMS Mexico"
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
                Bulk SMS Mexico{" "}
                <span className="text-red-400 block md:inline">
                Reach customers across Mexico instantly
                </span>
            </h1>

            <p className="mb-4 md:mb-6 text-base md:text-lg text-gray-300">
                Deliver fast, reliable, high-delivery SMS campaigns across Mexico to boost
                customer engagement, drive sales, and scale your business communications
                with confidence.
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
         <section className="relative bg-white py-24 overflow-hidden">
      {/* Soft Background Accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Bulk SMS Services{" "}
              <span className="text-blue-600">Mexico</span>
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              With <strong>DIGINTRA’s Bulk SMS Mexico</strong> solution, you can
              connect with customers across Mexico instantly. Our platform
              assists businesses in sending bulk SMS in Mexico with speed,
              security, and proven deliverability.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Whether you need to promote new offers, send alerts, or deliver
              important updates, our platform empowers you to send messages with
              confidence and control.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              From local businesses to international corporations, DIGINTRA
              fosters <strong>SMS marketing in Mexico</strong> with sophisticated
              routing and an enterprise-level infrastructure.
            </p>
          </motion.div>

          {/* Right Animated Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-200 to-cyan-200 rounded-3xl blur-2xl opacity-70" />

            {/* Image Card */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative bg-white rounded-3xl shadow-xl border border-gray-100 p-6"
            >
              <img
                src={Image2}
                alt="Bulk SMS Mexico "
                className="w-full max-w-md"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>


        {/* 3nd- why select */}
        <section className="bg-gray-900 text-white py-20 px-6">
              <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
                
                {/* Left Content */}
                <motion.div
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl font-bold leading-tight mb-6">
                    Why Select <span className="text-green-400">DIGINTRA</span> for
                    <br /> Bulk SMS Mexico?
                  </h2>
        
                  <p className="text-gray-300 text-lg mb-6">
                    DIGINTRA Teleservices specializes in SMS Mexico services and delivers
                    consistent, high-performance messaging across all major Mexican
                    carrier networks.
                  </p>
        
                  <p className="text-gray-400">
                    Our mission is simple — help businesses grow with safe, compliant,
                    and professional bulk SMS solutions.
                  </p>
                </motion.div>
        
                {/* Right Features */}
                <motion.div
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gray-800 rounded-2xl p-8 shadow-lg"
                >
                  <h3 className="text-2xl font-semibold mb-6 text-green-400">
                    What Makes Us Different?
                  </h3>
        
                  <ul className="space-y-4">
                    {features.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <span className="text-green-400 mt-1">✔</span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
        
              </div>
            </section>

        {/* 4rd- types of sms */}
        <section className="bg-gray-950 text-white py-20 px-6 overflow-hidden">
    <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-24"
    >
        <h2 className="text-4xl font-bold mb-4">
        Types of <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-blue-500">SMS Services</span> in Mexico
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
        DIGINTRA offers a complete range of SMS services in Mexico, designed
        to support different business needs with reliability, speed, and security.
        </p>
    </motion.div>

    {/* PROCESS WRAPPER */}
    <div className="relative flex justify-center">

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-32 gap-y-24 relative z-10">

        {smsTypes.map((item, index) => (
            <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative overflow-visible"
            >
            {/* Step badge */}
            <div className="absolute -top-8 -left-8 z-20  bg-gradient-to-r from-green-400 via-teal-400 to-blue-500 text-white w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-bold shadow-xl">
                {item.step}
            </div>

            {/* Card */}
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 w-[320px] shadow-xl">
                <h3 className="text-xl font-semibold tracking-widest mb-3">
                {item.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                {item.desc}
                </p>
            </div>
            </motion.div>
        ))}

        </div>

        {/* ANIMATED DOTTED LINE (BELOW CARDS) */}
        <motion.svg
        viewBox="0 0 900 500"
        className="absolute inset-0 w-full h-full z-0 hidden lg:block pointer-events-none"
        >
        <defs>
            <linearGradient id="lineGradient" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="900" y2="0">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="50%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
        </defs>

        {[
            "M200 120 C400 120 400 120 600 120",
            "M600 120 C600 300 600 300 600 360",
            "M600 360 C400 360 400 360 200 360",
            "M200 360 C200 200 200 200 200 120",
        ].map((d, i) => (
            <motion.path
            key={i}
            d={d}
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            strokeDasharray="5 6"
            animate={{ pathLength: [0, 1] }}
            transition={{
                duration: 3,
                ease: "linear",
                repeat: Infinity,
                delay: i * 0.4,
            }}
            />
        ))}
        </motion.svg>

    </div>
    </div>
        </section>

        {/* 5th - industries */}
        <section className="py-24 px-4 bg-gradient-to-b from-[#e8ebef] via-[#b6c3eb] to-[#bfc2ea]">
  <div className="max-w-6xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-20">
      <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-blue-600 to-sky-500 bg-clip-text text-transparent">
        Industries We Serve & Use Cases
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto text-lg">
        Bulk SMS Mexico solutions from DIGINTRA support a wide range of industries
        with reliable and effective messaging strategies.
      </p>
    </div>

    {/* HEX INFOGRAPHIC (Desktop) */}
    <div className="hidden md:flex flex-col items-center gap-[-20px]">

      {/* Row 1 */}
      <div className="flex gap-12 mb-[-30px]">
        <Hex title="E-commerce" desc="Order updates, delivery alerts, promotional campaigns" icon="🛒" delay={0} />
        <Hex title="Banking & Finance" desc="OTPs, transaction alerts, security notifications" icon="🏦" delay={0.5} />
      </div>

      {/* Row 2 */}
      <div className="flex gap-12 mb-[-30px]">
        <Hex title="Healthcare" desc="Appointment reminders, test results, patient updates" icon="🏥" delay={1} />
        <Hex title="Education" desc="Exam notifications, attendance alerts, announcements" icon="🎓" delay={1.5} />
        <Hex title="Retail & FMCG" desc="Offers, loyalty programs, store promotions" icon="🛍️" delay={2} />
      </div>

      {/* Row 3 */}
      <div className="flex gap-12">
        <Hex title="Travel & Hospitality" desc="Booking confirmations, travel alerts" icon="✈️" delay={2.5} />
        <Hex title="Logistics" desc="Shipment tracking and delivery updates" icon="🚚" delay={3} />
      </div>
    </div>

    {/* Mobile Cards */}
    <div className="md:hidden grid gap-6">
      {[
        ["🛒", "E-commerce", "Order updates, delivery alerts, promotional campaigns"],
        ["🏦", "Banking & Finance", "OTPs, transaction alerts, security notifications"],
        ["🏥", "Healthcare", "Appointment reminders, test results, patient updates"],
        ["🎓", "Education", "Exam notifications, attendance alerts, announcements"],
        ["🛍️", "Retail & FMCG", "Offers, loyalty programs, store promotions"],
        ["✈️", "Travel & Hospitality", "Booking confirmations, travel alerts"],
        ["🚚", "Logistics", "Shipment tracking and delivery updates"],
      ].map(([icon, title, desc], i) => (
        <div
          key={i}
          className="relative bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#020617]
          text-white rounded-xl p-6 shadow-xl hover:shadow-indigo-500/40
          transition-all duration-300 hover:-translate-y-1"
        >
          {/* texture overlay */}
          <div className="absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),_transparent_60%)] pointer-events-none" />

          <div className="relative z-10">
            <div className="text-3xl mb-3">{icon}</div>
            <h4 className="font-semibold">{title}</h4>
            <p className="text-sm text-gray-300">{desc}</p>
          </div>
        </div>
      ))}
    </div>

    {/* Footer */}
    <p className="text-center text-gray-600 max-w-4xl mx-auto mt-20">
      Our experience across industries ensures effective messaging strategies
      tailored for every business use case.
    </p>

  </div>

  {/* Hexagon Shape */}
  <style>
    {`
      .clip-hexagon {
        clip-path: polygon(
          50% 0%,
          93% 25%,
          93% 75%,
          50% 100%,
          7% 75%,
          7% 25%
        );
      }
    `}
  </style>
        </section>


            {/* 6th- section */}
         <section className="py-24 bg-gradient-to-b from-[#f8fafc] via-[#eef2ff] to-white px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-sky-500 bg-clip-text text-transparent mb-4">
            Features of Bulk SMS Mexico
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            DIGINTRA’s Bulk SMS Mexico platform includes advanced features designed
            for performance, control, and maximum ROI.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {feature.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-2xl p-8 shadow-xl transition-all duration-300 ease-out
                hover:-translate-y-3 hover:shadow-indigo-400/50 hover:ring-2 hover:ring-indigo-300/40  hover:shadow-indigo-300/50 transition-all"
            >
              {/* Gradient Line */}
              <div
                className={`absolute -left-6 top-10 h-[70%] w-1 bg-gradient-to-b ${item.color} rounded-full`}
              />

              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center text-white bg-gradient-to-br ${item.color}`}
              >
                {item.icon}
              </div>

              <h4 className="font-semibold text-gray-900 mb-2">
                {item.title}
              </h4>

              {/* Number */}
              <span
                className={`absolute bottom-4 right-6 text-4xl font-bold opacity-20 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
              >
                {item.id}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Footer Text */}
        <p className="text-center text-gray-600 max-w-4xl mx-auto mt-20 text-lg">
          These advanced features help businesses maximize engagement,
          automation efficiency, and return on investment.
        </p>

      </div>
            </section>


          {/* 7th section */}
           <section className="bg-gradient-to-br from-slate-100 to-slate-200 py-24 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Pricing for Bulk SMS Mexico
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto text-lg">
            Our pricing model is flexible and transparent, designed to suit
            businesses of all sizes.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {[
            {
              no: "01",
              color: "bg-teal-500",
              title: "Competitive per-SMS rates",
              
            },
            {
              no: "02",
              color: "bg-orange-500",
              title: "Volume-based discounts for large campaigns",
              
            },
            {
              no: "03",
              color: "bg-red-500",
              title: "No hidden setup or maintenance fees",
             
            },
            {
              no: "04",
              color: "bg-purple-500",
              title: "Custom pricing for enterprise and API users",
             
            },

          ].map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardAnim}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              {/* Tag */}
              <div
                className={`absolute -top-6 left-6 ${item.color} text-white px-5 py-2 rounded-xl font-bold shadow-lg`}
              >
                {item.no}
              </div>

              <h4 className="mt-8 mb-3 font-semibold text-slate-900">
                {item.title}
              </h4>
            </motion.div>
          ))}
        </div>

        {/* Bottom Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center text-slate-600 max-w-4xl mx-auto mt-20 text-lg"
        >
          Contact our sales team for a tailored quote based on your messaging
          volume and business requirements.
        </motion.p>

      </div>
            </section>

          {/* 8th section */}
          <section className="bg-[#2f2f2f] py-24 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-blue-500 mb-4">
            Benefits of Using Bulk SMS in Mexico
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Choosing DIGINTRA for SMS Mexico campaigns offers measurable advantages.
          </p>
        </motion.div>

        {/* Infographic */}
        <div className="relative flex flex-wrap justify-center gap-16">

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.08 }}
              className="flex flex-col items-center text-center max-w-xs"
            >
              {/* Circle */}
              <div
                className={`relative w-28 h-28 rounded-full bg-gradient-to-r ${step.color} p-[6px] shadow-2xl`}
              >
                <div className="w-full h-full rounded-full bg-[#1f1f1f] flex items-center justify-center text-3xl text-white">
                  {step.icon}
                </div>
              </div>

              {/* Text */}
              <h4 className="mt-6 text-white font-semibold">
                {step.title}
              </h4>
            </motion.div>
          ))}

        </div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center text-gray-300 max-w-4xl mx-auto mt-20 text-lg"
        >
          Bulk SMS remains one of the most trusted and effective communication
          tools for businesses in Mexico.
        </motion.p>

      </div>
            </section>

            {/* 9th section */}
             <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center mb-12 px-4">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-sky-500 bg-clip-text text-transparent mb-4">
          Compliance & Data Security
        </h2>
        <p className="text-gray-600 text-lg">
          DIGINTRA Teleservices follows strict data protection and telecom regulations to ensure secure and compliant messaging.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 px-4">
        {step.map((step, index) => (
          <motion.div
            key={index}
            className="relative bg-white rounded-3xl p-8 shadow-lg flex flex-col items-start cursor-pointer"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300, duration: 0.5, delay: index * 0.1 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
           
          >
            <div
              className={`absolute top-0 right-0 w-16 h-16 ${step.color} rounded-tr-3xl rounded-bl-3xl`}
            ></div>
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </motion.div>
        ))}
      </div>
            </section>


    {/* 10th section */}
         <section className="relative bg-[#0B0F1A] py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-blue-500">
            How Our Bulk SMS Mexico Service Works
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Getting started with DIGINTRA is simple, fast, and built for scale.
          </p>
        </motion.div>

        {/* Scroll Progress Line */}
        <div className="relative mb-12">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-800 rounded-full" />
          <motion.div
            className="absolute top-1/2 left-0 h-1 bg-blue-500 rounded-full origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
          />
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {defaultsteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative text-center bg-[#12172A] border border-white/10 rounded-xl p-6 cursor-pointer
              hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 transition-transform duration-300"
            >
              {/* Step Number */}
              <div className="flex items-center justify-center w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-white font-bold text-lg shadow-lg">
                {step.number}
              </div>

              {/* Step Text */}
              <h3 className="mt-6 text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
            </section>
        

    {/* 11th section */}
     <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Content */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-sky-500 bg-clip-text text-transparent mb-6">
            Why Bulk SMS Is Effective in Mexico
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            Mexico has one of the highest mobile phone usage rates in Latin America. SMS reaches users directly on their devices without requiring mobile data or app installation.
          </p>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Key reasons bulk SMS works in Mexico:
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>Messages are read within minutes.</li>
            <li>Works on all mobile phones.</li>
            <li>High trust and reliability.</li>
            <li>Ideal for both urban and rural audiences.</li>
          </ul>
          <p className="text-gray-700 text-lg">
            For businesses looking to connect with customers instantly, bulk SMS is a proven solution.
          </p>
        </div>

        {/* Right Visual/Div */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="w-full h-80 bg-gradient-to-br from-indigo-100 to-sky-200 rounded-3xl shadow-lg flex items-center justify-center">
           <img src={Image3} alt="Bulk SMS Mexico" className='rounded-2xl shadow-lg shadow-green-500' />
          </div>
        </div>

      </div>
    </section>



          {/* 12th- section */}
           <section className="relative overflow-hidden bg-[#142435] py-32">
      {/* Background Glow Effects */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="bg-[#12172A]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-16 text-center"
        >
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
          >
            Get Started with{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              DIGINTRA Bulk SMS Mexico
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-6 text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            DIGINTRA Teleservices helps businesses communicate smarter and faster
            with reliable <span className="text-white">Bulk SMS Mexico</span>{" "}
            services. Whether you need{" "}
            <span className="text-white">SMS marketing Mexico</span>,
            transactional messaging, or a powerful{" "}
            <span className="text-white">SMS gateway Mexico</span>, we provide
            the tools and expertise to support your growth.
          </motion.p>

          
        </motion.div>
      </div>
    </section>

    <Footer/>
    </>
  )
}

export default Mexico