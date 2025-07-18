
import React from 'react';

export default function InviteTree({ tree = [] }) {
  return (
    <div className="bg-indigo-900 p-4 rounded border border-indigo-600 text-white">
      <div className="text-sm uppercase text-indigo-300 mb-1">Your Invite Tree</div>
      <ul className="space-y-1">
        {tree.map((user, i) => (
          <li key={i} className="text-sm">🌱 {user.name} — {user.role}</li>
        ))}
      </ul>
    </div>
  );
}
