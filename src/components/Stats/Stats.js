import React from 'react';
import './Stats.css';
export default function Stats({ catchPhrase }) {
  catchPhrase = [...catchPhrase];

  return (
    <div className="Stats">
      <p>You have changed the head X times.</p>
      <p>You have changed the middle X times.</p>
      <p>You have changed the pants X times.</p>
      <ul key="catchphrase">
        {catchPhrase.map((phrase, i) => {
          i += 1;
          return <li id={i} key={phrase}>{`${phrase}`}</li>;
        })}
      </ul>
    </div>
  );
}
