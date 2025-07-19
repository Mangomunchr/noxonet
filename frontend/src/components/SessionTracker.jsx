
import React, { useState, useEffect } from 'react';

export default function SessionTracker() {
  const [start] = useState(Date.now());
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor((now - start) / 60000);
  const seconds = Math.floor(((now - start) % 60000) / 1000);

  return (
    <div className="text-sm text-zinc-400">
      ⏱️ Session: {minutes}m {seconds}s
    </div>
  );
}
