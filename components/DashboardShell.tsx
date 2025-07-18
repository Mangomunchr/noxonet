import React from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from './NavBar';

export default function DashboardShell({ children }) {
  const location = useLocation();

  // Simulated role logic (replace with real auth hook later)
  const mockUser = {
    role: 'NodeMonk', // Can be: NodeMonk, Rendar, Founder
    name: 'EchoBoi',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-zinc-800 text-white p-4 space-y-6">
      {/* Header */}
      <header className="text-center">
        <h1 className="text-2xl font-bold text-cyan-400">⚡ NOXO NETWORK ⚡</h1>
        <p className="text-sm text-zinc-400">
          Logged in as <span className="font-semibold text-white">{mockUser.name}</span> ({mockUser.role})
        </p>
      </header>

      {/* Navigation Bar */}
      <NavBar />

      {/* Role Banner */}
      <div className="text-center text-xs text-zinc-400 italic">
        {
          {
            NodeMonk: '🧘 You are a Guardian of the Vault.',
            Rendar: '🚀 You are requesting GPU power.',
            Founder: '👑 You control the Chaos.',
          }[mockUser.role]
        }
      </div>

      {/* Main Page Content */}
      <main className="p-3 bg-zinc-900 rounded-xl shadow-lg">{children}</main>

      {/* Debug Info */}
      <footer className="text-xs text-zinc-500 text-center pt-4">
        Path: <code>{location.pathname}</code>
      </footer>
    </div>
  );
}
