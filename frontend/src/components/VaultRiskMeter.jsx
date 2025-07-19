import React, { useEffect, useState } from 'react';

const VaultRiskMeter = () => {
  const [risk, setRisk] = useState(null);

  useEffect(() => {
    fetch('/api/vaultRisk')
      .then(res => res.json())
      .then(data => setRisk(data));
  }, []);

  if (!risk) return null;

  return (
    <div className="bg-rose-950 text-rose-300 p-4 rounded-xl border border-rose-600">
      <h3 className="text-lg font-bold mb-2">⚠️ Vault Risk Meter</h3>
      <p>Instability: <strong>{risk.instabilityLevel}%</strong> – {risk.riskTier}</p>
      <p className="text-sm italic">{risk.recommendation}</p>
    </div>
  );
};

export default VaultRiskMeter;