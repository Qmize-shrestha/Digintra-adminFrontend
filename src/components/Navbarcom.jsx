// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import icons1 from "../assets/icons8-blogs-64.png";
// import icons2 from "../assets/icons8-bookmark-48.png";
// function Navbarcom({onClose}){
//     const[Resources, setResources]=useState(true);
//     const handlehideresource=()=>{
//         setResources(false);
//     }
//     return(
//         <>
//     {Resources && 
//     <div className="w-full h-screen pt-[150px] bg-transparent z-50  fixed " onClick={onClose} >
         
   
//     <div id="resource" className="w-[270px] fixed top-[8rem] border-t-4 border-blue-900 left-[700px] h-[200px] shadow-md  shadow-gray-200 bg-blue-50">
//        <div className="w-[200px] ml-3">
//    <Link to="/smspricing"><div className="flex px-4 mt-6 space-x-3 items-center hover:-translate-y-1 transition-transform " style={{fontFamily:"'Poppins', sans-serif"}}>  <span><img src={icons1} alt="" className='lg:h-[1.3rem] h-8   ml-2'/></span>
//             <h1 className="font-semibold text-[14px] pt-1 ">
//       SMS Pricing
//             </h1></div>
//             </Link> 
//      <div className="w-[150px] h-[2px] border-2 border-blue-600 ml-[50px] mt-4"></div>
//      <Link to="/whatsapp-pricing"> <div className="flex px-4 mt-6 items-center space-x-3 hover:-translate-y-1 transition-transform" style={{fontFamily:"'Poppins', sans-serif"}}>  <span><img src={icons2} alt="" className='lg:h-[1.2rem] h-8   ml-2'/></span>
//             <h1 className="font-semibold text-[14px] pt-1">
//           WhatsApp Pricing
//             </h1></div> </Link>
          
          
//        </div>
//     </div>
  
//     </div>
//       }
//     </>
//     )
// }
// export default Navbarcom



// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// export default function Resourcecom() {
//     const[Resources, setResources]=useState(true);
//     const handlehideresource=()=>{
//         setResources(false);
//     }
//   return (
//     <>
//     {Resources && 
//     <div className="w-full h-screen mt-[150px] bg-transparent z-50  fixed " onClick={handlehideresource} >
         
   
//     <div id="resource" className="w-[270px] fixed top-[160px] left-[430px] h-[200px] shadow-md  shadow-gray-200 bg-white">
//        <div className="w-[200px] ml-3">
//    <Link to="/blog"><div className="flex px-4 mt-6 space-x-3 hover:-translate-y-1">  <span><img src="./icons8-blogs-64.png" alt="" className='lg:h-10 h-8 -mt-1  ml-2'/></span>
//             <h1 className="font-semibold text-[14px] pt-1 ">
//             Blogs
//             </h1></div>
//             </Link> 
//      <div className="w-[100px] h-[2px] border-2 border-blue-600 ml-7 mt-4"></div>
//             <div className="flex px-4 mt-6 space-x-3 hover:-translate-y-1">  <span><img src="./icons8-bookmark-48.png" alt="" className='lg:h-10 h-8 -mt-1  ml-2'/></span>
//             <h1 className="font-semibold text-[14px] pt-1">
//             Use Cases
//             </h1></div>
          
          
//        </div>
//     </div>
  
//     </div>
//       }
//     </>
//   )
// }
import React from 'react';
import { Link } from 'react-router-dom';
import { FaTimes, FaDollarSign, FaWhatsapp } from 'react-icons/fa';
import { CSSTransition } from 'react-transition-group';
import './Navbarcom.css'; // Ensure the path is correct

export default function Navbarcom({ onClose }) {
  const [isVisible, setIsVisible] = React.useState(true);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 500); // Match this duration with CSS transition duration
  };

  return (
    <CSSTransition
      in={isVisible}
      timeout={500}
      classNames="fade"
      unmountOnExit
      onExited={onClose}
    >
      <div className="fixed inset-x-0 top-[130px] flex justify-center" onClick={handleClose}>
        <div
          id="navbar"
          className="relative w-full max-w-xl bg-white rounded-lg shadow-lg overflow-hidden"
        >
          {/* Close Button */}
          <button
            aria-label="Close"
            className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 transition-colors"
            onClick={handleClose}
          >
            <FaTimes className="text-2xl" />
          </button>

          <div className="p-6 flex gap-12">
            {/* SMS Pricing Link */}
            <div>
            <Link to="/smspricing">
              <div
                className="flex items-center space-x-3 mb-4 hover:-translate-y-1 transition-transform cursor-pointer"
                onClick={handleClose} // Close popup on click
              >
                <FaDollarSign className="text-[#007854] text-2xl" />
                <h1 className="text-lg font-semibold text-[#007854]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  SMS Pricing
                </h1>
              </div>
            </Link>
            <div className="w-[150px] h-[2px] bg-[#007854] mb-4"></div>
            </div>
            
            {/* WhatsApp Pricing Link */}
            <Link to="/whatsapp-pricing">
              <div
                className="flex items-center space-x-3 mb-4 hover:-translate-y-1 transition-transform cursor-pointer"
                onClick={handleClose} // Close popup on click
              >
                <FaWhatsapp className="text-[#1f5515] text-2xl" />
                <h1 className="text-lg font-semibold text-[#1f5515]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  WhatsApp Pricing
                </h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
}


