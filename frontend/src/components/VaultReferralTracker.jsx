
import React from 'react';

export default function VaultReferralTracker({ total = 3, bonusXP = 150 }) {
  return (
    <div className="bg-emerald-900 text-white p-4 rounded border border-emerald-600">
      <div className="text-sm uppercase text-emerald-400 mb-1">Vault Referrals</div>
      <p className="text-sm">You’ve referred <b>{total}</b> users</p>
      <p className="text-xs text-emerald-300 mt-1">🔥 Bonus XP: <b>{bonusXP}</b></p>
    </div>
  );
}
