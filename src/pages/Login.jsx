import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Phone, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "", password: "", phone: "", auth: "", role: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const backendUrl = "http://localhost:5000/api/auth";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const endpoint = isLogin ? `${backendUrl}/login` : `${backendUrl}/signup`;
    const payload = isLogin
      ? { email: formData.email, password: formData.password, role: formData.role }
      : { name: formData.name, email: formData.email, password: formData.password, phone: formData.phone, auth: formData.auth, role: formData.role };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();


      if (!response.ok) throw new Error(data.error || "Authentication failed");

      if (isLogin) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.user.role);
        alert("Login successful!");

        console.log("User role:", data.user.role);


        if (data.user.role === "admin") {
          navigate("/admin-dashboard");
        } else {
          navigate("/user-dashboard");
        }
      } else {
        alert("Sign-up successful! Please log in.");
        setIsLogin(true);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop')] bg-cover bg-center relative px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md relative z-10 pt-20 pb-12"
      >
        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-white/20 mt-8">

          {/* Header Area */}
          <div className="px-8 pt-8 pb-6 bg-gradient-to-br from-green-600 to-green-800 text-center relative overflow-hidden">
            {/* Decorative background circle */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>

            <h2 className="text-3xl font-bold text-white mb-2 relative z-10 tracking-tight">
              {isLogin ? "Welcome Back" : "Create Account"}
            </h2>
            <p className="text-green-100 text-sm font-medium relative z-10">
              {isLogin ? "Sign in to access your dashboard" : "Join us and start your journey"}
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
              <AnimatePresence mode="popLayout">
                {!isLogin && (
                  <motion.div
                    key="signup-fields"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-5"
                  >
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                          <User size={18} />
                        </div>
                        <input id="name" type="text" placeholder="John Doe" required className="w-full pl-10 pr-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all outline-none text-gray-700" onChange={handleChange} />
                      </div>
                    </div>
                    <div>
                      {/* <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                          <Phone size={18} />
                        </div>
                        <input id="phone" type="text" placeholder="+1 (555) 000-0000" required className="w-full pl-10 pr-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all outline-none text-gray-700" onChange={handleChange} />
                      </div> */}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

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
                  <input id="password" type="password" placeholder="••••••••" required className="w-full pl-10 pr-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all outline-none text-gray-700" onChange={handleChange} />
                </div>
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-semibold text-gray-700 mb-1">Account Role</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <ShieldCheck size={18} />
                  </div>
                  <select id="role" className="w-full pl-10 pr-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all outline-none text-gray-700 appearance-none" onChange={handleChange} required>
                    <option value="" disabled selected>Select your role</option>
                    {/* <option value="user">User</option> */}
                    <option value="editor">Editor</option>
                    <option value="admin">Admin</option>
                  </select>
                  {/* Custom dropdown arrow */}
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-green-500 text-white p-3 rounded-xl hover:from-green-700 hover:to-green-600 font-bold tracking-wide transition-all shadow-lg shadow-green-500/30 mt-6"
                type="submit"
              >
                {isLogin ? "Sign In" : "Create Account"}
                <ArrowRight size={18} />
              </motion.button>
            </form>

            <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col items-center">
              <p className="text-sm text-gray-500 mb-2">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
              </p>
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-green-600 font-bold hover:text-green-800 hover:underline transition-colors"
              >
                {isLogin ? "Create a new account" : "Sign in to existing account"}
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
