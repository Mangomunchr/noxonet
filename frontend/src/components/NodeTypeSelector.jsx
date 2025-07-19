
import React from 'react';

export default function NodeTypeSelector({ selected, onChange }) {
  const types = ['GPU', 'ASIC', 'FPGA', 'CPU'];
  return (
    <div className="text-sm">
      <label className="text-white font-bold block mb-1">Select Node Type:</label>
      <select
        className="bg-zinc-900 border border-zinc-700 text-white px-2 py-1 rounded"
        value={selected}
        onChange={(e) => onChange(e.target.value)}
      >
        {types.map(type => <option key={type} value={type}>{type}</option>)}
      </select>
    </div>
  );
}
