// src/components/MainLayout.tsx
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { usePlayerStore } from '../usePlayerStore';

export default function MainLayout() {
  const role = usePlayerStore((s) => s.role);
  const xp   = usePlayerStore((s) => s.xp);

  return (
    <>
      <nav style={{
        padding: '1rem',
        background: '#222',
        color: '#fff',
        display: 'flex',
        alignItems: 'center'
      }}>
        <Link to="/" style={{ color: '#fff', marginRight: '1rem' }}>Home</Link>
        <Link to="/shop" style={{ color: '#fff', marginRight: '1rem' }}>Shop</Link>
        <Link to="/wallet" style={{ color: '#fff', marginRight: '1rem' }}>Wallet</Link>
        <Link to="/nodes" style={{ color: '#fff', marginRight: '1rem' }}>Nodes</Link>
        <Link to="/queue" style={{ color: '#fff', marginRight: '1rem' }}>Queue</Link>
        <Link to="/chaos" style={{ color: '#fff', marginRight: '1rem' }}>Chaos</Link>
        <Link to="/mythic" style={{ color: '#fff' }}>Mythic</Link>
        <span style={{ marginLeft: 'auto' }}>
          Role: {role} | XP: {xp}
        </span>
      </nav>
      <Outlet />
    </>
  );
}
