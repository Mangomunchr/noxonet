
import React from 'react';

export default function VaultAuditTrail({ entries }) {
  return (
    <div className="bg-zinc-950 p-3 rounded-lg border border-cyan-500 text-cyan-300 text-xs font-mono h-40 overflow-y-auto">
      📜 Vault Audit Trail:
      <ul className="mt-1">
        {entries.map((e, i) => (
          <li key={i}>• {e}</li>
        ))}
      </ul>
    </div>
  );
}
