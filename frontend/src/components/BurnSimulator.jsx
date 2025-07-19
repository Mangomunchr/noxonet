import React, { useState } from 'react';

export default function BurnSimulator() {
  const [result, setResult] = useState(null);

  const simulate = () => {
    const temp = Math.floor(Math.random() * 50 + 30);
    const load = Math.floor(Math.random() * 10);
    const state = temp > 70 || load > 8 ? '🔥 Overload' : '✅ Stable';
    setResult({ temp, load, state });
  };

  return (
    <div className="bg-gray-800 text-white p-4 rounded-xl border border-red-500 space-y-2">
      <button onClick={simulate} className="bg-red-600 px-4 py-2 rounded hover:bg-red-500">
        Run Burn Sim
      </button>
      {result && (
        <div className="text-sm">
          Temp: {result.temp}°C<br />
          Load: {result.load}<br />
          State: {result.state}
        </div>
      )}
    </div>
  );
}