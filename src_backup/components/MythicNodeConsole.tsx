// src/components/MythicNodeConsole.tsx
import React from 'react';
import { usePlayerStore } from '../usePlayerStore';
import { Link } from 'react-router-dom';

export default function MythicNodeConsole() {
  const xp = usePlayerStore((s) => s.xp);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>🔮 Mythic Node Console</h1>
      <p>Legendary XP: {xp}</p>
      <p>All advanced controls are now unlocked.</p>

      <nav style={{ marginTop: '2rem' }}>
        <Link to="/">🏠 Home</Link>
      </nav>
    </div>
  );
}
