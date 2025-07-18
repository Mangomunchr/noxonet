
import React, { useState, useEffect } from 'react';

export default function VaultChronoTimer({ targetTime }) {
  const [secondsLeft, setSecondsLeft] = useState(Math.floor((targetTime - Date.now()) / 1000));

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft(Math.max(0, Math.floor((targetTime - Date.now()) / 1000)));
    }, 1000);
    return () => clearInterval(interval);
  }, [targetTime]);

  return (
    <div className="text-white text-xs font-mono bg-black px-3 py-2 rounded border border-cyan-500">
      ⏱️ Vault Timer: {secondsLeft}s remaining
    </div>
  );
}
