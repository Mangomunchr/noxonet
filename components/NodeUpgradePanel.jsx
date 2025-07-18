
import React from 'react';

export default function NodeUpgradePanel({ upgrades }) {
  return (
    <div className="text-xs bg-black border border-green-500 p-3 rounded font-mono text-green-300">
      🛠️ Node Upgrades:
      <ul className="mt-2 list-disc list-inside">
        {upgrades.map((u, i) => <li key={i}>{u}</li>)}
      </ul>
    </div>
  );
}
