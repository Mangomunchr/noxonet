<<<<<<< HEAD
// NodeSoulViewer placeholder
=======
// frontend/src/ui/NodeSoulViewer.tsx
import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';

interface NodeSoulData {
  userId: string;
  nsr: number;
  rd: number;
  volatility: number;
  tier: string;
  sigils: string[];
}

export default function NodeSoulViewer() {
  const { token } = useAuth();
  const [data, setData] = useState<NodeSoulData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('http://localhost:4000/api/nodesoul/status', {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => {
        if (!res.ok) throw new Error('Failed to load NodeSoul data');
        return res.json();
      })
      .then(d => {
        setData(d);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [token]);

  if (loading) return <div className="p-6 text-purple-300">Scanning soul…</div>;
  if (error)   return <div className="p-6 text-red-400">Error: {error}</div>;
  if (!data)  return null;

  return (
    <div className="p-6 bg-purple-900/20 rounded-xl shadow-lg text-purple-200">
      <h2 className="text-2xl font-bold mb-4">🧠 NodeSoul Viewer</h2>
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <div className="text-sm text-gray-400">NodeSoul Rating (NSR)</div>
          <div className="text-xl font-semibold">{data.nsr}</div>
        </div>
        <div>
          <div className="text-sm text-gray-400">Rating Deviation (RD)</div>
          <div className="text-xl font-semibold">{data.rd}</div>
        </div>
        <div>
          <div className="text-sm text-gray-400">Volatility</div>
          <div className="text-xl font-semibold">{(data.volatility * 100).toFixed(1)}%}</div>
        </div>
        <div>
          <div className="text-sm text-gray-400">Current Tier</div>
          <div className="text-xl font-semibold">{data.tier}</div>
        </div>
      </div>
      <div>
        <div className="text-sm text-gray-400 mb-2">Sigils Earned</div>
        <ul className="flex flex-wrap gap-2">
          {data.sigils.map((s, i) => (
            <li key={i} className="px-3 py-1 bg-purple-700/50 rounded-full text-sm">{s}</li>
          ))}
        </ul>
      </div>
    </div>
);
}
>>>>>>> e7779e491c30cadc9ea5092e7302c9177f43fff1
