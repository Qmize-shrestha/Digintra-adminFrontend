// ChildCompaniesSection.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';
import './ChildCompany.css'
import msg24 from '../assets/mSg24x7_Communications_Logo_1_x97-De0z8R1X.png'
import smtpwhiz from '../assets/smtpwhiz.png'
import Yugpatrika from '../assets/YugPatrika-Official-Logo.png'

// Array of child companies with updated details
const childCompanies = [
  { name: 'MSG24x7', description: `MSG24x7: Your Trusted Hub for Messaging, Website Development, and IT Solutions—All Under One Roof.`, logo:  msg24, link: 'https://msg24x7.com/' },
  { name: 'YugPatrika', description:`Yugpatrika News: India's Most Watched and Respected News Media.` , logo:  Yugpatrika, link: 'https://yugpatrika.com/' },
  { name: 'SMTPWhiz', description:`SMTPWhiz: The Trusted DIY SMTP Server for Mass Emailing, Trusted by 10,000+ Businesses for Their Email Campaigns.` , logo: smtpwhiz, link: 'https://smtpwhiz.com/' },
  // Add more companies as needed
];

const ChildCompany = () => {
  return (
    <div className="w-full flex justify-center -mt-[25px] md:-mt-[100px]">
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
      className="w-full max-w-4xl swiper-slidechild" // Adjust this for desired width
      data-aos="zoom-in-up"
    >
      {childCompanies.map((company, index) => (
        <SwiperSlide key={index}>
          <a href={company.link}>
          <div className="flip-card md:w-[400px] md:h-[200px] w-[100px] h-[50px]">
            <div className="flip-card-inner">
              <div className="flip-card-front flex justify-center items-center">
                <img src={company.logo} alt={`${company.name}`} className='w-20 md:w-64'/>
              </div>
              <div className="flip-card-back p-[10px] md:p-[20px]">
                <p className='font-semibold text-[6px] md:text-[14px]' style={{fontFamily:"'poppins','sans-serif'"}}>{company.description}</p>
              </div>
            </div>
          </div>
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  
  );
};

export default ChildCompany;
