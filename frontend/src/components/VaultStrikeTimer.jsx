
import React, { useEffect, useState } from 'react';

export default function VaultStrikeTimer({ nextStrikeTime }) {
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = new Date(nextStrikeTime) - now;
      if (diff > 0) {
        const mins = Math.floor(diff / 60000);
        const secs = Math.floor((diff % 60000) / 1000);
        setCountdown(\`\${mins}m \${secs}s\`);
      } else {
        setCountdown("⚡ STRIKE!");
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [nextStrikeTime]);

  return (
    <div className="text-pink-400 text-xs font-mono">
      ⏳ Vault Strike in: {countdown}
    </div>
  );
}
