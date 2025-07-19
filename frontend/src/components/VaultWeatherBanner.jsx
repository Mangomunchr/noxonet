import React, { useEffect, useState } from 'react';

export default function VaultWeatherBanner() {
  const [weather, setWeather] = useState('');

  useEffect(() => {
    const fetchWeather = async () => {
      const res = await fetch("http://localhost:3000/api/vault/weather");
      const data = await res.json();
      setWeather(data.weather);
    };
    fetchWeather();
    const interval = setInterval(fetchWeather, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-purple-800 to-black text-white py-2 px-4 text-center font-bold">
      Vault Weather: {weather}
    </div>
  );
}