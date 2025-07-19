
import React, { useState, useEffect } from 'react';

const NodePingStatus = ({ nodeUrl }) => {
  const [latency, setLatency] = useState(null);

  useEffect(() => {
    const ping = async () => {
      const start = performance.now();
      await fetch(nodeUrl).catch(() => {});
      const end = performance.now();
      setLatency(Math.round(end - start));
    };
    ping();
    const interval = setInterval(ping, 10000);
    return () => clearInterval(interval);
  }, [nodeUrl]);

  return (
    <div className="text-xs text-blue-300">
      Latency: {latency ? `${latency}ms` : 'Testing...'}
    </div>
  );
};

export default NodePingStatus;
