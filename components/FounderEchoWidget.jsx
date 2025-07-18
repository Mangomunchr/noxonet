
import React from 'react';

export default function FounderEchoWidget({ message }) {
  return (
    <div className="border-l-4 border-fuchsia-500 pl-3 text-sm text-fuchsia-200 italic bg-zinc-900 p-2 rounded">
      🗣️ Founder Echo: “{message}”
    </div>
  );
}
