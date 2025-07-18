import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { usePlayerStore } from '../usePlayerStore';
import { Link } from 'react-router-dom';
export default function XPLevelPath() {
    const xp = usePlayerStore((s) => s.xp);
    const role = usePlayerStore((s) => s.role);
    return (_jsxs("div", { style: { padding: '2rem' }, children: [_jsx("h1", { children: "\uD83D\uDCC8 XP Level Path" }), _jsxs("p", { children: ["Role: ", _jsx("strong", { children: role })] }), _jsxs("p", { children: ["XP: ", _jsx("strong", { children: xp }), " / 100"] }), _jsx("div", { style: { width: '100%', background: '#eee', height: '16px', marginTop: '1rem' }, children: _jsx("div", { style: {
                        width: `${Math.min(xp, 100)}%`,
                        background: '#4caf50',
                        height: '100%',
                        transition: 'width 0.3s',
                    } }) }), _jsx("br", {}), _jsx(Link, { to: "/", children: "\u2190 Back to Dashboard" })] }));
}
