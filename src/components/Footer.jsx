import React from 'react';
import './Footer.css'
import footermap from "../assets/footermap.svg";
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaSkype } from 'react-icons/fa';
import dubiicons from "../assets/dubaicons .png";
import gayabiharicons from "../assets/gayabihar.png";
import bangloreicons from "../assets/bangloreindia.png";
import badge1 from '../assets/badge1.png'
import badge2 from '../assets/badge2.png'
import badge3 from '../assets/badge3.png'
import badge4 from '../assets/badge4.png'
import badge5 from '../assets/badge5.png'
import ContactForm from './ContactForm';
import { useState } from 'react';
import { Dialog } from "@headlessui/react";
import { motion } from 'framer-motion';

const Footer = () => {

 let badges = [badge4, badge2, badge3, badge1, badge5];
 let mapImg = footermap;
//  let logos = [c1, c2, c3, c4, c5, c6, c7]; // carousel logos if needed
  // let icons = { icons1, icons2, icons3, icons4 };
  let officeImgs = { bangloreicons, dubiicons };
    const [isOpen, setIsOpen] = useState(false);
     const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const openModal = (item) => {
    setSelectedItem(item);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedItem("");
  };
  return (
  <footer className="relative w-full bg-[#0b1220] text-white">
      {/* Top CTA card */}
      <div className="max-w-[80%] mx-auto px-4">
        <div
          className="transform -translate-y-24 bg-gradient-to-r from-[#0f1724] to-[#0b1220] border border-white/6 rounded-2xl shadow-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
          aria-hidden={false}
        >
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">
              Try <span className="text-white font-extrabold">DIGINTRA</span> Today
            </h2>
            <p className="text-sm text-white/80 mt-2 max-w-xl">
              ✓ Instant &nbsp; • &nbsp; 💬 Messaging &nbsp; • &nbsp; 🚀 Solutions -
              Start a free trial or talk to sales.
            </p>
          </div>

          <div className="flex gap-3 items-center">
            <a
              href="https://sms-login.digintra.com/User/SignUp"
              className="inline-block"
            >
              <button
                className="bg-white text-[#071233] font-semibold px-5 py-3 rounded-lg shadow hover:translate-y-[-2px] transition transform"
                aria-label="Register"
              >
                Register Now
              </button>
            </a>

            <button
              onClick={() => openModal("Contact Sales")}
              className="bg-transparent border border-white/10 px-4 py-3 rounded-lg hover:bg-white/5 transition"
              aria-label="Contact Sales"
            >
              Contact Sales
            </button>

            <div className="flex items-center gap-3 ml-4">
              {/* Inline social icons */}
              <a
                href="https://linkedin.com/"
                className="p-2 rounded-md bg-white/5 hover:bg-white/10 transition"
                aria-label="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5C4.98 4.6 4.06 5.5 2.95 5.5 1.85 5.5 0.93 4.6 0.93 3.5 0.93 2.4 1.85 1.5 2.95 1.5c1.11 0 2.03.9 2.03 2zM0 24V6.5h5.9V24H0zM8.2 24V6.5h5.66v2.23h.08c.79-1.5 2.72-2.23 4.45-2.23 4.75 0 5.63 3.13 5.63 7.2V24h-5.9v-6.24c0-1.49-.03-3.41-2.08-3.41-2.08 0-2.4 1.63-2.4 3.31V24H8.2z" />
                </svg>
              </a>
              <a
                href="https://www.github.com/"
                className="p-2 rounded-md bg-white/5 hover:bg-white/10 transition"
                aria-label="GitHub"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .5C5.73.5.6 5.63.6 11.9c0 5.07 3.29 9.36 7.86 10.86.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.54-3.88-1.54-.53-1.36-1.3-1.72-1.3-1.72-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.77 2.73 1.26 3.4.97.11-.76.4-1.26.73-1.55-2.56-.29-5.26-1.28-5.26-5.72 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.48.11-3.08 0 0 .96-.31 3.14 1.18a10.9 10.9 0 0 1 2.86-.38c.97.01 1.94.13 2.86.38 2.18-1.49 3.14-1.18 3.14-1.18.62 1.6.24 2.79.12 3.08.73.8 1.18 1.83 1.18 3.09 0 4.45-2.71 5.42-5.29 5.7.41.36.77 1.08.77 2.18 0 1.58-.015 2.85-.015 3.24 0 .31.21.67.8.55 4.56-1.5 7.85-5.79 7.85-10.86C23.4 5.63 18.27.5 12 .5z" />
                </svg>
              </a>
              <a
                href="https://youtube.com/"
                className="p-2 rounded-md bg-white/5 hover:bg-white/10 transition"
                aria-label="YouTube"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10 15l5.2-3L10 9v6zm12-3c0-1.1-.9-2-2-2h-1V8a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v2H6c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h1v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2h1c1.1 0 2-.9 2-2v-3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Countries Section — Below Try DIGINTRA */}
<div className="max-w-[80%] mx-auto px-4 mt-[-60px]">
  <h2 className="text-xl md:text-2xl font-semibold text-white mb-6">
    We Are Everywhere...
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-white/80 text-sm">

    {/* Column 1 */}
    <ul className="space-y-2">
     {/* <li><Link to="/bulk-sms-usa">Bulk SMS USA</Link></li> */}
<li><Link to="/bulk-sms-uk">Bulk SMS UK</Link></li>
<li><Link to="/bulk-sms-canada">Bulk SMS Canada</Link></li>
<li><Link to="/bulk-sms-india">Bulk SMS India</Link></li>
<li><Link to="/sms-broadcast-australia">Bulk SMS Australia</Link></li>
<li><Link to="/bulk-sms-malaysia">Bulk SMS Malaysia</Link></li>
<li><Link to="/bulk-sms-singapore">Bulk SMS Singapore</Link></li>
<li><Link to="/bulk-sms-brazil">Bulk SMS Brazil</Link></li>
<li><Link to="/bulk-sms-nigeria">Bulk SMS Nigeria</Link></li>
<li><Link to="/bulk-sms-vietnam">Bulk SMS Vietnam</Link></li>
<li><Link to="/bulk-sms-belgium">Bulk SMS Belgium</Link></li>
{/* <li><Link to="/bulk-sms-south-korea">Bulk SMS South Korea</Link></li> */}
<li><Link to="/bulk-sms-mexico">Bulk SMS Mexico</Link></li>
<li><Link to="/bulk-sms-germany">Bulk SMS Germany</Link></li>

    </ul>

    {/* Column 2 */}
    <ul className="space-y-2">
     <li><Link to="/bulk-sms-uae">Bulk SMS UAE</Link></li>
<li><Link to="/bulk-sms-saudi-arabia">Bulk SMS Saudi Arabia</Link></li>
<li><Link to="/bulk-sms-qatar">Bulk SMS Qatar</Link></li>
<li><Link to="/bulk-sms-kuwait">Bulk SMS Kuwait</Link></li>
<li><Link to="/bulk-sms-bahrain">Bulk SMS Bahrain</Link></li>
<li><Link to="/bulk-sms-oman">Bulk SMS Oman</Link></li>
{/* <li><Link to="/bulk-sms-indonesia">Bulk SMS Indonesia</Link></li> */}
<li><Link to="/bulk-sms-turkey">Bulk SMS Turkey</Link></li>
<li><Link to="/bulk-sms-egypt">Bulk SMS Egypt</Link></li>
<li><Link to="/bulk-sms-phillipines">Bulk SMS Philippines</Link></li>
<li><Link to="/bulk-sms-zambia">Bulk SMS Zambia</Link></li>
<li><Link to="/bulk-sms-france">Bulk SMS France</Link></li>

    </ul>

    {/* Column 3 */}
    <ul className="space-y-2">
    <li><Link to="/two-way-sms">2-Way SMS</Link></li>
<li><Link to="/bulk-sms">Bulk SMS</Link></li>
<li><Link to="/whatsapp-business-api">WhatsApp Business API</Link></li>
<li><Link to="/dlt-registration-india">DLT Registration (India)</Link></li>
<li><Link to="/sms-marketing">SMS Marketing</Link></li>
<li><Link to="/sms-gateway">SMS Gateway</Link></li>

    </ul>

    {/* Column 4 — Company Address style (optional) */}
    <ul className="space-y-2 text-white/70 text-sm">
     <h4 className="text-sm text-white/90 font-semibold mb-3">Resources</h4>
              <li><Link to="/blogs" className="hover:text-white">Blog</Link></li>
              <li><Link to="/use-cases" className="hover:text-white">Use Cases</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms&conditions" className="hover:text-white">Terms</Link></li>
            </ul>
  </div>
</div>



      {/* Main footer columns */}
      <div className="max-w-[80%] mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Badges / Trust */}
        <div className="col-span-1">
          <div className="bg-white/6  rounded-xl flex gap-3 items-center justify-start">
            {badges.map((b, i) => (
              <div key={i} className="w-32 h-12 bg-white/6 rounded-md  flex items-center justify-center">
                <img src={b} alt={`badge-${i}`} className="w-full h-full object-contain" />
              </div>
            ))}
          </div>

          <p className="text-sm text-white/70 mt-4 max-w-xs">
            DIGINTRA Teleservices - FZCO. Global messaging & marketing built for scale.
          </p>
        </div>

        {/* Links columns */}
        <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Column 1 */}
          <div>
            <h4 className="text-sm text-white/90 font-semibold mb-3">Products</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><Link to="/enterprise-messaging" className="hover:text-white">Enterprise Messaging</Link></li>
              <li><Link to="/transactional-sms" className="hover:text-white">Transactional SMS</Link></li>
              <li><Link to="/whatsapp-business-api" className="hover:text-white">WhatsApp Business API</Link></li>
              <li><Link to="/promotional-email" className="hover:text-white">Email Campaigns</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-sm text-white/90 font-semibold mb-3">Solutions</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><button onClick={() => openModal("A2p Sms Hubbing Platform")} className="hover:text-white">A2P SMS Hubbing</button></li>
              <li><button onClick={() => openModal("SMPP Load Balancer")} className="hover:text-white">SMPP Load Balancer</button></li>
              <li><Link to="/voice-broadcast" className="hover:text-white">Voice Broadcast</Link></li>
              <li><Link to="/smtp-server" className="hover:text-white">SMTP Server</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-sm text-white/90 font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/pricing" className="hover:text-white">Pricing</Link></li>
              <li><Link to="/contact-us" className="hover:text-white">Contact</Link></li>
              <li><Link to="/partner" className="hover:text-white">Partner</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          {/* <div>
            <h4 className="text-sm text-white/90 font-semibold mb-3">Resources</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><Link to="/blogs" className="hover:text-white">Blog</Link></li>
              <li><Link to="/use-cases" className="hover:text-white">Use Cases</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms&conditions" className="hover:text-white">Terms</Link></li>
            </ul>
          </div> */}
        </div>
      </div>

      {/* Map + Offices block */}
      <div className="max-w-[80%] mx-auto px-4 py-10 border-t border-white/6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center ">
          <div className="lg:col-span-1">
            <img src={mapImg} alt="Offices map" className="rounded-lg shadow-xl" />
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 mt-[-120px] ">
            {/* Office 1 */}
            <div className="bg-white/4 rounded-xl p-4">
              <div className="flex gap-4 items-start">
                <img src={officeImgs.bangloreicons} alt="Bengaluru" className="w-20 h-20 rounded-full object-cover border border-white/10" />
                <div>
                  <h5 className="font-semibold">Bengaluru, INDIA</h5>
                  <p className="text-sm text-white/80">43, 7th B Cross Rd, KHB Block Koramangala, Bengaluru 560034</p>
                </div>
              </div>
            </div>

            {/* Office 2 */}
            <div className="bg-white/4 rounded-xl p-4">
              <div className="flex gap-4 items-start">
                <img src={officeImgs.dubiicons} alt="Dubai" className="w-20 h-20 rounded-full object-cover border border-white/10" />
                <div>
                  <h5 className="font-semibold">DIGINTRA Teleservices - FZCO</h5>
                  <p className="text-sm text-white/80">Office No. 55064-001, IFZA Business Park DDP, Building A1, Dubai Silicon Oasis</p>
                </div>
              </div>
            </div>
</div>
<div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 translate-x-[420px] -mt-[150px]">


                         {/* Contact / CTA */}
            <div className="bg-white/4 rounded-xl p-4 ">
              <h5 className="font-semibold">Get started - scale globally</h5>
              <p className="text-sm text-white/80 mt-2">Start a free trial, request a demo or chat with our team for enterprise onboarding.</p>
              <div className="mt-4 flex gap-3">
                <a href="https://sms-login.digintra.com/User/SignUp" className="inline-block">
                  <button className="bg-white text-[#071233] px-5 py-2 rounded-md font-medium">Register</button>
                </a>
                <a href="https://api-wa.co/nVOl41" className="inline-block">
                  <button className="bg-transparent border border-white/20 px-5 py-2 rounded-md">WhatsApp</button>
                </a>
              </div>
            </div>


{/* Office 3 */}
  <div className="bg-white/4 rounded-xl p-4">
              <div className="flex gap-4 items-start">
                <img src={gayabiharicons} alt="Gayabihar" className="w-20 h-20 rounded-full object-cover border border-white/10" />
                <div>
                  <h5 className="font-semibold">Gaya, Bihar</h5>
                  <p className="text-sm text-white/80">2nd Floor, G.R Tower, opp. Railway Hospital, Gaya, Bihar 823001</p>
                </div>
              </div>
            </div>

            {/* Contact / CTA
            <div className="bg-white/4 rounded-xl p-4 ">
              <h5 className="font-semibold">Get started - scale globally</h5>
              <p className="text-sm text-white/80 mt-2">Start a free trial, request a demo or chat with our team for enterprise onboarding.</p>
              <div className="mt-4 flex gap-3">
                <a href="https://sms-login.digintra.com/User/SignUp" className="inline-block">
                  <button className="bg-white text-[#071233] px-5 py-2 rounded-md font-medium">Register</button>
                </a>
                <a href="https://api-wa.co/nVOl41" className="inline-block">
                  <button className="bg-transparent border border-white/20 px-5 py-2 rounded-md">WhatsApp</button>
                </a>
              </div>
            </div> */}
            </div>
          
        </div>
      </div>

      {/* Legal & Credits */}
      <div className="max-w-[80%] mx-auto px-4 py-6 border-t border-white/6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white/80">World Connected - Start Quickly, Scale Globally</p>
            <p className="text-white/60 text-sm mt-2">© {new Date().getFullYear()} DIGINTRA Teleservices - FZCO. All rights reserved.</p>
          </div>

          <div className="flex gap-4 items-center">
            <Link to="/terms&conditions" className="text-white/70 hover:text-white">Terms</Link>
            <Link to="/privacy-policy" className="text-white/70 hover:text-white">Privacy</Link>
            <Link to="/refund-policy" className="text-white/70 hover:text-white">Refund</Link>
            <Link to="/cookie" className="text-white/70 hover:text-white">Cookie</Link>
          </div>
        </div>
      </div>

      {/* Simple Accessible Modal */}
      {modalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          <div className="fixed inset-0 bg-black/60" onClick={closeModal} />
          <div className="relative bg-white rounded-xl shadow-2xl w-[95%] md:w-3/5 max-w-3xl p-6 z-50">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
              aria-label="Close"
            >
              ✕
            </button>

            <h3 className="text-xl font-semibold mb-3 text-[#071233]">{selectedItem}</h3>
            <p className="text-sm text-gray-700 mb-4">Fill this form and our sales team will contact you.</p>

            {/* Simple contact form (non-functional — replace with your ContactForm component) */}
            <form onSubmit={(e) => { e.preventDefault(); closeModal(); }} className="space-y-3">
              <div>
                <label className="text-sm text-gray-700">Name</label>
                <input className="w-full mt-1 p-2 border rounded-md" required />
              </div>
              <div>
                <label className="text-sm text-gray-700">Email</label>
                <input type="email" className="w-full mt-1 p-2 border rounded-md" required />
              </div>
              <div>
                <label className="text-sm text-gray-700">Message</label>
                <textarea className="w-full mt-1 p-2 border rounded-md" rows="4" required />
              </div>
              <div className="flex justify-end">
                <button type="submit" className="bg-[#071233] text-white px-4 py-2 rounded-md">Send</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
