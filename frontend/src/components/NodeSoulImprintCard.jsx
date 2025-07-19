import React from 'react';

export default function NodeSoulImprintCard({ imprint }) {
  return (
    <div className="bg-black border border-green-600 p-4 rounded-xl text-green-300 font-mono text-sm">
      <h4 className="font-bold text-lg mb-2">NodeSoul™ Imprint</h4>
      <p>ID: {imprint.id}</p>
      <p>Type: {imprint.type}</p>
      <p>Last Burn: {imprint.lastBurn}</p>
      <p>Personality: {imprint.personality}</p>
    </div>
  );
}