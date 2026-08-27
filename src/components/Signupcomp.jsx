import React from 'react'
import { FaSms } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
export default function Signupcomp({ onClose }) {
  return (
    <div className='w-[100%] h-screen fixed  z-50' onClick={onClose}>
      <div className='w-[300px] h-auto bg-blue-50  right-[4rem] absolute border-b-8 border-blue-800 '>
        <ul className='w-[200px] mx-auto  py-[1rem]'>
          <a href="https://sms-login.digintra.com/"> <li className='text-left flex items-center gap-5 my-[2rem] hover:scale-105 transition-transform' style={{ fontFamily: "'Poppins',sans-serif" }}><FaSms className='text-[1rem] text-green-800' /> Bulk SMS Login</li></a>
          <div className='h-[4px] bg-blue-800 my-2 ' > </div>
          <a href="https://apihub.qmize.com/">  <li className='text-left flex items-center gap-5 my-[2rem] hover:scale-105 transition-transform' style={{ fontFamily: "'Poppins',sans-serif" }}><IoLogoWhatsapp className='text-[1rem] text-green-800' /> WhatsApp Login</li> </a>

        </ul>
      </div>
    </div>
  )
}
