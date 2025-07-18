import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Welcome() {
  const navigate = useNavigate();
  return (
    <div className="p-8 text-white bg-black min-h-screen">
      <h1 className="text-3xl font-bold">Welcome to NodeTemple</h1>
      <p className="mt-2 text-lg">Keep Up, or Play Catch Up!</p>
      <div className="mt-6 space-y-4">
        <div>
          <h2 className="text-xl font-semibold">How You Earn</h2>
          <p>As a NodeMonk, you contribute GPU power through our NodeTemple network and earn hourly payouts directly to your vault.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Pricing & Payouts</h2>
          <p>Basic Mode: 1x speed at standard rate.<br/>Summon Mode: 1x–100x speed multipliers with dynamic pricing.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Ninja Mode (Anonymous)</h2>
          <p>Activate Ninja Mode for full anonymity. Your data is encrypted with SHA-256 protocols.</p>
        </div>
      </div>
      <button className="mt-6 px-4 py-2 bg-green-500 text-white rounded" onClick={() => navigate('/dashboard')}>
        Get Started
      </button>
    </div>
  );
}
