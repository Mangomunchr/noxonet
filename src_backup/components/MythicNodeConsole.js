import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { usePlayerStore } from '../usePlayerStore';
import { Link } from 'react-router-dom';
export default function MythicNodeConsole() {
    const xp = usePlayerStore((s) => s.xp);
    return (_jsxs("div", { style: { padding: '2rem' }, children: [_jsx("h1", { children: "\uD83D\uDD2E Mythic Node Console" }), _jsxs("p", { children: ["Legendary XP: ", xp] }), _jsx("p", { children: "All advanced controls are now unlocked." }), _jsx("nav", { style: { marginTop: '2rem' }, children: _jsx(Link, { to: "/", children: "\uD83C\uDFE0 Home" }) })] }));
}
