import React, { useEffect } from 'react';
import { useState } from "react";
import "./pricing.css"
import "./whatsapppricingg.css"
import { Autoplay, Pagination } from 'swiper/modules';
import { Helmet } from 'react-helmet';
import  icons1 from "../assets/f2 (1).png";
import icons2 from "../assets/mnyback.png";
import icons3 from "../assets/secure.png";
import icons4 from "../assets/icons8-plus-501.png";
import whatsappPricing from "../assets/Whatsapp_business_api_img.webp"
import io1 from "../assets/io1.png";
import io2 from "../assets/io2.png";
import io3 from "../assets/io3.png";
import diamond from '../assets/diamond.png';
import bag from '../assets/bag.png';
import rocket from '../assets/rocket.png';
import { FaCheckCircle, FaQuestionCircle } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

import Footer from '../components/Footer';
export default function WhatsappPricing() {
    const [Ques1, setQues1] = useState(false);
    const [Ques2, setQues2] = useState(false);
    const [Ques3, setQues3] = useState(false);
    const [Ques4, setQues4] = useState(false);
    const [Ques5, setQues5] = useState(false);
    const [Ques6, setQues6] = useState(false);
    const [Ques7, setQues7] = useState(false);
    const [Ques8, setQues8] = useState(false);
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedPrice, setSelectedPrice] = useState(null);
    const [selectpricebutton, setSelectpricebutton] = useState("monthly");
  
    useEffect(() => {
      // Fetch the list of countries from your Express.js server
      fetch('http://localhost:4000/countries')
        .then((response) => response.json())
        .then((data) => setCountries(data))
        .catch((error) => console.error(error));
    }, []);
  
    const handleCountryChange = (event) => {
      setSelectedCountry(event.target.value);
    };
  
    useEffect(() => {
      if (selectedCountry) {
        // Fetch the pricing data for the selected country
        fetch(`http://localhost:4000/pricing/${selectedCountry}`)
          .then((response) => response.json())
          .then((data) => setSelectedPrice(data.price))
          .catch((error) => console.error(error));
      }
    }, [selectedCountry]);
    function handleQues1() {
      setQues1(!Ques1);
    }
    function handleQues2() {
      setQues2(!Ques2);
    }
  
    function handleQues3() {
      setQues3(!Ques3);
    }
    function handleQues4() {
      setQues4(!Ques4);
    }
    function handleQues5() {
      setQues5(!Ques5);
    }
    function handleQues6() {
      setQues6(!Ques6);
    }
    function handleQues7() {
      setQues7(!Ques7);
    }
    function handleQues8() {
      setQues8(!Ques8);
    }
    useEffect(()=>{
      window.scrollTo(0,0);
    },[])

    const handleSubscribe1 = () => {
      window.open('https://subscriptions.zoho.in/subscribe/56d8ca4411f3608e60dc27c906077be68dc117dcba9bca9ddbde1ccf1c7a189d/WABA949?addon_code%5B0%5D=WCC1000&addon_quantity%5B0%5D=1');
    };

    const handleSubscribe3 = () => {
      window.open('https://subscriptions.zoho.in/subscribe/56d8ca4411f3608e60dc27c906077be68dc117dcba9bca9ddbde1ccf1c7a189d/WABA11500?addon_code%5B0%5D=WCC1000&addon_quantity%5B0%5D=1');
    };
    const handleSubscribe4 = () => {
      window.open('https://subscriptions.zoho.in/subscribe/56d8ca4411f3608e60dc27c906077be68dc117dcba9bca9ddbde1ccf1c7a189d/WABA2499?addon_code%5B0%5D=CHATBOT&addon_quantity%5B0%5D=1&addon_code%5B1%5D=WCC1000&addon_quantity%5B1%5D=1');
    };
   
    const handleSubscribe6 = () => {
      window.open('https://subscriptions.zoho.in/subscribe/56d8ca4411f3608e60dc27c906077be68dc117dcba9bca9ddbde1ccf1c7a189d/WABA28999?addon_code%5B0%5D=CHATBOT&addon_quantity%5B0%5D=1&addon_code%5B1%5D=WCC1000&addon_quantity%5B1%5D=1');
    };
    const handleSubscribe7 = () => {
      window.open('https://subscriptions.zoho.in/subscribe/56d8ca4411f3608e60dc27c906077be68dc117dcba9bca9ddbde1ccf1c7a189d/WABA3599?addon_code%5B0%5D=CHATBOT&addon_quantity%5B0%5D=1&addon_code%5B1%5D=WCC1000&addon_quantity%5B1%5D=1');
    };
   
    const handleSubscribe9 = () => {
      window.open('https://subscriptions.zoho.in/subscribe/56d8ca4411f3608e60dc27c906077be68dc117dcba9bca9ddbde1ccf1c7a189d/WABA42999?addon_code%5B0%5D=CHATBOT&addon_quantity%5B0%5D=1&addon_code%5B1%5D=WCC1000&addon_quantity%5B1%5D=1');
    };
  return (
    <>
    <Helmet>
      <title>Pricing || Digintra</title>
      <meta name='description' content=''/>
      <link rel="canonical" href="https://www.digintra.com/whatsapp-pricing" />
    </Helmet>
    <div className="patterncon relative w-full h-[692px] lg:h-[750px] pt-[100px] flex justify-center items-center ">
    <div className='absolute inset-0 backdrop-blur-md w-full h-full'></div>
      <div className="w-[95%] md:w-[80%] flex flex-col md:flex-row gap-10 justify-between items-center z-10">
      <div className=" h-auto space-y-3 mx-auto lg:w-[50%]">
        <div className="  mx-auto bg-[#0053b7]">
          <h3 data-aos="fade-right" className="text-center lg:text-[16px] lg:tracking-widest text-white" style={{fontFamily:"'Montserrat', sans-serif"}}>
            PRICING TO SUIT ALL SIZE OF BUSINESS
          </h3>
        </div>

        <h1 data-aos="fade-right" className="text-[21px] font-[700] text-[#0053b7] text-center lg:text-[40px]" style={{fontFamily:"'Montserrat', sans-serif"}}>
          WhatsApp Pricing
        </h1>
        <p data-aos="fade-right" className="text-center text-[13px] text-black lg:text-[16px]" style={{fontFamily:"'Poppins', sans-serif"}}>
          Our Prices are designed to meet your specific business goals
        </p>
      </div>
      <div className='w-[50%] md:w-[50%] flex justify-center'>
        <img src={whatsappPricing} className='w-[80%]' alt="whatsappPricing" />
        </div>
      </div>
      
      {/* <div class="custom-shape-divider-bottom-1689339873">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div> */}
      
    </div>
    {/* <div className='w-auto h-auto bg-white mb-20'>
    <div className="w-[310px] h-auto mx-auto lg:w-[1140px]   ">
    <div className='w-[300px]   flex gap-4 my-6 mx-auto '>
      <div className={`w-[200px] ${selectedbutton === "monthly" ? "bg-gradient-to-r from-green-500 to-orange-500 text-white" : "bg-white border-2 border-black text-black"} rounded-lg p-4 flex justify-center`}  onClick={()=>setSelectedbutton("monthly")}>

      <button style={{fontFamily:"'Poppins',sans-serif"}}>Monthly</button>
      </div>
      <div className={`w-[200px] ${selectedbutton === "annually" ? "bg-gradient-to-r from-green-500 to-orange-500 text-white" : "bg-white border-2 border-black text-black"} rounded-lg p-4 flex justify-center`}  onClick={()=>setSelectedbutton("annually")}>

      <button style={{fontFamily:"'Poppins',sans-serif"}} >Annually</button>
      </div>

    </div>
    <div className="cards lg:w-[1140px] ">
        <div className="card w-[95%] md:w-[30%] shadow-md">
            <ul className="pricing-list">
                <li className="pack font-custom mb-4" style={{width:"100%"}}>BASIC PLAN</li>
<img src={io1} style={{width:"90px"}} className='border-2 border-solid border-green-600 rounded-full p-1'/>
                <li id="basic" className="price bottom-bar" style={{fontFamily:"'Montserrat',sans-serif"}}><strong style={{color:"black", textAlign:"center"}}> {selectedbutton === "monthly" && ( <p>₹ 999/-</p> )} {selectedbutton === "annually" && ( <p>₹ 11,500/-</p> )} </strong></li>
<p className='text-[15px]'>Monthly Package</p>
                <li className="bottom-bar"> 1 Agent(User/Manager) Logins</li>
                <li className="bottom-bar">Broadcasting&Retargeting</li>
                <li className="bottom-bar">Smart Audience Segregation</li>
                <li className="bottom-bar">Template Message APIs</li>
                <li className="bottom-bar">Multi-Agent Live Chat</li>
                <li className="bottom-bar">Agent Transfer & Manager</li>
                <li className="bottom-bar">Upto 10 Tags</li>
                <li className="bottom-bar">Upto 5 Custom Attributes</li>
              <li style={{fontFamily:"'Poppins',sans-serif"}}> {selectedbutton === "monthly" && <button onClick={handleSubscribe1} className="btn">Subscribe Now</button> } {selectedbutton === "annually" && <button onClick={handleSubscribe3} className="btn">Subscribe Annually</button> } </li>
            </ul>
        </div>
        <div className="card w-[95%] md:w-[30%]  active shadow-md ">
            <ul className="pricing-list">
                <li className="pack font-custom mb-4 " style={{width:"100%"}} >STANDARD PLAN</li>
<img src={io2} style={{width:"90px"}} className='border-2 border-solid border-red-600 rounded-full p-1'/>
                <li id="professional" class="price bottom-bar text-center" style={{fontFamily:"'Montserrat',sans-serif"}}><strong>{selectedbutton === "monthly" && ( <p>₹ 2499/-</p>  )} {selectedbutton === "annually" && ( <p> ₹ 28,999/-</p>  )} </strong></li>
<p className='text-[15px]'>Monthly Package</p>
                <li className="bottom-bar">All features of Basic Plans </li>
                <li className="bottom-bar">5 Agent Logins</li>
                <li className="bottom-bar">WhatsApp Chatbot{<br/>}(25 Steps Flow)+ One {<br/>}Time Setup Fees </li>
                <li style={{fontFamily:"'Poppins',sans-serif"}}>{ selectedbutton === "monthly" && (<button onClick={handleSubscribe4} className="btn active-btn" >Subscribe Now</button>)}  { selectedbutton === "annually" && (<button onClick={handleSubscribe6} className="btn active-btn" >Subscribe Annually</button>)}</li>
            </ul>
        </div>
        <div className="card w-[95%] md:w-[30%]  shadow-md">
            <ul className="pricing-list">
                <li className="pack font-custom mb-4" style={{width:"100%"}}>PRO PLAN</li>
<img src={io3} className='border-2 border-solid border-green-600 rounded-full p-1' style={{width:"90px"}}/>
                <li id="master" className="price bottom-bar" style={{fontFamily:"'Montserrat',sans-serif"}}><strong style={{color:"black", textAlign:"center"}}>  {selectedbutton === "monthly" && (<p>₹ 3599</p> )}  {selectedbutton === "annually" && (<p>₹ 42,999/</p> )} </strong> </li>
<h3 className='text-[15px] font-semibold'>Monthly Package </h3>
                <li className="bottom-bar">All features of Basic Plans</li>
                <li className="bottom-bar">10 Agent Logins</li>
                <li className="bottom-bar">Campaign Click Tracking </li>
                <li className="bottom-bar">Campaign Schedular </li>
                <li className="bottom-bar">Upto 20 Custom Attributes </li>
                <li className="bottom-bar">Smart Agent Routing</li>
                <li className="bottom-bar">Campaign Budget Analytics</li>
                <li className="bottom-bar">Custom Agent Rules </li>
                <li style={{fontFamily:"'Poppins',sans-serif"}}> { selectedbutton === "monthly" && ( <button onClick={handleSubscribe7} className="btn" >Subscribe Now</button>)}  { selectedbutton === "annually" && ( <button onClick={handleSubscribe9} className="btn" >Subscribe Annually</button>)}</li>
            </ul>
        </div>
    </div>
  
      </div>
      </div> */}









<div className="flex justify-center items-center mt-2 ">
        <div className="flex justify-between  border-2 border-slate-200 rounded-2xl bg-gradient-to-r from-slate-300 to-slate-200">
          <button
            className={` md:text-[1.2rem] p-3 font-bold rounded-xl border-2 border-green-600 hover:bg-gradient-to-tr from-orange-400 to-green-400 hover:text-white ${
              selectpricebutton === "monthly"
                ? "bg-gradient-to-tr from-orange-400 to bg-green-400 text-white"
                : "bg-slate-100 text-black border-slate-300"
            }`}
            onClick={() => setSelectpricebutton("monthly")}
          >
            Monthly
          </button>
          <button
            className={`p-3 ml-4 md:text-[1.2rem] font-bold rounded-xl border-2 border-green-600 hover:bg-gradient-to-tr from-orange-400 to-green-400 hover:text-white ${
              selectpricebutton === "annually"
                ? "bg-gradient-to-tr from-orange-400 to bg-green-400 text-white"
                : "bg-slate-100 text-black border-slate-300"
            }`}
            onClick={() => setSelectpricebutton("annually")}
          >
            Annually
          </button>
        </div>
      </div>



      
      <div className=" flex flex-row justify-center mt-10 gap-10 sm:flex-col sm:justify-center sm:items-center md:justify-center md:flex-row lg:justify-center lg:flex-row max-sm:flex-col max-sm:gap-3  max-sm:justify-center max-sm:items-center py-2">
        <div className="h-[1060px] w-[300px] bg-darkPink rounded-md border-solid border-4 border-yellow-400">
          <div className="bg-yellow-100 h-[35%] w-[290px] flex flex-col items-start pl-6 pt-8  rounded-md">
            <div className="flex items-center gap-x-4">
              <div className="text-sm bg-gradient-to-r from-yellow-500 to-yellow-600 p-2 rounded-md text-white "style={{fontFamily:"'Poppins', sans-serif"}}>
                Basic Plan
              </div>
              <div>
                <img className="h-20 w-20 ml-16 mt-2" src={rocket} alt="" />
              </div>
            </div>

            {selectpricebutton === "monthly" && (
              <h3
                className="text-[2.2rem] md:text-5xl font-bold text-center mt-6"
                style={{fontFamily:"'Poppins', sans-serif"}}
              >
                $49<span className="text-[1rem]">+(taxes)</span>{" "}
              </h3>
            )}

            {selectpricebutton === "annually" && (
              <h3
                className="text-[2.2rem] md:text-5xl font-bold text-center mt-6"
                style={{fontFamily:"'Poppins', sans-serif"}}
              >
                $39<span className="text-[1rem]">/month +(taxes)</span>{" "}
              </h3>
            )}
            <div
              className="flex items-center font-semibold mt-6"
              style={{ fontFamily: "'Poppins',sans-serif", fontSize: "14px" }}
            >
              <FaCheckCircle className="text-yellow-400 text-[14px] mr-2" />
              No Setup Charges
            </div>
            <div
              className="flex items-center font-semibold mt-4"
              style={{ fontFamily: "'Poppins',sans-serif", fontSize: "14px" }}
            >
              <FaCheckCircle className="text-yellow-400 text-[14px] mr-2" />
              Unlimited Service Conversation
            </div>

            <a href="https://www.connect.digintra.com/signup" target="_blank" rel="noopener noreferrer">
  <button className="mt-7 bg-gradient-to-r from-orange-700 to-yellow-600 text-white px-14 py-2 ml-3 rounded-md hover:scale-105 transition-transform" 
    style={{ fontFamily: "'Poppins', sans-serif" }}>
    Subscribe Now
  </button>
</a>
          </div>
          <div className="ml-2">
            <ul className="p-2 space-y-4 px-4">
              <li
                className="flex items-center font-semibold text-[1rem] gap-[1rem]"
                style={{ fontFamily: '"Poppins", sans-serif', fontSize: '15px' }}
              >
              
                <FaCheckCircle className="text-green-950 text-[14px]" />1 Agent
                Logins
              </li>

              <li
                className="flex flex-col items-start font-semibold text-base gap-1 mr-8  rounded-lg "
                style={{ fontFamily: '"Poppins", sans-serif', fontSize: '15px' }}
              >
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-900 text-sm" />
                  <span>Click to WhatsApp Ad</span>
                </div>
                <span className="text-xs bg-yellow-400 ml-6 px-2 rounded">
                  500 Free Ad Credit
                </span>
              </li>

              <li
                className="flex flex-col items-start font-semibold text-base gap-1 mr-8  rounded-lg "
                style={{ fontFamily: '"Poppins", sans-serif', fontSize: '15px' }}
              >
                <div className="flex items-center gap-2 ">
                  <FaCheckCircle className="text-green-900 text-[20px]" />
                  <span>Shopify & WooCommerce Integrations</span>
                </div>
                <span className="text-xs bg-yellow-400 ml-6 px-2 rounded">
                  On Request
                </span>
              </li>
              <li
                className="flex items-center font-semibold text-[1rem] gap-[1rem]"
                style={{ fontFamily: '"Poppins", sans-serif', fontSize: '15px' }}
              >
                {" "}
                <FaCheckCircle className="text-green-950 text-[16px]" />{" "}
                Dialogflow Chatbot Integration
              </li>

              <li
                className="flex items-center font-semibold text-[1rem] gap-[1rem]"
                style={{ fontFamily: '"Poppins", sans-serif', fontSize: '15px' }}
              >
                {" "}
                <FaCheckCircle className="text-green-950 text-[14px]" /> Smart
                Audience Segregation
              </li>
              <li
                className="flex items-center font-semibold text-[1rem] gap-[1rem]"
                style={{ fontFamily: '"Poppins", sans-serif', fontSize: '15px' }}
              >
                {" "}
                <FaCheckCircle className="text-green-950 text-[14px]" />{" "}
                Broadcasting & Retargeting
              </li>
              <li
                className="flex items-center font-semibold text-[1rem] gap-[1rem]"
                style={{ fontFamily: '"Poppins", sans-serif', fontSize: '15px' }}
              >
                {" "}
                <FaCheckCircle className="text-green-950 text-[14px]" />{" "}
                Template Message APIs
              </li>
              <li
                className="flex items-center font-semibold text-[1rem] gap-[1rem]"
                style={{ fontFamily: '"Poppins", sans-serif', fontSize: '15px' }}
              >
                {" "}
                <FaCheckCircle className="text-green-950 text-[14px]" />{" "}
                Multi-Agent Live Chat
              </li>
              <li
                className="flex items-center font-semibold text-[1rem] gap-[1rem]"
                style={{ fontFamily: '"Poppins", sans-serif', fontSize: '15px' }}
              >
                {" "}
                <FaCheckCircle className="text-green-950 text-[19px]" /> Agent
                Transfer & Manager Monitoring
              </li>
              <li
                className="flex items-center font-semibold text-[1rem] gap-[1rem]"
                style={{ fontFamily: '"Poppins", sans-serif', fontSize: '15px' }}
              >
                {" "}
                <FaCheckCircle className="text-green-950 text-[14px]" /> 1200
                Messages/min
              </li>

              <li
                className="flex items-center font-semibold text-[1rem] gap-[1rem]"
                style={{ fontFamily: '"Poppins", sans-serif', fontSize: '15px' }}
              >
                {" "}
                <FaCheckCircle className="text-green-950 text-[14px]" /> Shared
                Team Inbox
              </li>
              <li
                className="flex items-center font-semibold text-[1rem] gap-[1rem]"
                style={{ fontFamily: "'Poppins',sans-serif" }}
              >
              
                <FaCheckCircle className="text-green-950 text-[24px] -mt-10" />5
                Chatbot Flows: ₹2,999/month (Charged Separately)
              </li>
            </ul>
          </div>
        </div>

        <div className="h-[1060px] w-[300px] bg-gradient-to-br from-orange-300 to-green-300  rounded-md  border-solid border-4 border-green-400">
          <div className="bg-green-100 h-[35%] w-[290px] flex flex-col items-start pl-6 pt-8  rounded-md">
            <div className="flex items-center gap-x-4">
              <div className="text-sm bg-gradient-to-r from-emerald-500 to-emerald-600 p-2 rounded-md text-white"  style={{ fontFamily: '"Poppins", sans-serif' }}>
                Pro Plan
              </div>
              <div>
                <img className="h-20 w-20 ml-16" src={diamond} alt="" />
              </div>
            </div>
            {selectpricebutton === "monthly" && (
              <h3
                className="text-[2.2rem] md:text-5xl font-bold text-center mt-6"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                $99<span className="text-[1rem]">+(taxes)</span>{" "}
              </h3>
            )}

            {selectpricebutton === "annually" && (
              <h3
                className="text-[2.2rem] md:text-5xl font-bold text-center mt-6"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                $79<span className="text-[1rem]">/month +(taxes)</span>{" "}
              </h3>
            )}
            {/* <div className="mt-8 font-semibold">1000 free service conversations</div> */}
            <div
              className="flex items-center font-semibold mt-6"
              style={{ fontFamily: "'Poppins',sans-serif", fontSize: "14px" }}
            >
              <FaCheckCircle className="text-green-400 text-[14px] mr-2" />
              No Setup Charges
            </div>
            <div
              className="flex items-center font-semibold mt-4"
              style={{ fontFamily: "'Poppins',sans-serif", fontSize: "14px" }}
            >
              <FaCheckCircle className="text-green-400 text-[14px] mr-2" />
              Unlimited Service Conversation
            </div>
            <a href="https://www.connect.digintra.com/signup" target="_blank" rel="noopener noreferrer">
            <button className="mt-8 bg-gradient-to-r from-green-700 to-green-600  text-white px-14 py-2 ml-3  rounded-md hover:scale-105 transition-transform " style={{ fontFamily: '"Poppins", sans-serif' }}>
              Subscribe Now
            </button></a>
          </div>
          <div className="pl-6">
            <ul className="p-2 space-y-4 px-4">
              <li
                className="flex items-center font-semibold text-[1rem] gap-[1rem]"
                style={{ fontFamily: '"Poppins", sans-serif', fontSize: '15px' }}
              >
                {" "}
                <FaCheckCircle className="text-green-950 text-[14px]" />
                Unlimited Agent Logins
              </li>
              <li
                className="flex items-center font-semibold text-[1rem] gap-[1rem]"
                style={{ fontFamily: '"Poppins", sans-serif', fontSize: '15px' }}
              >
                {" "}
                <FaCheckCircle className="text-green-950 text-[14px]" />
                All features of Basic Plan
              </li>

              <li
                className="flex items-center font-semibold text-[1rem] gap-[1rem]"
                style={{ fontFamily: '"Poppins", sans-serif', fontSize: '15px' }}
              >
                {" "}
                <FaCheckCircle className="text-green-950 text-[14px]" /> Upto
                100 Tags
              </li>
              <li
                className="flex items-center font-semibold text-[1rem] gap-[1rem]"
                style={{ fontFamily: '"Poppins", sans-serif', fontSize: '15px' }}
              >
                {" "}
                <FaCheckCircle className="text-green-950 text-[14px]" /> Upto 20
                Custom Attributes
              </li>
              <li
                className="flex items-center font-semibold text-[1rem] gap-[1rem]"
                style={{ fontFamily: '"Poppins", sans-serif', fontSize: '15px' }}
              >
                {" "}
                <FaCheckCircle className="text-green-950 text-[14px]" />{" "}
                Campaign Scheduler
              </li>
              <li
                className="flex items-center font-semibold text-[1rem] gap-[1rem]"
                style={{ fontFamily: '"Poppins", sans-serif', fontSize: '15px' }}
              >
                {" "}
                <FaCheckCircle className="text-green-950 text-[14px]" />{" "}
                Campaign Click Tracking
              </li>
              <li
                className="flex items-center font-semibold text-[1rem] gap-[1rem]"
                style={{ fontFamily: '"Poppins", sans-serif', fontSize: '15px' }}
              >
                {" "}
                <FaCheckCircle className="text-green-950 text-[14px]" /> Smart
                Agent Routing
              </li>
              <li
                className="flex items-center font-semibold text-[1rem] gap-[1rem]"
                style={{ fontFamily: '"Poppins", sans-serif', fontSize: '15px' }}
              >
                {" "}
                <FaCheckCircle className="text-green-950 text-[14px]" />{" "}
                Campaign Budget Analytics
              </li>
              <li
                className="flex items-center font-semibold text-[1rem] gap-[1rem]"
                style={{ fontFamily: '"Poppins", sans-serif', fontSize: '15px' }}
              >
                {" "}
                <FaCheckCircle className="text-green-950 text-[14px]" /> Project
                APIs
              </li>
              <li
                className="flex items-center font-semibold text-[1rem] gap-[1rem]"
                style={{ fontFamily: '"Poppins", sans-serif', fontSize: '15px' }}
              >
                {" "}
                <FaCheckCircle className="text-green-950 text-[14px]" /> Custom
                Agent Rules
              </li>
              <li
                className="flex items-center font-semibold text-[1rem] gap-[1rem]"
                style={{ fontFamily: '"Poppins", sans-serif', fontSize: '15px' }}
              >
                {" "}
                <FaCheckCircle className="text-green-950 text-[14px]" />{" "}
                Carousel Template Click Tracking
              </li>
              <li
                className="flex items-center font-semibold text-[1rem] gap-[1rem]"
                style={{ fontFamily: '"Poppins", sans-serif', fontSize: '15px' }}
              >
                {" "}
                <FaCheckCircle className="text-green-950 text-[14px]" /> CSV
                Campaign Scheduler
              </li>
              <li
                className="flex items-center font-semibold text-[1rem] gap-[1rem]"
                style={{ fontFamily: '"Poppins", sans-serif', fontSize: '15px' }}
              >
                
                <FaCheckCircle className="text-green-950 text-[25px] -mt-10" />5
                Chatbot Flows: ₹2,999/month (Charged Separately)
              </li>

              {/* <li className="flex items-center font-semibold text-[1rem] gap-[1rem] bg-gradient-to-r from-blue-800 to-indigo-900 px-7 py-1 rounded-xl text-white" style={{fontFamily:"'Manrope',sans-serif"}}>  5 Chatbot Flows: ₹1999 (Charged Separately)</li> */}
            </ul>
          </div>
        </div>

        <div className="h-[1060px] w-[300px] bg-orange-300  rounded-md  border-solid border-4 border-orange-400">
          <div className="bg-orange-100 h-[35%] w-[290px] flex flex-col items-start pl-6 pt-8  rounded-md">
            {/* <div className="text-sm  bg-gradient-to-r from-emerald-500 to-emerald-600 p-2 rounded-md text-white">Pro Plan</div> */}
            <div className="flex items-center gap-x-4">
              <div className="text-sm bg-gradient-to-r from-orange-500 to-orange-600 p-2 rounded-md text-white">
                Enterprise
              </div>
              <div>
                <img className="h-20 w-20 ml-16" src={bag} alt="" />
              </div>
            </div>

            

            <h3
              className="text-[2.2rem] md:text-2xl font-bold text-center mt-6"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              On Request
            </h3>
            <h2 className="font-semibold">Unlimited Agents</h2>

            <div
              className="flex items-center font-semibold mt-4"
              style={{ fontFamily: "'Poppins',sans-serif", fontSize: "14px" }}
            >
              <FaCheckCircle className="text-green-400 text-[14px] mr-2" />
              Unlimited Service Conversation
            </div>
            <div
              className="flex items-center font-semibold mt-4"
              style={{ fontFamily: "'Poppins',sans-serif", fontSize: "14px" }}
            >
              <FaCheckCircle className="text-green-400 text-[14px] mr-2" />
              Dedicated account manager
            </div>
            <a href="https://api.whatsapp.com/send?phone=919031011559&text=Hello%2C%20I%20am%20from%20%23%23Website%23%23" target="_blank" rel="noopener noreferrer">
            <button className="mt-8 bg-gradient-to-r from-orange-700 via-orange-400 to-orange-600  text-white px-10 py-2   rounded-md hover:scale-105 transition-transform "  style={{ fontFamily: '"Poppins", sans-serif' }}>
              Chat on Whatsapp
            </button></a>
          </div>
          <div className="pl-6">
            <ul className="p-2 space-y-4 px-4">
              <li
                className="flex items-center font-semibold text-[1rem] gap-[1rem]"
                style={{ fontFamily: '"Poppins", sans-serif', fontSize: '15px' }}
              >
                {" "}
                <FaCheckCircle className="text-green-950 text-[20px]" />
                Recommended for Brands with 10 Lac Monthly Volume
              </li>
              <li
                className="flex items-center font-semibold text-[1rem] gap-[1rem]"
                style={{ fontFamily: '"Poppins", sans-serif', fontSize: '15px' }}
              >
                {" "}
                <FaCheckCircle className="text-green-950 text-[14px]" />
                All features of Pro Plan
              </li>

              <li
                className="flex items-center font-semibold text-[1rem] gap-[1rem]"
                style={{ fontFamily: '"Poppins", sans-serif', fontSize: '15px' }}
              >
                {" "}
                <FaCheckCircle className="text-green-950 text-[14px]" />
                Unlimited Tags
              </li>
              <li
                className="flex items-center font-semibold text-[1rem] gap-[1rem]"
                style={{ fontFamily: '"Poppins", sans-serif', fontSize: '15px' }}
              >
                {" "}
                <FaCheckCircle className="text-green-950 text-[14px]" />{" "}
                Unlimited Attributes
              </li>
              <li
                className="flex items-center font-semibold text-[1rem] gap-[1rem]"
                style={{ fontFamily: '"Poppins", sans-serif', fontSize: '15px' }}
              >
                {" "}
                <FaCheckCircle className="text-green-950 text-[14px]" />{" "}
                Downloadable Reports
              </li>
              <li
                className="flex items-center font-semibold text-[1rem] gap-[1rem]"
                style={{ fontFamily: '"Poppins", sans-serif', fontSize: '15px' }}
              >
                {" "}
                <FaCheckCircle className="text-green-950 text-[14px]" /> Higher
                Messaging Speed
              </li>
            </ul>
          </div>
        </div>
      </div>
    
    <Footer/>
  </>
  )
}

