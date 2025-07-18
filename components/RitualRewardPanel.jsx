import React, { useState, useEffect } from 'react';

export default function RitualRewardPanel() {
  const [rewards, setRewards] = useState([]);

  useEffect(() => {
    const fetchRewards = async () => {
      const res = await fetch('/api/rewards');
      const data = await res.json();
      setRewards(data.rewards || []);
    };

    fetchRewards();
  }, []);

  return (
    <div className="bg-indigo-950 text-white p-4 mt-6 rounded shadow">
      <h3 className="text-lg font-bold text-indigo-300">🎁 Ritual Rewards</h3>
      <ul className="text-sm mt-2 space-y-1">
        {rewards.length === 0 ? (
          <li className="text-gray-400">No rewards claimed yet.</li>
        ) : (
          rewards.map((r, i) => (
            <li key={i}>✨ {r.label}: +{r.value}</li>
          ))
        )}
      </ul>
    </div>
  );
}
