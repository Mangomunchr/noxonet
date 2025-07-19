import React, { useEffect, useState } from 'react';

export default function VaultPayoutPanel({ userId }) {
  const [forecast, setForecast] = useState({ credits: 0 });
  const [status, setStatus] = useState('');

  const fetchForecast = async () => {
    const res = await fetch(`http://localhost:3000/api/vault/forecast/${userId}`);
    const data = await res.json();
    setForecast(data);
  };

  const claim = async () => {
    const res = await fetch('http://localhost:3000/api/vault/claim', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId })
    });
    if (res.ok) {
      setStatus('💰 Claimed!');
      fetchForecast();
    }
  };

  useEffect(() => {
    fetchForecast();
  }, [userId]);

  return (
    <div className="bg-gray-900 p-4 rounded-xl border border-green-600">
      <h2 className="text-green-400 font-bold text-lg">💵 Vault Payout</h2>
      <div className="text-white">Forecast: ${forecast.credits?.toFixed(2)}</div>
      <button onClick={claim} className="mt-2 bg-green-500 text-black px-4 py-2 rounded hover:bg-green-400">
        Claim
      </button>
      {status && <div className="text-green-200 mt-2">{status}</div>}
    </div>
  );
}