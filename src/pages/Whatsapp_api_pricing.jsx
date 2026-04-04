import React from 'react';
import "./whatsapp.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect } from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import icons1 from "../assets/icons8-arrow-100.png";
import icons2 from "../assets/icons8-call-50.png";
import icons3 from "../assets/whatsapp-api-integrations.png";
import icons4 from "../assets/satis.png";
import icons5 from "../assets/moneyback.png";
import icons6 from "../assets/afford.png";
import icons7 from "../assets/manage.png";
import icons8 from "../assets/eng.png";
import icons9 from "../assets/grow.png";
import icons10 from "../assets/c1.png";
import icons11 from "../assets/c2.png";
import icons12 from "../assets/c3.png";
import icons13 from "../assets/c4.png";
import icons14 from "../assets/start2.png";
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import Getstarted from '../components/Getstarted';
import Client from '../components/Client';
import {FaUserPlus, FaWhatsapp } from 'react-icons/fa';

export default function Whatsapp_api_pricing() {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <>
    <Helmet>
    <meta name="robots" content="index, follow" />

      <title>Whatsapp Api Pricing</title>
      <meta name="description" content=''/>
      <link rel="canonical" href="https://www.digintra.com/whatsapp-api-pricing" />
    </Helmet>
      
        <div className='w-auto whatsapp pt-[270px] md:pt-[230px] h-auto patterncon relative'>
        <div className='absolute inset-0 backdrop-blur-md w-full h-full'></div>
            <div className='w-auto h-auto relative z-10'>
                <div className='w-[310px] lg:w-[1140px] py-10 h-auto mx-auto'>

                
            <h3 class="text-center text-[20px] lg:text-[30px] font-semibold " style={{fontFamily:"'Montserrat', sans-serif"}}>Businesses drive 25-60% Revenues using DIGINTRA</h3>
                    
                    
          

            <h1 class="text-center text-[30px] font-semibold" style={{fontFamily:"'Montserrat', sans-serif"}}>Complete WhatsApp Marketing Platform</h1>
							<li className='text-center' style={{fontFamily:"'Poppins', sans-serif"}}>(✓)Broadcast Promotional Offers to Unlimited Users...</li>
<li className='text-center' style={{fontFamily:"'Poppins', sans-serif"}}>(✓)Automate Messages via easy Integrations process</li>
<li className='text-center' style={{fontFamily:"'Poppins', sans-serif"}}>(✓)Enable Multi-Agent Live Chat for Customer Support
</li ><li className='text-center' style={{fontFamily:"'Poppins', sans-serif"}}>(✓)Install and Setup Chatbots and be available 24 x 7</li>{<br/>}
							<p className='text-center' style={{fontFamily:"'Poppins', sans-serif"}}>⚡️Powered by <strong>Official WhatsApp Business API</strong></p>
              <div className="h-auto mx-auto px-12 mt-7 flex md:justify-center items-center gap-4 md:gap-8 flex-col md:flex-row">
            <a href="https://sms-login.digintra.com/User/SignUp">
              <button className="border-b-2 border-[#1e3b8d] ml-2 lg:ml-0 bg-gradient-to-tr from-[#3e8646] to-[#2fac13] w-[220px] h-16 rounded-lg shadow-xl transition-transform transform hover:scale-110 hover:shadow-2xl text-white font-bold flex items-center justify-center gap-2">
                <FaUserPlus className="h-6 w-6" />
                Register Now
              </button>
            </a>
            <a href='https://api-wa.co/nVOl41'>
              <button className="border-b-2 text-white  border-[#1e3b8d] mt-6 md:mt-0  ml-2 lg:ml-0 bg-gradient-to-tr from-[#00b09b] to-[#96c93d] w-[220px] h-16 rounded-lg font-bold shadow-xl transition-transform transform hover:scale-110 hover:shadow-2xl flex items-center justify-center gap-2">
                <FaWhatsapp className="h-6 w-6" />
                Chat on WhatsApp
              </button>
            </a>
          </div>
            </div>
            </div>
            
        </div>
       <div className='w-auto h-auto bg-white'>
    <div className='w-[310px] lg:w-[1140px] lg:flex lg:flex-row-reverse h-auto mx-auto'>
  <img src={icons3} className='lg:w-[510px]'/>
    <div className='pt-[50px]'>
    <h2 class="text-[1.4rem] text-center lg:text-left font-semibold " style={{fontFamily:"'Montserrat', sans-serif"}}>Broadcast Promotional Messages (Officially)</h2>
    <p className='' style={{fontFamily:"'Poppins', sans-serif"}}>

Well, WhatsApp recently allowed Businesses to Broadcast and Automate Promotional Messages via WhatsApp Business API
{<br/>}
You can Now Send Exciting Offers, Discount Coupon Code and Festival Wishes without getting your Number blocked!
</p>
 
 </div>
    </div>
       </div>
       

       {/* third content */}
       <div className='w-auto h-auto bg-white'>
        <div className='w-[310px] h-auto lg:w-[1140px] mx-auto lg:flex'>

       
        <div className='w-[310px] lg:w-[500px] h-auto mx-auto'>
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
      className="mySwiper "
    >

        <SwiperSlide>
            <div className='w-[310px] lg:w-[500px] h-auto mx-auto'>
                <img src={icons4}/>
            <h2 className='text-center text-xl font-semibold' style={{fontFamily:"'Montserrat', sans-serif"}}>Smart Auto-Segregation</h2>
            <p className=' text-center mt-3' style={{fontFamily:"'Poppins', sans-serif"}}>DIGINTRA's WABA platform automatically segregates your broadcast audience by Delivered, Read, Replied Audiences. Run Retargeting Campaigns on the Basis of these filters.</p>
       
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-[310px] lg:w-[500px] h-auto mx-auto'>
                <img src={icons5}     />
            <h2 className='text-center text-xl font-semibold' style={{fontFamily:"'Montserrat', sans-serif"}}>Drive 3X Sales</h2>
            <p className='text-center mt-3' style={{fontFamily:"'Poppins', sans-serif"}}>Retargeting Campaigns have proven to Increase sales and engagement for Businesses.</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-[310px] lg:w-[500px] h-auto mx-auto'>
                <img src={icons6}  />
            <h2 className='text-center text-xl font-semibold' style={{fontFamily:"'Montserrat',sans-serif"}}>Affordable Price and Plans</h2>
            <p className='text-center mt-3' style={{fontFamily:"'Montserrat', sans-serif"}}>DIGINTRA's WABA platform or API is the easiest way to reach users around the worlds.</p>
            </div>
        </SwiperSlide>

       
        </Swiper>
        </div>
        
     <div className='w-[310px] lg:w-[500px] bg-white lg:pt-[140px] h-auto mx-auto '>
     <h1 class="head text-[27px] font-semibold" style={{fontFamily:"'Montserrat', sans-serif"}}>   Smart Retargeting for {<br/>}3X Sales</h1>
					<p className='' style={{fontFamily:"'Poppins', sans-serif"}}>Your brand is obviously very important and so our WABA API will always be on hand to help to turn potential customer problems into praise.</p>
					<p style={{fontFamily:"'Poppins', sans-serif"}}>⚡️ Segregate your Audiences Smartly and Re-Broadcast for Higher Conversions!</p>
     </div>
       </div>
       </div>
       

       {/* fourth content */}

       <div className='w-auto bg-white h-auto pt-[100px] '>
        <div className='w-[310px] lg:w-[1140px] h-auto mx-auto'>
        <h1 className='text-center text-[20px] lg:text-[30px] font-semibold' style={{fontFamily:"'Montserrat', sans-serif"}}>The Most 'Complete' WhatsApp Platform</h1>
        <p className='text-center'style={{fontFamily:"'Poppins', sans-serif"}}>Everything you need to notify, chat & engage your users All in one place</p>
        <div className='w-[200px] h-[4px] bg-blue-700 my-4 mx-auto'></div>

        <div className='w-[310px] lg:flex lg:w-[1140px] lg:py-10 h-auto mx-auto'>
   
      {/* first card */}

   <div className='w-[310px] h-auto mx-auto'>
   <img src={icons7} className='h-[200px] mx-auto' />
   <h2 className='text-xl font-semibold text-center' style={{fontFamily:"'Montserrat', sans-serif"}}>Brand Management</h2>
   <p className='text-center pt-2' style={{fontFamily:"'Poppins', sans-serif"}}>Your brand is obviously very important and so our WABA API Features will always be on hand to help to turn potential customer problems into praise.</p>

   </div>

   {/* second  card */}
   <div className='w-[310px] h-auto mx-auto'>
   <img src={icons8}   className='h-[200px] mx-auto' />
   <h2 className='text-xl font-semibold text-center' style={{fontFamily:"'Poppins', sans-serif"}}>Engage Your Audience</h2>
   <p className='text-center pt-2' style={{fontFamily:"'Poppins', sans-serif"}}>WhatsApp Business API help users to be engaged, which means they want to see intriguing and relevant posts that appeal to their interests.</p>

   </div>


   {/* third card */}
   <div className='w-[310px] h-auto mx-auto'>
   <img src={icons9}   className='h-[200px] mx-auto' />
   <h2 className='text-xl font-semibold text-center' style={{fontFamily:"'Montserrat', sans-serif"}}>Grow Your Audience</h2>
   <p className='text-center pt-2' style={{fontFamily:"'Poppins', sans-serif"}}>Cultivating an audience online is more challenging than ever. With so many social outlets, it’s hard for business owners to find the time to manage social outlets effectively.</p>

   </div>
        </div>

        </div>
        </div>

        {/* fifth content */}

        <Client/>
   
   {/* sixth content */}
 <Getstarted/>

       <Footer/>
        
       </>
  )
}
