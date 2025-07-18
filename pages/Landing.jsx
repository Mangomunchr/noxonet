import React from 'react';
import XPLeaderboard from '../components/XPLeaderboard';
import CodexScroll from '../components/CodexScroll';

export default function Landing() {
  const testEntries = [
    { title: 'Mango Ritual', description: 'Unlocks vault ritual bonuses.' },
    { title: 'Chaos Lock', description: 'Temporarily freezes summon activity.' }
  ];

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold text-white">🚀 Welcome to NOXO Network</h1>
      <XPLeaderboard />
      <CodexScroll entries={testEntries} />
    </div>
  );
}
