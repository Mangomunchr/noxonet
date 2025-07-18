import React, { useEffect, useState } from 'react';

const NodeRoleEvolution = ({ userId }) => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetch(`/api/role-evolution/${userId}`)
      .then(res => res.json())
      .then(data => setHistory(data));
  }, [userId]);

  return (
    <div className="bg-sky-950 text-sky-200 p-4 border border-sky-600 rounded-xl">
      <h3 className="text-lg font-bold mb-2">🌱 Node Role Evolution</h3>
      <ul className="text-sm space-y-1">
        {history.map((r, i) => (
          <li key={i}>
            {r.timestamp} – <strong>{r.from}</strong> ➜ <span className="text-sky-300">{r.to}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NodeRoleEvolution;