
import React from 'react';

export default function MiniVaultUplink({ status = 'connected' }) {
  const color = status === 'connected' ? 'green' : status === 'error' ? 'red' : 'yellow';
  return (
    <div className={\`bg-\${color}-900 border border-\${color}-600 text-\${color}-200 px-4 py-2 rounded-lg text-sm\`}>
      Vault Uplink: <b className="uppercase">{status}</b>
    </div>
  );
}
