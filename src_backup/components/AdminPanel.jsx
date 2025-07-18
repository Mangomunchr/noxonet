import React, { useState } from 'react';

function AdminPanel() {
  const [targetId, setTargetId] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('coolBeans');

  const handleInject = () => {
    fetch('http://localhost:3000/api/admin/inject', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: targetId, amount: parseInt(amount), type })
    })
      .then(res => res.json())
      .then(data => alert(data.message || JSON.stringify(data)))
      .catch(err => console.error('Error injecting:', err));
  };

  const handleVaultSet = () => {
    fetch('http://localhost:3000/api/admin/vault', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: parseInt(amount) })
    })
      .then(res => res.json())
      .then(data => alert(data.message || JSON.stringify(data)))
      .catch(err => console.error('Error setting vault:', err));
  };

  return (
    <div style={{ border: '2px dashed red', padding: '1rem', marginTop: '2rem' }}>
      <h2>🧙 NodeMonk Admin Panel</h2>
      <input placeholder="User ID" value={targetId} onChange={e => setTargetId(e.target.value)} />
      <input placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)} />
      <select value={type} onChange={e => setType(e.target.value)}>
        <option value="coolBeans">CoolBeans</option>
        <option value="xp">XP</option>
      </select>
      <button onClick={handleInject}>Inject 💉</button>
      <br />
      <button onClick={handleVaultSet}>Set Vault 💰</button>
    </div>
  );
}

export default AdminPanel;
