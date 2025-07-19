
import React from 'react';
export default function VaultAuraIndicator({ level }) {
  const colors = ['gray', 'green', 'yellow', 'red'];
  const aura = colors[Math.min(level, colors.length - 1)];
  return (
    <div className="rounded p-2 border text-center" style={{ borderColor: aura, color: aura }}>
      Vault Aura: <strong>{aura.toUpperCase()}</strong>
    </div>
  );
}
