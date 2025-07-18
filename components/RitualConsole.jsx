import React, { useState } from 'react';

const RitualConsole = ({ onRitualStart }) => {
  const [ritualType, setRitualType] = useState('XP Surge');

  return (
    <div className="bg-black text-white p-4 rounded-xl border border-green-600">
      <h3 className="text-lg font-bold mb-3">Ritual Console</h3>
      <select
        className="bg-gray-800 p-2 mb-3 w-full"
        value={ritualType}
        onChange={(e) => setRitualType(e.target.value)}
      >
        <option value="XP Surge">XP Surge</option>
        <option value="Cooldown Cleanse">Cooldown Cleanse</option>
        <option value="Mythic Ping">Mythic Ping</option>
      </select>
      <button
        onClick={() => onRitualStart(ritualType)}
        className="bg-green-600 hover:bg-green-700 text-white w-full p-2 rounded-lg"
      >
        Start Ritual
      </button>
    </div>
  );
};

export default RitualConsole;