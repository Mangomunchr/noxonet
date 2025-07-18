
import React from 'react';

export default function ChaosOverlayBeacon({ active }) {
  return active ? (
    <div className="fixed top-4 left-4 bg-red-800 text-white text-xs px-3 py-1 rounded shadow-lg animate-pulse z-50">
      ⚠️ CHAOS ACTIVE
    </div>
  ) : null;
}
