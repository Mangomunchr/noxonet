import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VaultViewer = () => {
  const [balance, setBalance] = useState(null);

  const fetchVault = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/vault');
      setBalance(res.data.balance);
    } catch (err) {
      console.error('Failed to fetch vault balance:', err.message);
    }
  };

  useEffect(() => {
    fetchVault();
    const interval = setInterval(fetchVault, 3000); // Auto-refresh every 3s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 border rounded-xl shadow-md max-w-md mx-auto mt-4 bg-black text-green-400">
      <h2 className="text-lg font-semibold mb-1">🟢 Global Vault Balance</h2>
      {balance !== null ? (
        <p className="text-2xl font-mono">{balance} CoolBeans</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default VaultViewer;
