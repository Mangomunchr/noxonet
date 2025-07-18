
import React from 'react';

export default function MangoLockStatus({ locked }) {
  return (
    <div className={\`
      px-4 py-1 rounded-full text-xs font-bold text-white border
      \${locked ? 'bg-red-700 border-red-400' : 'bg-green-700 border-green-400'}
    \`}>
      {locked ? '🔒 Mango Lock Active' : '🔓 Open Access'}
    </div>
  );
}
