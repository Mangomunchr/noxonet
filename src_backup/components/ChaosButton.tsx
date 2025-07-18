// src/components/ChaosButton.tsx
import React from 'react';

export default function ChaosButton() {
  return (
    <button
      style={{
        padding: '0.7rem 1.5rem',
        backgroundColor: '#f00',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        fontWeight: 'bold'
      }}
      onClick={() => {
        // placeholder chaos action
        alert('⚠️ Chaos unleashed!');
      }}
    >
      ☣️ Press Chaos Button
    </button>
  );
}
