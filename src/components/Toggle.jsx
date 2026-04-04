
import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillPersonFill } from "react-icons/bs"
import {MdCall} from "react-icons/md";
import { useState } from 'react';
import icons1 from "../assets/icons8-down-24.png";
export default function Toggle({onClose}) {
    const [isOpen, setIsOpen] = useState(false);
    const [isClose, setisClose] = useState(false);
    const [isClosed, setisClosed] = useState(false);
    const[message,setMessage]=useState(false);
    const [promotion,setPromotion]=useState(false);
    const [sms,setSms]=useState(false);
    const [trends,setTrends]=useState(false);

  
   function handleClick1(){
    let image= document.getElementById("tog");
    image.style.display="none";
   }
   function handleShow(){
    setIsOpen(!isOpen);
    let show =document.getElementById("arrow3");
    show.style.transform= isOpen? "rotate(0deg)" : "rotate(180deg)";
   }

   function handleShowone(){
setisClose(!isClose);
let hide=document.getElementById("arrow4");
hide.style.transform=isClose? "rotate(0deg)": "rotate(180deg)";
   }
   function handleShowonee(){
    setisClosed(!isClosed);
    let hide=document.getElementById("arrow4");
    hide.style.transform=isClosed? "rotate(0deg)": "rotate(180deg)";
       }

   function handlemessage(){
    setMessage(!message);
    let show1=document.getElementById("arrow5");
    show1.style.transform=message ? "rotate(0deg)":"rotate(180deg)";
   }

   function handlepromotion(){
    setPromotion(!promotion);
    let show2=document.getElementById("arrow6");
    show2.style.transform=promotion? "rotate(0deg)":"rotate(180deg)";
   }

   function handleSms(){
     setSms(!sms);
     let show3=document.getElementById("arrow7");
     show3.style.transform= sms? "rotate(0deg)": "rotate(180deg)";
   }
   function handleTrends(){
    setTrends(!trends);
    let show4=document.getElementById("arrow8");
    show4.style.transform=trends ? "rotate(0deg)": "rotate(180deg)";
   }
   function togclick(){
    let show5= document.getElementById("tog");
    show5.style.display="none";
   }
  return (
    <div id="tog" data-aos="fade-down" className="w-[100%] overflow-y-scroll  text-center fixed lg:hidden h-[500px] pb-14 bg-gradient-to-bl from-green-800 to-green-500 shadow-inner shadow-blue-100  top-[130px] z-10" >
    <div className="">


<ul className="w-[100px] h-auto  mx-auto space-y-4 pt-4 ">
<Link  to="/" onClick={onClose}><li  className="font-semibold hover:text-[#0748A2] text-white hover:animate-bounce hover:translate-x-6" >Home</li></Link>
<div className="w-[100px] h-[2px] bg-white mx-auto"></div>
<li className="font-semibold hover:text-[#0748A2] text-white flex justify-evenly hover:-translate-x-6 hover:animate-bounce" onClick={handleShow}  >Products <span id="arrow3" ><img src={icons1} className='h-3 my-2 ml-1'/></span></li>
{ isOpen && <div class=" -ml-14 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
<div class="py-1" role="none">
 
  <p  class="text-black  px-4 py-2 text-sm flex justify-between" role="menuitem" tabindex="-1" id="menu-item-0" onClick={handlemessage} >Messaging Service <span id="arrow5"><img src={icons1} alt="" className="h-2 mt-2" /></span></p>
    {message && <>
    <ul className="">
 
  <Link onClick={onClose}  to="./enterprise-messaging">   <li className="text-[15px] pt-4 text-gray-700  text-left pl-5">Enterprise SMS</li> </Link>  
<Link onClick={onClose} to="/transactional-sms"><li className="text-[15px] pt-4 text-gray-700 text-left pl-5">Transactional SMS</li> </Link>  
<Link onClick={onClose} to="/business-sms"> <li className="text-[15px] pt-4 text-gray-700 text-left pl-5">Business Messaging</li> </Link>
<Link onClick={onClose} to="/wholesale-messaging"> <li className="text-[15px] pt-4 text-gray-700 text-left pl-5">WholeSale SMS</li> </Link>
    </ul>
    </>}
  <p class="text-black  px-4 py-2 text-sm flex justify-between" role="menuitem" tabindex="-1" id="menu-item-1" onClick={handlepromotion}>Promotion Channel  <span id="arrow6"><img src={icons1} alt="" className="h-2 mt-2" /></span></p>
  {promotion && <>
  <ul className="">
<Link onClick={onClose} to="/promotional-email"><li className="text-[15px] pt-4 text-gray-700 text-left pl-5">Email Campaign</li> </Link> 
<Link onClick={onClose} to="/smtp-server" > <li className="text-[15px] pt-4 text-gray-700 text-left pl-5">SMTP Server</li> </Link>
<Link onClick={onClose} to="/voice-broadcast" ><li className="text-[15px] pt-4 text-gray-700 text-left pl-5">Voice Broadcast</li></Link>
  </ul>
  </>}
  <p class="text-black  px-4 py-2 text-sm flex justify-between" role="menuitem" tabindex="-1" id="menu-item-2" onClick={handleSms}>SMS Gateway Software  <span id="arrow7"><img src={icons1} alt="" className="h-2 mt-2" /></span></p>
  {
    sms && <>
    <ul className="">
   <li onClick={onClose} className="text-[15px] pt-4 text-gray-700 text-left pl-5">A2P SMS hubbing platform</li>
      <li onClick={onClose} className="text-[15px] pt-4 text-gray-700 text-left pl-5">SMS Load Balancer</li>
    </ul>
    </>
  }
  <p class="text-black  px-4 py-2 text-sm flex justify-between" role="menuitem" tabindex="-1" id="menu-item-2" onClick={handleTrends}>Trending Channel  <span id="arrow8"><img src={icons1} alt="" className="h-2 mt-2" /></span></p>
  {trends && <>
  <ul>
<Link onClick={onClose} to="/whatsapp-business-api"><li className="text-[15px] pt-4 text-gray-700 text-left pl-5">WhatsApp Business API</li></Link>
  </ul>
  </>}
  
</div>
</div>}

<div className="w-[100px] h-[2px] bg-white mx-auto"></div>
<li className="font-semibold hover:text-[#0748A2] text-white flex justify-evenly hover:translate-x-6 hover:animate-bounce" onClick={handleShowone}>Resources <span id="arrow4"><img src={icons1} alt="" className='h-3 my-2 ml-1'/></span></li>
{ isClose && <div class=" -ml-14 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
<div class="py-1" role="none">
 
  <a href="/blog" class="text-black flex justify-between px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Blogs</a>
  <p class="text-black flex justify-between px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Use Cases</p>
 
</div>
</div>}

<div className="w-[100px] h-[2px] bg-white mx-auto"></div>
<Link onClick={togclick} to="/partner"> <li className="font-semibold hover:text-[#0748A2] text-white hover:-translate-x-6 hover:animate-bounce" >Partner</li></Link>
<div className="w-[100px] h-[2px] bg-white mx-auto"></div>
<li className="font-semibold hover:text-[#0748A2] text-white flex justify-evenly hover:translate-x-6 hover:animate-bounce" onClick={handleShowonee}>Pricing <span id="arrow4"><img src={icons1} alt="" className='h-3 my-2 ml-1'/></span></li>
{ isClosed && <div class=" -ml-14 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
<div class="py-1" role="none">
 
  <a href="/smspricing" class="text-black flex justify-between px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">SMS Pricing</a>
  <a href="/whatsapp-pricing" class="text-black flex justify-between px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">WhatsApp Pricing</a>

 
</div>
</div>}
<div className="w-[100px] h-[2px] bg-white mx-auto"></div>
<Link onClick={onClose} to="/whatsapp-business-api"><li className="font-semibold hover:text-[#0748A2] text-white hover:-translate-x-6 hover:animate-bounce" >#Whatsapp API</li></Link>
<div className="w-[100px] h-[2px] bg-white mx-auto"></div>
<Link onClick={onClose} to="/contact-us"><li className="font-semibold hover:text-[#0748A2] text-white hover:translate-x-6 hover:animate-bounce" >Contact</li></Link>
<div className="w-[100px] h-[2px] bg-white mx-auto"></div>
</ul>
<a href="https://sms-login.digintra.com/"> <button className="bg-gradient-to-tr from-yellow-300 to-green-300 w-[150px] h-10 rounded-xl ml-[70px] my-5 flex px-3 space-x-1 py-2 shadow-lg shadow-gray-500 "><BsFillPersonFill className='text-xl my-1'/><span>Sign Up/Login</span>  </button></a>
<a href="#sales"> <button className="ring hover:-translate-y-2 ring-green-700 ring-offset-4 bg-green-100 w-[150px] h-10 rounded-xl mx-5 flex px-3 space-x-1 py-2 shadow-lg shadow-gray-400 font-semibold ml-[70px]  " onClick={handleClick1}><MdCall className='text-xl my-1'/><span>Contact Sales</span>  </button> </a>
</div>
</div>
  )
}
