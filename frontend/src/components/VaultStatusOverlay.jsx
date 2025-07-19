import React from 'react';

const VaultStatusOverlay = ({ status }) => {
  const statusColor = status.chaosLocked ? 'text-red-500' : 'text-green-400';

  return (
    <div className="p-4 bg-gray-900 rounded-lg text-white shadow-lg">
      <h3 className="text-lg font-bold mb-2">Vault Status</h3>
      <div className={\`text-md font-semibold \${statusColor}\`}>
        {status.chaosLocked ? 'CHAOS LOCKED' : 'OPEN FOR SUMMONS'}
      </div>
      <div className="text-sm mt-2">
        Load: {status.load}% <br />
        Available Speeds: {status.availableSpeeds.join(', ')}
      </div>
    </div>
  );
};

export default VaultStatusOverlay;