import React, { useEffect, useState } from 'react';

const NodeSoulTrail = () => {
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    fetch('/api/trail')
      .then(res => res.json())
      .then(data => setTrail(data));
  }, []);

  return (
    <div className="bg-stone-900 text-stone-300 p-4 rounded-xl border border-stone-700">
      <h3 className="text-lg font-bold mb-2">🧬 NodeSoul Echo Trail</h3>
      <ul className="text-sm space-y-1">
        {trail.map((t, i) => (
          <li key={i}>{t.timestamp} – {t.type}: {t.result}</li>
        ))}
      </ul>
    </div>
  );
};

export default NodeSoulTrail;