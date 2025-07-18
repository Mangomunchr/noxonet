
import React from 'react';

export default function VaultWeatherPanel({ weather = "Mango Monsoon", intensity = "Severe" }) {
  return (
    <div className="p-4 bg-indigo-900 text-white border border-indigo-700 rounded-lg">
      <div className="text-sm uppercase text-indigo-300">Vault Weather</div>
      <div className="text-lg font-bold">{weather}</div>
      <div className="text-sm text-indigo-400">Intensity: {intensity}</div>
    </div>
  );
}
