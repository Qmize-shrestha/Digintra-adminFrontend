import React from 'react'
import Bloguser from "../assets/blog_user.png";
import post1 from "../assets/post1.jpg";
import post2 from "../assets/post2.jpg";
import post3 from "../assets/post3.png";
import post4 from "../assets/post4.jpg";
import { Link } from 'react-router-dom'
export default function Blogpart() {
  return (
    <div className="w-[310px] h-auto mx-auto">
 <img src={Bloguser} alt="" className="border-2 border-blue-800 rounded-full h-[200px] mx-auto mt-10"  />
        
        <h1 className="text-center mt-10 text-[20px] text-blue-900">Shilpa Garg</h1>
        <p className="mt-5 text-center">Shilpa Garg joined the DIGINTRA team to be the B.D Manager for the mobile messaging and comes with a background focused on productizing APIs.</p>
        
        <h1 className="text-[20px] font-semibold text-center mt-5 ">Categories</h1>
    <Link href="/blog">  <p className="text-center text-[15px] mt-2">BULK SMS</p> </Link>  
    <Link href="/blog">   <p className="text-center text-[15px] mt-2">BUSINESS MESSAGING</p> </Link>  
     <Link href="/blog8">  <p className="text-center text-[15px] mt-2">WEBSITE TRAFFIC</p> </Link> 


        <h1 className="text-[20px] mt-10 font-semibold text-center">Recent Posts</h1>
     <Link href="/Compliance_Guidelines_for_Successful_SMS_Marketing"><div className="flex h-auto mt-5 mx-auto">
            <img src={post1} alt="" className="rounded-full h-[100px]"  />
            <p className="ml-3">COMPLIANCE GUIDELINES FOR SUCCESSFUL SMS MARKETING</p>
        </div>  </Link> 
     <Link href ="/the-top-10-advantages-of-sms-marketing-for-business">   <div className="flex mx-auto mt-5">
            <img src={post2} alt="" className="rounded-full h-[100px]"  />
            <p className="ml-3">THE TOP 10 ADVANTAGES OF SMS MARKETING FOR BUSINESS</p>
        </div></Link>

       <Link  href="/budget-friendly-sms-marketing-tactics-for-effective-campaigns"> <div className="flex mt-5 mx-auto">
            <img src={post3} alt="" className="rounded-full h-[100px]"  />
            <p className="ml-3">BUDGET-FRIENDLY SMS MARKETING TACTICS FOR EFFECTIVE</p>
        </div> </Link>
       <h1 className="text-[20px] font-semibold text-center mt-10">CAMPAIGNS</h1>
      <Link href="/why-are-my-bulk-messages-not-being-delivered"> <div className="flex mx-auto mt-5">
            <img src={post4} alt="" className="rounded-full h-[100px]"  />
            <p className="ml-3">WHY ARE MY BULK MESSAGES NOT BEING DELIVERED?</p>
        </div> </Link>
        </div>
  )
}
