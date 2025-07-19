
import React from 'react';

export default function RoleIdentityBadge({ role }) {
  const badgeMap = {
    "Renderling": "bg-lime-600 text-black",
    "Rendar": "bg-cyan-500 text-black",
    "NodeMonk": "bg-purple-700 text-white",
    "Vaultling": "bg-zinc-500 text-white",
  };

  return (
    <span className={\`px-3 py-1 rounded-full text-sm font-bold \${badgeMap[role] || "bg-zinc-800"}\`}>
      🧬 {role}
    </span>
  );
}
