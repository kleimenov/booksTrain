import React, { useState, useEffect } from "react";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
  });
  return (
    <div className="text-center text-secondary pt-1">
      <h6>{currentTime}</h6>
    </div>
  );
};

export default Clock;
