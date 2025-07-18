import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link, Outlet } from 'react-router-dom';
import { usePlayerStore } from '../usePlayerStore';
export default function MainLayout() {
    const role = usePlayerStore((s) => s.role);
    const xp = usePlayerStore((s) => s.xp);
    return (_jsxs(_Fragment, { children: [_jsxs("nav", { style: {
                    padding: '1rem',
                    background: '#222',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center'
                }, children: [_jsx(Link, { to: "/", style: { color: '#fff', marginRight: '1rem' }, children: "Home" }), _jsx(Link, { to: "/shop", style: { color: '#fff', marginRight: '1rem' }, children: "Shop" }), _jsx(Link, { to: "/wallet", style: { color: '#fff', marginRight: '1rem' }, children: "Wallet" }), _jsx(Link, { to: "/nodes", style: { color: '#fff', marginRight: '1rem' }, children: "Nodes" }), _jsx(Link, { to: "/queue", style: { color: '#fff', marginRight: '1rem' }, children: "Queue" }), _jsx(Link, { to: "/chaos", style: { color: '#fff', marginRight: '1rem' }, children: "Chaos" }), _jsx(Link, { to: "/mythic", style: { color: '#fff' }, children: "Mythic" }), _jsxs("span", { style: { marginLeft: 'auto' }, children: ["Role: ", role, " | XP: ", xp] })] }), _jsx(Outlet, {})] }));
}
