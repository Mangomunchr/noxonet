import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { usePlayerStore } from '../usePlayerStore';
import { Link } from 'react-router-dom';
export default function RenderlingDashboard() {
    const { xp, gainXP, promote } = usePlayerStore((s) => ({
        xp: s.xp,
        gainXP: s.gainXP,
        promote: s.promote,
    }));
    return (_jsxs("div", { style: { padding: '2rem' }, children: [_jsx("h1", { children: "\uD83D\uDC76 Renderling Dashboard" }), _jsxs("p", { children: ["Your XP: ", xp] }), _jsx("button", { onClick: () => gainXP(10), children: "\u26A1 Gain 10 XP" }), _jsx("br", {}), _jsx("br", {}), _jsx("button", { onClick: () => promote(), disabled: xp < 100, children: "\uD83D\uDE80 Apply for Promotion to Rendar" }), _jsx("br", {}), _jsx("br", {}), _jsxs("ul", { children: [_jsx("li", { children: _jsx(Link, { to: "/xp", children: "\uD83D\uDCC8 View XP Path" }) }), _jsx("li", { children: _jsx(Link, { to: "/shop", children: "\uD83D\uDECD\uFE0F Cool Beans Shop" }) })] })] }));
}
