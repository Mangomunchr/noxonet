
import React from 'react';

export default function RenderlingDialog({ onStart }) {
  return (
    <div className="bg-purple-950 text-white border border-purple-700 p-6 rounded-xl shadow-lg max-w-lg mx-auto text-center">
      <h2 className="text-xl font-bold mb-2">👶 Welcome, Renderling</h2>
      <p className="text-sm text-purple-300 mb-4">You are the first of your kind. The Vault awaits your spark.</p>
      <button
        onClick={onStart}
        className="bg-purple-600 hover:bg-purple-700 transition px-4 py-2 rounded-lg font-bold"
      >
        Begin Your Journey
      </button>
    </div>
  );
}
