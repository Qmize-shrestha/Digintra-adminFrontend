import React from 'react'
import Bloguser from "../assets/blog_user.png";
import post1 from "../assets/post1.jpg";
import post2 from "../assets/post2.jpg";
import post3 from "../assets/post3.png";
import post4 from "../assets/post4.jpg";
import { Link } from 'react-router-dom'
export default function Blogpart() {
  return (
    <div className="w-full lg:w-[320px] my-5 mb-18 flex-shrink-0">
      
      {/* Sticky Wrapper */}
      <div className="sticky top-0">

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">

          {/* 👤 Author Section */}
          <div className="text-center">
            <img
              src={Bloguser}
              alt="Shilpa Garg"
              className="h-[140px] w-[140px] object-cover rounded-full border-4 border-blue-600 shadow-lg mx-auto"
            />

            <h2 className="mt-6 text-xl font-bold text-blue-900">
              Shilpa Garg
            </h2>

            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              Shilpa Garg joined the DIGINTRA team as B.D Manager for mobile messaging
              and comes with a background focused on productizing APIs.
            </p>
          </div>

          {/* 📂 Categories */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-center text-blue-900 mb-4">
              Categories
            </h3>

            <div className="space-y-3 text-center">
              <a href="/blog" className="block text-gray-700 hover:text-blue-600 transition">
                BULK SMS
              </a>

              <a href="/blog" className="block text-gray-700 hover:text-blue-600 transition">
                BUSINESS MESSAGING
              </a>

              <a href="/blog8" className="block text-gray-700 hover:text-blue-600 transition">
                WEBSITE TRAFFIC
              </a>
            </div>
          </div>

          {/* 📰 Recent Posts */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-center text-blue-900 mb-6 border-b pb-2">
              Recent Posts
            </h3>

            <div className="space-y-5">

              <a href="/Compliance_Guidelines_for_Successful_SMS_Marketing">
                <div className="flex gap-3 items-center hover:bg-gray-50 p-2 rounded-lg transition">
                  <img
                    src={post1}
                    alt=""
                    className="w-[55px] h-[55px] rounded-full object-cover shadow"
                  />
                  <p className="text-sm font-medium text-gray-800 hover:text-blue-600 transition">
                    COMPLIANCE GUIDELINES FOR SMS MARKETING
                  </p>
                </div>
              </a>

              <a href="/the-top-10-advantages-of-sms-marketing-for-business">
                <div className="flex gap-3 items-center hover:bg-gray-50 p-2 rounded-lg transition">
                  <img
                    src={post2}
                    alt=""
                    className="w-[55px] h-[55px] rounded-full object-cover shadow"
                  />
                  <p className="text-sm font-medium text-gray-800 hover:text-blue-600 transition">
                    TOP 10 ADVANTAGES OF SMS MARKETING
                  </p>
                </div>
              </a>

              <a href="/budget-friendly-sms-marketing-tactics-for-effective-campaigns">
                <div className="flex gap-3 items-center hover:bg-gray-50 p-2 rounded-lg transition">
                  <img
                    src={post3}
                    alt=""
                    className="w-[55px] h-[55px] rounded-full object-cover shadow"
                  />
                  <p className="text-sm font-medium text-gray-800 hover:text-blue-600 transition">
                    BUDGET FRIENDLY SMS CAMPAIGNS
                  </p>
                </div>
              </a>

            </div>
          </div>

          {/* 📢 Campaigns */}
          <div className="mt-12">
            <h3 className="text-lg font-semibold text-center text-blue-900 mb-6 border-b pb-2">
              Campaigns
            </h3>

            <a href="/why-are-my-bulk-messages-not-being-delivered">
              <div className="flex gap-3 items-center hover:bg-blue-50 p-2 rounded-lg transition">
                <img
                  src={post4}
                  alt=""
                  className="w-[55px] h-[55px] rounded-full object-cover shadow"
                />
                <p className="text-sm font-medium text-gray-800 hover:text-blue-700 transition">
                  WHY ARE MY BULK MESSAGES NOT DELIVERED?
                </p>
              </div>
            </a>
          </div>

        </div>

      </div>
    </div>
  )
}
