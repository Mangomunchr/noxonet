
import React from 'react';

export default function RoleRitualCastPanel({ role = "NodeMonk", onCast }) {
  return (
    <div className="p-4 bg-purple-900 border border-purple-700 rounded-lg text-white">
      <div className="text-sm uppercase text-purple-300 mb-1">Ritual Caster</div>
      <div className="text-lg font-bold">🧙 {role} Ritual</div>
      <button
        onClick={onCast}
        className="mt-2 w-full py-2 bg-purple-600 hover:bg-purple-500 text-black rounded"
      >
        ✨ Cast {role}-Bound Ritual
      </button>
    </div>
  );
}
