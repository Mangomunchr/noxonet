import React, { useEffect, useState } from 'react';

const MangoWeather = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch('/api/mango-weather')
      .then(res => res.json())
      .then(data => setWeather(data));
  }, []);

  if (!weather) return null;

  return (
    <div className="p-4 text-center rounded-xl border border-amber-600 bg-amber-950 text-amber-300">
      <h3 className="text-lg font-bold mb-1">⛅ Mango Weather</h3>
      <p className="text-sm">{weather.forecast}</p>
    </div>
  );
};

export default MangoWeather;