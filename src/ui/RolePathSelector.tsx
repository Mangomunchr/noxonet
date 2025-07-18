<<<<<<< HEAD
// RolePathSelector placeholder
=======
// frontend/src/ui/RolePathSelector.tsx
import React, { useState } from 'react';
import { useNoxo } from '../engine/NoxoContext';

const ROLES = [
  {
    key: 'Renderling',
    label: '⚡ Renderling',
    desc: 'The spark of your NodeSoul; learn the basics.',
  },
  {
    key: 'Rendar',
    label: '🔱 Rendar',
    desc: 'Master small rituals; compete in Time Attacks.',
  },
  {
    key: 'NodeMonk',
    label: '🕉️ NodeMonk',
    desc: 'Guardian of the Vault; earn community rewards.',
  },
  {
    key: 'Vaultwarden',
    label: '🛡️ Vaultwarden',
    desc: 'Trusted keeper with special Vault permissions.',
  },
  {
    key: 'CodexSentinel',
    label: '📜 Codex Sentinel',
    desc: 'Lore-keeper of all past and future rituals.',
  },
  {
    key: 'Omniscient',
    label: '🌌 Omniscient',
    desc: 'Council member; crafts new rituals and lore.',
  },
];

export default function RolePathSelector() {
  const { promotionRequirements } = useNoxo();
  const [selected, setSelected] = useState(ROLES[0].key);

  // Build the key for next role requirements
  const currentIndex = ROLES.findIndex(r => r.key === selected);
  const nextRole = ROLES[currentIndex + 1];
  const reqKey = nextRole ? `${selected}_to_${nextRole.key}` : '';
  const req = promotionRequirements[reqKey] || {};

  return (
    <div className="p-6 bg-green-900/20 rounded-xl shadow-lg text-green-200">
      <h2 className="text-2xl font-bold mb-4">🧬 Choose Your Path</h2>

      <div className="flex flex-wrap gap-4 mb-6">
        {ROLES.map(r => (
          <button
            key={r.key}
            onClick={() => setSelected(r.key)}
            className={`px-4 py-2 rounded-xl font-medium ${
              selected === r.key
                ? 'bg-green-600 text-white'
                : 'bg-gray-800 text-gray-300'
            }`}
          >
            {r.label}
          </button>
        ))}
      </div>

      <div className="mb-2">
        <p className="italic text-gray-400">
          {ROLES.find(r => r.key === selected)!.desc}
        </p>
      </div>

      <div className="bg-green-800/30 p-4 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">
          {nextRole
            ? `${selected} → ${nextRole.key} Requirements`
            : 'You have reached the final tier'}
        </h3>

        {nextRole && Object.keys(req).length > 0 ? (
          <ul className="list-disc pl-6 space-y-1">
            {Object.entries(req).map(([param, val]) => (
              <li key={param}>
                <span className="capitalize font-medium">
                  {param.replace(/_/g, ' ')}
                </span>
                :{' '}
                {Array.isArray(val) ? val.join(', ') : val.toString()}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400">No further promotions available.</p>
        )}
      </div>
    </div>
);
}
>>>>>>> e7779e491c30cadc9ea5092e7302c9177f43fff1
