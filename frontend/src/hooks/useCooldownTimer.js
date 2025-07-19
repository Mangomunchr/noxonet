import { useEffect, useState } from 'react';

export default function useCooldownTimer(until) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date(until).getTime();
    const update = () => {
      const now = Date.now();
      const diff = Math.max(0, Math.floor((target - now) / 1000));
      setSeconds(diff);
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [until]);

  return seconds;
}