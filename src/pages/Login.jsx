import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Phone, ShieldCheck, ArrowRight, Eye, EyeOff } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import loginImage from '../assets/DIGINTRA Login Panel_13837.jpg';


export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const backendUrl = "http://localhost:5000/api/auth";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const endpoint = `${backendUrl}/login`;
    const payload = { email: formData.email, password: formData.password };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();


      if (!response.ok) throw new Error(data.error || data.message || "Authentication failed");

      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.user.role);
      toast.success("Login successful!");

        console.log("User role:", data.user.role);


      if (data.user.role === "admin") {
        navigate("/admin-dashboard");
      } else if (data.user.role === "editor") {
        navigate("/editor-dashboard");
      } else {
        navigate("/user-dashboard");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 relative px-4 sm:px-6 lg:px-8 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row relative z-10"
      >
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 hidden md:block relative min-h-[500px]">
           <img src={loginImage} alt="Login Panel" className="absolute inset-0 w-full h-full object-cover" />
        </div>

        {/* Right Side - Form Container */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">

          {/* Header Area */}
          <div className="px-8 pt-8 pb-6 bg-gradient-to-br from-green-600 to-green-800 text-center relative overflow-hidden">
            {/* Decorative background circle */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>

            <h2 className="text-3xl font-bold text-white mb-2 relative z-10 tracking-tight">
              Welcome Back
            </h2>
            <p className="text-green-100 text-sm font-medium relative z-10">
              Sign in to access your dashboard
            </p>
          </div>

          <div className="px-8 py-8">
            {error && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-6 p-3 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm font-medium rounded-r-md"
              >
                {error}
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <Mail size={18} />
                  </div>
                  <input id="email" type="email" placeholder="you@example.com" required className="w-full pl-10 pr-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all outline-none text-gray-700" onChange={handleChange} />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <Lock size={18} />
                  </div>
                  <input id="password" type={showPassword ? "text" : "password"} placeholder="••••••••" required className="w-full pl-10 pr-10 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all outline-none text-gray-700" onChange={handleChange} />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors">
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-green-500 text-white p-3 rounded-xl hover:from-green-700 hover:to-green-600 font-bold tracking-wide transition-all shadow-lg shadow-green-500/30 mt-6"
                type="submit"
              >
                Sign In
                <ArrowRight size={18} />
              </motion.button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
