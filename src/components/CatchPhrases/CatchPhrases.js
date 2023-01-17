import React from 'react';
import { useState } from 'react';

export default function CatchPhrases({ setCatchPhrase }) {
  const [inputValue, setInputValue] = useState('');

  const handleClick = () => {
    setCatchPhrase((currentPhrases) => [...currentPhrases, inputValue]);
    setInputValue('');
  };
  return (
    <>
      <label>Catch Phrase</label>
      <div className="form-control">
        <input
          type="text"
          value={`${inputValue}`}
          onChange={(e) => setInputValue(e.target.value)}
          style={{ height: '30px', width: '300px' }}
        />
        <button onClick={handleClick}>Add Catch Phrase</button>
      </div>
    </>
  );
}
