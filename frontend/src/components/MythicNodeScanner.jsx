
import React from 'react';

export default function MythicNodeScanner({ mythics = [] }) {
  return (
    <div className="bg-gradient-to-br from-violet-900 via-indigo-800 to-black p-4 rounded-xl text-white border border-indigo-700 shadow-xl">
      <div className="text-xs uppercase text-indigo-300 mb-2">🧿 Mythic Node Pulse</div>
      <ul className="space-y-1">
        {mythics.map((node, i) => (
          <li key={i} className="text-sm">
            💠 {node.name} — {node.status} • {node.bonus}%
          </li>
        ))}
      </ul>
    </div>
  );
}
