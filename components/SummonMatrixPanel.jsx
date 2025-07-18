import React, { useEffect, useState } from 'react';

const SummonMatrixPanel = () => {
  const [matrix, setMatrix] = useState(null);

  useEffect(() => {
    fetch('/api/summon-matrix')
      .then(res => res.json())
      .then(data => setMatrix(data));
  }, []);

  if (!matrix) return null;

  return (
    <div className="bg-indigo-950 text-indigo-300 border border-indigo-600 p-4 rounded-xl">
      <h3 className="text-lg font-bold mb-2">🌀 Summon Matrix</h3>
      <p className="text-sm mb-2">
        Current Mode: <strong>{matrix.mode}</strong> – Burst Level: {matrix.burst}
      </p>
      <ul className="text-sm space-y-1">
        {matrix.activeNodes.map((n, i) => (
          <li key={i}>🔹 {n.nodeName} – {n.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default SummonMatrixPanel;