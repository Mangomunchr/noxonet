
import React from 'react';

export default function ChaosBeaconMini({ chaosLevel }) {
  return (
    <div className="text-xs font-bold text-red-400 bg-zinc-800 px-2 py-1 rounded-full">
      ⚠️ CHAOS: Level {chaosLevel}
    </div>
  );
}
