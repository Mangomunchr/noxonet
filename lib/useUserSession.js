
import { useEffect, useState } from 'react';

export default function useUserSession() {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const id = localStorage.getItem('userId');
    if (id) {
      setUserId(id);
    } else {
      const newId = 'renderling-' + Math.random().toString(36).substring(2, 10);
      localStorage.setItem('userId', newId);
      setUserId(newId);
    }
  }, []);

  return userId;
}
