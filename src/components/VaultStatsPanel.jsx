import React, { useEffect, useState } from 'react';

export default function VaultStatsPanel() {
  const [stats, setStats] = useState(null);
  const userId = '6b1c17e5-7a21-475b-9d78-cce7afba9d87'; // your real Supabase user

  useEffect(() => {
    fetch(`http://localhost:3001/api/stats?userId=${userId}`)
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(err => console.error('Failed to fetch stats:', err));
  }, []);

  if (!stats) return <p className="text-white">Loading vault stats...</p>;

  return (
    <div className="bg-gray-900 p-4 rounded-xl shadow text-white">
      <h2 className="text-lg font-bold mb-2">🧠 Vault Stats</h2>
      <ul className="space-y-1 text-green-300 text-sm">
        <li>Vault XP: {stats.vaultxp}</li>
        <li>Vault Streak: {stats.vaultstreak}</li>
        <li>Guardian Approved: {stats.guardianapproved ? '✅' : '❌'}</li>
        <li>Role: {stats.role}</li>
      </ul>
    </div>
  );
}
