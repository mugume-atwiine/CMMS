import React, { useState, useEffect } from 'react';
import AuthPage from './AuthPage';
import axios from 'axios';

const Dashboard = ({ user, onLogout }) => (
  <div>
    <h2>Welcome, {user.name} ({user.role})</h2>
    <button onClick={onLogout}>Logout</button>
    {/* Add protected content here */}
  </div>
);

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('http://localhost:5000/api/users/me', {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => setUser(res.data))
      .catch(() => setUser(null));
    }
  }, []);

  const handleLogin = (user) => setUser(user);
  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return user ? <Dashboard user={user} onLogout={handleLogout} /> : <AuthPage onAuth={handleLogin} />;
};

export default App;
