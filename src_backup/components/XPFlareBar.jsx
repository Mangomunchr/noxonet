
import React from 'react';
export default function XPFlareBar({ xp }) {
  return (
    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden mt-3">
      <div className="bg-gradient-to-r from-green-400 to-lime-500 h-2" style={{ width: `${xp}%` }} />
    </div>
  );
}
