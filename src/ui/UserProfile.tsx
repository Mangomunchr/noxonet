<<<<<<< HEAD
// UserProfile placeholder
=======
// frontend/src/ui/UserProfile.tsx
import React from 'react';

export default function UserProfile() {
  // TODO: wire useNoxo() or API fetch
  const profile = {
    username: 'NodeMonk_12',
    xp: 1420,
    nsr: 1523,
    sigils: ['Vaultstrike', 'MangoWar', 'TimeAttack'],
    uptimePercent: 98.5,
  };

  return (
    <div className="p-6 bg-gray-800/50 rounded-lg text-white max-w-md mx-auto">
      <h3 className="text-2xl font-bold mb-4">🧑‍💻 {profile.username}</h3>
      <ul className="space-y-2">
        <li><span className="font-medium">XP:</span> {profile.xp}</li>
        <li><span className="font-medium">NSR:</span> {profile.nsr}</li>
        <li><span className="font-medium">Sigils:</span> {profile.sigils.join(', ')}</li>
        <li><span className="font-medium">Uptime:</span> {profile.uptimePercent}%</li>
      </ul>
    </div>
  );
}
>>>>>>> e7779e491c30cadc9ea5092e7302c9177f43fff1
