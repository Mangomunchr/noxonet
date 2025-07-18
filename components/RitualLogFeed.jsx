
import React from 'react';

export default function RitualLogFeed({ rituals }) {
  return (
    <div className="text-xs bg-zinc-800 text-zinc-100 border border-indigo-400 p-3 rounded h-40 overflow-y-scroll font-mono">
      🕯️ Ritual Log:
      <ul className="mt-1">
        {rituals.map((rit, i) => <li key={i}>• {rit}</li>)}
      </ul>
    </div>
  );
}
