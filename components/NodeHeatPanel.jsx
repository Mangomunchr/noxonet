
import React from 'react';

export default function NodeHeatPanel({ temp }) {
  return (
    <div className="p-3 rounded-xl bg-gradient-to-br from-red-900 via-zinc-800 to-black border border-red-400 text-xs text-white">
      🔥 Node Temperature: {temp}°C
      <div className="w-full bg-zinc-800 h-2 rounded mt-1 overflow-hidden">
        <div
          className="bg-red-500 h-2 transition-all duration-300"
          style={{ width: \`\${Math.min(temp, 100)}%\` }}
        />
      </div>
    </div>
  );
}
