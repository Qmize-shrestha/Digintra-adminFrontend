// import React from 'react';
// import { Link } from 'react-router-dom';
// import Navbarcom from './Navbarcom';
// import { BsFillPersonFill } from 'react-icons/bs';
// import { MdCall } from 'react-icons/md';
// import Toggle from './Toggle';
// import Productcom from './Productcom';
// import {GiHamburgerMenu} from "react-icons/gi"
// import Resourcecom from './Resourcecom';
// import Learn from './Learn';
// import { useState } from 'react';

// import digintralogo from "../assets/digintra_logo.png";
// import icons1 from "../assets/icons8-down-24.png";
// export default function Navbar() {
//     const[toggle,setToggle]=useState(false);
//     const [down, setDown] = useState(false);
//     const [below, setBelow]=useState(false);
//     const [login, setLogin] = useState(false);
//     const [uprice, setUprice]= useState(false);

//     const handleClickone =()=>{

//       setLogin(!login);
//       setToggle(false);
//       setDown(false);
//       setBelow(false);
//       setUprice(false);

//     }

//     const handleClicktwo =()=>{

//        setToggle(!toggle);
//        setLogin(false);
//        setDown(false);
//        setBelow(false);
//        setUprice(false);

//     }
//     const handleClickthree =()=>{
//       setDown(!down);
//       setToggle(false);
//       setLogin(false);
//       setBelow(false);
//       setUprice(false);

//     }

//     const handleClickfour =()=>{
//       setBelow(!below);
//       setToggle(false);
//       setLogin(false);
//       setUprice(false);
//       setDown(false);
//     }

//     const handleClickfive =()=>{
//       setUprice(!uprice);
//       setBelow(false);
//       setToggle(false);
//       setLogin(false);
//       setDown(false);

//     }
//     const onClose =()=>{
//       setUprice(false);
//       setBelow(false);
//       setToggle(false);
//       setLogin(false);
//       setDown(false);
//     }

//   return (
//     <>
//     <div className='fixed w-full z-50'>

//        <div className=" w-auto h-auto  bg-[#0748A2] ">
//          <div
//            data-aos="fade-right"
//            className="w-[310px] px-8 h-auto mx-auto space-y-4 py-2 align-middle lg:flex lg:w-[1140px]  lg:space-y-0"
//          >
//            <p className="text-white text-center w-[242px] lg:w-auto h-auto px-4 mx-auto text-[13px] lg:text-[16px] font-['Poppins', sans-serif] font-[400] py-1 leading-[16px] ">
//              Your Customers are on WhatsApp! Are You? Apply for WhatsApp
//              Business API !!
//            </p>
//            <button
//              className="w-[99px] h-[27px] bg-white rounded-md ml-[75px]"
//             onClick={handleClickone}
//            >
//              Learn More
//            </button>
//          </div>
//        </div>
//          <div className="w-auto  py-1 h-auto bg-gradient-to-tr from-yellow-200 to-green-50 z-10">
//          <div className="w-auto h-auto flex space-x-10 lg:space-x-[770px] justify-evenly">
//            <a href="#home">
//              {" "}
//              <img
//                src={digintralogo}
//                alt="digintralogo"
//                className="w-[183px] ml-4 h-[78px] my-4"
//              />{" "}
//              {/* <Image src='/digintra_logo.png' width={180} height={180}/> */}
//            </a>
//            <div className="w-[56px] lg:hidden h-[41px] bg-[#0748A2] py-[3px] my-[32px] px-[12px]  rounded-md ">
//              <GiHamburgerMenu
//                className="w-[30px] h-[30px] text-white text-[15px] font-semibold"
//                onClick={handleClicktwo}
//              />

//            </div>
//            <div className="hidden lg:block">
//              <ul className="w-auto -ml-[800px]  flex space-x-3  align-middle  my-8">
//         <Link to="/"><li className="py-2 px-4 hover:text-[#0748A2] cursor-pointer text-[#494949] lg:text-[16px] font-semibold">
//                  Home
//                </li>
//                </Link>

//              <li
//                  className="py-2 px-4 hover:text-[#0748A2] cursor-pointer text-[#494949] lg:text-[16px] font-semibold flex "
//                  onClick={handleClickthree}
//                >
//                  Products{" "}
//                  <span id="arrow">
//                    <img
//                      src={icons1}
//                      alt=""
//                      className="h-3 my-2 ml-2"
//                    />
//                  </span>
//                </li>

//                <li
//                  className="py-2  px-4 hover:text-[#0748A2] cursor-pointer text-[#494949] lg:text-[16px] font-semibold flex"
//                 onClick={handleClickfour}
//                >
//                  Resources{" "}
//                  <span id="arrow1">
//                    <img
//                      src={icons1}
//                      alt=""
//                      className="h-3 my-2 ml-2"
//                    />
//                  </span>
//                </li>
//                <Link to="/partner">
//                  <li className="py-2  px-4 hover:text-[#0748A2] cursor-pointer text-[#494949] lg:text-[16px] font-semibold">
//                    Partner
//                  </li>
//                </Link>

//                  {" "}
//                  <li className="py-2 flex px-4 hover:text-[#0748A2] cursor-pointer text-[#494949] lg:text-[16px] font-semibold"
//                   onClick={handleClickfive}>
//                       Pricing
//                      <span id="arrow1">
//                    <img
//                      src={icons1}
//                      alt=""
//                      className="h-3 my-2 ml-2"
//                    />
//                  </span>

//                  </li>

//                <Link to="/whatsapp-business-api">
//                  {" "}
//                  <li className="py-2  px-4 hover:text-[#0748A2] cursor-pointer text-[#494949] lg:text-[16px] font-semibold">
//                    #Whatsapp API
//                  </li>
//                </Link>
//               <Link to="/contact-us">

//                  {" "}
//                  <li className="py-2  px-4 hover:text-[#0748A2] cursor-pointer text-[#494949] lg:text-[16px] font-semibold">
//                    Contact
//                  </li>{" "}
//                  </Link>

//                <div className="flex ">
//                  <a href="https://sms-login.digintra.com/">
//                    {" "}
//                    <button className="bg-gradient-to-tr  hover:-translate-y-2 from-yellow-300 to-green-300 w-[180px] h-10 rounded-xl mx-5 flex px-3 space-x-1 py-2 shadow-lg shadow-gray-400 font-semibold ">
//                      <BsFillPersonFill className="text-xl my-1" />
//                      <span>Sign Up/Login</span>{" "}
//                    </button>
//                  </a>
//                 <Link to="/">

//                    <button className="ring hover:-translate-y-2 ring-green-700 ring-offset-4 bg-green-100 w-[150px] h-10 rounded-xl mx-5 flex px-3 space-x-1 py-2 shadow-lg shadow-gray-400 font-semibold scroll-smooth ">
//                      <MdCall className="text-xl my-1" />
//                      <span>Contact Sales</span>{" "}
//                    </button>
//                  </Link>
//                </div>
//              </ul>
//            </div>
//          </div>
//        </div>
//        </div>
//        {toggle && <Toggle onClose={onClose} />}
//        {down && <Productcom onClose={onClose}/>}
//        {below && <Resourcecom onClose = {onClose} />}
//        {login && <Learn onClose = {onClose} />}
//        {uprice && <Navbarcom onClose={onClose}/>}
// </>
//   )
// }

import React, { useEffect, useState } from "react";
import { FaArrowDown, FaBars, FaEnvelope, FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import digintralogo from "../assets/digintralogonew.png"
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import Productcom from "./Productcom";
import Resourcecom from "./Resourcecom";
import Navbarcom from "./Navbarcom";
import Toggle from "./Toggle";
import Signupcomp from "./Signupcomp";
import "./Nav.css";
 

export default function Navbar() {
  const [openproduct, setOpenproduct] = useState(false);
  const [openresource, setOpenresource] = useState(false);
  const [openpricing, setOpenpricing] = useState(false);
  const [toggle,setToggle] = useState(false);
  const [sign, setSign] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [show, setShow] = useState(true);

  // function to handle the toggle of product
  
  const handleopenproduct = ()=>{
    setOpenproduct(!openproduct);
    setOpenresource(false);
    setOpenpricing(false);
  }

  // function to handle the toggle of resource

  const handleopenresource =()=>{
    setOpenresource(!openresource);
    setOpenpricing(false);
    setOpenproduct(false);
  }

   //function to handle the toggle of pricing
   const handleopenpricing =()=>{
    setOpenpricing(!openpricing);
    setOpenresource(false);
    setOpenproduct(false);
   }
   const handletoggle = ()=>{
    setToggle(!toggle);
   }

   const handleSignup=()=>{
    setSign(!sign);
   }

   const onClose =()=>{
    setOpenpricing(false);
    setOpenproduct(false);
    setOpenresource(false);
    setToggle(false);
    setSign(false);
   }


  useEffect(()=>{
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setShow(prevScrollPos > currentScrollPos || currentScrollPos < 100);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener('scroll', handleScroll);

    return ()=>window.removeEventListener('scroll', handleScroll);
  },[prevScrollPos]);

  return (
    <div id="nav" className="w-[100%] fixed z-50 shadow-md h-auto ">
      {/* topbar */}

     
      <div
  className={`w-full flex gap-5 h-[2rem] 
  bg-gradient-to-r from-green-950 via-green-700 to-black
  backdrop-blur-md border-b border-white/10 shadow-lg 
  ${show ? "" : "hidden"}`}
>

  {/* Left Section */}
  <div className="flex-none px-5 border-r border-white/20 
      hidden md:flex items-center gap-5">
    <p className="text-white text-[0.7rem] flex items-center gap-1 font-[Poppins]">
      <FaEnvelope className="text-white text-[0.7rem]" />
      support@digintra.com
    </p>

    <p className="text-white text-[0.7rem] flex items-center gap-1 font-[Poppins]">
      <IoMdCall className="text-white text-[0.7rem]" />
      +91-90979 09079
    </p>
  </div>

  {/* Marquee */}
  <div className="flex-auto hidden md:flex items-center mx-auto">
    <marquee className="text-gray-200 font-[Poppins] text-xs">
      Your Customers are on WhatsApp! Are You? Apply for WhatsApp Business API !!
    </marquee>
  </div>

  {/* Social Icons */}
  <div className="flex-none mx-auto md:ml-0 flex items-center px-6">
    <ul className="flex gap-5 items-center">

      {/* Facebook */}
      <li className="bg-white/20 backdrop-blur-xl p-1 rounded-xl border border-white/30
          shadow-md hover:shadow-blue-400/50 hover:-translate-y-[3px]
          active:translate-y-1 transition-all duration-300 cursor-pointer">
        <a href="https://www.facebook.com/digintra.Official/">
          <FaFacebook className="text-blue-500 text-sm" />
        </a>
      </li>

      {/* YouTube */}
      <li className="bg-white/20 backdrop-blur-xl p-1 rounded-xl border border-white/30
          shadow-md hover:shadow-red-400/50 hover:-translate-y-[3px]
          active:translate-y-1 transition-all duration-300 cursor-pointer">
        <a href="https://www.youtube.com/@digintrainc3023">
          <FaYoutube className="text-red-500 text-sm" />
        </a>
      </li>

      {/* LinkedIn */}
      <li className="bg-white/20 backdrop-blur-xl p-1 rounded-xl border border-white/30
          shadow-md hover:shadow-blue-300/50 hover:-translate-y-[3px]
          active:translate-y-1 transition-all duration-300 cursor-pointer">
        <a href="https://www.linkedin.com/company/digintra">
          <FaLinkedin className="text-sky-500 text-sm" />
        </a>
      </li>

      {/* Twitter */}
      <li className="bg-white/20 backdrop-blur-xl p-1 rounded-xl border border-white/30
          shadow-md hover:shadow-sky-300/50 hover:-translate-y-[3px]
          active:translate-y-1 transition-all duration-300 cursor-pointer">
        <a href="https://x.com/digintra">
          <FaTwitter className="text-sky-400 text-sm" />
        </a>
      </li>

    </ul>
  </div>

</div>


      {/* second section */}

      {/* <div className="w-[100%] flex items-center justify-between px-5 h-[5rem] bg-gradient-to-r from-orange-50 via-blue-50 to-orange-50">
        <div>
       <img src={digintralogo} alt="digintra-logo" className="w-[60px] h-[60px]" />

        </div>
        <ul className=" gap-9 hidden md:flex">
         <Link to="/"> <li className="" style={{fontFamily:"'Poppins', sans-serif"}}>Home</li></Link>
         <li className="flex items-center gap-1 cursor-pointer" style={{fontFamily:"'Poppins', sans-serif"}} onClick={handleopenproduct} >Products<IoMdArrowDropdown className="mt-1"/></li>
          <li className="flex items-center gap-1 cursor-pointer" style={{fontFamily:"'Poppins', sans-serif"}} onClick={handleopenresource}>Resources<IoMdArrowDropdown className="mt-1"/></li>
         <Link to="/partner"> <li className="" style={{fontFamily:"'Poppins', sans-serif"}}>Partner</li> </Link>
          <li className="flex items-center gap-1 cursor-pointer" style={{fontFamily:"'Poppins', sans-serif"}} onClick={handleopenpricing} >Pricing<IoMdArrowDropdown className="mt-1"/></li>
          <Link to="/whatsapp-business-api"><li className="" style={{fontFamily:"'Poppins', sans-serif"}}>WhatsApp API</li></Link>
          <Link to="/contact-us"><li className="" style={{fontFamily:"'Poppins', sans-serif"}}>Contact</li></Link>
        </ul>

        <div className="flex gap-6">
        <button className="hidden w-[150px] md:block bg-gradient-to-r from-blue-500 via-blue-600 to-blue-900 p-2 text-white rounded-md " onClick={handleSignup} style={{fontFamily:"'Poppins', sans-serif"}}>Login</button>
<a href="/#sales"> <button className="hidden md:block border-2 font-semibold border-blue-900 p-2 text-blue-900 rounded-md " style={{fontFamily:"'Poppins', sans-serif"}}>Contact Sales</button>  </a> 
           <p className="block md:hidden bg-orange-500 p-3 rounded-lg" onClick={handletoggle}> <FaBars className="text-orange-50 "/></p>
        </div>
      </div> */}


        <div className="w-full flex items-center justify-between px-6 h-[4rem] 
     bg-gradient-to-r from-white/30 via-blue-50/40 to-white/30
     backdrop-blur-xl shadow-md border-b border-white/20">

  {/* Logo */}
  <div>
    <img
      src={digintralogo}
      alt="digintra-logo"
      className="w-10 h-10"
    />
  </div>

  {/* Menu */}
  <ul className="gap-8 hidden md:flex text-[15px] font-medium text-black">
    <Link to="/"><li className="hover:text-green-500">Home</li></Link>

    <li 
      className="flex items-center gap-1 cursor-pointer hover:text-green-500"
      onClick={handleopenproduct}
    >
      Products <IoMdArrowDropdown className="mt-1" />
    </li>

    <li
      className="flex items-center gap-1 cursor-pointer hover:text-green-500"
      onClick={handleopenresource}
    >
      Resources <IoMdArrowDropdown className="mt-1" />
    </li>

    <Link to="/partner"><li className="hover:text-green-500">Partner</li></Link>

    <li
      className="flex items-center gap-1 cursor-pointer hover:text-green-500"
      onClick={handleopenpricing}
    >
      Pricing <IoMdArrowDropdown className="mt-1" />
    </li>

    <Link to="/whatsapp-business-api"><li className="hover:text-green-500">WhatsApp API</li></Link>
    <Link to="/contact-us"><li className="hover:text-green-500">Contact</li></Link>
  </ul>

  {/* Buttons */}
  <div className="flex gap-5 items-center">
    
    {/* 3D Login Button */}
    <button
      className="hidden md:block w-[100px] py-2 rounded-2xl
      
      text-white font-semibold border-[0.5px] border-white bg-green-900 hover:bg-green-950
      active:translate-y-[2px] active:shadow-none transition-all"
      onClick={handleSignup}
    >
      Login
    </button>

    {/* Glass Border Button */}
    <a href="/#sales">
      <button
        className="hidden md:block py-2 px-4 rounded-2xl font-semibold
       border-[0.5px] text-white border-white bg-green-900
         shadow-md hover:bg-green-950 transition"
      >
        Contact Sales
      </button>
    </a>

    {/* Mobile Menu Icon */}
    <p
      className="block md:hidden bg-blue-600 p-3 rounded-xl shadow-lg"
      onClick={handletoggle}
    >
      <FaBars className="text-white" />
    </p>

  </div>
</div>



      {openproduct && <Productcom onClose={onClose}/> }
      {openresource && <Resourcecom onClose={onClose}/>}
      {openpricing && <Navbarcom onClose={onClose}/> }
      {toggle && <Toggle onClose={onClose}/>}
      {sign && <Signupcomp onClose={onClose}/>}

    </div>
  );
}
