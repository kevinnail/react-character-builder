import React from 'react';
import './Editor.css';
import { useState } from 'react';
import Head from '../Head/Head.js';
import Middle from '../Middle/Middle.js';

export default function Editor({
  head,
  setHead,
  middle,
  setMiddle,
  pants,
  setPants,
  setCatchPhrase,
  headCount,
  setHeadCount,
  middleCount,
  setMiddleCount,
  pantsCount,
  setPantsCount,
}) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    if (e.target.name === 'pants') {
      setPants(e.target.value);
      setPantsCount(pantsCount + 1);
    }
  };

  const handleClick = () => {
    setCatchPhrase((currentPhrases) => [...currentPhrases, inputValue]);
    setInputValue('');
  };

  return (
    <div className="Editor">
      <Head head={head} setHead={setHead} headCount={headCount} setHeadCount={setHeadCount} />
      <Middle
        middle={middle}
        setMiddle={setMiddle}
        middleCount={middleCount}
        setMiddleCount={setMiddleCount}
      />

      <label>Pants</label>
      <div className="form-control">
        <select name="pants" value={pants} onChange={handleChange}>
          <option value="blue">Blue</option>
          <option value="dog">Dog</option>
          <option value="leg">Leg</option>
          <option value="white">White</option>
        </select>
      </div>

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
    </div>
  );
}
