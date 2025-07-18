import React, { useEffect, useState } from 'react';

const UserProfilePanel = ({ userId }) => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch(`/api/profile/${userId}`)
      .then(res => res.json())
      .then(data => setProfile(data));
  }, [userId]);

  if (!profile) return <div className="text-white">Loading...</div>;

  return (
    <div className="bg-gray-900 text-white p-4 rounded-xl border border-cyan-500 shadow-lg">
      <h3 className="text-lg font-bold mb-2">🧑 User Profile</h3>
      <p><strong>Username:</strong> {profile.username}</p>
      <p><strong>XP:</strong> {profile.xp}</p>
      <p><strong>Role:</strong> {profile.role}</p>
      <p><strong>Joined:</strong> {new Date(profile.joined).toLocaleDateString()}</p>
    </div>
  );
};

export default UserProfilePanel;