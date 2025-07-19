import React, { useEffect, useState } from 'react';

const NodeSoulMemoryLog = ({ userId }) => {
  const [memories, setMemories] = useState([]);

  useEffect(() => {
    fetch(`/api/nodesoul/${userId}`)
      .then(res => res.json())
      .then(data => setMemories(data));
  }, [userId]);

  return (
    <div className="bg-neutral-900 text-neutral-200 p-4 border border-gray-600 rounded-xl">
      <h3 className="text-lg font-bold mb-2">🧠 NodeSoul Memory</h3>
      <ul className="text-sm space-y-1">
        {memories.map((m, i) => (
          <li key={i}>
            {m.timestamp} — <strong>{m.type}</strong>: {m.detail}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NodeSoulMemoryLog;