import { jsx as _jsx } from "react/jsx-runtime";
// src/uiKit.tsx
import { useState } from 'react';
export function useSystemFeedback() {
    const [message, setMessage] = useState(null);
    function showToast(msg) {
        setMessage(msg);
        // auto‐dismiss after 3s
        setTimeout(() => setMessage(null), 3000);
    }
    const Toast = () => message ? (_jsx("div", { style: {
            position: 'fixed',
            top: '1rem',
            right: '1rem',
            background: '#333',
            color: '#fff',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.3)'
        }, children: message })) : null;
    return { showToast, Toast };
}
