import React from 'react';
import './Editor.css';
export default function Editor() {
  return (
    <div className="Editor">
      <label>Head</label>
      <div className="form-control">
        <select name="head">
          <option value="bird">Bird</option>
          <option value="dog">Dog</option>
          <option value="duck">Duck</option>
          <option value="horse">Horse</option>
        </select>
      </div>
      <label>Middle</label>
      <div className="form-control">
        <select name="middle">
          <option value="blue">Blue</option>
          <option value="dress">Dress</option>
          <option value="pink">Pink</option>
          <option value="red">Red</option>
        </select>
      </div>
      <label>Pants</label>
      <div className="form-control">
        <select name="pants">
          <option value="blue">Blue</option>
          <option value="dog">Dog</option>
          <option value="leg">Leg</option>
          <option value="white">White</option>
        </select>
      </div>

      <label>Text</label>
      <div className="form-control">
        <input name="text" style={{ height: '30px', width: '300px' }} />
        <button>Add Catch Phrase</button>
      </div>
    </div>
  );
}
