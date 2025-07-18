
import React from 'react';
export default function SummonMultiplierPicker({ value, setValue }) {
  return (
    <div className="my-4">
      <label className="block text-white mb-2">Summon Mode Speed</label>
      <input type="range" min="1" max="100" value={value} onChange={e => setValue(e.target.value)} />
      <p className="text-sm mt-1 text-green-400">Multiplier: {value}x</p>
    </div>
  );
}
