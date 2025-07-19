import React from 'react';

export default function CodexScroll({ entries }) {
  return (
    <div className="p-4 text-white overflow-y-scroll h-[300px] border border-gray-700 rounded">
      <h3 className="text-lg font-bold text-green-400 mb-2">📜 Codex Scroll</h3>
      <ul>
        {entries.map((entry, idx) => (
          <li key={idx} className="mb-2">
            <strong>{entry.title}</strong>
            <p className="text-sm">{entry.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}