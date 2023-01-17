import React from 'react';
import './Stats.css';
export default function Stats({ catchPhrase, headCount, middleCount, pantsCount }) {
  catchPhrase = [...catchPhrase];

  return (
    <div className="Stats">
      <p>You have changed the head {`${headCount}`} times.</p>
      <p>You have changed the middle {`${middleCount}`} times.</p>
      <p>You have changed the pants {`${pantsCount}`} times.</p>
      <ul key="catchphrase">
        {catchPhrase.map((phrase, i) => {
          i += 1;
          return <li id={i} key={i}>{`${phrase}`}</li>;
        })}
      </ul>
    </div>
  );
}
