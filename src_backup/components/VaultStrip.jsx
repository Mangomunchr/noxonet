
import React from 'react';
export default function VaultStrip({ earnings }) {
  return (
    <div className="w-full bg-green-600 text-white p-2 text-center font-semibold">
      🔥 Real-time Vault: {earnings} CoolBeans earned
    </div>
  );
}
