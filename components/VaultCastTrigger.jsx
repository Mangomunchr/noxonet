<<<<<<< HEAD
// Ritual cast button to backend payout system
=======

import React from 'react';
<<<<<<< HEAD

const VaultCastTrigger = ({ onCast }) => {
  return (
    <button
      onClick={onCast}
      className="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-xl shadow"
=======
import { castVaultSignal } from '../utils/api';

export default function VaultCastTrigger({ onCast }) {
  const userId = localStorage.getItem('userId');

  const handleClick = async () => {
    const result = await castVaultSignal(userId);
    alert(result);
    if (onCast) onCast();
  };

  return (
    <button
      onClick={handleClick}
      className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white font-bold"
>>>>>>> e7779e491c30cadc9ea5092e7302c9177f43fff1
    >
      🚀 Cast Vault Signal
    </button>
  );
<<<<<<< HEAD
};

export default VaultCastTrigger;
=======
}
>>>>>>> e7779e491c30cadc9ea5092e7302c9177f43fff1
>>>>>>> a2dd3a3830ff49ec5d1e9aa51c2c2cff38b4217e
