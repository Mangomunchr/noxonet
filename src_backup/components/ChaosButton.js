import { jsx as _jsx } from "react/jsx-runtime";
export default function ChaosButton() {
    return (_jsx("button", { style: {
            padding: '0.7rem 1.5rem',
            backgroundColor: '#f00',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            fontWeight: 'bold'
        }, onClick: () => {
            // placeholder chaos action
            alert('⚠️ Chaos unleashed!');
        }, children: "\u2623\uFE0F Press Chaos Button" }));
}
