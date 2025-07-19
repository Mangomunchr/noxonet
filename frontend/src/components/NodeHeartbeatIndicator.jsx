
import React from 'react';

export default function NodeHeartbeatIndicator({ alive }) {
  return (
    <div className={\`text-xs font-mono px-2 py-1 rounded-full \${alive ? 'bg-green-800 text-green-200' : 'bg-gray-700 text-gray-300'}\`}>
      💓 Node {alive ? 'Alive' : 'Offline'}
    </div>
  );
}
