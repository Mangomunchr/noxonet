
import React from 'react';
export default function StreakMeter({ streak }) {
  return (
    <div className="text-center my-3">
      <p className="text-white">🔥 Streak: {streak} jobs</p>
      <div className="h-2 bg-orange-400 rounded" style={{ width: `${Math.min(100, streak * 10)}%` }}></div>
    </div>
  );
}
