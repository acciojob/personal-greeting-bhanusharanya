// src/Greeting.js

import React, { useState } from 'react';

const Greeting = () => {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setGreeting(`Hello, ${name}! Welcome to the React world!`);
  };

  return (
    <div id="root">
      <h1>Greeting App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={handleInputChange}
          placeholder="Enter your name"
          required
        />
        <button type="submit">Greet Me!</button>
      </form>
      {greeting && <p>{greeting}</p>}
    </div>
  );
};

export default Greeting;
