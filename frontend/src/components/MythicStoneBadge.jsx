
import React from 'react';

export default function MythicStoneBadge({ name, tier }) {
  return (
    <div className="border border-purple-500 bg-black px-3 py-2 rounded-lg text-sm text-purple-200">
      🪨 <span className="font-bold">{name}</span> • Tier {tier}
    </div>
  );
}
