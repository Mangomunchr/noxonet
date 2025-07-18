import React, { useEffect, useState } from 'react';

export default function ChaosQueueDisplay() {
  const [queue, setQueue] = useState([]);

  useEffect(() => {
    fetch('/chaos.json') // temporary config file or replace with /api/chaos-queue
      .then(res => res.json())
      .then(data => setQueue(data))
      .catch(() => setQueue([]));
  }, []);

  return (
    <div className="bg-gray-900 p-4 rounded-xl text-white">
      <h2 className="text-lg font-bold text-red-400">🌪️ Chaos Queue</h2>
      {queue.length === 0 ? (
        <p className="text-sm text-gray-400">No active chaos events</p>
      ) : (
        <ul className="text-sm mt-2 space-y-1">
          {queue.map((c, i) => (
            <li key={i}>
              {c.type} — <span className="text-orange-300">Severity:</span> {c.severity} — ETA: {c.eta}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
