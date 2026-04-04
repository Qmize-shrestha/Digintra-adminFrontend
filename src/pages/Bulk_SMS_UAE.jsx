import { motion } from "framer-motion";
import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import img1 from "../assets/arab-businessman-using-mobile-phone-business-connection.webp";
import img2 from "../assets/arab-guy-engrossed-video-conference-call-with-coworker-his-smartphone-he-expertly-uses-wireless-technology-work-research-showcasing-his-digital-communication-skills.webp";
import img3 from "../assets/close-up-man-holding-cell-phone-icon-email-message-marketing-business-sending-information-customers-hacking-online-transactions-business-concept-technology.webp";
import "./bulk.css";
import { FaBuilding, FaClock, FaSignal } from "react-icons/fa";
import { FaCheckCircle, FaServer, FaMapMarkerAlt } from "react-icons/fa";
import { FaBullhorn, FaLock, FaCode, FaReply, FaGlobe } from "react-icons/fa";
import { FaShoppingCart, FaUniversity, FaHospital,  FaTruck, FaLandmark, FaRegChartBar } from "react-icons/fa";
import { FaUserPlus, FaUpload, FaPenFancy, FaCalendarCheck, FaChartLine } from "react-icons/fa";
import { FaAward, FaUserTie, FaShieldAlt, FaHandshake } from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import Client from '../components/Client';
import Getstarted from '../components/Getstarted';
import Hreflang from "../HrefComp";
import { hreflangConfig } from "../HreflangConfig";




export default function Bulk_sms_provider_rajasthan() {

const faqs = [
  {
    question: "Is DIGINTRA’s Bulk SMS service compliant with UAE regulations?",
    answer: "Yes. We strictly follow the Telecommunications Regulatory Authority (TRA) guidelines to ensure all messages are fully compliant and spam-free.",
  },
  {
    question: "Can I send Arabic SMS messages?",
    answer: "Absolutely! Our platform supports both Arabic and English Unicode messaging for complete local engagement.",
  },
  {
    question: "What is the delivery time for messages?",
    answer: "Messages are delivered within seconds through our high-speed routing channels.",
  },
  {
    question: "What is the sender id?",
    answer: "A sender is alphanumeric or numbers that appears in the header of an SMS, showing the recipient who sent the messages. It can be your company brand name or campaign name.",
  },
  {
    question: "Can I use a branded sender id?",
    answer: "Yes. We help you register your company name for higher trust and open rates.",
  },
  {
    question: "What is the bulk SMS UAE price?",
    answer: "Our pricing is volume-based and the lowest in the UAE, compared to other SMS marketing companies in UAE.",
  },
  {
    question: "Do you support Dubai, Sharjah, and Abu Dhabi?",
    answer: "Yes. We cover all major UAE cities and carriers with high delivery rates.",
  },
  {
    question: "Can I integrate DIGINTRA SMS API into my system?",
    answer: "Yes, our RESTful API allows seamless integration with CRMs, ERPs, and mobile apps.",
  },
  {
    question: "Do you provide reports and analytics?",
    answer: "Yes. Our dashboard provides real-time delivery and performance analytics for every campaign.",
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

  
  return (
    <>

    <Hreflang links={hreflangConfig} />
    <Helmet>
    <meta name="robots" content="index, follow" />

      <title>Bulk SMS Service in UAE | Cost-Effective Bulk SMS UAE Price

</title>
      <meta name="description" content='Trusted bulk SMS service provider in UAE. Send SMS across Dubai, Sharjah, and Abu Dhabi with direct routes, sender IDs, and real-time reports. Free signup.'/>

      <meta
          name="keywords"
          content="bulk sms uae, bulk sms service provider in uae, bulk sms marketing uae, sms marketing company uae, bulk sms uae price, bulk sms service in uae, uae sms gateway
"
        />
   <link rel="canonical" href="https://digintra.com/bulk-sms-uae" />
    </Helmet>




    <section className="relative w-full min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center  lg:text-left px-6 text-center lg:px-20 pt-[160px] lg:pt-[230px] pb-[50px]  overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center w-full max-w-7xl">

        {/* LEFT SIDE CONTENT */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
            Bulk SMS Service in UAE that Delivers fast, at the lowest price
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            A trusted bulk SMS service provider in UAE. Reach customers across
            Dubai, Sharjah, and Abu Dhabi with instant delivery, clean sender
            IDs, and real-time reports.
          </p>

          {/* Animated message icons */}
          <div className="relative flex gap-4 mt-8">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="text-blue-600 text-3xl"
                initial={{ y: 0, opacity: 0 }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 2 + i * 0.3,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              >
                <FaEnvelope />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE IMAGES */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[500px] flex justify-center">
            {/* Image 1 - Top Left */}
            <motion.img
              src={img1}
              alt="Bulk SMS UAE"
              className="absolute top-0 left-0 w-40 md:w-48 rounded-2xl shadow-lg border border-white"
              whileHover={{ scale: 1.05 }}
            />
            {/* Image 2 - Center */}
            <motion.img
              src={img2}
              alt="Bulk SMS service in UAE"
              className="relative z-10 w-56 md:w-64 rounded-2xl shadow-2xl border-4 border-white"
              whileHover={{ scale: 1.05 }}
            />
            {/* Image 3 - Bottom Right */}
            <motion.img
              src={img3}
              alt="SMS Marketing Company UAE"
              className="absolute bottom-0 right-0 w-40 md:w-48 rounded-2xl shadow-lg border border-white"
              whileHover={{ scale: 1.05 }}
            />
          </div>
        </motion.div>
      </div>
    </section>


     <section className="w-full bg-gradient-to-br from-blue-50 via-white to-blue-100 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-around gap-8 text-center">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="flex flex-col items-center space-y-3"
          >
            {item.icon}
            <p className="text-gray-800 font-medium text-lg">{item.title}</p>
          </motion.div>
        ))}
      </div>
    </section>



     <section className="relative bg-gradient-to-br from-yellow-50 via-white to-yellow-100 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug mb-6 drop-shadow-lg"
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
        >
          Connect, Communicate, and Convert with the UAE’s Trusted SMS Marketing Partner
        </motion.h2>

        <motion.p
          className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4"
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
        >
          Reaching customers in the UAE can be slow and costly. Emails get ignored. Ads are expensive. 
          You need a reliable UAE SMS gateway with high delivery, clear sender IDs, and fair pricing.
        </motion.p>

        <motion.p
          className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4"
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
        >
          At DIGINTRA Teleservices, we provide reliable and scalable Bulk SMS Services in UAE that help 
          businesses reach their customers in seconds with precision, compliance, and measurable results.
        </motion.p>

        <motion.p
          className="text-gray-700 text-lg md:text-xl leading-relaxed"
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={3}
        >
          Whether you’re a retail brand, bank, healthcare provider, or e-commerce business, our bulk SMS 
          gateway UAE ensures your messages get delivered on time.
        </motion.p>
      </div>
    </section>



   <section className="bg-gray-50 py-20 px-4">
  <motion.div
    className="max-w-[90%] mx-auto text-center mb-12"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug drop-shadow-lg">
      Why Choose DIGINTRA for Bulk SMS in UAE?
    </h2>
  </motion.div>

  <motion.div
    className="grid gap-8 md:grid-cols-3 max-w-[90%] mx-auto"
    variants={container}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    {items2.map((item, index) => (
      <motion.div
        key={index}
        className="bg-gradient-to-br from-blue-500 via-blue-500 to-blue-500 rounded-2xl p-6 shadow-2xl flex flex-col hover:scale-105 hover:shadow-3xl transition-transform duration-500"
        variants={itemVariant}
      >
        <div className="flex items-center mb-4">
          {item.icon}
          <h3 className="text-xl md:text-2xl font-semibold ml-3 text-white">
            {item.title}
          </h3>
        </div>
        <p className="text-white mb-2">{item.description}</p>
        {item.points && (
          <ul className="list-disc list-inside text-white mt-2 space-y-1">
            {item.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        )}
      </motion.div>
    ))}
  </motion.div>
</section>

<section className="bg-gray-50 py-20 px-4 relative">
      {/* Decorative SVG */}
      <svg
        className="absolute top-0 left-0 w-32 h-32 text-yellow-200 opacity-30"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="12" />
      </svg>

      <motion.div
        className="max-w-[90%] mx-auto text-center mb-12 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 drop-shadow-lg">
          Types of Bulk SMS Services We Offer for UAE
        </h2>
      </motion.div>

      <motion.div
        className="grid gap-8 sm:grid-cols-1 md:grid-cols-3 max-w-[90%] mx-auto"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {smsTypes.map((sms, index) => (
          <motion.div
            key={index}
            className={`relative rounded-2xl p-6 flex flex-col shadow-2xl text-white ${sms.gradient} hover:scale-105 transition-transform duration-500`}
            variants={itemVariant}
          >
            {/* Number Badge in Background */}
            <span className="absolute text-white/20 text-[6rem] font-bold top-4 right-4 select-none pointer-events-none">
              {index + 1}
            </span>

            <div className="flex items-center mb-4 relative z-10">
              {sms.icon}
              <h3 className="ml-3 text-xl md:text-2xl font-semibold">{sms.title}</h3>
            </div>
            <p className="text-white relative z-10">{sms.description}</p>

            <button className="mt-6 w-max bg-white text-gray-800 font-semibold px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-300 relative z-10">
              Read More
            </button>
          </motion.div>
        ))}
      </motion.div>
    </section>




 <section className="bg-gray-50 py-20 px-4">
      <motion.div
        className="max-w-[90%] mx-auto text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 drop-shadow-lg mb-4">
          Industries We Serve
        </h2>
        <p className="text-gray-700 text-lg md:text-xl">
          Our Bulk SMS Solutions in UAE are trusted across sectors. Each campaign is customized to meet your business objectives, audience, and compliance needs.
        </p>
      </motion.div>

      <motion.div
        className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-[90%] mx-auto"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {industries.map((industry, index) => (
          <motion.div
            key={index}
            className={`flex items-center p-5 rounded-2xl shadow-2xl text-white ${industry.gradient} hover:scale-105 transition-transform duration-500`}
            variants={itemVariant}
          >
            <div className="mr-4">{industry.icon}</div>
            <h3 className="text-lg md:text-xl font-semibold">{industry.name}</h3>
          </motion.div>
        ))}
      </motion.div>
    </section>


 <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-[90%] mx-auto text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 drop-shadow-lg">
          Features Bulk SMS UAE
        </h2>
        <p className="text-gray-700 mt-4 text-lg md:text-xl">
          Explore the essential features of our Bulk SMS services in UAE.
        </p>
      </div>

      <div className="max-w-[90%] mx-auto grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-lg shadow-md flex items-start space-x-3 hover:shadow-xl transition-shadow duration-300"
          >
            <span className="text-green-500 mt-1">✔️</span>
            <p className="text-gray-800">{feature}</p>
          </div>
        ))}
      </div>
    </section>



    <section className="bg-gray-50 py-16 px-4 relative overflow-hidden">
      {/* Decorative SVG squares */}
      <svg
        className="absolute top-0 left-0 w-20 h-20 text-yellow-200 opacity-20 rotate-45"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <rect width="24" height="24" />
      </svg>
      <svg
        className="absolute bottom-10 right-10 w-32 h-32 text-pink-200 opacity-20 rotate-12"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <rect width="24" height="24" />
      </svg>

      <motion.div
        className="max-w-[90%] mx-auto text-center mb-10 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 drop-shadow-lg">
          Pricing: Cost-effective Bulk SMS UAE Pricing
        </h2>
        <p className="text-gray-700 mt-4 text-lg md:text-xl">
          Our bulk SMS UAE pricing is the lowest compared to other SMS marketing companies in the UAE.
        </p>
      </motion.div>

      <motion.div
        className="max-w-[90%] mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-3 relative z-10"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {pricingFeatures.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-start hover:shadow-xl transition-shadow duration-300"
            variants={itemVariant}
          >
            <span className="text-green-500 text-2xl mb-3">✔️</span>
            <p className="text-gray-800 font-medium">{feature}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>



     <section className="relative py-20 px-4 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 overflow-hidden">
      {/* Decorative SVG shapes */}
      <svg
        className="absolute top-0 left-0 w-32 h-32 text-yellow-200 opacity-20 rotate-12"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="12" />
      </svg>
      <svg
        className="absolute bottom-10 right-10 w-40 h-40 text-pink-300 opacity-20 -rotate-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <rect width="24" height="24" />
      </svg>

      <motion.div
        className="max-w-[90%] mx-auto text-center mb-12 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 drop-shadow-lg">
          Benefits of Using DIGINTRA Bulk SMS Platform
        </h2>
      </motion.div>

      <motion.div
        className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[90%] mx-auto relative z-10"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-lg flex items-start space-x-3 hover:shadow-2xl transition-shadow duration-300"
            variants={itemVariant}
          >
            <FaCheckCircle className="w-6 h-6 text-green-500 mt-1" />
            <p className="text-gray-800 font-medium">{benefit}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>



<section className="bg-gradient-to-br from-blue-100 via-blue-200 to-blue-100 py-20 px-4 relative">
      {/* Decorative SVG */}
      <svg className="absolute top-0 left-0 w-32 h-32 text-blue-300 opacity-20 rotate-12" fill="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="12" />
      </svg>

      <motion.div className="max-w-[90%] mx-auto text-center mb-12 relative z-10"
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 drop-shadow-lg">
          How Our Bulk SMS UAE Process Works
        </h2>
        <p className="text-gray-700 mt-4 text-lg md:text-xl">
          Our easy-to-use dashboard makes bulk messaging simple for marketers and developers.
        </p>
      </motion.div>

      <motion.div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[90%] mx-auto relative z-10"
        variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {steps.map((step, index) => (
          <motion.div key={index} variants={itemVariant} className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg flex flex-col items-start hover:shadow-2xl transition-shadow duration-300 relative">
            <span className="absolute text-gray-200 text-[5rem] font-bold top-4 right-4 select-none pointer-events-none">{index + 1}</span>
            <div className="flex items-center mb-4 z-10">{step.icon}</div>
            <h3 className="text-xl md:text-2xl font-semibold mb-2 z-10">{step.title}</h3>
            <p className="text-gray-800 z-10">{step.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>




     <section className="bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 py-20 px-4 relative">
      {/* Decorative SVG */}
      <svg className="absolute top-0 right-0 w-32 h-32 text-pink-200 opacity-20 rotate-12" fill="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="12" />
      </svg>

      <motion.div className="max-w-[90%] mx-auto text-center mb-12 relative z-10"
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 drop-shadow-lg">
          Why UAE Businesses Trust DIGINTRA Teleservices
        </h2>
        <p className="text-gray-700 mt-4 text-lg md:text-xl">
          We believe in long-term partnerships, not one-time campaigns.
        </p>
      </motion.div>

      <motion.div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-[90%] mx-auto relative z-10"
        variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {trustPoints.map((point, index) => (
          <motion.div key={index} variants={itemVariant} className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg flex flex-col items-start hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center mb-4">{point.icon}</div>
            <h3 className="text-xl md:text-2xl font-semibold mb-2">{point.title}</h3>
            <p className="text-gray-800">{point.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>



    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-[90%] mx-auto text-center">
        <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-6">
          Ready to Power Your Business with Bulk SMS service in UAE?
        </h2>
        <p className="text-gray-700 text-lg md:text-xl mb-8">
          Join thousands of satisfied businesses that rely on DIGINTRA Teleservices for secure, fast, and impactful communication.
        </p>

        <ul className="text-gray-800 mb-10 space-y-2 text-centre sm:text-center max-w-md mx-auto">
          <li className="flex items-center justify-center sm:justify-start gap-2">
            <span className="text-green-500">✅</span> Free demo available
          </li>
          <li className="flex items-center justify-center sm:justify-start gap-2">
            <span className="text-green-500">✅</span> No setup fees
          </li>
          <li className="flex items-center justify-center sm:justify-start gap-2">
            <span className="text-green-500">✅</span> 24/7 local support
          </li>
        </ul>

        <p className="text-gray-700 text-lg md:text-xl mb-8">
          Get Started Today with Best SMS Marketing Company UAE
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
            Request a Free Quote
          </button>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300">
            Book a Demo
          </button>
          <a href="tel:+971505017786" className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors duration-300">
            Call +971-505017786
          </a>
        </div>
      </div>
    </section>



 <section className="bg-gray-50 py-20 px-4 relative">
      <div className="max-w-[90%] mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 drop-shadow-lg">
          Frequently Asked Questions (FAQ) – Bulk SMS Service UAE
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











































      
   

    {/* fifth content */}

    <Client/>

{/* sixth content */}

<Getstarted/>

   
   <Footer/>
   </>
  )
}
