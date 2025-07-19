import React from 'react';

export default function ChaosVaultFallbackBox() {
  return (
    <div className="bg-black border border-red-600 p-4 rounded-xl text-red-400">
      <h4 className="text-lg font-bold">⚠️ Chaos Vault Offline</h4>
      <p className="text-sm">System is currently rerouting chaos yields to Ritual Buffer.</p>
      <p className="text-xs italic text-red-300">Estimated recovery: 8h</p>
    </div>
  );
}