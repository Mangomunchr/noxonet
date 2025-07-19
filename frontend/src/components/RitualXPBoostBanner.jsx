
import React from 'react';

export default function RitualXPBoostBanner({ boostLevel }) {
  return (
    <div className="p-2 bg-gradient-to-r from-orange-700 to-red-600 text-white text-xs text-center font-bold rounded shadow animate-pulse">
      ⚔️ Ritual XP Boost Active: +{boostLevel}% XP!
    </div>
  );
}
