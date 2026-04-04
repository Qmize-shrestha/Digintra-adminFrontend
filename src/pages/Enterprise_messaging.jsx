import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import "./enterprise.css";
import { motion } from 'framer-motion';
import enterprisekey from "../assets/enterprise_key.webp";
import { useEffect } from 'react';
import { Autoplay, Pagination } from "swiper/modules";
import icons1 from "../assets/icons8-arrow-100.png";
import icons2 from "../assets/icons8-call-50.png";
import icons3 from "../assets/product.png";
import icons4 from "../assets/attention.png";
import icons5 from "../assets/reach.png";
import icons6 from "../assets/conf.png";
import icons7 from "../assets/t1-8.png";
import icons8 from "../assets/t2.png";
import icons9 from "../assets/t3.png";
import icons10 from "../assets/c1.png";
import icons11 from "../assets/c2.png";
import icons12 from "../assets/c3.png";
import icons13 from "../assets/c4.png";
import icons14 from "../assets/Get_started_img.webp";
import icons15 from "../assets/icons8-plus-501.png";
import Footer2 from '../components/Footer2';
import enterprisemsgimg from '../assets/enterprise_msg.webp'
import { FaCog, FaShieldAlt, FaChartLine, FaSearch, FaInbox,FaUserPlus, FaWhatsapp } from 'react-icons/fa';
import { MdCheckCircle } from 'react-icons/md';
import Getstarted from '../components/Getstarted';
import Client from '../components/Client';

export default function Enterprise_messaging() {
    const [Ques1, setQues1] = useState(false);
    const [Ques2, setQues2] = useState(false);
    const [Ques3, setQues3] = useState(false);
    const [Ques4, setQues4] = useState(false);
    const [Ques5, setQues5] = useState(false);
    function handleQues1() {
      setQues1(!Ques1);
      setQues2(false);
      setQues3(false);
      setQues4(false);
      setQues5(false);
    }
    function handleQues2() {
      setQues2(!Ques2);
      setQues1(false);
      setQues3(false);
      setQues4(false);
      setQues5(false);
    }
  
    function handleQues3() {
      setQues3(!Ques3);
      setQues1(false);
      setQues2(false);
      setQues4(false);
      setQues5(false);
    }
    function handleQues4() {
      setQues4(!Ques4);
      setQues1(false);
      setQues2(false);
      setQues3(false);
      setQues5(false);
    }
    function handleQues5() {
      setQues5(!Ques5);
      setQues1(false);
      setQues2(false);
      setQues3(false);
      setQues4(false);
    }



    const services = [
      {
        title: "Seamless Integration",
        description: "Integrate our messaging services effortlessly with your existing systems and applications. Our solutions support a wide range of integration options, ensuring a smooth fit into your current infrastructure.",
        icon: <FaCog className="w-12 h-12 mx-auto text-blue-500" />,
      },
      {
        title: "High Reliability",
        description: "Count on our robust infrastructure to deliver messages with unmatched reliability. Our systems are designed for high availability, minimizing downtime and ensuring your messages are always on time.",
        icon: <MdCheckCircle className="w-12 h-12 mx-auto text-green-500" />,
      },
      {
        title: "Advanced Security",
        description: "Protect your sensitive information with our state-of-the-art security features. We utilize encryption, authentication, and compliance measures to safeguard your communications against unauthorized access.",
        icon: <FaShieldAlt className="w-12 h-12 mx-auto text-red-500" />,
      },
      {
        title: "Scalability",
        description: "Scale your messaging capabilities as your business grows. Whether you’re expanding your user base or increasing message volume, our solutions are designed to adapt to your evolving needs.",
        icon: <FaChartLine className="w-12 h-12 mx-auto text-yellow-500" />,
      },
      {
        title: "Real-time Analytics",
        description: "Gain insights into your messaging activities with our real-time analytics tools. Monitor performance, track delivery rates, and make data-driven decisions to optimize your communication strategies.",
        icon: <FaSearch className="w-12 h-12 mx-auto text-purple-500" />,
      },
      {
        title: "Multi-channel Support",
        description: "Engage with your audience through multiple channels including SMS, email, and in-app messaging. Our solutions provide a unified platform to manage all your communication needs in one place.",
        icon: <FaInbox className="w-12 h-12 mx-auto text-teal-500" />,
      }
    ];

    useEffect(()=>{
      window.scrollTo(0,0);
    },[])
  return (
    <>
        <Helmet>
        <meta name="robots" content="index, follow" />

                  <meta charSet="utf-8" />
                  <title>Enterprise Messaging Service | Business Text Messaging Service
</title>
                  <meta name="description" content="Looking for Bulk SMS Service for Enterprise Messaging? Digintra offers you Customizable, scalable, and reliable solutions for SMS in India. Contact Now!"/>
                   <meta name="keywords" content="enterprise messaging service, business text messaging service
" />
                     <link rel="canonical" href="https://digintra.com/enterprise-messaging" />
                
              </Helmet>   

              

        <div  className="relative bg-gradient-to-bl from-orange-500 via-blue-200 to-cyan-400



 w-auto pt-[230px] lg:h-[720px] pb-[50px] flex flex-col gap-6 lg:flex-row justify-center items-center ">
          <div className='absolute inset-0 backdrop-blur-md w-full h-full'></div>
          <div  className='w-[90%] lg:w-[40%] z-10 '>
            <div className="h-auto space-y-3 mx-auto lg:w-[500px]">
            <div className=" mx-auto bg-[#0053b7]">
              <h2 data-aos="fade-right" className="text-center lg:text-[16px] lg:tracking-widest text-white" style={{fontFamily:"'Montserrat', sans-serif"}}>
                THE POWER OF SMS
              </h2>
            </div>
  
            <h1 data-aos="fade-right" className="text-[21px] font-[700] text-[#0053b7] text-center lg:text-[40px]" style={{fontFamily:"'Montserrat', sans-serif"}}>
            Enterprise Messaging
            </h1>
            <p data-aos="fade-right" className="text-center text-[13px] text-black lg:text-[16px]" style={{fontFamily:"'Poppins',sans-serif"}}>
              Send to everyone, connect individually
            </p>
          </div>
          <div className="h-auto mx-auto px-12 mt-7 flex md:justify-center items-center gap-4 md:gap-8 flex-col md:flex-row">
            <a href="https://sms-login.digintra.com/User/SignUp">
              <button className="border-b-2 border-[#1e3b8d] ml-2 lg:ml-0 bg-gradient-to-tr from-[#3e8646] to-[#2fac13] w-[220px] h-16 rounded-lg shadow-xl transition-transform transform hover:scale-110 hover:shadow-2xl text-white font-bold flex items-center justify-center gap-2">
                <FaUserPlus className="h-6 w-6" />
                Register Now
              </button>
            </a>
            <a href='https://api-wa.co/nVOl41'>
              <button className="border-b-2 border-[#1e3b8d] mt-6 md:mt-0  ml-2 lg:ml-0 bg-gradient-to-tr from-[#00b09b] to-[#96c93d] w-[220px] h-16 rounded-lg font-bold shadow-xl transition-transform transform hover:scale-110 hover:shadow-2xl text-white  flex items-center justify-center gap-2">
                <FaWhatsapp className="h-6 w-6" />
                Chat on WhatsApp
              </button>
            </a>
          </div>
                    </div>
          <div className='w-[90%] md:w-[35%] z-10'>
            <img src={enterprisemsgimg} alt="" className='w-full  lg:mt-20 '/>
          </div>
        </div>


        {/* <section className="py-16 bg-gray-50 text-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 pulse-animation">Why Choose Our Enterprise Messaging Services?</h2>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-200 p-6 rounded-lg shadow-lg scale-up-on-hover">
              {service.icon}
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section> */}
        {/* <div class="custom-shape-divider-bottom-1689164512">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill fill-white "></path>
          </svg>
        </div> */}
        <div className='w-auto h-auto py-10 bg-white'>

  
        <div className="w-[310px]  h-screen lg:h-auto mx-auto lg:w-[80%] lg:flex lg:justify-between">
          <div className="space-y-2 lg:space-y-7 lg:w-[500px] lg:pt-5">
            <p data-aos="fade-right" className="text-[13px] lg:text-left lg:text-[16px] text-center font-[400]" style={{fontFamily:"'Poppins',sans-serif"}}>
              Our web-based platform &amp; API should be your first choice if you
              need a reliable service to deliver your high volume text messages.
              if you're looking to send bulk SMS messages in a single hot or want
              to send time or event triggered messages (such as SMS server alerts,
              promotion of products, services or job scheduling texts), We can
              provide you with a trusted and teliable SMS service to got your
              messages out there. {<br />}{" "}
            </p>
            <p data-aos="fade-right" className="text-[13px] lg:text-left lg:text-[16px] text-center font-[400] " style={{fontFamily:"'Poppins',sans-serif"}}>
              The SMS has been the most important feature in the widespread
              popularity and development of the mobile phone in the entire world.
              The SMS service in the form of Bulk SMS succumbs perfectly in the
              business and financial develop,emts owing to the globalization in
              the nation. It is cost effective, fast and easy.
            </p>
          </div>
          <div data-aos="zoom-in-up" className="w-[310px]  mt-5 lg:mt-0 lg:w-[550px]">
            <img src={icons3} alt="Enterprise Messaging" className='w-full'/>
          </div>
        </div>
  


        <div className=" lg:mt-12 h-auto mx-auto lg:w-[80%] border-2 border-dashed shadow-lg border-blue-800 rounded-lg md:py-11 px-11 lg:flex items-center bg-gradient-to-tr from-indigo-100 via-green-100 to-orange-100 justify-between">
          

          <div className='w-full h-auto '>
            <img src={enterprisekey} alt="" className='h-[50%] md:h-[80%]' />

          </div>
          <div>
            <h3 className="head text-center font-[700] text-[21px] lg:text-[40px] text-[#0053b7] lg:text-center" style={{fontFamily:"'Montserrat',sans-serif"}}>
              {" "}
              Key features of {<br />} <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-indigo-600 to-pink-500'>Enterprise {<br />}Messaging</span>
            </h3>
            <p className="text-[13px] font-[400] text-center lg:text-[16px] lg:text-left" style={{fontFamily:"'Poppins',sans-serif"}}>
              Global Reach Connect with your global audiences effortlessly via
              single or bulk SMS messages without overspending.
            </p>
          </div>
        </div>
        <div className="mt-7 w-[310px] py-11 h-auto mx-auto lg:w-[1140px]">
          <h3 className="text-[21px] font-[700] text-[#0053b7] text-center px-4 lg:text-[40px] " style={{fontFamily:"'Montserrat',sans-serif"}}>
            Customizable, <span className='text-orange-500'>scalable</span>  and reliable
          </h3>
          <div className="w-[200px] h-[3px] bg-gray-700 mx-auto"></div>
          <div className="w-[310px] h-auto mx-auto lg:w-[1140px] grid grid-cols-1 lg:grid-cols-3 space-y-7 md:space-y-0 lg:mt-8 ">
            {/* first card */}
            <div className="w-[300px] bg-gradient-to-t from-orange-50 border-l-4 border-t-2 border-r-2 border-b-4 rounded-lg border-blue-800 h-auto p-4">
              <img src={icons7} alt="Enterprise Messaging" />
              <h3 className="text-[16px] mb-2 lg:text-[21px] font-semibold text-blue-800 text-center" style={{fontFamily:"'Montserrat',sans-serif"}}>
                Tier 1 super network
              </h3>
              <p className="text-[13px] lg:text-[16px] text-center font-[400]" style={{fontFamily:"'Poppins',sans-serif"}}>
                With over 250+ direct carrier relationships, we deliver yourSMS
                messages directly to your customer phones across theworld –
                quickly and with supreme quality.
              </p>
            </div>
  
            {/* second card */}
  
            <div className="w-[310px] bg-gradient-to-t from-orange-50 h-auto border-l-4 border-t-2 border-r-2 border-b-4 rounded-lg border-blue-800 p-4">
              <img src={icons8} alt="Enterprise Messaging" />
              <h3 className="text-[16px] lg:text-[21px] font-semibold text-blue-800 text-center" style={{fontFamily:"'Montserrat',sans-serif"}}>
                Global compliance
              </h3>
              <p className="text-[13px] lg:text-[16px] text-center font-[400]" style={{fontFamily:"'Poppins',sans-serif"}}>
                Our platform has routes in all corners of the world, giving you
                the freedom to choose where to send SMS messages.
              </p>
            </div>
  
            {/* third card */}
  
            <div className="w-[310px] bg-gradient-to-t from-orange-50 h-auto border-l-4 border-t-2 border-r-2 border-b-4 rounded-lg border-blue-800 p-4  ">
              <img src={icons9} alt="Enterprise Messaging" />
              <h3 className="text-[16px] lg:text-[21px] font-semibold text-blue-800 text-center " style={{fontFamily:"'Montserrat',sans-serif"}}>
                Customer insights
              </h3>
              <p className="text-[13px] lg:text-[16px] text-center font-[400]" style={{fontFamily:"'Poppins',sans-serif"}}>
                In our SMS portal you can manage your campaigns and check the real
                time delivery reports which help you make more informed business
                decisions.
              </p>
            </div>
          </div>
        </div>
        {/* Client getstarted */}
        <Client/>
        <Getstarted/>
        {/* Frequently asked questiohns */}
        <div className="w-[310px] space-y-7 h-auto pt-[60px] mx-auto lg:w-[1140px]">
          <h3 className="text-[21px] font-[700] text-[#0053b7] text-center lg:text-[40px] " style={{fontFamily:"'Montserrat', sans-serif"}}>
            Frequently Asked Questions
          </h3>
          <div className="w-[200px] h-[4px] bg-blue-600 mx-auto "></div>
          <div className="lg:pt-[60px] w-[310px] pt-[50px] pb-7 lg:pb-14 h-auto lg:w-[1100px] mx-auto space-y-6">
   
          
          <div
            className="w-[310px] h-10 bg-[#FBFBFB] rounded-lg flex justify-between px-4 lg:w-[1000px] lg:h-14 lg:mx-auto"
            onClick={handleQues1}
          >
            <h3 className="text-[13px] font-[600] text-[#01cf80] py-3 lg:text-[19px] "  style={{fontFamily:"'Montserrat', sans-serif"}}>
              What is SMS?{" "}
            </h3>
            <span>
              <img src={icons15} alt="" className="lg:h-8 h-4 l my-3" />
            </span>
          </div>
          {Ques1 && (
            <p className="bg-[#FBFBFB] text-[13px] px-4 lg:w-[1000px] lg:mx-auto lg:text-[16px] font-[400] text-[#646464]" style={{fontFamily:"'Poppins', sans-serif"}}>
              Short Message Service (SMS) is the ability to send and receive short
              alphanumeric messages to and from mobile telephones. Asingle text
              message is limited to 160 characters including spaces.
            </p>
          )}
  
          <div
            className="w-[310px] h-10 bg-[#FBFBFB] rounded-lg flex justify-between px-4 lg:w-[1000px] lg:h-14 lg:mx-auto"
            onClick={handleQues2}
          >
            <h3 className="text-[13px] font-[600] text-[#01cf80] flex justify-between py-3 lg:text-[19px]" style={{fontFamily:"'Montserrat', sans-serif"}}>
              How quickly are messages delivered?{" "}
            </h3>
            <span>
              <img src={icons15} alt="" className="h-4 lg:h-8 my-3" />
            </span>
          </div>
          {Ques2 && (
            <p className="bg-[#FBFBFB] px-4 text-[13px] lg:w-[1000px] lg:mx-auto lg:text-[16px] font-[400] text-[#646464]" style={{fontFamily:"'Poppins', sans-serif"}}>
              Wherever possible, we use direct or 1-hop connections. This means
              that you are getting the highest quality SMS delivery available on
              the market.Generally, you can expect messages to arrive in a matter
              of seconds; an SMS message typically takes about 10 seconds to
              arrive on a handset. This may vary based on the recipient country
              (going up to 30 seconds) and depends on whether the receiving mobile
              number is reachable and in good signal coverage. As there are a lot
              of factors and variables that can impact delivery times, it's hard
              to give a specific number for all SMS.
            </p>
          )}
  
          <div
            className="w-[310px] h-10 bg-[#FBFBFB] rounded-lg flex justify-between px-4 lg:w-[1000px] lg:h-14 lg:mx-auto"
            onClick={handleQues3}
          >
            <h3 className="text-[13px] font-[600] text-[#01cf80] py-3 lg:text-[19px]" style={{fontFamily:"'Montserrat', sans-serif"}}>
              How do I buy SMS credit?
            </h3>
            <span>
              <img src={icons15} alt="" className="h-4 lg:h-8 my-3" />
            </span>
          </div>
          {Ques3 && (
            <p className="text-[13px] bg-[#FBFBFB] px-4 lg:w-[1000px] lg:mx-auto lg:text-[16px] font-[400] text-[#646464]" style={{fontFamily:"'Poppins', sans-serif"}}>
              DIGINTRA works on a prepaid basis. You can purchase credits anytime
              by reaching out to your account RM.
            </p>
          )}
  
          <div
            className="w-[310px] h-10 bg-[#FBFBFB] rounded-lg flex justify-between px-4 lg:w-[1000px] lg:h-14 lg:mx-auto"
            onClick={handleQues4}
          >
            <h3 className="text-[13px]  font-[600] text-[#01cf80] lg:text-[19px] " style={{fontFamily:"'Montserrat', sans-serif"}}>
              Are there any additional cost {<br />}involved when purchasing SMS
              Credit?{" "}
            </h3>
            <span>
              <img src={icons15} alt="" className="h-4 lg:h-8 my-3" />
            </span>
          </div>
          {Ques4 && (
            <p className="text-[13px] bg-[#FBFBFB] px-4 lg:w-[1000px] lg:mx-auto lg:text-[16px] font-[400] text-[#646464]" style={{fontFamily:"'Poppins', sans-serif"}}>
              No! DIGINTRA operates on a prepaid basis. You simply purchaseSMS
              credit and use them when needed. There is no monthly fee, no set up
              fee and no contract fee involved when using our SMS service.
            </p>
          )}
  
          <div
            className="w-[310px] h-10 bg-[#FBFBFB] rounded-lg flex justify-between px-4 lg:w-[1000px] lg:h-14 lg:mx-auto"
            onClick={handleQues5}
          >
            <h3 className="text-[13px] font-[600] text-[#01cf80]  lg:text-[19px] " style={{fontFamily:"'Montserrat', sans-serif"}}>
              Is there a daily or monthly minimum {<br />} quota for sending SMS?{" "}
            </h3>
            <span>
              <img src={icons15} alt="" className="h-4 lg:h-8 my-3" />
            </span>
          </div>
          {Ques5 && (
            <p className="text-[13px] bg-[#FBFBFB] px-4 lg:w-[1000px] lg:mx-auto lg:text-[16px] font-[400] text-[#646464]" style={{fontFamily:"'poppins', sans-serif"}}>
              No, you can send as few or as many SMS, over as long or short a
              period as you like! Be aware though that if you are on a pre-paid
              account, your credits may expire.
            </p>
          )}
        </div>
        </div>
       
        </div>
        <Footer2/>
      </>
  )
}
