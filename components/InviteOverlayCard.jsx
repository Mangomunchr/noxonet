
import React from 'react';

export default function InviteOverlayCard({ name, role, xp }) {
  return (
    <div className="bg-black bg-opacity-70 border border-white/20 text-white p-3 rounded-lg w-full max-w-xs shadow-lg">
      <h3 className="text-md font-semibold text-pink-400">{name}</h3>
      <p className="text-sm text-gray-300">{role}</p>
      <div className="text-xs mt-2">+{xp} XP Earned</div>
    </div>
  );
}
