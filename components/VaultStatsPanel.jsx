<<<<<<< HEAD
// React component for displaying live vault XP, streak, and guardian state
=======

<<<<<<< HEAD
import React from 'react';

const VaultStatsPanel = ({ stats }) => {
  return (
    <div className="border border-green-600 p-4 rounded-xl bg-black bg-opacity-50 space-y-2">
      <h2 className="text-lg font-bold text-green-400">Vault Ops</h2>
      <div>🧠 Total XP: <span className="text-white">{stats.xp}</span></div>
      <div>💾 Synced Nodes: <span className="text-white">{stats.syncedNodes}</span></div>
      <div>⚡️ Active Multiplier: <span className="text-white">{stats.multiplier}x</span></div>
      <div>🔥 Current Streak: <span className="text-white">{stats.streak} days</span></div>
    </div>
  );
};

export default VaultStatsPanel;
=======
import React, { useEffect, useState } from 'react';
import { fetchVaultStats } from '../utils/api';

export default function VaultStatsPanel({ stats: initialStats }) {
  const userId = localStorage.getItem('userId');
  const [stats, setStats] = useState(initialStats);

  useEffect(() => {
    fetchVaultStats(userId).then((data) => {
      if (data) setStats(data);
    });
  }, [userId]);

  return (
    <div className="bg-zinc-800 p-4 rounded-xl border border-zinc-700 text-white space-y-1">
      <div>📊 XP: {stats?.xp}</div>
      <div>🔗 Nodes Synced: {stats?.syncedNodes}</div>
      <div>🔥 Multiplier: {stats?.multiplier}x</div>
      <div>🌀 Streak: {stats?.streak}</div>
    </div>
  );
}
>>>>>>> e7779e491c30cadc9ea5092e7302c9177f43fff1
>>>>>>> a2dd3a3830ff49ec5d1e9aa51c2c2cff38b4217e
