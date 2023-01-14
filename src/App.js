import './App.css';
import React from 'react';
import { useState } from 'react';

import Display from './components/Display/Display';
import Editor from './components/Editor/Editor.js';
import Stats from './components/Stats/Stats.js';

function App() {
  const [head, setHead] = useState('bird');
  const [middle, setMiddle] = useState('blue');
  const [pants, setPants] = useState('blue');
  const [catchPhrase, setCatchPhrase = []] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [headCount, setHeadCount] = useState(0);
  const [middleCount, setMiddleCount] = useState(0);

  return (
    <div className="App">
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
      />
      <Display head={head} middle={middle} pants={pants} catchPhrase={catchPhrase} />
      <Stats catchPhrase={catchPhrase} headCount={headCount} middleCount={middleCount} />
    </div>
  );
}

export default App;
