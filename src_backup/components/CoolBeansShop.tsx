// src/components/CoolBeansShop.tsx
import React from 'react';
import { usePlayerStore } from '../usePlayerStore';
import { Link } from 'react-router-dom';

export default function CoolBeansShop() {
  const { beans, gainBeans } = usePlayerStore((s) => ({
    beans: s.beans,
    gainBeans: s.gainBeans,
  }));

  return (
    <div style={{ padding: '2rem' }}>
      <h1>🛒 CoolBeans Shop</h1>
      <p>Your Beans: {beans} CB</p>
      <button onClick={() => gainBeans(100)}>Buy 100 Beans</button>
      <button onClick={() => gainBeans(1000)} style={{ marginLeft: '1rem' }}>
        Buy 1000 Beans
      </button>

      <br /><br />
      <Link to="/">← Back to Dashboard</Link>
    </div>
  );
}
