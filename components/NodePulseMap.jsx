
import React from 'react';

export default function NodePulseMap() {
  return (
    <div className="relative w-full h-[400px] bg-gradient-to-br from-black to-slate-900 border border-slate-700 rounded-xl p-4">
      <h3 className="text-slate-200 mb-2 font-bold">🗺️ Node Activity Map</h3>
      <div className="w-full h-full grid grid-cols-6 gap-1">
        {[...Array(36)].map((_, i) => (
          <div
            key={i}
            className={`w-full h-full rounded-md ${
              Math.random() > 0.5 ? 'bg-green-400 animate-pulse' : 'bg-slate-800'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
