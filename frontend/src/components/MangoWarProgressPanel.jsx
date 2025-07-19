import React, { useState, useEffect } from 'react';

export default function MangoWarProgressPanel() {
  const [contributions, setContributions] = useState([]);

  useEffect(() => {
    async function fetchWarStatus() {
      const res = await fetch('http://localhost:3000/api/war/status');
      const data = await res.json();
      setContributions(data);
    }
    fetchWarStatus();
  }, []);

  return (
    <div className="bg-black p-4 rounded-xl border border-yellow-400 text-white">
      <h3 className="text-yellow-300 font-bold text-lg">🍈 Mango War Progress</h3>
      <ul className="space-y-1 mt-3 text-sm">
        {contributions.map((user, i) => (
          <li key={i}>
            {user.id}: {user.mango_war_contribution} Mangoes
          </li>
        ))}
      </ul>
    </div>
  );
}