// src/components/JobQueueBoard.tsx
import React, { useEffect, useState } from 'react';
import { runJob } from '../jobEngine';
import { usePlayerStore } from '../usePlayerStore';
import { Link } from 'react-router-dom';

export default function JobQueueBoard() {
  // pull in all three actions from your store
  const { gainXP, gainBeans, addVault } = usePlayerStore((s) => ({
    gainXP: s.gainXP,
    gainBeans: s.gainBeans,
    addVault: s.addVault,
  }));

  const [jobs, setJobs] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = `job-${Date.now()}`;
      runJob(id, 1 + Math.floor(Math.random() * 3), 3, ({ jobId, payout }) => {
        gainXP(payout);
        gainBeans(payout * 2);  // example: 2 CB per XP
        addVault(payout * 0.1); // example: $0.10 per XP
        setJobs((prev) => [...prev, `${jobId} (+${payout} XP)`]);
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [gainXP, gainBeans, addVault]);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>📋 Job Queue Board</h2>
      <p>A new job fires automatically every 5 seconds.</p>
      <ul>
        {jobs.map((j, i) => (
          <li key={i}>⚙️ {j}</li>
        ))}
      </ul>
      <br />
      <Link to="/">← Dashboard</Link>
    </div>
  );
}
