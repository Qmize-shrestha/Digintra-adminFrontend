import React from 'react'
import businesskey from "../assets/business_key.webp"
export default function Businesskeycomp() {
  return (
    <div>
       <div className=" lg:mt-12 h-auto mx-auto lg:w-[80%] lg:flex justify-center items-center md:px-11 md:py-11 border-2 border-blue-800 rounded-lg border-dashed bg-gradient-to-tr from-indigo-100 via-green-100 to-orange-100">
    <div className='w-full h-full flex-1 '>
      <img src={businesskey} alt="" className='h-[50%] md:h-[80%]' />
    </div>
    <div className='flex-1'>
      <h3 data-aos="fade-right" className="head text-center font-[700] text-[21px] lg:text-[40px] text-[#0053b7] md:text-center" style={{fontFamily:"'Montserrat', sans-serif"}}>
        {" "}
        Key features of {<br />}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-indigo-600 to-pink-500  '>
        Business {<br />}
        SMS</span>
      </h3>
      <p data-aos="fade-right" className="text-[13px] font-[400] text-center lg:text-[16px] lg:text-center p-4" style={{fontFamily:"'Poppins', sans-serif"}}>
        Different ways in which you can use SMS to Streamline Customer
        Communication
      </p>
    </div>
  </div>
    </div>
  )
}
