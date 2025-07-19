import React from 'react';

const roles = ["Renderling", "Rendar", "NodeMonk", "Mythic"];

export default function RolePathSelector({ onSelect }) {
  return (
    <div className="p-4 text-white">
      <h3 className="text-lg font-bold text-pink-400">🧭 Choose Your Role Path</h3>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {roles.map(role => (
          <button
            key={role}
            onClick={() => onSelect(role)}
            className="bg-gray-800 hover:bg-cyan-600 p-3 rounded"
          >
            {role}
          </button>
        ))}
      </div>
    </div>
  );
}