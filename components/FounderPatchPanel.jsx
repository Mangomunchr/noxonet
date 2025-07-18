import React, { useState } from 'react';

const FounderPatchPanel = () => {
  const [message, setMessage] = useState(null);

  const handleOverride = (type) => {
    fetch('/api/founder-patch', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ command: type })
    })
      .then(res => res.json())
      .then(data => setMessage(data.message));
  };

  return (
    <div className="bg-black text-white border border-yellow-600 p-4 rounded-xl">
      <h3 className="text-lg font-bold mb-2">🛠️ Founder Patch Panel</h3>
      <div className="space-x-2 mb-2">
        <button onClick={() => handleOverride('unlockChaos')} className="bg-yellow-600 hover:bg-yellow-700 px-3 py-1 rounded">Unlock Chaos</button>
        <button onClick={() => handleOverride('resetCooldowns')} className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded">Reset Cooldowns</button>
        <button onClick={() => handleOverride('boostXP')} className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded">Boost XP</button>
      </div>
      {message && <p className="text-sm italic text-yellow-300">{message}</p>}
    </div>
  );
};

export default FounderPatchPanel;