<<<<<<< HEAD
// FounderConsole placeholder
=======
// frontend/src/ui/FounderConsole.tsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function FounderConsole() {
  return (
    <div className="p-6 bg-gray-800/40 rounded-2xl shadow-lg text-white min-h-[400px]">
      <h2 className="text-3xl font-bold mb-4 text-green-300">🧤 Founder Console</h2>
      <p className="mb-6 text-gray-400">
        Welcome, Founder! From here you can oversee all node activity and launch rituals.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link
          to="/vault"
          className="block p-4 bg-blue-700 hover:bg-blue-800 rounded-lg text-center font-semibold"
        >
          🔐 Vault Dashboard
        </Link>
        <Link
          to="/summon"
          className="block p-4 bg-pink-700 hover:bg-pink-800 rounded-lg text-center font-semibold"
        >
          ✨ Summon Compute
        </Link>
        <Link
          to="/nodesoul"
          className="block p-4 bg-purple-700 hover:bg-purple-800 rounded-lg text-center font-semibold"
        >
          🧠 NodeSoul Viewer
        </Link>
        <Link
          to="/codex"
          className="block p-4 bg-yellow-700 hover:bg-yellow-800 rounded-lg text-center font-semibold"
        >
          📜 Codex Scroll
        </Link>
        <Link
          to="/chaos"
          className="block p-4 bg-red-700 hover:bg-red-800 rounded-lg text-center font-semibold"
        >
          🔥 Chaos Meter
        </Link>
        <Link
          to="/timeattack"
          className="block p-4 bg-indigo-700 hover:bg-indigo-800 rounded-lg text-center font-semibold"
        >
          🏁 Time Attack
        </Link>
        <Link
          to="/referral"
          className="block p-4 bg-green-700 hover:bg-green-800 rounded-lg text-center font-semibold"
        >
          🤝 Referral Tracker
        </Link>
        <Link
          to="/events"
          className="block p-4 bg-gray-600 hover:bg-gray-700 rounded-lg text-center font-semibold"
        >
          📅 Event Calendar
        </Link>
        <Link
          to="/settings"
          className="block p-4 bg-gray-500 hover:bg-gray-600 rounded-lg text-center font-semibold"
        >
          ⚙️ Settings
        </Link>
      </div>
      <p className="mt-6 text-sm text-gray-500">
        Use the navigation above to access any section of the Noxo Network!
      </p>
    </div>
);
}
>>>>>>> e7779e491c30cadc9ea5092e7302c9177f43fff1
