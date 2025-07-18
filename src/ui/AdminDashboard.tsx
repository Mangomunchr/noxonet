<<<<<<< HEAD
// AdminDashboard placeholder
=======
// frontend/src/ui/AdminDashboard.tsx
import React, { useEffect, useState } from 'react';

interface SystemLog {
  timestamp: string;
  message: string;
}

interface AdminStats {
  totalNodes: number;
  activeRituals: string[];
  pendingTasks: number;
}

export default function AdminDashboard() {
  const [logs, setLogs] = useState<SystemLog[]>([]);
  const [stats, setStats] = useState<AdminStats | null>(null);

  useEffect(() => {
    // Stub data fetch; replace endpoints with real ones
    setStats({
      totalNodes: 256,
      activeRituals: ['Vaultstrike', 'ChaosButton'],
      pendingTasks: 5,
    });
    setLogs([
      { timestamp: '2025-07-14 08:00', message: 'System check complete.' },
      { timestamp: '2025-07-14 07:45', message: 'Vaultstrike #8 queued.' },
      { timestamp: '2025-07-14 07:30', message: 'Chaos mode activated.' },
    ]);
  }, []);

  return (
    <div className="p-6 bg-red-900/20 rounded-lg text-red-300 max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold mb-4">🛡️ Admin Dashboard</h3>
      {stats && (
        <div className="grid grid-cols-3 gap-4 mb-6 text-white">
          <div>
            <div className="text-gray-400">Total Nodes</div>
            <div className="text-xl font-semibold">{stats.totalNodes}</div>
          </div>
          <div>
            <div className="text-gray-400">Active Rituals</div>
            <ul className="list-disc pl-5">
              {stats.activeRituals.map(r => <li key={r}>{r}</li>)}
            </ul>
          </div>
          <div>
            <div className="text-gray-400">Pending Tasks</div>
            <div className="text-xl font-semibold">{stats.pendingTasks}</div>
          </div>
        </div>
      )}
      <div>
        <h4 className="font-semibold mb-2">Recent System Logs</h4>
        <ul className="space-y-1 max-h-48 overflow-y-auto text-white text-sm">
          {logs.map((log, i) => (
            <li key={i}>
              <span className="font-medium">{log.timestamp}:</span> {log.message}
            </li>
          ))}
        </ul>
      </div>
    </div>
);
}
>>>>>>> e7779e491c30cadc9ea5092e7302c9177f43fff1
