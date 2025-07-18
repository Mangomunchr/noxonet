<<<<<<< HEAD
// VaultDashboard placeholder
=======
import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';

const VaultDashboard = () => {
  const { authToken } = useAuth();
  const [vault, setVault] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4000/api/vault/status', {
      headers: { Authorization: `Bearer ${authToken}` }
    })
      .then(res => res.json())
      .then(setVault);
  }, [authToken]);

  return vault ? (
    <div>
      <h2>Vault Balance: ${vault.vaultBalance}</h2>
      <p>XP/Job: {vault.xpPerJob}</p>
      <p>Share: {vault.userSharePercent}%</p>
    </div>
  ) : <div>Loading vault...</div>;
};

export default VaultDashboard;
>>>>>>> e7779e491c30cadc9ea5092e7302c9177f43fff1
