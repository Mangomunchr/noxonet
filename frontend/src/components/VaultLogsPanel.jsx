import React, { useEffect, useState } from 'react';

export default function VaultLogsPanel({ userId }) {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      const res = await fetch(`http://localhost:3000/api/logs/${userId}`);
      const data = await res.json();
      setLogs(data);
    };
    fetchLogs();
  }, [userId]);

  return (
    <div className="bg-gray-900 border border-cyan-500 p-4 rounded-xl">
      <h3 className="text-cyan-400 font-bold mb-2">🧾 NodeSoul Logs</h3>
      <ul className="text-xs space-y-1 max-h-40 overflow-y-auto">
        {logs.map((log, idx) => (
          <li key={idx}>
            <span className="text-white">{log.action}</span> @{" "}
            <span className="text-cyan-300">{new Date(log.logged_at).toLocaleString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}