import React, { useEffect, useState } from 'react';

function AccountSettings() {
  const [userData, setUserData] = useState({
    fullName: '',
    email: '',
  });

  useEffect(() => {
    //  user data from localStorage backend use nhi kr to us ke liye
    const storedData = JSON.parse(localStorage.getItem('popxAccountData'));
    if (storedData) {
      setUserData({
        fullName: storedData.fullName,
        email: storedData.email,
      });
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Account Settings</h2>

        <div className="flex items-center mb-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5w4LizlBVfzt25t7RFfUQIImqgFmUWtol6w&s"
            alt="User Avatar"
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <h3 className="text-xl font-semibold">{userData.fullName || 'John Doe'}</h3>
            <p className="text-gray-600">{userData.email || 'example@email.com'}</p>
          </div>
        </div>

        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.
        </p>
      </div>
    </div>
  );
}

export default AccountSettings;
