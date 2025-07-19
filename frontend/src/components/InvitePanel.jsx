
import React, { useState } from 'react';

export default function InvitePanel() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleInvite = () => {
    // Simulate invite logic
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setEmail('');
    }, 2000);
  };

  return (
    <div className="bg-zinc-800 p-4 rounded-lg border border-zinc-700 space-y-2">
      <div className="text-sm text-zinc-400">Invite a New Rendar</div>
      <input
        className="bg-zinc-700 text-white p-2 w-full rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email@domain.com"
      />
      <button
        onClick={handleInvite}
        className="bg-cyan-600 text-black px-3 py-1 rounded w-full hover:bg-cyan-500"
      >
        {sent ? "✅ Sent!" : "📨 Send Invite"}
      </button>
    </div>
  );
}
