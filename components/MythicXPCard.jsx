
import React from 'react';

export default function MythicXPCard({ xp, rank }) {
  return (
    <div className="bg-gradient-to-br from-purple-800 to-black p-3 rounded-xl text-white text-sm shadow border border-purple-500">
      ✨ Mythic XP: <strong>{xp}</strong><br />
      🏆 Rank: <span className="font-mono text-lg text-yellow-300">{rank}</span>
    </div>
  );
}
