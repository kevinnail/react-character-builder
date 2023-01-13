import './App.css';
import React from 'react';
import { useState } from 'react';

import Display from './components/Display/Display';
import Editor from './components/Editor/Editor.js';
import Stats from './components/Stats/Stats.js';

function App() {
  const [head, setHead] = useState('Choose Head');
  return (
    <div className="App">
      <Editor head={head} setHead={setHead} />
      <Display head={head} />
      <Stats />
    </div>
  );
}

export default App;
