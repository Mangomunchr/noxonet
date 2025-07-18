<<<<<<< HEAD
// VaultCard placeholder
=======
// frontend/src/ui/VaultCard.tsx
import React from 'react';

export default function VaultCard() {
  // Replace with real data or fetch from your API when ready
  const vault = {
    name: 'Vault Alpha',
    xpBalance: 1200,
    tier: 'NodeMonk',
    claimable: true,
    nextClaimDate: '2025-07-18'
  };

  return (
    <div className="p-4 bg-blue-900/30 border border-blue-800 rounded-2xl shadow-md text-blue-300 max-w-sm mx-auto">
      <h3 className="text-xl font-semibold mb-2">{vault.name}</h3>
      <div className="space-y-1">
        <div>
          <span className="font-medium">XP Balance:</span>{' '}
          <span className="text-lg">{vault.xpBalance}</span>
        </div>
        <div>
          <span className="font-medium">Tier:</span>{' '}
          <span className="text-lg">{vault.tier}</span>
        </div>
        <div>
          <span className="font-medium">Next Claim:</span>{' '}
          <span className="text-sm text-gray-400">{vault.nextClaimDate}</span>
        </div>
      </div>
      <button
        disabled={!vault.claimable}
        className={`mt-4 w-full px-4 py-2 rounded-full font-semibold ${
          vault.claimable
            ? 'bg-green-500 hover:bg-green-600'
            : 'bg-gray-600 cursor-not-allowed'
        }`}
      >
        {vault.claimable ? 'Claim Ritual' : 'Locked'}
      </button>
    </div>
  );
}
>>>>>>> e7779e491c30cadc9ea5092e7302c9177f43fff1
