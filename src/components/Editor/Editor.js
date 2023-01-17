import React from 'react';
import './Editor.css';
import Head from '../Head/Head.js';
import Middle from '../Middle/Middle.js';
import Pants from '../Pants/Pants.js';
import CatchPhrases from '../CatchPhrases/CatchPhrases.js';

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
  return (
    <div className="Editor">
      <Head head={head} setHead={setHead} headCount={headCount} setHeadCount={setHeadCount} />
      <Middle
        middle={middle}
        setMiddle={setMiddle}
        middleCount={middleCount}
        setMiddleCount={setMiddleCount}
      />
      <Pants
        pants={pants}
        setPants={setPants}
        pantsCount={pantsCount}
        setPantsCount={setPantsCount}
      />
      <CatchPhrases setCatchPhrase={setCatchPhrase} />
    </div>
  );
}
