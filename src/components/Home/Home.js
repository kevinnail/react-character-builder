import './Home.css';
import React from 'react';
import { useState } from 'react';

import Display from '../Display/Display';
import Editor from '../Editor/Editor.js';
import Stats from '../Stats/Stats.js';

function Home() {
  const [head, setHead] = useState('bird');
  const [middle, setMiddle] = useState('blue');
  const [pants, setPants] = useState('blue');
  const [catchPhrase, setCatchPhrase = []] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [headCount, setHeadCount] = useState(0);
  const [middleCount, setMiddleCount] = useState(0);
  const [pantsCount, setPantsCount] = useState(0);

  return (
    <div className="Home">
      <Editor
        head={head}
        setHead={setHead}
        middle={middle}
        setMiddle={setMiddle}
        pants={pants}
        setPants={setPants}
        setCatchPhrase={setCatchPhrase}
        inputValue={inputValue}
        setInputValue={setInputValue}
        headCount={headCount}
        setHeadCount={setHeadCount}
        middleCount={middleCount}
        setMiddleCount={setMiddleCount}
        pantsCount={pantsCount}
        setPantsCount={setPantsCount}
      />
      <Display head={head} middle={middle} pants={pants} catchPhrase={catchPhrase} />
      <Stats
        catchPhrase={catchPhrase}
        headCount={headCount}
        middleCount={middleCount}
        pantsCount={pantsCount}
      />
    </div>
  );
}

export default Home;
