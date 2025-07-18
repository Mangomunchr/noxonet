import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function RenderlingDashboard() {
    return (_jsxs("div", { children: [_jsx("h1", { children: "\uD83D\uDC76 Renderling Dashboard" }), _jsx("button", { onClick: () => {
                    usePlayerStore.getState().promote();
                    window.location.reload();
                }, children: "\uD83D\uDE80 Apply for Promotion to Rendar" })] }));
}
