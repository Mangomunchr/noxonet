import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { usePlayerStore } from '../usePlayerStore';
import { Link } from 'react-router-dom';
export default function RendarDashboard() {
    const { xp, ascendNodeMonk } = usePlayerStore((s) => ({
        xp: s.xp,
        ascendNodeMonk: s.ascendNodeMonk,
    }));
    return (_jsxs("div", { style: { padding: '2rem' }, children: [_jsx("h1", { children: "\uD83E\uDDE0 Rendar Dashboard" }), _jsxs("p", { children: ["Your XP: ", xp] }), _jsx("button", { onClick: () => usePlayerStore.getState().gainXP(200), children: "\u26A1 Gain 200 XP" }), _jsx("button", { onClick: () => ascendNodeMonk(), disabled: xp < 1000, style: { marginLeft: '1rem' }, children: "\uD83E\uDDD8 Ascend to NodeMonk" }), _jsxs("nav", { style: { marginTop: '2rem' }, children: [_jsx(Link, { to: "/shop", children: "\uD83D\uDECD\uFE0F Shop" }), " | ", _jsx(Link, { to: "/xp", children: "\uD83D\uDCC8 XP Path" })] })] }));
}
