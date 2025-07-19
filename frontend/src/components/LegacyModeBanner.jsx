
import React from 'react';

export default function LegacyModeBanner({ legacy }) {
  return legacy ? (
    <div className="text-yellow-400 text-sm font-bold p-2 bg-zinc-900 border border-yellow-600 rounded shadow">
      ⚠️ LEGACY MODE: You are in fallback mode.
    </div>
  ) : null;
}
