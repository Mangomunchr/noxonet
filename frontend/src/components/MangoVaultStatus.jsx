
import React from 'react';

export default function MangoVaultStatus({ status }) {
  return (
    <div className="p-3 bg-yellow-800 text-yellow-100 rounded-lg text-sm font-mono border border-yellow-400">
      🥭 Vault Status: {status}
    </div>
  );
}
