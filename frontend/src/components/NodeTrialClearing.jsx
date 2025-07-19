import React from 'react';

export default function NodeTrialClearing({ onClear }) {
  return (
    <div className="bg-black p-4 rounded-xl border border-yellow-500 text-yellow-300">
      <h4 className="text-lg font-bold">Sanctum Trial</h4>
      <p className="text-sm">You are under ritual review. Clear your status?</p>
      <button
        onClick={onClear}
        className="mt-2 w-full bg-yellow-400 text-black py-2 rounded-lg hover:bg-yellow-300"
      >
        Begin Trial Ritual
      </button>
    </div>
  );
}