import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignupBlog = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/signup-blog', form);
      setAlert({ type: 'success', message: res.data.message });
      setTimeout(() => navigate('/loginblog'), 1500);
    } catch (err) {
      setAlert({ type: 'error', message: err.response?.data?.error || 'Signup failed' });
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.title}>Blog Signup</h2>

        {alert && (
          <div style={{ color: alert.type === 'error' ? 'red' : 'green', fontWeight: 'bold' }}>
            {alert.message}
          </div>
        )}

        <input
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Register</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    marginTop: '120px', // Add space to avoid being hidden by header
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 'calc(100vh - 120px)', // Make sure it fills the screen
    padding: '20px',
  },
  form: {
    width: '100%',
    maxWidth: '400px',
    backgroundColor: '#f9f9f9',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  title: {
    fontSize: '24px',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: '10px',
  },
  input: {
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  button: {
    padding: '10px',
    backgroundColor: '#2563eb',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
  },
};

export default SignupBlog;
