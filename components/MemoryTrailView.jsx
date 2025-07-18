
import React from 'react';

export default function MemoryTrailView({ entries }) {
  return (
    <div className="p-3 bg-zinc-800 border border-blue-400 rounded-xl max-h-40 overflow-y-auto text-xs space-y-1">
      <h3 className="text-blue-300 font-semibold">🧠 Memory Trail</h3>
      {entries.length === 0 ? (
        <div className="italic text-zinc-400">No past jobs or rituals yet.</div>
      ) : (
        entries.map((e, i) => (
          <div key={i} className="text-blue-100">• {e}</div>
        ))
      )}
    </div>
  );
}
