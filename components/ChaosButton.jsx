import React from 'react';

const ChaosButton = ({ onClick, isLocked }) => {
  return (
    <button
      className={\`p-3 text-white font-bold rounded-xl transition-all duration-300 \${isLocked ? 'bg-gray-800' : 'bg-red-600 hover:bg-red-700'}\`}
      disabled={isLocked}
      onClick={onClick}
    >
      {isLocked ? 'Chaos Locked' : 'UNLEASH CHAOS'}
    </button>
  );
};

export default ChaosButton;