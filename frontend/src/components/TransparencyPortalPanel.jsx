import React from 'react';

export default function TransparencyPortalPanel({ logs }) {
  return (
    <div className="bg-gray-950 p-4 rounded-xl text-white border border-gray-700 text-sm">
      <h4 className="text-blue-300 font-semibold mb-2">🕵️ Transparency Portal</h4>
      <ul className="space-y-1 font-mono">
        {logs.map((entry, i) => (
          <li key={i}>[{entry.date}] ⚠️ {entry.reason}</li>
        ))}
      </ul>
    </div>
  );
}