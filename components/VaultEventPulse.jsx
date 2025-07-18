
import React from 'react';

export default function VaultEventPulse({ type = "normal" }) {
  const pulseStyle = {
    normal: "bg-zinc-600",
    flare: "bg-orange-400 animate-ping",
    eclipse: "bg-purple-600 animate-pulse",
    monsoon: "bg-blue-500 animate-bounce"
  };

  return (
    <div className={\`w-3 h-3 rounded-full \${pulseStyle[type] || "bg-zinc-600"}\`} />
  );
}
