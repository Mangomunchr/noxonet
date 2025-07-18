
import React from 'react';
import VaultStatsPanel from './VaultStatsPanel';
import VaultCastTrigger from './VaultCastTrigger';
import NodeStatusCluster from './NodeStatusCluster';

export default function VaultCodexPanel() {
  return (
    <div className="p-6 bg-black bg-opacity-60 border border-green-700 rounded-xl space-y-4">
      <VaultStatsPanel stats={{ xp: 9999, syncedNodes: 14, multiplier: 10, streak: 3 }} />
      <VaultCastTrigger onCast={() => console.log('Vault Signal Casted!')} />
      <NodeStatusCluster nodes={[
        { active: true }, { active: false }, { active: true },
        { active: true }, { active: false }, { active: true },
        { active: false }, { active: true }
      ]} />
    </div>
  );
}
