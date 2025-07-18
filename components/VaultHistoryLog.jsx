
import React from 'react';

export default function VaultHistoryLog({ logs = [] }) {
  return (
    <div className="bg-zinc-900 text-white p-4 border border-zinc-700 rounded-lg">
      <div className="text-sm uppercase text-zinc-400 mb-1">Vault Event History</div>
      <ul className="text-sm space-y-1 max-h-48 overflow-y-auto">
        {logs.map((log, i) => (
          <li key={i} className="text-zinc-300">🕒 {log}</li>
        ))}
      </ul>
    </div>
  );
}
