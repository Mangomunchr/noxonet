import React, { useEffect, useState } from 'react';

const FriendsList = ({ userId }) => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch(`/api/friends/${userId}`)
      .then(res => res.json())
      .then(data => setFriends(data));
  }, [userId]);

  return (
    <div className="p-4 bg-gray-800 text-white border border-purple-500 rounded-lg">
      <h3 className="text-lg font-bold mb-2">🧑‍🤝‍🧑 Friends</h3>
      <ul className="text-sm space-y-1">
        {friends.map((friend, i) => (
          <li key={i}>
            {friend.username} – 
            <span className={\`ml-1 font-semibold \${friend.online ? 'text-green-400' : 'text-gray-400'}\`}>
              {friend.online ? 'Online' : 'Offline'}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendsList;