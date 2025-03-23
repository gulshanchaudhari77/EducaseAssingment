// LoginPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
  // State to handle email and password inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh

    // Store email and password in localStorage
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    alert('Data stored in localStorage!');

    // You could redirect or perform another action here after storing data
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Signin to your PopX account</h2>
        <p className="text-gray-500 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-purple-600 font-semibold mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email} // Controlled input
              onChange={(e) => setEmail(e.target.value)} // Update state on input
              placeholder="Enter email address"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-purple-600 font-semibold mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password} // Controlled input
              onChange={(e) => setPassword(e.target.value)} // Update state on input
              placeholder="Enter password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

         <Link to='/AccountSettings'>
         <button
            type="submit"
            className="w-full bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400"
          >
            Login
          </button>
         </Link> 
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
