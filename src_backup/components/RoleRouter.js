import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { usePlayerStore } from '../usePlayerStore';
import RenderlingDashboard from './RenderlingDashboard';
import RendarDashboard from './RendarDashboard';
import NodeMonkDashboard from './NodeMonkDashboard';
import MythicNodeConsole from './MythicNodeConsole';
export default function RoleRouter() {
    const role = usePlayerStore((s) => s.role);
    switch (role) {
        case 'Renderling':
            return _jsx(RenderlingDashboard, {});
        case 'Rendar':
            return _jsx(RendarDashboard, {});
        case 'NodeMonk':
            return _jsx(NodeMonkDashboard, {});
        case 'MythicNode':
            return _jsx(MythicNodeConsole, {});
        default:
            return _jsxs("div", { children: ["\u2753 Unknown Role: ", role] });
    }
}
