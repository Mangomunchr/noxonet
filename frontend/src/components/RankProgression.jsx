import React from 'react';

const RankProgression = ({ xp, ranks }) => {
  const current = ranks.find((r, i) => xp < r.xpThreshold) || ranks[ranks.length - 1];
  const prev = ranks[ranks.indexOf(current) - 1] || { xpThreshold: 0, title: "Unranked" };
  const percent = ((xp - prev.xpThreshold) / (current.xpThreshold - prev.xpThreshold)) * 100;

  return (
    <div className="p-4 bg-gray-900 text-white border border-indigo-500 rounded-lg">
      <h3 className="text-lg font-bold mb-2">🏅 Rank Progression</h3>
      <p>Current Rank: {prev.title}</p>
      <p>Next Rank: {current.title} @ {current.xpThreshold} XP</p>
      <div className="w-full bg-gray-600 h-3 mt-2 rounded">
        <div className="bg-indigo-400 h-3 rounded" style={{ width: `${percent}%` }} />
      </div>
      <p className="text-xs text-gray-300 mt-1">{Math.floor(percent)}% to next rank</p>
    </div>
  );
};

export default RankProgression;