<<<<<<< HEAD
// SummonJobUI placeholder
=======
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const SummonJobUI = () => {
  const { authToken } = useAuth();
  const [hours, setHours] = useState(1);
  const [multiplier, setMultiplier] = useState(1);
  const [result, setResult] = useState(null);

  const handleSubmit = () => {
    fetch('http://localhost:4000/api/job/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`
      },
      body: JSON.stringify({ hours, multiplier })
    })
      .then(res => res.json())
      .then(setResult);
  };

  return (
    <div>
      <input type="number" value={hours} onChange={e => setHours(+e.target.value)} />
      <select value={multiplier} onChange={e => setMultiplier(+e.target.value)}>
        {[1, 2, 5, 10, 25].map(m => <option key={m}>{m}</option>)}
      </select>
      <button onClick={handleSubmit}>Summon Job</button>
      {result && <div>XP Gained: {result.xpAwarded}</div>}
    </div>
  );
};

export default SummonJobUI;
>>>>>>> e7779e491c30cadc9ea5092e7302c9177f43fff1
