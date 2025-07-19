import React from 'react';

export default function SignupAwakening({ onAwaken }) {
  return (
    <div className="p-6 text-white">
      <h2 className="text-2xl font-bold text-amber-400">🌅 Awakening Protocol</h2>
      <p className="mt-2">Welcome to NOXO. Begin your path by syncing your node with your true intent.</p>
      <button
        onClick={onAwaken}
        className="mt-4 px-4 py-2 bg-amber-500 hover:bg-amber-600 rounded"
      >
        Begin Awakening
      </button>
    </div>
  );
}