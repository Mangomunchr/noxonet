
import React from 'react';

export default function StreakBuffHistory({ history = [] }) {
  return (
    <div className="bg-zinc-900 border border-zinc-700 rounded-xl text-white p-4 w-full max-w-lg">
      <div className="uppercase text-xs text-zinc-400 mb-2">🔥 Streak Buff History</div>
      <ul className="text-sm space-y-1">
        {history.map((event, i) => (
          <li key={i}>
            Day {event.day}: +{event.buff}% Buff — {event.reason}
          </li>
        ))}
      </ul>
    </div>
  );
}
