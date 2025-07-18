
import React, { useEffect, useState } from 'react';
export default function VaultStats({ userId }) {
  const [stats, setStats] = useState(null);
  useEffect(() => {
    fetch(`https://noxo-backend.fly.dev/api/vault?userId=${userId}`)
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(err => console.error('Vault error:', err));
  }, [userId]);
  if (!stats) return <div className="text-gray-400">Loading vault...</div>;
  return (
    <div className="border p-4 rounded-xl bg-[#111]">
      <h2 className="text-lg font-bold text-green-400">🧿 Vault Stats</h2>
      <p>💰 Total Earnings: {stats.totalEarnings} CoolBeans</p>
      <p>📈 Uptime: {stats.uptimeHours} hrs</p>
      <p>📦 Jobs Completed: {stats.jobs}</p>
    </div>
  );
}
