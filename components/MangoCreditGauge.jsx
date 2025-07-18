
import React from 'react';

export default function MangoCreditGauge({ credits }) {
  return (
    <div className="bg-black border border-yellow-300 p-2 rounded text-xs text-yellow-200">
      💳 Mango Credits: <strong>{credits}</strong>
    </div>
  );
}
