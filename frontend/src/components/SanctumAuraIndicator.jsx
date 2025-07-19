
import React from 'react';

export default function SanctumAuraIndicator({ aura }) {
  const color = {
    calm: 'blue-500',
    charged: 'purple-500',
    chaos: 'red-600'
  }[aura] || 'gray-400';

  return (
    <div className={\`px-3 py-1 bg-\${color} text-white rounded-full text-xs shadow\`}>
      🔮 Sanctum Aura: {aura}
    </div>
  );
}
