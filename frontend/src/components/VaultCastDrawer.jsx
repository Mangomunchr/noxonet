
import React, { useState } from 'react';

export default function VaultCastDrawer({ content }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-4 right-4 bg-blue-700 hover:bg-blue-800 text-white px-3 py-2 rounded shadow-lg z-50"
      >
        🌀 Vault Cast
      </button>
      {open && (
        <div className="fixed bottom-16 right-4 w-64 p-3 bg-zinc-900 border border-blue-500 rounded-lg shadow-xl z-40">
          <h3 className="text-blue-300 font-bold text-sm mb-2">Vault Cast Info</h3>
          <div className="text-white text-xs">{content}</div>
        </div>
      )}
    </div>
  );
}
