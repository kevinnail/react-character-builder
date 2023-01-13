import './App.css';
import React from 'react';

import Display from './components/Display/Display';
import Editor from './components/Editor/Editor.js';
import Stats from './components/Stats/Stats.js';

function App() {
  return (
    <div className="App">
      <Editor />
      <Display />
      <Stats />
    </div>
  );
}

export default App;
