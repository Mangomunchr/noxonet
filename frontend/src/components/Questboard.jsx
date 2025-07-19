
import React, { useEffect, useState } from 'react';

function Questboard() {
  const [quests, setQuests] = useState([]);

  useEffect(() => {
    const fetchQuests = async () => {
      const rendarId = localStorage.getItem('rendarId');
      try {
        const res = await fetch(`http://localhost:3001/api/quests?rendarId=${rendarId}`);
        const data = await res.json();
        setQuests(data);
      } catch (err) {
        console.error("Failed to fetch quests:", err);
      }
    };

    fetchQuests();
    const interval = setInterval(fetchQuests, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 bg-gray-800 rounded-lg border border-purple-500 text-white mt-10">
      <h2 className="text-xl font-bold text-purple-300 mb-4">🧬 Questboard</h2>
      <ul className="space-y-3">
        {quests.map((q) => (
          <li key={q.id} className="bg-black rounded p-3 border border-purple-700">
            <div className="text-md font-semibold">{q.title} <span className="text-sm text-gray-400">({q.type})</span></div>
            <div className="text-sm mt-1">
              {q.complete ? (
                <span className="text-green-400 font-bold">✅ Completed</span>
              ) : (
                <>
                  Progress: {q.progress} / {q.goal}
                  <div className="w-full bg-gray-600 h-2 mt-1 rounded">
                    <div
                      className="bg-purple-400 h-2 rounded transition-all duration-500"
                      style={{ width: `${(q.progress / q.goal) * 100}%` }}
                    ></div>
                  </div>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Questboard;
