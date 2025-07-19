import React, { useEffect, useState } from 'react';

const ChaosCodexPanel = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetch('/api/chaos-codex')
      .then(res => res.json())
      .then(data => setEntries(data));
  }, []);

  return (
    <div className="bg-zinc-950 text-green-300 p-4 rounded-xl border border-green-600">
      <h3 className="text-lg font-bold mb-2">📖 Chaos Codex</h3>
      <ul className="text-sm space-y-1">
        {entries.map((e, i) => (
          <li key={i}>
            <strong>{e.title}</strong>: {e.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChaosCodexPanel;