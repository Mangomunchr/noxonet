
import React from 'react';

export default function CastVisualFlash({ active }) {
  return (
    <div className={\`
      h-2 w-full rounded-xl transition-all duration-500
      \${active ? 'bg-green-400 shadow-md animate-pulse' : 'bg-zinc-700'}
    \`} />
  );
}
