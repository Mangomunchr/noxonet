import React, { useEffect, useState } from 'react';

const ChaosBeaconStatus = () => {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    fetch('/api/chaos-beacon')
      .then(res => res.json())
      .then(data => setStatus(data));
  }, []);

  if (!status) return null;

  return (
    <div className={\`p-4 text-center border rounded-xl \${status.active ? 'bg-rose-950 text-rose-300 border-rose-600' : 'bg-zinc-900 text-gray-400 border-zinc-700'}\`}>
      <h3 className="text-lg font-bold mb-1">📡 Chaos Beacon</h3>
      <p className="text-sm">{status.message}</p>
    </div>
  );
};

export default ChaosBeaconStatus;