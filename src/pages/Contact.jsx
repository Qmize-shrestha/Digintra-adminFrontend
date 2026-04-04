import React, { useEffect } from 'react';
import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./contact.css"
import { Helmet } from 'react-helmet';
import emailjs from '@emailjs/browser';
import dubiicons from "../assets/dubaicons .png";
import gayabiharicons from "../assets/gayabihar.png";
import bangloreicons from "../assets/bangloreindia.png";
import Footer from '../components/Footer';
import icons1 from "../assets/talk_to_us.webp";
import icons2 from "../assets/call.png";
import icons3 from "../assets/mail.png";
import icons4 from "../assets/loc.png";
import icons5 from "../assets/contact.png";
import icons6 from "../assets/icons8-star-24.png";
import digintraindia from "../assets/digintraindia.png";
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { FaTelegram } from "react-icons/fa6";
import { FaSkype } from "react-icons/fa6";

import { IoLogoWhatsapp } from "react-icons/io";

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      const from_name = form.current['from_name'].value;
      const from_email = form.current['from_email'].value;
    
      const from_number = form.current['from_number'].value;
    
      if((from_name === "" || from_email === ""  || from_number === "" )){
        toast.error("Please fill all the details");
      }
      else{
  
   
      emailjs.sendForm('service_hnkqhhf', 'template_75eku79', form.current, 'ArZgUbVgS13fsbN1S')
        .then((result) => {
            console.log(result.text);
            toast.success("Thanks! for Filling the form.");
        }, (error) => {
            console.log(error.text);
            toast.error("Something error occurred");
        });
        e.target.reset();
    };
  }
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <>
        <div className="patterncon relative w-auto lg:h-[829px] h-[932px] lg:pt-[230px] pt-[200px] md:pt-[280px]">
        <div className='absolute inset-0 backdrop-blur-md w-full h-full'></div>
          <Helmet>
            <meta charSet="utf-8"/>
            <title>Contact Us - SMS Services, Email Services, Branding service</title>
            <meta name="description" content=" Submit the Detail to talk to our sales team. We can craft the perfect plan for your high-volume and enterprise needs. Contact us Today!"/>
            <meta name="keywords" content=""/>
            <link rel="canonical" href="https://www.digintra.com/contact-us" />
          </Helmet>
        <div className="w-[310px]  mx-auto h-auto lg:w-[1140px] grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="lg:pt-[80px] z-10">
            <div className="bg-[#0053b7] w-[300px] mx-auto lg:ml-4 ">
              <h1 data-aos="fade-right" className="text-white text-center tracking-widest " style={{fontFamily:"'Montserrat', sans-serif"}}>
              CONTACT US
              </h1>
            </div>
            <div className="w-[310x] h-auto mx-auto mt-5 space-y-5">
              <h3 data-aos="fade-right" className="text-[21px] font-[700] text-[#0053b7] text-center lg:text-[40px] lg:text-left pl-4 " style={{fontFamily:"'Montserrat', sans-serif"}}>
              Talk to a
Product Specialist
              </h3>
              <p  data-aos="fade-right"  className="text-[13px] font-[400] text-center px-4 lg:text-[16px] lg:text-left" style={{fontFamily:"'Poppins', sans-serif"}}>
              Submit this form to talk to our sales team. We can craft theperfect plan for your high-volume and enterprise needs.
              </p>
            
              <p data-aos="fade-right"  className="text-center text-[13px] font-[700] lg:text-[16px] lg:text-left lg:pl-4" style={{fontFamily:"'Poppins', sans-serif"}}>Get instant attention</p>
              <p  data-aos="fade-right" className="text-center text-[13px] font-[700] lg:text-[16px] lg:text-left lg:pl-4" style={{fontFamily:"'Poppins', sans-serif"}}>Enjoy wider reach</p>
              <p data-aos="fade-right"  className="text-center text-[13px] font-[700] lg:text-[16px] lg:text-left lg:pl-4" style={{fontFamily:"'Poppins', sans-serif"}}>Scale with confidence</p>
            </div>
          </div>
          <div data-aos="zoom-in-up" className="lg:w-[540px] lg:h-[490px] z-10">
            <img src={icons1} alt="Contact Us" />
          </div>
        </div>
        {/* <div class="custom-shape-divider-bottom-1689314618">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div> */}
      </div>
      <div className='w-auto h-auto bg-white py-10'>


      <div className="w-[310px] h-auto mx-auto lg:w-[1140px]">
        <h3 data-aos="fade-right" className="text-[21px] text-[#005bf3] font-[700] text-center lg:text-[40px]" style={{fontFamily:"'Montserrat', sans-serif"}}>Here's what our team can help you with.</h3>
        <div className="w-[200px] h-[4px] bg-blue-600 mx-auto mt-2" ></div>
          <div className='w-full h-auto md:flex space-y-5 md:space-y-0 gap-3 py-[3rem]'>
          <div className=' w-full shadow-lg p-4 space-y-4 rounded-lg'>
           <h4 className='text-center text-3xl font-semibold text-orange-600' style={{fontFamily:"'Montserrat', sans-serif"}}>INDIA - Offices</h4>
           

            <div className='flex gap-3  items-center '>
              <img src={gayabiharicons} alt="" className='w-[10rem] h-[10rem] border-2 rounded-full' />
              <div className='space-y-2'>
              <h4 className='font-semibold' style={{fontFamily:"'Poppins', sans-serif"}}>Gaya</h4> 
              <p style={{fontFamily:"'Poppins', sans-serif"}}>2nd Floor, G.R Tower, opp. Railway Hospital, Gaya, Bihar 823001</p>
              </div>
            </div>
            <div className='flex gap-3 items-center'>
              <img src={bangloreicons} alt="" className='w-[10rem] h-[10rem] border-2 rounded-full' />
              <div className='space-y-2'>
              <h4 className='font-semibold' style={{fontFamily:"'Poppins', sans-serif"}}>Banglore</h4> 
              <p style={{fontFamily:"'Poppins', sans-serif"}}>43, 7th B Cross Rd, KHB Block Koramangala, Bengaluru 560034</p>
              </div>
            </div>
         
          </div>
          <div className='w-full p-4 shadow-lg space-y-4 rounded-lg'>
          <h4 className='text-center text-3xl font-semibold text-orange-600' style={{fontFamily:"'Montserrat', sans-serif"}}>DUBAI, UAE - Office</h4>
          <div className='flex items-center gap-3'>
              <img src={dubiicons} alt="" className='w-[10rem] h-[10rem] border-2 rounded-full' />
              <div className='space-y-2'>
            
              <p style={{fontFamily:"'Poppins', sans-serif"}}><b>DIGINTRA Teleservices - FZCO</b></p>
            
            <p> Office No. 55064-001, IFZA Business Park DDP, Building A1, Dubai Silicon Oasis, Dubai, United Arab Emirates</p> 
            </div>
            </div>
            <div className='flex w-full justify-center items-center gap-3 '>
               <p className='bg-red-500 text-white p-3 rounded-full'><FaEnvelope/></p>
               

              <p className='font-semibold' style={{fontFamily:"'Poppins',sans-serif"}}>support@digintra.com</p>
              </div>

              

          </div>


          </div>


          <div>

          </div>

      </div>


       <div className='w-[310px] h-auto mx-auto font-[700] pt-[50px] lg:w-[1140px]'>
         <h3 data-aos="fade-right" className="text-[#0053b7] text-center text-[28px] lg:text-[40px]" style={{fontFamily:"'Montserrat', sans-serif"}}>24x7 Support</h3>
         <div className="w-[200px] h-[4px] bg-blue-600 mx-auto"></div>

         {/* <div className='w-full h-auto grid grid-cols-1 md:grid-cols-3 py-6 gap-4 '>
          <div className='w-full h-auto flex gap-3 items-start shadow-lg rounded-lg border-2 border-orange-600 p-3'>
             <img src={digintraindia} alt="" className='w-[50px] rounded-full' />
             <div>
              <h3 className='font-semibold text-2xl ' style={{fontFamily:"'Poppins',sans-serif"}}>Tayyab Habib Ullah</h3>
              <div className='flex items-center gap-1'><p><FaTelegram/></p>
               <div>
                <p className='font-normal'  style={{fontFamily:"'Poppins',sans-serif"}}>@digintra_OfficialSupport </p>
               </div>
              </div>
             
              <div className='flex items-center gap-1'><p><FaEnvelope/></p>
               <div>
                <p className='font-normal'  style={{fontFamily:"'Poppins',sans-serif"}}>tayyab.h@digintra.com </p>
               </div>
              </div>
              <div className='flex items-center gap-1'><p><IoLogoWhatsapp/></p>
               <div>
                <p className='font-normal' style={{fontFamily:"'Poppins',sans-serif"}}>+919128226670 </p>
               </div>
              </div>
             </div>
          </div>


          <div className='w-full h-auto flex gap-3 items-start shadow-lg rounded-lg border-2 border-orange-600 p-3'>
             <img src={digintraindia} alt="" className='w-[50px] rounded-full' />
             <div>
              <h3 className='font-semibold text-2xl ' style={{fontFamily:"'Poppins',sans-serif"}}>Md Saquib</h3>
              <div className='flex items-center gap-1'><p><FaTelegram/></p>
               <div>
                <p className='font-normal' style={{fontFamily:"'Poppins',sans-serif"}}>@digintra_OfficialSupport</p>
               </div>
              </div>
            
              <div className='flex items-center gap-1'><p><FaEnvelope/></p>
               <div>
                <p className='font-normal' style={{fontFamily:"'Poppins',sans-serif"}}>md.saquib@digintra.com </p>
               </div>
              </div>
              <div className='flex items-center gap-1'><p><IoLogoWhatsapp/></p>
               <div>
                <p className='font-normal' style={{fontFamily:"'Poppins',sans-serif"}}>+919992814676  </p>
               </div>
              </div>
             </div>
          </div>


          <div className='w-full h-auto flex gap-3 items-start shadow-lg rounded-lg border-2 border-orange-600 p-3'>
             <img src={digintraindia} alt="" className='w-[50px] rounded-full' />
             <div>
              <h3 className='font-semibold text-2xl ' style={{fontFamily:"'Poppins',sans-serif"}}>Himanshu Raj</h3>
              
              
              <div className='flex items-center gap-1'><p><FaEnvelope/></p>
               <div>
                <p className='font-normal' style={{fontFamily:"'Poppins',sans-serif"}}>himanshu.raj@digintra.com </p>
               </div>
              </div>
              <div className='flex items-center gap-1'><p><IoLogoWhatsapp/></p>
               <div>
                <p className='font-normal' style={{fontFamily:"'Poppins',sans-serif"}}>+91 90310 59041  </p>
               </div>
              </div>
             </div>
          </div>


          <div className='w-full h-auto flex gap-3 items-start shadow-lg rounded-lg border-2 border-orange-600 p-3'>
             <img src={digintraindia} alt="" className='w-[50px] rounded-full' />
             <div>
              <h3 className='font-semibold text-2xl ' style={{fontFamily:"'Poppins',sans-serif"}}>Sauhardi Sinha
              </h3>
              
              
              <div className='flex items-center gap-1'><p><FaEnvelope/></p>
               <div>
                <p className='font-normal' style={{fontFamily:"'Poppins',sans-serif"}}>sauhardi.sinha@digintra.com </p>
               </div>
              </div>
              <div className='flex items-center gap-1'><p><IoLogoWhatsapp/></p>
               <div>
                <p className='font-normal' style={{fontFamily:"'Poppins',sans-serif"}}>+91 81145 35553 </p>
               </div>
              </div>
             </div>
          </div>

          <div className='w-full h-auto flex gap-3 items-start shadow-lg rounded-lg border-2 border-orange-600 p-3'>
             <img src={digintraindia} alt="" className='w-[50px] rounded-full' />
             <div>
              <h3 className='font-semibold text-2xl ' style={{fontFamily:"'Poppins',sans-serif"}}>Khushi Perween</h3>
              
              
              <div className='flex items-center gap-1'><p><FaEnvelope/></p>
               <div>
                <p className='font-normal' style={{fontFamily:"'Poppins',sans-serif"}}>khushi.perween@digintra.com</p>
               </div>
              </div>
              <div className='flex items-center gap-1'><p><IoLogoWhatsapp/></p>
               <div>
                <p className='font-normal' style={{fontFamily:"'Poppins',sans-serif"}}>+91 90310 22609</p>
               </div>
              </div>
             </div>
          </div>


          <div className='w-full h-auto flex gap-3 items-start shadow-lg rounded-lg border-2 border-orange-600 p-3'>
             <img src={digintraindia} alt="" className='w-[50px] rounded-full' />
             <div>
              <h3 className='font-semibold text-2xl ' style={{fontFamily:"'Poppins',sans-serif"}}>Md. Jabir</h3>
              
              
              <div className='flex items-center gap-1'><p><FaEnvelope/></p>
               <div>
                <p className='font-normal' style={{fontFamily:"'Poppins',sans-serif"}}>md.jabir@digintra.com</p>
               </div>
              </div>
              <div className='flex items-center gap-1'><p><IoLogoWhatsapp/></p>
               <div>
                <p className='font-normal' style={{fontFamily:"'Poppins',sans-serif"}}>+91 9031011556</p>
               </div>
              </div>
             </div>
          </div>




         </div> */}

         <div className=' mx-auto mt-12 '>
          <h3 className='text-2xl font-normal' style={{fontFamily:"'Poppins',sans-serif"}}>For any questions you may have, please contact:</h3>
          <div className='grid grid-cols-1 md:grid-cols-3 my-5 gap-3'>
            <div className='flex items-center gap-3 '>
             <p className='bg-orange-500 text-white p-2 rounded-full'><FaPhoneAlt/></p> 
             <p>+91-90979 09079 </p>
            </div>

            <div  className='flex items-center gap-3'>
             <p className='bg-orange-500 text-white p-2 rounded-full'><FaEnvelope/></p> 
             <p>support@digintra.com
             </p>
            </div>

            <div  className='flex items-center gap-3 '>
             <p className='bg-orange-500 text-white p-2 rounded-full'><FaTelegram/></p> 
             <p>@digintra</p>
            </div>
          </div>
         </div>


         
       </div>




      <div className="w-[310px] h-auto mx-auto font-[700] pt-[50px] lg:w-[1140px] lg:pb-24">
        <h3 data-aos="fade-right" className="text-[#0053b7] text-center text-[21px] lg:text-[40px]" style={{fontFamily:"'Montserrat', sans-serif"}}>
          Many Features Available For Reseller Partner
        </h3>
        <div className="w-[200px] h-[4px] bg-blue-600 mx-auto"></div>
        <div className="w-[310px] h-auto mx-auto lg:w-[1140px] lg:flex lg:mt-[100px]">
          <img src={icons5} alt="Contact Us" className="lg:h-[500px] mt-8 lg:mt-0"  data-aos="zoom-in-up" />
          <div data-aos="fade-right" className="w-[310px] h-auto mx-auto shadow-lg lg:shadow-xl shadow-gray-200 mt-5 p-3 lg:w-3/6 rounded-lg lg:pb-5 ">
            <form action="" ref={form} onSubmit={sendEmail} className="space-y-4">
              <div className='flex items-center gap-3'>
               
              
                <input
                  type="text"
                  name="from_name"
                  placeholder='full name'
                  className="w-3/5 h-12 border-2 p-1 border-blue-600  outline-none rounded-lg "
                  style={{fontFamily:"'Poppins',sans-serif"}}
                />

<input
                  type="email"
                 placeholder="Email"
                  name="from_email"
                  className="w-3/5 h-12 border-2 p-1 border-blue-600  outline-none rounded-lg "
                />
              </div>
              <div>
               
             
               
              </div>
              
              <div> 
                <select
                  name=""
                  id=""
                  className="w-full h-12 border-2 border-blue-600  outline-none font-normal"
                  style={{fontFamily:"'Poppins',sans-serif"}}
                >
                  <option value="">Select the service</option>
                  <option value="">Enterprise Messaging</option>
                  <option value="">WhatsApp Business</option>
                  <option value="">SMTP Server</option>
                  <option value="">SEO</option>
                  <option value="">Voice Broadcasting</option>
                  <option value="">Others</option>
                </select>
              </div>
              <div className='flex items-center gap-3' >

                 <input
                  type="text"
                  placeholder="Company Name"
                  className="w-3/5 h-12 border-2 p-1 border-blue-600  outline-none rounded-lg"
                  style={{fontFamily:"'Poppins',sans-serif"}}
                />

<input
                  type="number"
                  placeholder="Phone number"
                  name="from_number"
                  className="w-3/5 h-12 border-2 p-1 border-blue-600  outline-none rounded-lg"
                  style={{fontFamily:"'Poppins',sans-serif"}}
                />
              </div>
             
              <div>
               
            
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full h-12 outline-none border-2 p-1 rounded-lg border-blue-600  font-normal "
                  style={{fontFamily:"'Poppins',sans-serif"}}
                />
              </div>
              <div>
               
                <input
                  type="text"
                  placeholder="Briefly Describe Your Business and the Services..."
                  name="message"
                  className="w-full outline-none h-12 border-2 rounded-lg border-blue-600 p-1  font-normal "
                  style={{fontFamily:"'Poppins',sans-serif"}}
                
                />
              </div>
             
              <button className="w-[200px] h-14  bg-gradient-to-tr from-green-500 to-yellow-500 rounded-lg hover:scale-105 text-white transition-transform  ">
                Submit
              </button>
            </form>
          </div>
        </div>
        <ToastContainer/>
      </div>
      </div>
      <Footer/>
      </>
  )
}
