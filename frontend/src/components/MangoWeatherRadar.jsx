import React, { useEffect, useState } from 'react';

const MangoWeatherRadar = () => {
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    fetch('/api/mango-radar')
      .then(res => res.json())
      .then(data => setForecast(data));
  }, []);

  return (
    <div className="bg-yellow-950 text-yellow-300 p-4 border border-yellow-600 rounded-xl">
      <h3 className="text-lg font-bold mb-2">⛅ Mango Weather Radar</h3>
      <ul className="text-sm space-y-1">
        {forecast.map((zone, i) => (
          <li key={i}>
            {zone.zone}: {zone.weather} — {zone.effect}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MangoWeatherRadar;