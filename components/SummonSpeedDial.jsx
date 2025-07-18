
import React from 'react';

const speeds = [1, 2, 5, 10, 100];

export default function SummonSpeedDial({ onSelect }) {
  return (
    <div className="bg-slate-800 border border-slate-700 p-4 rounded-xl text-white max-w-md">
      <h3 className="text-sm uppercase text-slate-400 mb-2">⚡ Summon Speed</h3>
      <div className="flex gap-2 flex-wrap">
        {speeds.map((x) => (
          <button
            key={x}
            onClick={() => onSelect(x)}
            className="bg-slate-700 hover:bg-slate-600 rounded px-4 py-2 text-sm"
            disabled={x > 10} // cap initial active speeds
          >
            {x}x
          </button>
        ))}
      </div>
    </div>
  );
}
