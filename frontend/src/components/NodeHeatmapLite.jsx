
import React from 'react';
export default function NodeHeatmapLite({ nodes }) {
  return (
    <div className="grid grid-cols-8 gap-1 my-4">
      {nodes.map((node, i) => (
        <div key={i} className="w-4 h-4 rounded" style={{ backgroundColor: node.available ? 'lime' : 'gray' }}></div>
      ))}
    </div>
  );
}
