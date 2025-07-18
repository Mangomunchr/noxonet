import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { usePlayerStore } from '../usePlayerStore';
import { Link } from 'react-router-dom';
export default function NodeMonkDashboard() {
    const { xp, ascendMythic } = usePlayerStore((s) => ({
        xp: s.xp,
        ascendMythic: s.ascendMythic,
    }));
    return (_jsxs("div", { style: { padding: '2rem' }, children: [_jsx("h1", { children: "\uD83E\uDDD8 NodeMonk Dashboard" }), _jsxs("p", { children: ["Your XP: ", xp] }), _jsx("button", { onClick: () => usePlayerStore.getState().gainXP(500), children: "\u26A1 Gain 500 XP" }), _jsx("button", { onClick: () => ascendMythic(), disabled: xp < 5000, style: { marginLeft: '1rem' }, children: "\uD83D\uDD31 Ascend to Mythic" }), _jsxs("nav", { style: { marginTop: '2rem' }, children: [_jsx(Link, { to: "/", children: "\uD83C\uDFE0 Home" }), " | ", _jsx(Link, { to: "/wallet", children: "\uD83D\uDC5B Wallet" })] })] }));
}
