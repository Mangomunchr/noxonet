
import React from 'react';

export default function SigilRevealBox({ sigil }) {
  return (
    <div className="p-4 bg-black text-pink-400 border border-pink-600 rounded-lg text-center font-bold text-lg shadow-md">
      ✨ Sigil Unlocked: {sigil}
    </div>
  );
}
