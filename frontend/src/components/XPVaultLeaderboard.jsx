
import React from 'react';

export default function XPVaultLeaderboard({ entries = [] }) {
  return (
    <div className="bg-slate-950 border border-slate-700 rounded-xl text-white p-4 w-full max-w-lg">
      <div className="uppercase text-xs text-slate-400 mb-2">🏆 Vault Leaderboard</div>
      <ol className="text-sm space-y-1">
        {entries.map((entry, i) => (
          <li key={i} className="flex justify-between">
            <span>#{i + 1} {entry.name}</span>
            <span className="text-green-400">{entry.xp} XP</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
