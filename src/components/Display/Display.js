import React from 'react';
import './Display.css';

export default function Display(head) {
  return (
    <div className="Display">
      <img key="head" src={`../../images/head-${head.head}.png`} alt="display" />
      <img src="../../images/middle-blue.png" alt="display" />
      <img src="../../images/pants-blue.png" alt="display" />
    </div>
  );
}
