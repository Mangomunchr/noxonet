import React from 'react';

export default function VaultBar({ xp = 500, goal = 1000 }) {
  const percent = Math.min((xp / goal) * 100, 100);

  return (
    <div className="mt-4">
      <div className="text-xs text-gray-300 mb-1">Vault XP: {xp} / {goal}</div>
      <div className="w-full bg-gray-700 rounded h-4 overflow-hidden">
        <div
          className="h-full bg-green-500 transition-all duration-500 ease-in-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
