import React, { useState } from 'react';

export default function LoginScreen({ onLogin }) {
  const [input, setInput] = useState('');

  const submit = () => {
    const userId = input.trim().toLowerCase().replace(/[^a-z0-9]/g, '');
    if (userId) {
      localStorage.setItem('userId', userId);
      onLogin(userId);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white space-y-4">
      <div className="text-2xl font-bold">Enter the Vault</div>
      <input
        type="text"
        placeholder="Enter your Vault ID"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-600"
      />
      <button onClick={submit} className="bg-green-500 px-4 py-2 rounded hover:bg-green-400">
        Begin Ritual
      </button>
    </div>
  );
}