import React from 'react';

export default function EchoConsole({ message }) {
  return (
    <div className="bg-gray-800 text-white px-4 py-2 rounded mt-4 shadow-inner">
      <span className="text-sm text-green-400">🟢 Echo:</span> {message}
    </div>
  );
}
