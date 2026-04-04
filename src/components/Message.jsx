import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import { Link } from "react-router-dom";
import "swiper/css/pagination";
import "swiper/css/navigation";
import icons1 from "../assets/icons8enterprise.png";
import icons2 from "../assets/icons8-arrow-100.png";
import icons3 from "../assets/icons8-arrow-100.png";
import icons4 from "../assets/icons8-arrow-100.png";

import icons5 from "../assets/icons8transactional.png";
import icons6 from "../assets/icons8-arrow-100.png";
import icons7 from "../assets/icons8-arrow-100.png";
import icons8 from "../assets/icons8bussiness.png";
import icons9 from "../assets/icons8-arrow-100.png";
import icons10 from "../assets/icons8-arrow-100.png";
import icons11 from "../assets/icons8wholesale.png";
import icons12 from "../assets/icons8-arrow-100.png";
export default function Message() {
  return (
    <div
      data-aos="fade-down"
      className="w-[280px] -ml-6 text-center px-2  lg:ml-1 lg:px-6 space-x-7 lg:w-[350px] bg-gradient-to-br from-green-300 p-4   h-auto z-10"
    >
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
        modules={[Autoplay, Pagination]}
        className="mySwiper  "
      >
        <SwiperSlide className="pb-9 ">
          <h2 className="border-2 border-blue-600 w-[260px] py-2 rounded-2xl bg-white hover:bg-white text-center h-auto lg:w-[300px] hover:ease-in-out hover:cursor-pointer">
            <div
              className="flex px-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
              data-aos="fade-right"
            >
              Enterprise SMS
              <span>
                <img src={icons2} alt="" className="h-7 w-10" />
              </span>
            </div>
            <div className="mt-5 space-y-3">
              <img
                src={icons1}
                alt=""
                className="w-[100px] h-[100px] rounded-full  mx-auto "
              />
              <p
                className="px-2  lg:px-4 text-left"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Enterprise SMS, or Short Message Service, is a powerful
                communication tool tailored for businesses. It enables
                organizations to send concise text messages to a wide audience
                instantly.{" "}
              </p>
              <Link to="/enterprise-messaging">
                <button className="border-b-2  border-blue-600 ml-2 lg:ml-3 bg-gradient-to-tr from-yellow-600 to-green-600 w-[150px] h-12 rounded-full shadow-md shadow-yellow-400 hover:-translate-y-2 text-white font-semibold pl-4 py-3 mt-5 flex">
                  Read More
                  <span>
                    <img src={icons3} alt="" className="h-7 w-10" />
                  </span>
                </button>
              </Link>
            </div>
          </h2>
        </SwiperSlide>
        <SwiperSlide className="pb-9">
          <h2
            className="border-2 border-blue-600 w-[260px] py-2 rounded-2xl bg-white hover:bg-white text-center h-auto lg:w-[300px] hover:ease-in-out hover:cursor-pointer"
          
          >
            {" "}
            <div className="flex px-4" data-aos="fade-right"   style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Transactional SMS
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
                Transactional SMS plays a pivotal role in businesses. It
                facilitates the delivery of important, time-sensitive
                information to customers, such as order confirmations,
                appointment reminders, and authentication codes.{" "}
              </p>
              <Link to="/transactional-sms">
                {" "}
                <button className="border-b-2 border-blue-600 ml-2 lg:ml-3 bg-gradient-to-tr from-yellow-600 to-green-600 w-[150px] h-12 rounded-full shadow-md shadow-yellow-400 hover:-translate-y-2 text-white font-semibold pl-4 py-3 mt-5 flex">
                  Read More
                  <span>
                    <img src={icons6} alt="" className="h-7 w-10" />
                  </span>
                </button>
              </Link>
            </div>
          </h2>
        </SwiperSlide>
        <SwiperSlide className="pb-9">
          <h2 className="border-2 border-blue-600 w-[260px] py-2 rounded-2xl bg-white hover:bg-white text-center h-auto lg:w-[300px] hover:ease-in-out hover:cursor-pointer">
            <div className="flex px-4" data-aos="fade-right" style={{fontFamily:"'Montserrat', sans-serif"}}>
              Business Messaging
              <span>
                <img src={icons7} alt="" className="h-7 w-10" />
              </span>
            </div>
            <div className="mt-5 space-y-3">
              <img
                src={icons8}
                alt=""
                className="w-[100px] h-[100px]rounded-full  mx-auto "
              />
              <p className="px-2 lg:px-4 text-left" style={{fontFamily:"'Poppins',sans-serif"}}>
                Business messaging is a critical component of modern
                enterprises. It encompasses various communication channels, such
                as SMS, email, and chat, to engage with customers, partners, and
                employees.{" "}
              </p>
              <Link to="/business-sms">
                {" "}
                <button className="border-b-2 border-blue-600 ml-2 lg:ml-3 bg-gradient-to-tr from-yellow-600 to-green-600 w-[150px] h-12 rounded-full shadow-md shadow-yellow-400 hover:-translate-y-2 text-white font-semibold pl-4 py-3 mt-5 flex">
                  Read More
                  <span>
                    <img src={icons9} alt="" className="h-7 w-10" />
                  </span>
                </button>
              </Link>
            </div>
          </h2>
        </SwiperSlide>
        <SwiperSlide className="pb-9">
          <h2 className="border-2 border-blue-600 w-[260px] py-2 rounded-2xl bg-white hover:bg-white text-center h-auto  lg:w-[300px] hover:ease-in-out hover:cursor-pointer">
            <div className="flex px-4" data-aos="fade-right" style={{fontFamily:"'Montserrat', sans-serif"}}>
              WholeSale SMS
              <span>
                <img src={icons10} alt="" className="h-7 w-10" />
              </span>
            </div>
            <div className="mt-5 space-y-3">
              <img
                src={icons11}
                alt=""
                className="w-[100px] h-[100px] rounded-full mx-auto "
              />
              <p className="px-2  lg:px-4 text-left" style={{fontFamily:"'Poppins', sans-serif"}}>
                Wholesale SMS is an essential service for bulk message
                transmission. It caters to businesses and service providers
                looking to send large volumes of SMS messages efficiently and
                cost-effectively.{" "}
              </p>
              <Link to="/wholesale-messaging">
                {" "}
                <button className="border-b-2 border-blue-600 ml-2 lg:ml-3 bg-gradient-to-tr from-yellow-600 to-green-600 w-[150px] h-12 rounded-full shadow-md shadow-yellow-400 hover:-translate-y-2 text-white font-semibold pl-4 py-3 mt-5 flex">
                  Read More
                  <span>
                    <img src={icons12} alt="" className="h-7 w-10" />
                  </span>
                </button>{" "}
              </Link>
            </div>
          </h2>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
