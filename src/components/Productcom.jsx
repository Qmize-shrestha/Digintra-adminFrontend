// import React from "react";
// import { Link } from "react-router-dom";
// import { TiLink, TiCode, TiWorld } from "react-icons/ti";
// import { FaEnvelope, FaServer, FaVolumeUp, FaTimes } from "react-icons/fa";
// import { CSSTransition } from 'react-transition-group';
// import { TbDeviceMobileMessage } from "react-icons/tb";
// import { TbLoadBalancer } from "react-icons/tb";
// import ContactForm from './ContactForm'; // adjust path if needed
// import { Dialog } from '@headlessui/react';
// import "./Productcom.css"; // Ensure the path is correct
// import {motion} from 'framer-motion';
// import { useState } from "react";

// export default function Productcom({ onClose }) {
//   const [isVisible, setIsVisible] = React.useState(true);

//   const handleClose = () => {
//     setIsVisible(false);
//     // The onClose callback should be invoked after the exit transition completes
//     setTimeout(() => {
//       onClose();
//     }, 500); // Match this duration with CSS transition duration
//   };

//    const [isOpen, setIsOpen] = useState(false);
//   const [selectedItem, setSelectedItem] = useState('');

//   const openModal = (item) => {
//     setSelectedItem(item);
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//     setSelectedItem('');
//   };

//   return (
//     <CSSTransition
//       in={isVisible}
//       timeout={500}
//       classNames="fade"
//       unmountOnExit
//       onExited={onClose} // Ensures onClose is called after the transition
//     >
//       <div className="fixed inset-x-0 top-[130px] flex justify-center" onClick={handleClose}>
//         <div id="product" className="relative w-full max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden">
//           <button
//             className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 transition-colors"
//             onClick={handleClose}
//           >
//             <FaTimes className="text-2xl" />
//           </button>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
//             {/* Messaging Service */}
//             <div className="p-4 border-r border-gray-200">
//               <div className="flex items-center space-x-3">
//                 <h1 className="text-lg font-semibold text-[#007854]">Messaging Service</h1>
//               </div>
//               <div className="mt-4 border-b border-[#007854] pb-4">
//                 <ul className="space-y-2">
//                   {['/enterprise-messaging', '/transactional-sms', '/business-sms', '/wholesale-messaging'].map((path, index) => (
//                     <Link key={index} to={path}>
//                       <li
//                         className="flex items-center gap- text-[#007854] hover:text-[#005a43] hover:pl-2 transition-all mt-8"
//                         onClick={handleClose}
//                       >
//                         <TbDeviceMobileMessage className="text-[#007854] text-lg mr-2" />
//                         {path.split('/')[1].replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase())}
//                       </li>
//                     </Link>
//                   ))}
//                 </ul>
//               </div>
//             </div>

//             {/* Promotion Channel */}
//             <div className="p-4 border-r border-gray-200">
//               <div className="flex items-center space-x-3">
//                 <h1 className="text-lg font-semibold text-[#f78133]">Promotion Channel</h1>
//               </div>
//               <div className="mt-4 border-b border-[#f78133] pb-4">
//                 <ul className="space-y-2">
//                   {['/promotional-email', '/smtp-server', '/voice-broadcast'].map((path, index) => (
//                     <Link key={index} to={path}>
//                       <li
//                         className="flex items-center gap-2 text-[#f78133] hover:text-[#e6a64d] hover:pl-2 transition-all mt-8"
//                         onClick={handleClose}
//                       >
//                         {index === 0 ? <FaEnvelope className="text-[#f78133] text-lg" /> :
//                         index === 1 ? <FaServer className="text-[#f78133] text-lg" /> :
//                         <FaVolumeUp className="text-[#f78133] text-lg" />}
//                         {path.split('/')[1].replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase())}
//                       </li>
//                     </Link>
//                   ))}
//                 </ul>
//               </div>
//             </div>

//             {/* SMS Gateway Software */}
//            <div className="relative">
//       <div className="p-4 border-r border-gray-200">
//         <div className="flex items-center space-x-3">
//           <h1 className="text-lg font-semibold text-[#1E3C9A]">SMS Gateway Software</h1>
//         </div>
//         <div className="mt-4 border-b border-[#1E3C9A] pb-4">
//           <ul className="space-y-2">
//             {['a2p-sms-hubbing-platform', 'sms-load-balancer'].map((item, index) => (
//               <li
//                 key={index}
//                 onClick={() => openModal(item)}
//                 className="flex items-center gap-2 text-[#1E3C9A] hover:text-[#172554] hover:pl-2 transition-all mt-8 cursor-pointer"
//               >
//                 <TbLoadBalancer className="text-[#1E3C9A] text-lg" />
//                 {item.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase())}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {/* Modal */}
//       <Dialog open={isOpen} onClose={closeModal} className="fixed z-50 inset-0 overflow-y-auto">
//         <div className="flex items-center justify-center min-h-screen px-4">
//           <Dialog.Overlay className="fixed inset-0 bg-black opacity-40" />
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.9 }}
//             className="relative z-50 bg-white rounded-xl shadow-xl w-full max-w-3xl p-6"
//           >
//             <Dialog.Title className="text-xl font-semibold text-[#1E3C9A] mb-4">
//               {selectedItem.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase())}
//             </Dialog.Title>
//             <ContactForm />
//             <button
//               onClick={closeModal}
//               className="absolute top-3 right-4 text-gray-500 hover:text-gray-800 text-xl"
//             >
//               &times;
//             </button>
//           </motion.div>
//         </div>
//       </Dialog>
//     </div>

//             {/* Trending Channel */}
//             <div className="p-4">
//               <div className="flex items-center space-x-3">
//                 <h1 className="text-lg font-semibold text-[#1E3F96]">Trending Channel</h1>
//               </div>
//               <div className="mt-4 border-b border-[#1E3F96] pb-4">
//                 <ul className="space-y-2">
//                   <Link to="/whatsapp-business-api">
//                     <li
//                       className="flex items-center gap-2 text-[#1E3F96] hover:text-[#172554] hover:pl-2 transition-all mt-8"
//                       onClick={handleClose}
//                     >
//                       <TiWorld className="text-[#1E3F96] text-lg" />
//                       WhatsApp Business API
//                     </li>
//                   </Link>
//                   <Link to="/bulk-sms">
//                     <li
//                       className="flex items-center gap-2 text-[#1E3F96] hover:text-[#172554] hover:pl-2 transition-all mt-8"
//                       onClick={handleClose}
//                     >
//                       <TiWorld className="text-[#1E3F96] text-lg" />
//                       Bulk SMS Services
//                     </li>
//                   </Link>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </CSSTransition>
//   );
// }




import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TiWorld } from "react-icons/ti";
import { FaEnvelope, FaServer, FaVolumeUp, FaTimes } from "react-icons/fa";
import { CSSTransition } from "react-transition-group";
import { TbDeviceMobileMessage, TbLoadBalancer } from "react-icons/tb";
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import "./Productcom.css";

export default function Productcom({ onClose }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 500);
  };

  const openModal = (item) => {
    setSelectedItem(item);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedItem("");
  };

  return (
    <CSSTransition
      in={isVisible}
      timeout={500}
      classNames="fade"
      unmountOnExit
    >
      <div className="fixed inset-x-0 top-[130px] flex justify-center z-40">
        <div
          id="product"
          className="relative w-full max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <button
            className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 transition-colors"
            onClick={handleClose}
          >
            <FaTimes className="text-2xl" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
            {/* Messaging Service */}
            <div className="p-4 border-r border-gray-200">
              <h1 className="text-lg font-semibold text-[#007854]">
                Messaging Service
              </h1>
              <div className="mt-4 border-b border-[#007854] pb-4">
                <ul className="space-y-2">
                  {[
                    "/enterprise-messaging",
                    "/transactional-sms",
                    "/business-sms",
                    "/wholesale-messaging",
                  ].map((path, index) => (
                    <Link key={index} to={path}>
                      <li
                        className="flex items-center gap-2 text-[#007854] hover:text-[#005a43] hover:pl-2 transition-all mt-8"
                        onClick={handleClose}
                      >
                        <TbDeviceMobileMessage className="text-[#007854] text-lg" />
                        {path
                          .split("/")[1]
                          .replace(/-/g, " ")
                          .replace(/\b\w/g, (char) => char.toUpperCase())}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>

            {/* Promotion Channel */}
            <div className="p-4 border-r border-gray-200">
              <h1 className="text-lg font-semibold text-[#f78133]">
                Promotion Channel
              </h1>
              <div className="mt-4 border-b border-[#f78133] pb-4">
                <ul className="space-y-2">
                  {[
                    "/promotional-email",
                    "/smtp-server",
                    "/voice-broadcast",
                  ].map((path, index) => (
                    <Link key={index} to={path}>
                      <li
                        className="flex items-center gap-2 text-[#f78133] hover:text-[#e6a64d] hover:pl-2 transition-all mt-8"
                        onClick={handleClose}
                      >
                        {index === 0 ? (
                          <FaEnvelope className="text-[#f78133] text-lg" />
                        ) : index === 1 ? (
                          <FaServer className="text-[#f78133] text-lg" />
                        ) : (
                          <FaVolumeUp className="text-[#f78133] text-lg" />
                        )}
                        {path
                          .split("/")[1]
                          .replace(/-/g, " ")
                          .replace(/\b\w/g, (char) => char.toUpperCase())}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>

            {/* SMS Gateway Software */}
            <div className="relative p-4 border-r border-gray-200">
              <h1 className="text-lg font-semibold text-[#1E3C9A]">
                SMS Gateway Software
              </h1>
              <div className="mt-4 border-b border-[#1E3C9A] pb-4">
                <ul className="space-y-2">
                  {[
                    "a2p-sms-hubbing-platform",
                    "sms-load-balancer",
                  ].map((item, index) => (
                    <li
                      key={index}
                      onClick={() => openModal(item)}
                      className="flex items-center gap-2 text-[#1E3C9A] hover:text-[#172554] hover:pl-2 transition-all mt-8 cursor-pointer"
                    >
                      <TbLoadBalancer className="text-[#1E3C9A] text-lg" />
                      {item
                        .replace(/-/g, " ")
                        .replace(/\b\w/g, (char) => char.toUpperCase())}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Trending Channel */}
            <div className="p-4">
              <h1 className="text-lg font-semibold text-[#1E3F96]">
                Trending Channel
              </h1>
              <div className="mt-4 border-b border-[#1E3F96] pb-4">
                <ul className="space-y-2">
                  <Link to="/whatsapp-business-api">
                    <li
                      className="flex items-center gap-2 text-[#1E3F96] hover:text-[#172554] hover:pl-2 transition-all mt-8"
                      onClick={handleClose}
                    >
                      <TiWorld className="text-[#1E3F96] text-lg" />
                      WhatsApp Business API
                    </li>
                  </Link>
                  <Link to="/bulk-sms">
                    <li
                      className="flex items-center gap-2 text-[#1E3F96] hover:text-[#172554] hover:pl-2 transition-all mt-8"
                      onClick={handleClose}
                    >
                      <TiWorld className="text-[#1E3F96] text-lg" />
                      Bulk SMS Services
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Modal */}
        <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
  <div className="fixed inset-0 flex items-center justify-center px-4 bg-black bg-opacity-40">
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="relative bg-white rounded-2xl shadow-2xl w-full max-w-5xl h-[560px] p-4 sm:p-6 lg:p-8 overflow-hidden"
    >
      <Dialog.Title className="text-xl font-semibold text-[#1E3C9A] mb-4">
        {selectedItem.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase())}
      </Dialog.Title>
      <ContactForm />
      <button
        onClick={closeModal}
        className="absolute top-3 right-4 text-gray-500 hover:text-gray-800 text-xl"
      >
        &times;
      </button>
    </motion.div>
  </div>
</Dialog>
      </div>
    </CSSTransition>
  );
}


