import React from 'react';

export default function VaultStatsPanel({ stats }) {
  return (
    <div>
      <h2>Vault Stats</h2>
      <p>XP: {stats.xp}</p>
      <p>Synced Nodes: {stats.syncedNodes}</p>
      <p>Multiplier: {stats.multiplier}</p>
      <p>Streak: {stats.streak}</p>
    </div>
  );
}
