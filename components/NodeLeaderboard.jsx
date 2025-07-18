import React from 'react';

const NodeLeaderboard = ({ rankings }) => (
  <div className="bg-gray-900 p-4 rounded-lg text-white shadow">
    <h3 className="text-lg font-bold mb-2">NodeMonk Leaderboard</h3>
    <ul>
      {rankings.map((monk, index) => (
        <li key={monk.id} className="flex justify-between py-1 text-sm">
          <span>#{index + 1} {monk.username}</span>
          <span>{monk.xp} XP</span>
        </li>
      ))}
    </ul>
  </div>
);

export default NodeLeaderboard;