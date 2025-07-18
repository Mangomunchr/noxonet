import React, { useState } from 'react';

export default function RitualTrigger() {
  const [message, setMessage] = useState('');
  const userId = '6b1c17e5-7a21-475b-9d78-cce7afba9d87';

  const handleRitual = async () => {
    setMessage('Casting chaos ritual...');
    try {
      const res = await fetch('http://localhost:3001/api/ritual', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId,
          streakAtCast: 4,
          mangoLevel: 2
        })
      });
      const data = await res.json();
      if (data.success) {
        setMessage('🌀 Chaos ritual cast logged!');
      } else {
        setMessage(`❌ Failed: ${data.error || 'unknown error'}`);
      }
    } catch (err) {
      console.error(err);
      setMessage('❌ Ritual server error.');
    }
  };

  return (
    <div className="bg-gray-900 p-4 rounded-xl text-white shadow-md">
      <h2 className="text-lg font-bold text-pink-400">🌪️ Chaos Ritual Trigger</h2>
      <button onClick={handleRitual} className="mt-2 bg-pink-600 px-4 py-2 rounded hover:bg-pink-700">
        🌩️ Send Chaos Ritual
      </button>
      {message && <p className="text-sm text-gray-300 mt-2">{message}</p>}
    </div>
  );
}
