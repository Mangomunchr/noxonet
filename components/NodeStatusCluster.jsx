
import React from 'react';

<<<<<<< HEAD
const NodeStatusCluster = ({ nodes }) => {
  return (
    <div className="grid grid-cols-4 gap-2 p-2">
      {nodes.map((node, i) => (
        <div
          key={i}
          className={\`h-4 w-4 rounded-full \${node.active ? 'bg-green-400' : 'bg-gray-600'}\`}
          title={\`Node \${i + 1}: \${node.active ? 'Active' : 'Idle'}\`}
        />
      ))}
    </div>
  );
};

export default NodeStatusCluster;
=======
export default function NodeStatusCluster({ nodes }) {
  return (
    <div className="flex flex-wrap gap-2">
      {nodes.map((node, idx) => (
        <div key={idx}
             className={\`w-4 h-4 rounded-full \${node.active ? "bg-green-400" : "bg-zinc-700"}\`}
             title={node.active ? "Synced" : "Idle"} />
      ))}
    </div>
  );
}
>>>>>>> e7779e491c30cadc9ea5092e7302c9177f43fff1
