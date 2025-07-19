
import React, { useEffect, useState } from 'react';

function DailyRitualTracker() {
  const [ritual, setRitual] = useState(null);

  useEffect(() => {
    const fetchRitual = async () => {
      const rendarId = localStorage.getItem('rendarId');
      try {
        const res = await fetch(`http://localhost:3001/api/daily-ritual?rendarId=${rendarId}`);
        const data = await res.json();
        setRitual(data);
      } catch (err) {
        console.error("Failed to fetch ritual status:", err);
      }
    };

    fetchRitual();
    const interval = setInterval(fetchRitual, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!ritual) return <div className="p-4 text-gray-400">Loading ritual...</div>;

  return (
    <div className="p-4 bg-black rounded border border-pink-500 text-pink-300 mt-6">
      <h2 className="text-lg font-bold">🎯 Daily Ritual</h2>
      <p className="mt-1">
        {ritual.complete
          ? "✅ Ritual Complete – Bonus Beans Earned!"
          : `Summons Today: ${ritual.summonsToday} / ${ritual.goal}`}
      </p>
    </div>
  );
}

export default DailyRitualTracker;
