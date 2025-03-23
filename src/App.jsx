import React from 'react';
import WelcomePage from './components/WelcomePage';
import LoginPage from './components/LoginPage';
import { Route, Routes } from 'react-router-dom';
import CreateAccount from './components/CreateAccount';
import AccountSettings from './components/AccountSettings';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<WelcomePage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path='/account' element={<CreateAccount/>}/>

        <Route path='/AccountSettings' element={<AccountSettings/>}/>


      </Routes>
    </div>
  );
};

export default App;
