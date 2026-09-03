
import React from 'react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { toast } from 'react-hot-toast';
import icons1 from "../assets/icons8-arrow-100.png";
export default function Sales() {
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
  return (
    <div id="sales" className=" relative w-auto h-auto pb-14 bg-gradient-to-tr bg-white scroll-smooth">
    {/* <div class="custom-shape-divider-top-1688712838">
<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
  <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
</svg>
</div> */}
     <h1 data-aos="fade-right" className=" absolute top-1 left-[130px] lg:left-[670px] text-center text-xl lg:text-[30px] font-semibold lg:pt-10 border-b-2 border-blue-600 pb-4" style={{fontFamily: "'Montserrat', sans-serif"}}>Contact <span className="text-blue-600">Sales</span></h1>
     <div className=" w-[200px]  bg-white mx-auto  pt-4"></div>
     <div className="w-[310px]  lg:w-[1100px] lg:flex lg:gap-x-6 h-auto mx-auto mt-24 lg:mt-36">
      <form data-aos="fade-right" ref={form} onSubmit={sendEmail} action="" className=" py-9 lg:my-0 pl-9 rounded-xl my-7 shadow-lg  w-[310px] lg:w-[400px] space-y-2 lg:ml-5 h-auto lg:shadow-lg lg:shadow-slate-600 lg:pl-16 lg:pt-10 lg:rounded-xl bg-gradient-to-tr from-orange-300 to-green-300">
          <div>
            {/* <label htmlFor=""  className="font-semibold ">Name</label> */}
          {<br/>}

          <input type="text" placeholder="Enter your name"   name="from_name" className="w-[240px] h-14 border-b-2 border-blue-600 rounded-xl pl-5  lg:pt-0"  />   
          </div>
          
          <div>
            {/* <label htmlFor="" className="font-semibold ">E-mail address</label> */}
          {<br/>}
          <input type="text" placeholder="Enter your email address" name="from_email"  className="w-[240px] h-14 border-b-2 border-blue-600 rounded-xl pl-5  lg:pt-0" />   
          </div>

           
          <div>
            {/* <label htmlFor="" className="font-semibold ">Phone number</label> */}
          {<br/>}
          <input type="text" placeholder="Enter your Phone no."   name="from_number" className="w-[240px] h-14 border-b-2 border-blue-600 rounded-xl pl-5  lg:pt-0" />   
          </div>

            
          <div>
            {/* <label htmlFor="" className="font-semibold ">Message</label> */}
          {<br/>}
        
          <textarea rows={10} cols={70}  placeholder="write here..." name="message"  className="w-[240px] border-b-2 border-l-2 border-blue-600 rounded-xl pl-5 pt-5">
            
          </textarea>
          </div> 
          <div>
                <button className=" border-b-2  border-blue-600  ml-2 lg:ml-0 bg-gradient-to-tr from-yellow-600 to-green-600 text-white font-semibold w-[200px] h-14 rounded-full  shadow-md shadow-yellow-400 hover:translate-y-2 flex pl-14 py-4">Submit<span ><img src={icons1} alt="Messaging Services, Email Services, Social Media & Branding Services" className="h-7 w-10" /></span> </button>         
              </div>    
        
          
      </form>
   
      <iframe data-aos="zoom-in-up" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6213612525416!2d77.62113707489502!3d12.932040215744767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae145b9d0a31a1%3A0x3e7cc87ca4d87f38!2sDIGINTRA!5e0!3m2!1sen!2sin!4v1688545722196!5m2!1sen!2sin" width={600} height={450} style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className=" w-[310px] h-[500px] mx-auto lg:w-[700px] lg:h-[700px]"></iframe>
    
     </div>
   </div>
  )
}
