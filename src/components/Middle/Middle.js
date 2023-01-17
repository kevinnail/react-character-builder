import React from 'react';

export default function Middle({ middle, setMiddle, middleCount, setMiddleCount }) {
  const handleChange = (e) => {
    setMiddle(e.target.value);
    setMiddleCount(middleCount + 1);
  };
  return (
    <>
      <label>Middle</label>
      <div className="form-control">
        <select name="middle" value={middle} onChange={handleChange}>
          <option value="blue">Blue</option>
          <option value="dress">Dress</option>
          <option value="pink">Pink</option>
          <option value="red">Red</option>
        </select>
      </div>
    </>
  );
}
