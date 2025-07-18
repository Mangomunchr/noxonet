// src/uiKit.tsx
import React, { useState, useEffect } from 'react';

export function useSystemFeedback() {
  const [message, setMessage] = useState<string | null>(null);

  function showToast(msg: string) {
    setMessage(msg);
    // auto‐dismiss after 3s
    setTimeout(() => setMessage(null), 3000);
  }

  const Toast: React.FC = () =>
    message ? (
      <div style={{
        position: 'fixed',
        top: '1rem',
        right: '1rem',
        background: '#333',
        color: '#fff',
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        boxShadow: '0 2px 6px rgba(0,0,0,0.3)'
      }}>
        {message}
      </div>
    ) : null;

  return { showToast, Toast };
}
