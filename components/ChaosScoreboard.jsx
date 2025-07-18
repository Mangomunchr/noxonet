import React, { useEffect, useState } from 'react';

const ChaosScoreboard = () => {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    fetch('/api/chaos-scoreboard')
      .then(res => res.json())
      .then(data => setLeaders(data));
  }, []);

  return (
    <div className="bg-black text-red-300 border border-red-600 p-4 rounded-xl">
      <h3 className="text-lg font-bold mb-2">🔥 Chaos Scoreboard</h3>
      <ol className="text-sm list-decimal list-inside space-y-1">
        {leaders.map((l, i) => (
          <li key={i}>
            <strong>{l.username}</strong> – {l.chaosPoints} chaos pts
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ChaosScoreboard;