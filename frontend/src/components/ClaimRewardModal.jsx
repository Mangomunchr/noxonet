import React from 'react';

export default function ClaimRewardModal({ reward, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-gray-900 p-6 rounded-2xl text-white text-center border border-green-500 shadow-2xl max-w-sm w-full">
        <h2 className="text-2xl font-bold text-green-400 mb-2">🎉 Vault Reward Claimed!</h2>
        <p className="text-lg mb-4">You earned: <span className="text-green-300 font-mono">${reward}</span></p>
        <button
          onClick={onClose}
          className="bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700"
        >
          Continue
        </button>
      </div>
    </div>
  );
}