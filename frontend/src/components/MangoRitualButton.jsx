
import React from 'react';

export default function MangoRitualButton({ onTrigger }) {
  return (
    <button
      className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-full shadow-lg animate-pulse"
      onClick={onTrigger}
    >
      🥭 Begin Mango Ritual
    </button>
  );
}
