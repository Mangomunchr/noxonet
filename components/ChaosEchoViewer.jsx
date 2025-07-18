import React, { useEffect, useState } from 'react';

const ChaosEchoViewer = () => {
  const [echoes, setEchoes] = useState([]);

  useEffect(() => {
    fetch('/api/echoes')
      .then(res => res.json())
      .then(data => setEchoes(data));
  }, []);

  return (
    <div className="bg-red-950 text-red-300 p-4 rounded-xl border border-red-600">
      <h3 className="text-lg font-bold mb-2">📼 Chaos Echo Viewer</h3>
      <ul className="text-sm">
        {echoes.map((e, i) => (
          <li key={i}>{e.timestamp} – <strong>{e.triggeredBy}</strong>: {e.effect}</li>
        ))}
      </ul>
    </div>
  );
};

export default ChaosEchoViewer;