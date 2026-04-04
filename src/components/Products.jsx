
import React from 'react';
import Message from './Message';
import Promotion from './Promotion';
import Gateway from './Gateway';
import Trending from './Trending';
import { useState } from 'react';
import icons1 from "../assets/icons8-message-50.png";
import icons2 from "../assets/icons8-down-24.png";
import icons4 from "../assets/icons8-ripple-50.png";
import icons3 from "../assets/icons8-promotion-50.png";
import icons5 from "../assets/icons8-message-501.png";
import second from "../assets/second.jpg";
export default function Products() {
    const[show1,setShow1]=useState(false);
    const[show2,setShow2]=useState(false);
    const[show3,setShow3]=useState(false);
    const[show4,setShow4]=useState(false);
  return (
      
    <div className="chance w-auto h-auto pb-[50px] lg:pb-[350px] lg:h-auto pt-[20px] lg:pt-[50px] bg-gradient-to-tr from-orange-100 to-green-50 ">
    <h1 data-aos="fade-right" className="text-2xl font-semibold text-center lg:text-3xl py-4" style={{fontFamily:"'Montserrat', sans-serif"}}>Our <span className="text-blue-600">Products</span></h1>
    <div className="w-[100px] h-[2px] mx-auto mt-1 bg-blue-600"></div>
   
    <div className="lg:flex lg:mt-[50px] lg:px-48">


    <div className="w-[310px] lg:w-[500px] h-auto space-y-4 py-6 px-6 mx-auto z-20 mt-10 ">
      <div data-aos="fade-up" className="w-[260px] lg:w-[360px] py-2 px-3 h-[50px] border-2 border-blue-700 flex justify-evenly rounded-e-2xl bg-slate-50 hover:cursor-pointer" onClick={()=>{setShow1(!show1)}}>
      <span><img src={icons1} alt="Messaging Services, Email Services, Social Media & Branding Services" className='lg:h-10 h-8 -mt-1  ml-2'/></span>
        <h1  className="font-semibold text-[14px]" style={{fontFamily:"'Poppins', sans-serif"}}>
        MESSAGING SERVICE
        
        
        </h1>
        <span><img src={icons2} alt="Messaging Services, Email Services, Social Media & Branding Services" className='h-3 my-2 ml-2'/></span>

      </div>
     {show1 &&<Message/>}
      <div data-aos="fade-up" className="w-[260px] lg:w-[360px] py-2 px-3 h-[50px] border-2 border-blue-700 flex justify-evenly rounded-s-2xl bg-slate-50 hover:cursor-pointer" onClick={()=>{setShow2(!show2)}}>
      <span><img src={icons3} alt="Messaging Services, Email Services, Social Media & Branding Services" className='lg:h-10 h-8 -mt-1  ml-2'/></span>
        <h1  className="lg:font-semibold text-[14px] font-semibold" style={{fontFamily:"'Poppins', sans-serif"}}>
        PROMOTION CHANNEL
        </h1>
        <span><img src={icons2} alt="Messaging Services, Email Services, Social Media & Branding Services" className='h-3 my-2 ml-2'/></span>
      </div>
      {show2 && <Promotion/>}
      <div  data-aos="fade-up" className="w-[260px] lg:w-[360px] py-2 px-3 h-[50px] border-2 border-blue-700 flex justify-evenly rounded-e-2xl bg-slate-50 hover:cursor-pointer"  onClick={()=>{setShow3(!show3)}}>
      <span><img src={icons4} alt="Messaging Services, Email Services, Social Media & Branding Services" className='lg:h-10 h-8 -mt-1  ml-2'/></span>
        <h1 className="lg:font-semibold text-[14px] font-semibold" style={{fontFamily:"'Poppins', sans-serif"}}>
        SMS GATEWAY SOFTWARE
        </h1>
        <span><img src={icons2} alt="Messaging Services, Email Services, Social Media & Branding Services" className='h-3 my-2 ml-2'/></span>
      </div>
      {show3&& <Gateway/>}
      <div data-aos="fade-up" className="w-[260px] lg:w-[360px] py-2 px-3 h-[50px] border-2 border-blue-700 flex justify-evenly rounded-s-2xl bg-slate-50 hover:cursor-pointer"  onClick={()=>{setShow4(!show4)}}>
      <span><img src={icons5}alt="Messaging Services, Email Services, Social Media & Branding Services" className='lg:h-10 h-8 -mt-1  ml-2'/></span>
        <h1  className="font-semibold text-[14px]" style={{fontFamily:"'Poppins', sans-serif"}}>
        TRENDING CHANNEL
        </h1>
        <span><img src={icons2} alt="Messaging Services, Email Services, Social Media & Branding Services" className='h-3 my-2 ml-2'/></span>
      </div>
      {show4 && <Trending/>}
     
    </div>
    <div className="w-[310px] h-[310px] lg:w-[500px] lg:pb-10  mx-auto mt-8 rounded-lg ">
        <img src={second} alt="Messaging Services, Email Services, Social Media & Branding Services" />
      </div>
      </div>
      </div>
  )
}
