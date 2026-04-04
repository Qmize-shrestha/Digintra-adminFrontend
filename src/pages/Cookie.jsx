import React  from 'react';
import "./cookie.css";
import { useEffect } from 'react';

import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
export default function Cookie() {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <>
       <Helmet>
        <title>Cookie Policy</title>
        <meta name="description" content=''/>
        <link rel="canonical" href="https://www.digintra.com/cookie" />
       </Helmet>
    <div className='w-auto patterncon relative pt-[270px] h-auto'>
    <div className='absolute inset-0 backdrop-blur-md w-full h-full'></div>

        <div className='w-auto h-auto relative z-10'>
            <div className='w-[310px] lg:w-[1140px] pb-5 h-auto mx-auto'>

            
        <h1 className="text-center text-[30px] font-semibold " style={{fontFamily:"'Montserrat',sans-serif"}}>Cookies Policy at DIGINTRA</h1>
     
             </div>
        </div>
        </div>
        <div className='w-auto h-auto bg-white'>
            <div className='w-[310px] lg:w-[1140px] h-auto mx-auto'>
            <p style={{fontFamily:"'Poppins',sans-serif"}}>This cookies policy describes how DIGINTRA® use cookies both within and without the DIGINTRA® Website. We at DIGINTRA® take the privacy and security of PII seriously. By using our website, you agree on these cookies policy in full; accordingly, if you disagree with these cookies policy or any part of these policies, you must not use our website.</p>
                        <h3 className="sub-heading-con font-semibold pt-4" style={{fontFamily:"'Montserrat',sans-serif"}}>What Is A Cookie?</h3>
                        <p style={{fontFamily:"'Poppins',sans-serif"}}>Cookies (also referred to as HTTP cookies or browser cookies) are small text files stored in a web user’s browser directory or data folder. This means that cookies can store nothing expect text and that they are constrained to a browser. As a result, cookies in IE are unique from cookies in Chrome or Firefox. Also note that cookies are domain-dependent.
                        {<br/>}Cookies allow DIGINTRA® to identify and track users as they navigate different pages on our publicly accessible website (www.digintra.com) and identify users returning to the website. This helps make users navigating and interacting with our website and account portal more easy and efficient.
                        {<br/>}Cookies are a convenient way to carry information from one session on a website to another, or between sessions on related websites, without having to burden a server machine with massive amounts of data storage. </p>
                        
                        <h3 className="sub-heading-con font-semibold pt-4" style={{fontFamily:"'Montserrat',sans-serif"}}>We use majorly session cookies and persistent cookies</h3>
                       <p style={{fontFamily:"'Poppins',sans-serif"}}><span className="bold-p">1. Session Cookies</span>  {<br/>}These are temporary cookies that memorize your online activities. A session cookie only lasts for the duration of users using the website.  {<br/>}
                       These work by tracking your online preferences, these remain in operation, even when you have closed the browser. They remember your login details and password so you don’t have to type them in every time you use the site. 
                       </p>
                       
                       <h3 className="sub-heading-con font-semibold pt-4" style={{fontFamily:"'Montserrat',sans-serif"}}>Disable your cookies at any time</h3>
                       <p style={{fontFamily:"'Poppins',sans-serif"}}>If you do not want to receive cookies, most web browsers allow some control of most cookies through the browser settings. The browser settings for changing your cookies settings are usually found in the ‘options’ or ‘preferences’ menu of your internet browser.  {<br/>}
                        <a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences">Cookie settings in Firefox</a>  {<br/>}
                        <a href="https://support.google.com/chrome/answer/95647">Cookie settings in Chrome</a>  {<br/>}
                        <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471">Cookie settings in Safari</a>  {<br/>}
                        For general information about targeting cookies and how to disable them, visit www.allaboutcookies.org.
                       </p>
                       
                       <h3 className="sub-heading-con font-semibold pt-4" style={{fontFamily:"'Montserrat',sans-serif"}}>Updates & Contact Info</h3>
                       <p style={{fontFamily:"'Poppins',sans-serif"}}>We reserve the right to update or change this notice at any time. If we do, we’ll notify you by posting the policy on our site with a new effective date. You should check the Cookies Policy periodically. 
                       {<br/>}If you have any questions about our use of cookies, please email us at support@digintra.com  {<br/>}
                       This Cookie Policy was last updated on May 1, 2019</p>

            </div>

        </div>
        <Footer/>
        </>
  )
}
