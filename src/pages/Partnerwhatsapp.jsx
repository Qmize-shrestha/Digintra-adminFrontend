import React from 'react';
import { toast } from 'react-hot-toast';
import { useRef } from 'react';
import "./partner.css"
import { Helmet } from 'react-helmet';
import emailjs from '@emailjs/browser';
import { useEffect } from 'react';
import icons1 from "../assets/Partner_img.webp";
import icons2 from "../assets/f1.png";
import icons3 from "../assets/f2.png";
import icons4 from "../assets/f3.png";
import icons5 from "../assets/icons8-arrow-100.png";
import icons6 from "../assets/support.png";
import icons7 from "../assets/partner-form.png";
import icons8 from "../assets/icons8-star-24.png";
import Footer from '../components/Footer';

export default function Partnerwhatsapp(){
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
    return(
        <>
        <div className="patterncon relative w-auto  lg:h-[829px] h-[932px] lg:pt-[230px] pt-[200px] md:pt-[280px]">
        <div className='absolute inset-0 backdrop-blur-md w-full h-full'></div>
          <Helmet>
          <meta name="robots" content="index, follow" />

            <meta charSet="utf-8"/>
           <title>Partner With DIGINTRA - DIGINTRA</title>
           <meta name="description" content=" DIGINTRA offers an agency partner program, to resell any of our products, services, and solutions. Become a Partner Now!"/>
           <meta name="keywords" content=""/>
           <link rel="canonical" href="https://www.digintra.com/partner" />
          </Helmet>
          <div className="w-[310px] mx-auto h-auto lg:w-[1140px] grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="lg:pt-[80px] z-10">
              <div className="bg-[#0053b7] w-[300px] mx-auto lg:ml-4 ">
                <h3 data-aos="fade-right" className="text-white text-center  tracking-widest " style={{fontFamily:"'Montserrat', sans-serif"}}>
                  RESELLER
                </h3>
              </div>
              <div className="w-[310x] h-auto mx-auto mt-5 space-y-5">
                <h1 data-aos="fade-right" className="text-[21px] font-[700] text-[#0053b7] text-center lg:text-[40px] lg:text-left pl-4" style={{fontFamily:"'Montserrat', sans-serif"}}>
                  Partner With DIGINTRA
                </h1>
                <p data-aos='fade-right' className="text-[13px] font-[400] text-center px-4 lg:text-[16px] lg:text-left" style={{fontFamily:"'Poppins', sans-serif"}}>
                  DIGINTRA offers an agency partner program, resell any of our
                  products, services and solutions. Join our existing organization
                  that offers Global Marketing services. With DIGINTRA, you can
                  quickly offer a leading marketing service for your clients &
                  share the revenue! You can choose to resell our entire services
                  or just a handful.
                </p>
               <a href="https://api-wa.co/nVOl41"> <button className="w-[200px] h-14 lg:mt-6   hover:-translate-y-2 bg-gradient-to-tr from-yellow-600 to-green-600 mt-6 rounded-lg  flex pl-7  text-white py-4 lg:ml-4  ml-[60px] ">
                  Become A Partner
                </button> </a>
              </div>
            </div>
            <div data-aos="zoom-in-up" className="lg:w-[540px] lg:h-[490px] z-10">
              <img src={icons1} alt="Partner With Digintra" />
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
                class="shape-fill fill-white"
              ></path>
            </svg>
          </div> */}
        </div>
        <div className='w-auto h-auto bg-white'>
        <div className="w-[310px]  h-auto pt-20 mx-auto lg:w-[1140px]">
          <h3 data-aos="fade-right" className="text-[21px] text-[#0053b7] text-center font-[700] lg:text-[40px]" style={{fontFamily:"'Montserrat', sans-serif"}}>
            Many Features Available For Reseller Partner
          </h3>
          <div className="w-[200px] h-[4px] bg-blue-600 mx-auto mt-3"></div>
          <div className="w-[310px] h-auto mx-auto space-y-7 mt-8 lg:w-[1140px] grid grid-cols-1 lg:grid-cols-3 lg:space-y-0">
            <div className="w-[300px] bg-gradient-to-t from-orange-50 border-l-4 border-t-2 border-r-2 border-b-4 rounded-lg border-blue-800 h-auto p-4">
              <img src={icons2} alt="Partner With Digintra" className="h-[200px] mx-auto" />
              <h3 data-aos="fade-right" className="text-[16px] font-semibold text-blue-800 text-center lg:text-[21px] " style={{fontFamily:"'Montserrat', sans-serif"}}>
                Re-Brand Our Plateform
              </h3>
              <p className="text-center lg:text-[16px] font-[400] mt-2" style={{fontFamily:"'Poppins', sans-serif"}}>
                White Label platform with your company logo and brand colours.
                Access more, advanced features.
              </p>
            </div>
  
            {/* second card */}
            <div className="w-[300px] bg-gradient-to-t from-orange-50 border-l-4 border-t-2 border-r-2 border-b-4 rounded-lg border-blue-800 h-auto p-4">
              <img src={icons3} alt="Partner With Digintra" className="h-[200px] mx-auto" />
              <h3 className="text-[16px] font-semibold text-blue-800 text-center lg:text-[21px]" style={{fontFamily:"'Montserrat', sans-serif"}}>
                Multi level Support
              </h3>
              <p className="text-center lg:text-[16px] font-[400] mt-2" style={{fontFamily:"'Poppins', sans-serif"}}>
                We provide support at every level, from your customer to your
                sales and teams.We’ll work with your clients to promote their
                businesses.
              </p>
            </div>
  
            {/* third card */}
            <div className="w-[300px] bg-gradient-to-t from-orange-50 border-l-4 border-t-2 border-r-2 border-b-4 rounded-lg border-blue-800 h-auto p-4">
              <img src={icons4} alt="Partner With Digintra" className="h-[200px] mx-auto" />
              <h3 className="text-[16px] font-semibold text-blue-800 text-center lg:text-[21px]" style={{fontFamily:"'Montserrat', sans-serif"}}>
                Recurring Revenue
              </h3>
              <p className="text-center lg:text-[16px] font-[400] mt-2" style={{fontFamily:"'Poppins',sans-serif"}}>
                Drive new sources for revenue and set your own price, while
                enjoying a sizable discount as a agency partner.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[310px] h-auto mx-auto pt-[50px] lg:w-[1140px] lg:flex lg:gap-x-4">
          <div className="w-[310px] h-auto lg:w-[500px]">
            <h3 data-aos="fade-right" className="text-[21px] text-[#0053b7] font-[700] text-center lg:text-[40px] lg:text-left" style={{fontFamily:"'Montserrat', sans-serif"}}>
              Our Support
            </h3>
            <p data-aos="fade-up" className="text-[13px] font-[400] text-center mt-2 lg:text-[16px] lg:text-left" style={{fontFamily:"'Poppins', sans-serif"}}>
              We provide support you via webinar or phone conference if you need
              help with a direct client facing presentation. You will have a
              dedicated R.M contact within our agency who will help your team plan
              proposals, discuss best practices, and answer all of your clients
              question as needed.
            </p>
            <div className="mt-4">
              <h3 className="text-[16px] font-[500] text-center lg:text-[24px] lg:text-left" style={{fontFamily:"'Poppins', sans-serif"}}>
                Become a DIGINTRA Partner!
              </h3>
              <p className="text-[13px] font-[400] text-center mt-2 lg:text-[16px] lg:text-left" style={{fontFamily:"'Poppins', sans-serif"}}>
                Start offering text messageservice to your own customers
                throughpartnership opportunities
              </p>
            </div>
            <div className="w-[310px] lg:w-[500px] space-y-6 h-auto my-14">
         <a href="https://sms-login.digintra.com/User/SignUp">   <button className="w-[200px] h-14  shadow-lg shadow-gray-400 hover:-translate-y-2 bg-gradient-to-tr from-yellow-600 to-green-600  rounded-lg  flex pl-7 text-white py-4">
                Register Now
                <span>
                  <img src={icons5} alt="" className="h-7 w-10" />
                </span>
              </button></a>  
        <a href='https://api-wa.co/nVOl41'>     <button className="w-[200px] mt-6 ring ring-green-600 ring-offset-4 h-14 bg-gradient-to-tr shadow-lg shadow-gray-400 hover:translate-y-2 from-green-500 to-green-300 rounded-lg flex pl-7 py-4">
                Discuss On Call
                <span>
                  <img src={icons5} alt="" className="h-7 w-10" />
                </span>
              </button> </a> 
            </div>
          </div>
          <div className="mt-7 lg:mt-0">
            <img src={icons6} alt="Partner With Digintra" className="lg:h-[500px]" />
          </div>
        </div>
        <div className="w-[310px] h-auto mx-auto font-[700] pt-[50px] lg:w-[1140px]">
          <h3 data-aos="fade-right" className="text-[#0053b7] text-center text-[21px] lg:text-[40px]" style={{fontFamily:"'Montserrat', sans-serif"}}>
            Many Features Available For Reseller Partner
          </h3>
          <div className="w-[200px] h-[4px] bg-blue-600 mx-auto"></div>
          <div className="w-[310px] h-auto mx-auto lg:w-[1140px] lg:flex lg:mt-[100px]">
            <img src={icons7} alt="Partner With Digintra" className="lg:h-[800px]" data-aos="zoom-in-up"/>
            <div data-aos="fade-right" className="w-[310px] h-auto mx-auto shadow-lg lg:shadow-xl shadow-gray-200 mt-5 pl-5 lg:w-[500px] rounded-lg ">
              <form action="" ref={form} onSubmit={sendEmail} className="space-y-4">
                <div>
                  <label htmlFor="" className="font-normal flex gap-x-2" style={{fontFamily:"'Poppins', sans-serif"}}>
                    Full Name{" "}
                    <span>
                      <img
                        src={icons8}
                        alt=""
                        className="h-2 mt-2"
                      />
                    </span>
                  </label>
                  {<br />}
                  <input
                    type="text"
                    name="from_name"
           
                    className="w-[250px] h-12 border-b-2 border-blue-600 lg:w-[430px] outline-none "
                  />
                </div>
                <div>
                  <label htmlFor="" className="font-normal flex gap-x-2" style={{fontFamily:"'Poppins', sans-serif"}}>
                    Company Name
                    <span>
                      <img
                        src={icons8}
                        alt=""
                        className="h-2 mt-2"
                      />
                    </span>
                  </label>
                  {<br />}
                  <input
                    type="text"
                    className="border-b-2 border-blue-600 w-[250px] h-12 lg:w-[430px] outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="" className="font-normal" style={{fontFamily:"'Poppins', sans-serif"}}>
                    Country
                  </label>{" "}
                  {<br />}
               
                  <select
                    name=""
                    id=""
                    className="w-[250px] h-12 border-b-2 border-blue-600 lg:w-[430px] outline-none font-normal "
                  >
                    <option value="">Select</option>
                    <option value="">Ascension Island</option>
                    <option value="">Andorra</option>
                    <option value="">United Arab Emirates</option>
                    <option value="">Afghanistan</option>
                    <option value="">Antigua and Barbuda</option>
                    <option value="">Anguilla</option>
                    <option value="">Albania</option>
                    <option value="">Armenia</option>
                    <option value="">Angola</option>
                    <option value="">Argentina</option>
                    <option value="">American Samoa</option>
                    <option value="">Austria</option>
                    <option value="">Australia</option>
                    <option value="">Aruba</option>
                    <option value="">Azerbaijan</option>
                    <option value="">Bosnia and Herzegovina</option>
                    <option value="">Babados</option>
                    <option value="">Bangladesh</option>
                    <option value="">Belgium</option>
                    <option value="">Burkina Faso</option>
                    <option value="">Bulgaria</option>
                    <option value="">Bahrain</option>
                    <option value="">Burundi</option>
                    <option value="">Benin</option>
                    <option value="">Bermuda</option>
                    <option value="">Brunei</option>
                    <option value="">Bolivia</option>
                    <option value="">Bonaire,Sint Eustatius and Saba</option>
                    <option value="">Brazil</option>
                    <option value="">Bahamas</option>
                    <option value="">Bhutan</option>
                    <option value="">Botswana</option>
                    <option value="">Belarus</option>
                    <option value="">Belize</option>
                    <option value="">Canada</option>
                    <option value="">Democratic Republic of The Congo</option>
                    <option value="">Central African Republic</option>
                    <option value="">Republic of Congo</option>
                    <option value="">Switzerland</option>
                    <option value="">Ivory Coast</option>
                    <option value="">Cook Islands</option>
                    <option value="">Chile</option>
                    <option value="">Cameroon</option>
                    <option value="">China</option>
                    <option value="">Colombia</option>
                    <option value="">Costa Rica</option>
                    <option value="">Cuba</option>
                    <option value="">Cape verde</option>
                    <option value="">Curacao</option>
                    <option value="">Cyprus</option>
                    <option value="">Czechia</option>
                    <option value="">Germany</option>
                    <option value="">Djibouti</option>
                    <option value="">Denmark</option>
                    <option value="">Dominica</option>
                    <option value="">Dominican Republic </option>
                    <option value="">Algeria</option>
                    <option value="">Ecuador</option>
                    <option value="">Estonia</option>
                    <option value="">Egypt</option>
                    <option value="">Eritrea</option>
                    <option value="">Spain</option>
                    <option value="">Ethiopia</option>
                    <option value="">Finland</option>
                    <option value="">Fiji</option>
                    <option value="">Falkland Islands</option>
                    <option value="">Micronesia</option>
                    <option value="">Faroe Islands</option>
                    <option value="">France</option>
                    <option value="">Gabon</option>
                    <option value="">United Kingdom</option>
                    <option value="">Grenada</option>
                    <option value="">Georgia</option>
                    <option value="">French Guiana</option>
                    <option value="">Ghana</option>
                    <option value="">Gibraltar</option>
                    <option value="">Greenland</option>
                    <option value=""> Grenada</option>
                    <option value=""> Guadeloupe</option>
                    <option value=""> Guernsey</option>
                    <option value=""> Guinea</option>
                    <option value=""> Guyana</option>
                    <option value=""> Haiti</option>
                    <option value=""> Honduras</option>
                    <option value=""> Hong Kong</option>
                    <option value=""> Iceland</option>
                    <option value=""> Indonesia</option>
                    <option value=""> Iraq</option>
                    <option value=""> Ireland</option>
                    <option value=""> Israel</option>
                    <option value=""> Italy</option>
                    <option value=""> Ivory Coast</option>
                    <option value=""> Jamaica</option>
                    <option value=""> Japan</option>
                    <option value=""> Jordan</option>
                    <option value=""> Kenya</option>
                    <option value=""> Kuwait</option>
                    <option value=""> Laos</option>
                    <option value=""> Latvia</option>
                    <option value=""> Lebanon</option>
                    <option value=""> Liberia</option>
                    <option value=""> Libya</option>
                    <option value=""> Liechtenstein</option>
                    <option value=""> Lithuania</option>
                    <option value=""> Luxembourg</option>
                    <option value=""> Macao</option>
                    <option value=""> Macedonia</option>
                    <option value=""> Malawi</option>
                    <option value=""> Maldives</option>
                    <option value=""> Malta</option>
                    <option value=""> Martinique</option>
                    <option value=""> Mauritania</option>
                    <option value=""> Mauritius</option>
                    <option value=""> Moldova</option>
                    <option value=""> Monaco</option>
                    <option value=""> Montenegro</option>
                    <option value=""> Morocco</option>
                    <option value=""> Mozambique</option>
                    <option value=""> Myanmar</option>
                    <option value=""> Namibia</option>
                    <option value=""> Nepal</option>
                    <option value=""> Netherlands</option>
                    <option value=""> Nicaragua</option>
                    <option value=""> Niger</option>
                    <option value=""> Nigeria</option>
                    <option value=""> Norway</option>
                    <option value=""> Oman</option>
                    <option value=""> Papua New Guinea</option>
                    <option value=""> Philippines</option>
                    <option value=""> Poland</option>
                    <option value=""> Portugal</option>
                    <option value=""> Qatar</option>
                    <option value=""> Republic of the Congo</option>
                    <option value=""> Réunion (France)</option>
                    <option value=""> Russia</option>
                    <option value=""> Samoa</option>
                    <option value=""> Saudi Arabia</option>
                    <option value=""> Senegal</option>
                    <option value=""> Serbia</option>
                    <option value=""> Seychelles</option>
                    <option value=""> Sierra Leone</option>
                    <option value=""> Singapore</option>
                    <option value=""> Slovakia</option>
                    <option value=""> Slovenia</option>
                    <option value=""> Somalia</option>
                    <option value=""> South Sudan</option>
                    <option value=""> Spain</option>
                    <option value=""> Sri Lanka</option>
                    <option value=""> St. Lucia</option>
                    <option value=""> Sudan</option>
                    <option value=""> Swaziland</option>
                    <option value=""> Sweden</option>
                    <option value=""> Switzerland</option>
                    <option value=""> Tajikistan</option>
                    <option value=""> Tanzania</option>
                    <option value=""> Timor-Leste</option>
                    <option value=""> Togo</option>
                    <option value=""> Tonga</option>
                    <option value=""> Turkey</option>
                    <option value=""> Uganda</option>
                    <option value=""> Ukraine</option>
                    <option value=""> United Arab Emirates</option>
                    <option value=""> United Kingdom</option>
                    <option value=""> Uzbekistan</option>
                    <option value=""> Vanuatu</option>
                    <option value=""> Zambia</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="" className="font-normal" style={{fontFamily:"'Poppins', sans-serif"}}>
                    Your Partner Type
                  </label>{" "}
                  {<br />}
                  
                  <select
                    name=""
                    id=""
                    className="w-[250px] h-12 border-b-2 border-blue-600 lg:w-[430px] outline-none font-normal"
                  >
                    <option value="">Select</option>
                    <option value="">Messaging Partner</option>
                    <option value="">WhatsApp Business</option>
                    <option value="">Social Media</option>
                    <option value="">other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="" className="font-normal flex gap-x-2" style={{fontFamily:"'Poppins', sans-serif"}}>
                    Phone number
                    <span>
                      <img
                        src={icons8}
                        alt=""
                        className="h-2 mt-2"
                      />
                    </span>
                  </label>{" "}
                  {<br />}
                  <input
                    type="text"
                    placeholder="Phone number"
                    name="from_number"
                    className="w-[250px] outline-none h-12 border-b-2 border-blue-600 font-normal lg:w-[430px]"
                  />
                </div>
                <div>
                  <label htmlFor="" className="font-normal flex gap-x-2" style={{fontFamily:"'Poppins', sans-serif"}}>
                    Business Email
                    <span>
                      <img
                        src={icons8}
                        alt=""
                        className="h-2 mt-2"
                      />
                    </span>
                  </label>{" "}
                  {<br />}
                  <input
                    type="email"
                    placeholder="Email"
                    name="from_email"
                    className="w-[250px] h-12 border-b-2 border-blue-600 outline-none lg:w-[430px] font-normal"
                  />
                </div>
                <div>
                  <label htmlFor="" className="font-normal flex gap-x-2" style={{fontFamily:"'Poppins', sans-serif"}}>
                    Company Website URL
                    <span>
                      <img
                        src={icons8}
                        alt=""
                        className="h-2 mt-2"
                      />
                    </span>
                  </label>{" "}
                  {<br />}
                  <input
                    type="text"
                    placeholder="www."
                    className="w-[250px] h-12 outline-none border-b-2 border-blue-600 lg:w-[430px] font-normal"
                  />
                </div>
                <div>
                  <label htmlFor="" className="font-normal" style={{fontFamily:"'Poppins', sans-serif"}}>
                    Briefly Describe Your Business and the Services...
                  </label>{" "}
                  {<br />}
                  <input
                    type="text"
                    placeholder="......."
                    name="message"
                    className="w-[250px] outline-none h-12 border-b-2 border-blue-600 lg:w-[430px] font-normal "
                  />
                </div>
                <p className="text-[13px] font-normal px-2" style={{fontFamily:"'Poppins', sans-serif"}}>
                  DIGINTRA or its representatives will email you (or call if you
                  provided your number) to discuss about partnership program. Your
                  data will be treated in accordance with our Privacy Policy,
                  which also sets out the rights you have in respect of your data.
                </p>
                <p className="text-[13px]  px-2 font-normal mt-2" style={{fontFamily:"'Poppins', sans-serif"}}>
                  We would also like to send you newsletters and other promotional
                  emails about DIGINTRA's products & services.
                </p>
                <button className="w-[200px] h-14 bg-gradient-to-tr from-green-500 to-yellow-500 rounded-lg ">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        </div>
        <Footer/>
      </>
    )
}