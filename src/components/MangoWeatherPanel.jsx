import React from 'react';

export default function MangoWeatherPanel() {
  const weather = [
    "🌧️ Mango Monsoon",
    "🌫️ Chaos Fog",
    "🌒 Chompy Eclipse",
    "☀️ Sunny Renderflow",
    "⚡ Vault Surge"
  ];
  const current = weather[Math.floor(Math.random() * weather.length)];

  return (
    <div className="p-4 rounded-xl bg-black border border-orange-500 text-orange-300 space-y-2">
      <div className="text-xl font-bold text-orange-400">Mango Weather System</div>
      <div>Current Forecast: <strong>{current}</strong></div>
    </div>
  );
}
