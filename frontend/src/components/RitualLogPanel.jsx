
import React from 'react';

export default function RitualLogPanel({ rituals }) {
  return (
    <div className="bg-zinc-900 border border-fuchsia-600 p-4 rounded-xl space-y-2">
      <h2 className="text-fuchsia-400 font-bold text-md">🪄 Ritual Log</h2>
      {rituals.length === 0 ? (
        <div className="text-zinc-400 italic">No rituals performed yet.</div>
      ) : (
        rituals.map((r, i) => (
          <div key={i} className="text-fuchsia-200">
            {r.timestamp} — <span className="italic">{r.name}</span>
          </div>
        ))
      )}
    </div>
  );
}
