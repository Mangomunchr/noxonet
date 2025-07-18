
import React from 'react';

export default function VaultWeatherAlert({ condition = "Stable" }) {
  const colorMap = {
    "Stable": "bg-blue-700",
    "Mango Monsoon": "bg-yellow-500",
    "Chompy Eclipse": "bg-purple-800",
    "NodeStorm": "bg-red-700"
  };

  return (
    <div className={\`p-3 text-white text-sm rounded-xl \${colorMap[condition] || "bg-zinc-600"}\`}>
      🌦 Vault Weather: <strong>{condition}</strong>
    </div>
  );
}
