// src/components/Wallet.tsx
import React from 'react';
import { usePlayerStore } from '../usePlayerStore';
import { Link } from 'react-router-dom';

export default function Wallet() {
  const { beans, vault } = usePlayerStore((s) => ({
    beans: s.beans,
    vault: s.vault,
  }));

  return (
    <div style={{ padding: '2rem' }}>
      <h1>👛 Wallet</h1>
      <p>CoolBeans Balance: <strong>{beans} CB</strong></p>
      <p>Vault Earnings: <strong>${vault.toFixed(2)}</strong></p>
      <br />
      <Link to="/">← Back to Dashboard</Link>
    </div>
  );
}
