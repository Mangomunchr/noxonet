import React from 'react';

export default function SigilUnlockGrid({ sigils }) {
  return (
    <div className="grid grid-cols-4 gap-3 p-4 bg-black rounded-xl border border-gray-700">
      {sigils.map((s, i) => (
        <div
          key={i}
          className={`w-16 h-16 rounded-xl flex items-center justify-center text-xl ${
            s.unlocked ? 'bg-green-600 text-black' : 'bg-gray-800 text-gray-500'
          }`}
        >
          {s.symbol}
        </div>
      ))}
    </div>
  );
}