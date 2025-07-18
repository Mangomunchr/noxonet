
import React from 'react';

export default function VaultAuraScanner({ signal }) {
  return (
    <div className="p-3 bg-gradient-to-r from-purple-900 to-black text-purple-200 rounded text-xs font-mono border border-purple-700">
      🌌 Aura Scan: {signal}
    </div>
  );
}
