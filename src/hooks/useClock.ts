import { useState, useEffect } from 'react';

/**
 * Custom hook to format live clock for a specific timeZone.
 */
export function useClock(timeZone = 'Africa/Johannesburg') {
  const [formattedTime, setFormattedTime] = useState<string>('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
      setFormattedTime(formatter.format(now));
    };

    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, [timeZone]);

  return formattedTime;
}
