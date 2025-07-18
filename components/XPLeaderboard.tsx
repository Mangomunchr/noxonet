import React, { useEffect, useState } from 'react';

export default function XPLeaderboard() {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    fetch("/api/xp-leaderboard")
      .then(res => res.json())
      .then(setLeaders)
      .catch(console.error);
  }, []);

  return (
    <div className="p-4 text-white">
      <h2 className="text-xl font-bold text-yellow-300">🏆 XP Leaderboard</h2>
      <ul className="mt-4 space-y-2">
        {leaders.map((user, idx) => (
          <li key={idx} className="flex justify-between border-b pb-1">
            <span>{user.name}</span>
            <span>{user.xp} XP</span>
          </li>
        ))}
      </ul>
    </div>
  );
}