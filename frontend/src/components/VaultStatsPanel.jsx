
import React, { useEffect, useState } from 'react';

function VaultStatsPanel() {
  const [stats, setStats] = useState(null);
  const [claimedMsg, setClaimedMsg] = useState('');

  const fetchStats = () => {
    const rendarId = localStorage.getItem('rendarId');
    fetch(`http://localhost:3001/api/vault-xp?rendarId=${rendarId}`)
      .then((res) => res.json())
      .then((data) => setStats(data));
  };

  useEffect(() => {
    fetchStats();
  }, []);

  const getRole = (xp) => {
    if (xp >= 10000) return 'NodeMonk';
    if (xp >= 3000) return 'Rendar';
    return 'Renderling';
  };

  const getXPProgress = (xp) => {
    const level = Math.floor(xp / 1000);
    const nextLevelXP = (level + 1) * 1000;
    const currentLevelXP = level * 1000;
    const progress = ((xp - currentLevelXP) / (nextLevelXP - currentLevelXP)) * 100;
    return { level, progress };
  };

  const handleClaim = async () => {
    const rendarId = localStorage.getItem('rendarId');
    const res = await fetch('http://localhost:3001/api/claim-beans', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ rendarId }),
    });
    const data = await res.json();
    setClaimedMsg(`You claimed ${data.claimed} beans!`);
    fetchStats();
    setTimeout(() => setClaimedMsg(''), 3000);
  };

  if (!stats) return <div className="p-4">Loading Vault Stats...</div>;

  const role = getRole(stats.xp);
  const { level, progress } = getXPProgress(stats.xp);

  return (
    <div className="p-4 bg-gray-900 rounded-lg border border-yellow-500 text-yellow-200">
      <h2 className="text-lg font-bold">Vault Stats</h2>
      <ul className="mt-2 space-y-1">
        <li>XP: {stats.xp}</li>
        <li>Level: {level}</li>
        <li>Multiplier: {stats.multiplier}x</li>
        <li>Streak: {stats.streak} days</li>
        <li>Pending Beans: {stats.pending}</li>
        <li className="mt-2">Role: <span className="text-green-300 font-bold">{role}</span></li>
      </ul>
      <div className="mt-4">
        <div className="text-sm mb-1">XP Progress</div>
        <div className="w-full bg-gray-800 h-4 rounded">
          <div className="bg-green-500 h-4 rounded transition-all duration-700" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
      <button
        onClick={handleClaim}
        className="mt-4 px-4 py-2 bg-yellow-500 text-black font-bold rounded hover:bg-yellow-400 transition"
      >
        Claim Beans
      </button>
      {claimedMsg && <div className="mt-2 text-green-400 font-bold">{claimedMsg}</div>}
    </div>
  );
}

export default VaultStatsPanel;
