import React from 'react';

export default function UserInfoCard({ userId, chaos, mango }) {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-xl border border-blue-500">
      <div className="text-sm">👤 User: <span className="font-mono">{userId}</span></div>
      <div className="text-sm">🍈 Mango Contrib: {mango}</div>
      <div className="text-sm">🌪️ Chaos: {chaos ? "Unlocked" : "Locked"}</div>
    </div>
  );
}