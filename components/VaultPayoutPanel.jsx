
import React from 'react';

export default function VaultPayoutPanel({ total, claimable }) {
  return (
    <div className="p-4 border border-yellow-600 bg-zinc-950 rounded-xl space-y-2">
      <h3 className="text-yellow-400 text-sm font-bold">💰 Vault Payouts</h3>
      <div className="text-white text-sm">Total Vault: ${total}</div>
      <div className="text-green-400 text-sm">Your Claim: ${claimable}</div>
      <button className="bg-green-600 text-white px-4 py-1 text-xs rounded mt-1 hover:bg-green-700">
        Claim
      </button>
    </div>
  );
}
