import React, { useState } from 'react';

export default function VaultFX() {
  const [showFX, setShowFX] = useState(false);

  const triggerFX = () => {
    setShowFX(true);
    setTimeout(() => setShowFX(false), 1000);
  };

  return (
    <div>
      <button
        onClick={triggerFX}
        className="px-3 py-1 bg-green-600 text-white rounded"
      >
        Trigger Vault FX
      </button>
      {showFX && (
        <div className="mt-4 text-3xl animate-pulse text-green-300 font-bold">
          💥 VAULT BURST!
        </div>
      )}
    </div>
  );
}
