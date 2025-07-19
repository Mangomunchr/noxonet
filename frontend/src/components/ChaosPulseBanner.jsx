import React from 'react';

export default function ChaosPulseBanner({ active }) {
  if (!active) return null;
  return (
    <div className="bg-gradient-to-r from-purple-900 to-black text-purple-200 font-bold p-3 text-center">
      🌌 CHAOS MODE ACTIVE — Vault Rituals Intensified
    </div>
  );
}