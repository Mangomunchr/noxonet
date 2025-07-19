
import React from 'react';

export default function NodeEnergySpark({ active }) {
  return (
    <div className={\`
      w-3 h-3 rounded-full border border-white shadow-md
      \${active ? 'bg-lime-300 animate-ping' : 'bg-zinc-700'}
    \`} />
  );
}
