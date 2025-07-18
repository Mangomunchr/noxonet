<<<<<<< HEAD
import React, { useEffect, useState } from 'react';

export default function TerminalFeed() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      const res = await fetch('/api/logs');
      const data = await res.json();
      setLogs(data.logs || []);
    };

    fetchLogs();
    const interval = setInterval(fetchLogs, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-green-400 font-mono p-4 mt-6 rounded h-60 overflow-y-scroll">
      <h3 className="text-sm font-bold text-lime-300 mb-2">🖥️ Terminal Feed</h3>
      <pre className="text-xs">
        {logs.map((log, idx) => (
          <div key={idx}>{log}</div>
        ))}
      </pre>
    </div>
  );
}
=======
// Logs feed of rituals, chaos, guardian approvals, payout results
>>>>>>> 865297188b33778ee0043fc41823c9663ae65614
