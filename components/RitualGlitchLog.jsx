import React, { useEffect, useState } from 'react';

const RitualGlitchLog = () => {
  const [glitches, setGlitches] = useState([]);

  useEffect(() => {
    fetch('/api/ritual-glitch-log')
      .then(res => res.json())
      .then(data => setGlitches(data));
  }, []);

  return (
    <div className="bg-red-950 text-red-300 border border-red-600 p-4 rounded-xl">
      <h3 className="text-lg font-bold mb-2">🐞 Ritual Glitch Log</h3>
      <ul className="text-sm space-y-1">
        {glitches.map((g, i) => (
          <li key={i}>
            {g.timestamp} – {g.description} ({g.severity})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RitualGlitchLog;