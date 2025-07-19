
import React from 'react';
export default function XPTracker({ xp }) {
  const level = Math.floor(xp / 100);
  const progress = xp % 100;
  return (
    <div className="w-full bg-gray-800 rounded overflow-hidden mt-4">
      <div className="bg-green-500 h-4" style={{ width: `${progress}%` }}></div>
      <p className="text-white text-sm mt-1">Level {level} - {progress}/100 XP</p>
    </div>
  );
}
