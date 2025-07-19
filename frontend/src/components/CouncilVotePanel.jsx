import React from 'react';

export default function CouncilVotePanel({ caseId, onVote }) {
  return (
    <div className="bg-[#0c0c0c] text-white p-4 border border-purple-500 rounded-xl">
      <h4 className="text-purple-300 font-bold mb-2">📜 Council Case #{caseId}</h4>
      <p className="text-sm mb-3">Vote on Vault dispute resolution outcome.</p>
      <div className="flex space-x-4">
        <button
          onClick={() => onVote('approve')}
          className="bg-green-600 px-4 py-2 rounded-lg hover:bg-green-500"
        >
          ✅ Approve
        </button>
        <button
          onClick={() => onVote('reject')}
          className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-500"
        >
          ❌ Reject
        </button>
      </div>
    </div>
  );
}