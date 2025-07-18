<<<<<<< HEAD
// MangoMonastery placeholder
=======
// frontend/src/ui/MangoMonastery.tsx
import React, { useEffect, useState } from 'react';

interface MonasteryStats {
  totalMonks: number;
  topContributors: string[];
  loreSubmissions: number;
}

export default function MangoMonastery() {
  const [stats, setStats] = useState<MonasteryStats | null>(null);

  useEffect(() => {
    // TODO: replace with API fetch
    setStats({
      totalMonks: 128,
      topContributors: ['NodeMonk_5', 'Rendar_23', 'Monk_42'],
      loreSubmissions: 34,
    });
  }, []);

  if (!stats) return <div className="p-6 text-purple-300">Loading Monastery…</div>;

  return (
    <div className="p-6 bg-purple-900/40 rounded-lg text-purple-200 max-w-md mx-auto">
      <h3 className="text-2xl font-bold mb-4">🌴 Mango Monastery</h3>
      <ul className="space-y-2">
        <li><span className="font-medium">Total NodeMonks:</span> {stats.totalMonks}</li>
        <li>
          <span className="font-medium">Top Contributors:</span> {stats.topContributors.join(', ')}
        </li>
        <li><span className="font-medium">Lore Submissions:</span> {stats.loreSubmissions}</li>
      </ul>
    </div>
  );
}
>>>>>>> e7779e491c30cadc9ea5092e7302c9177f43fff1
