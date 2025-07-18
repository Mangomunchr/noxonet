import React from 'react';
import VaultStatsPanel from '../components/VaultStatsPanel';
import VaultCastTrigger from '../components/VaultCastTrigger';
import RitualTrigger from '../components/RitualTrigger';

export default function Vault() {
  return (
    <div className="min-h-screen bg-black text-white p-6 space-y-6">
      <h1 className="text-2xl font-bold text-cyan-300">🧠 Vault Terminal</h1>
      <VaultStatsPanel />
      <VaultCastTrigger />
      <RitualTrigger />
    </div>
  );
}