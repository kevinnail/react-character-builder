import React from 'react';
import './Editor.css';
import { useState } from 'react';

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
}) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    if (e.target.name === 'head') {
      setHead(e.target.value);
      setHeadCount(headCount + 1);
    }

    if (e.target.name === 'middle') {
      setMiddle(e.target.value);
      setMiddleCount(middleCount + 1);
    }
    e.target.name === 'pants' && setPants(e.target.value);
  };

  const handleClick = () => {
    setCatchPhrase((currentPhrases) => [...currentPhrases, inputValue]);
    setInputValue('');
  };

  return (
    <div className="Editor">
      <label>Head</label>
      <div className="form-control">
        <select name="head" value={head} onChange={handleChange}>
          <option value="bird">Bird</option>
          <option value="dog">Dog</option>
          <option value="duck">Duck</option>
          <option value="horse">Horse</option>
        </select>
      </div>
      <label>Middle</label>
      <div className="form-control">
        <select name="middle" value={middle} onChange={handleChange}>
          <option value="blue">Blue</option>
          <option value="dress">Dress</option>
          <option value="pink">Pink</option>
          <option value="red">Red</option>
        </select>
      </div>
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
          // placeholder={catchPhrase}
          value={`${inputValue}`}
          onChange={(e) => setInputValue(e.target.value)}
          style={{ height: '30px', width: '300px' }}
        />
        <button onClick={handleClick}>Add Catch Phrase</button>
      </div>
    </div>
  );
}
