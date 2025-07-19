import React from 'react';

const RoleUnlockCard = ({ role, unlocked, xp }) => (
  <div className={\`p-4 rounded-lg border \${unlocked ? 'border-green-500 bg-green-900' : 'border-gray-700 bg-gray-800'} text-white mb-3\`}>
    <h4 className="text-lg font-bold mb-1">{role.name}</h4>
    <p className="text-sm">XP Needed: {role.threshold}</p>
    <p className="text-sm">Your XP: {xp}</p>
    {unlocked && <p className="text-green-300 font-semibold mt-2">Unlocked ✔</p>}
  </div>
);

export default RoleUnlockCard;