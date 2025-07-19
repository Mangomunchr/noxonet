
import React from 'react';

export default function FactionOverlayTag({ name, color }) {
  return (
    <div
      className={\`
        px-3 py-1 text-xs rounded-xl font-bold text-white border
        \${color === 'chaos' ? 'bg-red-700 border-red-500' : ''}
        \${color === 'vault' ? 'bg-green-700 border-green-500' : ''}
        \${color === 'neutral' ? 'bg-zinc-600 border-zinc-400' : ''}
      \`}
    >
      {name}
    </div>
  );
}
