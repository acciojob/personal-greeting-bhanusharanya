// src/Greeting.js

import React, { useState } from "react";

const Greeting = () => {
  const [name, setName] = useState("");

  // Update name and greeting automatically based on input change
  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div id="root">
      <p>Enter your name:</p>
      <input
        type="text"
        value={name}
        onChange={handleInputChange}
        placeholder="Enter your name"
        required
      />
      {/* Display greeting automatically when name is entered */}
      {name && <p>Hello, {name}!</p>}
    </div>
  );
};

export default Greeting;
