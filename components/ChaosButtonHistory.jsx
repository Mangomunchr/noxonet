import React, { useEffect, useState } from 'react';

const ChaosButtonHistory = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetch('/api/chaos-button-history')
      .then(res => res.json())
      .then(data => setLogs(data));
  }, []);

  return (
    <div className="bg-rose-950 text-rose-200 border border-rose-600 p-4 rounded-xl">
      <h3 className="text-lg font-bold mb-2">🔴 Chaos Button History</h3>
      <ul className="text-sm space-y-1">
        {logs.map((log, i) => (
          <li key={i}>
            {log.timestamp} – <strong>{log.user}</strong> triggered <em>{log.effect}</em>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChaosButtonHistory;