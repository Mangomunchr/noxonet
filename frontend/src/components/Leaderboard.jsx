
import React, { useEffect, useState } from 'react';

function Leaderboard() {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const res = await fetch('http://localhost:3001/api/leaderboard');
        const data = await res.json();
        setLeaders(data);
      } catch (err) {
        console.error('Failed to load leaderboard:', err);
      }
    };

    fetchLeaderboard();
    const interval = setInterval(fetchLeaderboard, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 bg-gray-900 rounded-lg border border-blue-500 text-white mt-10">
      <h2 className="text-xl font-bold text-blue-300 mb-4">🏆 Leaderboard</h2>
      <table className="w-full text-sm text-left">
        <thead>
          <tr className="text-blue-400">
            <th className="px-2 py-1">#</th>
            <th className="px-2 py-1">Rendar</th>
            <th className="px-2 py-1">XP</th>
            <th className="px-2 py-1">Beans Claimed</th>
          </tr>
        </thead>
        <tbody>
          {leaders.map((leader, index) => (
            <tr key={leader.id} className="border-t border-gray-700">
              <td className="px-2 py-1">{index + 1}</td>
              <td className="px-2 py-1 text-green-300">{leader.id}</td>
              <td className="px-2 py-1">{leader.xp}</td>
              <td className="px-2 py-1">{leader.beansClaimed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
