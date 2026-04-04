import { motion } from "framer-motion";
import { section } from "framer-motion/client";
import bulkSmsVideo from '../assets/sms-phillepines.mp4';
import Footer from "../components/Footer";
import image from "../assets/bulk-sms-phillepines.png"

// 3rd section icons
import {
  Rocket,
  Zap,
  ShieldCheck,
  Wrench,
  BarChart3,
  Globe,
} from "lucide-react";

// 4th section icons
import {
  Gavel,
  Server,
  CheckCircle,
} from "lucide-react";

// 6th section icons
import {
  TrendingUp,
 
  Repeat,
  Settings,
} from "lucide-react";

// 7th section icons
import {
  ShoppingCart,
  Landmark,
  HeartPulse,
  Truck,
  GraduationCap,
  Cpu
} from "lucide-react";

// 8th section icons
import {
  Smartphone,
  Clock,
  Target,
} from "lucide-react";

// 9th section icons
import {
  Award,
  Brain,
  BadgeCheck,
} from "lucide-react";

const Philippines = () => {

  // 3rd section content
  const features = [
  {
    title: "High Delivery Rates",
    desc: "Reliable SMS delivery across all major Philippine mobile networks with optimized local routing.",
    icon: <Rocket className="w-6 h-6" />,
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Instant SMS Delivery",
    desc: "Send messages instantly with real-time delivery status and reporting.",
    icon: <Zap className="w-6 h-6" />,
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Secure & Compliant",
    desc: "Enterprise-grade security with compliant and protected messaging infrastructure.",
    icon: <ShieldCheck className="w-6 h-6" />,
    color: "from-teal-500 to-cyan-600",
  },
  {
    title: "Easy API Integration",
    desc: "Simple and developer-friendly SMS API for seamless platform integration.",
    icon: <Wrench className="w-6 h-6" />,
    color: "from-cyan-500 to-sky-600",
  },
  {
    title: "Campaign Analytics",
    desc: "Track delivery reports, engagement, and performance with advanced analytics.",
    icon: <BarChart3 className="w-6 h-6" />,
    color: "from-sky-500 to-blue-600",
  },
  {
    title: "Global SMS Coverage",
    desc: "Send messages locally in the Philippines or expand globally with international coverage.",
    icon: <Globe className="w-6 h-6" />,
    color: "from-blue-500 to-indigo-600",
  },
];

// 4th section content
const complianceData = [
  {
    title: "Philippines Regulatory Alignment",
    color: "green",
    icon: Gavel,
    points: [
      "Messaging aligned with Philippine telecom regulations",
      "Support for approved sender IDs and content guidelines",
      "Opt-in and opt-out mechanisms for responsible messaging",
      "Compliance-focused routing for lawful SMS delivery",
    ],
  },
  {
    title: "Best SMS Gateway Philippines",
    color: "blue",
    icon: ShieldCheck,
    points: [
      "Enterprise-grade SMS gateway with encrypted transmission",
      "Secure APIs for websites, mobile apps, CRM, and ERP systems",
      "Protected data handling and strict access controls",
    ],
  },
  {
    title: "Reliable Local Delivery",
    color: "orange",
    icon: Server,
    points: [
      "Direct routes to Philippine mobile operators",
      "Redundant routing and failover systems",
      "Real-time delivery reports and message visibility",
    ],
  },
];

const colorMap = {
  green: "border-green-500 text-green-600",
  blue: "border-blue-500 text-blue-600",
  orange: "border-orange-500 text-orange-600",
};

// 6th section content
const feature = [
  {
    icon: TrendingUp,
    text: "High open rates and instant reach",
    number: "01",
    bg: "from-orange-500 to-orange-400",
  },
  {
    icon: BarChart3,
    text: "Real-time delivery and performance reports",
    number: "02",
    bg: "from-blue-500 to-blue-400",
  },
  {
    icon: Repeat,
    text: "Two-way messaging support",
    number: "03",
    bg: "from-emerald-500 to-emerald-400",
  },
  {
    icon: Settings,
    text: "Scalable infrastructure for high-volume messaging",
    number: "04",
    bg: "from-purple-500 to-purple-400",
  },
  {
    icon: ShieldCheck,
    text: "Secure APIs and encrypted transmission",
    number: "05",
    bg: "from-pink-500 to-pink-400",
  },
  {
    icon: Globe,
    text: "Nationwide coverage across Bahrain",
    number: "06",
    bg: "from-sky-500 to-sky-400",
  },
];
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};


// 7th section content
const industries = [
  {
    title: "Retail & E-commerce",
    icon: ShoppingCart,
    color: "green",
  },
  {
    title: "Banking & Financial Services",
    icon: Landmark,
    color: "blue",
  },
  {
    title: "Healthcare & Clinics",
    icon: HeartPulse,
    color: "pink",
  },
  {
    title: "Logistics & Transportation",
    icon: Truck,
    color: "orange",
  },
  {
    title: "Education & Training",
    icon: GraduationCap,
    color: "purple",
  },
  {
    title: "Technology & Digital Platforms",
    icon: Cpu,
    color: "teal",
  },
];
const color = {
  green: "border-green-400 bg-green-500",
  blue: "border-blue-400 bg-blue-500",
  pink: "border-pink-400 bg-pink-500",
  orange: "border-orange-400 bg-orange-500",
  purple: "border-purple-400 bg-purple-500",
  teal: "border-teal-400 bg-teal-500",
};


// 8th section content
const points = [
  {
    icon: Smartphone,
    text: "Extremely high mobile phone penetration",
  },
  {
    icon: Clock,
    text: "Messages read within minutes",
  },
  {
    icon: Globe,
    text: "Works on all mobile devices (no internet required)",
  },
  {
    icon: Target,
    text: "Ideal for urgent and direct communication",
  },
];

// 9th section content
const trustPoints = [
  {
    icon: Award,
    title: "Experience",
    desc: "Proven success delivering high-volume SMS campaigns across the Philippines and Asia-Pacific.",
    color: "blue",
  },
  {
    icon: Brain,
    title: "Expertise",
    desc: "Deep technical knowledge of SMS API Philippines and SMS gateway provider Philippines infrastructure.",
    color: "teal",
  },
  {
    icon: BadgeCheck,
    title: "Authoritativeness",
    desc: "Recognized as a reliable bulk SMS provider in the Philippines for SMEs and enterprises.",
    color: "sky",
  },
  {
    icon: ShieldCheck,
    title: "Trustworthiness",
    desc: "Secure infrastructure, transparent pricing, dedicated support, and consistent delivery performance.",
    color: "emerald",
  },
];
const colr = {
  blue: "border-blue-200 text-blue-600",
  teal: "border-teal-200 text-teal-600",
  sky: "border-sky-200 text-sky-600",
  emerald: "border-emerald-200 text-emerald-600",
};


  return (
    <>
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
              alt="Bulk SMS Phillepines"
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
            Bulk SMS Philippines –{" "}
            <span className="text-red-400 block md:inline">
              Fast, Reliable & Scalable
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="mb-4 md:mb-6 text-base md:text-lg text-gray-300"
          >
            Reach Millions Instantly with the Best SMS Gateway in the Philippines. 
            Secure, High-Delivery Bulk SMS Service for Businesses in the Philippines.
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
               Bulk SMS Service in the Philippines
            </span>{" "}
            for Businesses of All Sizes
          </h2>

          <p className="text-slate-600 text-base md:text-lg mb-4">
            Businesses across the Philippines need a fast, dependable, and scalable communication
             channel to connect with customers effectively. Bulk SMS Philippines solutions allow 
             businesses to deliver SMS messages directly to mobile phones while ensuring high visibility 
             and instant engagement. From promotional messages to critical transactional alerts, 
             SMS remains one of the most trusted communication channels in the country.
          </p>

          <p className="text-slate-600 text-base md:text-lg mb-6">
            DIGINTRA enables businesses to send messages at scale using a powerful SMS API in Philippines 
            and the best SMS gateway Philippines, making us a preferred bulk SMS provider in the Philippines 
            for reliable, high-volume messaging.
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
              src="https://ipistis.com/assets/img/products/bulk-sms-whatsapp-marketing.png"
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
    <section className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
       {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold 
            bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 
            bg-clip-text text-transparent">
            Why Choose DIGINTRA for Bulk SMS Philippines?
          </h2>

          <p className="mt-6 text-lg text-slate-600 mb-12">
            DIGINTRA is a trusted bulk SMS sender in the Philippines, helping
            businesses run secure and high-performance SMS campaigns nationwide.
            Our enterprise-grade infrastructure and local routing ensure reliable
            message delivery at scale.
          </p>
        </motion.div>
        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="group bg-white rounded-2xl p-6 border border-green-100 shadow-sm hover:shadow-xl transition-all"
            >
              {/* ICON */}
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color}
                flex items-center justify-center text-white mb-4
                group-hover:scale-110 transition-transform`}
              >
                {item.icon}
              </div>

              {/* TEXT */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
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

    {/* 4th section */}
   <section className="relative py-20 bg-gradient-to-b from-green-100 via-white to-blue-200 overflow-hidden">
  <div className="absolute -top-32 -right-32 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-30" />
  <div className="absolute bottom-0 -left-32 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30" />

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
    {/* HEADER */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-3xl mx-auto mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Compliance, Security & Trust You Can Rely On
        <span className="text-green-600"> in the Philippines</span>
      </h2>
      <p className="mt-4 text-gray-600">
        DIGINTRA delivers Bulk SMS Philippines services with a strong
        focus on compliance, data security, and message reliability.
      </p>
    </motion.div>

    {/* CARDS */}
    <div className="
      grid gap-8
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
      place-items-center
    ">
      {complianceData.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15, duration: 0.5 }}
          className="relative w-full max-w-sm"
        >
          {/* ICON BADGE */}
          <div
            className={`
              absolute -top-7 left-1/2 -translate-x-1/2
              w-14 h-14 rounded-full bg-white
              border-4 ${colorMap[item.color]}
              flex items-center justify-center
              shadow-md
            `}
          >
            <item.icon className={`w-6 h-6 ${colorMap[item.color]}`} />
          </div>

          {/* CARD */}
          <div
            className={`
              pt-12 pb-6 px-6
              bg-white rounded-2xl
              border-2 ${colorMap[item.color]}
              shadow-lg
              h-full
            `}
          >
            <h3 className="text-center text-lg font-semibold text-gray-800 mb-4">
              {item.title}
            </h3>

            <ul className="space-y-3 text-sm text-gray-600">
              {item.points.map((point, i) => (
                <li key={i} className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <span>{point}</span>
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
    <section className="py-28 bg-gradient-to-b from-slate-200 via-white to-emerald-200">
      <div className="max-w-6xl mx-auto px-6">
        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-4xl font-extrabold mb-20"
        >
          <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
            Our Bulk SMS Philippines Solutions
          </span>
        </motion.h2>

        {/* TOP ROW */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {/* CARD 1 */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative bg-white rounded-2xl shadow-lg p-8 border border-emerald-100"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400 rounded-t-2xl" />

            <h3 className="text-lg font-semibold text-yellow-600 mb-4">
              Promotional Bulk SMS
            </h3>

            <p className="text-sm text-gray-600 mb-5">
              Run high-impact SMS campaigns for:
            </p>

            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex gap-2">
                <CheckCircle className="w-4 h-4 text-yellow-500 mt-0.5" />
                Sales promotions and discounts
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-4 h-4 text-yellow-500 mt-0.5" />
                Product launches and announcements
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-4 h-4 text-yellow-500 mt-0.5" />
                Customer engagement and retention
              </li>
            </ul>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative bg-white rounded-2xl shadow-lg p-8 border border-orange-100"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-orange-400 rounded-t-2xl" />

            <h3 className="text-lg font-semibold text-orange-600 mb-4">
              Transactional & OTP SMS
            </h3>

            <p className="text-sm text-gray-600 mb-5">
              Deliver time-sensitive messages instantly:
            </p>

            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex gap-2">
                <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5" />
                OTP and verification codes
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5" />
                Payment and order confirmations
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5" />
                Appointment and delivery notifications
              </li>
            </ul>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative bg-white rounded-2xl shadow-lg p-8 border border-purple-100"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-purple-500 rounded-t-2xl" />

            <h3 className="text-lg font-semibold text-purple-600 mb-4">
              SMS API Philippines
            </h3>

            <p className="text-sm text-gray-600 mb-5">
              Automate messaging with our powerful SMS API Philippines:
            </p>

            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex gap-2">
                <CheckCircle className="w-4 h-4 text-purple-500 mt-0.5" />
                Easy system integration
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-4 h-4 text-purple-500 mt-0.5" />
                High throughput for enterprise use
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-4 h-4 text-purple-500 mt-0.5" />
                Scalable and secure message delivery
              </li>
            </ul>
          </motion.div>
        </div>

        {/* BOTTOM FEATURE CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl p-10 text-white shadow-2xl"
        >
          <h3 className="text-2xl font-semibold mb-4 text-center">
            Bulk SMS Sender Platform
          </h3>

          <p className="text-sm md:text-base leading-relaxed max-w-4xl mx-auto text-center opacity-95">
            DIGINTRA provides a robust bulk SMS sender / bulk SMS sender platform
            to manage contacts, personalize messages, schedule campaigns, and
            track performance in real time.
          </p>
        </motion.div>
      </div>
    </section>

    {/* 6th section */}
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center mb-16 bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent"
        >
          Key Features of Our Bulk SMS Service
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {feature.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                transition={{ type: "spring", stiffness: 220 }}
                className={`relative rounded-2xl p-6 text-white shadow-xl bg-gradient-to-r ${item.bg} overflow-hidden`}
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 opacity-0 hover:opacity-20 transition bg-white blur-2xl" />

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.15 }}
                  className="relative z-10 w-12 h-12 rounded-full bg-white text-gray-800 flex items-center justify-center mb-6"
                >
                  <Icon className="w-6 h-6" />
                </motion.div>

                {/* Text */}
                <p className="relative z-10 text-lg font-semibold leading-snug max-w-[85%]">
                  {item.text}
                </p>

                {/* Number */}
                <span className="absolute bottom-5 right-6 text-white/40 text-2xl font-bold">
                  {item.number}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    {/* 7th section */}
    <section className="bg-gradient-to-b from-slate-50 to-slate-100 py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-blue-600">
          Industries We Serve in the Philippines
        </h2>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          DIGINTRA supports businesses across multiple industries with reliable
          Bulk SMS Philippines solutions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {industries.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`flex items-center gap-4 bg-white rounded-2xl border p-6 shadow-sm hover:shadow-lg transition ${color[item.color].split(" ")[0]}`}
              >
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-xl text-white shadow-md ${color[item.color].split(" ")[1]}`}
                >
                  <Icon size={26} />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>

        <p className="mt-16 text-gray-500">
          Our industry experience ensures compliant and effective messaging
          strategies.
        </p>
      </div>
    </section>

    {/* 8th section */}
    <section className="py-28 bg-gradient-to-br from-white via-sky-50 to-blue-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-600 mb-10 leading-tight">
              Why Bulk SMS Works in
              <span className="block text-blue-700">the Philippines</span>
            </h2>

            <div className="space-y-5">
              {points.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-white rounded-xl px-6 py-5 border border-blue-100 shadow-sm hover:shadow-md transition"
                  >
                    <div className="w-11 h-11 rounded-lg bg-blue-50 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <p className="text-gray-700 font-medium">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>

            <p className="mt-8 text-gray-600 max-w-xl">
              Bulk SMS remains one of the most effective messaging channels
              in the Philippines.
            </p>
          </div>

          {/* RIGHT ILLUSTRATION */}
          <div className="relative">
          {/* Glow Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-sky-100 rounded-3xl blur-2xl opacity-60" />

          <div className="relative bg-[#eaf2f8] rounded-3xl p-3 shadow-lg overflow-hidden">

            <video
              className="w-full h-full rounded-2xl object-cover"
              src={bulkSmsVideo}
              autoPlay
              loop
              muted
              playsInline
            />

          </div>
        </div>


        </div>
      </div>
    </section>

    {/* 9th section */}
     <section className="py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-20 leading-tight">
          Why{" "}
          <span className="bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">
            DIGINTRA
          </span>{" "}
          is a Trusted Bulk SMS Provider in
          <span className="block mt-2 bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
            the Philippines
          </span>
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {trustPoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-3xl p-8 text-center border ${colr[item.color].split(" ")[0]} shadow-sm hover:shadow-xl transition`}
              >
                {/* Icon */}
                <div
                  className={`mx-auto w-20 h-20 rounded-full border flex items-center justify-center mb-6 ${colr[item.color]} shadow-[0_0_25px_rgba(0,0,0,0.05)]`}
                >
                  <Icon className="w-9 h-9" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-4">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.desc}
                </p>

                {/* Accent line */}
                <div
                  className={`w-14 h-1 mx-auto mt-6 rounded-full bg-gradient-to-r ${
                    item.color === "blue"
                      ? "from-blue-400 to-blue-600"
                      : item.color === "teal"
                      ? "from-teal-400 to-teal-600"
                      : item.color === "sky"
                      ? "from-sky-400 to-sky-600"
                      : "from-emerald-400 to-emerald-600"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>


    {/* 10th section */}
    <section className="relative overflow-hidden bg-slate-950 py-28">
      
      {/* Lamp Light Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-emerald-500/20 rounded-full blur-[160px]" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[450px] h-[450px] bg-sky-500/20 rounded-full blur-[140px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-white">
          Get Started with{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">
            Bulk SMS Philippines
          </span>{" "}
          Today
        </h2>

        {/* Description */}
        <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-12">
          Whether you need a{" "}
          <span className="text-white font-medium">
            bulk SMS sender Philippines
          </span>
          , a reliable{" "}
          <span className="text-white font-medium">
            SMS API Philippines
          </span>
          , or the best{" "}
          <span className="text-white font-medium">
            SMS gateway Philippines
          </span>
          , DIGINTRA is your trusted messaging partner.
          <br className="hidden md:block" />
          Contact us today to launch your Bulk SMS campaigns and connect with
          customers across the Philippines instantly.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center">

          {/* Talk to Expert */}
          <button className="relative px-8 py-4 rounded-xl font-semibold text-slate-900 bg-gradient-to-r from-emerald-400 to-emerald-500 shadow-lg hover:shadow-emerald-500/40 transition-all duration-300">
            Talk to an SMS Expert
          </button>

          {/* Start Bulk SMS */}
          <button className="relative px-8 py-4 rounded-xl font-semibold text-white border border-slate-700 bg-slate-900/60 backdrop-blur hover:border-emerald-400 hover:text-emerald-400 transition-all duration-300">
            Start Bulk SMS Now
          </button>

        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
<Footer/>
    </>
  )
}

export default Philippines