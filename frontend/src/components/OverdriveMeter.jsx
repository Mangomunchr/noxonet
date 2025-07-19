
import React from 'react';

export default function OverdriveMeter({ level }) {
  return (
    <div className="bg-black p-3 border border-red-600 rounded-xl">
      <h3 className="text-red-400 text-sm font-bold">🔥 Overdrive</h3>
      <div className="w-full bg-zinc-800 h-3 rounded-full mt-1 overflow-hidden">
        <div
          className="bg-red-500 h-3 transition-all duration-300"
          style={{ width: \`\${level}%\` }}
        />
      </div>
    </div>
  );
}
