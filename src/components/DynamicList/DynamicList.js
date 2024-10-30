import './DynamicList.scss';

import React from 'react';

// eslint-disable-next-line react/prop-types
export const DynamicList = ({ n }) => {
  return (
    <>
      <ul>
        {Array.from({ length: n }, (_, index) => (
          <li key={index}>List element {index + 1}</li>
        ))}
      </ul>
    </>
  );
};

export default DynamicList;
