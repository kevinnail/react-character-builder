import React from 'react';
import './Display.css';

export default function Display({ head, middle, pants }) {
  return (
    <div className="Display">
      <img key="head" src={`../../images/head-${head}.png`} alt="display" />
      <img key="middle" src={`../../images/middle-${middle}.png`} alt="display" />
      <img src={`../../images/pants-${pants}.png`} alt="display" />
    </div>
  );
}
