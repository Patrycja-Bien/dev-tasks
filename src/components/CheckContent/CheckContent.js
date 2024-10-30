import './CheckContent.scss';

import React, { useState } from 'react';

export const CheckContent = () => {
  const [turnedOn, setTurnedOn] = useState(false);
  const handleToggle = () => {
    setTurnedOn((prevState) => !prevState);
  };
  return (
    <>
      <div className="check">
        <p className={turnedOn ? 'turned-on' : 'turned-off'}>
          {turnedOn ? 'turned on' : 'turned off'}
        </p>

        <button onClick={handleToggle}>
          {turnedOn ? 'turn off' : 'turn on'}
        </button>
      </div>
    </>
  );
};
export default CheckContent;
