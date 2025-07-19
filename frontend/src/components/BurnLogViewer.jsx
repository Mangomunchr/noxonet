import React, { useEffect, useState } from 'react';

const BurnLogViewer = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetch('/api/burn-log')
      .then(res => res.json())
      .then(data => setLogs(data));
  }, []);

  return (
    <div className="bg-orange-950 text-orange-300 p-4 border border-orange-500 rounded-xl">
      <h3 className="text-lg font-bold mb-2">🔥 Burn Log</h3>
      <ul className="text-sm space-y-1">
        {logs.map((log, i) => (
          <li key={i}>
            {log.timestamp} — <strong>{log.user}</strong> burned {log.amount} {log.unit}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BurnLogViewer;