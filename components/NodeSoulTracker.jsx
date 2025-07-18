
import React from 'react';

export default function NodeSoulTracker({ logs }) {
  return (
    <div className="p-2 bg-black border border-slate-700 rounded text-slate-200 text-xs font-mono h-32 overflow-y-auto">
      👁️ NodeSoul Memory:
      <ul className="mt-1">
        {logs.map((log, i) => (
          <li key={i}>• {log}</li>
        ))}
      </ul>
    </div>
  );
}
