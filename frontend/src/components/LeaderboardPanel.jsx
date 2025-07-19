import React, { useEffect, useState } from 'react';

export default function LeaderboardPanel() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchLB() {
      const res = await fetch("http://localhost:3000/api/leaderboard");
      const data = await res.json();
      setData(data);
    }
    fetchLB();
  }, []);

  return (
    <div className="bg-gray-900 p-4 rounded-xl border border-yellow-600 text-white">
      <h2 className="text-yellow-300 font-bold text-lg">🏆 Leaderboard</h2>
      <ul className="mt-2 space-y-1 text-sm">
        {data.map((user, i) => (
          <li key={user.userId}>
            <span className="text-yellow-100 font-mono">#{i + 1}</span>{' '}
            {user.userId} — {user.xp} XP 🔥 {user.streak}
          </li>
        ))}
      </ul>
    </div>
  );
}