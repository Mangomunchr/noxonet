<<<<<<< HEAD
// ChaosMeterHUD placeholder
=======
// frontend/src/ui/ChaosMeterHUD.tsx
import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';

interface ChaosFlags {
  vaultstrike_active: boolean;
  mango_war_ongoing: boolean;
  chaos_mode: boolean;
}

interface ChaosStatus {
  flags: ChaosFlags;
  nextEventCountdown: number; // seconds until next world-state ritual
}

export default function ChaosMeterHUD() {
  const { token } = useAuth();
  const [status, setStatus] = useState<ChaosStatus | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStatus = () => {
      fetch('http://localhost:4000/api/chaos/status', {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then(res => {
          if (!res.ok) throw new Error('Failed to fetch chaos status');
          return res.json();
        })
        .then((data: ChaosStatus) => setStatus(data))
        .catch(err => setError(err.message));
    };
    fetchStatus();
    const interval = setInterval(fetchStatus, 10000);
    return () => clearInterval(interval);
  }, [token]);

  if (error) return <div className="p-6 text-red-400">Error: {error}</div>;
  if (!status) return <div className="p-6 text-red-400">Loading Chaos Meter…</div>;

  const { flags, nextEventCountdown } = status;
  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, '0')}`;
  };

  return (
    <div className="p-6 bg-red-900/20 rounded-xl shadow-lg text-red-300">
      <h2 className="text-2xl font-bold mb-4">🔥 Chaos Meter HUD</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {Object.entries(flags).map(([flag, active]) => (
          <div key={flag} className="flex items-center space-x-3">
            <span
              className={`w-4 h-4 rounded-full ${
                active ? 'bg-red-500 animate-pulse' : 'bg-gray-600'
              }`}
            />
            <span className="capitalize">{flag.replace(/_/g, ' ')}</span>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <span className="text-gray-400">Next Ritual In:</span>{' '}
        <span className="font-semibold">{formatTime(nextEventCountdown)}</span>
      </div>
    </div>
  );
}
>>>>>>> e7779e491c30cadc9ea5092e7302c9177f43fff1
