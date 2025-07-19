import React, { useEffect, useState } from 'react';

const XPLogViewer = ({ userId }) => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetch(`/api/xplog/${userId}`)
      .then(res => res.json())
      .then(data => setLogs(data));
  }, [userId]);

  return (
    <div className="bg-black text-green-300 p-4 rounded-lg border border-green-600 shadow">
      <h3 className="text-lg font-bold mb-2">XP Log</h3>
      <ul className="text-sm space-y-1">
        {logs.map((entry, index) => (
          <li key={index}>
            {entry.timestamp} → +{entry.amount} XP ({entry.reason})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default XPLogViewer;