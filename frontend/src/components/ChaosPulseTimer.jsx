
import React, { useEffect, useState } from 'react';

export default function ChaosPulseTimer({ interval }) {
  const [seconds, setSeconds] = useState(interval);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((s) => (s <= 1 ? interval : s - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, [interval]);

  return (
    <div className="text-xs font-mono text-red-400 bg-black border border-red-700 px-3 py-1 rounded-full w-fit">
      ⏱️ Chaos Pulse: {seconds}s
    </div>
  );
}
