import React from 'react';

export default function VaultBlessingNotice({ message }) {
  return (
    <div className="bg-gradient-to-r from-yellow-600 to-yellow-300 p-3 rounded-xl text-black font-semibold text-center shadow-lg">
      ✨ {message}
    </div>
  );
}