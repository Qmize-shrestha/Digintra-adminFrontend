import React from 'react'
import icons14 from "../assets/Get_started_img.webp";
import icons1 from "../assets/icons8-arrow-100.png";


function Getstarted() {
  return (
    <div className="w-[310px] mx-auto h-auto lg:w-[1140px] lg:flex mb-10">
          <img
            src={icons14}
            alt=""
            className="lg:w-[50%]"
          />
  
          <div data-aos="fade-up" className="w-[310px] lg:w-[500px] mx-auto mt-5 space-y-4 h-auto">
            <h3 className="text-[21px] font-[600] text-[#555555] lg:text-[48px] text-center lg:text-right" style={{fontFamily:"'Montserrat', sans-serif"}}>
              Get start with{" "}
              <span className="text-[23px] font-[900] text-[#0053b7] lg:text-[53px]">
                DIGINTRA{" "}
              </span>{" "}
              today!
            </h3>
            <p className="text-[]13px] text-center lg:text-right" style={{fontFamily:"'Poppins', sans-serif"}}>
              Create an account to get free trial right away or get in touch with
              us now...
            </p>
            <div className="w-[310px] lg:w-[500px] space-y-6 h-auto lg:pl-[286px] px-12">
          <a href="https://sms-login.digintra.com/User/SignUp">   <button className="w-[200px] h-14  shadow-lg shadow-gray-400 hover:-translate-y-2 bg-gradient-to-tr from-yellow-600 to-green-600  rounded-lg transition-transform  flex pl-7 text-white py-4">
                Register Now
                <span>
                  <img src={icons1} alt="" className="h-7 w-10" />
                </span>
              </button>
              </a> 
           <a href='https://api-wa.co/nVOl41' >  <button className="w-[200px]  mt-6 ring ring-green-600 ring-offset-4 h-14 bg-gradient-to-tr shadow-lg shadow-gray-400 hover:translate-y-2 from-green-500 to-green-300 rounded-lg transition-transform flex pl-7 py-4">
                Discuss On Call
                <span>
                  <img src={icons1} alt="" className="h-7 w-10"  />
                </span>
              </button> </a>
            </div>
          </div>
        </div>
  )
}

export default Getstarted
