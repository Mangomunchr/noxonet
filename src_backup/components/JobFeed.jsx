import React, { useEffect, useState } from 'react';
import { useUser } from '../contexts/UserContext';
import axios from 'axios';

const JobFeed = () => {
  const { userId } = useUser();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/jobs/${userId}`);
        setJobs(res.data.reverse()); // show latest first
      } catch (err) {
        console.error('Failed to fetch jobs:', err);
      }
    };

    fetchJobs();
    const interval = setInterval(fetchJobs, 5000); // update every 5s
    return () => clearInterval(interval);
  }, [userId]);

  return (
    <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #444' }}>
      <h3>📜 Job Feed</h3>
      {jobs.length === 0 ? (
        <p>No jobs submitted yet.</p>
      ) : (
        <ul>
          {jobs.map((job, i) => (
            <li key={i}>
              <strong>📝 {job.jobData}</strong> | Cost: {job.cost} 🫘 | ⏱️ {new Date(job.timestamp).toLocaleTimeString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default JobFeed;
