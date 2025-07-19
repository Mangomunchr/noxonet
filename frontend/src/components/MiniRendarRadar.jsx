import React from 'react';

export default function MiniRendarRadar({ count }) {
  return (
    <div className="bg-black text-lime-400 text-xs text-center p-2 rounded border border-lime-500">
      RENDARS: {count} detected in grid ⚡
    </div>
  );
}