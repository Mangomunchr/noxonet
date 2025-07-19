import React, { useState } from 'react';

export default function VaultCastTrigger({ userId }) {
  const [status, setStatus] = useState('');

  const castRitual = async () => {
    const res = await fetch('http://localhost:3000/api/ritual/cast', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId })
    });

    const data = await res.json();
    if (res.status === 429) {
      setStatus(`⏳ Cooldown: ${data.remaining}s`);
    } else {
      setStatus(`✨ XP Gained: ${data.xpGained}`);
    }
  };

  return (
    <div className="bg-gray-900 p-4 rounded-xl border border-purple-700 space-y-2">
      <h2 className="text-purple-400 font-bold">🔮 Ritual Cast</h2>
      <button onClick={castRitual} className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-400">
        Cast Ritual
      </button>
      {status && <div className="text-sm text-purple-200">{status}</div>}
    </div>
  );
}