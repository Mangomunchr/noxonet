
import React from 'react';

export default function NodeMapGrid({ nodes }) {
  return (
    <div className="grid grid-cols-8 gap-2 bg-zinc-900 p-4 rounded-xl border border-blue-700">
      <h2 className="col-span-8 text-blue-400 font-bold mb-2">🗺️ NodeMap Activity</h2>
      {nodes.map((node, index) => (
        <div
          key={index}
          className={\`
            h-4 w-4 rounded-full
            \${node.online ? 'bg-green-400 animate-pulse' : 'bg-zinc-600'}
          \`}
          title={node.id}
        />
      ))}
    </div>
  );
}
