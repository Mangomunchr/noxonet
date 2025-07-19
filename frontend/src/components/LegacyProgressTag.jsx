
import React from 'react';

export default function LegacyProgressTag({ tier }) {
  return (
    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-yellow-700 text-white border border-yellow-300">
      🏅 Legacy Tier: {tier}
    </span>
  );
}
