
import React from 'react';

export default function MangoVaultProgress({ current, max }) {
  const percent = Math.min((current / max) * 100, 100);
  return (
    <div className="text-yellow-200 text-xs font-mono">
      🍯 Mango Vault: {current}/{max}
      <div className="bg-yellow-900 w-full h-2 mt-1 rounded overflow-hidden">
        <div
          className="bg-yellow-400 h-2 transition-all"
          style={{ width: \`\${percent}%\` }}
        />
      </div>
    </div>
  );
}
