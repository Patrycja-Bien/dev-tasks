import './SimpleForm.scss';

import React, { useState } from 'react';

export const SimpleForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          type="text"
          value={name}
          onChange={handleNameChange}
        />
        <input
          placeholder="E-mail"
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
        <button className="submit" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default SimpleForm;
