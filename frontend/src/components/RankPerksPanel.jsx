import React, { useEffect, useState } from 'react';

const RankPerksPanel = () => {
  const [perks, setPerks] = useState([]);

  useEffect(() => {
    fetch('/api/rank-perks')
      .then(res => res.json())
      .then(data => setPerks(data));
  }, []);

  return (
    <div className="bg-slate-900 text-white p-4 border border-blue-500 rounded-xl">
      <h3 className="text-lg font-bold mb-2">🎖️ Rank Perks</h3>
      <ul className="text-sm space-y-2">
        {perks.map((p, i) => (
          <li key={i}>
            <strong>{p.rank}</strong> → {p.perk}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RankPerksPanel;