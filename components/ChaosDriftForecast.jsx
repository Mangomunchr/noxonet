import React, { useEffect, useState } from 'react';

const ChaosDriftForecast = () => {
  const [drift, setDrift] = useState(null);

  useEffect(() => {
    fetch('/api/chaos-drift')
      .then(res => res.json())
      .then(data => setDrift(data));
  }, []);

  if (!drift) return null;

  return (
    <div className="bg-rose-950 text-rose-300 p-4 border border-rose-600 rounded-xl">
      <h3 className="text-lg font-bold mb-2">🌪️ Chaos Drift Forecast</h3>
      <p className="text-sm">Current Risk: <strong>{drift.level}</strong> – {drift.outlook}</p>
      <p className="text-sm italic">{drift.advice}</p>
    </div>
  );
};

export default ChaosDriftForecast;