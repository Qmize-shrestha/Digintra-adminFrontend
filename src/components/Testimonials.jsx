import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';
import icons1 from "../assets/te4.png";
import icons2 from "../assets/TE3.png";
import icons3 from "../assets/TE1.png";
import icons4 from "../assets/testi.png";
import background from "../assets/20.jpg"

export default function Testimonials() {
  return (
    <section
  className="relative w-full py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden"
  style={{ fontFamily: "'Montserrat', sans-serif" }}
>

  {/* Floating Glow Blobs */}
  <div className="absolute top-10 left-10 w-40 h-40 bg-blue-300/30 rounded-full blur-3xl"></div>
  <div className="absolute bottom-20 right-20 w-56 h-56 bg-purple-300/30 rounded-full blur-[100px]"></div>
  <div className="absolute top-1/2 left-1/2 w-52 h-52 bg-pink-200/20 rounded-full blur-3xl -translate-x-1/2"></div>

  {/* Heading */}
  <div className="relative z-10 text-center mb-10">
    <h3
      data-aos="fade-right"
      className="text-3xl lg:text-5xl font-extrabold text-gray-800"
    >
      Our <span className="text-green-600">Testimonials</span>
    </h3>
    <div className="w-[160px] h-[3px] bg-blue-600 mx-auto mt-3 rounded-full"></div>
  </div>

  {/* Testimonials + Side Image */}
  <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-[90%] lg:w-[1140px] mx-auto gap-10">

    {/* Swiper Section */}
    <div className="w-full lg:w-[50%]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
        data-aos="zoom-in-up"
      >

        {/* ---- Testimonial Card Component ---- */}
        {[ 
          {
            img: icons1,
            name: "DigiEarn-YT",
            role: "Youtuber",
            text: "I've been using DIGINTRA for 6 months for bulk messages via API. Exceptional service, fast support and a responsive team. Thank you DIGINTRA!"
          },
          {
            img: icons2,
            name: "DigiEarn-YT",
            role: "Youtuber",
            text: "Amazing experience with DIGINTRA. Their support team replies instantly and understands technical requirements deeply. Highly recommended!"
          },
          {
            img: icons3,
            name: "Mr. Firdaus Alamshah",
            role: "Marketing Head",
            text: "DIGINTRA® boosted our business with WhatsApp marketing & SEO. Our rankings improved and inquiries increased. Thank you DIGINTRA!"
          }
        ].map((t, i) => (
          <SwiperSlide key={i} className="pb-10">
            <div className="
              relative p-8 lg:p-10 rounded-3xl 
              bg-white/70 backdrop-blur-md 
              shadow-xl border border-white/50
              hover:shadow-2xl transition-all
              ">
              
              {/* Soft Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 via-purple-100/40 to-pink-100/40 rounded-3xl -z-10"></div>

              <div className="flex flex-col items-center">
                
                {/* Profile Icon */}
                <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 flex items-center justify-center shadow-lg">
                  <img src={t.img} className="w-20 h-20 lg:w-28 lg:h-28 rounded-full" />
                </div>

                {/* Text */}
                <p className="mt-6 text-sm lg:text-base text-gray-700 font-medium italic leading-relaxed px-4 lg:px-6">
                  {t.text}
                </p>

                {/* Name & Role */}
                <p className="mt-6 text-center">
                  <span className="text-xl font-bold text-teal-600 block">{t.name}</span>
                  <span className="text-gray-500 text-sm block">{t.role}</span>
                </p>
              </div>

            </div>
          </SwiperSlide>
        ))}

      </Swiper>
    </div>

    {/* Right Side Static Image */}
    <img
      data-aos="zoom-in"
      src={icons4}
      alt="Illustration"
      className="w-[350px] md:w-[450px] lg:w-[500px] mx-auto"
    />

  </div>

</section>

  );
}
