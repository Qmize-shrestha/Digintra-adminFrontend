import React from 'react'
import "./privacy.css"
import { useEffect } from 'react'

import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
export default function Privacypolicyapp() {
	useEffect(()=>{
		window.scrollTo(0,0);
},[])
  return (
    <>
	<Helmet>
		<title>Privacy Policy</title>
		<link rel="canonical" href="https://digintra.com/privacy-policy" />
	</Helmet>
              
              <div className='w-auto privacy pt-[270px] h-auto patterncon relative'>
			  <div className='absolute inset-0 backdrop-blur-md w-full h-full'></div>

                    <div className='w-auto h-auto relative z-10'>
                        <div className='w-[310px] lg:w-[1140px] pb-5 h-auto mx-auto'>
        
                        
                    <h1 className="text-center text-[30px] font-semibold " style={{fontFamily:"'Montserrat',sans-serif"}}>Privacy Policy, At DIGINTRA®</h1>
                 
                         </div>
                    </div>
                    </div>
                <div className='w-auto h-auto bg-white pt-[90px] '>
                    <div className='w-[310px] lg:w-[1140px] h-auto mx-auto'>
                    <p><span className="bold-p font-semibold mt-3" style={{fontFamily:"'Montserrat',sans-serif"}}>DIGINTRA®</span> {<br/>} <span className='font-semibold'>support@digintra.com</span>{<br/>}
							This policy applies to use of the Website and how DIGINTRA® may access and process personal data shared with DIGINTRA® – either by you, the customer, or your end-users.{<br/>}We advise you to read this Privacy Policy (“Notice”), so that you are aware of how, where and why we are using your personal data.{<br/>}We are always ready to address your questions and concerns regarding this policy and our privacy practices. If you would like to contact DIGINTRA for more information about this policy, or our practices in general, please email us at <span class="bold-p">support@digintra.com.</span></p>
					<h3 className="sub-heading-con font-semibold mt-3" style={{fontFamily:"'Montserrat',sans-serif"}}>How We Use Your Information</h3>
					<p style={{fontFamily:"'Poppins',sans-serif"}}>We do not sell your personal data – such as your name, email address and contact information – to third parties to use for their own marketing purposes. DIGINTRA® uses the information we collect for the following purposes:{<br/>}
					<span className="bold-p font-semibold">Provide our Services</span>{<br/>}To provide you the services we offer on the DIGINTRA® website, communicate with you in case of sending newsletters, updates, and promotional materials, for seeking your opinion, and feedback and respond to your inquiries, provide troubleshooting, and for other customer service purposes.{<br/>}
					<span className="bold-p font-semibold">Analytics</span>{<br/>}To gather metrics to better understand how users access and use the digital Platform of DIGINTRA® ; to evaluate and improve the DIGINTRA® Platform, including the Ad Services and personalization, and to develop new products and services. {<br/>}
					<span className="bold-p font-semibold">Marketing and Promotions</span>{<br/>}For marketing and promotional purposes, such as to send you news and newsletters, special offers, and promotions, or to otherwise contact you about products or information we think may interest you. If you do not want to receive promotional emails from us, you may elect to opt-out of receiving promotional emails at any time after registering by hitting the “unsubscribe” button at the bottom of any of our emails.{<br/>}
					<span className="bold-p font-semibold">Prevent Misuse</span>{<br/>}Where we believe necessary to investigate, prevent or take action regarding illegal activities, suspected fraud, situations involving potential threats or violations of our Terms.{<br/>}
					    
					    <span className="bold-p font-semibold mt-3" style={{fontFamily:"'Poppins',sans-serif"}}>Cookies</span>{<br/>}Cookies (also referred to as HTTP cookies or browser cookies) are small text files stored in a web user’s browser directory or data folder. This means that cookies can store nothing expect text and that they are constrained to a browser. {<br/>}
					    If you do not want to receive cookies, most web browsers allow some control of most cookies through the browser settings. The browser settings for changing your cookies settings are usually found in the ‘options’ or ‘preferences’ menu of your internet browser. {<br/>}
    						    <a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences">Cookie settings in Firefox</a>{<br/>}
				     <a href="https://support.google.com/chrome/answer/95647">Cookie settings in Chrome</a>{<br/>}
				     <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471">Cookie settings in Safari</a>{<br/>}
    						     For general information about targeting cookies and how to disable them, visit www.allaboutcookies.org.
                           </p>
                           	<h3 className="sub-heading-con font-semibold mt-3" style={{font:"'Montserrat',sans-serif"}}>Security of Information</h3>
    						<p style={{fontFamily:"'Poppins',sans-serif"}}>The security of your information is important to us. You can access your personal data on our Website with your username and password. DIGINTRA® has implemented safeguards using Secure Socket Layer (SSL) technology to protect the information we collect. However, no website or Internet transmission is completely 100% secure.{<br/>}
    						If you have any questions about our use of cookies, please email us at <span class="bold-p">support@digintra.com</span>
    						{<br/>}As a result, We urge you to take steps to keep your personal information safe, such as choosing a strong password and keeping it private, as well as logging out of your user account, and closing your web browser when finished using the DIGINTRA® Portal on a shared or unsecured device</p>
                           
                           	<h3 className="sub-heading-con font-semibold mt-3" style={{fontFamily:"'Montserrat',sans-serif"}}>Changes to this Privacy Policy</h3>
    						<p style={{fontFamily:"'Poppins',sans-serif"}}>DIGINTRA® reserves the right to make any changes to this Privacy Policy at any time by giving notice to its customers on this page, and by ensuring the protection of the Personal Information in all cases. It is strongly recommended to check this page often, referring to the date of the last modification listed at the bottom. </p>
    						 	<h3 className="sub-heading-con font-semibold mt-3" style={{fontFamily:"'Poppins',sans-serif"}}>Questions and Assistance</h3>
    						<p style={{fontFamily:"'Poppins',sans-serif"}}>If we change our privacy policies and procedures, we will post those changes on this page. In case you have any questions, comments or concerns about this Privacy Policy or use of data in connection with the DIGINTRA®,
you may email us at any time at <span className="bold-p">support@digintra.com</span></p>
                    </div>
        
                </div>
                
                    <Footer/>
              </>
  )
}
