
import React from 'react';

export default function ChronoGrid() {
  return (
    <div className="relative h-96 w-full overflow-hidden bg-black grid place-items-center text-white">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 animate-pulse"></div>
      <div className="z-10 text-center">
        <h1 className="text-4xl font-bold">🕒 Chrono Grid</h1>
        <p className="text-sm text-slate-300">A flashpoint of computation echoing across time.</p>
      </div>
    </div>
  );
}
