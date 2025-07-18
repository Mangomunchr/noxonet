
import React from 'react';

export default function LiveXPMeter({ currentXP, nextLevelXP }) {
  const percent = Math.min((currentXP / nextLevelXP) * 100, 100);
  return (
    <div className="p-2 bg-zinc-900 rounded-lg border border-purple-600 text-white text-xs">
      <div className="flex justify-between font-mono">
        <span>XP: {currentXP}</span>
        <span>Lvl Up: {nextLevelXP}</span>
      </div>
      <div className="w-full bg-zinc-700 h-2 rounded mt-1 overflow-hidden">
        <div
          className="bg-purple-500 h-2 transition-all duration-300"
          style={{ width: \`\${percent}%\` }}
        />
      </div>
    </div>
  );
}
