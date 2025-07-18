<<<<<<< HEAD
// XPLeaderboard placeholder
=======
// frontend/src/ui/XPLeaderboard.tsx
import React, { useEffect, useState } from 'react';

interface LeaderboardEntry {
  userId: string;
  xp: number;
  nsr: number;
  rank: number;
}

export default function XPLeaderboard() {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('http://localhost:4000/api/xp/leaderboard')
      .then(res => {
        if (!res.ok) throw new Error('Failed to load leaderboard');
        return res.json();
      })
      .then((data: LeaderboardEntry[]) => {
        setEntries(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-6 text-white">Loading leaderboard…</div>;
  if (error)   return <div className="p-6 text-red-400">Error: {error}</div>;

  return (
    <div className="p-6 bg-white/10 rounded-xl shadow-lg text-white">
      <h2 className="text-2xl font-bold mb-4">📊 Prestige Leaderboard</h2>
      <div className="overflow-auto">
        <table className="min-w-full text-left">
          <thead>
            <tr className="border-b border-gray-600">
              <th className="px-4 py-2">Rank</th>
              <th className="px-4 py-2">User</th>
              <th className="px-4 py-2">XP</th>
              <th className="px-4 py-2">NSR</th>
            </tr>
          </thead>
          <tbody>
            {entries.map(e => (
              <tr key={e.userId} className="border-b border-gray-800">
                <td className="px-4 py-2">{e.rank}</td>
                <td className="px-4 py-2">{e.userId}</td>
                <td className="px-4 py-2">{e.xp.toLocaleString()}</td>
                <td className="px-4 py-2">{e.nsr}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
>>>>>>> e7779e491c30cadc9ea5092e7302c9177f43fff1
