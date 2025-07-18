
import React from 'react';

export default function RenderXPBoostFlare({ multiplier }) {
  return (
    <div className="bg-gradient-to-br from-blue-700 to-purple-800 text-white text-sm px-3 py-2 rounded-full font-bold">
      ⚡ Render XP Boost: {multiplier}x
    </div>
  );
}
