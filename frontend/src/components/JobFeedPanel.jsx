import React, { useEffect, useState } from 'react';

export default function JobFeedPanel({ userId }) {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const res = await fetch(`http://localhost:3000/api/jobs/user/${userId}`);
      const data = await res.json();
      setJobs(data);
    };
    fetchJobs();
    const interval = setInterval(fetchJobs, 5000);
    return () => clearInterval(interval);
  }, [userId]);

  return (
    <div className="bg-gray-900 p-4 rounded-xl border border-blue-700 text-sm">
      <h2 className="text-blue-400 font-bold text-lg">📜 Job Feed</h2>
      <ul className="mt-2 space-y-1">
        {jobs.map(job => (
          <li key={job.id}>
            <span className="text-white">{job.prompt}</span> — 
            <span className="ml-2 text-green-400">{job.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}