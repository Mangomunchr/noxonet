import React, { useState } from 'react';

export default function ChaosRitualPopup({ userId }) {
  const [unlocked, setUnlocked] = useState(false);

  const unlockChaos = async () => {
    const res = await fetch('http://localhost:3000/api/ritual/chaos-unlock', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId }),
    });
    const data = await res.json();
    if (data.success) {
      setUnlocked(true);
    }
  };

  return (
    <div className="bg-black text-white p-4 border border-purple-500 rounded-xl">
      <h2 className="text-purple-400 font-bold">🌪️ Chaos Ritual</h2>
      {!unlocked ? (
        <button onClick={unlockChaos} className="mt-3 bg-purple-500 px-4 py-2 rounded hover:bg-purple-400">
          Unlock
        </button>
      ) : (
        <p className="mt-3 text-green-300">Chaos Unlocked! 🌪️</p>
      )}
    </div>
  );
}