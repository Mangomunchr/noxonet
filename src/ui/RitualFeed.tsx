<<<<<<< HEAD
// RitualFeed placeholder
=======
// frontend/src/ui/RitualFeed.tsx
import React, { useEffect, useState } from 'react';

interface FeedEntry {
  id: string;
  text: string;
  timestamp: string;
}

export default function RitualFeed() {
  const [feed, setFeed] = useState<FeedEntry[]>([]);

  useEffect(() => {
    // TODO: replace with real fetch
    setFeed([
      { id: '1', text: '🔔 Vaultstrike #7 started.', timestamp: '2025-07-14 12:00' },
      { id: '2', text: '🔥 Mango War triggered!', timestamp: '2025-07-13 08:30' },
      { id: '3', text: '🏁 Time Attack: NodeMonk_12 completed 15 laps.', timestamp: '2025-07-12 18:45' },
    ]);
  }, []);

  return (
    <div className="p-4 bg-gray-900/40 rounded-lg max-h-64 overflow-y-auto text-white">
      <h3 className="text-lg font-bold mb-2">🔥 Ritual Feed</h3>
      <ul className="space-y-2 text-sm">
        {feed.map(e => (
          <li key={e.id} className="border-b border-gray-700 pb-1">
            <span className="font-medium">{e.timestamp}:</span> {e.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
>>>>>>> e7779e491c30cadc9ea5092e7302c9177f43fff1
