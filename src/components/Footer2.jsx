import React from 'react';
import './Footer2.css'
import footermap from "../assets/footermap.svg";
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaSkype } from 'react-icons/fa';


const Footer2 = () => {
  return (
  <footer className="relative w-full text-white pt-[200px] md:pt-[140px] bg-[#fff] rounded-sm" >
      <div className="relative w-full ">
        {/* Overlay Box */}
        <div className="py-12 px-2 md:px-8 absolute top-[-160px] md:top-[-120px] left-1/2 transform -translate-x-1/2 p-4 rounded-lg w-4/5 md:w-3/5 z-20 shadow-lg flex flex-col md:flex-row justify-between" style={{background:'linear-gradient(90deg, rgba(9,3,130,1) 0%, rgba(11,22,225,1) 50%, rgba(9,3,130,1) 100%)'}}>
         <div >
            <h3 className='text-lg md:text-[42px] text-center md:text-left' style={{fontFamily:"'poppins','Sans-Serif'"}}>Try <span className='font-bold text-yellow-400 text-2xl md:text-[46px]' style={{fontFamily:"'Montserrat','Sans-Serif'"}}>DIGINTRA</span> Today</h3>
            <div className='flex gap-2 justify-center md:gap-6 mt-4'>
                <p className='text-xs md:text-xl' style={{fontFamily:"'poppins','Sans-Serif'"}}>✓ Instant</p>
                <p className='text-xs md:text-xl' style={{fontFamily:"'poppins','Sans-Serif'"}}>💬 Messaging</p>
                <p className='text-xs md:text-xl' style={{fontFamily:"'poppins','Sans-Serif'"}}>🚀 Solutions</p>
            </div>
         </div>
         <ul className="example-2 flex flex-row mt-6 md:mt-0">
      <li className="icon-content">
        <a
          data-social="linkedin"
          aria-label="LinkedIn"
          href="https://linkedin.com/"
        >
          <div className="filled"></div>
          <svg
            xmlSpace="preserve"
            viewBox="0 0 16 16"
            className="bi bi-linkedin"
            fill="currentColor"
            height="16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
            ></path>
          </svg>
        </a>
        <div className="tooltip">LinkedIn</div>
      </li>
      <li className="icon-content">
        <a
          data-social="github"
          aria-label="GitHub"
          href="https://www.github.com/"
        >
          <div className="filled"></div>
          <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    height="16"
    width="16"
>
    <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.35C0 23.403.597 24 1.325 24h21.35C23.403 24 24 23.403 24 22.675V1.325C24 .597 23.403 0 22.675 0zM12 24V12H9v-3h3V6c0-2.76 1.343-4 4.052-4C19.226 2 20 2 20 2v3h-2c-1.085 0-1.5.63-1.5 1.5V9h3l-.5 3h-2.5V24h-3z"/>
</svg>


        </a>
        <div className="tooltip">Facebook</div>
      </li>
      <li className="icon-content">
        <a
          data-social="instagram"
          aria-label="Instagram"
          href="https://www.instagram.com/"
        >
          <div className="filled"></div>
          <svg
            xmlSpace="preserve"
            viewBox="0 0 16 16"
            className="bi bi-instagram"
            fill="currentColor"
            height="16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
            ></path>
          </svg>
        </a>
        <div className="tooltip">Instagram</div>
      </li>
      <li className="icon-content">
        <a
          data-social="youtube"
          aria-label="YouTube"
          href="https://youtube.com/"
        >
          <div className="filled"></div>
          <svg
            xmlSpace="preserve"
            viewBox="0 0 16 16"
            className="bi bi-youtube"
            fill="currentColor"
            height="16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"
            ></path>
          </svg>
        </a>
        <div className="tooltip">YouTube</div>
      </li>
    </ul>
        </div>

        {/* Main Footer Content */}


        <div className=" md:px-20 px-4 pt-20 rounded-lg relative z-10 border-double border-8 border-white" style={{background: 'linear-gradient(90deg, rgba(29,76,212,1) 0%, rgba(207,142,34,1) 31%, rgba(108,148,79,1) 68%, rgba(23,37,84,1) 100%)'}}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-[100%] place-content-center">
          
          {/* Card 1 */}
          <div className="bg-gray-800 w-full p-6 rounded-lg border-dotted border-2 border-white shadow-2xl hover:bg-gray-700 transition duration-300">
            <ul className="space-y-2  ">
              <li><Link  to="/whatsapp-api-provider-bangalore"  className="hover:text-gray-400 transition duration-300">WhatsApp Business Api Provider Bangalore</Link></li>
              <li><Link to="/whatsapp-api-provider-chennai" className="hover:text-gray-400 transition duration-300">WhatsApp Business Api Provider Chennai</Link></li>
              <li><Link to="/whatsapp-api-provider-delhi" className="hover:text-gray-400 transition duration-300">WhatsApp Business Api Provider Delhi</Link></li>
              
            </ul>
          </div>
          
          



          {/* Card 2 */}
          <div className="bg-gray-800 w-full p-6 rounded-lg shadow-2xl border-dotted border-2 border-white hover:bg-gray-700 transition duration-300">
            <ul className="space-y-2 ">
              <li><a href="#" className="hover:text-gray-400 transition duration-300">Bulk SMS Provider in Kanpur</a></li>
              <li><Link to="/whatsapp-api-provider-kolkata" className="hover:text-gray-400 transition duration-300">WhatsApp Business Api Provider Kolkata</Link></li>
              <li><Link to="/whatsapp-api-provider-hyderabad" className="hover:text-gray-400 transition duration-300">WhatsApp Business Api Provider Hyderabad</Link></li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-800 w-full p-6 rounded-lg shadow-2xl  border-dotted border-2 border-white hover:bg-gray-700 transition duration-300">
            <ul className="space-y-2 ">
              <li><Link to="/seo" className="hover:text-gray-400 transition duration-300">SEO</Link></li>
              <li><Link to="/smo" className="hover:text-gray-400 transition duration-300">SMO</Link></li>
              <li><Link to="/logo-designing" className="hover:text-gray-400 transition duration-300">Logo Designing</Link></li>
              <li><Link to="/social-page-promotional" className="hover:text-gray-400 transition duration-300">Social Page Promotional</Link></li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className="bg-gray-800 w-full p-6 rounded-lg shadow-2xl border-dotted border-2 border-white hover:bg-gray-700 transition duration-300">
            <ul className="space-y-2 ">
              <li><Link to="/social-media-profiling" className="hover:text-gray-400 transition duration-300">Social Media Profiling</Link></li>
              <li><Link to="/bulk-sms-provider-in-delhi" className="hover:text-gray-400 transition duration-300">Bulk SMS Provider in Delhi</Link></li>
              <li><Link to="/bulk-sms-provider-in-kolkata" className="hover:text-gray-400 transition duration-300">Bulk SMS Provider in Kolkata</Link></li>
              <li><Link to="/bulk-sms-provider-in-chennai" className="hover:text-gray-400 transition duration-300">Bulk SMS Provider in Chennai</Link></li>
            </ul>
          </div>

        </div>
          <div className="container mx-auto px-4 md:px-14 py-8">
  <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
    {/* Section 1 */}
    <div>
      <h3 className="text-sm sm:text-[16px] font-bold mb-4">Messaging Services</h3>
      <ul className="space-y-2">
        <li><Link to="/enterprise-messaging" className="hover:underline text-[14px]">Enterprise Messaging</Link></li>
        <li><Link to="/transactional-sms" className="hover:underline text-[14px]">Transactional SMS</Link></li>
        <li><Link to="/business-sms" className="hover:underline text-[14px]">Business SMS</Link></li>
        <li><Link to="/wholesale-messaging" className="hover:underline text-[14px]">Wholesale Messaging</Link></li>
      </ul>
    </div>

    {/* Section 2 */}
    <div>
      <h3 className="text-sm sm:text-[16px] font-bold mb-4">Promotion Channel</h3>
      <ul className="space-y-2">
        <li><Link to="/promotional-email" className="hover:underline text-[14px]">Email Campaign</Link></li>
        <li><Link to="/smtp-server" className="hover:underline text-[14px]">SMTP Server</Link></li>
        <li><Link to="/voice-broadcast" className="hover:underline text-[14px]">Voice Broadcast</Link></li>
      </ul>
    </div>

    {/* Section 3 */}
    <div>
      <h3 className="text-sm sm:text-[16px] font-bold mb-4">SMS Gateway Software</h3>
      <ul className="space-y-2">
        <li><Link to="#" className="hover:underline text-[14px]">A2P SMS hubbing platform</Link></li>
        <li><Link to="#" className="hover:underline text-[14px]">SMPP Load Balancer</Link></li>
        <li><Link to="#" className="hover:underline text-[14px]">SMPP Gateway</Link></li>
      </ul>
    </div>

    {/* Section 4 */}
    <div>
      <h3 className="text-sm sm:text-[16px] font-bold mb-4">Trending Channel</h3>
      <ul className="space-y-2">
        <li><Link to="/whatsapp-business-api" className="hover:underline text-[14px]">WhatsApp Business API</Link></li>
        <li><Link to="/whatsapp-api-pricing" className="hover:underline text-[14px]">WhatsApp API Pricing</Link></li>
      </ul>
    </div>

    {/* Section 5 */}
    <div>
      <h3 className="text-sm sm:text-[16px] font-bold mb-4">Company</h3>
      <ul className="space-y-2">
        <li><Link to="/about" className="hover:underline text-[14px]">About Us</Link></li>
        <li><Link to="/pricing" className="hover:underline text-[14px]">Pricing</Link></li>
        <li><Link to="/contact-us" className="hover:underline text-[14px]">Contact Us</Link></li>
        <li><Link to="/partner" className="hover:underline text-[14px]">Partner</Link></li>
      </ul>
    </div>

    {/* Section 6 */}
    <div>
      <h3 className="text-sm sm:text-[16px] font-bold mb-4">Get To Know Us</h3>
      <ul className="space-y-2">
        <li><Link to="/about" className="hover:underline text-[14px]">About DIGINTRA</Link></li>
        <li><Link to="/contact-us" className="hover:underline text-[14px]">Contact Sales</Link></li>
        <li><Link to="/refund-policy" className="hover:underline text-[14px]">Refund Policy</Link></li>
      </ul>
    </div>

    {/* Section 7 */}
    <div>
      <h3 className="text-sm sm:text-[16px] font-bold mb-4">Resources</h3>
      <ul className="space-y-2">
        <li><Link to="blog" className="hover:underline text-[14px]">Blog</Link></li>
        <li><Link to="#" className="hover:underline text-[14px]">Use-Cases</Link></li>
      </ul>
    </div>
  </div>
</div>


      <div className="bg-gray-700  rounded-lg shadow-lg flex flex-col md:flex-row justify-center p-6 items-center space-x-0 md:space-x-8">
      <div className="flex-shrink-0 w-full md:w-1/3">
        <img 
          src={footermap}
          alt="Company Logo" 
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
      <div className="">
        <h2 className="text-2xl font-bold text-white mb-4">About Our Company</h2>
        <p className="text-white mb-6">
        DIGINTRA Teleservices - FZCO (referred as "DIGINTRA") , founded in 2015 with the ultimate goal to provide International SMS termination and other marketing related services worldwide.
        </p>
        <div className="text-white">
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <p className="flex items-center space-x-2 mb-1">
        <FaMapMarkerAlt className="text-white" />
        <span>43, 7th B Cross Rd, KHB Block Koramangala, Bengaluru 560034</span>
      </p>
      <p className="flex items-center space-x-2 mb-1">
        <FaPhone className="text-white" />
        <span>+91-90979 09079</span>
      </p>
      <p className="flex items-center space-x-2 mb-1">
        <FaEnvelope className="text-white" />
        <span>support@digintra.com</span>
      </p>
      <p className="flex items-center space-x-2 mb-1">
        <FaSkype className="text-white" />
        <span>digintra.tm</span>
      </p>
        </div>
      </div>
    </div>

    {/* last section */}
    <div className="container mx-auto px-4 mt-14">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <p className="text-lg font-bold">World Connected - Start Quickly, Scale Globally</p>
          </div>
          <div className="w-full md:w-2/3 flex flex-wrap gap-4 md:gap-8 justify-center md:justify-end">
            <Link to="/terms&conditions" className="hover:underline">Terms of Service</Link>
            <Link Link to="/privacy-policy"  className="hover:underline">Privacy Policy</Link>
            <Link Link to="/cookie"  className="hover:underline">Cookie Policy</Link>
            <Link Link to="/refund-policy" className="hover:underline">Refund Policy</Link>
          </div>
        </div>
        <div className="mt-3 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">
            Copyright © {new Date().getFullYear()} DIGINTRA Teleservices - FZCO. All Rights Reserved
          </p>
        </div>
      </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer2;
