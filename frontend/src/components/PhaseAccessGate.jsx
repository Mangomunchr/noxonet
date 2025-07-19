import React from 'react';

export default function PhaseAccessGate({ currentPhase, requiredPhase, children }) {
  const locked = currentPhase < requiredPhase;

  if (locked) {
    return (
      <div className="bg-gray-900 border border-gray-600 text-gray-400 p-4 rounded-xl text-center">
        🔒 This feature unlocks in Phase {requiredPhase}.
      </div>
    );
  }

  return <>{children}</>;
}