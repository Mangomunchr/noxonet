
import React, { useState, useEffect } from 'react';

export default function NodePingScanner() {
  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    const ping = () => {
      setNodes(Array.from({ length: 6 }, (_, i) => ({
        id: i + 1,
        ping: Math.floor(Math.random() * 120),
        active: Math.random() > 0.2
      })));
    };
    ping();
    const interval = setInterval(ping, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-900 text-white p-4 rounded border border-slate-600">
      <div className="uppercase text-sm text-slate-400 mb-2">🛰️ Node Ping Scanner</div>
      <ul className="text-sm grid grid-cols-2 gap-2">
        {nodes.map(n => (
          <li key={n.id} className="flex justify-between">
            <span>Node #{n.id}</span>
            <span className={n.ping > 100 ? "text-red-400" : "text-green-400"}>
              {n.ping}ms {n.active ? "🟢" : "🔴"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
