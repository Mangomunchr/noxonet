
import React, { useEffect, useState } from 'react';

function JobHistory() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch('http://localhost:3001/api/job-history');
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.error('Failed to load job history:', error);
      }
    };

    fetchJobs();
    const interval = setInterval(fetchJobs, 5000); // Poll every 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold text-yellow-400">Recent Summons</h2>
      <ul className="mt-2 text-sm text-gray-300 space-y-1">
        {jobs.length === 0 && <li>No summons yet.</li>}
        {jobs.map((job, index) => (
          <li key={index}>
            <span className="text-green-300 font-bold">{job.name}</span> –{" "}
            <span className="text-gray-400">{new Date(job.time).toLocaleTimeString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobHistory;
