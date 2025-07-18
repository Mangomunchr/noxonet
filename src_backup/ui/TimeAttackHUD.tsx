// frontend/src/ui/TimeAttackHUD.tsx
import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';

interface LeaderboardEntry {
  user: string;
  laps: number;
}

interface TimeAttackStatus {
  active: boolean;
  remainingSeconds: number;
  lapsCompleted: number;
  leaderboard: LeaderboardEntry[];
}

export default function TimeAttackHUD() {
  const { token } = useAuth();
  const [status, setStatus] = useState<TimeAttackStatus | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [reporting, setReporting] = useState(false);

  // Fetch status every 5 seconds
  useEffect(() => {
    let timer: number;
    const fetchStatus = () => {
      fetch('http://localhost:4000/api/ritual/timeattack/status', {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then(res => {
          if (!res.ok) throw new Error('Failed to load Time Attack status');
          return res.json();
        })
        .then((data: TimeAttackStatus) => {
          setStatus(data);
        })
        .catch(err => setError(err.message));
    };
    fetchStatus();
    timer = window.setInterval(fetchStatus, 5000);
    return () => clearInterval(timer);
  }, [token]);

  const reportLap = () => {
    if (!status?.active) return;
    setReporting(true);
    fetch('http://localhost:4000/api/ritual/timeattack/lap', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`
      },
    })
      .then(res => {
        if (!res.ok) throw new Error('Lap report failed');
        return res.json();
      })
      .then((data: { lapsCompleted: number }) => {
        setStatus(prev => prev ? { ...prev, lapsCompleted: data.lapsCompleted } : prev);
      })
      .catch(err => setError(err.message))
      .finally(() => setReporting(false));
  };

  if (error) return <div className="p-6 text-red-400">Error: {error}</div>;
  if (!status) return <div className="p-6 text-purple-300">Loading Time Attack…</div>;

  return (
    <div className="p-6 bg-purple-900/20 rounded-xl shadow-lg text-purple-200">
      <h2 className="text-2xl font-bold mb-4">🏁 Time Attack</h2>

      <div className="mb-4">
        <span className="text-gray-400">Status:</span>{' '}
        <span className={status.active ? 'text-green-400' : 'text-gray-600'}>
          {status.active ? 'ACTIVE' : 'INACTIVE'}
        </span>
      </div>

      <div className="mb-4">
        <span className="text-gray-400">Time Left:</span>{' '}
        <span className="font-semibold">{status.remainingSeconds}s</span>
      </div>

      <div className="mb-6">
        <span className="text-gray-400">Your Laps:</span>{' '}
        <span className="font-semibold">{status.lapsCompleted}</span>
      </div>

      <button
        onClick={reportLap}
        disabled={!status.active || reporting}
        className={`px-6 py-3 mb-6 rounded-full font-bold ${
          reporting ? 'bg-gray-600' : 'bg-purple-500 hover:bg-purple-600'
        }`}
      >
        {reporting ? 'Reporting…' : 'Complete Lap'}
      </button>

      <div>
        <h3 className="text-lg font-semibold mb-2">🏆 Leaderboard</h3>
        <ul className="list-decimal pl-6 space-y-1">
          {status.leaderboard.map((entry, i) => (
            <li key={i}>
              <span className="font-medium">{entry.user}</span> – {entry.laps} laps
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}