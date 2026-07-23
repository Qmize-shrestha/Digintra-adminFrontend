import { motion } from "framer-motion";
import { useState } from "react";
import { FaEnvelope, FaNetworkWired } from "react-icons/fa";
import img1 from "../assets/arab-businessman-using-mobile-phone-business-connection.webp";
import img2 from "../assets/arab-guy-engrossed-video-conference-call-with-coworker-his-smartphone-he-expertly-uses-wireless-technology-work-research-showcasing-his-digital-communication-skills.webp";
import img3 from "../assets/close-up-man-holding-cell-phone-icon-email-message-marketing-business-sending-information-customers-hacking-online-transactions-business-concept-technology.webp";
import "./bulk.css";
import { FaBuilding, FaClock, FaSignal } from "react-icons/fa";
import { FaCheckCircle, FaServer, FaMapMarkerAlt } from "react-icons/fa";
import { FaBullhorn, FaLock, FaCode, FaReply, FaGlobe } from "react-icons/fa";
import { FaShoppingCart, FaUniversity, FaHospital, FaTruck, FaLandmark, FaRegChartBar } from "react-icons/fa";
import { FaUserPlus, FaUpload, FaPenFancy, FaCalendarCheck, FaChartLine } from "react-icons/fa";
import { FaAward, FaUserTie, FaShieldAlt, FaHandshake, FaBriefcase } from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import uae from '../assets/Bulk-SMS-UAE.jpeg';
import uae1 from "../assets/Bulk-sms-uae-provider.jpeg";

import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import Client from '../components/Client';
import Getstarted from '../components/Getstarted';
import Hreflang from "../HrefComp";
import { hreflangConfig } from "../HreflangConfig";
import { Award, BadgeCheck, BarChart3, Brain, Building2, Clock, Globe, GraduationCap, HeartPulse, KeyRound, Landmark, Layers3, Megaphone, MessageCircle, MessageSquare, RefreshCcw, Send, Settings, ShieldCheck, ShoppingCart, Smartphone, Target, TrendingUp, Truck, Workflow, Zap } from "lucide-react";
import { MdVerified } from "react-icons/md";




export default function Bulk_sms_provider_rajasthan() {



  const faqs = [
    {
      question: "What is Bulk SMS UAE?",
      answer: "Bulk SMS UAE is a messaging solution that allows businesses to send large volumes of SMS messages instantly across the United Arab Emirates.",
    },
    {
      question: "How much does bulk SMS UAE cost?",
      answer: "Bulk SMS UAE price depends on SMS volume, message type, and delivery routes. Higher volumes usually reduce per-message costs.",
    },
    {
      question: "Can I integrate UAE SMS gateway with my website or app?",
      answer: "Yes. DIGINTRA provides API integration for websites, CRM systems, applications, and enterprise platforms.",
    },
    {
      question: "Is bulk SMS legal in UAE?",
      answer: "Yes. Bulk SMS is legal when businesses follow UAE telecom regulations and use compliant messaging practices.",
    },
    {
      question: "Why choose DIGINTRA as a bulk SMS provider UAE?",
      answer: "DIGINTRA offers secure infrastructure, high delivery rates, scalable messaging solutions, and reliable customer support for businesses in the UAE.",
    },
   
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  const trustPoints = [
    { icon: <FaAward className="w-8 h-8 text-white" />, title: "Experience", description: "Over a decade serving leading UAE enterprises." },
    { icon: <FaUserTie className="w-8 h-8 text-white" />, title: "Expertise", description: "Certified professionals in telecom and marketing technologies." },
    { icon: <FaShieldAlt className="w-8 h-8 text-white" />, title: "Authoritativeness", description: "Recognized by industry associations and telecom regulators." },
    { icon: <FaHandshake className="w-8 h-8 text-white" />, title: "Trustworthiness", description: "Transparent pricing, secure systems, and ethical communication practices." },
  ];


  const steps = [
    { icon: <FaUserPlus className="w-8 h-8 text-black" />, title: "Register with DIGINTRA", description: "Create an account in minutes." },
    { icon: <FaUpload className="w-8 h-8 text-black" />, title: "Upload Your Contacts", description: "Easily import your customer database." },
    { icon: <FaPenFancy className="w-8 h-8 text-black" />, title: "Compose Your Message", description: "Personalize your text using merge tags." },
    { icon: <FaCalendarCheck className="w-8 h-8 text-black" />, title: "Schedule & Send", description: "Choose immediate or scheduled delivery." },
    { icon: <FaChartLine className="w-8 h-8 text-black" />, title: "Track Results", description: "Monitor open rates, delivery, and conversions." },
  ];


  const industries = [
    { icon: <FaShoppingCart className="w-8 h-8 text-white" />, name: "Retail & E-commerce", gradient: "bg-gradient-to-r from-pink-400 via-red-400 to-yellow-400" },
    { icon: <FaUniversity className="w-8 h-8 text-white" />, name: "Education", gradient: "bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400" },
    { icon: <FaHospital className="w-8 h-8 text-white" />, name: "Healthcare", gradient: "bg-gradient-to-r from-green-400 via-lime-400 to-yellow-400" },
    { icon: <FaBuilding className="w-8 h-8 text-white" />, name: "Real Estate", gradient: "bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400" },
    { icon: <FaTruck className="w-8 h-8 text-white" />, name: "Logistics", gradient: "bg-gradient-to-r from-orange-400 via-red-400 to-pink-400" },
    { icon: <FaRegChartBar className="w-8 h-8 text-white" />, name: "Banking & Finance", gradient: "bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" },
    { icon: <FaLandmark className="w-8 h-8 text-white" />, name: "Government & Public Sector", gradient: "bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700" },
  ];

// 7th section content
const industriess = [
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
    name: "Healthcare & Hospitals",
    icon: HeartPulse,
    gradient: "from-red-400 via-pink-400 to-rose-400",
  },
  {
     
    name: "Real Estate",
    icon: Building2,
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
    name: "Travel & Hospitality",
    icon: Building2,
    gradient: "from-purple-400 via-violet-400 to-indigo-400",
  },
];
  const features = [
    "UAE SMS gateway with direct routes",
    "API for developers and CRM integrations",
    "Unicode and multilingual support (Arabic and English)",
    "Contact management, segments, and personalization",
    "Two-way SMS options where supported",
    "DND and compliance friendly",
  ];

  const pricingFeatures = [
    "Pay-as-you-go with volume discounts",
    "No setup fees",
    "Free signup, quick onboarding",
  ];

  const items = [
    {
      icon: <FaBuilding className="text-blue-600 text-3xl" />,
      title: "Trusted by UAE Businesses & Startups",
    },
    {
      icon: <FaSignal className="text-blue-600 text-3xl" />,
      title: "Delivery to All Major UAE Carriers",
    },
    {
      icon: <FaClock className="text-blue-600 text-3xl" />,
      title: "24/7 Dedicated Support",
    },
  ];

  const textVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
    }),
  };

  const items2 = [
    {
      icon: <FaCheckCircle className="text-white w-8 h-8" />,
      title: "Proven Expertise in SMS Marketing",
      description:
        "With over 10 years of experience in telecom and digital marketing solutions, DIGINTRA Teleservices has built a strong reputation as a bulk SMS service provider in UAE for high delivery rates, robust infrastructure, and exceptional customer support. Our team of SMS experts understands the local UAE market dynamics, including TRA regulations, operator routing, and Arabic/English Unicode messaging, ensuring full compliance and performance optimization.",
    },
    {
      icon: <FaServer className="text-white w-8 h-8" />,
      title: "Enterprise-Grade Delivery Platform",
      description:
        "Our cloud-based SMS gateway is designed for speed, security, and scalability. Enjoy features such as:",
      points: [
        "Real-time delivery reports",
        "Custom sender ID",
        "Two-way messaging (inbound & outbound)",
        "Campaign scheduling & automation",
        "API integration for CRMs",
      ],
    },
    {
      icon: <FaMapMarkerAlt className="text-white w-8 h-8" />,
      title: "Local Presence and UAE-Focused Solutions",
      description:
        "As a UAE-based telecom partner, DIGINTRA ensures:",
      points: [
        "Direct connectivity with UAE mobile operators (Etisalat & du)",
        "Local technical support",
        "Data hosting within the UAE for compliance and privacy",
      ],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };


  const benefits = [
    "99.9% message delivery success rate",
    "GDPR & UAE TRA compliant platform",
    "24/7 technical support",
    "Cost-effective SMS pricing for all volumes",
    "Advanced analytics & reports",
    "Multi-language support (English & Arabic)",
  ];


  const smsTypes = [
    {
      icon: <FaBullhorn className="w-8 h-8 text-white" />,
      title: "Promotional SMS",
      description: "Promote offers, events, and product launches instantly.",
      gradient: "bg-gradient-to-r from-purple-400 via-pink-400 to-red-400",
    },
    {
      icon: <FaLock className="w-8 h-8 text-white" />,
      title: "Transactional SMS",
      description: "Send secure OTPs, confirmations, and alerts in real-time.",
      gradient: "bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400",
    },
    {
      icon: <FaCode className="w-8 h-8 text-white" />,
      title: "API SMS Integration",
      description: "Seamlessly integrate with your apps, websites, or CRM.",
      gradient: "bg-gradient-to-r from-green-400 via-lime-400 to-yellow-400",
    },
    {
      icon: <FaReply className="w-8 h-8 text-white" />,
      title: "Two-Way SMS",
      description: "Enable customer replies for surveys, feedback, and engagement.",
      gradient: "bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-400",
    },
    {
      icon: <FaGlobe className="w-8 h-8 text-white" />,
      title: "International SMS",
      description: "Expand your reach to customers across GCC and beyond.",
      gradient: "bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400",
    },
  ];
  // 3rd section data
  const points = [
    { icon: "🚀", text: "High SMS delivery rates across UAE telecom networks" },
    { icon: "⚡", text: "Instant SMS delivery with real-time reporting" },
    { icon: "🔐", text: "Secure and compliant messaging infrastructure" },
    { icon: "🛠", text: "Easy API integration with websites, apps, and CRM systems" },
    { icon: "📊", text: "Advanced SMS campaign tracking and analytics" },
    { icon: "🌍", text: "Local and international SMS coverage" },
  ];

  // 5th section content
  const stepss = [
    {
      step: "01",
      title: "Promotional SMS Campaigns",
      desc: "Reach customers instantly with targeted SMS marketing campaigns.",
      points: [
        "Product promotions",
        "Discounts and offers",
        "Event invitations",
        "Customer engagement campaigns"
      ],
      icon: Megaphone,
      color: "from-yellow-400 to-orange-400",
    },
    {
      step: "02",
      title: "Transactional SMS Services",
      desc: "Deliver important information instantly with reliable transactional SMS.",
      points: [
        "OTP verification codes",
        "Payment confirmations",
        "Delivery updates",
        "Appointment reminders"
      ],
      icon: KeyRound,
      color: "from-cyan-400 to-sky-400",
    },
    {
      step: "03",
      title: "UAE SMS Gateway Integration",
      desc: "Integrate messaging directly into your business applications using our robust UAE SMS gateway.",
      points: [
        "Fast API integration",
        "Automated SMS workflows",
        "Secure message routing",
        "Scalable infrastructure"
      ],
      icon: Workflow,
      color: "from-emerald-400 to-teal-400",
    },
    {
      step: "04",
      title: "Bulk SMS Services UAE for Enterprises",
      desc: "DIGINTRA provides scalable SMS solutions for enterprises requiring high-volume messaging and reliable communication infrastructure.",
      points: [],
      icon: Layers3,
      color: "from-violet-400 to-purple-400",
    },
  ];

  // 6th section content
const cards = [
  {
    title: "Instant SMS delivery",
    desc: "High SMS open rates and instant reach",
    icon: TrendingUp,
    color: "bg-orange-400",
    iconGradient: "from-orange-400 to-rose-400",
  },
  {
    title: " Real-time delivery reports",
    desc: "Real-time delivery and performance reports",
    icon: BarChart3,
    color: "bg-pink-400",
    iconGradient: "from-pink-400 to-fuchsia-400",
  },
  {
    title: "API integration support",
    desc: "Two-way messaging support",
    icon: RefreshCcw,
    color: "bg-teal-400",
    iconGradient: "from-teal-400 to-cyan-400",
  },
  {
    title: "Scalable bulk messaging platform",
    desc: "Scalable platform for high-volume campaigns",
    icon: Settings,
    color: "bg-green-400",
    iconGradient: "from-green-400 to-emerald-400",
  },
  {
    title: "Secure infrastructure and encrypted APIs",
    desc: "Secure APIs and encrypted infrastructure",
    icon: ShieldCheck,
    color: "bg-blue-400",
    iconGradient: "from-blue-400 to-indigo-400",
  },
  {
    title: "Nationwide UAE coverage",
    desc: "Nationwide coverage across the UAE",
    icon: Globe,
    color: "bg-indigo-400",
    iconGradient: "from-indigo-400 to-purple-400",
  },
];

// 8th section content
const point = [
  {
    text: " High mobile penetration across UAE",
    icon: Smartphone,
  },
  {
    text: "SMS messages are read within minutes",
    icon: Clock,
  },
  {
    text: "Works on all mobile phones without internet",
    icon: Globe,
  },
  {
    text: " Ideal for urgent and time-sensitive communication",
    icon: Target,
  },
];
 
// 9th section content
const trustItems = [
    {
      title: "Experience",
      desc: "Extensive experience delivering enterprise messaging solutions globally.",
      icon: Award,
      color: "cyan",
    },
    {
      title: "Expertise",
      desc: "Advanced knowledge of telecom integrations and SMS gateway infrastructure.",
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
      desc: "Secure systems, transparent pricing, and dedicated support teams.",
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
      <Helmet>
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="AE" />
        <meta name="geo.placename" content="United Arab Emirates" />
        <meta name="language" content="en-AE" />
        <title>Bulk SMS UAE | Trusted UAE SMS Gateway – DIGINTRA</title>
        <meta name="description" content='Send bulk SMS in UAE with DIGINTRA Teleservices. Secure UAE SMS gateway, high delivery rates & scalable bulk SMS services for businesses.' />

        <meta
          name="keywords"
          content="bulk sms uae, sms gateway uae, uae sms gateway, uae sms solutions, bulk SMS services UAE, bulk sms uae price, uae sms gateway, bulk sms provider uae"
        />
        <link rel="canonical" href="https://digintra.com/bulk-sms-uae" />
        
        {/* Product Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Bulk SMS UAE",
            "description": "Enterprise-grade Bulk SMS UAE platform by DIGINTRA Teleservices offering secure SMS delivery, transactional messaging, OTP SMS, and UAE SMS gateway integration.",
            "brand": {
              "@type": "Brand",
              "name": "DIGINTRA Teleservices"
            },
            "manufacturer": {
              "@type": "Organization",
              "name": "DIGINTRA Teleservices",
              "url": "https://www.digintra.com"
            },
            "category": "Bulk SMS Messaging Platform",
            "areaServed": {
              "@type": "Country",
              "name": "United Arab Emirates"
            },
            "offers": {
              "@type": "Offer",
              "url": "https://www.digintra.com/bulk-sms-uae",
              "priceCurrency": "AED",
              "availability": "https://schema.org/InStock"
            }
          })}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is Bulk SMS UAE?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Bulk SMS UAE is a messaging solution that allows businesses to send large volumes of SMS messages instantly across the United Arab Emirates."
                }
              },
              {
                "@type": "Question",
                "name": "How much does bulk SMS UAE cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Bulk SMS UAE price depends on SMS volume, message type, and delivery routes. Higher volumes usually reduce per-message costs."
                }
              },
              {
                "@type": "Question",
                "name": "Can I integrate UAE SMS gateway with my website or app?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. DIGINTRA provides API integration for websites, CRM systems, applications, and enterprise platforms."
                }
              },
              {
                "@type": "Question",
                "name": "Is bulk SMS legal in UAE?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Bulk SMS is legal when businesses follow UAE telecom regulations and use compliant messaging practices."
                }
              },
              {
                "@type": "Question",
                "name": "Why choose DIGINTRA as a bulk SMS provider UAE?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "DIGINTRA offers secure infrastructure, high delivery rates, scalable messaging solutions, and reliable customer support for businesses in the UAE."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      {/* 1st Section */}
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
              className="rounded-2xl bg-gradient-to-r from-blue-200 to-orange-200 p-3 md:p-5 w-full"
            >
              <img
                src={uae1}
                alt="Bulk SMS UAE"
                className="rounded-xl w-full h-[300px] object-cover"
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
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-3 inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm md:text-base font-medium text-white backdrop-blur-md self-start"
            >
              📩 Fast, Secure & Enterprise-Grade Bulk SMS Services in UAE
            </motion.div> */}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mb-3 md:mb-4 text-2xl md:text-4xl font-bold leading-snug md:leading-tight"
            >
              Bulk SMS UAE – {" "}
              <span className="text-red-400 block md:inline">
                Reliable SMS Solutions for UAE Businesses
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="mb-4 md:mb-6 text-base md:text-lg text-gray-300"
            >
              Send bulk SMS, automate notifications, and run high-performance SMS marketing campaigns with DIGINTRA Teleservices’ secure and reliable <span className="font-bold"> UAE SMS gateway </span>.
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

            {/* Trust Signal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.6 }}
              className="mt-6 relative group w-fit mx-auto md:mx-0"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full blur opacity-40 group-hover:opacity-70 transition duration-500"></div>
              <div className="relative flex items-center gap-3 bg-sky-950 border border-white/10 rounded-full px-5 py-2.5">
                <span className="text-xl md:text-2xl animate-pulse">🌍</span>
                <p className="text-sm md:text-base font-medium text-gray-200">
                  Delivering Messages Across <span className="font-bold text-white">190+ Countries</span>
                </p>
              </div>
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
                Trusted Bulk SMS UAE Services
              </span>{" "}
              for Business Communication

            </h1>

            <p className="mt-6 text-gray-700 text-lg leading-relaxed">
              Businesses across the United Arab Emirates require fast, direct, and scalable communication channels to engage customers effectively.<span className="font-bold">Bulk SMS UAE </span> remains one of the most reliable ways to deliver instant notifications, OTPs, promotions, reminders, and transactional alerts directly to mobile devices.
            </p>

            <p className="mt-4 text-gray-700 text-lg leading-relaxed">
              DIGINTRA Teleservices provides enterprise-grade <span className="font-bold">bulk SMS services UAE </span> through a secure and high-performance <span className="font-bold">UAE SMS gateway </span>, helping businesses improve customer engagement and communication efficiency.
            </p>
            <p className="mt-4 text-gray-700 text-lg leading-relaxed">
              Whether you are a startup, enterprise, bank, retailer, healthcare provider, or e-commerce platform, our messaging solutions are designed to support high-volume SMS delivery across the UAE.
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
              src={uae}
              alt="Bulk SMS Service in UAE"
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
              Why Businesses Choose{" "}
              <span className="underline decoration-emerald-400/40 decoration-4 underline-offset-8">
                DIGINTRA
              </span>{" "}
              for Bulk SMS in UAE?
            </h2>

            <p className="mt-8 text-slate-300 text-lg leading-relaxed">
              DIGINTRA Teleservices is a trusted bulk SMS provider
              UAE offering reliable SMS delivery, secure routing, and
              scalable messaging infrastructure for organizations across
              the UAE.

            </p>
            <p className="mt-4 text-slate-300 text-lg leading-relaxed">Our advanced <span className="font-bold">UAE SMS gateway </span> ensures your messages are delivered quickly and securely.
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
        Compliance, Security & UAE Trust Signals
      </h2>

      <p className="mt-6 text-gray-700 text-lg leading-relaxed">
        DIGINTRA Teleservices prioritizes secure and compliant messaging practices for businesses operating in the UAE.
      </p>
    </motion.div>

    {/* Cards */}
    <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">

      {/* TDRA Compliance */}
      <div className="bg-white rounded-2xl shadow-md p-6 border hover:shadow-xl transition">
        <MdVerified className="text-teal-600 text-3xl mb-4" />
        <h4 className="font-semibold text-lg mb-2">TDRA (TRA) Aware Messaging Practices</h4>
        <p className="text-gray-600 text-sm leading-relaxed">
          Our <span className="font-bold">Bulk SMS UAE</span>  solutions are designed to support responsible messaging practices aligned with UAE telecommunications standards and industry regulations governed by the <span className="font-bold">Telecommunications and Digital Government Regulatory Authority (TDRA)</span>.
        </p>
      </div>

      {/* Compliance Support */}
      <div className="bg-white rounded-2xl shadow-md p-6 border hover:shadow-xl transition">
        <FaShieldAlt className="text-teal-600 text-3xl mb-4" />
        <h4 className="font-semibold text-lg mb-2">Compliance-Focused Messaging Support</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          <li> Support for approved sender IDs and compliant SMS routing</li>
          <li> Responsible opt-in and opt-out messaging practices</li>
          <li>Secure handling of customer and business communication data</li>
          <li>SMS delivery processes aligned with UAE telecom ecosystem requirements</li>
        </ul>
      </div>

      {/* Infrastructure */}
      <div className="bg-white rounded-2xl shadow-md p-6 border hover:shadow-xl transition">
        <FaServer className="text-teal-600 text-3xl mb-4" />
        <h4 className="font-semibold text-lg mb-2">Reliable UAE Messaging Infrastructure</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          <li> High-availability SMS delivery platform</li>
          <li> Secure API & encrypted connections</li>
          <li> Direct telecom routing</li>
          <li> Enterprise-grade monitoring</li>
        </ul>
      </div>

      {/* Use Cases */}
      <div className="bg-white rounded-2xl shadow-md p-6 border hover:shadow-xl transition">
        <FaNetworkWired className="text-teal-600 text-3xl mb-4" />
        <h4 className="font-semibold text-lg mb-2">Business-Ready SMS Platform</h4>
        <ul className="text-sm text-gray-600 grid grid-cols-2 gap-x-4">
          <li>Corporate communication</li>
          <li> OTP verification</li>
          <li> Banking alerts</li>
          <li> E-commerce notifications</li>
          <li> Promotional campaigns</li>
          <li> Appointment reminders</li>
        </ul>
      </div>

    </div>

    {/* Global Stats */}
    <div className="mt-16 bg-gradient-to-r from-teal-600 to-emerald-500 text-white rounded-2xl p-8 text-center shadow-lg">
      <FaGlobe className="text-3xl mx-auto mb-4" />
      <h4 className="text-xl font-semibold mb-4">Trusted Global SMS Delivery</h4>

      <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm sm:text-base">
        <p>🌍 Supporting SMS delivery across 190+ countries</p>
        <p>📩 Millions of SMS processed securely every month</p>
        <p>⚡ Reliable uptime & enterprise-grade performance</p>
      </div>
    </div>

  </div>

</section>



      {/* 5th section */}
      <section className="relative py-28 bg-gradient-to-br from-[#050B1E] via-[#070E2B] to-[#050B1E] text-white">
        <div className="max-w-6xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Our Bulk SMS UAE Solutions
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-yellow-400 via-cyan-400 to-emerald-400" />

            <div className="space-y-14">
              {stepss.map((item, index) => {
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
            Features of Our Bulk SMS Platform
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
           Industries We Serve in UAE
          </h2>

          <p className="mt-4 text-gray-700 text-lg">
           DIGINTRA supports organizations across multiple industries in the UAE.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industriess.map((item, index) => {
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
           Our messaging solutions help businesses improve customer communication and operational efficiency.
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
            Why Bulk SMS is Effective in UAE
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
                engagement channels for businesses in UAE.
              </span>{" "}
              This makes Bulk SMS UAE an essential communication tool for businesses.
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
                is a Trusted Bulk SMS Provider in UAE?
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
            Bulk SMS UAE Today 
          </span>{" "}
          Today
        </h2>

        {/* Description */}
        <p className="mt-6 text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
         Whether you need promotional SMS campaigns, transactional messaging, OTP delivery, or a scalable <span className="font-bold">UAE SMS gateway </span>, DIGINTRA Teleservices provides reliable and secure messaging solutions tailored for your business.
        </p>

        <p className="mt-3 text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
        Contact us today to start sending Bulk SMS across the UAE.
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
           Start Sending SMS
          </button>

        </div>

      </div>
    </section>



      <section className="mb-20 bg-gray-50 py-20 px-4 relative">
        <div className="max-w-[90%] mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 drop-shadow-lg">
           FAQs – Bulk SMS UAE
          </h2>
        </div>

        <div className="max-w-[90%] mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              onClick={() => toggleIndex(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">{faq.question}</h3>
                {openIndex === index ? (
                  <FaChevronUp className="w-5 h-5 text-gray-600" />
                ) : (
                  <FaChevronDown className="w-5 h-5 text-gray-600" />
                )}
              </div>
              {openIndex === index && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="mt-4 text-gray-700"
                >
                  {faq.answer}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </section>

 


      <Footer />
    </>
  )
}
