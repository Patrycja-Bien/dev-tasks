import './Counter.scss';

import React, { useState } from 'react';

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div className="counter">
        <h1>{counter}</h1>
        <div className="buttons">
          <button
            onClick={() => {
              if (counter > 0) {
                setCounter((prevCount) => prevCount - 1);
              }
            }}
          >
            Decrease
          </button>
          <button onClick={() => setCounter((prevCount) => prevCount + 1)}>
            Increase
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
