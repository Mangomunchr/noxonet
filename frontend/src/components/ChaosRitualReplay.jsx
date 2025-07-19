import React, { useEffect, useState } from 'react';

const ChaosRitualReplay = () => {
  const [rituals, setRituals] = useState([]);

  useEffect(() => {
    fetch('/api/chaos-replays')
      .then(res => res.json())
      .then(data => setRituals(data));
  }, []);

  return (
    <div className="bg-black text-white border border-red-600 p-4 rounded-xl">
      <h3 className="text-lg font-bold mb-2">📼 Chaos Ritual Replays</h3>
      <ul className="text-sm space-y-2">
        {rituals.map((r, i) => (
          <li key={i}>
            <strong>{r.timestamp}</strong> — {r.event} by <span className="text-red-300">{r.triggeredBy}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChaosRitualReplay;