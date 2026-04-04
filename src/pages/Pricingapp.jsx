import React, { useEffect } from 'react';
import { useState } from "react";
import "./pricing.css"
import { Autoplay, Pagination } from 'swiper/modules';
import { Helmet } from 'react-helmet';
import icons1 from "../assets/pricing.png";
import icons2 from "../assets/f2 (1).png";
import icons3 from "../assets/mnyback.png";
import icons4 from "../assets/secure.png";
import icons5 from "../assets/icons8-plus-501.png"
import iocns6 from "../assets/Transactional_sms_img.webp"
import Footer from '../components/Footer';

export default function Pricingapp() {
    const [Ques1, setQues1] = useState(false);
    const [Ques2, setQues2] = useState(false);
    const [Ques3, setQues3] = useState(false);
    const [Ques4, setQues4] = useState(false);
    const [Ques5, setQues5] = useState(false);
    const [Ques6, setQues6] = useState(false);
    const [Ques7, setQues7] = useState(false);
    const [Ques8, setQues8] = useState(false);
    // const [countries, setCountries] = useState([]);
    // const [selectedCountry, setSelectedCountry] = useState('');
    // const [selectedPrice, setSelectedPrice] = useState(null);
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("");

    const fetchPricingData = async () => {
      try {
        const res = await fetch("http://localhost:3000/pricing/pricing");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setCountries(data);
        console.log(data)
      } catch (err) {
        console.error("Error fetching pricing data:", err);
      }
      console.log("this is error")
    };

    useEffect(() => {
      fetchPricingData();
    }, []);

    console.log("countries pricing details are : ", JSON.stringify(countries));
    console.log("selectedcountry :", selectedCountry);
   
   
    const handleChange = (e) => {
      const selectedName = e.target.value;
      const selected = countries.find(
        (country) => country.countryname === selectedName
      );
      setSelectedCountry(selected || null);
    };
  

    // useEffect(() => {
    //   // Fetch the list of countries from your Express.js server
    //   fetch('http://localhost:4000/countries')
    //     .then((response) => response.json())
    //     .then((data) => setCountries(data))
    //     .catch((error) => console.error(error));
    // }, []);
  
    // const handleCountryChange = (event) => {
    //   setSelectedCountry(event.target.value);
    // };
  
    // useEffect(() => {
    //   if (selectedCountry) {
    //     // Fetch the pricing data for the selected country
    //     fetch(`http://localhost:4000/pricing/${selectedCountry}`)
    //       .then((response) => response.json())
    //       .then((data) => setSelectedPrice(data.price))
    //       .catch((error) => console.error(error));
    //   }
    // }, [selectedCountry]);
    function handleQues1() {
      setQues1(!Ques1);
    }
    function handleQues2() {
      setQues2(!Ques2);
    }
  
    function handleQues3() {
      setQues3(!Ques3);
    }
    function handleQues4() {
      setQues4(!Ques4);
    }
    function handleQues5() {
      setQues5(!Ques5);
    }
    function handleQues6() {
      setQues6(!Ques6);
    }
    function handleQues7() {
      setQues7(!Ques7);
    }
    function handleQues8() {
      setQues8(!Ques8);
    }
    useEffect(()=>{
      window.scrollTo(0,0);
    },[])
  return (
    <>
    <Helmet>
      <title>Pricing || Digintra</title>
      <meta name='description' content=''/>
      <link rel="canonical" href="https://www.digintra.com/smspricing" />
    </Helmet>

    <div className="patterncon relative w-full h-[692px] lg:h-[750px] pt-[100px] flex justify-center items-center ">
    <div className='absolute inset-0 backdrop-blur-md w-full h-full'></div>
      <div className="w-[95%] md:w-[80%] flex flex-col md:flex-row gap-10 z-10 justify-between items-center">
      <div className=" h-auto space-y-3 mx-auto lg:w-[50%]">
        <div className="  mx-auto bg-[#0053b7]">
          <h3 data-aos="fade-right" className="text-center lg:text-[16px] lg:tracking-widest text-white" style={{fontFamily:"'Montserrat', sans-serif"}}>
          PRICING TO SUIT ALL SIZE OF BUSINESS
          </h3>
        </div>

        <h1 data-aos="fade-right" className="text-[21px] font-[700] text-[#0053b7] text-center lg:text-[40px]" style={{fontFamily:"'Montserrat', sans-serif"}}>
        SMS Pricing
        </h1>
        <p data-aos="fade-right" className="text-center text-[13px] text-black lg:text-[16px]" style={{fontFamily:"'Poppins', sans-serif"}}>
        Our Prices are designed to meet your specific business goals
        </p>
      </div>
      <div className='w-[50%] md:w-[50%] flex justify-center'>
        <img src={iocns6} className='w-[80%]' alt="whatsappPricing" />
        </div>
      </div>
      
      {/* <div class="custom-shape-divider-bottom-1689339873">
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
    <div className='w-auto h-auto bg-white'>

  
    <div className="w-[310px] h-auto mx-auto lg:w-[1140px] lg:flex lg:gap-x-8 lg:px-7">
      <div className="w-[310px] h-auto lg:w-[500px] ">
        <h3 className="text-[2rem] text-[#0053b7] font-[700] text-center mt-4" style={{fontFamily:"'Montserrat', sans-serif"}}>
          SMS
        </h3>
        {/* <select
          name=""
          id=""
          className="w-[310px] h-14 mx-auto border-2 border-black mt-5 rounded-2xl lg:ml-[88px]"
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
        </select> */}


        
        {/* <select value={selectedCountry} onChange={handleCountryChange}  className="w-[310px] h-14 mx-auto border-2 border-black mt-5 rounded-2xl lg:ml-[88px]">
        <option value="">Select a country</option>
        {countries.map((country) => (
          <option key={country._id} value={country.country}>
            {country.country}
          </option>
        ))}
      </select> */}

      {/* {selectedCountry && (
        <div className='lg:ml-[100px] lg:my-[30px] lg:space-y-4'>
          <p><span className='font-semibold'>Selected Country:</span> <span className='text-xl lg:text-2xl font-medium'>{selectedCountry}</span> </p>
          {selectedPrice !== null ? (
            <p><span className='font-semibold'>Price:</span> <span className=' text-xl lg:text-2xl font-medium'>{selectedPrice} €</span></p>
          ) : (
            <p>Price not found for the selected country</p>
          )}
        </div>
      )}
        <h3 className="text-[16px] text-center font-[500] text-[#ffab03]">
          Send messages
        </h3>
        <p className="text-center">Send a message to any number in <span className='text-xl lg:text-2xl font-medium'>{selectedCountry}</span></p> */}
     

     <div className=' w-full flex flex-col h-[60vh] items-center justify-start mt-5 rounded-md'>
     
      <select defaultValue="" onChange={handleChange} className='flex items-center justify-center border-2 border-black mt-[5rem] h-[3rem] w-[25rem] text-center rounded-lg font-bold'style={{fontFamily:"'Montserrat', sans-serif"}}>
        <option value="" disabled className="text-black ">  
          Select a country
        </option> 
        {countries.map((country) => (
          <option key={country._id} value={country.countryname}>
            {country.countryname} {country.countrycode}
          </option>
        ))}
      </select>

      {selectedCountry && (
        <p className='mt-20 text-2xl bg-blue-300 p-2 rounded-md text-center leading-10' style={{fontFamily:"'Montserrat', sans-serif"}}>
          The SMS price of <br/> <strong>{selectedCountry.countryname}</strong> <br /> is {" "} <br /> {"€"}{" "} 
          <strong>{selectedCountry.pricing}</strong>
        </p>
      )}
    </div>
  


     
     
      </div>


      <div>
        <img
          src={icons1}
          alt="Pricing"
          className="mt-5 h-[200px] mx-auto lg:ml-[150px] lg:w-[400px] lg:h-[300px]"
        />
      </div>
    </div>



    <div className="w-[310px] h-auto mx-auto pt-[150px] space-y-14 lg:w-[1140px] grid grid-cols-1 lg:grid-cols-3 lg:space-y-0">
      <div data-aos="zoom-in-up" className="w-[310px] h-auto ">
        <img src={icons2} alt="Pricing" className="h-[200px] mx-auto" />
        <h3 className="text-center text-[16px] font-[500] text-[#ffab03]  lg:text-[21px]" style={{fontFamily:"'Montserrat', sans-serif"}}>
          18*7 Customer Support
        </h3>
      </div>
      <div data-aos="zoom-in-up" className="w-[310px] h-auto">
        <img src={icons3} alt="Pricing" className="h-[200px] mx-auto" />
        <h3 className="text-center  text-[16px] font-[500] text-[#ffab03] lg:text-[21px]" style={{fontFamily:"'Montserrat', sans-serif"}}>
          Money back Gaurantee
        </h3>
      </div>

      <div data-aos="zoom-in-up" className=" w-[310px] h-auto">
        <img src={icons4} alt="Pricing" className="h-[200px] mx-auto" />
        <h3 className="text-center  text-[16px] font-[500] text-[#ffab03]  lg:text-[21px]" style={{fontFamily:"'Montserrat', sans-serif"}}>
          100% Secure Data
        </h3>
      </div>
    </div>
    <div data-aos="fade-right" className="w-[310px] space-y-7 h-auto pt-[60px] mx-auto lg:w-[1140px]">
      <h3 className="text-[21px] font-[700] text-[#0053b7] text-center lg:text-[40px] " style={{fontFamily:"'Montserrat', sans-serif"}}>
        Frequently Asked Questions
      </h3>
      <div className="w-[200px] h-[4px] bg-blue-600 mx-auto "></div>
      <div className="lg:pt-[60px] w-[310px] pt-[50px] pb-7 lg:pb-14 h-auto lg:w-[1100px] mx-auto space-y-6">
        <div
          className="w-[310px] h-10 bg-[#FBFBFB] rounded-lg flex justify-between px-4 lg:w-[1000px] lg:h-14 lg:mx-auto"
          onClick={handleQues1}
        >
          <h3 className="text-[13px] font-[600] text-[#01cf80] py-3 lg:text-[19px] " style={{fontFamily:"'Montserrat', sans-serif"}}>
            How can I purchase SMS Credits?{" "}
          </h3>
          <span>
            <img
              src={icons5}
              alt=""
              className="lg:h-8 h-4 l my-3"
            />
          </span>
        </div>
        {Ques1 && (
          <p className="bg-[#FBFBFB] text-[13px] px-4 lg:w-[1000px] lg:mx-auto lg:text-[16px] font-[400] text-[#646464]" style={{fontFamily:"'Poppins', sans-serif"}}>
            First Sign-up for the SMS account through www.digintra.com and
            purchase the credits as per your business need.
          </p>
        )}

        <div
          className="w-[310px] h-10 bg-[#FBFBFB] rounded-lg flex justify-between px-4 lg:w-[1000px] lg:h-14 lg:mx-auto"
          onClick={handleQues2}
        >
          <h3 className="text-[13px] font-[600] text-[#01cf80] flex justify-between py-3 lg:text-[19px]" style={{fontFamily:"'Montserrat', sans-serif"}}>
            Does the system charge on submission or delivery?{" "}
          </h3>
          <span>
            <img
              src={icons5}
              alt=""
              className="h-4 lg:h-8 my-3"
            />
          </span>
        </div>
        {Ques2 && (
          <p className="bg-[#FBFBFB] px-4 text-[13px] lg:w-[1000px] lg:mx-auto lg:text-[16px] font-[400] text-[#646464]" style={{fontFamily:"'Poppins', sans-serif"}}>
            Yes! Our system charge on each submission of message through our
            gateway.
          </p>
        )}

        <div
          className="w-[310px] h-10 bg-[#FBFBFB] rounded-lg flex justify-between px-4 lg:w-[1000px] lg:h-14 lg:mx-auto"
          onClick={handleQues3}
        >
          <h3 className="text-[13px] font-[600] text-[#01cf80] py-3 lg:text-[19px]" style={{fontFamily:"'Montserrat', sans-serif"}}>
            Are failed SMS also charged?
          </h3>
          <span>
            <img
              src={icons5}
              alt=""
              className="h-4 lg:h-8 my-3"
            />
          </span>
        </div>
        {Ques3 && (
          <p className="text-[13px] bg-[#FBFBFB] px-4 lg:w-[1000px] lg:mx-auto lg:text-[16px] font-[400] text-[#646464]" style={{fontFamily:"'Poppins', sans-serif"}}>
            Yes, failed messages are charged. As our system charge on each
            submission.
          </p>
        )}

        <div
          className="w-[310px] h-10 bg-[#FBFBFB] rounded-lg flex justify-between px-4 lg:w-[1000px] lg:h-14 lg:mx-auto"
          onClick={handleQues4}
        >
          <h3 className="text-[13px]  font-[600] text-[#01cf80] lg:text-[19px] " style={{fontFamily:"'Montserrat', sans-serif"}}>
            What is Sender ID?{" "}
          </h3>
          <span>
            <img
              src={icons5}
              alt=""
              className="h-4 lg:h-8 my-3"
            />
          </span>
        </div>
        {Ques4 && (
          <p className="text-[13px] bg-[#FBFBFB] px-4 lg:w-[1000px] lg:mx-auto lg:text-[16px] font-[400] text-[#646464]" style={{fontFamily:"'Poppins', sans-serif"}}>
            Sender ID is the alpha-numeric name or number which appears on the
            mobile phone as the sender of a SMS (It is used to identify who’s
            sending the message to the recipient).
          </p>
        )}

        <div
          className="w-[310px] h-10 bg-[#FBFBFB] rounded-lg flex justify-between px-4 lg:w-[1000px] lg:h-14 lg:mx-auto"
          onClick={handleQues5}
        >
          <h3 className="text-[13px] font-[600] text-[#01cf80]  lg:text-[19px]" style={{fontFamily:"'Montserrat', sans-serif"}}>
            How can I get a refund or Cancel my service?{" "}
          </h3>
          <span>
            <img
              src={icons5}
              alt=""
              className="h-4 lg:h-8 my-3"
            />
          </span>
        </div>
        {Ques5 && (
          <p className="text-[13px] bg-[#FBFBFB] px-4 lg:w-[1000px] lg:mx-auto lg:text-[16px] font-[400] text-[#646464]" style={{fontFamily:"'Poppins', sans-serif"}}>
            In order to make a refund request, you can directly write to
            "support@digintra.com". Your amount will be refunded within 6-7
            working days.
          </p>
        )}


<div
          className="w-[310px] h-10 bg-[#FBFBFB] rounded-lg flex justify-between px-4 lg:w-[1000px] lg:h-14 lg:mx-auto"
          onClick={handleQues6}
        >
          <h3 className="text-[13px] font-[600] text-[#01cf80]  lg:text-[19px]" style={{fontFamily:"'Montserrat', sans-serif"}}>
          What is the validity of the SMS credits?{" "}
          </h3>
          <span>
            <img
              src={icons5}
              alt=""
              className="h-4 lg:h-8 my-3"
            />
          </span>
        </div>
        {Ques6 && (
          <p className="text-[13px] bg-[#FBFBFB] px-4 lg:w-[1000px] lg:mx-auto lg:text-[16px] font-[400] text-[#646464]" style={{fontFamily:"'Poppins', sans-serif"}}>
           All SMS credits you buy with DIGINTRA® come with a lifetime validity. You can pay only for what you use.
          </p>
        )}

<div
          className="w-[310px] h-10 bg-[#FBFBFB] rounded-lg flex justify-between px-4 lg:w-[1000px] lg:h-14 lg:mx-auto"
          onClick={handleQues7}
        >
          <h3 className="text-[13px] font-[600] text-[#01cf80]  lg:text-[19px]" style={{fontFamily:"'Montserrat', sans-serif"}}>
            What is the least number of credits that can be purchased?{" "}
          </h3>
          <span>
            <img
              src={icons5}
              alt=""
              className="h-4 lg:h-8 my-3"
            />
          </span>
        </div>
        {Ques7 && (
          <p className="text-[13px] bg-[#FBFBFB] px-4 lg:w-[1000px] lg:mx-auto lg:text-[16px] font-[400] text-[#646464]" style={{fontFamily:"'Poppins', sans-serif"}}>
           The least number of credits that can be purchased is 1000 in Prmotional,Transactional & OTP.
          </p>
        )}

<div
          className="w-[310px] h-10 bg-[#FBFBFB] rounded-lg flex justify-between px-4 lg:w-[1000px] lg:h-14 lg:mx-auto"
          onClick={handleQues8}
        >
          <h3 className="text-[13px] font-[600] text-[#01cf80]  lg:text-[19px]" style={{fontFamily:"'Montserrat', sans-serif"}}>
           How to send SMS Worldwide?{" "}
          </h3>
          <span>
            <img
              src={icons5}
              alt=""
              className="h-4 lg:h-8 my-3"
            />
          </span>
        </div>
        {Ques8 && (
          <p className="text-[13px] bg-[#FBFBFB] px-4 lg:w-[1000px] lg:mx-auto lg:text-[16px] font-[400] text-[#646464]" style={{fontFamily:"'Poppins', sans-serif"}}>
         DIGINTRA is able to send SMS messages to billion of people in 170+ countries. ...Just a followed by the "Country code".
          </p>
        )}


      </div>


      </div>
    </div>
    <Footer/>
  </>
  )
}
