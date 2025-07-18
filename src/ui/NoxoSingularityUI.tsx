<<<<<<< HEAD
// NoxoSingularityUI placeholder
=======
// frontend/src/ui/NoxoSingularityUI.tsx
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import FounderConsole from './FounderConsole';

export default function NoxoSingularityUI() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#0d0d0d] to-[#050505] text-white p-4 font-mono">
      <header className="flex justify-between items-center">
        <h1 className="text-4xl font-bold text-green-400 drop-shadow-md">
          🌌 NOXO: Singularity Console
        </h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl shadow-lg"
        >
          Logout
        </button>
      </header>

      <main className="mt-6">
        <FounderConsole />
      </main>
    </div>
  );
}
>>>>>>> e7779e491c30cadc9ea5092e7302c9177f43fff1
