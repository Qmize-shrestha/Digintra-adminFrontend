import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "", password: "", phone: "", auth: "", role: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const backendUrl = "http://localhost:3000/api/auth";

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
       

        if (data.role === "admin") {
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
    <div className="flex items-center justify-center min-h-screen bg-gray-200 ">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg mt-28 shadow-md">
        <h2 className="text-xl font-semibold text-center text-gray-700 mb-4">
          {isLogin ? "Login" : "Sign Up"}
        </h2>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <form className="" onSubmit={handleSubmit}>
          {!isLogin && (
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input id="name" type="text" placeholder="Your Name" required className="w-full p-2 border rounded" onChange={handleChange} />
            </div>
          )}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input id="email" type="email" placeholder="Your Email" required className="w-full p-2 border rounded" onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input id="password" type="password" placeholder="Your Password" required className="w-full p-2 border rounded" onChange={handleChange} />
          </div>
          {!isLogin && (
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input id="phone" type="text" placeholder="Your Phone Number" required className="w-full p-2 border rounded" onChange={handleChange} />
            </div>
          )}
          {!isLogin && (
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
              <select id="role" className="w-full p-2 border rounded" onChange={handleChange} required>
                <option value="">Select Role</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          )}
          {isLogin && (
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
              <select id="role" className="w-full p-2 border rounded" onChange={handleChange} required>
                <option value="">Select Role</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          )}
          <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mt-2" type="submit">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <p className="mt-3 text-center text-sm text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"} 
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-500 hover:underline ml-1"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}
