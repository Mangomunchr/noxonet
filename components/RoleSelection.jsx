
import React from 'react';

export default function RoleSelection({ onSelect }) {
  const roles = ["Renderling", "Rendar", "NodeMonk", "Vaultling"];
  return (
    <div className="space-x-2">
      {roles.map((role) => (
        <button
          key={role}
          onClick={() => onSelect(role)}
          className="px-3 py-1 rounded bg-zinc-700 text-white hover:bg-lime-500 hover:text-black"
        >
          {role}
        </button>
      ))}
    </div>
  );
}
