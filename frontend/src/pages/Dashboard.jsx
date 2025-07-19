
import React, { useEffect, useState } from 'react';
import VaultStatsPanel from '../components/VaultStatsPanel';
import SummonJobUI from '../ui/SummonJobUI';
import JobHistory from '../components/JobHistory';
import DailyRitualTracker from '../components/DailyRitualTracker';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [rendarId, setRendarId] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const id = localStorage.getItem('rendarId');
    if (id) setRendarId(id);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('rendarId');
    navigate('/login');
  };

  return (
    <div className="p-6 text-white">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-green-300">Welcome, Rendar {rendarId}</h1>
        <button onClick={handleLogout} className="px-4 py-2 bg-red-600 rounded text-white">Logout</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <VaultStatsPanel />
        <SummonJobUI />
      </div>

      <DailyRitualTracker />
      <Questboard />
      <Leaderboard />
      <JobHistory />
    </div>
  );
}

export default Dashboard;
