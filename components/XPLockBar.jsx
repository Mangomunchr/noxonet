
import React from 'react';

export default function XPLockBar({ value = 70 }) {
  return (
    <div className="w-full bg-zinc-700 h-3 rounded-full overflow-hidden border border-zinc-600">
      <div
        className="bg-gradient-to-r from-yellow-400 to-lime-500 h-full transition-all"
        style={{ width: \`\${value}%\` }}
      ></div>
    </div>
  );
}
