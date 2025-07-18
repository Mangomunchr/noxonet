
import React from 'react';

export default function CodexRoleReveal({ role }) {
  return (
    <div className="p-3 border border-cyan-400 text-cyan-200 bg-zinc-950 rounded-xl text-sm">
      🧬 You are a <span className="font-bold">{role}</span>
    </div>
  );
}
