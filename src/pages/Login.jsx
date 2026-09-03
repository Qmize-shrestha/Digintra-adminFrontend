import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Phone, ShieldCheck, ArrowRight, Eye, EyeOff } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-hot-toast';
import loginImage from '../assets/DIGINTRA Login Panel_13837.jpeg';

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(null);
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
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-50">
      {/* Dynamic Background Orbs */}
      <div className="absolute top-[10%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-emerald-400/20 blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[35vw] h-[35vw] rounded-full bg-cyan-400/20 blur-[120px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-[30%] right-[20%] w-[20vw] h-[20vw] rounded-full bg-teal-400/15 blur-[100px]"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-[1000px] rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row relative z-10 m-4 lg:m-8 shadow-[0_20px_60px_rgba(8,_112,_184,_0.1)] border border-white/60 bg-white/60 backdrop-blur-2xl"
      >
        {/* Left Side - Image Container */}
        <div className="w-full md:w-[55%] hidden md:block bg-white/40 p-3">
          <div className="w-full h-full rounded-[1.8rem] overflow-hidden relative group shadow-sm bg-white">
             <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none"></div>
             <img src={loginImage} alt="Login Panel" className="w-full h-full object-cover object-center transform group-hover:scale-[1.03] transition-transform duration-[1.5s] ease-out" />
          </div>
        </div>

        {/* Right Side - Form Container */}
        <div className="w-full md:w-[45%] flex flex-col justify-center px-8 sm:px-12 lg:px-14 py-16 relative">
          
          <div className="mb-10 relative">
             <motion.div 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.2, duration: 0.6 }}
             >
               <h2 className="text-[2.5rem] leading-[1.1] font-extrabold text-slate-800 tracking-tight mb-3">
                 Welcome <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">Back</span>
               </h2>
               <p className="text-slate-500 font-medium text-sm sm:text-base">Sign in to access your secure dashboard.</p>
             </motion.div>
          </div>

          <AnimatePresence mode="wait">
            {error && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -10 }}
                animate={{ opacity: 1, height: 'auto', y: 0 }}
                exit={{ opacity: 0, height: 0, y: -10 }}
                className="mb-6 p-4 bg-red-50/90 backdrop-blur-md border border-red-100/50 text-red-600 text-sm font-semibold rounded-2xl flex items-center gap-3 shadow-sm"
              >
                <ShieldCheck className="flex-shrink-0 text-red-500" size={20} />
                {error}
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            <motion.div 
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.5 }}
              className="relative group"
            >
              <label htmlFor="email" className={`block text-[13px] font-bold uppercase tracking-wider mb-2 transition-colors duration-300 ${isFocused === 'email' ? 'text-emerald-600' : 'text-slate-500'}`}>Email Address</label>
              <div className="relative">
                <div className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors duration-300 ${isFocused === 'email' ? 'text-emerald-500' : 'text-slate-400'}`}>
                  <Mail size={20} />
                </div>
                <input 
                  id="email" type="email" placeholder="you@example.com" required 
                  onFocus={() => setIsFocused('email')} onBlur={() => setIsFocused(null)}
                  onChange={handleChange} 
                  className="w-full pl-12 pr-4 py-3.5 bg-white/70 border-2 border-slate-200/60 rounded-2xl focus:ring-0 focus:border-emerald-400 focus:bg-white transition-all duration-300 outline-none text-slate-700 font-medium shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-emerald-300 placeholder:text-slate-300" 
                />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.5 }}
              className="relative group"
            >
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="password" className={`block text-[13px] font-bold uppercase tracking-wider transition-colors duration-300 ${isFocused === 'password' ? 'text-emerald-600' : 'text-slate-500'}`}>Password</label>
              </div>
              <div className="relative">
                <div className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors duration-300 ${isFocused === 'password' ? 'text-emerald-500' : 'text-slate-400'}`}>
                  <Lock size={20} />
                </div>
                <input 
                  id="password" type={showPassword ? "text" : "password"} placeholder="••••••••" required 
                  onFocus={() => setIsFocused('password')} onBlur={() => setIsFocused(null)}
                  onChange={handleChange} 
                  className="w-full pl-12 pr-12 py-3.5 bg-white/70 border-2 border-slate-200/60 rounded-2xl focus:ring-0 focus:border-emerald-400 focus:bg-white transition-all duration-300 outline-none text-slate-700 font-medium shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-emerald-300 placeholder:text-slate-300" 
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-emerald-600 transition-colors">
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.5 }} className="pt-4">
              <button
                className="group relative w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-4 rounded-2xl font-bold text-lg tracking-wide transition-all duration-300 shadow-[0_8px_25px_rgba(16,_185,_129,_0.35)] hover:shadow-[0_15px_35px_rgba(16,_185,_129,_0.45)] hover:-translate-y-1 overflow-hidden"
                type="submit"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                <span className="relative z-10 flex items-center gap-2">
                  Sign In
                  <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                </span>
              </button>
            </motion.div>
          </form>

        </div>
      </motion.div>
    </div>
  );
}
