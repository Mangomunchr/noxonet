
import React from 'react';
export default function MonkSelector({ onSelect }) {
  const monks = ['Renderling', 'Monkling', 'NodeMonk', 'Mythic Monk'];
  return (
    <div className="mt-4">
      <p className="text-green-300 font-medium">🔮 Choose your path:</p>
      <div className="flex gap-2 mt-2">
        {monks.map((rank, i) => (
          <button key={i} onClick={() => onSelect(rank)} className="px-3 py-1 rounded bg-[#222] text-white border border-green-400 hover:bg-green-500 hover:text-black transition">
            {rank}
          </button>
        ))}
      </div>
    </div>
  );
}
