import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../pages/Home.css";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import icons1 from "../assets/icons8-arrow-100.png";
import icons2 from "../assets/icons8-call-50.png";
import icons3 from "../assets/icons8-arrow-100.png";
import icons4 from "../assets/icons8-call-50.png";
import icons5 from "../assets/Asset 6-8.png";
import slider from "../assets/slider.png";
import icons6 from "../assets/icons8-arrow-100.png";
import icons7 from "../assets/icons8-call-50.png";
import icons8 from "../assets/apple-touch-icon.png";
import voice from "../assets/voice.png";
export default function Homeslider() {
  return (
    <>
      <div className="main pt-[10rem] md:pt-[10rem] pb-[5rem] md:pb-[0rem] w-auto h-auto">
        <div className="  flex space-x-1 w-[85%]  mx-auto">
          <div className="w-[30px] h-[30px] bg-white rounded-full"></div>
          <div className="w-[20px] h-[20px] bg-white rounded-full"></div>
          <div className="w-[10px] h-[10px] bg-white rounded-full"></div>
        </div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide className="pb-8 md:pb-[7rem]">
            <div className="lg:flex lg:w-[85%] lg:mx-auto">
              <div className="">
                <div className="w-[85%]  h-auto mx-auto  pb-5  ">
                  <h1
                    data-aos="fade-right"
                    className="text-[#0053b7] font-[600] lg:text-[40px] text-[21px] lg:text-left"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Engage Customers With Faster, More Reliable Messaging.
                  </h1>
                  <p
                    data-aos="fade-right"
                    class="content lg:text-left"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Send business messages through our SMS gateway,{<br />}
                    integration, or API.
                  </p>
                </div>
                <div className="space-y-0 mt-7 mx-auto  w-[85%]   ">
                  <Link to="/enterprise-messaging">
                    <button className="border-b-2 border-blue-600 ml-2 lg:ml-0 bg-gradient-to-tr from-yellow-600 to-green-600 w-[200px] h-14 rounded-lg shadow-md shadow-yellow-400 hover:-translate-y-2 text-white font-semibold pl-10 py-4 flex">
                      Read More
                      <span>
                        <img src={icons1} alt="" className="h-7 w-10" />
                      </span>
                    </button>
                  </Link>
                  {<br />}
                  <a href="https://api-wa.co/nVOl41">
                    {" "}
                    <button className=" border-b-2 border-blue-600 ring ring-green-600 ring-offset-4 ml-2 lg:ml-0 bg-gradient-to-tr from-green-500 to-green-300 w-[200px] h-14 rounded-lg shadow-md shadow-yellow-400 hover:translate-y-2 font-semibold flex pl-1 py-4">
                      <span>
                        <img src={icons2} alt="" className="h-7 " />
                      </span>
                      Call +919992814676{" "}
                    </button>{" "}
                  </a>
                </div>
              </div>
              <img
                data-aos="zoom-in-up"
                src={slider}
                alt="Messaging Services, Email Services, Social Media & Branding Services"
                className="pt-[60px] h-[400px] w-[400px]  lg:h-[400px] lg:w-[400px] mx-auto rounded-full  -mt-9 "
              />
            </div>
          </SwiperSlide>

          {/* second slide */}
          <SwiperSlide className="pb-8">
            <div className="lg:flex lg:w-[85%] lg:mx-auto">
              <div>
                <div className="w-[85%]  h-auto mx-auto  pb-5  ">
                  <h1
                    data-aos="fade-right"
                    className="text-[#0053b7] lg:text-[45px] font-[600] text-[21px] lg:text-left"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    We Power Billions Of Messages Across The Globe.{" "}
                  </h1>
                  <p
                    data-aos="fade-right"
                    class="content lg:text-left"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Take your business messaging to the next level with {<br />}
                    our gateway built for speed, and deliverability.
                  </p>
                </div>
                <div className="space-y-0 mt-7 mx-auto w-[85%]   ">
                  <Link to="/enterprise-messaging">
                    {" "}
                    <button className="border-b-2 border-blue-600 ml-2 lg:ml-0 bg-gradient-to-tr from-yellow-600 to-green-600 w-[200px] h-14 rounded-lg shadow-md shadow-yellow-400 hover:-translate-y-2  pl-10 py-4  text-white font-semibold flex">
                      Read More
                      <span>
                        <img src={icons3} alt="" className="h-7 w-10" />
                      </span>
                    </button>
                  </Link>
                  {<br />}
                  <a href="https://api-wa.co/nVOl41">
                    {" "}
                    <button className=" border-b-2 border-blue-600 ring ring-green-600 ring-offset-4 ml-2 lg:ml-0 bg-gradient-to-tr from-green-500 to-green-300 w-[200px] h-14 rounded-lg shadow-md font-semibold shadow-yellow-400 hover:translate-y-2 flex pl-1 py-4">
                      <span>
                        <img src={icons4} alt="" className="h-7 " />
                      </span>
                      Call +919992814676{" "}
                    </button>
                  </a>
                </div>
              </div>
              <img
                data-aos="zoom-in-up"
                src={icons5}
                alt="Messaging Services, Email Services, Social Media & Branding Services"
                className="pt-[60px] h-[400px] w-[400px]  lg:h-[400px] lg:w-[400px] mx-auto rounded-full  -mt-9 "
              />
            </div>
          </SwiperSlide>
          {/* third slide */}

          <SwiperSlide className="pb-8 md:pb-[7rem]">
            <div className=" lg:flex lg:w-[85%] lg:mx-auto">
              <div>
                <div className="w-[85%] lg:w-[85%] h-auto mx-auto  pb-5  ">
                  <h1
                    data-aos="fade-right"
                    className="text-[#0053b7] font-[600] lg:text-[45px] text-[21px] lg:text-left"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Reach The World With Our Powerful SMS API
                  </h1>
                  <p
                    data-aos="fade-right"
                    class="content lg:text-left"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Send and receive SMS messages through a single{<br />}
                    connection for timely and cost-efficient communications.
                  </p>
                </div>
                <div className="space-y-0 mt-7 mx-auto w-[85%] lg:w-[85%]  ">
                  <Link to="/enterprise-messaging">
                    {" "}
                    <button className="border-b-2 border-blue-600 ml-2 lg:ml-0 bg-gradient-to-tr from-yellow-600 to-green-600 w-[200px] h-14 rounded-lg shadow-md shadow-yellow-400 hover:-translate-y-2 text-white font-semibold pl-10 py-4 flex">
                      Read More
                      <span>
                        <img src={icons6} alt="" className="h-7 w-10" />
                      </span>
                    </button>
                  </Link>
                  {<br />}
                  <a href="https://api-wa.co/nVOl41">
                    {" "}
                    <button className=" border-b-2 border-blue-600 ring ring-green-600 ring-offset-4 ml-2 lg:ml-0 bg-gradient-to-tr from-green-500 to-green-300 w-[200px] h-14 rounded-lg font-semibold shadow-md shadow-yellow-400 hover:translate-y-2 flex pl-1 py-4">
                      <span>
                        <img src={icons7} alt="" className="h-7 " />
                      </span>
                      Call +919992814676{" "}
                    </button>{" "}
                  </a>
                </div>
              </div>
              <img
                data-aos="zoom-in-up"
                src={voice}
                alt="Messaging Services, Email Services, Social Media & Branding Services"
                className="pt-[60px] h-[400px] w-[400px]  lg:h-[400px] lg:w-[400px] mx-auto rounded-full   -mt-9 "
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="w-[100%] md:-mt-[4rem] -mt-[4rem]   flex justify-center items-center z-50 ">
        <div className="w-[90%] rounded-full md:w-[40%] h-[20vh] flex justify-center items-center bg-gradient-to-r from-blue-100   to-orange-50 border-4 border-green-800 ">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="flex justify-center">
                <img
                  src={icons8}
                  alt="icons"
                  className="w-[30%] h-28  object-contain"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center">
                <img
                  src={icons8}
                  alt="icons"
                  className="w-[30%] h-28 object-contain"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center">
                <img
                  src={icons8}
                  alt="icons"
                  className="w-[30%] h-28 object-contain"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
