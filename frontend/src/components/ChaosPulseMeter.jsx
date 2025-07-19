
import React from 'react';

export default function ChaosPulseMeter({ value }) {
  return (
    <div className="text-xs text-red-400 font-mono">
      💓 Chaos Pulse: {value} bpm
      <div className="bg-red-900 h-2 mt-1 w-full rounded">
        <div className="bg-red-500 h-2" style={{ width: `${value}%` }}></div>
      </div>
    </div>
  );
}
