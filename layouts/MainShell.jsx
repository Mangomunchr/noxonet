
import React from 'react';
import NavBar from '../components/NavBar';

export default function MainShell({ children }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      <main className="p-4">{children}</main>
    </div>
  );
}
