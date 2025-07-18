
import React from 'react';
export default function XPTracker({ level, xp }) {
  return (
    <div className="mt-4 bg-[#111] p-4 rounded-lg">
      <p className="text-green-300">📊 XP Progress</p>
      <div className="w-full bg-gray-800 h-4 rounded overflow-hidden">
        <div className="bg-green-400 h-4" style={{ width: `${xp}%` }}></div>
      </div>
      <p className="text-sm text-gray-400">NodeMonk Rank: {level}</p>
    </div>
  );
}
