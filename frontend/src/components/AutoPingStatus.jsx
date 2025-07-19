import React, { useEffect, useState } from 'react';

export default function AutoPingStatus() {
  const [ping, setPing] = useState('...');

  useEffect(() => {
    const check = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/ping");
        const data = await res.json();
        setPing("✅ " + new Date(data.timestamp).toLocaleTimeString());
      } catch {
        setPing("❌ offline");
      }
    };
    check();
    const interval = setInterval(check, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-xs text-gray-300 mt-1 text-right">🛰 Ping: {ping}</div>
  );
}