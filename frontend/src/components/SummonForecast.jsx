import React from 'react';

const SummonForecast = ({ forecast }) => {
  return (
    <div className="p-4 bg-black text-green-400 rounded-xl border border-green-700 shadow-lg">
      <h2 className="text-xl font-bold mb-2">Summon Forecast</h2>
      <ul className="space-y-2">
        {forecast.map((entry, index) => (
          <li key={index} className="flex justify-between">
            <span>Speed x{entry.multiplier}</span>
            <span>{entry.status} – {entry.eta}s</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SummonForecast;