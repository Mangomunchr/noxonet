
import React, { useEffect, useState } from 'react';

export default function MangoMonsoonTimer({ seconds = 300 }) {
  const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => Math.max(0, prev - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (s) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return \`\${m}m \${sec}s\`;
  };

  return (
    <div className="bg-yellow-900 text-white p-4 rounded-lg border border-yellow-700">
      <div className="text-sm uppercase text-yellow-400 mb-1">Mango Monsoon Countdown</div>
      <div className="text-2xl font-mono">{formatTime(timeLeft)}</div>
    </div>
  );
}
