import React from 'react'
import { Link } from 'react-router-dom'
import icons1 from "../assets/icons8-arrow-100.png";
import icons2 from "../assets/icons8api.png";
import icons3 from "../assets/icons8-arrow-100.png";
export default function Trending() {
  return (
    <div data-aos="fade-down" className="w-[280px] -ml-6 text-center px-2  lg:ml-1 lg:px-6 space-y-7 lg:w-[350px] bg-gradient-to-br from-green-300 p-4   h-auto z-10 ">
       
 

    
    <h2 className="border-2 border-blue-600 w-[260px] py-2 rounded-2xl bg-white hover:bg-white text-center h-auto  lg:w-[300px] hover:ease-in-out hover:cursor-pointer ">
     <div className="flex px-4" data-aos="fade-right" style={{fontFamily:"'Montserrat', sans-serif"}}>
      WhatsApp Business API
        <span>
          <img src={icons1} alt="" className="h-7 w-10" />
        </span>
      </div>
      <div className="mt-5 space-y-3">
        <img
          src={icons2}
          alt=""
          className="w-[100px] h-[100px]  rounded-full mx-auto "
        />
        <p className="px-2  lg:px-4 text-left" style={{fontFamily:"'Poppins', sans-serif"}}>
        The WhatsApp Business API is a critical tool for businesses seeking to engage with their customers on the popular messaging platform, WhatsApp. This API enables businesses to integrate WhatsApp into their communication channels, allowing for real-time customer interactions, notifications, and support.
        </p>
  <Link to="/whatsapp-business-api"><button className="border-b-2  border-blue-600 ml-2 lg:ml-3 bg-gradient-to-tr from-yellow-600 to-green-600 w-[150px] h-14 rounded-full shadow-md shadow-yellow-400 hover:-translate-y-2 text-black font-semibold pl-4 py-3  mt-5 flex">
          Read More
          <span>
            <img src={icons3} alt="" className="h-7 w-10" />
          </span>
        </button>
        </Link>  
      </div>
    </h2>
   
  
  </div>
  )
}
