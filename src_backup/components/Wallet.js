import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { usePlayerStore } from '../usePlayerStore';
import { Link } from 'react-router-dom';
export default function Wallet() {
    const { beans, vault } = usePlayerStore((s) => ({
        beans: s.beans,
        vault: s.vault,
    }));
    return (_jsxs("div", { style: { padding: '2rem' }, children: [_jsx("h1", { children: "\uD83D\uDC5B Wallet" }), _jsxs("p", { children: ["CoolBeans Balance: ", _jsxs("strong", { children: [beans, " CB"] })] }), _jsxs("p", { children: ["Vault Earnings: ", _jsxs("strong", { children: ["$", vault.toFixed(2)] })] }), _jsx("br", {}), _jsx(Link, { to: "/", children: "\u2190 Back to Dashboard" })] }));
}
