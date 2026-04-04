import React from "react";
import { useRef ,useState } from "react";
import { Link } from "react-router-dom";
import { FaInbox, FaSyncAlt, FaBullhorn, FaShippingFast } from "react-icons/fa";
import Seven from "../components/Seven";
import Blogtypingeffect from "../components/Blogtypingeffect";
import Client from "../components/Client";
import Card from "../components/Card";
import Choose from "../components/Choose";
import TypingEffect from "../components/TypingEffect";
import Products from "../components/Products";
import "./Home.css";
import yourImage from '../assets/yourImage.png'

import { useInView } from 'react-intersection-observer';
import Homeslider from "../components/Homeslider";
import Testimonials from "../components/Testimonials";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { FaWhatsapp, FaCog, FaUsers, FaRegChartBar, FaShieldAlt, FaEnvelope, FaCloud, FaComments,FaBell, FaSync,FaUserPlus} from 'react-icons/fa';
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

import blogCardbg from "../assets/OAICFK0.jpg";
import pricescreenshot from "../assets/Screenshot 2024-08-30 104623.webp";
import emailcamp from "../assets/email.jpg";
import smtpserver from "../assets/smtp-server.jpg";
import voicebroadcast from "../assets/voice-broadcast.jpg";
import {} from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import Footer from "../components/Footer";
import ChildCompany from "../components/ChildCompany";
import retail from '../assets/Retail.webp'
import banking from '../assets/Banking.webp'
import health from '../assets/Healthcare.webp'
import government from '../assets/SMES.webp'
import education from '../assets/Education.webp'
import transport from '../assets/Logistics.webp';
import travel from '../assets/Hospitality.jpg'
import media from '../assets/Media.webp'
import HomepageImage from '../assets/digintra.webp';




export default function Home() {
  const messages = [
    "Communication Suite",
  "Engagement Solutions",
  "Automation Tools",
  "Omnichannel Suite"
  ];
  const blogmessages = [
   "Solutions for Businesses Worldwide.",
    "Solutions for Seamless Connectivity.",
    "to Accelerate Your Business Growth.",
  ];
  const dummyData = [
    {
      id: 1,
      title: "Enterprise SMS",
      description:
        "Scale your messaging with our secure and reliable Enterprise SMS solutions, crafted for large organizations needing high-volume messaging.",
      buttonLink: "/enterprise-messaging",
      icon: FaInbox,
    },
    {
      id: 2,
      title: "Transactional SMS",
      description: `Keep your customers informed with real-time updates
                      through our reliable Transactional SMS service, ensuring
                      timely and effective communication.`,
      buttonLink: "/transactional-sms",
      icon: FaSyncAlt,
    },
    {
      id: 3,
      title: "Wholesale SMS",
      description: `Access high-volume messaging with our Wholesale SMS
                      service, designed for resellers and large enterprises
                      seeking cost-effective solutions.`,
      buttonLink: "/wholesale-messaging",
      icon: FaShippingFast,
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

  // const { ref, inView } = useInView({
  //   triggerOnce: true,
  //   threshold: 1,
  // });


//  const { ref: refm, inView: inViewm } = useInView({
//     triggerOnce: true,
//     threshold: 1,
//   }); 
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




      <div className="relative overflow-hidden bg-gradient-to-b from-white via-green-300 to-green-900">
<div className="absolute top-[400px] left-10 w-14 h-14 bg-white/60 rounded-full flex items-center justify-center animate-[float_6s_ease-in-out_infinite] z-10">
💬
</div>


<div className="absolute top-40 right-16 w-12 h-12 bg-white/60 rounded-full flex items-center justify-center animate-[floatReverse_7s_ease-in-out_infinite] z-10 ">
✨
</div>


<div className="absolute bottom-20 left-1/2 w-16 h-16 bg-white/60 rounded-full flex items-center justify-center animate-[float_8s_ease-in-out_infinite] z-10 ">
🌟
</div>


{/* Hero Content */}
<div className="py-[8rem] md:py-[10rem] backdrop-blur-md flex justify-center flex-col items-center">
<div className="flex items-center justify-center">
<div
className="
    md:text-5xl text-2xl font-bold text-center md:leading-[80px]
    font-mono p-4
    bg-gradient-to-r from-green-400 to-blue-900 bg-clip-text text-transparent
    
  "
style={{ fontFamily: "'Familjen Grotesk', 'sans-serif'" }}
>
<TypingEffect messages={messages} speed={50} />
</div>
</div>


<p
className="px-4 text-base md:text-lg text-center mt-0 md:mt-0 w-[95%] md:w-[60%] leading-[28px] md:leading-[28px] text-gray-900"
style={{ fontFamily: "'Familjen Grotesk', 'sans-serif'" }}
>
Connect with your audience across the globe using our reliable bulk SMS solutions,
delivering messages quickly and efficiently.
</p>


<div className="flex flex-col md:flex-row gap-4 my-9 ">
<a href="https://sms-login.digintra.com/User/SignUp" className="w-full md:w-auto">
<button className=" w-full bg-green-700 text-white font-semibold py-3 px-5 rounded-lg shadow-lg hover:bg-green-900 border border-white transition duration-300 ease-in-out">
Start Free Trial
</button>
</a>


<Link to="/contact-us" className="w-full md:w-auto">
<button className=" w-full bg-green-700 text-white font-semibold py-3 px-5 rounded-lg shadow-lg hover:bg-green-900 border border-white transition duration-300 ease-in-out">
Contact Us
</button>
</Link>
</div>
</div>


{/* Custom Animations */}
<style>
{`
@keyframes float {
0%, 100% { transform: translateY(0); }
50% { transform: translateY(-20px); }
}
@keyframes floatReverse {
0%, 100% { transform: translateY(0); }
50% { transform: translateY(20px); }
}
@keyframes spin-slow {
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }
}
`}
</style>
</div>

        {/* child company */}
        {/* <ChildCompany/> */}
        {/* next content */}


        



        <div
          className=" relative pb-10 pt-5 px-4 sm:px-8 lg:px-12 bg-cover bg-center flex items-center justify-center "
          style={{ backgroundImage: `url(${icons11})` }}
        >
          <div className="absolute inset-0 bg-white opacity-60"></div>

          <div className="max-w-7xl w-full mx-auto md:mt-20 z-10">
            <div className=" w-[90%] text-center mx-auto">
              <h1 className="text-lg md:text-5xl font-semibold text-gray-900 sm:text-5xl leading-[30px] md:leading-[54px]" style={{fontFamily:"'Familjen Grotesk','sans-serif'"}}>
                Transform Your Communication with Our Premium Solutions
              </h1>
              <p className="mt-4 text-lg md:text-lg text-gray-700 max-w-2xl mx-auto">
                Explore our suite of advanced services designed to streamline
                and elevate your business communications.
              </p>
            </div>

            <div className=" mt-6 md:mt-16 ">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-12 md:gap-24 p-8">
                {dummyData.map((item) => (
                  <Card
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    buttonLink={item.buttonLink}
                    Icon={item.icon}
                  />
                ))}
              </div>
            </div>

            <div className="mt-24 text-center">
              <h2 className="text-4xl font-bold text-gray-900" style={{fontFamily:"'Familjen Grotesk','sans-serif'"}}>
              Cloud Services Designed for Better Results
              </h2>
              <p className="mt-4 text-md text-gray-700 max-w-xl mx-auto">
                Maximize your reach with our comprehensive range of promotion
                channels tailored to meet your business needs.
              </p>
              <div className="mt-4 md:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 p-2 md:p-0">
                {/* Email Campaigns */}
                <div className="group relative bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl border border-white/20 transition-all duration-500 hover:scale-[1.04] hover:shadow-2xl hover:shadow-blue-500/20">

  {/* Glow Gradient Border */}
  <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
    <div className="absolute inset-0 blur-xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 opacity-50"></div>
  </div>

  {/* Shine Sweep */}
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                  translate-x-[-150%] group-hover:translate-x-[150%] 
                  transition-all duration-[1200ms] ease-out"></div>

  {/* Card Content */}
  <div className="relative z-10">

    {/* Image */}
    <img
      src={emailcamp}
      alt="Email Campaigns"
      className="w-full h-48 object-cover rounded-t-2xl"
    />

    {/* Text Content */}
    <div className="p-8 bg-gradient-to-b from-white via-gray-50 to-gray-100">
      <h3 className="text-2xl font-bold text-gray-900" style={{fontFamily:"'Familjen Grotesk','sans-serif'"}}>Email Campaigns</h3>

      <p className="mt-2 text-gray-700 leading-relaxed" style={{fontFamily:"'Familjen Grotesk','sans-serif'"}}>
        Design and manage high-impact email campaigns with our intuitive tools,
        driving engagement and conversions effectively.
      </p>
    </div>

    {/* Button */}
    <Link to="/promotional-email">
      <div className="bg-gray-100 py-4 text-center text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300" style={{fontFamily:"'Familjen Grotesk','sans-serif'"}}>
        Learn More
      </div>
    </Link>
  </div>
</div>

                {/* SMTP Server */}

            <div className="group relative rounded-2xl overflow-hidden bg-white/10 backdrop-blur-md shadow-xl border border-white/20 transition-all duration-500 hover:scale-[1.04] hover:shadow-purple-500/30">

  {/* Gradient Glow Border */}
  <div className="absolute inset-0 rounded-2xl p-[2px] 
                  bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 
                  opacity-70 group-hover:opacity-100 transition-opacity duration-500">
    <div className="absolute inset-0 blur-xl 
                    bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 
                    opacity-50"></div>
  </div>

  {/* Shine Sweep */}
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
                  translate-x-[-150%] group-hover:translate-x-[150%]
                  transition-all duration-[1200ms] ease-out pointer-events-none"></div>

  {/* Card Body */}
  <div className="relative z-10">

    {/* Image */}
    <img
      src={smtpserver}
      alt="SMTP Server"
      className="w-full h-48 object-cover rounded-t-2xl"
    />

    {/* Content */}
    <div className="p-8 bg-gradient-to-b from-white via-gray-50 to-gray-100">
      <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{fontFamily:"'Familjen Grotesk','sans-serif'"}}>
        SMTP Server
      </h3>
      <p className="text-gray-700 leading-relaxed" style={{fontFamily:"'Familjen Grotesk','sans-serif'"}}>
        Ensure reliable email delivery with our robust SMTP Server solutions, 
        tailored for both transactional and marketing emails.
      </p>
    </div>

    {/* Button */}
    <Link to="/smtp-server">
      <div className="bg-gray-100 p-4 text-center text-blue-600 
                      hover:text-blue-800 font-semibold transition-colors 
                      duration-300 cursor-pointer" style={{fontFamily:"'Familjen Grotesk','sans-serif'"}}>
        Learn More
      </div>
    </Link>

  </div>
</div>



                {/* Voice Broadcast */}

               <div className="group relative rounded-2xl overflow-hidden bg-white/10 backdrop-blur-md 
                shadow-xl border border-white/20 transition-all duration-500 
                hover:scale-[1.05] hover:shadow-purple-500/30">

  {/* Neon Gradient Border */}
  <div className="absolute inset-0 rounded-2xl p-[2px] 
                  bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500
                  opacity-70 group-hover:opacity-100 transition-opacity duration-500">
    <div className="absolute inset-0 blur-xl 
                    bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 
                    opacity-50"></div>
  </div>

  {/* Shine Sweep Animation */}
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                  translate-x-[-150%] group-hover:translate-x-[150%] 
                  transition-all duration-[1200ms] ease-out pointer-events-none"></div>

  {/* Sound Wave Glow Background */}
  <div className="absolute inset-0 opacity-10 bg-[url('https://i.imgur.com/nH6QTdU.png')] 
                  bg-cover bg-center mix-blend-soft-light"></div>

  {/* Card Body */}
  <div className="relative z-10">

    {/* Image */}
    <img
      src={voicebroadcast}
      alt="Voice Broadcast"
      className="w-full h-48 object-cover rounded-t-2xl"
    />

    {/* Text Content */}
    <div className="p-8 bg-gradient-to-b from-white via-gray-50 to-gray-100">
      <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{fontFamily:"'Familjen Grotesk','sans-serif'"}}>
        Voice Broadcast
      </h3>
      <p className="text-gray-700 text-base" style={{fontFamily:"'Familjen Grotesk','sans-serif'"}}>
        Reach your audience effectively with automated voice calls for important
        announcements, reminders, and more.
      </p>
    </div>

    {/* Button */}
    <Link to="/voice-broadcast">
      <div className="bg-gray-100 p-4 text-center text-blue-600 
                      hover:text-blue-800 font-semibold transition-colors duration-300 cursor-pointer" style={{fontFamily:"'Familjen Grotesk','sans-serif'"}}>
        Learn More
      </div>
    </Link>
  </div>
</div>

              </div>
            </div>

            {/* next content */}

            <div className="flex flex-col md:flex-row md:px-8 gap-8">
              <div className="mt-24 text-center">
                <h2 className="text-3xl font-bold text-gray-900" style={{fontFamily:"'Familjen Grotesk','sans-serif'"}}>
                  SMS GATEWAY SOFTWARE
                </h2>
                <p className="mt-4 text-lg text-gray-700 max-w-xl mx-auto" style={{fontFamily:"'Familjen Grotesk','sans-serif'"}}>
                  Elevate your communication with our SMS Gateway Software,
                  providing reliable and efficient messaging tailored to your
                  needs.
                </p>
                <div className="mt-12 flex justify-center w-full">

  <div className="w-[95%] md:w-[80%] lg:w-[100%] 
                  bg-white/70 backdrop-blur-lg rounded-2xl 
                  shadow-xl border border-gray-200 
                  transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]
                  overflow-hidden">

    {/* Top Gradient Line */}
    <div className="w-full h-[4px] bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500"></div>

    <div className="px-8 py-10">

      {/* Title */}
      <h3 className="text-2xl font-bold text-gray-900 text-center"
          style={{fontFamily:"'Familjen Grotesk','sans-serif'"}}>
        SMS Load Balancer
      </h3>

      {/* Description */}
      <p className="mt-4 text-gray-700 text-center leading-relaxed"
         style={{fontFamily:"'Familjen Grotesk','sans-serif'"}}>
        A powerful SMS distribution engine that intelligently balances SMS traffic 
        across gateways to reduce congestion and increase delivery speed — 
        ensuring reliable performance even during high-volume peaks.
      </p>

      {/* Icon Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 mt-10 place-items-center">

        {[
          { icon: <FaEnvelope />, label: "messages" },
          { icon: <FaComments />, label: "comments" },
          { icon: <FaBell />, label: "alerts" },
          { icon: <FaSync />, label: "sync" },
          { icon: <MdMessage />, label: "chat" },
          { icon: <FaCloud />, label: "cloud" },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center group">

            {/* Icon circle */}
            <div className="p-3 rounded-xl 
                            bg-gradient-to-tr from-purple-500 to-blue-500 
                            text-white shadow-md 
                            transition-all duration-300 group-hover:scale-110">
              <span className="text-xl">{item.icon}</span>
            </div>

            {/* Label */}
            <p className="mt-2 text-sm text-gray-700 group-hover:text-gray-900 
                          transition-all duration-300 capitalize">
              {item.label}
            </p>

          </div>
        ))}

      </div>

      {/* Button */}
      <div className="mt-10 text-center">
        <a
          href="#"
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 
                     text-white rounded-xl font-semibold 
                     transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Learn More
        </a>
      </div>

    </div>
  </div>
</div>

              </div>
              <div className="mt-24 text-center">
                <h2 className="text-3xl font-bold text-gray-900">
                  TRENDING CHANNEL
                </h2>
                <p className="mt-4 text-lg text-gray-700 max-w-xl mx-auto">
                  Stay ahead with our Trending Channel, delivering the latest
                  insights and updates to keep your business at the forefront.
                </p>
                <div className="mt-12 flex justify-center w-full">

  <div className="w-[95%] md:w-[80%] lg:w-[100%] 
                  bg-white/70 backdrop-blur-lg rounded-2xl 
                  shadow-xl border border-gray-200 
                  transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]
                  overflow-hidden">

    {/* Top Gradient Line (WhatsApp Green Theme) */}
    <div className="w-full h-[4px] bg-gradient-to-r from-green-500 via-green-600 to-green-700"></div>

    <div className="px-8 py-10">

      {/* Title */}
      <h3 className="text-2xl font-bold text-gray-900 text-center"
      >
        WhatsApp Business API
      </h3>

      {/* Description */}
      <p className="mt-4 text-gray-700 text-center leading-relaxed">
        The WhatsApp Business API helps businesses connect with customers in 
        real-time using automated interactions, notifications, and seamless support.
        Improve engagement, boost conversions, and enhance customer satisfaction.
      </p>

      {/* Icon Grid */}
      {/* Icon Grid - Fixed-size icons, perfectly aligned */}
<div className="w-full flex justify-center py-6">
  <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 place-items-center w-full max-w-3xl">
    {[
      { IconComp: FaWhatsapp, label: "Whatsapp API" },
      { IconComp: FaCog, label: "Settings" },
      { IconComp: FaUsers, label: "Broad Users" },
      { IconComp: FaRegChartBar, label: "High Growth" },
      { IconComp: FaShieldAlt, label: "Secure" },
      { IconComp: FaCloud, label: "Cloud" },
    ].map(({ IconComp, label }, i) => (
      <div key={i} className="flex flex-col items-center">
        {/* fixed square icon box */}
        <div className="w-12 h-12 flex items-center justify-center rounded-lg
                        bg-gradient-to-r from-green-400 to-green-600 text-white
                        shadow-xl transition-transform duration-300 group-hover:scale-110">
          <IconComp className="text-lg sm:text-xl" />
        </div>

        {/* label */}
        <p className="mt-2 text-sm text-gray-700 text-center leading-tight">
          {label}
        </p>
      </div>
    ))}
  </div>
</div>


      {/* Button */}
      <div className="mt-10 text-center">
        <Link
          to="/whatsapp-business-api"
          className="px-6 py-2 bg-green-600 hover:bg-green-700 
                     text-white rounded-xl font-semibold 
                     transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Learn More
        </Link>
      </div>

    </div>
  </div>
</div>

              </div>
            </div>
          </div>
        </div>

        {/* third content */}
        {/* <Products /> */}

        {/* third */}
        {/* <div className="w-auto  h-auto bg-white py-8 ">
          <h1
            data-aos="fade-right"
            className="text-2xl font-semibold text-center pt-5 lg:text-3xl"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Our <span className="text-blue-600">Resources</span>
          </h1>
          <div className="w-[100px] h-[2px] bg-blue-700 mx-auto mt-2"></div>
          <div className="lg:w-[1140px] lg:flex lg:mx-auto">
            <div
              data-aos="zoom-in-up"
              style={{ backgroundImage: `url(${blogCardbg})` }}
              className="w-[310px] h-auto pb-2  lg:pb-6   shadow-lg shadow-gray-400 mx-auto mt-7 rounded-lg lg:w-[440px] lg:mt-12"
            >
              <h1 className="flex  px-3 space-x-2">
                <span
                  className="text-[80px] text-white font-semibold "
                  style={{
                    textShadow: "2px 2px 5px gray",
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  01
                </span>
                <span
                  className="text-[30px] pt-[50px] font-semibold"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Blogs
                </span>
              </h1>
              <div className="w-[150px] h-[2px] bg-blue-600 ml-3"></div>

              <div className="w-[280px] h-[190px]  mx-auto  mt-6">
                <img
                  src={icons1}
                  className=" h-[210px] w-[210px] mx-auto lg:h-[220px] rounded-full"
                  alt="Messaging Services, Email Services, Social Media & Branding Services"
                />
              </div>

              <Link to="/blog">
                <button className=" transition-transform border-b-2 border-blue-600 ml-2 lg:ml-[125px] lg:mt-10  my-5 bg-gradient-to-tr from-yellow-600 to-green-600 w-[200px] h-14 rounded-full shadow-md shadow-yellow-400 hover:-translate-y-2 text-white font-semibold pl-10 py-4 flex">
                  Read More
                  <span>
                    <img
                      src={icons2}
                      alt="Messaging Services, Email Services, Social Media & Branding Services"
                      className="h-7 w-10"
                    />
                  </span>
                </button>
              </Link>
            </div>

            <div
              data-aos="zoom-in-up"
              style={{ backgroundImage: `url(${blogCardbg})` }}
              className="w-[310px] h-auto pb-2 lg:pb-6 shadow-lg shadow-gray-400  ring-offset-8 mx-auto mt-7 rounded-lg lg:w-[440px] lg:mt-[50px]"
            >
              <h1 className="flex  px-3 space-x-2">
                <span
                  className="text-[80px] text-white font-semibold "
                  style={{
                    textShadow: "2px 2px 5px gray",
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  02
                </span>
                <span
                  className="text-[30px] pt-[50px] font-semibold"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Use Cases
                </span>
              </h1>
              <div className="w-[150px] h-[2px] bg-blue-600 ml-3"></div>

              <div className="w-[280px] h-[190px] lg:h-[190px] mx-auto  mt-6">
                <img
                  src={icons3}
                  alt="Messaging Services, Email Services, Social Media & Branding Services"
                  className=" h-[210px] mx-auto lg:h-[220px] rounded-full"
                />
              </div>

              <button className="transition-transform border-b-2 my-5 border-blue-600 ml-2 lg:ml-[125px] lg:mt-10 bg-gradient-to-tr from-yellow-600 to-green-600 w-[200px] h-14 rounded-full shadow-md shadow-yellow-400 hover:-translate-y-2 text-white font-semibold pl-10 py-4 flex">
                Read More
                <span>
                  <img
                    src={icons2}
                    alt="Messaging Services, Email Services, Social Media & Branding Services"
                    className="h-7 w-10"
                  />
                </span>
              </button>
            </div>
          </div>
        </div> */}


       <div className="relative w-full overflow-hidden py-24">

  {/* 🌈 Gradient Mesh Background */}
  <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-teal-100 to-blue-50 opacity-90"></div>

  {/* 🟣 Floating Blobs */}
  <div className="absolute top-10 left-10 w-48 h-48 bg-green-300/30 rounded-full blur-3xl animate-pulse"></div>
  <div className="absolute bottom-10 right-16 w-56 h-56 bg-blue-300/30 rounded-full blur-3xl animate-pulse"></div>

  {/* 🔷 Abstract SVG Shape */}
  <svg className="absolute top-0 right-0 opacity-[0.18] w-[350px]" viewBox="0 0 200 200">
    <path
      fill="#0ea5e9"
      d="M39.3,-71.8C53.3,-63.1,67.8,-54.6,74.1,-42.3C80.5,-29.9,78.7,-13.7,74.3,-0.3C69.8,13,62.8,26.1,54.2,38C45.6,49.9,35.4,60.7,22.4,70.1C9.3,79.6,-6.6,87.7,-22.8,87.6C-39.1,87.5,-55.7,79.3,-66.3,66C-76.9,52.7,-81.4,34.2,-82.4,17C-83.3,-0.2,-80.7,-16.1,-74.8,-30.1C-68.9,-44,-59.7,-56,-47.4,-65.1C-35.1,-74.3,-19.5,-80.5,-4.4,-75.5C10.6,-70.5,21.2,-54.6,39.3,-71.8Z"
      transform="translate(100 100)"
    />
  </svg>

  {/* 🌊 Soft Wave Layer */}
  <svg className="absolute bottom-0 left-0 w-full opacity-40" viewBox="0 0 1440 320">
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
      <h2
        className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight"
        style={{ fontFamily: "'Familjen Grotesk', sans-serif" }}
      >
        <Blogtypingeffect messages={blogmessages} speed={50} />
      </h2>

      <button
        className="mt-8 px-8 py-3 bg-teal-600 hover:bg-teal-700 
                   text-white rounded-xl font-semibold text-lg 
                   shadow-xl hover:shadow-teal-600/50 transition-all duration-300 
                   hover:scale-[1.07]"
      >
        Explore Our Latest Blogs
      </button>
    </div>

    {/* RIGHT LAPTOP */}
    <div className="flex-1 flex justify-center">
      <div
        ref={ref}
        className={`relative w-[320px] md:w-[450px] h-[240px] md:h-[300px] rounded-2xl
                    bg-white/40 backdrop-blur-xl shadow-2xl border border-white/50
                    transition-all duration-700
                    ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                    `}
      >

        {/* Gradient Border */}
        <div className="absolute inset-0 rounded-2xl p-[2px] 
                        bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 opacity-50"></div>

        {/* Screen */}
       <div
  className="absolute inset-[5px] rounded-xl flex flex-col justify-center items-center bg-cover bg-center"
  style={{ backgroundImage: `url(${yourImage})` }}
>
  <h3 className="text-white font-semibold text-lg drop-shadow-lg">
    
  </h3>

  <TbHandClick className="text-white text-5xl mt-4 animate-pulse drop-shadow-lg" />
</div>


        {/* Bottom Keyboard Part */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 
                        w-[75%] h-[24px] bg-gray-700 rounded-b-xl shadow-xl"></div>
      </div>
    </div>

  </div>
</div>


        {/* next content */}

        <div className="w-full h-auto bg-gradient-to-tr from-orange-100 to-green-50 pb-8">
          <div className="w-[310px] md:w-[80%] h-auto mx-auto pt-[100px] lg:w-[1080px]">
            <h3
              data-aos="fade-right"
              className="text-center  px-3 font-[700] lg:text-[40px] text-[21px]"
              style={{ fontFamily: "'Familjen Grotesk', sans-serif" }}
            >
              Engage customers on their preferred messaging platform with <span className="text-[#0053b7] text-2xl md:text-5xl" style={{ fontFamily: "'Familjen Grotesk', sans-serif" }}>DIGINTRA</span>.
            </h3>
            <div className="lg:w-[800px] w-[200px] my-7  h-[3px] mx-auto bg-blue-600"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mt-[60px] gap-x-6 gap-y-12 place-items-center">
              {/* first card */}

              {/* <div
                data-aos="zoom-in-up"
                className="w-[300px] shadow-lg border-2 bg-white rounded-lg py-2 mt-5 shadow-gray-300  h-auto mx-auto"
              >
                <div className="w-[280px] flex h-auto mx-auto">
                  <img
                    src={icons4}
                    alt="Messaging Services, Email Services, Social Media & Branding Services"
                    className="w-[130px] h-[130px] rounded-full mx-auto "
                  />
                </div>
                <div className="mt-7 space-y-3">
                  <h2 className="text-center text-[16px] py-1 text-[#ffab03] lg:text-[21px] font-[500]" style={{fontFamily:"'Montserrat', sans-serif"}}>
                    2 Way SMS
                  </h2>
                  <p className="text-center text-[13px] lg:text-[16px] font-medium px-2" style={{fontFamily:"'Poppins', sans-serif"}}>
                    Send and receive messages with our 2 Way Messaging. It
                    isperfect for remote communication with staff and customers.
                  </p>
                </div>
              </div> */}

              <div className="relative group w-[300px] md:w-[320px] rounded-2xl overflow-hidden shadow-2xl 
                bg-gradient-to-br from-purple-600  to-teal-400 
                transition-all duration-700 hover:scale-[1.06] hover:shadow-blue-500/50">

  {/* Glass Layer */}
  <div className="absolute inset-0 bg-white/20 backdrop-blur-xl rounded-2xl"></div>

  {/* Gradient Glow Border */}
  <div className="absolute inset-0 p-[2px] rounded-2xl 
                  bg-gradient-to-br  from-blue-500 to-green-400 
                  opacity-60 group-hover:opacity-100 transition-all duration-700 blur-[1px]"></div>

  {/* Floating Waves */}
  <div className="absolute bottom-0 left-0 w-full">
    <div className="wave-new"></div>
    <div className="wave-new"></div>
    <div className="wave-new"></div>
  </div>

  {/* CONTENT */}
  <div className="relative z-10 p-6 flex flex-col items-center text-center">

    <img
      src={icons4}
      alt="Messaging Services"
      className="w-[110px] h-[110px] rounded-full shadow-xl border-4 border-white/40"
    />

    <h2 className="mt-4 text-2xl font-bold text-white drop-shadow-lg"
        style={{ fontFamily: "'Familjen Grotesk', sans-serif" }}>
      2 Way SMS
    </h2>

    <p className="mt-3 text-white/90 text-sm leading-relaxed"
       style={{ fontFamily: "'Familjen Grotesk', sans-serif" }}>
      Send and receive messages instantly with two-way messaging—perfect for
      remote teams, staff, and customer engagement.
    </p>

  </div>
</div>


              {/* second card */}

              {/* <div
                data-aos="zoom-in-up"
                className="w-[300px] border-2 bg-white rounded-lg shadow-lg py-2 mt-5 shadow-gray-300  h-auto mx-auto"
              >
                <div className="w-[280px] flex h-auto mx-auto">
                  <img
                    src={icons5}
                    alt="Messaging Services, Email Services, Social Media & Branding Services"
                    className="w-[130px] h-[130px] rounded-full mx-auto "
                  />
                </div>
                <div className="mt-7 space-y-3">
                  <h2
                    className="text-center text-[16px] text-[#ffab03] lg:text-[21px] font-[500]"
                    style={{ fontFamily: "'Montserrat',sans-serif" }}
                  >
                    SMPP Connectivity
                  </h2>
                  <p
                    className="text-center text-[13px] lg:text-[16px] font-medium px-2"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Easily bind our SMPP (v3.4) into your business and start
                    sending your traffic globally.
                  </p>
                </div>
              </div> */}

              <div className="relative group w-[300px] md:w-[320px] rounded-2xl overflow-hidden shadow-2xl 
                bg-gradient-to-br from-purple-600 via-blue-500 to-teal-400 
                transition-all duration-700 hover:scale-[1.06] hover:shadow-blue-500/50">

  {/* Glass Layer */}
  <div className="absolute inset-0 bg-white/20 backdrop-blur-xl rounded-2xl"></div>

  {/* Gradient Glow Border */}
  <div className="absolute inset-0 p-[2px] rounded-2xl 
                  bg-gradient-to-br  from-blue-500 to-green-400 
                  opacity-60 group-hover:opacity-100 transition-all duration-700 blur-[1px]"></div>

  {/* Floating Waves */}
  <div className="absolute bottom-0 left-0 w-full">
    <div className="wave-new"></div>
    <div className="wave-new"></div>
    <div className="wave-new"></div>
  </div>

  {/* CONTENT */}
  <div className="relative z-10 p-6 flex flex-col items-center text-center">

    <img
      src={icons5}
      alt="SMPP Connectivity"
      className="w-[110px] h-[110px] rounded-full shadow-xl border-4 border-white/40"
    />

    <h2 className="mt-4 text-2xl font-bold text-white drop-shadow-lg"
        style={{ fontFamily: "'Montserrat', sans-serif" }}>
      SMPP Connectivity
    </h2>

    <p className="mt-3 text-white/90 text-sm leading-relaxed"
       style={{ fontFamily: "'Poppins', sans-serif" }}>
      Easily bind our SMPP (v3.4) into your business and start sending your 
      messaging traffic globally with high speed & reliability.
    </p>

  </div>
</div>


              {/* third card */}

              {/* <div
                data-aos="zoom-in-up"
                className="w-[300px] border-2 bg-white rounded-lg shadow-lg py-2 mt-5 shadow-gray-300  h-auto mx-auto"
              >
                <div className="w-[280px] flex h-auto mx-auto">
                  <img
                    src={icons6}
                    alt="Messaging Services, Email Services, Social Media & Branding Services"
                    className="w-[130px] h-[130px] rounded-full mx-auto "
                  />
                </div>
                <div className="mt-7 space-y-3">
                  <h2
                    className="text-center text-[16px] text-[#ffab03] lg:text-[21px] font-[500]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Real-time DLR Reports
                  </h2>
                  <p
                    className="text-center text-[13px] lg:text-[16px] font-medium px-2"
                    style={{ fontFamily: "'Poppins',sans-serif" }}
                  >
                    Track delivery status of every SMS sent in real-time to
                    measure and optimize the performance of your bulk SMS
                    campaigns.
                  </p>
                </div>
              </div> */}

              <div className="relative group w-[300px] md:w-[320px] rounded-2xl overflow-hidden shadow-2xl 
                bg-gradient-to-br from-purple-600 via-blue-500 to-teal-400 
                transition-all duration-700 hover:scale-[1.06] hover:shadow-blue-500/50">

  {/* Glass Layer */}
  <div className="absolute inset-0 bg-white/20 backdrop-blur-xl rounded-2xl"></div>

  {/* Gradient Glow Border */}
  <div className="absolute inset-0 p-[2px] rounded-2xl 
                  bg-gradient-to-br from-blue-500 to-green-400 
                  opacity-60 group-hover:opacity-100 transition-all duration-700 blur-[1px]"></div>

  {/* Floating Waves */}
  <div className="absolute bottom-0 left-0 w-full">
    <div className="wave-new"></div>
    <div className="wave-new"></div>
    <div className="wave-new"></div>
  </div>

  {/* CONTENT */}
  <div className="relative z-10 p-6 flex flex-col items-center text-center">

    <img
      src={icons6}
      alt="Real-time DLR Reports"
      className="w-[110px] h-[110px] rounded-full shadow-xl border-4 border-white/40"
    />

    <h2 className="mt-4 text-2xl font-bold text-white drop-shadow-lg"
        style={{ fontFamily: "'Montserrat', sans-serif" }}>
      Real-time DLR Reports
    </h2>

    <p className="mt-3 text-white/90 text-sm leading-relaxed"
       style={{ fontFamily: "'Poppins', sans-serif" }}>
      Track delivery status of every SMS in real-time and optimize 
      your bulk campaign performance instantly.
    </p>

  </div>
</div>


              {/* fourth card */}

              {/* <div
                data-aos="zoom-in-up"
                className="w-[300px] bg-white border-2 rounded-lg shadow-lg py-2 mt-5 shadow-gray-300  h-auto mx-auto"
              >
                <div className="w-[280px] flex h-auto mx-auto">
                  <img
                    src={icons7}
                    alt="Messaging Services, Email Services, Social Media & Branding Services"
                    className="w-[130px] h-[130px] rounded-full mx-auto  "
                  />
                </div>
                <div className="mt-7 space-y-3">
                  <h2
                    className="text-center text-[16px] text-[#ffab03] lg:text-[21px] font-[500]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Mass Texting
                  </h2>
                  <p
                    className="text-center text-[13px] lg:text-[16px] font-medium px-2"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Login to your account and start sending mass texts online to
                    800+ Super network (MNOs) Connections.
                  </p>
                </div>
              </div> */}

              <div className="relative group w-[300px] md:w-[320px] rounded-2xl overflow-hidden shadow-2xl 
                bg-gradient-to-br from-purple-600 via-blue-500 to-teal-400 
                transition-all duration-700 hover:scale-[1.06] hover:shadow-blue-500/50">

  {/* Glass Layer */}
  <div className="absolute inset-0 bg-white/20 backdrop-blur-xl rounded-2xl"></div>

  {/* Gradient Glow Border */}
  <div className="absolute inset-0 p-[2px] rounded-2xl 
                  bg-gradient-to-br from-blue-500 to-green-400 
                  opacity-60 group-hover:opacity-100 transition-all duration-700 blur-[1px]"></div>

  {/* Floating Waves */}
  <div className="absolute bottom-0 left-0 w-full">
    <div className="wave-new"></div>
    <div className="wave-new"></div>
    <div className="wave-new"></div>
  </div>

  {/* CONTENT */}
  <div className="relative z-10 p-6 flex flex-col items-center text-center">

    <img
      src={icons7}
      alt="Mass Texting"
      className="w-[110px] h-[110px] rounded-full shadow-xl border-4 border-white/40"
    />

    <h2 className="mt-4 text-2xl font-bold text-white drop-shadow-lg"
        style={{ fontFamily: "'Montserrat', sans-serif" }}>
      Mass Texting
    </h2>

    <p className="mt-3 text-white/90 text-sm leading-relaxed"
       style={{ fontFamily: "'Poppins', sans-serif" }}>
      Login to your account and start sending mass texts online across 
      800+ super network (MNOs) connections with ease.
    </p>

  </div>
</div>


              {/* fifth card */}

              {/* <div
                data-aos="zoom-in-up"
                className="w-[300px] bg-white border-2  rounded-lg shadow-lg py-2 mt-5 shadow-gray-300  h-auto mx-auto"
              >
                <div className="w-[280px] flex h-auto mx-auto">
                  <img
                    src={icons8}
                    alt="Messaging Services, Email Services, Social Media & Branding Services"
                    className="w-[130px] h-[130px] rounded-full mx-auto  "
                  />
                </div>
                <div className="mt-7 space-y-3">
                  <h2
                    className="text-center text-[16px] text-[#ffab03] lg:text-[21px] font-[500]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Quick, Flexible & Scalable API
                  </h2>
                  <p
                    className="text-center text-[13px] lg:text-[16px] font-medium px-2"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    DIGINTRA offers the most flexible and easily adaptable
                    SMSAPI gateway allowing you to start sending SMS from any
                    application in minutes.
                  </p>
                </div>
              </div> */}

             <div className="relative group w-[300px] md:w-[320px] rounded-2xl overflow-hidden shadow-2xl 
                bg-gradient-to-br from-purple-600 via-blue-500 to-teal-400 
                transition-all duration-700 hover:scale-[1.06] hover:shadow-blue-500/50">

  {/* Glass Layer */}
  <div className="absolute inset-0 bg-white/20 backdrop-blur-xl rounded-2xl"></div>

  {/* Gradient Glow Border */}
  <div className="absolute inset-0 p-[2px] rounded-2xl 
                  bg-gradient-to-br from-blue-500 to-green-400 
                  opacity-60 group-hover:opacity-100 transition-all duration-700 blur-[1px]"></div>

  {/* Floating Waves */}
  <div className="absolute bottom-0 left-0 w-full">
    <div className="wave-new"></div>
    <div className="wave-new"></div>
    <div className="wave-new"></div>
  </div>

  {/* CONTENT */}
  <div className="relative z-10 p-6 flex flex-col items-center text-center">

    <img
      src={icons8}
      alt="API Icon"
      className="w-[110px] h-[110px] rounded-full shadow-xl border-4 border-white/40"
    />

    <h2 className="mt-4 text-2xl font-bold text-white drop-shadow-lg"
        style={{ fontFamily: "'Montserrat', sans-serif" }}>
      Quick, Flexible & Scalable API
    </h2>

    <p className="mt-3 text-white/90 text-sm leading-relaxed"
       style={{ fontFamily: "'Poppins', sans-serif" }}>
      DIGINTRA provides the most flexible and easily adaptable SMS API gateway
     and immediate messaging from any application.
    </p>

  </div>
</div>


              {/* Sixth card */}
              {/* <div
                data-aos="zoom-in-up"
                className="w-[300px] bg-white border-2 rounded-lg shadow-lg py-2 mt-5 shadow-gray-300  h-auto mx-auto"
              >
                <div className="w-[280px] flex h-auto mx-auto mt-[]">
                  <img
                    src={icons9}
                    alt="Messaging Services, Email Services, Social Media & Branding Services"
                    className="w-[130px] h-[130px] rounded-full mx-auto"
                  />
                </div>
                <div className="mt-7 space-y-3">
                  <h2
                    className="text-center text-[16px] text-[#ffab03] lg:text-[21px] font-[500]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Schedule Campaign
                  </h2>
                  <p
                    className="text-center lg:text-[16px] text-[13px] font-medium px-2"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Schedule your important SMS reminders, alerts, campaignsand
                    notifications online to be sent when needed.
                  </p>
                </div>
              </div> */}

             <div className="relative group w-[300px] md:w-[320px] rounded-2xl overflow-hidden shadow-2xl 
                bg-gradient-to-br from-purple-600 via-blue-500 to-teal-400 
                transition-all duration-700 hover:scale-[1.06] hover:shadow-blue-500/50">

  {/* Glass Layer */}
  <div className="absolute inset-0 bg-white/20 backdrop-blur-xl rounded-2xl"></div>

  {/* Gradient Glow Border */}
  <div className="absolute inset-0 p-[2px] rounded-2xl 
                  bg-gradient-to-br from-blue-500 to-green-400 
                  opacity-60 group-hover:opacity-100 transition-all duration-700 blur-[1px]"></div>

  {/* Floating Waves */}
  <div className="absolute bottom-0 left-0 w-full">
    <div className="wave-new"></div>
    <div className="wave-new"></div>
    <div className="wave-new"></div>
  </div>

  {/* CONTENT */}
  <div className="relative z-10 p-6 flex flex-col items-center text-center">

    <img
      src={icons9}
      alt="Schedule Campaign"
      className="w-[110px] h-[110px] rounded-full shadow-xl border-4 border-white/40"
    />

    <h2 className="mt-4 text-2xl font-bold text-white drop-shadow-lg"
        style={{ fontFamily: "'Montserrat', sans-serif" }}>
      Schedule Campaign
    </h2>

    <p className="mt-3 text-white/90 text-sm leading-relaxed"
       style={{ fontFamily: "'Poppins', sans-serif" }}>
      Schedule your important SMS reminders, alerts, campaigns and notifications 
      effortlessly to deliver at the perfect time.
    </p>

  </div>
</div>

            </div>
          </div>
        </div>

        {/* next content */}
        <Choose />

        {/* next content */}

        <Testimonials />

{/* next content */}
<div className="relative w-full py-20 overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100">

  {/* Floating Orbs */}
  <div className="absolute top-10 left-10 w-40 h-40 bg-indigo-300/30 rounded-full blur-3xl animate-pulse"></div>
  <div className="absolute bottom-10 right-10 w-52 h-52 bg-purple-300/30 rounded-full blur-3xl animate-pulse"></div>

  {/* Gradient Mesh Shape */}
  <svg
    className="absolute top-0 right-0 opacity-20 w-[350px]"
    viewBox="0 0 200 200"
  >
    <path
      fill="#6366f1"
      d="M39.3,-71.8C53.3,-63.1,67.8,-54.6,74.1,-42.3C80.5,-29.9,78.7,-13.7,74.3,-0.3C69.8,13,62.8,26.1,54.2,38C45.6,49.9,35.4,60.7,22.4,70.1C9.3,79.6,-6.6,87.7,-22.8,87.6C-39.1,87.5,-55.7,79.3,-66.3,66C-76.9,52.7,-81.4,34.2,-82.4,17C-83.3,-0.2,-80.7,-16.1,-74.8,-30.1C-68.9,-44,-59.7,-56,-47.4,-65.1C-35.1,-74.3,-19.5,-80.5,-4.4,-75.5C10.6,-70.5,21.2,-54.6,39.3,-71.8Z"
      transform="translate(100 100)"
    />
  </svg>

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

  {/* Floating Mesh Blob */}
  <svg className="absolute top-0 left-0 opacity-30 w-[280px]" viewBox="0 0 200 200">
    <path fill="#3b82f6" d="M45.4,-79.1C59.8,-73.9,72.1,-60.2,79.6,-44.3C87.1,-28.4,89.8,-10.2,87.8,7.5C85.9,25.2,79.3,42.3,67.7,57.2C56.2,72.2,39.7,85,20.1,92.4C0.5,99.8,-22.1,101.8,-40.4,94.5C-58.8,87.3,-73,70.8,-81.9,51.9C-90.8,32.9,-94.4,11.6,-92.8,-8.7C-91.2,-29,-84.4,-48.2,-71.2,-59.2C-58,-70.2,-38.5,-73,-19.7,-78.8C-0.8,-84.6,17.4,-93.3,33.5,-90.5C49.6,-87.7,56.1,-73,45.4,-79.1Z" transform="translate(100 100)" />
  </svg>

  {/* Floating Glow Circles */}
  <div className="absolute top-20 right-10 w-40 h-40 bg-purple-300/40 rounded-full blur-2xl animate-pulse"></div>
  <div className="absolute bottom-20 left-10 w-48 h-48 bg-green-300/40 rounded-full blur-3xl animate-pulse"></div>

  {/* Dotted Pattern */}
  <div className="absolute top-0 right-0 w-60 h-60 bg-[radial-gradient(circle,rgba(0,0,0,0.15)_1px,transparent_1px)] bg-[length:14px_14px] opacity-20"></div>

  {/* MAIN CONTENT */}
  <div className="relative max-w-4xl mx-auto px-6">

    {/* Glass Card */}
    <div className="bg-white/40 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/50">
      
      {/* Heading */}
      <h3
        className="text-center text-3xl md:text-5xl font-bold text-gray-800"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        Get started with  
        <span className="text-blue-700 font-extrabold"> DIGINTRA </span>
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
          <button className="w-[230px] h-16 bg-gradient-to-tr from-green-500 to-lime-500 text-white font-bold rounded-xl shadow-xl
                             flex items-center justify-center gap-3 border-b-4 border-green-700
                             transition-all duration-300 hover:scale-110 hover:shadow-2xl">
            <FaUserPlus className="h-6 w-6" />
            Register Now
          </button>
        </a>

        {/* WhatsApp Button */}
        <a href="https://api-wa.co/nVOl41">
          <button className="w-[230px] h-16 bg-gradient-to-tr from-emerald-500 to-green-400 text-white font-bold rounded-xl shadow-xl
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


        {/* next content */}
       <div className="relative w-full py-20 bg-gradient-to-br from-green-50 via-white to-green-100 overflow-hidden">

  {/* Floating Mesh Blob Left */}
  <svg className="absolute top-0 left-0 w-[280px] opacity-25" viewBox="0 0 200 200">
    <path fill="#16a34a"
      d="M45.4,-79.1C59.8,-73.9,72.1,-60.2,79.6,-44.3C87.1,-28.4,89.8,-10.2,87.8,7.5C85.9,25.2,79.3,42.3,67.7,57.2C56.2,72.2,39.7,85,20.1,92.4C0.5,99.8,-22.1,101.8,-40.4,94.5C-58.8,87.3,-73,70.8,-81.9,51.9C-90.8,32.9,-94.4,11.6,-92.8,-8.7C-91.2,-29,-84.4,-48.2,-71.2,-59.2C-58,-70.2,-38.5,-73,-19.7,-78.8C-0.8,-84.6,17.4,-93.3,33.5,-90.5C49.6,-87.7,56.1,-73,45.4,-79.1Z"
      transform="translate(100 100)"
    />
  </svg>

  {/* Glow Circles */}
  <div className="absolute top-20 right-10 w-40 h-40 bg-green-300/40 rounded-full blur-2xl animate-pulse"></div>
  <div className="absolute bottom-20 left-16 w-48 h-48 bg-emerald-300/40 rounded-full blur-3xl animate-pulse"></div>

  {/* Dotted Overlay */}
  <div className="absolute top-0 right-0 w-64 h-64 
                  bg-[radial-gradient(circle,rgba(0,0,0,0.2)_1px,transparent_1px)] 
                  bg-[length:14px_14px] opacity-10"></div>

  {/* MAIN CONTENT */}
  <div className="relative w-[95%] md:w-[80%] lg:w-[1140px] mx-auto flex flex-col lg:flex-row justify-between gap-10">

    {/* LEFT CONTENT */}
    <div className="lg:w-[50%] flex flex-col justify-center gap-6">

      <p
        className="text-3xl lg:text-5xl font-extrabold text-gray-900 leading-tight"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        <span className="text-green-700">C</span>hoose{" "}
        <span className="text-green-700">Y</span>our{" "}
        <span className="text-green-700">P</span>rice{" "}
        <span className="text-green-700">P</span>lan
      </p>

      <p
        className="text-sm lg:text-lg font-medium text-gray-700"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        Try pay-as-you-go or subscription packages — made to fit your budget.
      </p>

      <div className="flex gap-4 mt-3">
        <Link to="/whatsapp-pricing">
          <button
            className="px-6 py-3 lg:text-lg text-sm font-semibold text-white rounded-lg 
                       bg-gradient-to-tr from-green-700 via-green-500 to-green-700 
                       shadow-lg hover:scale-110 transition-transform duration-300"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Subscription
          </button>
        </Link>

        <button
          className="px-6 py-3 lg:text-lg text-sm font-semibold text-white rounded-lg 
                     bg-gradient-to-tr from-green-700 via-green-500 to-green-700 
                     shadow-lg hover:scale-110 transition-transform duration-300"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Pay As You Go
        </button>
      </div>
    </div>

    {/* RIGHT: Image with Glass Effect */}
    <div className="relative lg:w-[45%] h-auto">

      {/* Glow behind image */}
      <div className="absolute inset-0 rounded-3xl bg-green-300/40 blur-2xl"></div>

      <div className="relative overflow-hidden rounded-3xl shadow-xl bg-white/10 backdrop-blur-xl">
        <img
          src={pricescreenshot}
          alt="Pricing Preview"
          className="rotate-[-18deg] scale-[1.1] mx-auto"
        />
      </div>

    </div>
  </div>

</div>

        {/* next content */}

        <Seven
          endnumber1={5}
          endnumber2={1000}
          endnumber3={225}
          endnumber={100}
        />

        {/*next content cum divider  */}
        <div className="marquee py-10 bg-gradient-to-r from-[#1E3B8D] to-[#387DF4]">
  <div className="relative w-full overflow-hidden py-6">

  {/* Background Layer */}
  <div className="absolute inset-0 bg-gradient-to-r from-green-700 via-green-500 to-green-800"></div>

  {/* Glow Edges */}
  <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/10 mix-blend-overlay"></div>

  {/* Noise Texture */}
  <div className="absolute inset-0 opacity-[0.08] bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')]"></div>

  {/* Shine Sweep */}
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                  animate-shine pointer-events-none"></div>

  {/* TEXT */}
  <div className="relative marquee-content text-center px-6">
    <p
      className="text-lg md:text-3xl font-semibold tracking-wide text-white drop-shadow-lg"
      style={{ fontFamily: "'Familjen Grotesk','sans-serif'" }}
    >
      TRANSFORM YOUR COMMUNICATION STRATEGY WITH OUR ALL-IN-ONE MESSAGING AND PROMOTION SOLUTION.
    </p>
  </div>
</div>

</div>

        {/* Second content */}
        <Client />
        {/* <Footer /> */}
        <Footer/>
      </>
    </div>
  );
}
