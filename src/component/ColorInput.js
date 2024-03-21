import React, { useState } from 'react';

function ColorInput({ fetchColors }) {
  const [word, setWord] = useState('');

  const handleChange = (event) => {
    setWord(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchColors(word);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={word} onChange={handleChange} placeholder="Enter a word" />
      <button type="submit">Search</button>
    </form>
  );
}

export default ColorInput;