import React from 'react';

export default function PublicTrustIndexBar({ trust }) {
  const color = trust > 75 ? 'bg-green-400' : trust > 40 ? 'bg-yellow-400' : 'bg-red-500';

  return (
    <div className="bg-gray-800 p-4 rounded-xl">
      <h4 className="text-white text-sm mb-1">Public Trust Index</h4>
      <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
        <div
          className={`h-full ${color}`}
          style={{ width: `${trust}%` }}
        />
      </div>
      <p className="text-xs text-gray-400 mt-1 text-right">{trust}%</p>
    </div>
  );
}