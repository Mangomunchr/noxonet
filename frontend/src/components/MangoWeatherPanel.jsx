import React from 'react';

export default function MangoWeatherPanel() {
  return (
    <div className="bg-yellow-900 text-white p-3 rounded mt-4 shadow">
      <h3 className="text-lg font-bold text-yellow-300">🌤️ Mango Weather</h3>
      <ul className="text-sm mt-2 space-y-1">
        <li>🌀 Ritual Density: Medium</li>
        <li>🔥 GPU Load Forecast: High</li>
        <li>🍃 Vault Wind: +2.3%</li>
      </ul>
    </div>
  );
}
