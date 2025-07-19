import React, { useEffect, useState } from 'react';

const RitualUnlockRequirements = () => {
  const [reqs, setReqs] = useState([]);

  useEffect(() => {
    fetch('/api/requirements')
      .then(res => res.json())
      .then(data => setReqs(data));
  }, []);

  return (
    <div className="bg-purple-950 text-purple-300 p-4 rounded-xl border border-purple-600">
      <h3 className="text-lg font-bold mb-2">🔐 Ritual Unlock Requirements</h3>
      <ul className="text-sm space-y-1">
        {reqs.map((r, i) => (
          <li key={i}><strong>{r.ritual}</strong>: {r.requiredXP} XP, Alignment: {r.requiredAlignment}</li>
        ))}
      </ul>
    </div>
  );
};

export default RitualUnlockRequirements;