import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [totalSeconds, setTotalSeconds] = useState(0); // Initial total seconds (e.g., 4 days, 6 hours, 10 minutes)

  const targetDate = new Date('2023-10-21').getTime();
  useEffect(() => {
    // Start the timer
    const timer = setInterval(() => {
      setTotalSeconds((targetDate - Date.now())/1000);
    }, 1000);

    // Cleanup function to stop the timer
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Timer has reached 0, do something here
    if (totalSeconds === 0) {
      console.log('Timer has reached 0');
    }
  }, [totalSeconds]);

  // Calculate remaining time
  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = Math.floor(totalSeconds % 60);

  return (
    <div>
      <div className="show-counter">
        <a
          className="countdown-link"
        >
          <div className='countdown'>
            <p>{days}</p>
            <span>Zile</span>
          </div>
          <div className= 'countdown'>
            <p>{hours}</p>
            <span>Ore</span>
          </div>
          <div className='countdown'>
            <p>{minutes}</p>
            <span>Minute</span>
          </div>
          <div className= 'countdown'>
            <p>{seconds}</p>
            <span>Secunde</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Timer;
