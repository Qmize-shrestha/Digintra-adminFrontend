

import { useState, useEffect } from "react";
import GIF from "../assets/freetrial.webp";
import Background from "../assets/violetbg.png";
import { Link } from "react-router-dom";

export default function OfferPopup() {
  const [showPopup, setShowPopup] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowPopup(true);
  //   }, 5000);

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    showPopup && (
      <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md bg-opacity-50 z-[9999]">
        <div className="w-11/12 max-w-3xl flex flex-col md:flex-row bg-gradient-to-br from-purple-700 via-orange-300 to-purple-950 rounded-lg shadow-lg p-6 relative z-[10000] overflow-hidden">
          {/* Close Button */}
          <button
            className="absolute top-3 right-3 text-white hover:bg-white hover:text-red-800 bg-red-600 p-2 rounded-full border-2 border-white"
            onClick={() => setShowPopup(false)}
          >
            ✖
          </button>

          {/* Left Side - GIF */}
          <div className="flex items-center justify-center border-2 border-red-500 bg-pink-100 md:w-1/2">
            <img src={GIF} alt="Gift Animation" className="w-full h-auto " />
          </div>

          {/* Right Side - Content */}
          <div className="text-center bg-cover bg-center p-6 text-white flex flex-col items-center justify-center w-full md:w-1/2"  style={{ backgroundImage: `url(${Background})`}}>
            <h2 className="text-2xl font-bold font-irishGrover max-sm:text-xl">
              <span className="font-Tektur bg-gradient-to-br from-pink-600 via-red-500 to-orange-500 px-2 py-1 rounded-md" style={{fontFamily:"'Manrope',sans-serif"}}>
                7 Days Free Trial
              </span>
              <br /> <span className="text-[1rem]"> On </span><br />
              <div className="bg-gradient-to-tr from-green-50 to-white rounded-full px-5 py-2 inline-block">
                <span className="font-montsreal bg-green-500 bg-clip-text text-transparent text-[1.3rem] font-bold max-sm:text-lg">
                  WhatsApp Business API
                </span>
              </div>
            </h2>

            <div className="mt-4 bg-white/20 backdrop-blur-md p-5 rounded-lg border-2 border-white border-dashed text-center">
              <p className="text-sm mt-2 font-mono max-sm:text-xs">What are you waiting for?</p>
              <p className="text-2xl font-bold font-serif max-sm:text-lg bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-orange-500">
                HURRY UP !
              </p>
             <Link to="https://www.connect.digintra.com/signup"> <button className="mt-5 px-5 py-2 border-2 border-white bg-gradient-to-tr from-purple-500 to-orange-600 rounded-full hover:opacity-90 max-sm:px-3 max-sm:py-1 hover:scale-105">
                Subscribe Now
              </button> </Link>
            </div>

            <div className="mt-4 font-montsreal font-medium max-sm:text-sm text-yellow-300">Where Business Meets Success</div>
          </div>
        </div>
      </div>
    )
  );
}
