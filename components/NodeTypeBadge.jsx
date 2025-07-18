
import React from 'react';

export default function NodeTypeBadge({ type }) {
  const colors = {
    GPU: 'bg-green-700 text-green-100',
    ASIC: 'bg-cyan-800 text-cyan-200',
    FPGA: 'bg-yellow-700 text-yellow-100',
  };
  return (
    <span className={\`px-2 py-1 rounded text-xs font-mono \${colors[type] || 'bg-gray-700 text-white'}\`}>
      🧠 {type} Node
    </span>
  );
}
