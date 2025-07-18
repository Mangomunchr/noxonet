<<<<<<< HEAD
// CodexScroll placeholder
=======
// frontend/src/ui/CodexScroll.tsx
import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
} from 'recharts';

interface CodexEntry {
  date: string;
  type: string;
  description: string;
  xpChange: number;
}

export default function CodexScroll() {
  const { token } = useAuth();
  const [entries, setEntries] = useState<CodexEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('http://localhost:4000/api/codex/history', {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => {
        if (!res.ok) throw new Error('Failed to load codex history');
        return res.json();
      })
      .then(data => {
        setEntries(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [token]);

  if (loading) return <div className="p-6 text-yellow-300">Loading Codex…</div>;
  if (error)   return <div className="p-6 text-red-400">Error: {error}</div>;

  return (
    <div className="p-6 bg-yellow-900/20 rounded-xl shadow-lg text-yellow-200">
      <h2 className="text-2xl font-bold mb-4">📜 Codex Scroll</h2>
      <div className="h-48 mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={entries}>
            <CartesianGrid stroke="#444" strokeDasharray="3 3" />
            <XAxis dataKey="date" tick={{ fill: '#aaa' }} />
            <YAxis tick={{ fill: '#aaa' }} />
            <Tooltip contentStyle={{ backgroundColor: '#222' }} itemStyle={{ color: '#fff' }} />
            <Bar dataKey="xpChange" fill="#ffdf00" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="space-y-4 max-h-64 overflow-y-auto">
        {entries.map((e, i) => (
          <div key={i} className="p-3 bg-yellow-800/30 rounded-lg">
            <div className="flex justify-between">
              <span className="font-medium">{e.date}</span>
              <span className={\`font-semibold \${e.xpChange >= 0 ? 'text-green-400' : 'text-red-400'}\`}>
                {e.xpChange >= 0 ? \`+\${e.xpChange}\` : e.xpChange} XP
              </span>
            </div>
            <div className="mt-1">
              <span className="font-bold">{e.type}</span>: {e.description}
            </div>
          </div>
        ))}
      </div>
    </div>
);
}
>>>>>>> e7779e491c30cadc9ea5092e7302c9177f43fff1
