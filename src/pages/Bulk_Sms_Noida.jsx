
import React from 'react';
import "./bulk.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import 'swiper/css/navigation';
import { useState } from 'react';
import { useEffect } from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import icons1 from "../assets/icons8-arrow-100.png";
import icons2 from "../assets/icons8-call-50.png";
import icons3 from "../assets/business.png";
import icons4 from "../assets/otp.png";
import icons5 from "../assets/appa.png";
import icons6 from "../assets/pay.png";
import icons7 from "../assets/update.png";
import icons8 from "../assets/rate.png";
import icons9 from "../assets/fast.png";
import icons10 from "../assets/t3.png";
import icons11 from "../assets/c1.png";
import icons12 from "../assets/c2.png";
import icons13 from "../assets/c3.png";
import icons14 from "../assets/c4.png";
import icons15 from "../assets/start2.png";
import icons16 from "../assets/icons8-plus-501.png";
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import Client from '../components/Client';
import Getstarted from '../components/Getstarted';
import {FaUserPlus, FaWhatsapp } from 'react-icons/fa';
import Businesskeycomp from '../components/Businesskeycomp';
import ReliDelivery from '../assets/key1.jpg'
import UserFriend from '../assets/key2.jpg';
import API from '../assets/key3.jpg';
import Customize from '../assets/key4.jpg';
import Transactional from '../assets/key5.jpg';
import Time from '../assets/key6.jpg';
import Pricing from '../assets/key_7.jpg';
import Management from '../assets/key8.jpg';
import Security from '../assets/key9.jpg';
import Hotel from '../assets/hotel.png';
import Education from '../assets/education.png';
import Retail from '../assets/retail.png';
import Home from '../assets/home.png';
import Health from '../assets/health.png';
import CostEffect from '../assets/costeffective.png';
import Personalisation from '../assets/personalisation.png';


export default function Bulk_sms_provider_rajasthan() {
    const [Ques1, setQues1] = useState(false);
    const [Ques2, setQues2] = useState(false);
    const [Ques3, setQues3] = useState(false);
    const [Ques4, setQues4] = useState(false);
    const [Ques5, setQues5] = useState(false);
    const [Ques6, setQues6] = useState(false);
    const [Ques7, setQues7] = useState(false);
    const [Ques8, setQues8] = useState(false);
    const [Ques9, setQues9] = useState(false);
    const [Ques10, setQues10] = useState(false);
    function handleQues1() {
      setQues1(!Ques1);
      setQues2(false);
      setQues3(false);
      setQues4(false);
      setQues5(false);
      setQues6(false);
      setQues7(false);
      setQues8(false);
      setQues9(false);
      setQues10(false);
    }
    function handleQues2() {
      setQues2(!Ques2);
      setQues1(false);
      setQues3(false);
      setQues4(false);
      setQues5(false);
      setQues6(false);
      setQues7(false);
      setQues8(false);
      setQues9(false);
      setQues10(false);
    }
  
    function handleQues3() {
      setQues3(!Ques3);
      setQues2(false);
      setQues1(false);
      setQues4(false);
      setQues5(false);
      setQues6(false);
      setQues7(false);
      setQues8(false);
      setQues9(false);
      setQues10(false);
    }
    function handleQues4() {
      setQues4(!Ques4);
      setQues2(false);
      setQues3(false);
      setQues1(false);
      setQues5(false);
      setQues6(false);
      setQues7(false);
      setQues8(false);
      setQues9(false);
      setQues10(false);
    }
    function handleQues5() {
      setQues5(!Ques5);
      setQues2(false);
      setQues3(false);
      setQues4(false);
      setQues1(false);
      setQues6(false);
      setQues7(false);
      setQues8(false);
      setQues9(false);
      setQues10(false);
    }
    function handleQues6() {
        setQues6(!Ques6);
        setQues2(false);
        setQues3(false);
        setQues4(false);
        setQues5(false);
        setQues1(false);
        setQues7(false);
        setQues8(false);
        setQues9(false);
        setQues10(false);
      }
      function handleQues7() {
        setQues7(!Ques7);
        setQues2(false);
        setQues3(false);
        setQues4(false);
        setQues5(false);
        setQues6(false);
        setQues1(false);
        setQues8(false);
        setQues9(false);
        setQues10(false);
      }
      function handleQues8() {
        setQues8(!Ques8);
        setQues2(false);
        setQues3(false);
        setQues4(false);
        setQues5(false);
        setQues6(false);
        setQues7(false);
        setQues1(false);
        setQues9(false);
        setQues10(false);
      }
      function handleQues9() {
        setQues9(!Ques9);
        setQues2(false);
        setQues3(false);
        setQues4(false);
        setQues5(false);
        setQues6(false);
        setQues7(false);
        setQues8(false);
        setQues1(false);
        setQues10(false);
      }
      function handleQues10() {
        setQues10(!Ques10);
        setQues2(false);
        setQues3(false);
        setQues4(false);
        setQues5(false);
        setQues6(false);
        setQues7(false);
        setQues8(false);
        setQues9(false);
        setQues1(false);
      }
      useEffect(()=>{
        window.scrollTo(0,0);
      },[])
  return (
    <>
    <Helmet>
    <meta name="robots" content="index, follow" />

      <title>Bulk SMS Service Provider in Noida | DIGINTRA – Best SMS Company
</title>
      <meta name="description" content='DIGINTRA is the leading bulk SMS service provider in Noida. Reliable, affordable & fast bulk SMS company in Noida. Start your campaign today!
'/>
 <meta name="keywords" content="bulk sms service provider in noida, bulk sms service in noida, bulk sms provider in noida, bulk sms company in noida
" />
 <link rel="canonical" href="https://digintra.com/bulk-sms-service-provider-in-noida
" />
    </Helmet>

    <div className=" patterncon relative w-auto pt-[230px] lg:h-[720px] pb-[50px] ">
    <div className='absolute inset-0 backdrop-blur-md w-full h-full'></div>
        <div className='w-auto relative z-10 h-auto'>
            <div className='w-[310px] lg:w-[1140px] py-10 h-auto mx-auto'>

            
        <h1 className="text-center text-[30px] font-semibold " style={{fontFamily:"'Montserrat',sans-serif"}}>Bulk SMS Service Provider in Noida</h1>
        <p className='text-center px-4 mt-4' style={{fontFamily:"'Poppins',sans-serif"}}>Grow your Business with DIGINTRA A2P Messaging Services</p>
        <p className='text-center px-4 mt-4' style={{fontFamily:"'Poppins',sans-serif"}}>All it takes is <strong>30 seconds.</strong> Simply click the sign-up buttonbelow and you will receive FREE DEMO Credit to test.</p>
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
   <div className='w-auto bg-white h-auto'>
<div className='w-[310px] lg:w-[1140px] lg:flex lg:flex-row-reverse h-auto mx-auto'>
<img src={icons3} alt='Bulk SMS Provider in Rajasthan' className='lg:w-[510px]'/>
<div className='pt-[50px] space-y-4'>
<h2 class="text-xl text-center lg:text-left " style={{fontFamily:"'Montserrat', sans-serif"}}><strong>Connecting Noida: Why Your Business Needs a Reliable Bulk SMS Provider</strong></h2>
<p style={{fontFamily:"'Poppins',sans-serif"}}>Boost your business communication and customer engagement with the most reliable bulk SMS service provider in Noida. At DIGINTRA, we specialize in delivering powerful, fast, and cost-effective bulk SMS services in Noida that help businesses connect instantly with their audience. Whether you are a startup, SME, or enterprise, our advanced messaging platform ensures maximum delivery rates, strong infrastructure, and measurable results for your marketing campaigns.</p>

</div>
</div>
   </div>
   <div className='w-auto h-auto bg-white'>


{/* Why Choose DIGINTRA Section */}
<div className="bg-gradient-to-br from-[#ffffff] to-[#f8fafc] py-20">
  <div className="w-[320px] lg:w-[1140px] mx-auto px-4 lg:px-0 text-center">
    
    {/* Heading */}
    <h2 
      className="text-3xl lg:text-4xl font-bold text-[#14213d] mb-4"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      Why Choose <span className="text-[#fca311]">DIGINTRA</span> as Your Bulk SMS Company in Noida?
    </h2>
    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
      Trusted by <span className="font-semibold text-[#fca311]">1000+ businesses</span>, 
      DIGINTRA delivers innovative and scalable communication solutions 
      designed to help brands connect, engage, and grow.
    </p>

    {/* Features Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      {/* Feature Card 1 */}
      <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition duration-300">
        <div className="text-4xl mb-4 text-[#fca311]">🚀</div>
        <h3 className="text-xl font-semibold mb-2">High Delivery Rate</h3>
        <p className="text-gray-600 leading-relaxed">
          Guaranteed fast & secure message delivery that reaches your customers instantly.
        </p>
      </div>

      {/* Feature Card 2 */}
      <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition duration-300">
        <div className="text-4xl mb-4 text-[#fca311]">📱</div>
        <h3 className="text-xl font-semibold mb-2">User-Friendly SMS Panel</h3>
        <p className="text-gray-600 leading-relaxed">
          Simple, intuitive dashboard with advanced features to manage campaigns effortlessly.
        </p>
      </div>

      {/* Feature Card 3 */}
      <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition duration-300">
        <div className="text-4xl mb-4 text-[#fca311]">💰</div>
        <h3 className="text-xl font-semibold mb-2">Affordable Pricing</h3>
        <p className="text-gray-600 leading-relaxed">
          Flexible packages designed for startups, SMEs, and enterprises of all sizes.
        </p>
      </div>

      {/* Feature Card 4 */}
      <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition duration-300">
        <div className="text-4xl mb-4 text-[#fca311]">⏰</div>
        <h3 className="text-xl font-semibold mb-2">24/7 Customer Support</h3>
        <p className="text-gray-600 leading-relaxed">
          Dedicated support team always available to guide you and resolve queries instantly.
        </p>
      </div>

      {/* Feature Card 5 */}
      <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition duration-300">
        <div className="text-4xl mb-4 text-[#fca311]">⚙️</div>
        <h3 className="text-xl font-semibold mb-2">Custom SMS Solutions</h3>
        <p className="text-gray-600 leading-relaxed">
          From promotional campaigns to OTP & transactional alerts — tailored to your needs.
        </p>
      </div>

      {/* Feature Card 6 */}
      <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition duration-300">
        <div className="text-4xl mb-4 text-[#fca311]">🎯</div>
        <h3 className="text-xl font-semibold mb-2">Targeted Messaging</h3>
        <p className="text-gray-600 leading-relaxed">
          Ensure your SMS reaches the right audience at the right time to drive conversions.
        </p>
      </div>
    </div>

    {/* CTA */}
    <div className="mt-16">
      <a
        href="#contact"
        className="inline-block bg-[#fca311] text-[#14213d] font-semibold text-lg px-10 py-4 rounded-xl shadow-lg hover:bg-[#ffb703] transition duration-300"
      >
        📞 Get Started with DIGINTRA Today
      </a>
    </div>

  </div>
</div>




{/* Our Bulk SMS Services in Noida */}
<div className="bg-[#f8fafc] py-20">
  <div className="w-[320px] lg:w-[1140px] mx-auto px-4 lg:px-0 text-center">

    {/* Heading */}
    <h2 
      className="text-3xl lg:text-4xl font-bold text-[#14213d] mb-4"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      Our <span className="text-[#fca311]">Bulk SMS Services</span> in Noida
    </h2>
    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
      At DIGINTRA, we offer a complete suite of SMS solutions 
      crafted to match different industries and unique business needs.  
    </p>

    {/* Service Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      
      {/* Service Card 1 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
        <div className="text-5xl mb-4">📩</div>
        <h3 className="text-xl font-semibold mb-2">Promotional SMS</h3>
        <p className="text-gray-600 leading-relaxed">
          Promote offers, discounts & services directly to your customers.
        </p>
      </div>

      {/* Service Card 2 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
        <div className="text-5xl mb-4">🔑</div>
        <h3 className="text-xl font-semibold mb-2">Transactional SMS</h3>
        <p className="text-gray-600 leading-relaxed">
          Send instant alerts, secure OTPs & notifications anytime.
        </p>
      </div>

      {/* Service Card 3 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
        <div className="text-5xl mb-4">🌐</div>
        <h3 className="text-xl font-semibold mb-2">API Integration</h3>
        <p className="text-gray-600 leading-relaxed">
          Connect seamlessly with websites, apps & CRMs for automation.
        </p>
      </div>

      {/* Service Card 4 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
        <div className="text-5xl mb-4">📊</div>
        <h3 className="text-xl font-semibold mb-2">Detailed Analytics</h3>
        <p className="text-gray-600 leading-relaxed">
          Monitor and optimize campaigns with real-time performance reports.
        </p>
      </div>
    </div>

    {/* Bottom Note */}
    <div className="mt-16 bg-gradient-to-r from-[#fca311] to-[#ffb703] p-8 rounded-2xl shadow-lg">
      <p className="text-xl font-semibold text-[#14213d] leading-relaxed">
        Whether you need to send <span className="text-white">1,000</span> or 
        <span className="text-white"> 1 million messages</span>,  
        DIGINTRA is the <span className="underline">Bulk SMS provider in Noida</span> you can rely on.
      </p>
    </div>

  </div>
</div>




    <section className="bg-[#f8fafc] py-20">
      <div className="w-[320px] lg:w-[1140px] mx-auto px-4 lg:px-0 text-center">

        {/* Heading */}
        <h2 
          className="text-3xl lg:text-4xl font-bold text-[#14213d] mb-4"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Who Can Benefit from Our{" "}
          <Link 
            to="/bulk-sms"
            className="text-[#fca311] hover:underline"
          >
            Bulk SMS Services
          </Link>{" "}
          in Noida?
        </h2>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
          Our powerful <Link to="/bulk-sms" className="text-[#fca311] hover:underline font-semibold">
            bulk SMS services
          </Link> are ideal for businesses across industries, 
          helping them achieve better customer reach and brand visibility.
        </p>

        {/* Grid of Industries */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">

          {/* Retail */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <div className="text-4xl mb-3">🏪</div>
            <h3 className="text-xl font-semibold mb-1">Retail & E-commerce</h3>
            <p className="text-gray-600">Boost sales with promotions and instant offers.</p>
          </div>

          {/* Healthcare */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <div className="text-4xl mb-3">🏥</div>
            <h3 className="text-xl font-semibold mb-1">Healthcare & Hospitals</h3>
            <p className="text-gray-600">Send appointment reminders & health updates.</p>
          </div>

          {/* Education */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <div className="text-4xl mb-3">🏫</div>
            <h3 className="text-xl font-semibold mb-1">Schools & Colleges</h3>
            <p className="text-gray-600">Share exam dates, fee alerts & announcements.</p>
          </div>

          {/* Finance */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <div className="text-4xl mb-3">🏦</div>
            <h3 className="text-xl font-semibold mb-1">Banks & Financial Institutions</h3>
            <p className="text-gray-600">Securely deliver OTPs, alerts & reminders.</p>
          </div>

          {/* Hospitality */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <div className="text-4xl mb-3">🍴</div>
            <h3 className="text-xl font-semibold mb-1">Restaurants & Hotels</h3>
            <p className="text-gray-600">Send offers, bookings & customer loyalty updates.</p>
          </div>

          {/* Startups */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <div className="text-4xl mb-3">📈</div>
            <h3 className="text-xl font-semibold mb-1">Startups & Enterprises</h3>
            <p className="text-gray-600">Scale faster with reliable customer communication.</p>
          </div>
        </div>

        {/* Closing Note */}
        <div className="mt-16 bg-gradient-to-r from-[#fca311] to-[#ffb703] p-8 rounded-2xl shadow-lg">
          <p className="text-xl font-semibold text-[#14213d] leading-relaxed">
            With DIGINTRA, you get the most reliable and scalable{" "}
            <Link 
              href="/bulk-sms-services-noida" 
              className="text-white underline hover:text-gray-200"
            >
              bulk SMS service in Noida
            </Link>{" "}
            for your industry.
          </p>
        </div>

      </div>
    </section>
 
    


 <section className="bg-gradient-to-br from-[#f8fafc] via-[#ffffff] to-[#f1f5f9] py-20">
      <div className="w-[320px] lg:w-[1140px] mx-auto px-4 lg:px-0 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <h2 
            className="text-3xl lg:text-4xl font-bold text-[#14213d] mb-6"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Why <span className="text-[#fca311]">DIGINTRA</span> is the Best Bulk SMS Service Provider in Noida
          </h2>

          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Choosing DIGINTRA means choosing a growth partner dedicated to your success. 
            We provide unmatched messaging infrastructure and customer support:
          </p>

          <ul className="space-y-3 text-gray-700 text-lg">
            <li>✅ Industry-leading delivery infrastructure</li>
            <li>✅ Transparent pricing with no hidden costs</li>
            <li>✅ Trusted by top brands & growing businesses</li>
            <li>✅ Local presence in Noida for personalized support</li>
          </ul>

          <p className="mt-6 text-gray-600 leading-relaxed">
            We are not simply another{" "}
            <a href="/bulk-sms-services-noida" className="text-[#fca311] font-semibold hover:underline">
              bulk SMS company in Noida
            </a>.  
            We are your <strong>growth partner</strong>, committed to helping you achieve your marketing goals faster.
          </p>
        </div>

        {/* Right CTA Box */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <h3 className="text-2xl font-semibold text-[#14213d] mb-3">
            Start Your Bulk SMS Campaign Today!
          </h3>
          <p className="text-gray-600 mb-6">
            Supercharge your communication & customer engagement with DIGINTRA – 
            the <span className="font-semibold text-[#fca311]">best bulk SMS service provider in Noida</span>. 
            Our feature-rich and user-friendly SMS platform ensures instant delivery, 
            cost savings, and higher conversion rates.
          </p>

          {/* Contact Info */}
          <div className="space-y-4 text-lg">
            <p>📞 <span className="font-semibold">Call Us:</span> <a href="tel:09097909079" className="text-[#fca311] hover:underline">09097909079</a></p>
            <p>📧 <span className="font-semibold">Email:</span> <a href="mailto:support@digintra.com" className="text-[#fca311] hover:underline">support@digintra.com</a></p>
            <p>🌐 <span className="font-semibold">Visit:</span> <a href="https://digintra.com" target="_blank" rel="noopener noreferrer" className="text-[#fca311] hover:underline">www.digintra.com</a></p>
          </div>

          {/* Button */}
          <div className="mt-8">
            <a href="/contact">
              <button className="bg-[#fca311] hover:bg-[#ff9800] text-white text-lg font-semibold px-8 py-4 rounded-xl shadow-md transition">
                🚀 Get Free Demo & Packages
              </button>
            </a>
          </div>
        </div>

      </div>
    </section>
  


  





















   







    {/* fifth content */}

    <Client/>

{/* sixth content */}

<Getstarted/>

   </div>
   <Footer/>
   </>
  )
}
