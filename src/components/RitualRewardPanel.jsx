import React, { useState } from 'react';

export default function RitualRewardPanel() {
  const [xp, setXp] = useState(0);
  const [ritual, setRitual] = useState('');

  const performRitual = () => {
    const gained = Math.floor(Math.random() * 100) + 1;
    setXp(xp + gained);
    setRitual(`🌀 Ritual complete! +${gained} XP`);
  };

  return (
    <div className="p-4 rounded-xl bg-black border border-blue-500 text-blue-300 space-y-2">
      <div className="text-xl font-bold text-blue-400">Ritual Reward Engine</div>
      <button
        onClick={performRitual}
        className="px-4 py-2 rounded border border-blue-500 hover:bg-blue-600 hover:text-white"
      >
        Perform Ritual
      </button>
      <div>{ritual}</div>
      <div>Total XP: {xp}</div>
    </div>
  );
}
