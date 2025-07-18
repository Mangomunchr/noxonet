import React, { useEffect, useState } from 'react';

const ChaosMutationTracker = () => {
  const [mutations, setMutations] = useState([]);

  useEffect(() => {
    fetch('/api/chaos-mutations')
      .then(res => res.json())
      .then(data => setMutations(data));
  }, []);

  return (
    <div className="bg-fuchsia-950 text-fuchsia-300 border border-fuchsia-600 p-4 rounded-xl">
      <h3 className="text-lg font-bold mb-2">🧬 Chaos Mutations</h3>
      <ul className="text-sm space-y-1">
        {mutations.map((m, i) => (
          <li key={i}>{m.timestamp} – {m.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default ChaosMutationTracker;