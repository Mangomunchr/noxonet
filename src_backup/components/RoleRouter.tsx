// src/components/RoleRouter.tsx
import React from 'react';
import { usePlayerStore } from '../usePlayerStore';
import RenderlingDashboard from './RenderlingDashboard';
import RendarDashboard from './RendarDashboard';
import NodeMonkDashboard from './NodeMonkDashboard';
import MythicNodeConsole from './MythicNodeConsole';

export default function RoleRouter() {
  const role = usePlayerStore((s) => s.role);

  switch (role) {
    case 'Renderling':
      return <RenderlingDashboard />;
    case 'Rendar':
      return <RendarDashboard />;
    case 'NodeMonk':
      return <NodeMonkDashboard />;
    case 'MythicNode':
      return <MythicNodeConsole />;
    default:
      return <div>❓ Unknown Role: {role}</div>;
  }
}
