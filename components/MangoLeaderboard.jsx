import React, { useEffect, useState } from 'react';

const MangoLeaderboard = () => {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    fetch('/api/mango-leaderboard')
      .then(res => res.json())
      .then(data => setDonors(data));
  }, []);

  return (
    <div className="bg-black text-yellow-300 border border-yellow-600 p-4 rounded-xl">
      <h3 className="text-lg font-bold mb-2">🥭 Mango Vault Top Donors</h3>
      <ul className="text-sm space-y-1">
        {donors.map((d, i) => (
          <li key={i}>
            #{i + 1} {d.username} — {d.total} credits
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MangoLeaderboard;