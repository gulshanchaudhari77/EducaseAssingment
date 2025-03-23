// WelcomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

function WelcomePage() {
  return (
    <div className="min-h-screen flex items-end justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome to PopX</h2>
        <p className="text-gray-500 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
       <Link to='/account'>
       <button className="bg-purple-600 text-white py-2 px-4 rounded-lg w-full mb-4 hover:bg-purple-700">
          Create Account
        </button>
       </Link> 
       
       <Link to='/login'>
       <button className="bg-purple-100 text-purple-600 py-2 px-4 rounded-lg w-full hover:bg-purple-200">
          Already Registered? Login
        </button>
       </Link> 
      </div>
    </div>
  );
}

export default WelcomePage;
