
import React from 'react';

export default function JobGoblinLog({ logs }) {
  return (
    <div className="p-3 bg-zinc-900 border border-green-400 text-green-100 rounded text-xs h-32 overflow-y-scroll font-mono">
      🐸 Job Goblin Log:
      <ul className="mt-2">
        {logs.map((log, i) => (
          <li key={i}>• {log}</li>
        ))}
      </ul>
    </div>
  );
}
