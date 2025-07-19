import React from 'react';

export default function StreakFlareMeter({ streak }) {
  const strength = Math.min(100, streak);
  const color = strength > 50 ? 'bg-orange-500' : 'bg-gray-600';

  return (
    <div className="mt-2">
      <div className="text-xs text-white mb-1">🔥 Streak Flare</div>
      <div className="w-full bg-gray-700 h-2 rounded">
        <div className={`h-2 rounded ${color}`} style={{ width: strength + "%" }}></div>
      </div>
    </div>
  );
}