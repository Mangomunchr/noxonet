// src/components/NodeMonkDashboard.tsx
import React from 'react';
import { usePlayerStore } from '../usePlayerStore';
import { Link } from 'react-router-dom';

export default function NodeMonkDashboard() {
  const { xp, ascendMythic } = usePlayerStore((s) => ({
    xp: s.xp,
    ascendMythic: s.ascendMythic,
  }));

  return (
    <div style={{ padding: '2rem' }}>
      <h1>🧘 NodeMonk Dashboard</h1>
      <p>Your XP: {xp}</p>
      <button onClick={() => usePlayerStore.getState().gainXP(500)}>
        ⚡ Gain 500 XP
      </button>
      <button
        onClick={() => ascendMythic()}
        disabled={xp < 5000}
        style={{ marginLeft: '1rem' }}
      >
        🔱 Ascend to Mythic
      </button>

      <nav style={{ marginTop: '2rem' }}>
        <Link to="/">🏠 Home</Link> | <Link to="/wallet">👛 Wallet</Link>
      </nav>
    </div>
  );
}
