import React, { useEffect, useState } from 'react';

export default function ChaosQueueDisplay() {
  const [queue, setQueue] = useState([]);

  useEffect(() => {
    const fetchQueue = async () => {
      const res = await fetch('/api/chaos');
      const data = await res.json();
      setQueue(data.queue || []);
    };

    fetchQueue();
    const interval = setInterval(fetchQueue, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-red-900 p-4 rounded-lg text-white mt-6">
      <h3 className="text-lg font-bold text-red-300">🔥 Chaos Queue</h3>
      {queue.length === 0 ? (
        <p className="text-sm text-red-200">All calm... for now.</p>
      ) : (
        <ul className="mt-2 space-y-1">
          {queue.map((item, i) => (
            <li key={i} className="text-xs">
              🌀 {item.label} – ETA: {item.eta}s
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
