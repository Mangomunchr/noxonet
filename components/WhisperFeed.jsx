
import React, { useState, useEffect } from 'react';

const sampleWhispers = [
  "Node d7f9 activated at 2:14 AM",
  "MangoSignal detected in quadrant 3",
  "⚠️ NodeMonk XP penalty triggered",
  "Whisper: Vault anomaly resolved",
  "New Render job queued: Job#392"
];

export default function WhisperFeed() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessages((prev) => [
        sampleWhispers[Math.floor(Math.random() * sampleWhispers.length)],
        ...prev.slice(0, 9)
      ]);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-green-400 p-4 rounded border border-green-800 font-mono text-sm max-h-48 overflow-y-auto">
      <div className="uppercase text-green-500 mb-1">📡 Whisper Feed</div>
      {messages.map((m, i) => <div key={i}>• {m}</div>)}
    </div>
  );
}
