import React, { useEffect, useState } from 'react'

export default function QuestionTimer({ timeOut, onTimeout, mode }) {
    const [remainingTime, setRemainingTime] = useState(timeOut);
    
    useEffect(() => {
        const timer = setTimeout(onTimeout, timeOut);

        return () => {
            clearTimeout(timer);
        }
    }, [onTimeout, timeOut]);

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime(prevTime => prevTime - 100);
        }, 100);

        return () => {
            clearInterval(interval);
        }
    }, []);

  return (
    <progress 
      id='question-time' 
      max={timeOut} 
      value={remainingTime} 
      className={mode}
    />
  );
}
