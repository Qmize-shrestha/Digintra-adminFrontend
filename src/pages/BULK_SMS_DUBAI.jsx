
// import React from 'react';
// import "./bulk.css";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import { Autoplay, Pagination } from 'swiper/modules';
// import icons1 from "../assets/icons8-arrow-100.png";
// import icons2 from "../assets/icons8-call-50.png";
// import icons3 from "../assets/business.png";
// import icons4 from "../assets/otp.png";
// import icons5 from "../assets/appa.png";
// import icons6 from "../assets/pay.png";
// import icons7 from "../assets/update.png";
// import icons8 from "../assets/rate.png";
// import icons9 from "../assets/fast.png";
// import icons10 from "../assets/t3.png";
// import icons11 from "../assets/c1.png";
// import icons12 from "../assets/c2.png";
// import icons13 from "../assets/c3.png";
// import icons14 from "../assets/c4.png";
// import icons15 from "../assets/start2.png";
// import icons16 from "../assets/icons8-plus-501.png";
// import Footer from '../components/Footer';
// import { Helmet } from 'react-helmet';
// import Client from '../components/Client';
// import Getstarted from '../components/Getstarted';
// import {FaUserPlus, FaWhatsapp } from 'react-icons/fa';
// import Businesskeycomp from '../components/Businesskeycomp';
// import ReliDelivery from '../assets/key1.jpg'
// import UserFriend from '../assets/key2.jpg';
// import API from '../assets/key3.jpg';
// import Customize from '../assets/key4.jpg';
// import Transactional from '../assets/key5.jpg';
// import Time from '../assets/key6.jpg';
// import Pricing from '../assets/key_7.jpg';
// import Management from '../assets/key8.jpg';
// import Security from '../assets/key9.jpg';
// import Hotel from '../assets/hotel.png';
// import Education from '../assets/education.png';
// import Retail from '../assets/retail.png';
// import Home from '../assets/home.png';
// import Health from '../assets/health.png';
// import CostEffect from '../assets/costeffective.png';
// import Personalisation from '../assets/personalisation.png';
// import key7 from '../assets/key_7.jpg'
// import key8 from '../assets/key8.jpg';



// export default function Bulk_sms_provider_dubai() {
//     const [Ques1, setQues1] = useState(false);
//     const [Ques2, setQues2] = useState(false);
//     const [Ques3, setQues3] = useState(false);
//     const [Ques4, setQues4] = useState(false);
//     const [Ques5, setQues5] = useState(false);
//     const [Ques6, setQues6] = useState(false);
//     const [Ques7, setQues7] = useState(false);
//     const [Ques8, setQues8] = useState(false);
//     const [Ques9, setQues9] = useState(false);
//     const [Ques10, setQues10] = useState(false);
//     function handleQues1() {
//       setQues1(!Ques1);
//       setQues2(false);
//       setQues3(false);
//       setQues4(false);
//       setQues5(false);
//       setQues6(false);
//       setQues7(false);
//       setQues8(false);
//       setQues9(false);
//       setQues10(false);
//     }
//     function handleQues2() {
//       setQues2(!Ques2);
//       setQues1(false);
//       setQues3(false);
//       setQues4(false);
//       setQues5(false);
//       setQues6(false);
//       setQues7(false);
//       setQues8(false);
//       setQues9(false);
//       setQues10(false);
//     }
  
//     function handleQues3() {
//       setQues3(!Ques3);
//       setQues2(false);
//       setQues1(false);
//       setQues4(false);
//       setQues5(false);
//       setQues6(false);
//       setQues7(false);
//       setQues8(false);
//       setQues9(false);
//       setQues10(false);
//     }
//     function handleQues4() {
//       setQues4(!Ques4);
//       setQues2(false);
//       setQues3(false);
//       setQues1(false);
//       setQues5(false);
//       setQues6(false);
//       setQues7(false);
//       setQues8(false);
//       setQues9(false);
//       setQues10(false);
//     }
//     function handleQues5() {
//       setQues5(!Ques5);
//       setQues2(false);
//       setQues3(false);
//       setQues4(false);
//       setQues1(false);
//       setQues6(false);
//       setQues7(false);
//       setQues8(false);
//       setQues9(false);
//       setQues10(false);
//     }
//     function handleQues6() {
//         setQues6(!Ques6);
//         setQues2(false);
//         setQues3(false);
//         setQues4(false);
//         setQues5(false);
//         setQues1(false);
//         setQues7(false);
//         setQues8(false);
//         setQues9(false);
//         setQues10(false);
//       }
//       function handleQues7() {
//         setQues7(!Ques7);
//         setQues2(false);
//         setQues3(false);
//         setQues4(false);
//         setQues5(false);
//         setQues6(false);
//         setQues1(false);
//         setQues8(false);
//         setQues9(false);
//         setQues10(false);
//       }
//       function handleQues8() {
//         setQues8(!Ques8);
//         setQues2(false);
//         setQues3(false);
//         setQues4(false);
//         setQues5(false);
//         setQues6(false);
//         setQues7(false);
//         setQues1(false);
//         setQues9(false);
//         setQues10(false);
//       }
//       function handleQues9() {
//         setQues9(!Ques9);
//         setQues2(false);
//         setQues3(false);
//         setQues4(false);
//         setQues5(false);
//         setQues6(false);
//         setQues7(false);
//         setQues8(false);
//         setQues1(false);
//         setQues10(false);
//       }
//       function handleQues10() {
//         setQues10(!Ques10);
//         setQues2(false);
//         setQues3(false);
//         setQues4(false);
//         setQues5(false);
//         setQues6(false);
//         setQues7(false);
//         setQues8(false);
//         setQues9(false);
//         setQues1(false);
//       }
//       useEffect(()=>{
//         window.scrollTo(0,0);
//       },[])
//   return (
//     <>
//     <Helmet>
//     <meta name="robots" content="index, follow" />

//       <title>Bulk SMS Provider in Dubai | Bulk SMS in Dubai


// </title>
//       <meta name="description" content='Looking for a trusted bulk SMS service Dubai? DIGINTRA SMS platform offers seamless messaging solutions to boost your business outreach and engagement.


// '/>
//  <meta name="keywords" content="bulk sms in dubai, bulk sms provider in dubai 

// " />
//    <link rel="canonical" href="https://digintra.com/bulk-sms-dubai" />
//     </Helmet>
      
//     <div className=" patterncon relative w-auto pt-[230px] lg:h-[720px] pb-[50px] ">
//     <div className='absolute inset-0 backdrop-blur-md w-full h-full'></div>
//         <div className='w-auto relative z-10 h-auto'>
//             <div className='w-[310px] lg:w-[1140px] py-10 h-auto mx-auto'>

            
//         <h1 className="text-center text-[30px] font-semibold " style={{fontFamily:"'Montserrat',sans-serif"}}>Bulk SMS Provider in DUBAI</h1>
//         <p className='text-center px-4 mt-4' style={{fontFamily:"'Poppins',sans-serif"}}>Grow your Business with DIGINTRA A2P Messaging Services</p>
//         <p className='text-center px-4 mt-4' style={{fontFamily:"'Poppins',sans-serif"}}>All it takes is <strong>30 seconds.</strong> Simply click the sign-up buttonbelow and you will receive FREE DEMO Credit to test.</p>
//         <div className="h-auto mx-auto px-12 mt-7 flex md:justify-center items-center gap-4 md:gap-8 flex-col md:flex-row">
//             <a href="https://sms-login.digintra.com/User/SignUp">
//               <button className="border-b-2 border-[#1e3b8d] ml-2 lg:ml-0 bg-gradient-to-tr from-[#3e8646] to-[#2fac13] w-[220px] h-16 rounded-lg shadow-xl transition-transform transform hover:scale-110 hover:shadow-2xl text-white font-bold flex items-center justify-center gap-2">
//                 <FaUserPlus className="h-6 w-6" />
//                 Register Now
//               </button>
//             </a>
//             <a href='https://api-wa.co/nVOl41'>
//               <button className="border-b-2 text-white  border-[#1e3b8d] mt-6 md:mt-0  ml-2 lg:ml-0 bg-gradient-to-tr from-[#00b09b] to-[#96c93d] w-[220px] h-16 rounded-lg font-bold shadow-xl transition-transform transform hover:scale-110 hover:shadow-2xl flex items-center justify-center gap-2">
//                 <FaWhatsapp className="h-6 w-6" />
//                 Chat on WhatsApp
//               </button>
//             </a>
//           </div>
//         </div>
//         </div>
        
//     </div>
//    <div className='w-auto bg-white h-auto'>
// <div className='w-[310px] lg:w-[1140px] lg:flex lg:flex-row-reverse h-auto mx-auto'>
// <img src={icons3} alt='Bulk SMS Provider in dubai' className='lg:w-[510px]'/>
// <div className='pt-[50px] space-y-4'>
// <h2 class="text-xl text-center lg:text-left " style={{fontFamily:"'Montserrat', sans-serif"}}><strong>Bulk SMS Provider in DUBAI </strong></h2>
// <p style={{fontFamily:"'Poppins',sans-serif"}}>Businesses must find effective ways to communicate with their customers instantly in today’s fast-paced digital world. Whether you're a startup, a school, a retail outlet, or a service provider, SMS marketing has emerged as one of the most direct and impactful forms of customer engagement. If you’re located in or around DUBAI, Bihar, finding a reliable Bulk SMS Provider in DUBAI can be a game-changer for your outreach efforts.</p>
// <h2 class="text-xl text-center lg:text-left " style={{fontFamily:"'Montserrat', sans-serif"}}><strong>Why Bulk SMS Matters in DUBAI's Business Landscape:</strong></h2>
// <p style={{fontFamily:"'Poppins',sans-serif"}}>Choosing a Bulk SMS Provider in DUBAI offers several benefits, especially for local businesses aiming to build a strong regional presence. A local provider understands the market better, can offer tailored services, and ensures quicker support in case of any technical issues.</p>

// </div>
// </div>
//    </div>
//    <div className='w-auto h-auto bg-white'>
//     <div className='w-[310px] lg:w-[1140px] h-auto mx-auto'>
//      <h2 className='text-xl font-semibold text-center pt-6 lg:text-[30px] md:pt-[50px]' style={{fontFamily:"'Montserrat', sans-serif"}}>Choosing the Right Bulk SMS Provider in DUBAI:</h2>
//      <div className='w-[200px] h-[4px] bg-blue-800 mx-auto my-6'></div>
//      <div className='w-[310px h-auto mx-auto lg:pt-[80px]  space-y-7'>

   
//      <div className='w-[310px h-auto mx-auto] space-y-3'>
    
//     <ul className='list-disc font-semibold space-y-2'>
//         <li><strong>Reliability and Delivery Rates:</strong>Ensure the provider has a strong network and guarantees high delivery rates.</li>
//         <li><strong>Pricing:</strong>Compare pricing plans and choose a provider that offers competitive rates and transparent billing.</li>
//         <li><strong>Features:</strong>Look for features like personalized messaging, delivery reports, and API integration.</li>
//         <li><strong>Customer Support:</strong>Choose a provider with responsive customer support to address any issues promptly.</li>
//         <li><strong>Compliance:</strong>Ensure the provider adheres to all relevant regulations, including TRAI guidelines.</li>
//         <li><strong>User Interface: </strong>Look for a provider with an easy to use platform.</li>
//     </ul>




//        </div>
    

     
     

//     </div>
//    </div>

//    {/* third content */}
//    <Businesskeycomp/>



//    {/* fourth content */}
//  <div>
//     {[
//       {
//         id: "01",
//         title: "Reliable Delivery:",
//         text: "Ensure the provider guarantees high delivery rates and provides delivery reports for transparency.",
//         image: ReliDelivery,
//       },
//       {
//         id: "02",
//         title: "User-Friendly Platform:",
//         text: "An intuitive platform makes it easy to send and manage your SMS campaigns.",
//         image: UserFriend,
//         reverse: true,
//       },
//       {
//         id: "03",
//         title: "API Integration:",
//         text: "Seamless integration with your existing CRM or other systems for automated SMS delivery.",
//         image: API,
//       },
//       {
//         id: "04",
//         title: "Customization Options:",
//         text: "Personalize your messages with sender IDs, dynamic content, and scheduling options.",
//         image: Customize,
//         reverse: true,
//       },
//       {
//         id: "05",
//         title: "Transactional and Promotional SMS:",
//         text: "Choose a provider that offers both transactional and promotional SMS services to cater to your diverse communication needs.",
//         image: Transactional,
//       },
//       {
//         id: "06",
//         title: "24/7 Support:",
//         text: "Round-the-clock customer support is essential for addressing any urgent issues.",
//         image: Time,
//         reverse: true,
//       },
//       {
//         id: "07",
//         title: "Competitive Pricing:",
//         text: "Evaluate pricing plans based on your volume and usage requirements.",
//         image: Pricing,
//       },
//       {
//         id: "08",
//         title: "Opt-out Management:",
//         text: "Proper opt-out management is required to maintain compliance with regulations and user preferences.",
//         image: Management,
//         reverse: true,
//       },
//       {
//         id: "09",
//         title: "Security:",
//         text: "Data security is paramount. Ensure the Bulk SMS Provider in Dhanbad follows best practices to protect your data.",
//         image: Security,
//       },
//     ].map(({ id, title, text, image, reverse }, index) => (
//       <div key={index} className="flex justify-center items-center h-auto min-h-[50vh] py-6 max-sm:flex-col">
//         <div className="flex justify-around items-center w-4/5 max-sm:w-full max-sm:flex-col h-auto rounded-lg border-r-4 border-b-2 border-dashed border-blue-800 bg-gradient-to-tr from-indigo-100 via-green-100 to-orange-100 p-4">
          
//           {/* Image Section */}
//           {!reverse && (
//             <div className="max-sm:mb-4">
//               <img src={image} alt={title} className="w-[15rem] h-[15rem] max-sm:w-[10rem] max-sm:h-[10rem] rounded-md mx-auto" />
//             </div>
//           )}
  
//           {/* Text Section */}
//           <div className="w-[35%] max-sm:w-full bg-gradient-to-tr from-white p-5 rounded-xl relative text-center">
//             <p className="text-[4rem] max-sm:text-2xl font-bold absolute -right-5 max-sm:right-auto max-sm:left-1/2 max-sm:-translate-x-1/2 -top-[4rem] max-sm:-top-[2rem] text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-indigo-600 to-pink-500">
//               {id}
//             </p>
//             <p className="text-[1.5rem] max-sm:text-lg font-semibold" style={{ fontFamily: "'Montserrat',sans-serif" }}>
//               {title}
//             </p>
//             <p className="max-sm:text-sm" style={{ fontFamily: "'Poppins',sans-serif" }}>
//               {text}
//             </p>
//           </div>
  
//           {/* Image Section (Reversed Layout) */}
//           {reverse && (
//             <div className="max-sm:mt-4">
//               <img src={image} alt={title} className="w-[15rem] h-[15rem] max-sm:w-[10rem] max-sm:h-[10rem] rounded-md mx-auto" />
//             </div>
//           )}
//         </div>
//       </div>
//     ))}
//   </div>




    
//   <div className=' flex justify-center w-[310px h-auto mx-auto] space-y-3'>
   
//     <ul className='list-disc font-semibold space-y-2'>
//     <h2 className='font-bold text-3xl'>Services Offered by a Bulk SMS Provider in DUBAI</h2>
//     <p>When you opt for a top-rated Bulk SMS Provider in DUBAI, you can expect a variety of services tailored to different industries and needs:</p>
//         <li><strong>Transactional SMS:  </strong>For banks, schools, and hospitals to send OTPs, alerts, and updates.</li>
//         <li><strong>Promotional SMS:  </strong>Ideal for retail, real estate, and events to market offers and services.</li>
//         <li><strong>Voice SMS & Missed Call Alerts:  </strong>Advanced tools for lead generation and customer engagement.</li>
//         <li><strong>SMS API Integration:  </strong>Seamlessly connect your website or app with SMS services.</li>
       
//     </ul>




//        </div>




















   

//    {/* fourth content */}

//    <div className='w-auto bg-white h-auto pt-[100px] '>
//     <div className='w-[310px] lg:w-[1140px] h-auto mx-auto'>
//     <h1 className='text-center text-[20px] lg:text-[30px] font-semibold' style={{fontFamily:"'Montserrrat', sans-serif"}}>Why Choose a Bulk SMS Provider in DUBAI?</h1>
//     <div className='w-[200px] h-[4px] bg-blue-700 mx-auto'></div>

//     <div className='w-[310px] flex flex-col lg:flex-row gap-16 py-10 justify-between lg:w-[1140px] lg:py-10 h-auto mx-auto'>

//   {/* first card */}

// <div className="w-[300px] bg-gradient-to-t from-orange-50 border-l-4 border-t-2 border-r-2 border-b-4 rounded-lg border-blue-800 h-auto p-4">
// <img src={icons8} className='h-[200px] mx-auto' alt='Bulk SMS Provider in Dubai'/>
// <h2 className='text-xl font-semibold text-blue-800 text-center' style={{fontFamily:"'Montserrat', sans-serif"}}>Wide Reach</h2>
// <p className='text-center pt-2' style={{fontFamily:"'Poppins',sans-serif"}}>DUBAI is a city with a diverse population. A Bulk SMS Provider in DUBAI ensures your message reaches a broad audience, regardless of their location within the city.</p>

// </div>

// {/* second  card */}
// <div className="w-[300px] bg-gradient-to-t from-orange-50 border-l-4 border-t-2 border-r-2 border-b-4 rounded-lg border-blue-800 h-auto p-4">
// <img src={CostEffect} className='h-[200px] mx-auto' alt='Bulk SMS Provider in Dubai' />
// <h2 className='text-xl font-semibold text-blue-800 text-center' style={{fontFamily:"'Montserrat', sans-serif"}}>Cost-Effectiveness</h2>
// <p className='text-center pt-2' style={{fontFamily:"'Poppins',sans-serif"}}>Compared to traditional advertising, SMS marketing is highly economical. You can convey crucial information without breaking the bank.</p>

// </div>


// {/* third card */}
// <div className="w-[300px] bg-gradient-to-t from-orange-50 border-l-4 border-t-2 border-r-2 border-b-4 rounded-lg border-blue-800 h-auto p-4">
// <img src={Retail} className='h-[200px] mx-auto' alt='Bulk SMS Provider in Dubai' />
// <h2 className='text-xl font-semibold text-blue-800 text-center' style={{fontFamily:"'Montserrat', sans-serif"}}>Instant Delivery:</h2>
// <p className='text-center pt-2' style={{fontFamily:"'Poppins',sans-serif"}}>SMS messages are delivered almost instantaneously, ensuring your information reaches its recipients in real-time. This is vital for time-sensitive updates, promotions, and alerts.</p>

// </div>





//     </div>

//     <div className='w-[310px] flex flex-col lg:flex-row gap-16 py-10 justify-around lg:w-[1140px] lg:py-10 h-auto mx-auto'>
//     <div className="w-[300px] bg-gradient-to-t from-orange-50 border-l-4 border-t-2 border-r-2 border-b-4 rounded-lg border-blue-800 h-auto p-4">
// <img src={key7} className='h-[200px] mx-auto' alt='Bulk SMS Provider in Dubai' />
// <h2 className='text-xl font-semibold text-blue-800 text-center' style={{fontFamily:"'Montserrat', sans-serif"}}>High Open Rates</h2>
// <p className='text-center pt-2' style={{fontFamily:"'Poppins',sans-serif"}}>SMS messages boast significantly higher open rates than emails. People are more likely to read a text message, guaranteeing your message gets noticed.</p>

// </div>


// <div className="w-[300px] bg-gradient-to-t from-orange-50 border-l-4 border-t-2 border-r-2 border-b-4 rounded-lg border-blue-800 h-auto p-4">
// <img src={icons10} className='h-[200px] mx-auto' alt='Bulk SMS Provider in Dubai' />
// <h2 className='text-xl font-semibold text-blue-800 text-center' style={{fontFamily:"'Montserrat', sans-serif"}}>Personalized Communication</h2>
// <p className='text-center pt-2' style={{fontFamily:"'Poppins',sans-serif"}}>Bulk SMS Provider in DUBAI services allow for personalization, enabling you to address recipients by name and tailor your message for better engagement.</p>

// </div>

// <div className="w-[300px] bg-gradient-to-t from-orange-50 border-l-4 border-t-2 border-r-2 border-b-4 rounded-lg border-blue-800 h-auto p-4">
// <img src={key8} className='h-[200px] mx-auto' alt='Bulk SMS Provider in Dubai' />
// <h2 className='text-xl font-semibold text-blue-800 text-center' style={{fontFamily:"'Montserrat', sans-serif"}}>Enhanced Customer Engagement</h2>
// <p className='text-center pt-2' style={{fontFamily:"'Poppins',sans-serif"}}>From promotional offers to transactional updates, SMS marketing helps you stay connected with your customers, fostering loyalty and driving sales.</p>

// </div>


// </div>




//     </div>
//     </div>


//     <div>


//     <h1 className='text-center text-[20px] lg:text-[30px] font-semibold' style={{fontFamily:"'Montserrrat', sans-serif"}}>Applications of Bulk SMS in DUBAI:</h1>
//     <div className='w-[200px] h-[4px] bg-blue-700 mx-auto'></div>
//     <div className='w-[310px] flex flex-col lg:flex-row gap-16 py-10 justify-between lg:w-[1140px] lg:py-10 h-auto mx-auto'>

// {/* first card */}

// <div className="w-[300px] bg-gradient-to-t from-blue-50 border-l-4 border-t-2 border-r-2 border-b-4 rounded-lg border-green-800 h-auto p-4">
// <img src={Retail} className='h-[200px] mx-auto' alt='Bulk SMS Provider in dubai'/>
// <h2 className='text-xl font-semibold text-green-800 text-center' style={{fontFamily:"'Montserrat', sans-serif"}}>Retail Businesses</h2>
// <p className='text-center pt-2' style={{fontFamily:"'Poppins',sans-serif"}}>Send promotional offers, discounts, and new product announcements to attract customers.</p>

// </div>

// {/* second  card */}
// <div className="w-[300px] bg-gradient-to-t from-blue-50 border-l-4 border-t-2 border-r-2 border-b-4 rounded-lg border-green-800 h-auto p-4">
// <img src={Education} className='h-[200px] mx-auto' alt='Bulk SMS Provider in dubai' />
// <h2 className='text-xl font-semibold text-green-800 text-center' style={{fontFamily:"'Montserrat', sans-serif"}}>Educational Institutions</h2>
// <p className='text-center pt-2' style={{fontFamily:"'Poppins',sans-serif"}}>Share exam schedules, fee reminders, and important announcements with students and parents.</p>

// </div>


// {/* third card */}
// <div className="w-[300px] bg-gradient-to-t from-blue-50 border-l-4 border-t-2 border-r-2 border-b-4 rounded-lg border-green-800 h-auto p-4">
// <img src={Health} className='h-[200px] mx-auto' alt='Bulk SMS Provider in dubai' />
// <h2 className='text-xl font-semibold text-green-800 text-center' style={{fontFamily:"'Montserrat', sans-serif"}}>Hospitals and Healthcare</h2>
// <p className='text-center pt-2' style={{fontFamily:"'Poppins',sans-serif"}}>Send appointment reminders, health tips, and emergency alerts.</p>

// </div>





//   </div>



//   <div className='w-[310px] flex flex-col lg:flex-row gap-16 py-10 justify-between lg:w-[1140px] lg:py-10 h-auto mx-auto'>

// {/* first card */}

// <div className="w-[300px] bg-gradient-to-t from-blue-50 border-l-4 border-t-2 border-r-2 border-b-4 rounded-lg border-green-800 h-auto p-4">
// <img src={Home} className='h-[200px] mx-auto' alt='Bulk SMS Provider in dubai'/>
// <h2 className='text-xl font-semibold text-green-800 text-center' style={{fontFamily:"'Montserrat', sans-serif"}}>Real Estate</h2>
// <p className='text-center pt-2' style={{fontFamily:"'Poppins',sans-serif"}}>Notify potential buyers about new property listings and open house events.</p>

// </div>

// {/* second  card */}
// <div className="w-[300px] bg-gradient-to-t from-blue-50 border-l-4 border-t-2 border-r-2 border-b-4 rounded-lg border-green-800 h-auto p-4">
// <img src={icons9} className='h-[200px] mx-auto' alt='Bulk SMS Provider in dubai' />
// <h2 className='text-xl font-semibold text-green-800 text-center' style={{fontFamily:"'Montserrat', sans-serif"}}>Event Management</h2>
// <p className='text-center pt-2' style={{fontFamily:"'Poppins',sans-serif"}}>Promote events, send reminders, and share updates with attendees.</p>

// </div>


// {/* third card */}
// <div className="w-[300px] bg-gradient-to-t from-blue-50 border-l-4 border-t-2 border-r-2 border-b-4 rounded-lg border-green-800 h-auto p-4">
// <img src={Retail} className='h-[200px] mx-auto' alt='Bulk SMS Provider in dubai' />
// <h2 className='text-xl font-semibold text-green-800 text-center' style={{fontFamily:"'Montserrat', sans-serif"}}>Logistics & Transportation</h2>
// <p className='text-center pt-2' style={{fontFamily:"'Poppins',sans-serif"}}>Sending delivery updates, and shipment notifications.</p>

// </div>





//   </div>
//     </div>



//     <div className="p-6 bg-white shadow-lg rounded-lg text-center">
//   <h2 className="font-bold text-3xl text-gray-800 mb-4">
//   Maximizing Your SMS Marketing Campaign
//   </h2>
//   <ul className="list-disc list-inside text-gray-700 space-y-3 inline-block text-left">
//     <li>
//       <strong>Keep Messages Concise:</strong>SMS messages are limited in length, so keep your messages short and to the point.
//     </li>
//     <li><strong>Include a Clear Call to Action:</strong> Tell recipients what you want them to do, whether it's visiting your website or taking advantage of a special offer.</li>
//     <li><strong>Personalize Your Messages:</strong> to test the platform and delivery rates.</li>
//     <li><strong>Ask for detailed pricing</strong> Address recipients by name and tailor your messages to their interests.</li>
//     <li><strong>Timing is Key:</strong>  Send messages at optimal times to maximize engagement.</li>
//     <li><strong>Obtain Consent: </strong>Always obtain explicit consent before sending SMS messages to avoid spam complaints.</li>
//     <li><strong>Track Your Results:</strong>Monitor delivery reports and analyze campaign performance to optimize your strategy.</li>
//   </ul>
//   <p className="mt-4 text-gray-700 font-medium">
//   Simply it can be said that a reliable Bulk SMS Provider in DUBAI like Digintra can be a game-changer for businesses and organizations looking to enhance their communication strategies. By leveraging the power of SMS marketing, you can reach a wider audience, improve customer engagement, and drive growth. So, explore your options and try to contact the professionals of Digintra today itself. 
//   </p>
// </div>




//     {/* fifth content */}

//     <Client/>

// {/* sixth content */}

// <Getstarted/>

//    </div>
//    <Footer/>
//    </>
//   )
// }

// import React from 'react';
// import "./bulk.css";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import { Autoplay, Pagination } from 'swiper/modules';
// import icons1 from "../assets/icons8-arrow-100.png";
// import icons2 from "../assets/icons8-call-50.png";
// import icons3 from "../assets/business.png";
// import icons4 from "../assets/otp.png";
// import icons5 from "../assets/appa.png";
// import icons6 from "../assets/pay.png";
// import icons7 from "../assets/update.png";
// import icons8 from "../assets/rate.png";
// import icons9 from "../assets/fast.png";
// import icons10 from "../assets/t3.png";
// import icons11 from "../assets/c1.png";
// import icons12 from "../assets/c2.png";
// import icons13 from "../assets/c3.png";
// import icons14 from "../assets/c4.png";
// import icons15 from "../assets/start2.png";
// import icons16 from "../assets/icons8-plus-501.png";
// import Footer from '../components/Footer';
// import { Helmet } from 'react-helmet';
// import Client from '../components/Client';
// import Getstarted from '../components/Getstarted';
// import {FaUserPlus, FaWhatsapp } from 'react-icons/fa';
// import Businesskeycomp from '../components/Businesskeycomp';
// import ReliDelivery from '../assets/key1.jpg'
// import UserFriend from '../assets/key2.jpg';
// import API from '../assets/key3.jpg';
// import Customize from '../assets/key4.jpg';
// import Transactional from '../assets/key5.jpg';
// import Time from '../assets/key6.jpg';
// import Pricing from '../assets/key_7.jpg';
// import Management from '../assets/key8.jpg';
// import Security from '../assets/key9.jpg';
// import Hotel from '../assets/hotel.png';
// import Education from '../assets/education.png';
// import Retail from '../assets/retail.png';
// import Home from '../assets/home.png';
// import Health from '../assets/health.png';
// import CostEffect from '../assets/costeffective.png';
// import Personalisation from '../assets/personalisation.png';
// import key7 from '../assets/key_7.jpg'
// import key8 from '../assets/key8.jpg';



// export default function Bulk_sms_provider_dubai() {
//     const [Ques1, setQues1] = useState(false);
//     const [Ques2, setQues2] = useState(false);
//     const [Ques3, setQues3] = useState(false);
//     const [Ques4, setQues4] = useState(false);
//     const [Ques5, setQues5] = useState(false);
//     const [Ques6, setQues6] = useState(false);
//     const [Ques7, setQues7] = useState(false);
//     const [Ques8, setQues8] = useState(false);
//     const [Ques9, setQues9] = useState(false);
//     const [Ques10, setQues10] = useState(false);
//     function handleQues1() {
//       setQues1(!Ques1);
//       setQues2(false);
//       setQues3(false);
//       setQues4(false);
//       setQues5(false);
//       setQues6(false);
//       setQues7(false);
//       setQues8(false);
//       setQues9(false);
//       setQues10(false);
//     }
//     function handleQues2() {
//       setQues2(!Ques2);
//       setQues1(false);
//       setQues3(false);
//       setQues4(false);
//       setQues5(false);
//       setQues6(false);
//       setQues7(false);
//       setQues8(false);
//       setQues9(false);
//       setQues10(false);
//     }

//     function handleQues3() {
//       setQues3(!Ques3);
//       setQues2(false);
//       setQues1(false);
//       setQues4(false);
//       setQues5(false);
//       setQues6(false);
//       setQues7(false);
//       setQues8(false);
//       setQues9(false);
//       setQues10(false);
//     }
//     function handleQues4() {
//       setQues4(!Ques4);
//       setQues2(false);
//       setQues3(false);
//       setQues1(false);
//       setQues5(false);
//       setQues6(false);
//       setQues7(false);
//       setQues8(false);
//       setQues9(false);
//       setQues10(false);
//     }
//     function handleQues5() {
//       setQues5(!Ques5);
//       setQues2(false);
//       setQues3(false);
//       setQues4(false);
//       setQues1(false);
//       setQues6(false);
//       setQues7(false);
//       setQues8(false);
//       setQues9(false);
//       setQues10(false);
//     }
//     function handleQues6() {
//         setQues6(!Ques6);
//         setQues2(false);
//         setQues3(false);
//         setQues4(false);
//         setQues5(false);
//         setQues1(false);
//         setQues7(false);
//         setQues8(false);
//         setQues9(false);
//         setQues10(false);
//       }
//       function handleQues7() {
//         setQues7(!Ques7);
//         setQues2(false);
//         setQues3(false);
//         setQues4(false);
//         setQues5(false);
//         setQues6(false);
//         setQues1(false);
//         setQues8(false);
//         setQues9(false);
//         setQues10(false);
//       }
//       function handleQues8() {
//         setQues8(!Ques8);
//         setQues2(false);
//         setQues3(false);
//         setQues4(false);
//         setQues5(false);
//         setQues6(false);
//         setQues7(false);
//         setQues1(false);
//         setQues9(false);
//         setQues10(false);
//       }
//       function handleQues9() {
//         setQues9(!Ques9);
//         setQues2(false);
//         setQues3(false);
//         setQues4(false);
//         setQues5(false);
//         setQues6(false);
//         setQues7(false);
//         setQues8(false);
//         setQues1(false);
//         setQues10(false);
//       }
//       function handleQues10() {
//         setQues10(!Ques10);
//         setQues2(false);
//         setQues3(false);
//         setQues4(false);
//         setQues5(false);
//         setQues6(false);
//         setQues7(false);
//         setQues8(false);
//         setQues9(false);
//         setQues1(false);
//       }
//       useEffect(()=>{
//         window.scrollTo(0,0);
//       },[])
//   return (
//     <>
//     <Helmet>
//     <meta name="robots" content="index, follow" />

//       <title>Bulk SMS Provider in Dubai | Bulk SMS in Dubai


// </title>
//       <meta name="description" content='Looking for a trusted bulk SMS service Dubai? DIGINTRA SMS platform offers seamless messaging solutions to boost your business outreach and engagement.


// '/>
//  <meta name="keywords" content="bulk sms in dubai, bulk sms provider in dubai 

// " />
//    <link rel="canonical" href="https://digintra.com/bulk-sms-dubai" />
//     </Helmet>

//     <div className=" patterncon relative w-auto pt-[230px] lg:h-[720px] pb-[50px] ">
//     <div className='absolute inset-0 backdrop-blur-md w-full h-full'></div>
//         <div className='w-auto relative z-10 h-auto'>
//             <div className='w-[310px] lg:w-[1140px] py-10 h-auto mx-auto'>


//         <h1 className="text-center text-[30px] font-semibold " style={{fontFamily:"'Montserrat',sans-serif"}}>Bulk SMS Provider in DUBAI</h1>
//         <p className='text-center px-4 mt-4' style={{fontFamily:"'Poppins',sans-serif"}}>Grow your Business with DIGINTRA A2P Messaging Services</p>
//         <p className='text-center px-4 mt-4' style={{fontFamily:"'Poppins',sans-serif"}}>All it takes is <strong>30 seconds.</strong> Simply click the sign-up buttonbelow and you will receive FREE DEMO Credit to test.</p>
//         <div className="h-auto mx-auto px-12 mt-7 flex md:justify-center items-center gap-4 md:gap-8 flex-col md:flex-row">
//             <a href="https://sms-login.digintra.com/User/SignUp">
//               <button className="border-b-2 border-[#1e3b8d] ml-2 lg:ml-0 bg-gradient-to-tr from-[#3e8646] to-[#2fac13] w-[220px] h-16 rounded-lg shadow-xl transition-transform transform hover:scale-110 hover:shadow-2xl text-white font-bold flex items-center justify-center gap-2">
//                 <FaUserPlus className="h-6 w-6" />
//                 Register Now
//               </button>
//             </a>
//             <a href='https://api-wa.co/nVOl41'>
//               <button className="border-b-2 text-white  border-[#1e3b8d] mt-6 md:mt-0  ml-2 lg:ml-0 bg-gradient-to-tr from-[#00b09b] to-[#96c93d] w-[220px] h-16 rounded-lg font-bold shadow-xl transition-transform transform hover:scale-110 hover:shadow-2xl flex items-center justify-center gap-2">
//                 <FaWhatsapp className="h-6 w-6" />
//                 Chat on WhatsApp
//               </button>
//             </a>
//           </div>
//         </div>
//         </div>

//     </div>
//    <div className='w-auto bg-white h-auto'>
// <div className='w-[310px] lg:w-[1140px] lg:flex lg:flex-row-reverse h-auto mx-auto'>
// <img src={icons3} alt='Bulk SMS Provider in dubai' className='lg:w-[510px]'/>
// <div className='pt-[50px] space-y-4'>
// <h2 class="text-xl text-center lg:text-left " style={{fontFamily:"'Montserrat', sans-serif"}}><strong>Bulk SMS Provider in DUBAI </strong></h2>
// <p style={{fontFamily:"'Poppins',sans-serif"}}>Businesses must find effective ways to communicate with their customers instantly in today’s fast-paced digital world. Whether you're a startup, a school, a retail outlet, or a service provider, SMS marketing has emerged as one of the most direct and impactful forms of customer engagement. If you’re located in or around DUBAI, Bihar, finding a reliable Bulk SMS Provider in DUBAI can be a game-changer for your outreach efforts.</p>
// <h2 class="text-xl text-center lg:text-left " style={{fontFamily:"'Montserrat', sans-serif"}}><strong>Why Bulk SMS Matters in DUBAI's Business Landscape:</strong></h2>
// <p style={{fontFamily:"'Poppins',sans-serif"}}>Choosing a Bulk SMS Provider in DUBAI offers several benefits, especially for local businesses aiming to build a strong regional presence. A local provider understands the market better, can offer tailored services, and ensures quicker support in case of any technical issues.</p>

// </div>
// </div>
//    </div>
//    <div className='w-auto h-auto bg-white'>
//     <div className='w-[310px] lg:w-[1140px] h-auto mx-auto'>
//      <h2 className='text-xl font-semibold text-center pt-6 lg:text-[30px] md:pt-[50px]' style={{fontFamily:"'Montserrat', sans-serif"}}>Choosing the Right Bulk SMS Provider in DUBAI:</h2>
//      <div className='w-[200px] h-[4px] bg-blue-800 mx-auto my-6'></div>
//      <div className='w-[310px h-auto mx-auto lg:pt-[80px]  space-y-7'>


//      <div className='w-[310px h-auto mx-auto] space-y-3'>

//     <ul className='list-disc font-semibold space-y-2'>
//         <li><strong>Reliability and Delivery Rates:</strong>Ensure the provider has a strong network and guarantees high delivery rates.</li>
//         <li><strong>Pricing:</strong>Compare pricing plans and choose a provider that offers competitive rates and transparent billing.</li>
//         <li><strong>Features:</strong>Look for features like personalized messaging, delivery reports, and API integration.</li>
//         <li><strong>Customer Support:</strong>Choose a provider with responsive customer support to address any issues promptly.</li>
//         <li><strong>Compliance:</strong>Ensure the provider adheres to all relevant regulations, including TRAI guidelines.</li>
//         <li><strong>User Interface: </strong>Look for a provider with an easy to use platform.</li>
//     </ul>




//        </div>





//     </div>
//    </div>

//    {/* third content */}
//    <Businesskeycomp/>



//    {/* fourth content */}
//  <div>
//     {[
//       {
//         id: "01",
//         title: "Reliable Delivery:",
//         text: "Ensure the provider guarantees high delivery rates and provides delivery reports for transparency.",
//         image: ReliDelivery,
//       },
//       {
//         id: "02",
//         title: "User-Friendly Platform:",
//         text: "An intuitive platform makes it easy to send and manage your SMS campaigns.",
//         image: UserFriend,
//         reverse: true,
//       },
//       {
//         id: "03",
//         title: "API Integration:",
//         text: "Seamless integration with your existing CRM or other systems for automated SMS delivery.",
//         image: API,
//       },
//       {
//         id: "04",
//         title: "Customization Options:",
//         text: "Personalize your messages with sender IDs, dynamic content, and scheduling options.",
//         image: Customize,
//         reverse: true,
//       },
//       {
//         id: "05",
//         title: "Transactional and Promotional SMS:",
//         text: "Choose a provider that offers both transactional and promotional SMS services to cater to your diverse communication needs.",
//         image: Transactional,
//       },
//       {
//         id: "06",
//         title: "24/7 Support:",
//         text: "Round-the-clock customer support is essential for addressing any urgent issues.",
//         image: Time,
//         reverse: true,
//       },
//       {
//         id: "07",
//         title: "Competitive Pricing:",
//         text: "Evaluate pricing plans based on your volume and usage requirements.",
//         image: Pricing,
//       },
//       {
//         id: "08",
//         title: "Opt-out Management:",
//         text: "Proper opt-out management is required to maintain compliance with regulations and user preferences.",
//         image: Management,
//         reverse: true,
//       },
//       {
//         id: "09",
//         title: "Security:",
//         text: "Data security is paramount. Ensure the Bulk SMS Provider in Dhanbad follows best practices to protect your data.",
//         image: Security,
//       },
//     ].map(({ id, title, text, image, reverse }, index) => (
//       <div key={index} className="flex justify-center items-center h-auto min-h-[50vh] py-6 max-sm:flex-col">
//         <div className="flex justify-around items-center w-4/5 max-sm:w-full max-sm:flex-col h-auto rounded-lg border-r-4 border-b-2 border-dashed border-blue-800 bg-gradient-to-tr from-indigo-100 via-green-100 to-orange-100 p-4">

//           {/* Image Section */}
//           {!reverse && (
//             <div className="max-sm:mb-4">
//               <img src={image} alt={title} className="w-[15rem] h-[15rem] max-sm:w-[10rem] max-sm:h-[10rem] rounded-md mx-auto" />
//             </div>
//           )}

//           {/* Text Section */}
//           <div className="w-[35%] max-sm:w-full bg-gradient-to-tr from-white p-5 rounded-xl relative text-center">
//             <p className="text-[4rem] max-sm:text-2xl font-bold absolute -right-5 max-sm:right-auto max-sm:left-1/2 max-sm:-translate-x-1/2 -top-[4rem] max-sm:-top-[2rem] text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-indigo-600 to-pink-500">
//               {id}
//             </p>
//             <p className="text-[1.5rem] max-sm:text-lg font-semibold" style={{ fontFamily: "'Montserrat',sans-serif" }}>
//               {title}
//             </p>
//             <p className="max-sm:text-sm" style={{ fontFamily: "'Poppins',sans-serif" }}>
//               {text}
//             </p>
//           </div>

//           {/* Image Section (Reversed Layout) */}
//           {reverse && (
//             <div className="max-sm:mt-4">
//               <img src={image} alt={title} className="w-[15rem] h-[15rem] max-sm:w-[10rem] max-sm:h-[10rem] rounded-md mx-auto" />
//             </div>
//           )}
//         </div>
//       </div>
//     ))}
//   </div>





//   <div className=' flex justify-center w-[310px h-auto mx-auto] space-y-3'>

//     <ul className='list-disc font-semibold space-y-2'>
//     <h2 className='font-bold text-3xl'>Services Offered by a Bulk SMS Provider in DUBAI</h2>
//     <p>When you opt for a top-rated Bulk SMS Provider in DUBAI, you can expect a variety of services tailored to different industries and needs:</p>
//         <li><strong>Transactional SMS:  </strong>For banks, schools, and hospitals to send OTPs, alerts, and updates.</li>
//         <li><strong>Promotional SMS:  </strong>Ideal for retail, real estate, and events to market offers and services.</li>
//         <li><strong>Voice SMS & Missed Call Alerts:  </strong>Advanced tools for lead generation and customer engagement.</li>
//         <li><strong>SMS API Integration:  </strong>Seamlessly connect your website or app with SMS services.</li>

//     </ul>




//        </div>






















//    {/* fourth content */}

//    <div className='w-auto bg-white h-auto pt-[100px] '>
//     <div className='w-[310px] lg:w-[1140px] h-auto mx-auto'>
//     <h1 className='text-center text-[20px] lg:text-[30px] font-semibold' style={{fontFamily:"'Montserrrat', sans-serif"}}>Why Choose a Bulk SMS Provider in DUBAI?</h1>
//     <div className='w-[200px] h-[4px] bg-blue-700 mx-auto'></div>

//     <div className='w-[310px] flex flex-col lg:flex-row gap-16 py-10 justify-between lg:w-[1140px] lg:py-10 h-auto mx-auto'>

//   {/* first card */}

// <div className="w-[300px] bg-gradient-to-t from-orange-50 border-l-4 border-t-2 border-r-2 border-b-4 rounded-lg border-blue-800 h-auto p-4">
// <img src={icons8} className='h-[200px] mx-auto' alt='Bulk SMS Provider in Dubai'/>
// <h2 className='text-xl font-semibold text-blue-800 text-center' style={{fontFamily:"'Montserrat', sans-serif"}}>Wide Reach</h2>
// <p className='text-center pt-2' style={{fontFamily:"'Poppins',sans-serif"}}>DUBAI is a city with a diverse population. A Bulk SMS Provider in DUBAI ensures your message reaches a broad audience, regardless of their location within the city.</p>

// </div>

// {/* second  card */}
// <div className="w-[300px] bg-gradient-to-t from-orange-50 border-l-4 border-t-2 border-r-2 border-b-4 rounded-lg border-blue-800 h-auto p-4">
// <img src={CostEffect} className='h-[200px] mx-auto' alt='Bulk SMS Provider in Dubai' />
// <h2 className='text-xl font-semibold text-blue-800 text-center' style={{fontFamily:"'Montserrat', sans-serif"}}>Cost-Effectiveness</h2>
// <p className='text-center pt-2' style={{fontFamily:"'Poppins',sans-serif"}}>Compared to traditional advertising, SMS marketing is highly economical. You can convey crucial information without breaking the bank.</p>

// </div>


// {/* third card */}
// <div className="w-[300px] bg-gradient-to-t from-orange-50 border-l-4 border-t-2 border-r-2 border-b-4 rounded-lg border-blue-800 h-auto p-4">
// <img src={Retail} className='h-[200px] mx-auto' alt='Bulk SMS Provider in Dubai' />
// <h2 className='text-xl font-semibold text-blue-800 text-center' style={{fontFamily:"'Montserrat', sans-serif"}}>Instant Delivery:</h2>
// <p className='text-center pt-2' style={{fontFamily:"'Poppins',sans-serif"}}>SMS messages are delivered almost instantaneously, ensuring your information reaches its recipients in real-time. This is vital for time-sensitive updates, promotions, and alerts.</p>

// </div>





//     </div>

//     <div className='w-[310px] flex flex-col lg:flex-row gap-16 py-10 justify-around lg:w-[1140px] lg:py-10 h-auto mx-auto'>
//     <div className="w-[300px] bg-gradient-to-t from-orange-50 border-l-4 border-t-2 border-r-2 border-b-4 rounded-lg border-blue-800 h-auto p-4">
// <img src={key7} className='h-[200px] mx-auto' alt='Bulk SMS Provider in Dubai' />
// <h2 className='text-xl font-semibold text-blue-800 text-center' style={{fontFamily:"'Montserrat', sans-serif"}}>High Open Rates</h2>
// <p className='text-center pt-2' style={{fontFamily:"'Poppins',sans-serif"}}>SMS messages boast significantly higher open rates than emails. People are more likely to read a text message, guaranteeing your message gets noticed.</p>

// </div>


// <div className="w-[300px] bg-gradient-to-t from-orange-50 border-l-4 border-t-2 border-r-2 border-b-4 rounded-lg border-blue-800 h-auto p-4">
// <img src={icons10} className='h-[200px] mx-auto' alt='Bulk SMS Provider in Dubai' />
// <h2 className='text-xl font-semibold text-blue-800 text-center' style={{fontFamily:"'Montserrat', sans-serif"}}>Personalized Communication</h2>
// <p className='text-center pt-2' style={{fontFamily:"'Poppins',sans-serif"}}>Bulk SMS Provider in DUBAI services allow for personalization, enabling you to address recipients by name and tailor your message for better engagement.</p>

// </div>

// <div className="w-[300px] bg-gradient-to-t from-orange-50 border-l-4 border-t-2 border-r-2 border-b-4 rounded-lg border-blue-800 h-auto p-4">
// <img src={key8} className='h-[200px] mx-auto' alt='Bulk SMS Provider in Dubai' />
// <h2 className='text-xl font-semibold text-blue-800 text-center' style={{fontFamily:"'Montserrat', sans-serif"}}>Enhanced Customer Engagement</h2>
// <p className='text-center pt-2' style={{fontFamily:"'Poppins',sans-serif"}}>From promotional offers to transactional updates, SMS marketing helps you stay connected with your customers, fostering loyalty and driving sales.</p>

// </div>


// </div>




//     </div>
//     </div>


//     <div>


//     <h1 className='text-center text-[20px] lg:text-[30px] font-semibold' style={{fontFamily:"'Montserrrat', sans-serif"}}>Applications of Bulk SMS in DUBAI:</h1>
//     <div className='w-[200px] h-[4px] bg-blue-700 mx-auto'></div>
//     <div className='w-[310px] flex flex-col lg:flex-row gap-16 py-10 justify-between lg:w-[1140px] lg:py-10 h-auto mx-auto'>

// {/* first card */}

// <div className="w-[300px] bg-gradient-to-t from-blue-50 border-l-4 border-t-2 border-r-2 border-b-4 rounded-lg border-green-800 h-auto p-4">
// <img src={Retail} className='h-[200px] mx-auto' alt='Bulk SMS Provider in dubai'/>
// <h2 className='text-xl font-semibold text-green-800 text-center' style={{fontFamily:"'Montserrat', sans-serif"}}>Retail Businesses</h2>
// <p className='text-center pt-2' style={{fontFamily:"'Poppins',sans-serif"}}>Send promotional offers, discounts, and new product announcements to attract customers.</p>

// </div>

// {/* second  card */}
// <div className="w-[300px] bg-gradient-to-t from-blue-50 border-l-4 border-t-2 border-r-2 border-b-4 rounded-lg border-green-800 h-auto p-4">
// <img src={Education} className='h-[200px] mx-auto' alt='Bulk SMS Provider in dubai' />
// <h2 className='text-xl font-semibold text-green-800 text-center' style={{fontFamily:"'Montserrat', sans-serif"}}>Educational Institutions</h2>
// <p className='text-center pt-2' style={{fontFamily:"'Poppins',sans-serif"}}>Share exam schedules, fee reminders, and important announcements with students and parents.</p>

// </div>


// {/* third card */}
// <div className="w-[300px] bg-gradient-to-t from-blue-50 border-l-4 border-t-2 border-r-2 border-b-4 rounded-lg border-green-800 h-auto p-4">
// <img src={Health} className='h-[200px] mx-auto' alt='Bulk SMS Provider in dubai' />
// <h2 className='text-xl font-semibold text-green-800 text-center' style={{fontFamily:"'Montserrat', sans-serif"}}>Hospitals and Healthcare</h2>
// <p className='text-center pt-2' style={{fontFamily:"'Poppins',sans-serif"}}>Send appointment reminders, health tips, and emergency alerts.</p>

// </div>





//   </div>



//   <div className='w-[310px] flex flex-col lg:flex-row gap-16 py-10 justify-between lg:w-[1140px] lg:py-10 h-auto mx-auto'>

// {/* first card */}

// <div className="w-[300px] bg-gradient-to-t from-blue-50 border-l-4 border-t-2 border-r-2 border-b-4 rounded-lg border-green-800 h-auto p-4">
// <img src={Home} className='h-[200px] mx-auto' alt='Bulk SMS Provider in dubai'/>
// <h2 className='text-xl font-semibold text-green-800 text-center' style={{fontFamily:"'Montserrat', sans-serif"}}>Real Estate</h2>
// <p className='text-center pt-2' style={{fontFamily:"'Poppins',sans-serif"}}>Notify potential buyers about new property listings and open house events.</p>

// </div>

// {/* second  card */}
// <div className="w-[300px] bg-gradient-to-t from-blue-50 border-l-4 border-t-2 border-r-2 border-b-4 rounded-lg border-green-800 h-auto p-4">
// <img src={icons9} className='h-[200px] mx-auto' alt='Bulk SMS Provider in dubai' />
// <h2 className='text-xl font-semibold text-green-800 text-center' style={{fontFamily:"'Montserrat', sans-serif"}}>Event Management</h2>
// <p className='text-center pt-2' style={{fontFamily:"'Poppins',sans-serif"}}>Promote events, send reminders, and share updates with attendees.</p>

// </div>


// {/* third card */}
// <div className="w-[300px] bg-gradient-to-t from-blue-50 border-l-4 border-t-2 border-r-2 border-b-4 rounded-lg border-green-800 h-auto p-4">
// <img src={Retail} className='h-[200px] mx-auto' alt='Bulk SMS Provider in dubai' />
// <h2 className='text-xl font-semibold text-green-800 text-center' style={{fontFamily:"'Montserrat', sans-serif"}}>Logistics & Transportation</h2>
// <p className='text-center pt-2' style={{fontFamily:"'Poppins',sans-serif"}}>Sending delivery updates, and shipment notifications.</p>

// </div>





//   </div>
//     </div>



//     <div className="p-6 bg-white shadow-lg rounded-lg text-center">
//   <h2 className="font-bold text-3xl text-gray-800 mb-4">
//   Maximizing Your SMS Marketing Campaign
//   </h2>
//   <ul className="list-disc list-inside text-gray-700 space-y-3 inline-block text-left">
//     <li>
//       <strong>Keep Messages Concise:</strong>SMS messages are limited in length, so keep your messages short and to the point.
//     </li>
//     <li><strong>Include a Clear Call to Action:</strong> Tell recipients what you want them to do, whether it's visiting your website or taking advantage of a special offer.</li>
//     <li><strong>Personalize Your Messages:</strong> to test the platform and delivery rates.</li>
//     <li><strong>Ask for detailed pricing</strong> Address recipients by name and tailor your messages to their interests.</li>
//     <li><strong>Timing is Key:</strong>  Send messages at optimal times to maximize engagement.</li>
//     <li><strong>Obtain Consent: </strong>Always obtain explicit consent before sending SMS messages to avoid spam complaints.</li>
//     <li><strong>Track Your Results:</strong>Monitor delivery reports and analyze campaign performance to optimize your strategy.</li>
//   </ul>
//   <p className="mt-4 text-gray-700 font-medium">
//   Simply it can be said that a reliable Bulk SMS Provider in DUBAI like Digintra can be a game-changer for businesses and organizations looking to enhance their communication strategies. By leveraging the power of SMS marketing, you can reach a wider audience, improve customer engagement, and drive growth. So, explore your options and try to contact the professionals of Digintra today itself. 
//   </p>
// </div>




//     {/* fifth content */}

//     <Client/>

// {/* sixth content */}

// <Getstarted/>

//    </div>
//    <Footer/>
//    </>
//   )
// }



import { motion } from "framer-motion";
import { useState } from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Hreflang from "../HrefComp";
import { hreflangConfig } from "../HreflangConfig";

import {
  FaBuilding,
  FaBullhorn,
  FaCheckCircle,
  FaChevronDown,
  FaChevronUp,
  FaCode,
  FaGlobe,
  FaHospital,
  FaLock,
  FaMapMarkerAlt,
  FaNetworkWired,
  FaRegChartBar,
  FaReply,
  FaServer,
  FaShieldAlt,
  FaShoppingCart,
  FaTruck,
  FaUniversity,
} from "react-icons/fa";
import { MdVerified } from "react-icons/md";

import {
  Award,
  BadgeCheck,
  BarChart3,
  Brain,
  Building2,
  Clock,
  Globe,
  GraduationCap,
  HeartPulse,
  KeyRound,
  Landmark,
  Layers3,
  Megaphone,
  MessageCircle,
  MessageSquare,
  Plane,
  RefreshCcw,
  Send,
  Settings,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Target,
  TrendingUp,
  Truck,
  Workflow,
  Zap,
} from "lucide-react";

// Image import for the main hero section
// import heroImg from "../assets/image_94dc89.jpg";
import heroImg from "../assets/Bulk-sms-dubai-provider-DoI7csSL.png";
import smsDubai from "../assets/Digintra_photodubai.jpeg";

import "./bulk.css";

export default function Bulk_sms_provider_dubai() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // FAQ Data
  const faqs = [
    {
      question: "What is Bulk SMS Dubai?",
      answer:
        "Bulk SMS Dubai is a messaging service that allows businesses to send promotional, transactional, and automated SMS messages to large numbers of customers quickly and efficiently across Dubai and the UAE.",
    },
    {
      question: "Is DIGINTRA a Bulk SMS company in Dubai?",
      answer:
        "Yes. DIGINTRA provides secure and scalable bulk SMS solutions for businesses operating in Dubai and across the United Arab Emirates.",
    },
    {
      question: "Can I integrate SMS with my website or CRM?",
      answer:
        "Yes. Our REST API enables seamless integration with websites, CRMs, ERPs, mobile apps, e-commerce platforms, and other enterprise software.",
    },
    {
      question: "Can I send OTP SMS?",
      answer:
        "Absolutely. Our platform supports secure OTP delivery, account verification, login authentication, and time-sensitive transactional messaging.",
    },
    {
      question: "Do you support Arabic SMS?",
      answer:
        "Yes. Unicode messaging allows you to send SMS in Arabic as well as English, Hindi, Urdu, and multiple other languages.",
    },
    {
      question: "Can I schedule SMS campaigns?",
      answer:
        "Yes. You can create campaigns in advance and schedule messages for a specific date and time to optimize audience engagement.",
    },
    {
      question: "Is your platform suitable for enterprises?",
      answer:
        "Yes. Our infrastructure is built to support businesses ranging from startups to large enterprises, with the capacity to process millions of messages reliably.",
    },
  ];

  // Highlights Points
  const points = [
    { icon: "🚀", text: "High SMS delivery rate with optimized network routing" },
    { icon: "⚡", text: "Instant message delivery for time-sensitive OTPs and alerts" },
    { icon: "🛠", text: "Easy-to-use central management dashboard" },
    { icon: "💻", text: "Developer-friendly REST API for enterprise integration" },
    { icon: "📊", text: "Scalable cloud infrastructure & real-time delivery logs" },
    { icon: "📞", text: "24/7 dedicated customer & technical support" },
  ];

  // Solutions / Process Steps
  const stepss = [
    {
      step: "01",
      title: "Promotional SMS Campaigns",
      desc: "Generate immediate customer engagement and boost sales conversions.",
      points: [
        "Special offers & seasonal sales",
        "Discounts & coupon codes",
        "Product launches & flash sales",
        "Loyalty program communications",
      ],
      icon: Megaphone,
      color: "from-yellow-400 to-orange-400",
    },
    {
      step: "02",
      title: "Transactional SMS Services",
      desc: "Deliver critical operational alerts and customer journey communications.",
      points: [
        "Order confirmations & payment receipts",
        "Booking & reservation updates",
        "Delivery tracking & status alerts",
        "Appointment notifications",
      ],
      icon: Layers3,
      color: "from-cyan-400 to-sky-400",
    },
    {
      step: "03",
      title: "Secure OTP SMS Verification",
      desc: "Protect accounts and verify customer actions instantly with high priority.",
      points: [
        "Banking & transaction authentication",
        "E-commerce account logins",
        "Mobile application onboarding",
        "Password resets & security alerts",
      ],
      icon: KeyRound,
      color: "from-emerald-400 to-teal-400",
    },
    {
      step: "04",
      title: "API Messaging & Workflow Automation",
      desc: "Integrate automated messaging directly into your software stack.",
      points: [
        "Seamless CRM & ERP integrations",
        "E-commerce platform connections",
        "HRMS & healthcare software triggers",
        "Logistics & banking application alerts",
      ],
      icon: Workflow,
      color: "from-violet-400 to-purple-400",
    },
  ];

  // Feature Cards
  const cards = [
    {
      title: "Campaign Scheduling",
      desc: "Plan campaigns in advance and send messages at peak engagement hours.",
      icon: TrendingUp,
      color: "bg-orange-400",
      iconGradient: "from-orange-400 to-rose-400",
    },
    {
      title: "Personalized Messaging",
      desc: "Insert dynamic contact names, order numbers, or specific appointment dates.",
      icon: RefreshCcw,
      color: "bg-pink-400",
      iconGradient: "from-pink-400 to-fuchsia-400",
    },
    {
      title: "Contact Management",
      desc: "Organize customer lists into dynamic targeted groups via CSV/Excel uploads.",
      icon: Settings,
      color: "bg-teal-400",
      iconGradient: "from-teal-400 to-cyan-400",
    },
    {
      title: "Real-Time Delivery Reports",
      desc: "Track status, success rates, failed attempts, and overall performance instantly.",
      icon: BarChart3,
      color: "bg-green-400",
      iconGradient: "from-green-400 to-emerald-400",
    },
    {
      title: "Two-Way Messaging",
      desc: "Enable customer replies to facilitate support and boost active dialogue.",
      icon: ShieldCheck,
      color: "bg-blue-400",
      iconGradient: "from-blue-400 to-indigo-400",
    },
    {
      title: "Unicode Multilingual Support",
      desc: "Send SMS natively in English, Arabic, Hindi, Urdu, and many other scripts.",
      icon: Globe,
      color: "bg-indigo-400",
      iconGradient: "from-indigo-400 to-purple-400",
    },
  ];

  // Industry List
  const industriess = [
    {
      name: "Retail & E-commerce",
      icon: ShoppingCart,
      gradient: "from-orange-400 via-rose-400 to-pink-400",
    },
    {
      name: "Healthcare & Hospitals",
      icon: HeartPulse,
      gradient: "from-red-400 via-pink-400 to-rose-400",
    },
    {
      name: "Banking & Financial Services",
      icon: Landmark,
      gradient: "from-blue-400 via-indigo-400 to-violet-400",
    },
    {
      name: "Real Estate & Housing",
      icon: Building2,
      gradient: "from-indigo-400 via-purple-400 to-pink-400",
    },
    {
      name: "Education & Institutions",
      icon: GraduationCap,
      gradient: "from-green-400 via-emerald-400 to-teal-400",
    },
    {
      name: "Hospitality, Travel & Logistics",
      icon: Plane,
      gradient: "from-teal-400 via-cyan-400 to-sky-400",
    },
  ];

  // Why SMS is effective points
  const point = [
    {
      text: "Direct mobile communication with instant delivery speeds",
      icon: Smartphone,
    },
    {
      text: "High open rates with fast customer read times",
      icon: Clock,
    },
    {
      text: "Cost-effective marketing channel with direct ROI tracking",
      icon: Target,
    },
    {
      text: "Wide reach without requiring active internet connectivity",
      icon: Globe,
    },
  ];

  // E-E-A-T Trust Items
  const trustItems = [
    {
      title: "Enterprise Reliability",
      desc: "Built to support businesses from growing startups to major international corporations.",
      icon: Award,
      color: "cyan",
    },
    {
      title: "Technical Expertise",
      desc: "Advanced routing algorithms and developer-friendly REST API integrations.",
      icon: Brain,
      color: "teal",
    },
    {
      title: "Regulatory Alignment",
      desc: "Aligned with TDRA standards, Sender ID setup, and security protocols.",
      icon: BadgeCheck,
      color: "sky",
    },
    {
      title: "Transparent Service",
      desc: "Detailed delivery reports, encrypted data transfer, and transparent account operations.",
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
        {/* Primary Meta Tags */}
        <title>Bulk SMS Dubai | Trusted Bulk SMS Provider in Dubai | DIGINTRA</title>
        <meta name="title" content="Bulk SMS Dubai | Trusted Bulk SMS Provider in Dubai | DIGINTRA" />
        <meta
          name="description"
          content="Looking for a reliable Bulk SMS Dubai solution? DIGINTRA offers secure bulk SMS services in Dubai with SMS API, OTP, promotional & transactional messaging for businesses across the UAE."
        />
        <meta
          name="keywords"
          content="Bulk SMS Dubai, bulk SMS services in Dubai, bulk SMS provider in Dubai, Bulk SMS company in Dubai, SMS gateway Dubai, promotional SMS Dubai, transactional SMS Dubai, SMS API Dubai, OTP SMS Dubai, SMS marketing Dubai, UAE SMS gateway"
        />

        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="DIGINTRA Teleservices" />
        <meta name="language" content="English" />
        <meta name="distribution" content="global" />
        <meta name="revisit-after" content="7 days" />

        {/* Geo Targeting */}
        <meta name="geo.region" content="AE-DU" />
        <meta name="geo.placename" content="Dubai" />
        <meta name="geo.position" content="25.2048;55.2708" />
        <meta name="ICBM" content="25.2048, 55.2708" />

        <link rel="canonical" href="https://www.digintra.com/bulk-sms-dubai/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="DIGINTRA Teleservices" />
        <meta property="og:title" content="Bulk SMS Dubai – Reliable SMS Solutions for Dubai Businesses" />
        <meta
          property="og:description"
          content="Send promotional SMS, OTP, transactional alerts, and automated notifications with DIGINTRA's secure Bulk SMS Dubai platform for businesses across the UAE."
        />
        <meta property="og:url" content="https://www.digintra.com/bulk-sms-dubai/" />
        <meta property="og:image" content="https://www.digintra.com/images/bulk-sms-provider-dubai.webp" />
        <meta property="og:image:alt" content="Bulk SMS Dubai by DIGINTRA" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bulk SMS Dubai | Trusted Bulk SMS Provider in Dubai" />
        <meta
          name="twitter:description"
          content="Reliable Bulk SMS services in Dubai with SMS API, OTP, promotional SMS, and transactional messaging for businesses across the UAE."
        />
        <meta name="twitter:image" content="https://www.digintra.com/images/bulk-sms-dubai.webp" />

        {/* Structured Data - Product Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Bulk SMS Dubai Services",
            "description": "Enterprise-grade Bulk SMS platform in Dubai by DIGINTRA Teleservices offering secure SMS delivery, SMS API, OTP SMS, promotional & transactional messaging.",
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
              "@type": "City",
              "name": "Dubai"
            },
            "offers": {
              "@type": "Offer",
              "url": "https://www.digintra.com/bulk-sms-dubai/",
              "priceCurrency": "AED",
              "availability": "https://schema.org/InStock"
            }
          })}
        </script>

        {/* Structured Data - FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((f) => ({
              "@type": "Question",
              "name": f.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": f.answer,
              },
            })),
          })}
        </script>
      </Helmet>

      {/* 1st Section: Hero */}
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
                src={heroImg}
                alt="Bulk SMS provider in Dubai"
                className="rounded-xl w-full h-[320px] md:h-[320px] object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Right Side - Text */}
         {/* Right Side - Text */}
<motion.div
  initial={{ opacity: 0, x: 60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
  className="flex w-full md:w-1/2 flex-col justify-center text-white text-center md:text-left"
>
  <div className="max-w-[540px] w-full mx-auto md:mx-0">
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="mb-4 text-2xl md:text-4xl font-bold leading-tight"
    >
      Bulk SMS Dubai –{" "}
      <span className="text-red-400 block md:inline">
        Reliable SMS Solutions for Dubai Businesses
      </span>
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.55, duration: 0.6 }}
      className="mb-6 text-base md:text-lg leading-8 text-gray-300"
    >
      Send bulk SMS, automate notifications, and launch high-performing SMS
      campaigns with DIGINTRA Teleservices' secure and scalable messaging
      platform. Reach customers instantly with a trusted bulk SMS provider in
      Dubai serving businesses in Dubai and across the UAE.
    </motion.p>

    {/* CTA Buttons */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.6 }}
      className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start"
    >
      <motion.button
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        className="rounded-lg bg-white px-5 md:px-6 py-3 font-semibold text-black transition w-full sm:w-auto"
      >
        Get Started
      </motion.button>

      <motion.button
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        className="rounded-lg bg-[#f64f6a] hover:bg-[#e4415b] px-5 md:px-6 py-3 font-semibold text-white transition w-full sm:w-auto"
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
          Delivering Messages Across{" "}
          <span className="font-bold text-white">190+ Countries</span>
        </p>
      </div>
    </motion.div>
  </div>
</motion.div>

        </div>
      </section>

      {/* 2nd Section: Overview */}
      <section className="relative py-24 bg-gradient-to-br from-sky-50 via-white to-teal-50">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              <span className="bg-gradient-to-r from-sky-600 to-teal-600 bg-clip-text text-transparent">
                Bulk SMS Services in Dubai
              </span>{" "}
              for Every Business
            </h2>

            <p className="mt-6 text-gray-700 text-lg leading-relaxed">
              Communication speed can make a significant difference in customer engagement. Whether you need to send promotional offers, OTPs, appointment reminders, payment alerts, delivery updates, or marketing campaigns, DIGINTRA Teleservices offers enterprise-grade <span className="font-bold">Bulk SMS Dubai</span> solutions designed for businesses of every size.
            </p>

            <p className="mt-4 text-gray-700 text-lg leading-relaxed">
              As a leading <span className="font-bold">bulk SMS company in Dubai</span>, we help organizations connect with customers through secure, fast, and highly reliable SMS delivery. Our platform is trusted by startups, SMEs, enterprises, retailers, healthcare providers, educational institutions, logistics companies, travel agencies, banks, and government organizations.
            </p>

            <p className="mt-4 text-gray-700 text-lg leading-relaxed">
              With powerful APIs, detailed reporting, intelligent routing, and dedicated support, your business can automate communication while improving customer experience and reducing operational costs.
            </p>

            {/* Highlights */}
            <div className="mt-8 flex flex-wrap gap-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700">
                <Zap className="h-4 w-4" />
                Instant Delivery
              </span>

              <span className="inline-flex items-center gap-2 rounded-full bg-teal-100 px-4 py-2 text-sm font-medium text-teal-700">
                <MessageSquare className="h-4 w-4" />
                High Open Rates
              </span>

              <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
                <Globe className="h-4 w-4" />
                Global Reach
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="rounded-3xl bg-gradient-to-br from-teal-500 to-sky-600 p-2 shadow-2xl">
              <img
                src={smsDubai}
                alt="Bulk SMS Services in Dubai"
                className="w-full max-w-lg rounded-2xl object-cover"
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* 3rd Section: Why Choose DIGINTRA */}
      <section className="relative overflow-hidden py-28 bg-[#121a32]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-sky-500/20 blur-[120px]" />
          <div className="absolute top-1/2 -right-40 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-emerald-500/20 blur-[140px]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight bg-gradient-to-r from-sky-400 via-emerald-400 to-indigo-400 bg-clip-text text-transparent">
              Why Choose DIGINTRA for{" "}
              <span className="underline decoration-emerald-400/40 decoration-4 underline-offset-8">
                Bulk SMS Dubai?
              </span>
            </h2>

            <p className="mt-8 text-slate-300 text-lg leading-relaxed">
              Thousands of businesses depend on SMS because it delivers important messages instantly. DIGINTRA combines powerful technology with enterprise reliability to help companies communicate more effectively.
            </p>
          </motion.div>

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
                className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 transition-all duration-300 hover:-translate-y-2 hover:border-sky-400/40 hover:shadow-[0_0_40px_rgba(56,189,248,0.35)]"
              >
                <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-sky-400 to-emerald-400" />
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

      {/* 4th Section: Compliance, Security & UAE Trust Signals */}
      <section className="py-28 bg-gradient-to-br from-sky-50 via-white to-teal-50">
        <div className="max-w-6xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-sky-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent">
              Compliance, Security & UAE Trust Signals
            </h2>

            <p className="mt-6 text-gray-700 text-lg leading-relaxed">
              Business messaging in Dubai, UAE requires responsible communication practices. DIGINTRA follows industry best practices to help organizations send secure and compliant SMS campaigns.
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-md p-6 border hover:shadow-xl transition">
              <MdVerified className="text-teal-600 text-3xl mb-4" />
              <h3 className="font-semibold text-lg mb-2">TDRA Guidelines & Compliance</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Businesses are encouraged to follow the latest TDRA (Telecommunications and Digital Government Regulatory Authority) guidelines and obtain necessary approvals for commercial messaging across Dubai and the UAE.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 border hover:shadow-xl transition">
              <FaShieldAlt className="text-teal-600 text-3xl mb-4" />
              <h3 className="font-semibold text-lg mb-2">Sender ID & Access Control</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our platform supports personalized Sender ID management, secure API authentication, encrypted data transmission, and controlled account permissions to safeguard brand reputation.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 border hover:shadow-xl transition">
              <FaServer className="text-teal-600 text-3xl mb-4" />
              <h3 className="font-semibold text-lg mb-2">Enterprise Infrastructure</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Equipped with secure routing, multi-tier cloud server systems, and continuous real-time monitoring to provide a dependable messaging environment for organizations.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 border hover:shadow-xl transition">
              <FaNetworkWired className="text-teal-600 text-3xl mb-4" />
              <h3 className="font-semibold text-lg mb-2">Transparent Monitoring</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Detailed delivery logs and full data transparency allow organizations to audit campaign metrics, track delivery success, and maintain complete compliance.
              </p>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-teal-600 to-emerald-500 text-white rounded-2xl p-8 text-center shadow-lg">
            <FaGlobe className="text-3xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Trusted Global & Local SMS Delivery</h3>

            <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm sm:text-base">
              <p>🌍 Delivering Messages Across 190+ Countries</p>
              <p>📩 Secure Cloud Infrastructure & Fast Message Processing</p>
              <p>⚡ High Delivery Performance & Real-time Analytics</p>
            </div>
          </div>

        </div>
      </section>

      {/* 5th Section: Solutions Offered */}
      <section className="relative py-28 bg-gradient-to-br from-[#050B1E] via-[#070E2B] to-[#050B1E] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Bulk SMS Services We Offer in Dubai
            </h2>
          </div>

          <div className="relative">
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
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-[#050B1E] text-sm font-semibold text-white">
                      {item.step}
                    </div>

                    <div className="relative flex-1 rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-7 hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_40px_rgba(56,189,248,0.25)]">
                      <div className={`absolute left-0 top-0 h-full w-1.5 rounded-l-2xl bg-gradient-to-b ${item.color}`} />

                      <div className="flex gap-5">
                        <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} text-black shadow-lg`}>
                          <Icon className="h-7 w-7" />
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold text-white">
                            {item.title}
                          </h3>

                          <p className="mt-1 text-sm text-slate-400">
                            {item.desc}
                          </p>

                          {item.points.length > 0 && (
                            <ul className="mt-4 space-y-2 text-sm text-slate-300">
                              {item.points.map((pt, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                                  <span>{pt}</span>
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

      {/* 6th Section: Platform Features */}
      <section className="py-24 bg-gradient-to-b from-[#a2cccc] to-[#d7ecec]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-600 to-sky-600 bg-clip-text text-transparent">
              Advanced Features of Our Bulk SMS Platform
            </h2>
          </motion.div>

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
                  <div className="relative w-[270px] h-[150px] bg-white clip-chevron p-[6px] shadow-lg">
                    <div className={`relative h-full w-full ${card.color} clip-chevron px-5 pt-5 text-white`}>
                      <div className={`absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r ${card.iconGradient} shadow-md`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>

                      <div className="mt-12">
                        <h3 className="text-sm font-semibold">
                          {card.title}
                        </h3>
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

      {/* 7th Section: Industry Use Cases */}
      <section className="py-24 bg-gradient-to-b from-slate-50 via-white to-sky-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-600 to-sky-600 bg-clip-text text-transparent">
              Bulk SMS Solutions for Every Industry
            </h2>

            <p className="mt-4 text-gray-700 text-lg">
              Every industry communicates differently. Our platform is designed to support various business requirements across Dubai and the UAE.
            </p>
          </div>

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
                  <div className={`p-[2px] rounded-2xl bg-gradient-to-r ${item.gradient} bg-[length:200%_200%]`}>
                    <div className="rounded-2xl bg-white p-6 h-full shadow-sm transition-all duration-300 group-hover:shadow-[0_20px_45px_rgba(59,130,246,0.18)]">
                      <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r ${item.gradient} text-white shadow-md`}>
                        <Icon className="h-7 w-7" />
                      </div>

                      <h3 className="text-lg font-semibold text-gray-800">
                        {item.name}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-16 text-center max-w-3xl mx-auto">
            <p className="text-gray-700 text-lg">
              Empowering enterprise messaging across Retail, E-Commerce, Healthcare, Banking, Real Estate, Education, Travel & Hospitality, and Logistics.
            </p>
          </div>
        </div>
      </section>

      {/* 8th Section: Why SMS Marketing in Dubai */}
      <section className="relative overflow-hidden py-28 bg-[#020617] text-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[300px] w-[600px] bg-cyan-500/30 blur-[140px]" />
        <div className="absolute top-8 left-1/2 -translate-x-1/2 h-[2px] w-[160px] bg-cyan-400" />

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Why Businesses Prefer SMS Marketing in Dubai
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              {point.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur p-5 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                      <Icon className="h-6 w-6" />
                    </div>

                    <p className="text-slate-200 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="relative rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur p-8 shadow-[0_0_40px_rgba(34,211,238,0.15)]">
              <div className="absolute top-0 left-0 h-full w-1 rounded-l-2xl bg-gradient-to-b from-cyan-400 to-teal-400" />

              <p className="text-slate-300 text-lg leading-relaxed pl-4">
                <span className="text-cyan-400 font-semibold">
                  SMS remains one of the most effective communication channels in Dubai, UAE
                </span>{" "}
                because messages are delivered directly to customers' mobile devices, facilitating instant interaction, higher conversion opportunities, and better long-term retention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9th Section: E-E-A-T Cards */}
      <section className="relative py-28 bg-gradient-to-br from-teal-50 via-white to-sky-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Why{" "}
              <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-sky-600 bg-clip-text text-transparent">
                DIGINTRA
              </span>{" "}
              is a Trusted Bulk SMS Provider in Dubai
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {trustItems.map((item, index) => {
              const Icon = item.icon;
              const colors = colorMap[item.color];

              return (
                <div
                  key={index}
                  className={`relative rounded-3xl bg-white p-8 text-center border ${colors.border} shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(59,130,246,0.18)]`}
                >
                  <div className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 bg-white ${colors.ring}`}>
                    <Icon className="h-9 w-9" />
                  </div>

                  <h3 className="mt-6 text-lg font-semibold text-gray-800">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>

                  <div className={`mx-auto mt-6 h-[3px] w-16 rounded-full ${colors.line}`} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10th Section: Final CTA */}
      <section className="relative overflow-hidden py-32 bg-gradient-to-br from-sky-50 via-white to-teal-50">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[320px] w-[520px] bg-teal-300/30 blur-[140px]" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Ready to Grow Your Business with{" "}
            <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-sky-600 bg-clip-text text-transparent">
              Bulk SMS Dubai
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            DIGINTRA Teleservices provides the technology, reliability, and support you need to succeed in launching promotional campaigns, automating customer notifications, or integrating SMS into your business systems.
          </p>

          <p className="mt-3 text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Start sending SMS in Dubai: smarter, faster, and more secure messages with a trusted bulk SMS platform built for businesses in Dubai and across the United Arab Emirates.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
            <button className="inline-flex items-center justify-center gap-3 rounded-full border border-teal-500 bg-white px-8 py-4 text-teal-600 font-semibold transition-all duration-300 hover:bg-teal-50 hover:shadow-[0_15px_35px_rgba(20,184,166,0.25)]">
              <MessageCircle className="h-5 w-5" />
              Request Free Demo
            </button>

            <button className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-teal-600 to-sky-600 px-8 py-4 text-white font-semibold shadow-md transition-all duration-300 hover:shadow-[0_20px_45px_rgba(14,165,233,0.35)]">
              <Send className="h-5 w-5" />
              Get Started Today
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-20 bg-gray-50 py-20 px-4 relative">
        <div className="max-w-[90%] mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 drop-shadow-lg">
            Frequently Asked Questions – Bulk SMS Dubai
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
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                  {faq.question}
                </h3>
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
  );
}
