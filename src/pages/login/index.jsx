import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    const credentials = { username: email, password };

    fetch('https://fakestoreapi.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Login failed');
        }
        return response.json();
      })
      .then((data) => {
        localStorage.setItem('auth_token', data.token);
        setSuccess('Login successful!');
        setError('');
        navigate('/');
      })
      .catch(() => {
        setError('Invalid email or password.');
        setSuccess('');
      });
  };

  const inputClass =
    'w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm sm:text-base';
  const buttonClass =
    'w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition text-sm sm:text-base';

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-6 sm:p-8 rounded-md shadow-md w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-sm max-w-[90%]">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-4">Login</h2>
        <p className="text-center text-gray-500 mb-6 text-sm sm:text-base">Login using your credentials.</p>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        {success && <p className="text-green-500 text-sm mb-4">{success}</p>}

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Username"
              className={inputClass}
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className={inputClass}
              required
            />
          </div>

          <button type="submit" className={buttonClass}>
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t have an Account?{' '}
          <a href="#" className="text-pink-500 hover:underline">
            Create account
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
