import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaUserPlus, FaWhatsapp } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./transaction.css";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import icons1 from "../assets/icons8-arrow-100.png";
import icons2 from "../assets/icons8-call-50.png";
import icons3 from "../assets/product.png";
import icons4 from "../assets/ccc.png";
import icons5 from "../assets/ggg.png";
import icons6 from "../assets/cus.png";
import icons7 from "../assets/save time.png";
import icons8 from "../assets/business.png";
import icons9 from "../assets/satis.png";
import icons10 from "../assets/c1.png";
import icons11 from "../assets/c2.png";
import icons12 from "../assets/c3.png";
import icons13 from "../assets/c4.png";
import icons14 from "../assets/Get_started_img.webp";
import icons15 from "../assets/icons8-plus-501.png";
import icons16 from "../assets/Transactional_sms_img.webp";
import Footer from "../components/Footer";
import Getstarted from "../components/Getstarted";
import Client from "../components/Client";
import transactionalkey from "../assets/transactional_key.webp";
import HeroImage from "../assets/messenger-service.jpg";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { Gift, ShoppingBag, MessageSquare, RefreshCw, Lightbulb } from "lucide-react";
import { Server, Code, BarChart3, Bell } from "lucide-react";
import { ShieldCheck, Users, BarChart, CheckCircle2, Rocket } from "lucide-react";
import { ChevronDown, ChevronUp, } from "lucide-react";
import { AnimatePresence } from "framer-motion";
export default function Transactionsl_sms() {
  const [Ques1, setQues1] = useState(false);
  const [Ques2, setQues2] = useState(false);
  const [Ques3, setQues3] = useState(false);

  function handleQues1() {
    setQues1(!Ques1);
    setQues2(false);
    setQues3(false);
  }
  function handleQues2() {
    setQues2(!Ques2);
    setQues1(false);
    setQues3(false);
  }

  function handleQues3() {
    setQues3(!Ques3);
    setQues1(false);
    setQues2(false);
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  




  const trustPoints = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-green-600" />,
    title: "10+ Years of Expertise",
    desc: "DIGINTRA Teleservices has over a decade of experience in the SMS industry, delivering excellence worldwide.",
  },
  {
    icon: <Users className="w-8 h-8 text-green-600" />,
    title: "Thousands of Global Clients",
    desc: "Trusted by businesses in e-commerce, healthcare, education, retail, and many other industries.",
  },
  {
    icon: <BarChart className="w-8 h-8 text-green-600" />,
    title: "Proven Business Growth",
    desc: "Our clients achieve higher engagement, more leads, and better conversions through SMS marketing.",
  },
  {
    icon: <CheckCircle2 className="w-8 h-8 text-green-600" />,
    title: "Reliable & Transparent Service",
    desc: "We’re known for reliability, clear pricing, and dedicated customer support that businesses can count on.",
  },
];


  const apiFeatures = [
  {
    icon: <Server className="w-8 h-8 text-green-600" />,
    title: "Send Bulk Messages Programmatically",
    desc: "Easily dispatch thousands of promotional messages directly from your CRM or application with our robust API.",
  },
  {
    icon: <Code className="w-8 h-8 text-green-600" />,
    title: "Personalize Content Dynamically",
    desc: "Customize message templates with dynamic placeholders for each recipient, making every SMS feel personal.",
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-green-600" />,
    title: "Get Real-Time Delivery Reports",
    desc: "Monitor message status and engagement instantly through real-time delivery tracking and analytics.",
  },
  {
    icon: <Bell className="w-8 h-8 text-green-600" />,
    title: "Automate Notifications & Reminders",
    desc: "Set automated campaigns and reminders that trigger based on user actions or scheduled times.",
  },
];


const promoMessages = [
  {
    icon: <Gift className="w-8 h-8 text-green-600" />,
    title: "🎯 Discount & Offer Alerts",
    desc: "Share limited-time deals, coupons, and exclusive discounts with your customers.",
  },
  {
    icon: <ShoppingBag className="w-8 h-8 text-green-600" />,
    title: "🛍️ Product Launch Announcements",
    desc: "Build excitement around your latest products or services through personalized alerts.",
  },
  {
    icon: <MessageSquare className="w-8 h-8 text-green-600" />,
    title: "💬 Event Promotions",
    desc: "Invite customers to webinars, trade shows, or in-store events effortlessly.",
  },
  {
    icon: <RefreshCw className="w-8 h-8 text-green-600" />,
    title: "🔁 Seasonal Campaigns",
    desc: "Send festive greetings and promotional deals during holidays or special occasions.",
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-green-600" />,
    title: "💡 Brand Awareness Messages",
    desc: "Keep your brand top-of-mind with periodic marketing updates and reminders.",
  },
];


  const messages = [
    {
      title: "OTP Messages",
      desc: "Secure your login and transactions.",
      icon: (
        <svg
          className="w-10 h-10 text-blue-200 mb-3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M12 11c.8 0 1.5-.7 1.5-1.5S12.8 8 12 8s-1.5.7-1.5 1.5S11.2 11 12 11z" />
          <path d="M12 13v6" />
          <circle cx="12" cy="12" r="10" />
        </svg>
      ),
    },
    {
      title: "Order & Payment Updates",
      desc: "Confirmations, invoices, and status alerts.",
      icon: (
        <svg
          className="w-10 h-10 text-blue-200 mb-3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M3 3h18v4H3zM3 8h18v13H3z" />
        </svg>
      ),
    },
    {
      title: "Banking & Financial Alerts",
      desc: "Balance updates, withdrawal alerts, and more.",
      icon: (
        <svg
          className="w-10 h-10 text-blue-200 mb-3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M2 9l10-5 10 5v11H2z" />
          <path d="M12 22V12" />
        </svg>
      ),
    },
    {
      title: "Appointment Reminders",
      desc: "For hospitals, clinics, and service providers.",
      icon: (
        <svg
          className="w-10 h-10 text-blue-200 mb-3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M8 7V3M16 7V3M3 11h18M5 20h14a2 2 0 002-2V7H3v11a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Important Notifications",
      desc: "Policy updates, account activity, and system alerts.",
      icon: (
        <svg
          className="w-10 h-10 text-blue-200 mb-3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M12 9v4m0 4h.01M21 19H3l9-16z" />
        </svg>
      ),
    },
    {
      title: "Travel & Ticketing Alerts",
      desc: "Booking confirmations, check-in alerts, and itinerary updates.",
      icon: (
        <svg
          className="w-10 h-10 text-blue-200 mb-3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M10.9 2l9 9-1.4 1.4-9-9L10.9 2zM2 12l1.4-1.4 9 9L11 21z" />
        </svg>
      ),
    },
    {
      title: "Educational Updates",
      desc: "Send exam schedules, results, and fee reminders.",
      icon: (
        <svg
          className="w-10 h-10 text-blue-200 mb-3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M12 3L1 9l11 6 9-5v8h2V9z" />
        </svg>
      ),
    },
  ];


   const points = [
    {
      number: "1",
      title: "Leading transactional SMS service provider with proven reliability.",
    },
    {
      number: "2",
      title: "Advanced infrastructure for instant transactional message delivery.",
    },
    {
      number: "3",
      title: "Dedicated support team to assist with setup and integration.",
    },
  ];

  const faqs = [
  {
    question: "What is a Promotional SMS?",
    answer:
      "A promotional SMS is a short text message sent to customers to promote offers, discounts, new products, or brand updates. It’s a fast and cost-effective way to reach a large audience instantly.",
  },
  {
    question: "Why should businesses use Promotional SMS with DIGINTRA?",
    answer:
      "DIGINTRA offers high delivery rates, instant reach, and easy campaign management. Businesses can engage customers directly, increase sales, and track campaign performance in real-time.",
  },
  {
    question: "What kind of messages can be sent through Promotional SMS?",
    list: [
      "Limited-time offers and discounts",
      "Festival or seasonal deals",
      "New product launches",
      "Store openings or events",
      "Flash sales and special coupons",
    ],
  },
  {
    question: "What is the difference between Promotional and Transactional SMS?",
    table: true,
  },
  {
    question: "What are the benefits of using DIGINTRA for Promotional SMS?",
    list: [
      "✅ Instant Delivery to thousands of users",
      "✅ Custom Sender IDs & Templates",
      "✅ Real-time Reports & Analytics",
      "✅ Affordable Bulk SMS Packages",
      "✅ Easy API Integration for Businesses",
    ],
  },
  {
    question: "How can a business start using Promotional SMS via DIGINTRA?",
    list: [
      "1️⃣ Register on the DIGINTRA platform",
      "2️⃣ Choose a promotional SMS plan",
      "3️⃣ Upload your contact list or integrate via API",
      "4️⃣ Create & Schedule your campaign",
      "5️⃣ Track delivery and performance in real time",
    ],
  },
  {
    question: "What should a good Promotional SMS include?",
    list: [
      "A catchy headline (e.g., “Flash Sale Starts Now!”)",
      "A clear offer (e.g., “Get 40% Off”)",
      "A call-to-action (e.g., “Shop Now”)",
      "An expiry or urgency (e.g., “Ends Tonight!”)",
      "An opt-out option, if required",
    ],
  },
  {
    question: "Example of an Effective Promotional SMS:",
    quote:
      "🔥 Exclusive Deal from “Brand”! Get 25% off on your first campaign. Start reaching your customers today!",
  },
];
const [openIndex, setOpenIndex] = useState(null);



 
  return (
    <>
      <Helmet>
        <meta name="robots" content="index, follow" />

        <meta charSet="utf-8" />
        <title>
          Promotional SMS Service Provider | Best Promotional SMS API –
          DIGINTRA Teleservices
        </title>
        <meta
          name="description"
          content=" Send secure and instant transactional messages with DIGINTRA Teleservices – the best transactional SMS service provider. 24x7 delivery, easy API integration & affordable pricing.
"
        />
        <meta
          name="keywords"
          content="transactional sms, transactional sms service provider, transactional sms service, transactional sms provider, transactional sms price
"
        />
        <link rel="canonical" href="https://digintra.com/transactional-sms" />
      </Helmet>

      <section className="w-full min-h-screen flex flex-col lg:flex-row items-center lg:text-left justify-between px-6 text-center lg:px-20 pt-[160px] lg:pt-[230px] pb-[50px]   bg-gradient-to-r from-green-600 via-green-500 to-cyan-400 overflow-hidden">
        <motion.div
          className="flex flex-col gap-6 max-w-xl text-white"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-2xl lg:text-3xl font-bold leading-snug"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Promotional SMS - Reliable Messaging with
            <span className="text-yellow-300"> DIGINTRA Teleservices</span>
          </motion.h1>

          <motion.p
            className="text-md text-green-100 max-w-lg"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
           A promotional SMS is a marketing text message sent to customers to promote a product, service, offer, or event.
          </motion.p>

          <motion.a
            href="#contact"
            className="mt-4 font-semibold text-green-600 transition hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            <span className="bg-white px-6 py-2 rounded-2xl hover:bg-blue-50 transition">
              Get Started
            </span>
          </motion.a>
        </motion.div>

        {/* Right Section (Animated Image) */}
        <motion.div
          className="relative mt-10 lg:mt-0"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1, type: "spring" }}
        >
          <motion.img
            src={HeroImage}
            alt="promotional-sms"
            className="w-[250px] lg:w-[400px] drop-shadow-2xl rounded-3xl"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </section>

      <section className="w-full py-20 px-6 lg:px-20 bg-white flex flex-col lg:flex-row items-center gap-10">
        {/* Left Text Section */}
        <motion.div
          className="flex-1 text-gray-800"
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-green-600">
            Boost Your Business With Promotional SMS Service 
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
           
           DIGINTRA’s Promotional SMS Service helps you reach your customers directly on their mobile phones instantly, effectively, and affordably. Whether you’re launching a new product, running a festival offer, or announcing a flash sale, our reliable messaging platform ensures your promotions never go unseen.
          </p>
         
        </motion.div>

        {/* Right SVG Section */}
        <motion.div
          className="flex-1 grid grid-cols-2 gap-6 justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Mail Icon */}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-24 h-24 text-green-500 mx-auto"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
            <path d="M22 6 12 13 2 6" />
          </motion.svg>

          {/* Clock Icon */}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-24 h-24 text-cyan-500 mx-auto"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </motion.svg>

          {/* Integration Icon */}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-24 h-24 text-green-400 mx-auto"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 10h-3a2 2 0 0 0-2 2v6H8a2 2 0 0 1-2-2V4h6" />
            <polyline points="15 3 21 3 21 9" />
          </motion.svg>

          {/* User Icon */}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-24 h-24 text-indigo-500 mx-auto"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 21v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </motion.svg>
        </motion.div>
      </section>

      <section className="w-full py-20 px-6 lg:px-20 bg-gradient-to-br from-gray-800 via-green-700 to-gray-500 text-white overflow-hidden">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-3xl lg:text-4xl font-bold mb-8">
            Why Choose <span className="text-yellow-300">DIGINTRA</span> as Your
            Promotional SMS Provider?
          </h3>

          <motion.ul
            className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left mt-10"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {[
              {
                icon: (
                  <svg
                    className="w-12 h-12 text-yellow-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 12l2-2 4 4 8-8 4 4-10 10z" />
                  </svg>
                ),
                text: "24x7 Message Delivery – Ensure your customers never miss critical updates.",
              },
              {
                icon: (
                  <svg
                    className="w-12 h-12 text-blue-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13 16h-1v-4h-1m1-4h.01M21 12A9 9 0 1 1 3 12a9 9 0 0 1 18 0z" />
                  </svg>
                ),
                text: "Fast & Secure SMS Gateway – High-priority routes for maximum delivery speed.",
              },
              {
                icon: (
                  <svg
                    className="w-12 h-12 text-green-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 20h9" />
                    <path d="M12 4h9" />
                    <path d="M4 9h16v6H4z" />
                  </svg>
                ),
                text: "Scalable API Integration – Simple and robust transactional SMS API for seamless automation.",
              },
              {
                icon: (
                  <svg
                    className="w-12 h-12 text-cyan-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 11l3 3L22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                ),
                text: "DND-Compliant Messaging – Deliver messages to all users, even those under DND.",
              },
              {
                icon: (
                  <svg
                    className="w-12 h-12 text-pink-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 8c-3.3 0-6 2.7-6 6h12c0-3.3-2.7-6-6-6z" />
                    <circle cx="12" cy="4" r="2" />
                    <path d="M12 14v6" />
                  </svg>
                ),
                text: "Affordable & Transparent Pricing – Get the best ROI with our flexible plans.",
              },
            ].map((item, index) => (
              <motion.li
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 flex flex-col items-center text-center shadow-lg hover:shadow-2xl transition"
                whileHover={{ scale: 1.05 }}
              >
                <div className="mb-4">{item.icon}</div>
                <p className="text-base text-blue-50 leading-relaxed">
                  {item.text}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.p
            className="mt-12 text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            At{" "}
            <span className="font-semibold text-yellow-300">
              DIGINTRA 
            </span>{" "}
           , we combine cutting-edge technology with years of telecom expertise to deliver a promotional SMS solution that works for every business size, whether you are start-ups, SMEs, or large enterprises.
          </motion.p>
        </motion.div>
      </section>




       <section className="bg-green-50 py-16 px-6 sm:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h3 className="text-3xl font-bold text-green-700 mb-4">
          Types of Promotional Messages You Can Send
        </h3>
        <p className="text-gray-700 max-w-3xl mx-auto">
          With <span className="font-semibold text-green-700">DIGINTRA’s Promotional SMS Service</span>, 
          you can send a variety of customized messages to engage your customers effectively.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {promoMessages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
          >
            <div className="flex items-center justify-center mb-4">
              {msg.icon}
            </div>
            <h4 className="text-lg font-semibold text-green-700 mb-2 text-center">{msg.title}</h4>
            <p className="text-gray-600 text-sm text-center">{msg.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-10">
        <p className="text-gray-700 max-w-2xl mx-auto">
          No matter the campaign, <span className="font-semibold text-green-700">DIGINTRA</span> helps you deliver 
          the right message to the right audience - <span className="font-semibold">instantly</span>.
        </p>
      </div>
    </section>



        <section className="bg-green-50 py-16 px-6 sm:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h3 className="text-3xl font-bold text-green-700 mb-4">
          Seamless Integration with Promotional SMS API
        </h3>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Our <span className="font-semibold text-green-700">Promotional SMS API</span> allows businesses to 
          automate their messaging directly from their CRM, website, or application. Integration is fast, simple, 
          and secure.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {apiFeatures.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300 text-center"
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h4 className="text-lg font-semibold text-green-700 mb-2">
              {feature.title}
            </h4>
            <p className="text-gray-600 text-sm">{feature.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-10">
        <p className="text-gray-700 max-w-2xl mx-auto">
          Whether you’re a <span className="font-semibold text-green-700">developer</span> or a 
          <span className="font-semibold text-green-700"> marketer</span>, our API ensures your promotional 
          SMS campaigns are fully integrated into your digital workflow.
        </p>
      </div>
    </section>




    <section className="bg-green-50 py-16 px-6 sm:px-10 lg:px-20">
      {/* Why Businesses Trust DIGINTRA */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h3 className="text-3xl font-bold text-green-700 mb-4">
          Why Businesses Trust DIGINTRA Teleservices
        </h3>
        <p className="text-gray-700 max-w-3xl mx-auto mb-8">
          With over <span className="font-semibold text-green-700">10 years of experience</span> in the SMS industry,
          DIGINTRA Teleservices has earned the trust of thousands of businesses globally. Our clients value our
          reliability, transparent pricing, and dedicated support. From e-commerce to healthcare, education to retail —
          brands rely on us to boost engagement, generate leads, and drive conversions through SMS marketing.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {trustPoints.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300 text-center"
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h4 className="text-lg font-semibold text-green-700 mb-2">{item.title}</h4>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-700 font-medium">
          When you think of a trusted promotional SMS provider, think{" "}
          <span className="text-green-700 font-semibold">DIGINTRA</span>.
        </p>
      </div>

      {/* Start Sending Promotional SMS Today */}
      <div className="text-center mt-20 max-w-3xl mx-auto">
        <h3 className="text-3xl font-bold text-green-700 mb-4">
          Start Sending Promotional SMS Today
        </h3>
        <p className="text-gray-700 mb-6">
          Ready to grow your business with targeted messaging? Start your journey with{" "}
          <span className="font-semibold text-green-700">DIGINTRA’s Promotional SMS Service</span> today.
          Reach more customers, promote smarter, and achieve measurable marketing success — all through one powerful SMS platform.
        </p>
        <motion.a
          href="/contact-us"
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-2 bg-green-600 text-white font-medium px-6 py-3 rounded-full shadow-md hover:bg-green-700 transition-all duration-300"
        >
          <Rocket className="w-5 h-5" />
          Get Started Now
        </motion.a>
      </div>
    </section>






 <section className="bg-green-50 py-16 px-6 sm:px-10 lg:px-20">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-green-700 mb-4">
          Q&A – Promotional SMS
        </h2>
        <p className="text-gray-700">
          Learn everything you need to know about{" "}
          <span className="font-semibold text-green-700">
            DIGINTRA’s Promotional SMS Service
          </span>
          — how it works, benefits, and best practices.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="w-full flex justify-between items-center px-6 py-4 text-left text-green-700 font-semibold text-lg"
            >
              {faq.question}
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-5 text-gray-700 text-sm sm:text-base border-t border-green-100"
                >
                  {faq.answer && <p className="py-2">{faq.answer}</p>}

                  {faq.list && (
                    <ul className="list-disc pl-6 space-y-1 py-2">
                      {faq.list.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}

                  {faq.table && (
                    <div className="overflow-x-auto py-2">
                      <table className="min-w-full text-sm border border-gray-200">
                        <thead>
                          <tr className="bg-green-100 text-green-800 font-semibold">
                            <th className="p-2 text-left">Feature</th>
                            <th className="p-2 text-left">Promotional SMS</th>
                            <th className="p-2 text-left">Transactional SMS</th>
                          </tr>
                        </thead>
                        <tbody className="text-gray-700">
                          <tr className="border-t">
                            <td className="p-2">Purpose</td>
                            <td className="p-2">Marketing / Advertising</td>
                            <td className="p-2">Informational / Alerts</td>
                          </tr>
                          <tr className="border-t">
                            <td className="p-2">Timing</td>
                            <td className="p-2">10 AM – 9 PM only</td>
                            <td className="p-2">24x7 allowed</td>
                          </tr>
                          <tr className="border-t">
                            <td className="p-2">Sender ID</td>
                            <td className="p-2">6-digit numeric (e.g., 123456)</td>
                            <td className="p-2">6-character alphabetic (e.g., DIGINTRA)</td>
                          </tr>
                          <tr className="border-t">
                            <td className="p-2">DND Users</td>
                            <td className="p-2">Not delivered</td>
                            <td className="p-2">Delivered</td>
                          </tr>
                          <tr className="border-t">
                            <td className="p-2">Example</td>
                            <td className="p-2">“50% Off! Shop now at DIGINTRA!”</td>
                            <td className="p-2">“Your OTP is 458921 for login.”</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}

                  {faq.quote && (
                    <blockquote className="bg-green-100 text-green-800 italic p-4 rounded-lg mt-3">
                      {faq.quote}
                    </blockquote>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>


       






      <Footer />
    </>
  );
}
