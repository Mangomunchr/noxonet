import React, { useEffect, useState } from 'react';

const ChaosTriggerLog = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetch('/api/chaos-log')
      .then(res => res.json())
      .then(data => setLogs(data));
  }, []);

  return (
    <div className="bg-red-950 text-red-300 border border-red-500 p-4 rounded-xl">
      <h3 className="text-lg font-bold mb-2">🔥 Chaos Trigger Log</h3>
      <ul className="text-sm space-y-1">
        {logs.map((log, i) => (
          <li key={i}>
            {log.timestamp} – <strong>{log.triggeredBy}</strong>: {log.event}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChaosTriggerLog;