import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import icons1 from "../assets/icons8-arrow-100.png";
import icons2 from "../assets/icons8a2p.png";
import icons3 from "../assets/icons8-arrow-100.png";
import icons4 from "../assets/icons8-arrow-100.png";
import icons5 from "../assets/icons8loadbalacer.png";
import icons6 from "../assets/icons8-arrow-100.png";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
export default function Gateway() {
  return (
    <div data-aos="fade-down" className="w-[280px] -ml-6 text-center px-2  lg:ml-1 lg:px-6 space-y-7 lg:w-[350px] bg-gradient-to-br from-green-300 p-4   h-auto z-10">
        <Swiper
    spaceBetween={30}
    centeredSlides={true}
    loop={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
   
    pagination={{
      clickable: true,
    }}
   
    
    className="mySwiper ">
        <SwiperSlide className='pb-9'>

       
        <h2 className="border-2 border-blue-600 w-[260px] py-2 rounded-2xl bg-white hover:bg-white text-center h-auto  lg:w-[300px] hover:ease-in-out hover:cursor-pointer">
          <div className="flex px-4" data-aos="fade-right" style={{fontFamily:"'Montserrat', sans-serif"}}>
          A2P SMS hubbing platform
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
            <p className="px-2  lg:px-4 text-left" style={{fontFamily:"'Poppins',sans-serif"}}>
            A2P (Application-to-Person) SMS hubbing platforms are crucial for businesses and service providers. They facilitate the exchange of A2P SMS messages between different network operators and businesses, enabling seamless communication with customers and clients. A2P SMS hubbing platforms offer reliability, scalability, and connectivity, allowing enterprises to send bulk messages efficiently.
            </p>
       <a href="https://digintra.com/#">  <button className="border-b-2  border-blue-600 ml-2 lg:ml-3 bg-gradient-to-tr from-yellow-600 to-green-600 w-[150px] h-14 rounded-full shadow-md shadow-yellow-400 hover:-translate-y-2 text-white font-semibold pl-4 py-3 mt-5 flex">
              Read More
              <span>
                <img src={icons3} alt="" className="h-7 w-10" />
              </span>
            </button>
            </a>
          </div>
        </h2>
        </SwiperSlide>
        <SwiperSlide className='pb-9'>


        <h2 className="border-2 border-blue-600 w-[260px] py-2 rounded-2xl bg-white hover:bg-white text-center h-auto  lg:w-[300px] hover:ease-in-out hover:cursor-pointer">
          {" "}
          <div className="flex px-4" data-aos="fade-right" style={{fontFamily:"'Montserrat', sans-serif"}}>
          SMS Load Balancer
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
            <p className="px-2 lg:px-4 text-left" style={{fontFamily:"'Poppins',sans-serif"}}>
            SMS load balancers are critical components of SMS infrastructure. They distribute SMS traffic across multiple SMS gateways or routes, ensuring efficient load handling and redundancy. These load balancers help optimize SMS delivery, reduce congestion, and enhance the overall reliability of SMS services.
            </p>
        <a href="https://digintra.com/#">   <button className="border-b-2 border-blue-600 ml-2 lg:ml-3 bg-gradient-to-tr from-yellow-600 to-green-600 w-[150px] h-14 rounded-full shadow-md shadow-yellow-400 hover:-translate-y-2 text-white font-semibold pl-4 py-3 mt-5 flex">
              Read More
              <span>
                <img src={icons6} alt="" className="h-7 w-10" />
              </span>
            </button>
            </a> 
          </div>
        </h2>
        </SwiperSlide>
      
      </Swiper>
      </div>
  )
}
