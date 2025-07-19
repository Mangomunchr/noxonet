
import React, { useEffect, useState } from 'react';

const VaultHeartbeatSignal = ({ active }) => {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setPulse(p => !p), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center space-x-2 text-sm text-white">
      <div className={`w-2 h-2 rounded-full ${pulse && active ? 'bg-green-500' : 'bg-gray-500'}`}></div>
      <span>{active ? 'Vault Synced' : 'Offline'}</span>
    </div>
  );
};

export default VaultHeartbeatSignal;
