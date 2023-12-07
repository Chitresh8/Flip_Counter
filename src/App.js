import React, { useState, useEffect } from "react";
import "./App.css"; // Import your CSS file

const FlipCard = ({ value }) => {
  const rotation = value * -180;

  return (
    <div
      className="card"
      style={{ "--rotation": `${rotation}deg` }}
    >
      <div className="card-inner">
        {[0, 1, 2, 3, 4, 5].map((num) => (
          <div
            key={num}
            className="card-face"
          >
            {num}
          </div>
        ))}
      </div>
    </div>
  );
};

const FlipCounter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => (prevCounter + 1) % 60);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const tensDigit = Math.floor(counter / 10);
  const onesDigit = counter % 10;

  return (
    <div className="flip-counter">
      <FlipCard value={tensDigit} />
      <FlipCard value={onesDigit} />
    </div>
  );
};

export default FlipCounter;
