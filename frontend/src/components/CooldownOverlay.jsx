import React from 'react';
import useCooldownTimer from '../hooks/useCooldownTimer';

export default function CooldownOverlay({ until }) {
  const seconds = useCooldownTimer(until);
  if (seconds <= 0) return null;

  return (
    <div className="bg-red-800 text-white p-2 rounded text-sm text-center">
      Ritual on cooldown ⏳ {seconds}s remaining
    </div>
  );
}