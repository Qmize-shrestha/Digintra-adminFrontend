import React, { useState, useEffect } from "react";
import "./bulk.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import { FaUserPlus, FaWhatsapp } from "react-icons/fa";
import { Helmet } from "react-helmet";

// Assets
import icons3 from "../assets/business.png";
import Footer from "../components/Footer";
import Client from "../components/Client";
import Getstarted from "../components/Getstarted";

export default function Bulk_sms_provider_rajasthan() {
  // Instead of 10 different states, use one
  const [activeQues, setActiveQues] = useState(null);

  const toggleQues = (index) => {
    setActiveQues(activeQues === index ? null : index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <meta name="robots" content="index, follow" />
        <title>
          Bulk SMS Service Provider in Jaipur - Reliable and Cost-effective
        </title>
        <meta
          name="description"
          content="DIGINTRA Teleservices - A reliable, cost-effective bulk SMS service provider in Jaipur. Perfect for businesses seeking efficient communication solutions."
        />
        <meta
          name="keywords"
          content="bulk sms service provider in jaipur, bulk sms service in jaipur, bulk sms provider in jaipur, bulk sms company in jaipur"
        />
        <link
          rel="canonical"
          href="https://digintra.com/bulk-sms-service-provider-in-jaipur"
        />
      </Helmet>

      {/* Hero Section */}
      <div className="patterncon relative w-auto pt-[230px] lg:h-[720px] pb-[50px]">
        <div className="absolute inset-0 backdrop-blur-md w-full h-full"></div>
        <div className="w-auto relative z-10 h-auto">
          <div className="w-[310px] lg:w-[1140px] py-10 h-auto mx-auto">
            <h1
              className="text-center text-[30px] font-semibold"
              style={{ fontFamily: "'Montserrat',sans-serif" }}
            >
              Bulk SMS Provider in Jaipur
            </h1>
            <p
              className="text-center px-4 mt-4"
              style={{ fontFamily: "'Poppins',sans-serif" }}
            >
              Power Your Business with Instant Communication
            </p>
            <p
              className="text-center px-4 mt-4"
              style={{ fontFamily: "'Poppins',sans-serif" }}
            >
              All it takes is <strong>30 seconds.</strong> Simply click the
              sign-up button below and you will receive FREE DEMO Credit to
              test.
            </p>

            {/* CTA Buttons */}
            <div className="h-auto mx-auto px-12 mt-7 flex md:justify-center items-center gap-4 md:gap-8 flex-col md:flex-row">
              <a href="https://sms-login.digintra.com/User/SignUp">
                <button className="border-b-2 border-[#1e3b8d] bg-gradient-to-tr from-[#3e8646] to-[#2fac13] w-[220px] h-16 rounded-lg shadow-xl transition-transform transform hover:scale-110 hover:shadow-2xl text-white font-bold flex items-center justify-center gap-2">
                  <FaUserPlus className="h-6 w-6" />
                  Register Now
                </button>
              </a>
              <a href="https://api-wa.co/nVOl41">
                <button className="border-b-2 border-[#1e3b8d] bg-gradient-to-tr from-[#00b09b] to-[#96c93d] w-[220px] h-16 rounded-lg font-bold text-white shadow-xl transition-transform transform hover:scale-110 hover:shadow-2xl flex items-center justify-center gap-2">
                  <FaWhatsapp className="h-6 w-6" />
                  Chat on WhatsApp
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* About Jaipur Bulk SMS */}
      <div className="w-auto bg-white h-auto">
        <div className="w-[310px] lg:w-[1140px] lg:flex lg:flex-row-reverse h-auto mx-auto">
          <img
            src={icons3}
            alt="Bulk SMS Provider in Rajasthan"
            className="lg:w-[510px]"
          />

          <section className="pt-[50px] space-y-6">
            <h2
              className="text-xl text-center lg:text-left font-bold"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Connecting Jaipur: Why Your Business Needs a Reliable Bulk SMS
              Provider
            </h2>

            <p
              className="text-base leading-relaxed"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Effective communication is key for any business, especially in a
              fast-growing city like Jaipur. From local retailers and coaching
              centers to hospitals and financial services, every industry needs
              a direct channel to reach their target audience. A bulk SMS
              service in Jaipur helps businesses connect quickly, send updates
              in seconds, and keep customers engaged.
            </p>

            <h3
              className="text-xl text-center lg:text-left font-semibold"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Bulk SMS: The Smarter Way to Reach Customers
            </h3>

            <p
              className="text-base leading-relaxed"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Bulk SMS lets you send personalized messages to thousands of
              customers with a single click. It's fast, cost-efficient, and
              delivers far higher response rates compared to emails or other
              marketing channels. For Jaipur-based businesses, choosing a local
              bulk SMS provider means better support, valuable market insights,
              and tailored solutions. That’s why more companies across Jaipur
              are now relying on this powerful communication tool.
            </p>
          </section>
        </div>
      </div>



      {/* Why Choose Bulk SMS Service in Jaipur */}
<div className="w-auto bg-gradient-to-r from-[#f0f9ff] to-[#e0f7fa] py-16 mt-10">
  <div className="w-[310px] lg:w-[1140px] mx-auto px-4 lg:px-0">
    <h2
      className="text-3xl font-bold text-center mb-6 text-[#1e3b8d]"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      Why Choose Bulk SMS Service in Jaipur?
    </h2>
    <p
      className="text-center text-gray-700 max-w-3xl mx-auto leading-relaxed"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      Running a business in Jaipur means dealing with a diverse customer base,
      regional language barriers, and fierce competition. Every minute counts,
      especially when your competitors offer similar deals and services. Using
      a bulk SMS service in Jaipur gives you the edge you need to stay connected
      and top of mind.
    </p>

    {/* Info Cards */}
    <div className="grid md:grid-cols-2 gap-8 mt-12">
      {/* Card 1 */}
      <div className="bg-white shadow-lg rounded-2xl p-6 hover:scale-105 transition-transform">
        <h3 className="text-xl font-semibold text-[#2fac13] mb-3">
          Local Expertise
        </h3>
        <p className="text-gray-600 leading-relaxed">
          A local provider understands Jaipur's culture, speaks your customer's
          language, and responds quickly to your needs. With knowledge of local
          festivals, peak timings, and business cycles, you get more than just
          a tech platform—you get a partner who grows with you.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white shadow-lg rounded-2xl p-6 hover:scale-105 transition-transform">
        <h3 className="text-xl font-semibold text-[#2fac13] mb-3">
          Fast & Direct Marketing
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Imagine sending a flash sale alert 30 minutes before your shop opens,
          or reminding parents about a school event just a day before. Bulk SMS
          makes this possible with instant delivery and maximum reach.
        </p>
      </div>
    </div>

    {/* Use Cases */}
    <div className="mt-12 bg-blue-400 rounded-2xl p-8 text-white shadow-xl">
      <h3
        className="text-2xl font-bold mb-4 text-center"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        Businesses in Jaipur Use Bulk SMS For:
      </h3>
      <ul className="grid md:grid-cols-2 gap-4 text-lg">
        <li className="flex items-center gap-2">
          ✅ Announcing special offers
        </li>
        <li className="flex items-center gap-2">
          ✅ Promoting events and new arrivals
        </li>
        <li className="flex items-center gap-2">
          ✅ Sending instant alerts for emergencies
        </li>
        <li className="flex items-center gap-2">
          ✅ Boosting customer loyalty & attendance
        </li>
      </ul>
    </div>
  </div>
</div>



{/* Cost-Effective Communication Solution */}
<div className="bg-gradient-to-r from-[#fff8f0] to-[#fef6e4] py-16">
  <div className="w-[310px] lg:w-[1140px] mx-auto px-4 lg:px-0">
    <div className="grid lg:grid-cols-2 gap-10 items-center">
      
      {/* Left Side - Text */}
      <div>
        <h2
          className="text-3xl font-bold text-[#e85d04] mb-4"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Cost-Effective Communication Solution
        </h2>
        <p
          className="text-gray-700 leading-relaxed mb-4"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Traditional ads drain your budget quickly. Newspapers, radio, and
          billboards don’t always reach your exact audience. Bulk SMS flips the
          script. You pay only for texts sent, not for uncertain exposure.
        </p>
        <p
          className="text-gray-700 leading-relaxed mb-6"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Plus, messages are short and straight to the point, boosting
          engagement. Bulk SMS in Jaipur helps businesses trim costs without
          cutting corners. With high open rates, you get more responses with
          less investment.
        </p>

        {/* Highlighted Stat Box */}
        <div className="bg-orange-400 text-white rounded-xl p-6 shadow-lg text-center">
          <h3 className="text-2xl font-bold mb-2">💰 90% Cost Savings</h3>
          <p className="text-sm">
            Compared to traditional advertising channels like newspapers,
            billboards, and radio.
          </p>
        </div>
      </div>

      {/* Right Side - Illustration */}
      <div className="flex justify-center">
        <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-sm hover:scale-105 transition-transform">
          <h3 className="text-xl font-semibold text-center mb-4 text-[#e85d04]">
            Why It Works
          </h3>
          <ul className="space-y-3 text-gray-700 text-base">
            <li className="flex items-center gap-2">✅ Pay only for texts sent</li>
            <li className="flex items-center gap-2">✅ Higher engagement vs ads</li>
            <li className="flex items-center gap-2">✅ Instant audience reach</li>
            <li className="flex items-center gap-2">✅ Lower risk, higher ROI</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>



{/* Suitable for Various Industries */}
<div className="bg-[#f8f9fa] py-16">
  <div className="w-[310px] lg:w-[1140px] mx-auto px-4 lg:px-0">
    
    {/* Heading */}
    <h2
      className="text-3xl font-bold text-center text-[#14213d] mb-10"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      Suitable for Various Industries
    </h2>

    {/* Industry Cards Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      {/* Card 1 */}
      <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-transform hover:scale-105">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-[#e85d04] text-2xl">🎓</span>
          <h3 className="font-semibold text-lg text-[#14213d]">Schools</h3>
        </div>
        <p className="text-gray-600 text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>
          Send attendance notices, exam reminders, or urgent alerts instantly.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-transform hover:scale-105">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-[#e85d04] text-2xl">🏥</span>
          <h3 className="font-semibold text-lg text-[#14213d]">Hospitals & Clinics</h3>
        </div>
        <p className="text-gray-600 text-sm">
          Remind patients about appointments or share useful health tips.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-transform hover:scale-105">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-[#e85d04] text-2xl">🛍️</span>
          <h3 className="font-semibold text-lg text-[#14213d]">Retailers</h3>
        </div>
        <p className="text-gray-600 text-sm">
          Launch seasonal sales or announce loyalty rewards effortlessly.
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-transform hover:scale-105">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-[#e85d04] text-2xl">💪</span>
          <h3 className="font-semibold text-lg text-[#14213d]">Fitness Centers</h3>
        </div>
        <p className="text-gray-600 text-sm">
          Notify members about class timings or special workout sessions.
        </p>
      </div>

      {/* Card 5 */}
      <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-transform hover:scale-105">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-[#e85d04] text-2xl">🚀</span>
          <h3 className="font-semibold text-lg text-[#14213d]">Startups & SMEs</h3>
        </div>
        <p className="text-gray-600 text-sm">
          Send order confirmations, payment reminders, and quick updates.
        </p>
      </div>

    </div>

    {/* Bottom Note */}
    <div className="mt-12 text-center">
      <p className="text-gray-700 text-lg font-medium" style={{ fontFamily: "'Poppins', sans-serif" }}>
        No matter your industry, instant messaging <span className="text-[#e85d04] font-bold">fits your communication plan.</span>
      </p>
    </div>
  </div>
</div>



{/* Best Bulk SMS Service Provider in Jaipur */}
<div className="bg-gradient-to-r from-[#fdfbfb] to-[#ebedee] py-16">
  <div className="w-[310px] lg:w-[1140px] mx-auto px-4 lg:px-0">

    {/* Heading */}
    <h2 className="text-3xl font-bold text-center text-[#14213d] mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      Best Bulk SMS Service Provider in Jaipur
    </h2>

    {/* Intro */}
    <p className="text-gray-700 text-lg text-center mb-10 leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
      Every provider claims to be the best, but it pays to look closer. <span className="font-bold text-[#e85d04]">DIGINTRA Teleservices</span> 
      stands out with <span className="font-semibold">reliable service, fast delivery, and 24x7 support.</span>
    </p>

    {/* Key Features Section */}
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
      
      {/* Table Heading */}
      <div className="bg-[#14213d] text-white text-lg font-semibold px-6 py-4">
        Key Features
      </div>

      {/* Table */}
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-[#f4f4f4] text-[#14213d] text-base">
            <th className="px-6 py-3">Feature</th>
            <th className="px-6 py-3">Benefit</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          <tr className="border-b hover:bg-[#fafafa]">
            <td className="px-6 py-3 font-medium">Easy Platform</td>
            <td className="px-6 py-3">Quick setup, friendly dashboard for all users</td>
          </tr>
          <tr className="border-b hover:bg-[#fafafa]">
            <td className="px-6 py-3 font-medium">Scalable Packages</td>
            <td className="px-6 py-3">Plans that grow with your business</td>
          </tr>
          <tr className="border-b hover:bg-[#fafafa]">
            <td className="px-6 py-3 font-medium">API Integration</td>
            <td className="px-6 py-3">Connects with your website or CRM</td>
          </tr>
          <tr className="border-b hover:bg-[#fafafa]">
            <td className="px-6 py-3 font-medium">Delivery Reports</td>
            <td className="px-6 py-3">Track every message, see what works</td>
          </tr>
          <tr className="hover:bg-[#fafafa]">
            <td className="px-6 py-3 font-medium">Template Tools</td>
            <td className="px-6 py-3">Personalize messages, save time</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Closing Note */}
    <p className="text-center mt-10 text-gray-800 text-lg">
      ✅ Choose providers who openly share delivery rates & features.  
      <br />
      The more control and data you have, the better you can plan future campaigns.
    </p>
  </div>
</div>


{/* Regulatory Compliance & Customer Support */}
<div className="bg-gradient-to-r from-[#14213d] to-[#1b263b] text-white py-20">
  <div className="w-[310px] lg:w-[1140px] mx-auto px-4 lg:px-0 grid lg:grid-cols-2 gap-12 items-center">

    {/* Left Side - Compliance & Security */}
    <div>
      <h2 className="text-3xl font-bold mb-6 leading-snug" style={{ fontFamily: "'Montserrat', sans-serif" }}>
        Regulatory Compliance <span className="text-[#fca311]">& Security</span>
      </h2>
      <p className="text-gray-200 mb-5 leading-relaxed text-lg">
        Bulk texting comes with rules. In India, customer messaging is governed by the <span className="font-semibold text-[#fca311]">Telecom Regulatory Authority of India (TRAI)</span>. 
        To ensure your messages never get blocked, choose a Jaipur SMS provider that strictly follows these guidelines.
      </p>
      <p className="text-gray-200 leading-relaxed text-lg">
        <span className="font-semibold">Data privacy</span> is equally important. The right provider will use secure servers, protect your customer data, 
        and never share details with third parties.
      </p>
    </div>

    {/* Right Side - Customer Support */}
    <div className="bg-white text-gray-800 rounded-2xl shadow-2xl p-8">
      <h3 className="text-2xl font-bold text-[#14213d] mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
        Customer Support & Local Expertise
      </h3>
      <ul className="space-y-4 text-lg">
        <li className="flex items-start gap-3">
          <span className="text-[#fca311] text-xl">⚡</span> Quick ticket resolution
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#fca311] text-xl">📞</span> On-call guidance for campaigns
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#fca311] text-xl">👥</span> Local sales reps who understand your audience
        </li>
      </ul>
      <p className="mt-6 text-gray-700 leading-relaxed">
        Working with a <span className="font-semibold">Jaipur-based team</span> means faster responses, local insights, 
        and better results for your campaigns.
      </p>
    </div>
  </div>

  {/* Final CTA */}
  <div className="text-center mt-16">
    <h4 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      Stay Visible. Stay Connected. Grow Faster.
    </h4>
    <p className="text-gray-200 text-lg mb-6">
      Any business can boost sales, expand clientele, and reduce costs with a trusted Bulk SMS Service in Jaipur.  
      Ready to see how easy communication can be?
    </p>
    <a
      href="#contact"
      className="inline-block bg-[#fca311] text-[#14213d] font-semibold text-lg px-8 py-4 rounded-xl shadow-lg hover:bg-[#ffb703] transition duration-300"
    >
      🚀 Contact DIGINTRA Teleservices Today
    </a>
  </div>
</div>




      {/* Clients */}
      <Client />

      {/* Get Started */}
      <Getstarted />

      <Footer />
    </>
  );
}
