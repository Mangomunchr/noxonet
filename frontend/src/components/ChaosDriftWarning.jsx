
import React from 'react';

export default function ChaosDriftWarning({ active }) {
  if (!active) return null;
  return (
    <div className="text-sm text-red-400 bg-red-900 px-4 py-2 rounded-xl">
      ⚠️ Chaos Drift Active – Ritual Energy unstable.
    </div>
  );
}
