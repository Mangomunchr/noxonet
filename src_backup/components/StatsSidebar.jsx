
import React from 'react';
export default function StatsSidebar({ vault, xp }) {
  return (
    <aside className="bg-[#111] p-4 w-64 text-white rounded-lg">
      <h3 className="text-green-300 font-semibold mb-2">📊 Sidebar Stats</h3>
      <p>Vault: {vault} CoolBeans</p>
      <p>XP: {xp}</p>
    </aside>
  );
}
