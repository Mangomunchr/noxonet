import React, { useEffect, useState } from 'react';

export default function JobFeed() {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const res = await fetch('http://localhost:3000/jobs');
    const data = await res.json();
    setJobs(data);
  };

  const claimJob = async (id) => {
    await fetch(`http://localhost:3000/jobs/${id}/claim`, { method: 'PATCH' });
    fetchJobs();
  };

  useEffect(() => { fetchJobs(); }, []);

  return (
    <div className="p-4 border border-lime-500 rounded-xl text-lime-300 space-y-2">
      <div className="text-lg font-bold text-lime-400">Open Jobs</div>
      {jobs.map(job => (
        <div key={job.id} className="border border-lime-500 p-2 rounded">
          <div><strong>{job.title}</strong></div>
          <div className="text-sm">Input: {job.inputURL}</div>
          <button onClick={() => claimJob(job.id)} className="mt-1 px-3 py-1 border border-lime-400 hover:bg-lime-500 hover:text-black">Claim</button>
        </div>
      ))}
    </div>
  );
}
