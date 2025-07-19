
import React from 'react';

export default function ChronicleOfFlame({ entries }) {
  return (
    <div className="bg-black border-l-4 border-orange-500 text-orange-200 px-4 py-2 text-sm font-serif">
      🔥 Chronicle of Flame:
      <ul className="mt-2 list-disc list-inside">
        {entries.map((entry, i) => <li key={i}>{entry}</li>)}
      </ul>
    </div>
  );
}
