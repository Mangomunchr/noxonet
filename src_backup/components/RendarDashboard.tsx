// src/components/RendarDashboard.tsx
import React from 'react';
import { usePlayerStore } from '../usePlayerStore';
import { Link } from 'react-router-dom';

export default function RendarDashboard() {
  const { xp, ascendNodeMonk } = usePlayerStore((s) => ({
    xp: s.xp,
    ascendNodeMonk: s.ascendNodeMonk,
  }));

  return (
    <div style={{ padding: '2rem' }}>
      <h1>🧠 Rendar Dashboard</h1>
      <p>Your XP: {xp}</p>
      <button onClick={() => usePlayerStore.getState().gainXP(200)}>
        ⚡ Gain 200 XP
      </button>
      <button
        onClick={() => ascendNodeMonk()}
        disabled={xp < 1000}
        style={{ marginLeft: '1rem' }}
      >
        🧘 Ascend to NodeMonk
      </button>
      <nav style={{ marginTop: '2rem' }}>
        <Link to="/shop">🛍️ Shop</Link> | <Link to="/xp">📈 XP Path</Link>
      </nav>
    </div>
  );
}
