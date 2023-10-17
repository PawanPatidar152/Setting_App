import React, { useState, useEffect } from "react";

function RealTimeClock() {

     const [time, setTime] = useState(new Date());
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setTime(new Date());
      }, 1000);
      return () => clearInterval(intervalId);
    }, []);
  
    const formatTime = (date) => {
      let hours = date.getHours();
      let minutes = date.getMinutes(); 
      if (hours > 12) {
        hours -= 12;
      }
  
     minutes = minutes < 10 ? `0${minutes}` : minutes;
  
      return `${hours}:${minutes}`;
    };
  
    return (
      <div>
        <p>{formatTime(time)}</p>
      </div>
    );
  }
  


export default RealTimeClock;
