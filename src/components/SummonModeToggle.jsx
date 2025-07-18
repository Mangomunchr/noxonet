import React, { useState } from 'react';

export default function SummonModeToggle({ onChange }) {
  const [speed, setSpeed] = useState(1);

  const updateSpeed = (value) => {
    setSpeed(value);
    onChange(value);
  };

  return (
    <div className="p-4 rounded-xl bg-black border border-yellow-500 space-y-2">
      <div className="text-xl font-bold text-yellow-400">⚡ Summon Mode</div>
      <div className="flex gap-2">
        {[1, 2, 5, 10, 100].map((val) => (
          <button
            key={val}
            onClick={() => updateSpeed(val)}
            className={`px-3 py-1 rounded border ${speed === val ? 'bg-yellow-500 text-black' : 'border-yellow-500 text-yellow-300'}`}
          >
            {val}x
          </button>
        ))}
      </div>
    </div>
  );
}
