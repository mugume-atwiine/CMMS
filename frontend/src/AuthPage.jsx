import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

const AuthPage = ({ onAuth }) => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      <div>
      <h1>Welcome to the Auth Page</h1>
    </div>
    
      <button onClick={() => setShowLogin(true)}>Login</button>
      <button onClick={() => setShowLogin(false)}>Register</button>
      {showLogin ? <Login onLogin={onAuth} /> : <Register onRegister={() => setShowLogin(true)} />}
    </div>
    
  );
};

export default AuthPage;
