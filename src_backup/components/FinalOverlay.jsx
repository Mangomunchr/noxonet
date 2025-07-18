
import React from 'react';
export default function FinalOverlay({ visible, onClose }) {
  if (!visible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-[#111] p-8 rounded-lg text-center text-white w-96 shadow-lg border border-green-400">
        <h2 className="text-2xl font-bold text-green-300">🌌 Vault Awakened</h2>
        <p className="mt-2">You’ve accessed the full Phase 1.5 Vault System.</p>
        <p className="text-green-500 mt-4">Welcome to NodeTemple.</p>
        <button className="mt-6 px-4 py-2 bg-green-500 text-black rounded hover:bg-green-400" onClick={onClose}>Enter</button>
      </div>
    </div>
  );
}
