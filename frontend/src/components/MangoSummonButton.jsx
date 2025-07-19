
import React from 'react';

export default function MangoSummonButton({ onSummon }) {
  return (
    <button
      onClick={onSummon}
      className="bg-gradient-to-br from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-red-600 text-black px-4 py-2 rounded-full font-bold shadow-lg"
    >
      🥭 Summon Mango Power
    </button>
  );
}
