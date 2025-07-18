import React, { useEffect, useState } from 'react';

export default function VaultBar() {
  const [xp, setXp] = useState(0);
  const [claimed, setClaimed] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  useEffect(() => {
    const storedXP = parseInt(localStorage.getItem('vault_xp')) || 0;
    const storedJobs = parseInt(localStorage.getItem('vault_jobs')) || 0;
    setXp(storedXP);
    setClaimed(storedJobs);
    setMultiplier(1 + Math.floor(storedJobs / 5));
  }, []);

  return (
    <div className="p-4 bg-black border border-green-500 text-green-300 rounded-xl space-y-1">
      <div className="text-lg font-bold text-green-400">🧬 Vault Status</div>
      <div>Total XP: {xp}</div>
      <div>Jobs Claimed: {claimed}</div>
      <div>Streak Multiplier: {multiplier}x</div>
    </div>
  );
}
