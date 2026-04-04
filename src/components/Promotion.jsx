import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';
import { Autoplay, Pagination } from "swiper/modules";
import icons1 from "../assets/icons8-arrow-100.png";
import icons2 from "../assets/icons8emailcampaign.png";
import icons3 from "../assets/icons8-arrow-100.png";
import icons4 from "../assets/icons8-arrow-100.png";
import icons5 from "../assets/icons8server.png";
import icons6 from "../assets/icons8-arrow-100.png";

import icons7 from "../assets/icons8-arrow-100.png";
import icons8 from "../assets/icons8voice.png";
import icons9 from "../assets/icons8-arrow-100.png";
export default function Promotion() {
  return (
    <>
    <div>
        
    </div> <div data-aos="fade-down" className="w-[280px] -ml-6 text-center px-2  lg:ml-1 lg:px-6 space-y-7 lg:w-[350px] bg-gradient-to-br from-green-300 p-4   h-auto z-10">
<Swiper
spaceBetween={30}
centeredSlides={true}
autoplay={{
 delay: 2500,
 disableOnInteraction: false,
}}
pagination={{
 clickable: true,
}}
modules={[Autoplay,Pagination]}
className="mySwiper ">
 <SwiperSlide className='pb-9'>


 <h2 className="border-2 border-blue-600 w-[260px] py-2 rounded-2xl bg-white hover:bg-white text-center h-auto  lg:w-[300px] hover:ease-in-out hover:cursor-pointer">
   <div className="flex px-4" data-aos="fade-right" style={{fontFamily:"'Montserrat', sans-serif"}}>
     Email Campaign
     <span>
       <img src={icons1} alt="" className="h-7 w-10" />
     </span>
   </div>
   <div className="mt-5 space-y-3">
     <img
       src={icons2}
       alt=""
       className="w-[100px] h-[100px]  rounded-full  mx-auto "
     />
     <p className="px-2  lg:px-4 text-left" style={{fontFamily:"'Poppins', sans-serif"}}>
     Email campaigns are a vital marketing strategy for businesses. They involve sending targeted emails to a list of recipients to promote products, services, or convey important information. 
     </p>
<Link to="/promotional-email"> <button className="border-b-2  border-blue-600 ml-2 lg:ml-3 bg-gradient-to-tr from-yellow-600 to-green-600 w-[150px] h-12 rounded-full shadow-md shadow-yellow-400 hover:-translate-y-2 text-white font-semibold pl-4 py-3 mt-5 flex">
       Read More
       <span>
         <img src={icons3} alt="" className="h-7 w-10" />
       </span>
     </button>
     </Link>   
   </div>
 </h2>
 </SwiperSlide>
<SwiperSlide className='pb-9'>
 <h2 className="border-2 border-blue-600 w-[260px] py-2 rounded-2xl bg-white hover:bg-white text-center h-auto  lg:w-[300px] hover:ease-in-out hover:cursor-pointer">
   {" "}
   <div className="flex px-4" data-aos="fade-right" style={{fontFamily:"'Montserrat', sans-serif"}}>
   SMTP Server
     <span>
       <img src={icons4} alt="" className="h-7 w-10" />
     </span>
   </div>
   <div className="mt-5 space-y-3">
     <img
       src={icons5}
       alt=""
       className="w-[100px] h-[100px]  rounded-full  mx-auto "
     />
     <p className="px-2 lg:px-4 text-left" style={{fontFamily:"'Poppins', sans-serif"}}>
     SMTP (Simple Mail Transfer Protocol) servers are the backbone of email communication. They are responsible for sending and relaying email messages across the internet. SMTP servers ensure the reliable delivery of emails from the sender's client to the recipient's server. 
     </p>
 <Link to="/smtp-server"> <button className="border-b-2 border-blue-600 ml-2 lg:ml-3 bg-gradient-to-tr from-yellow-600 to-green-600 w-[150px] h-12 rounded-full shadow-md shadow-yellow-400 hover:-translate-y-2 text-white font-semibold pl-4 py-3 mt-5 flex">
       Read More
       <span>
         <img src={icons6} alt="" className="h-7 w-10" />
       </span>
     </button>
     </Link>  
   </div>
 </h2>
 </SwiperSlide>
 <SwiperSlide className='pb-9'>
 <h2 className="border-2 border-blue-600 w-[260px] py-2 rounded-2xl bg-white hover:bg-white text-center h-auto  lg:w-[300px] hover:ease-in-out hover:cursor-pointer">
   <div className="flex px-4" style={{fontFamily:"'Montserrat', sans-serif"}}>
   Voice Broadcast
     <span>
       <img src={icons7} alt="" className="h-7 w-10" />
     </span>
   </div>
   <div className="mt-5 space-y-3">
     <img
       src={icons8}
       alt=""
       className="w-[100px] h-[100px]  rounded-full  mx-auto "
     />
     <p className="px-2 lg:px-4 text-left" style={{fontFamily:"'Poppins', sans-serif"}}>
     Voice broadcast is a valuable communication tool for businesses and organizations. It involves sending pre-recorded voice messages to a large audience simultaneously. Voice broadcasts are efficient for delivering important announcements, reminders, or marketing messages. 
     </p>
<Link to="/voice-broadcast"><button className="border-b-2 border-blue-600 ml-2 lg:ml-3 bg-gradient-to-tr from-yellow-600 to-green-600 w-[150px] h-14 rounded-full shadow-md shadow-yellow-400 hover:-translate-y-2 text-white font-semibold pl-4 py-3 mt-5 flex">
       Read More
       <span>
         <img src={icons9} alt="" className="h-7 w-10" />
       </span>
     </button>
     </Link>  
   </div>
 </h2>
 </SwiperSlide>
 </Swiper>

</div>
</>
  )
}
