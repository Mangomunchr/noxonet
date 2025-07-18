
import React from 'react';

export default function VaultStreakMeter({ streak = 4, maxStreak = 7 }) {
  return (
    <div className="bg-purple-900 p-4 rounded border border-purple-700 text-white">
      <div className="uppercase text-sm text-purple-300 mb-2">🔥 Vault Streak</div>
      <div className="flex space-x-1">
        {[...Array(maxStreak)].map((_, i) => (
          <div
            key={i}
            className={\`w-6 h-6 rounded-full \${i < streak ? 'bg-orange-400' : 'bg-gray-700'}\`}
            title={\`Streak \${i + 1}\`}
          />
        ))}
      </div>
      <div className="mt-2 text-xs text-purple-200">+{streak * 5}% XP Boost</div>
    </div>
  );
}
