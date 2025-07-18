
import React from 'react';

export default function NodeUptimeBadge({ uptime }) {
  return (
    <span className="px-3 py-1 bg-green-900 text-green-300 rounded-full text-xs font-mono">
      ⏱️ Uptime: {uptime} hrs
    </span>
  );
}
