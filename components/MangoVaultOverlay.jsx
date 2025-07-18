import React from 'react';

const MangoVaultOverlay = ({ vaultValue, percentFilled }) => (
  <div className="p-4 bg-black text-yellow-300 border border-yellow-500 rounded-xl shadow">
    <h3 className="text-lg font-bold mb-2">🥭 Mango Vault</h3>
    <p className="text-md">Current Value: ${vaultValue.toFixed(2)}</p>
    <div className="mt-2 w-full bg-yellow-100 rounded">
      <div
        className="bg-yellow-400 h-4 rounded"
        style={{ width: \`\${Math.min(percentFilled, 100)}%\` }}
      />
    </div>
    <p className="text-sm mt-1">{percentFilled.toFixed(1)}% filled</p>
  </div>
);

export default MangoVaultOverlay;