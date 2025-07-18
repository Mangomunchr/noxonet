import React, { useEffect, useState } from 'react';

const SystemHealthPanel = () => {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    fetch('/api/system-health')
      .then(res => res.json())
      .then(data => setStatus(data));
  }, []);

  if (!status) return null;

  return (
    <div className="p-4 bg-green-950 text-green-300 border border-green-600 rounded-xl">
      <h3 className="text-lg font-bold mb-2">🛡️ System Health</h3>
      <p>Backend: <strong>{status.backend}</strong></p>
      <p>Frontend: <strong>{status.frontend}</strong></p>
      <p>Database: <strong>{status.database}</strong></p>
      <p>Vault Sync: <strong>{status.vault}</strong></p>
    </div>
  );
};

export default SystemHealthPanel;