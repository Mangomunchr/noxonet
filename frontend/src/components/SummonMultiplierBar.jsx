import React from 'react';

export default function SummonMultiplierBar({ level }) {
  const max = 5;
  return (
    <div className="flex items-center space-x-1">
      {[...Array(max)].map((_, i) => (
        <div
          key={i}
          className={`w-6 h-3 rounded-sm ${
            i < level ? 'bg-green-400' : 'bg-gray-700'
          }`}
        />
      ))}
      <span className="ml-2 text-sm text-green-300">{level}x</span>
    </div>
  );
}