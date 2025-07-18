import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { usePlayerStore } from '../usePlayerStore';
import { Link } from 'react-router-dom';
export default function CoolBeansShop() {
    const { beans, gainBeans } = usePlayerStore((s) => ({
        beans: s.beans,
        gainBeans: s.gainBeans,
    }));
    return (_jsxs("div", { style: { padding: '2rem' }, children: [_jsx("h1", { children: "\uD83D\uDED2 CoolBeans Shop" }), _jsxs("p", { children: ["Your Beans: ", beans, " CB"] }), _jsx("button", { onClick: () => gainBeans(100), children: "Buy 100 Beans" }), _jsx("button", { onClick: () => gainBeans(1000), style: { marginLeft: '1rem' }, children: "Buy 1000 Beans" }), _jsx("br", {}), _jsx("br", {}), _jsx(Link, { to: "/", children: "\u2190 Back to Dashboard" })] }));
}
