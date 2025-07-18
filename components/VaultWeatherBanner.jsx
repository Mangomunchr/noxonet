
import React from 'react';

export default function VaultWeatherBanner({ condition }) {
  const banners = {
    sunny: '🌞 Clear Signal',
    storm: '⚡ Chaos Surge',
    eclipse: '🌑 Vault Eclipse',
    fog: '🌫️ Render Fog'
  };
  return (
    <div className="w-full bg-gradient-to-r from-green-800 via-black to-green-800 p-3 rounded-lg text-center text-white font-bold shadow">
      {banners[condition] || '🔄 Awaiting Forecast'}
    </div>
  );
}
