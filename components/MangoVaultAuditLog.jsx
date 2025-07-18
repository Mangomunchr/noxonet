import React, { useEffect, useState } from 'react';

const MangoVaultAuditLog = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetch('/api/mango-audit')
      .then(res => res.json())
      .then(data => setLogs(data));
  }, []);

  return (
    <div className="bg-yellow-950 text-yellow-200 p-4 border border-yellow-600 rounded-xl">
      <h3 className="text-lg font-bold mb-2">📜 Mango Vault Audit Log</h3>
      <ul className="text-sm space-y-1">
        {logs.map((log, i) => (
          <li key={i}>
            {log.timestamp} – {log.user} {log.action} {log.amount} {log.unit}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MangoVaultAuditLog;