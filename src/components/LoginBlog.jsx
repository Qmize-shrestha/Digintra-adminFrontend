import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';

function LoginBlog() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/login-blog', formData);
            const { token, user } = response.data;

            // Try to get userId from user object
            const userId = user?._id || user?.id;

            // Store in localStorage
            localStorage.setItem('blogToken', token);
            localStorage.setItem('blogUserEmail', user.email);
            localStorage.setItem('blogUsername', user.username);

            if (userId) {
                localStorage.setItem('userId', userId);
                console.log('User ID:', userId);
            } else {
                console.warn('User ID not found in response');
            }

            navigate(`/blogeditor/${userId}`);
        } catch (error) {
            console.error('Login failed:', error);
            toast.error(error.response?.data?.error || 'Login failed');
        }
    };

    return (
        <div className="max-w-md mx-auto pt-40 mb-12">
            <h2 className="text-4xl font-bold mb-4">Log in</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="email" className="block font-medium">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input mt-1 block w-full border border-gray-300 p-2 rounded"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block font-medium">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="form-input mt-1 block w-full border border-gray-300 p-2 rounded"
                        required
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
                    >
                        Log in
                    </button>
                </div>
            </form>
        </div>
    );
}

export default LoginBlog;
