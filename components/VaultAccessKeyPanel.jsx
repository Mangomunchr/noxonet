
import React, { useState } from 'react';

export default function VaultAccessKeyPanel() {
  const [copied, setCopied] = useState(false);
  const key = "NOXO-KEY-" + Math.random().toString(36).substring(2, 10).toUpperCase();

  const copyKey = () => {
    navigator.clipboard.writeText(key);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-zinc-800 p-4 rounded-lg border border-zinc-700">
      <div className="text-sm text-zinc-400 mb-1">Vault Access Key</div>
      <div className="flex justify-between items-center text-white text-lg font-mono">
        <span>{key}</span>
        <button
          onClick={copyKey}
          className="ml-4 bg-lime-600 text-black px-3 py-1 rounded hover:bg-lime-500"
        >
          {copied ? "✅ Copied" : "📋 Copy"}
        </button>
      </div>
    </div>
  );
}
