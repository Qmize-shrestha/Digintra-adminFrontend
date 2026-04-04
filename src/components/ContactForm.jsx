import React from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full min-h-[420px] bg-gradient-to-tr from-indigo-100 via-green-100 to-orange-100 
                border-2 border-blue-800 border-dashed rounded-xl shadow-lg 
                px-6 py-8 box-border flex flex-col justify-between"
    >
      <h2
        className="text-[21px] lg:text-[32px] font-bold text-center text-[#0053b7] mb-8"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        Get in touch for{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-indigo-600 to-pink-500">
          SMS Panel
        </span>
      </h2>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="mt-1 block w-full rounded-xl border border-gray-300 shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Your Email"
            className="mt-1 block w-full rounded-xl border border-gray-300 shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="Your Phone Number"
            className="mt-1 block w-full rounded-xl border border-gray-300 shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Company Name
          </label>
          <input
            type="text"
            placeholder="Company Name"
            className="mt-1 block w-full rounded-xl border border-gray-300 shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="md:col-span-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="mt-4 bg-gradient-to-tr from-[#3e8646] to-[#2fac13] text-white font-bold py-3 px-6 rounded-xl shadow-lg w-full"
          >
            Submit
          </motion.button>
        </div>
      </form>

      <p
        className="text-center mt-6 text-sm text-gray-600 font-medium"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        ---<br />
        Best Regards,
      </p>
    </motion.div>
  );
};

export default ContactForm;
