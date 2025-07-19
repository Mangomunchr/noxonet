
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [rendarId, setRendarId] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (rendarId.trim()) {
      localStorage.setItem('rendarId', rendarId.trim());
      navigate('/dashboard');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <h1 className="text-4xl mb-4 text-green-400">Farpy Login</h1>
      <input
        type="text"
        value={rendarId}
        onChange={(e) => setRendarId(e.target.value)}
        placeholder="Enter your Rendar ID"
        className="p-2 rounded text-black w-64"
      />
      <button
        onClick={handleLogin}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
      >
        Enter
      </button>
    </div>
  );
}

export default Login;
