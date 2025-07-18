
import React from 'react';

export default function VaultXPBoostBar({ boost }) {
  return (
    <div className="mt-2 bg-gradient-to-r from-purple-800 to-fuchsia-500 p-2 text-white text-xs text-center rounded-xl">
      XP Boost Active: +{boost}%
    </div>
  );
}
