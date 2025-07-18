
import React from 'react';

export default function XPSummaryCard({ xp = 0, tier = 'None', delta = 0 }) {
  const badge = delta > 0 ? "text-green-400" : delta < 0 ? "text-red-400" : "text-zinc-400";
  return (
    <div className="bg-zinc-800 rounded-xl p-4 w-full max-w-sm space-y-1 text-white border border-zinc-600">
      <div className="text-sm uppercase text-zinc-500">XP Summary</div>
      <div className="text-xl font-bold">✨ {xp} XP</div>
      <div className={\`text-sm \${badge}\`}>
        Δ {delta >= 0 ? '+' : ''}{delta}
      </div>
      <div className="text-xs text-zinc-400">Tier: {tier}</div>
    </div>
  );
}
