import React, { useEffect, useState } from 'react';

const VaultForecastPanel = () => {
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    fetch('/api/vault-forecast')
      .then(res => res.json())
      .then(data => setForecast(data));
  }, []);

  if (!forecast) return null;

  return (
    <div className="bg-gradient-to-br from-gray-800 to-black text-white p-4 rounded-xl border border-teal-500 shadow-lg">
      <h3 className="text-lg font-bold mb-2">🌩️ Vault Forecast</h3>
      <p>Load Prediction: <strong className="text-teal-300">{forecast.load}%</strong></p>
      <p>Chaos Likelihood: <strong className="text-red-400">{forecast.chaosRisk}</strong></p>
      <p>Optimal Summon Speed: <strong>{forecast.recommendedSpeed}x</strong></p>
    </div>
  );
};

export default VaultForecastPanel;