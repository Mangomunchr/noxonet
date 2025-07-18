import React, { useEffect, useState } from 'react';
import axios from 'axios';

const JobLog = () => {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/joblog');
      setJobs(res.data);
    } catch (err) {
      console.error('Error fetching job log:', err);
    }
  };

  useEffect(() => {
    fetchJobs();
    const interval = setInterval(fetchJobs, 5000); // refresh every 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-6 max-w-md p-4 border rounded bg-white shadow">
      <h2 className="text-xl font-semibold mb-2">📝 Recent Jobs</h2>
      <div className="max-h-64 overflow-y-auto text-sm">
        {jobs.map((job, i) => (
          <div key={i} className="border-b py-1">
            <p><strong>{job.userId}</strong> submitted: <em>{job.jobData}</em></p>
            <p>💸 {job.cost} CB | ✨ +{job.xpGained} XP | 🕓 {new Date(job.timestamp).toLocaleTimeString()}</p>
          </div>
        ))}
        {jobs.length === 0 && <p className="text-gray-500">No jobs submitted yet.</p>}
      </div>
    </div>
  );
};

export default JobLog;
