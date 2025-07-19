
import React from 'react';

export default function OverdriveIgnition({ onIgnite }) {
  return (
    <button
      onClick={onIgnite}
      className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-full shadow-lg"
    >
      🚀 IGNITE OVERDRIVE
    </button>
  );
}
