import React from 'react'
import whatsappkey from "../assets/Whatsapp_key.webp";
export default function WhatsAppkeycomp() {
  return (
    <div className=" mt-8 lg:mt-12 h-auto mx-auto lg:w-[80%] lg:flex justify-between items-center border-2 border-blue-800 border-dashed rounded-lg md:px-11 mdLpy-11 bg-gradient-to-tr from-indigo-100 via-green-100 to-orange-100">
     <div className='w-full h-full flex-1'>
      <img src={whatsappkey} alt=""  className='h-[50%] md:h-[80%]'/>
     </div>
      <div className='flex-1'>
        <h3 className="head text-center font-[700] text-[21px] lg:text-[40px] text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-indigo-600 to-pink-500  " style={{fontFamily:"'Montserrat', sans-serif"}}>
          {" "}
          Smart Retargeting for{<br />}
          3X Sales
        </h3>

        <div className="space-y-4 mt-2">
          <p className="text-[13px] font-[400] text-center lg:text-[16px] " style={{fontFamily:"'Poppins',sans-serif"}}>
            Your brand is obviously very important and so our WABA API will
            always be on hand to help to turn potential customer problems into
            praise
          </p>
          <p className="text-[13px] font-[400] text-center lg:text-[16px]" style={{fontFamily:"'Poppins',sans-serif"}}>
            ⚡️ Segregate your Audiences Smartly and Re-Broadcast for Higher
            Conversions!
          </p>
        </div>
      </div>
    </div>
  )
}
