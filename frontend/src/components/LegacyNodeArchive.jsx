import React, { useEffect, useState } from 'react';

const LegacyNodeArchive = () => {
  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    fetch('/api/legacy-nodes')
      .then(res => res.json())
      .then(data => setNodes(data));
  }, []);

  return (
    <div className="bg-gray-950 text-gray-300 border border-gray-700 p-4 rounded-xl">
      <h3 className="text-lg font-bold mb-2">📦 Legacy Node Archive</h3>
      <ul className="text-sm space-y-1">
        {nodes.map((node, i) => (
          <li key={i}>
            {node.retiredAt} — <strong>{node.name}</strong> ({node.rank})  
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LegacyNodeArchive;