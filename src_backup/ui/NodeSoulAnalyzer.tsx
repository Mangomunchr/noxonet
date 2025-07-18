import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';

const NodeSoulAnalyzer = () => {
  const { authToken } = useAuth();
  const [ns, setNs] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4000/api/nodesoul/status', {
      headers: { Authorization: `Bearer ${authToken}` }
    })
      .then(res => res.json())
      .then(setNs);
  }, [authToken]);

  return ns ? (
    <div>
      <h2>NodeSoul Tier: {ns.tier}</h2>
      <p>NSR: {ns.nsr}</p>
      <p>Volatility: {ns.volatility}</p>
      <p>Sigils: {ns.sigils.join(', ')}</p>
    </div>
  ) : <div>Analyzing...</div>;
};

export default NodeSoulAnalyzer;