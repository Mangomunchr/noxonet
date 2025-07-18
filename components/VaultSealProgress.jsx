
import React from 'react';

export default function VaultSealProgress({ progress = 0 }) {
  return (
    <div className="w-full bg-zinc-800 rounded-xl overflow-hidden border border-zinc-600">
      <div
        className="bg-lime-500 text-xs text-black p-1 text-center"
        style={{ width: \`\${progress}%\` }}
      >
        🔐 Seal Progress: {progress}%
      </div>
    </div>
  );
}
