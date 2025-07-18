import React, { useEffect, useState } from 'react';

export default function JobFeed() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const res = await fetch('/api/jobs');
      const data = await res.json();
      setJobs(data.jobs || []);
    };

    fetchJobs();
    const interval = setInterval(fetchJobs, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-6">
      <h3 className="text-lg font-bold text-cyan-300">Open Jobs</h3>
      {jobs.length === 0 ? (
        <p className="text-sm text-gray-400">No active jobs.</p>
      ) : (
        <ul className="space-y-2 mt-2">
          {jobs.map((job, index) => (
            <li
              key={index}
              className="bg-gray-800 p-3 rounded shadow text-sm"
            >
              <strong>{job.title}</strong> – {job.url}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
