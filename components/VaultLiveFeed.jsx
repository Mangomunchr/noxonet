
import React from 'react';

export default function VaultLiveFeed({ logs }) {
  return (
    <div className="bg-black border border-zinc-700 rounded-xl p-4 max-h-64 overflow-y-auto text-sm space-y-1 font-mono">
      <h2 className="text-green-500 text-md font-semibold">📡 Vault Feed</h2>
      {logs.length === 0 ? (
        <div className="text-zinc-400 italic">Waiting for signals...</div>
      ) : (
        logs.map((entry, index) => (
          <div key={index} className="text-green-300">[{entry.time}] {entry.message}</div>
        ))
      )}
    </div>
  );
}
