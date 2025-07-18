import React, { useEffect, useState } from 'react';

const WeeklyRitualBonus = () => {
  const [bonuses, setBonuses] = useState([]);

  useEffect(() => {
    fetch('/api/weekly-bonuses')
      .then(res => res.json())
      .then(data => setBonuses(data));
  }, []);

  return (
    <div className="bg-indigo-950 text-indigo-300 border border-indigo-600 p-4 rounded-xl">
      <h3 className="text-lg font-bold mb-2">📅 Weekly Ritual Bonuses</h3>
      <ul className="text-sm space-y-1">
        {bonuses.map((b, i) => (
          <li key={i}>• <strong>{b.type}</strong>: {b.bonus}</li>
        ))}
      </ul>
    </div>
  );
};

export default WeeklyRitualBonus;