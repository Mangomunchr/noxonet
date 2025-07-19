import React, { useEffect, useState } from 'react';

const RitualHistoryViewer = () => {
  const [rituals, setRituals] = useState([]);

  useEffect(() => {
    fetch('/api/ritual-history')
      .then(res => res.json())
      .then(data => setRituals(data));
  }, []);

  return (
    <div className="bg-indigo-950 text-indigo-200 p-4 border border-indigo-400 rounded-xl">
      <h3 className="text-lg font-bold mb-2">📜 Ritual History</h3>
      <ul className="text-sm space-y-1">
        {rituals.map((r, i) => (
          <li key={i}>
            {r.timestamp} — {r.type} by <strong>{r.user}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RitualHistoryViewer;