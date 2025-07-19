
import React from 'react';

export default function RenderStreakFlare({ streak }) {
  const color = streak >= 10 ? 'text-green-400' : 'text-white';
  return (
    <div className={\`font-mono text-xs \${color}\`}>
      🔥 Streak: {streak} renders in a row!
    </div>
  );
}
