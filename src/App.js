import './App.css';
import React from 'react';
import { useState } from 'react';

import Display from './components/Display/Display';
import Editor from './components/Editor/Editor.js';
import Stats from './components/Stats/Stats.js';

function App() {
  const [head, setHead] = useState('bird');
  const [middle, setMiddle] = useState('blue');
  return (
    <div className="App">
      <Editor head={head} setHead={setHead} middle={middle} setMiddle={setMiddle} />
      <Display head={head} middle={middle} />
      <Stats />
    </div>
  );
}

export default App;
