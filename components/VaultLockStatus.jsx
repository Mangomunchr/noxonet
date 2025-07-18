import React, { useEffect, useState } from 'react';

const VaultLockStatus = () => {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    fetch('/api/vault-lock')
      .then(res => res.json())
      .then(data => setStatus(data));
  }, []);

  if (!status) return null;

  return (
    <div className={\`p-4 rounded-xl text-center border \${status.locked ? 'bg-red-950 text-red-300 border-red-600' : 'bg-green-950 text-green-300 border-green-600'}\`}>
      <h3 className="text-lg font-bold">{status.locked ? '🔒 Vault Locked' : '🔓 Vault Open'}</h3>
      <p className="text-sm">{status.reason}</p>
    </div>
  );
};

export default VaultLockStatus;