import React from 'react';
import { Link } from 'react-router-dom';
import { FaTimes, FaBook, FaBookmark } from 'react-icons/fa';
import { CSSTransition } from 'react-transition-group';
import './Resourcecom.css'; // Ensure the path is correct

export default function Resourcecom({ onClose }) {
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
          id="resource"
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
            {/* Blog Link */}
            <div>
            <Link to="/blogs">
              <div
                className="flex items-center space-x-3 mb-4 hover:-translate-y-1 transition-transform cursor-pointer"
                onClick={handleClose} // Close popup on click
              >
                <FaBook className="text-[#007854] text-2xl" />
                <h1 className="text-lg font-semibold text-[#007854]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Blogs
                </h1>
              </div>
            </Link>
            <div className="w-[100px] h-[2px] bg-[#007854] mb-4"></div>
            </div>

            {/* Use Cases Link */}
            <Link to="/use-cases">
              <div
                className="flex items-center space-x-3 mb-4 hover:-translate-y-1 transition-transform cursor-pointer"
                onClick={handleClose} // Close popup on click
              >
                <FaBookmark className="text-[#1E3F96] text-2xl" />
                <h1 className="text-lg font-semibold text-[#1E3F96]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Use Cases
                </h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
}
