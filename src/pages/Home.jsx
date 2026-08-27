import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaInbox, FaSyncAlt, FaBullhorn, FaLayerGroup } from "react-icons/fa";
import Seven from "../components/Seven";
import Blogtypingeffect from "../components/Blogtypingeffect";
import Client from "../components/Client";
import Card from "../components/Card";
import Choose from "../components/Choose";
import TypingEffect from "../components/TypingEffect";
import Products from "../components/Products";
import "./Home.css";
import GlobalImg from '../assets/GlobalImg.jpeg'

import Homeslider from "../components/Homeslider";
import Testimonials from "../components/Testimonials";
import { Helmet } from "react-helmet";
import { FaWhatsapp, FaCog, FaUsers, FaRegChartBar, FaShieldAlt, FaEnvelope, FaCloud, FaComments, FaBell, FaSync, FaUserPlus } from 'react-icons/fa';
import { TbHandClick } from "react-icons/tb";
import icons1 from "../assets/anyuse.jpg";
import icons2 from "../assets/icons8-arrow-100.png";
import icons3 from "../assets/usecase.jpg";
import icons4 from "../assets/aaa.webp";
import icons5 from "../assets/smpp.png";
import icons6 from "../assets/ccc.png";
import icons7 from "../assets/Mass Texting.png";
import icons8 from "../assets/api.png";
import icons9 from "../assets/fff.png";
import icons10 from "../assets/seamless-floral-pattern-vintage-wallpaper.jpg";
import icons11 from '../assets/bg-white.jpg';
import { ArrowRight, MessageCircleMore } from "lucide-react";
import { CreditCard, Wallet } from "lucide-react";



import blogCardbg from "../assets/OAICFK0.jpg";
import pricescreenshot from "../assets/Screenshot 2024-08-30 104623.webp";
import emailcamp from "../assets/email.jpg";
import smtpserver from "../assets/smtp-server.jpg";
import voicebroadcast from "../assets/voice-broadcast.jpg";
import { } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import Footer from "../components/Footer";
import ChildCompany from "../components/ChildCompany";
import retail from '../assets/Retail.webp'
import banking from '../assets/Banking.webp'
import health from '../assets/Healthcare.webp'
import government from '../assets/SMES.webp'
import education from '../assets/Education.webp'
import transport from '../assets/Logistics.webp';
import travel from '../assets/Hospitality.jpg';
import media from '../assets/media.webp';
import Digintra_dashboard from '../assets/Digintra_dashboard.jpg';

import mapImg from '../assets/mapImg.png';
import messaging from '../assets/messaging.jpeg';
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { Globe, Megaphone, ReceiptText, KeyRound } from "lucide-react";

// import { Lock } from "lucide-react";

const ChooseSection = lazy(() => import("../components/Choose"));
const TestimonialsSection = lazy(() => import("../components/Testimonials"));
const SevenSection = lazy(() => import("../components/Seven"));
const ClientSection = lazy(() => import("../components/Client"));
const FooterSection = lazy(() => import("../components/Footer"));

function DeferredSection({ children }) {
  const [shouldRender, setShouldRender] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref}>{shouldRender ? <Suspense fallback={null}>{children}</Suspense> : null}</div>;
}

function AnimatedStat({ value, label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const match = value.match(/^([^\d]*)([\d,.]+)(.*)$/);
  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001,
  });

  const formattedValue = match
    ? (() => {
      const [, prefix, rawNum, suffix] = match;
      const targetNum = parseFloat(rawNum.replace(/,/g, ""));
      const decimals = rawNum.includes(".") ? rawNum.split(".")[1].length : 0;

      useEffect(() => {
        if (isInView) springValue.set(targetNum);
      }, [isInView, springValue, targetNum]);

      const displayValue = useTransform(springValue, (current) =>
        `${prefix}${current.toFixed(decimals)}${suffix}`
      );

      return displayValue;
    })()
    : value;

  if (!match) {
    return (
      <div ref={ref} className="text-center">
        <p
          className="bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl"
          style={{ fontFamily: "'Poppins', 'sans-serif'" }}
        >
          {value}
        </p>
        <p
          className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500 sm:text-sm"
          style={{ fontFamily: "'Poppins', 'sans-serif'" }}
        >
          {label}
        </p>
      </div>
    );
  }

  return (
    <div ref={ref} className="text-center">
      <p
        className="bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl"
        style={{ fontFamily: "'Poppins', 'sans-serif'" }}
      >
        <motion.span>{formattedValue}</motion.span>
      </p>
      <p
        className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500 sm:text-sm"
        style={{ fontFamily: "'Poppins', 'sans-serif'" }}
      >
        {label}
      </p>
    </div>
  );
}

function StatsGrid() {
  const stats = [
    { value: "200+", label: "Destinations Reached" },
    { value: "100+", label: "Businesses Served" },
    { value: "99.9%", label: "Delivery Rate" },
    { value: "24/7", label: "Global Support" },
  ];

  return (
    <div className="mx-auto mt-14 grid max-w-2xl grid-cols-2 gap-6 rounded-2xl border border-emerald-100 bg-white/60 px-6 py-8 shadow-sm backdrop-blur-md sm:grid-cols-4">
      {stats.map((stat) => (
        <AnimatedStat key={stat.label} value={stat.value} label={stat.label} />
      ))}
    </div>
  );
}

export default function Home() {
  const messages = [
    "Bulk SMS, Delivered Instantly",
    // "WhatsApp Business API",
    "Voice & SMS in One Place",
    "Global Reach. Real Results.",
  ];
  const blogmessages = [
    "Solutions for Businesses Worldwide.",
    "Solutions for Seamless Connectivity.",
    "to Accelerate Your Business Growth.",
  ];
  const smsSolutions = [
    {
      id: 1,
      title: "Global Bulk SMS",
      description:
        "Send high-volume SMS campaigns worldwide using fast and reliable carrier routes.",
      icon: Globe,
    },
    {
      id: 2,
      title: "Promotional SMS",
      description:
        "Launch marketing campaigns, offers, discounts, and customer engagement messages.",
      icon: Megaphone,
    },
    {
      id: 3,
      title: "Transactional SMS",
      description:
        "Deliver instant alerts, order confirmations, account notifications, and reminders.",
      icon: ReceiptText,
    },
    {
      id: 4,
      title: "OTP SMS",
      description:
        "Secure logins and customer verification with fast one-time password delivery.",
      icon: KeyRound,
    },
  ];
  const cardofindustry = [
    {
      image: retail,
      heading: 'Retail & eCommerce',
      text: 'Share order updates, answer questions instantly and reduce SMS abandonment rates.',
    },
    {
      image: banking,
      heading: 'Banking & FS',
      text: 'Make secure transactions, notify customers, and complete user KYC validation through SMS..',
    },
    {
      image: health,
      heading: 'Healthcare',
      text: 'Send appointment updates and reminders, medical reports, and more using SMS.',
    },
    {
      image: government,
      heading: 'Government & SMES',
      text: 'Send from payment reminders for taxation to important documents via a simple SMS.',
    },
    {
      image: education,
      heading: 'Education',
      text: 'Support students, parents, teachers and institutes for smooth communication through SMS.',
    },
    {
      image: transport,
      heading: 'Transport & Logistics',
      text: 'Notify orders updated with the help of SMS in real-time and troubleshoot customer problems on the go.',
    },
    {
      image: travel,
      heading: 'Travel & Hospitality',
      text: 'Schedule and build trips and share greeting messages, notifications, and reminders through SMS.',
    },
    {
      image: media,
      heading: 'Media & Entertainment',
      text: 'Use SMS to run opinion polls and contests, garner votes for a game and reality shows, send event invites, and much more.',
    },
  ];

  const useCases = [
    {
      image: icons4,
      title: "2-Way SMS",
      description:
        "Send and receive messages instantly — ideal for remote teams, staff, and customer engagement.",
    },
    {
      image: icons5,
      title: "SMPP Connectivity",
      description:
        "Bind our SMPP (v3.4) directly into your stack and start routing traffic globally in minutes.",
    },
    {
      image: icons6,
      title: "Real-Time DLR Reports",
      description:
        "Track delivery status of every message in real time and optimize campaign performance instantly.",
    },
    {
      image: icons7,
      title: "Mass Texting",
      description:
        "Log in and start sending mass texts across 800+ mobile network connections with ease.",
    },
    {
      image: icons8,
      title: "Flexible, Scalable API",
      description:
        "The most adaptable SMS API gateway — start sending from any application in minutes.",
    },
    {
      image: icons9,
      title: "Schedule Campaigns",
      description:
        "Queue reminders, alerts and notifications ahead of time to deliver at exactly the right moment.",
    },
  ];




  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          setAnimate(true); // Start the animation when in view

          // Reset the animation after a short duration
          setTimeout(() => {
            setAnimate(false);
          }, 1000); // Match this duration with your CSS animation duration
        } else {
          setInView(false);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  const refm = useRef(null);
  const [inViewm, setInViewm] = useState(false);
  const [animatem, setAnimatem] = useState(false);

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInViewm(true);
          setAnimatem(true); // Start the animation when in view

          // Reset the animation after a short duration
          setTimeout(() => {
            setAnimate(false);
          }, 1000); // Match this duration with your CSS animation duration
        } else {
          setInViewm(false);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (refm.current) {
      observer.observe(refm.current);
    }

    return () => {
      if (refm.current) {
        observer.unobserve(refm.current);
      }
    };
  }, [refm]);


  const messages1 = [
    "Grow Your Business Globally with Digintra’s Messaging & Engagement Suite"
  ];



  return (
    <div>
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            DIGINTRA Teleservices : Global Bulk SMS & Communication Solutions
          </title>
          <meta
            name="description"
            content="DIGINTRA is a fast-growing SMS platform, offering secure A2P messaging solutions for all. Empower your communication with instant, reliable delivery.
"
          />
          <meta name="keywords" content="sms platform, bulk sms platform, bulk sms provider
" />
          <link rel="canonical" href="https://digintra.com" />


        </Helmet>
        {/* <Homeslider /> */}

        <section className="relative isolate overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-green-100">
          <style>{`
          @keyframes heroPingDot {
            0% { transform: scale(1); opacity: 0.8; }
            75%, 100% { transform: scale(2.4); opacity: 0; }
          }
          .hero-live-dot::before {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: 9999px;
            background: currentColor;
            animation: heroPingDot 1.8s cubic-bezier(0,0,0.2,1) infinite;
          }
          @keyframes heroDrift {
            0%, 100% { transform: translate3d(0,0,0); }
            50% { transform: translate3d(0,-14px,0); }
          }
          .hero-drift { animation: heroDrift 6s ease-in-out infinite; }
        `}</style>


          {/* Background network map, recolored into blue */}
          <div className="absolute inset-0 -z-20">
            <img
              src={mapImg}
              alt="Global connectivity network powering DIGINTRA's messaging platform"
              className="h-full w-full object-cover object-right opacity-80"
              style={{ filter: "hue-rotate(30deg) saturate(2.2) brightness(1.1) contrast(1.05)" }}
              loading="eager"
              onError={(e) => console.error("Map image failed to load:", e)}
            />
            {/* Very light fade so the map stays clearly visible */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/60 via-emerald-50/15 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-white/25" />
          </div>

          {/* Ambient glow accents */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute left-[-8%] top-[-12%] h-[420px] w-[420px] rounded-full bg-emerald-300/40 blur-[120px]" />
            <div className="absolute right-[-5%] top-[8%] h-[360px] w-[360px] rounded-full bg-green-300/40 blur-[110px]" />
            <div className="absolute bottom-[-8%] left-1/2 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-lime-200/50 blur-[100px]" />
            <div
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage: "radial-gradient(circle, #16a34a 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            />
          </div>

          <div className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col justify-center px-4 py-24  sm:px-6 lg:px-8 lg:py-32">
            <div className="mx-auto max-w-4xl text-center">

              {/* Eyebrow / trust badge */}
              <div className="hero-drift mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-300/60 bg-white/70 px-4 py-1.5 shadow-sm shadow-emerald-900/5 backdrop-blur-md">
                <span className="hero-live-dot relative inline-flex h-2 w-2 rounded-full bg-emerald-500 text-emerald-500" />
                <span
                  className="text-xs font-medium uppercase tracking-wider text-emerald-700"
                  style={{ fontFamily: "'Poppins', 'sans-serif'" }}
                >
                  Global Messaging Platform • 200+ Destinations
                </span>
              </div>

              <div
                className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl"
                style={{ fontFamily: "'Poppins', 'sans-serif'" }}
              >
                <TypingEffect messages={messages} speed={50} />
              </div>

              <p
                className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg"
                style={{ fontFamily: "'Poppins', 'sans-serif'" }}
              >
                Reach customers anywhere in the world with reliable Bulk SMS Services, Promotional SMS, Transactional SMS, OTP SMS, Voice Broadcasting, and WhatsApp Business API from a trusted
                global messaging provider.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a href="https://sms-login.digintra.com/User/SignUp" className="w-full sm:w-auto">
                  <button className="flex w-full sm:w-auto sm:min-w-[180px] items-center justify-center gap-2 rounded-xl
                 bg-gradient-to-r from-emerald-600 to-green-500 px-6 py-3.5 font-semibold text-white shadow-lg
                  shadow-emerald-600/30 transition duration-300 hover:shadow-xl hover:shadow-emerald-500/40 hover:-translate-y-0.5">
                    Get Started
                    <ArrowRight size={18} />
                  </button>
                </a>

                <Link to="/contact-us" className="w-full sm:w-auto">
                  <button className="flex w-full sm:w-auto sm:min-w-[180px] items-center justify-center gap-2 rounded-xl border border-emerald-200 bg-white/80 px-6 py-3.5 font-semibold text-emerald-700 shadow-sm backdrop-blur-md transition duration-300 hover:bg-white hover:border-emerald-300">
                    <MessageCircleMore size={18} />
                    Contact Sales
                  </button>
                </Link>
              </div>

              {/* Trust stats strip */}
              <StatsGrid />
            </div>
          </div>



          {/* Dashboard Image with Fade Effect */}


          {/* Dashboard preview inside a laptop frame — only the top ~70% of the
            screenshot is visible, cropped and faded at the bottom so it reads
            as a natural "peek" rather than an abrupt cut. */}
          <div className="relative z-20 mx-auto max-w-4xl px-4 sm:-mt-10 sm:px-6 lg:-mt-16 lg:px-8 translate-y-5">
            <div className="hero-drift relative mx-auto w-full">
              {/* <div className="relative w-full overflow-hidden rounded-t-2xl border-x-[10px] border-t-[10px] border-slate-800 bg-white shadow-2xl shadow-emerald-900/20 sm:border-x-[12px] sm:border-t-[12px]"> */}
              {/* Camera notch */}
              {/* <div className="relative flex h-3 items-center justify-center bg-slate-800">
        <span className="h-1.5 w-1.5 rounded-full bg-slate-600" />
      </div> */}

              {/* Dashboard Screen Wrapper */}
              <div className="relative aspect-[2.5] w-full overflow-hidden">
                <img
                  src={Digintra_dashboard}
                  alt="DIGINTRA dashboard showing real-time SMS delivery, traffic summary, and message analytics"
                  className="absolute left-0 top-0 block h-auto w-full"
                  loading="lazy"
                />

                {/* --- SHIFTED BLUR/FADE TO BOTTOM ONLY --- */}
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 backdrop-blur-[2px] bg-[linear-gradient(to_bottom,transparent_0%,rgba(255,255,255,0.8)_65%,rgba(255,255,255,1)_100%)]"
                  style={{
                    maskImage: "linear-gradient(to bottom, transparent 0%, black 70%)",
                    WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 70%)"
                  }}
                />
              </div>
            </div>
          </div>
          {/* </div> */}
        </section>



        {/* Bulk SMS Solutions Section */}
        <div className="relative mt-24 md:mt-22 px-2 max-w-6xl mx-auto mb-12">

          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700">
              What We Offer
            </span>
            <h2
              className="mt-4 text-2xl font-semibold leading-tight text-gray-900 sm:text-3xl md:text-4xl"
              style={{ fontFamily: "'Poppins', 'sans-serif'" }}
            >
              Our Bulk SMS Solutions for Business Communication
            </h2>
            <div className="mx-auto mt-4 h-[3px] w-16 rounded-full bg-gradient-to-r from-emerald-500 to-green-500" />
          </div>

          <div className="relative mt-12 md:mt-16">
            <div className="absolute left-1/2 top-8 h-[220px] w-[80%] -translate-x-1/2 rounded-full bg-emerald-300/15 blur-[100px]" />
            <div className="relative z-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {smsSolutions.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.id}
                    className="group relative  flex flex-col items-center text-center flow-hidden rounded-2xl border border-emerald-100 bg-white/80 p-7  shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-200 hover:bg-white hover:shadow-xl hover:shadow-emerald-500/10"
                  >
                    {/* Accent glow that appears on hover */}
                    <div className="pointer-events-none absolute -top-8 -right-8 h-28 w-28 rounded-full bg-emerald-200/0 blur-2xl transition-all duration-500 group-hover:bg-emerald-200/50" />

                    <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-md shadow-emerald-500/25 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="relative mt-6 text-lg font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="relative mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                      {item.description}
                    </p>

                    {/* <span className="relative mt-5 inline-flex w-fit items-center gap-1 text-sm font-semibold text-emerald-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Learn more →
                </span> */}
                  </div>
                );
              })}
            </div>
          </div>
        </div>



        {/* </div> */}




        <div className="relative w-full overflow-hidden py-28">

          <style>{`
    @keyframes floatSlow {
      0%, 100% { transform: translate3d(0,0,0) rotate(0deg); }
      50% { transform: translate3d(0,-20px,0) rotate(3deg); }
    }
    @keyframes floatSlower {
      0%, 100% { transform: translate3d(0,0,0); }
      50% { transform: translate3d(0,-14px,0); }
    }
    @keyframes glowPulse {
      0%, 100% { opacity: 0.5; }
      50% { opacity: 1; }
    }
    @keyframes shimmerBorder {
      0% { background-position: 0% 50%; }
      100% { background-position: 200% 50%; }
    }
    .float-slow { animation: floatSlow 7s ease-in-out infinite; }
    .float-slower { animation: floatSlower 9s ease-in-out infinite; }
    .glow-pulse { animation: glowPulse 3s ease-in-out infinite; }
    .shimmer-border {
      background: linear-gradient(90deg, #14b8a6, #3b82f6, #a855f7, #14b8a6);
      background-size: 200% 100%;
      animation: shimmerBorder 6s linear infinite;
    }
  `}</style>

          {/* 🌈 Gradient Mesh Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50"></div>

          {/* Ambient glow blobs */}
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-teal-300/30 blur-[100px] glow-pulse"></div>
          <div className="absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-blue-300/30 blur-[110px] glow-pulse" style={{ animationDelay: "1.5s" }}></div>
          <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-purple-200/20 blur-[100px]"></div>

          {/* Dot grid texture */}
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, #0d9488 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* 🌊 Soft Wave Layer */}
          <svg className="absolute bottom-0 left-0 w-full opacity-50" viewBox="0 0 1440 320">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,224L48,197.3C96,171,192,117,288,122.7C384,128,480,192,576,202.7C672,213,768,171,864,165.3C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160V320H0Z"
            ></path>
          </svg>

          {/* CONTENT CONTAINER */}
          <div className="relative max-w-[1280px] mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-14">

            {/* LEFT TEXT */}
            <div className="flex-1 text-center lg:text-left">

              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-teal-300/60 bg-white/70 px-4 py-1.5 mb-5 shadow-sm backdrop-blur-md">
                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500">
                  <span className="absolute inset-0 rounded-full bg-teal-500 animate-ping"></span>
                </span>
                <span
                  className="text-xs font-semibold uppercase tracking-wider text-teal-700"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Insights & Updates
                </span>
              </div>

              <h2
                className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight"
                style={{ fontFamily: "'Familjen Grotesk', sans-serif" }}
              >
                <Blogtypingeffect messages={blogmessages} speed={50} />
              </h2>

              <p
                className="mt-5 max-w-xl mx-auto lg:mx-0 text-base md:text-lg text-slate-600"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Stay ahead with expert tips, product updates, and stories on scaling communication for modern businesses.
              </p>

              <Link to="/blogs#allblog">
                <button
                  className="mt-8 group relative px-8 py-3.5 bg-gradient-to-r from-teal-600 to-emerald-600
             text-white rounded-xl font-semibold text-lg
             shadow-xl shadow-teal-600/30 hover:shadow-2xl hover:shadow-teal-600/50
             transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03]
             flex items-center justify-center gap-2 mx-auto lg:mx-0 overflow-hidden
             ring-2 ring-teal-300/50 ring-offset-2 ring-offset-white"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></span>
                  <span className="relative">Explore Our Latest Blogs</span>
                  <ArrowRight size={18} className="relative transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </Link>
            </div>

            {/* RIGHT LAPTOP */}
            <div className="flex-1 flex justify-center">
              <div className="relative">

                {/* Floating badge - top left */}
                <div className="float-slow absolute -top-6 -left-6 md:-left-10 z-20 flex items-center gap-2 rounded-2xl bg-white/90 backdrop-blur-md px-4 py-2.5 shadow-xl border border-white/60">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 text-teal-600 text-sm font-bold">✓</span>
                  <div className="text-left">
                    <p className="text-xs font-semibold text-slate-800">New SMS Routes Added </p>
                    <p className="text-[10px] text-slate-500">More destinations. Better connectivity </p>
                  </div>
                </div>

                {/* Floating badge - bottom right */}
                <div className="float-slower absolute -bottom-4 -right-6 md:-right-10 z-20 flex items-center gap-2 rounded-2xl bg-white/90 backdrop-blur-md px-4 py-2.5 shadow-xl border border-white/60">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-sm">📈</span>
                  <div className="text-left">
                    <p className="text-xs font-semibold text-slate-800">Growing Reach</p>
                    <p className="text-[10px] text-slate-500">200+ Destinations  </p>
                  </div>
                </div>

                {/* Glow behind laptop */}
                <div className="absolute inset-0 scale-95 rounded-3xl bg-gradient-to-r from-teal-400/40 via-blue-400/40 to-purple-400/40 blur-2xl"></div>

                <div
                  ref={ref}
                  className={`relative w-[320px] md:w-[450px] h-[240px] md:h-[300px] rounded-2xl
                      bg-white/40 backdrop-blur-xl shadow-2xl border border-white/50
                      transition-all duration-700
                      ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                      `}
                >

                  {/* Animated Gradient Border */}
                  <div className="absolute -inset-[2px] rounded-2xl shimmer-border opacity-70 -z-10"></div>

                  {/* Screen */}
                  <div
                    className="absolute inset-[5px] rounded-xl flex flex-col justify-center items-center bg-cover bg-center overflow-hidden"
                    style={{ backgroundImage: `url(${messaging})` }}
                  >
                    {/* subtle top gradient for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/5"></div>
                  </div>

                  {/* Reflection sheen */}
                  <div className="absolute inset-[5px] rounded-xl bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"></div>

                  {/* Bottom Keyboard Part */}
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 
                          w-[75%] h-[24px] bg-gray-700 rounded-b-xl shadow-xl"></div>
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 
                          w-[85%] h-[6px] bg-gray-600 rounded-b-2xl shadow-md translate-y-[18px]"></div>
                </div>
              </div>
            </div>

          </div>
        </div>


        <section className="bg-[#F3F6FB] py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-[3rem] font-semibold tracking-tight text-gray-900 sm:text-4xl"
                style={{ fontFamily: "'Poppins', sans-serif" }}>
                Engage customers on their preferred channel with <span className="text-[#0E9F6E]">DIGINTRA</span>
              </h2>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {useCases.map((item) => (
                <div key={item.title} className="flex items-start gap-4 rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
                  <img src={item.image} alt={item.title} className="h-12 w-12 shrink-0 rounded-xl object-cover" />
                  <div>
                    <h3 className="font-bold text-[#0B1324]">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#55617A]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Engage customers on their preferred messaging platform*/}

        {/* <div className="relative w-full h-auto bg-white pb-16 pt-16 sm:pt-20 overflow-hidden">

  Soft background glow, consistent with hero
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[500px]
     bg-emerald-200/25 rounded-full blur-[120px]" />
  </div>

  <div className="w-[310px] md:w-[80%] h-auto mx-auto lg:w-[1080px]">

   
    <h3
      data-aos="fade-right"
      className="px-3 text-center font-bold text-[22px] leading-snug lg:text-[42px] lg:leading-[52px] text-gray-900"
      style={{ fontFamily: "'Familjen Grotesk', sans-serif" }}
    >
      Engage customers on their preferred messaging platform with{" "}
      <span className="text-emerald-600" style={{ fontFamily: "'Familjen Grotesk', sans-serif" }}>
        DIGINTRA
      </span>
      .
    </h3>

    <p className="mt-4 text-center text-gray-500 text-sm md:text-base max-w-xl mx-auto">
      One platform, every channel — built to keep your customers engaged wherever they are.
    </p>


  
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mt-[50px] mt-10 gap-x-6 gap-y-10 place-items-stretch">
      {[
        { title: '2 Way SMS', description: 'Send and receive messages instantly with two-way messaging—perfect for remote teams, staff, and customer engagement.', image: icons4 },
        { title: 'SMPP Connectivity', description: 'Easily bind our SMPP (v3.4) into your business and start sending your messaging traffic globally with high speed & reliability.', image: icons5 },
        { title: 'Real-time DLR Reports', description: 'Track delivery status of every SMS in real-time and optimize your bulk campaign performance instantly.', image: icons6 },
        { title: 'Mass Texting', description: 'Login to your account and start sending mass texts online across 800+ super network (MNOs) connections with ease.', image: icons7 },
        { title: 'Quick, Flexible & Scalable API', description: 'DIGINTRA provides the most flexible and easily adaptable SMS API gateway and immediate messaging from any application.', image: icons8 },
        { title: 'Schedule Campaign', description: 'Schedule your important SMS reminders, alerts, campaigns and notifications effortlessly to deliver at the perfect time.', image: icons9 },
      ].map((item, index) => (
        <div
          key={index}
          className="group relative flex h-full w-full max-w-[320px] flex-col items-center overflow-hidden rounded-[24px] border border-emerald-100/80 bg-gradient-to-br from-white via-emerald-50/80 to-emerald-100/70 p-7 text-center shadow-[0_12px_35px_-18px_rgba(15,23,42,0.28)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-emerald-200 hover:shadow-[0_18px_40px_-16px_rgba(16,185,129,0.32)]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.14),_transparent_55%)]" />
          <div className="absolute bottom-0 left-1/2 h-24 w-[80%] -translate-x-1/2 rounded-full bg-emerald-200/30 blur-3xl" />

          <div className="relative z-10 flex flex-col items-center">
            <div className="relative mb-5 flex h-[96px] w-[96px] items-center justify-center rounded-full bg-gradient-to-br from-emerald-600 to-emerald-500 ring-4 ring-emerald-100/80 shadow-lg shadow-emerald-600/20 transition-transform duration-300 group-hover:scale-105">
              <img
                src={item.image}
                alt={item.title}
                className="h-[62px] w-[62px] object-contain"
              />
            </div>

            <h2
              className="text-lg font-bold text-slate-900"
              style={{ fontFamily: "'Familjen Grotesk', sans-serif" }}
            >
              {item.title}
            </h2>

            <p
              className="mt-3 flex-grow text-sm leading-relaxed text-slate-600"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div> */}

        {/* Why Choose DIGINTRA For Your Venture?*/}
        <DeferredSection>
          <ChooseSection />
        </DeferredSection>

        {/* next content */}

        <DeferredSection>
          <TestimonialsSection />
        </DeferredSection>

        {/* next content */}
        <div className="relative w-full py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white">

          {/* Floating Orbs */}
          {/* <div className="absolute top-10 left-10 w-40 h-40 bg-indigo-300/30 rounded-full blur-3xl animate-pulse"></div>
  <div className="absolute bottom-10 right-10 w-52 h-52 bg-purple-300/30 rounded-full blur-3xl animate-pulse"></div> */}

          {/* Gradient Mesh Shape */}
          {/* <svg
    className="absolute top-0 right-0 opacity-20 w-[350px]"
    viewBox="0 0 200 200"
  >
    <path
      fill="#6366f1"
      d="M39.3,-71.8C53.3,-63.1,67.8,-54.6,74.1,-42.3C80.5,-29.9,78.7,-13.7,74.3,-0.3C69.8,13,62.8,26.1,54.2,38C45.6,49.9,35.4,60.7,22.4,70.1C9.3,79.6,-6.6,87.7,-22.8,87.6C-39.1,87.5,-55.7,79.3,-66.3,66C-76.9,52.7,-81.4,34.2,-82.4,17C-83.3,-0.2,-80.7,-16.1,-74.8,-30.1C-68.9,-44,-59.7,-56,-47.4,-65.1C-35.1,-74.3,-19.5,-80.5,-4.4,-75.5C10.6,-70.5,21.2,-54.6,39.3,-71.8Z"
      transform="translate(100 100)"
    />
  </svg> */}

          {/* MAIN CONTAINER */}
          <div className="relative max-w-7xl mx-auto px-6">

            {/* Heading */}
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h3
                className="text-3xl md:text-5xl font-bold text-gray-900 drop-shadow-sm"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Industries We Empower
              </h3>

              <p
                className="text-gray-700 mt-4 text-lg leading-relaxed"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Build tailored communication solutions for your industry using automated workflows.
                Engage customers at every touchpoint with intelligent, scalable messaging experiences.
              </p>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

              {cardofindustry.map((card, index) => (
                <div
                  key={index}
                  className="
            group bg-white/40 backdrop-blur-xl rounded-2xl shadow-xl 
            border border-white/50 overflow-hidden 
            transition-all duration-500 hover:scale-[1.05] hover:shadow-indigo-400/40
            hover:border-indigo-500/40
            "
                >
                  {/* Card Image */}
                  <div className="relative">
                    <img
                      src={card.image}
                      alt={card.heading}
                      className="w-full h-48 object-cover rounded-t-2xl"
                      loading="lazy"
                      decoding="async"
                    />

                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  </div>

                  {/* Card Text */}
                  <div className="p-4 text-center">
                    <h3
                      className="text-lg font-bold text-gray-800 group-hover:text-indigo-700 transition-colors"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {card.heading}
                    </h3>

                    <p
                      className="text-gray-600 text-sm mt-2 leading-relaxed"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {card.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>





        {/* next content */}



        <div className="relative w-full py-24 overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-100 to-blue-200">

          {/* Map background image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-60"
            style={{ backgroundImage: `url(${GlobalImg})` }}
          />

          {/* Soft wash so the map recedes and text stays readable */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-white/50" />

          <div className="absolute top-0 right-0 w-60 h-60 bg-[radial-gradient(circle,rgba(0,0,0,0.15)_1px,transparent_1px)] bg-[length:14px_14px] opacity-20"></div>

          {/* MAIN CONTENT */}
          <div className="relative max-w-4xl mx-auto px-6">

            {/* Glass Card */}
            <div className="bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/50">

              {/* Heading */}
              <h3
                className="text-center text-3xl md:text-5xl font-bold text-gray-800"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Get started with
                <span className="text-emerald-700 font-extrabold"> DIGINTRA </span>
                today!
              </h3>

              {/* Description */}
              <p
                className="mt-4 text-center text-gray-700 text-lg leading-relaxed"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Create an account to start your free trial instantly or chat with us for quick assistance.
              </p>

              {/* Buttons */}
              <div className="mt-10 flex flex-col md:flex-row justify-center gap-6">

                {/* Register Button */}
                <a href="https://sms-login.digintra.com/User/SignUp">
                  <button className="w-[230px] h-16 bg-gradient-to-r from-emerald-600 to-green-500 text-white font-bold rounded-xl shadow-xl
                             flex items-center justify-center gap-3 border-b-4 border-green-700
                             transition-all duration-300 hover:scale-110 hover:shadow-2xl">
                    <FaUserPlus className="h-6 w-6" />
                    Register Now
                  </button>
                </a>

                {/* WhatsApp Button */}
                <a href="https://api-wa.co/nVOl41">
                  <button className="w-[230px] h-16 bg-gradient-to-r from-emerald-600 to-green-500 text-white font-bold rounded-xl shadow-xl
                             flex items-center justify-center gap-3 border-b-4 border-green-800
                             transition-all duration-300 hover:scale-110 hover:shadow-2xl">
                    <FaWhatsapp className="h-7 w-7" />
                    Chat on WhatsApp
                  </button>
                </a>

              </div>
            </div>
          </div>

        </div>



        <DeferredSection>
          <SevenSection
            endnumber1={10}
            endnumber2={1000}
            endnumber3={225}
            endnumber={100}
          />
        </DeferredSection>

        {/*next content cum divider  */}

        <div className="bg-green-600 p-4">
          {/* Keyframe Definition injected directly */}
          <style>{`
    @keyframes marqueeReverse {
      0% { transform: translateX(0%); }
      100% { transform: translateX(-50%); }
    }
    .marquee-track {
      display: flex;
      width: max-content;
      animation: marqueeReverse 25s linear infinite;
    }
    .marquee-track:hover {
      animation-play-state: paused;
    }
  `}</style>

          <div className="relative w-full overflow-hidden py-4 bg-white shadow-2xl border-y border-emerald-400/30">

            {/* Glossy Overlay */}
            <div className="absolute inset-0 pointer-events-none z-10" />

            {/* Micro-Dot Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.15)_1px,transparent_1px)] [background-size:20px_20px] opacity-30 pointer-events-none" />

            {/* Edge Vignette */}
            <div className="absolute inset-0 z-20 pointer-events-none w-full" />

            {/* Marquee Track using custom CSS class */}
            <div className="marquee-track whitespace-nowrap">

              {/* First Text Block */}
              <div className="flex items-center shrink-0">
                <p
                  className="text-lg md:text-2xl font-black tracking-wider uppercase text-black drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] pr-12"
                  style={{ fontFamily: "'Familjen Grotesk', sans-serif" }}
                >
                  TRANSFORM YOUR COMMUNICATION STRATEGY WITH OUR ALL-IN-ONE MESSAGING AND PROMOTION SOLUTION.
                </p>
              </div>

              {/* Duplicate Text Block for Infinite Loop */}
              <div className="flex items-center shrink-0">
                <p
                  className="text-lg md:text-2xl font-black tracking-wider uppercase text-black drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] pr-12"
                  style={{ fontFamily: "'Familjen Grotesk', sans-serif" }}
                >
                  TRANSFORM YOUR COMMUNICATION STRATEGY WITH OUR ALL-IN-ONE MESSAGING AND PROMOTION SOLUTION.
                </p>
              </div>

            </div>

          </div>
        </div>
        {/* 
</div> */}

        {/* Second content */}
        <DeferredSection>
          <ClientSection />
        </DeferredSection>
        {/* <Footer /> */}
        <DeferredSection>
          <FooterSection />
        </DeferredSection>
      </>
    </div>
  );
}