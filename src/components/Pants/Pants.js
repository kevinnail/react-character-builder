import React from 'react';

export default function Pants({ pants, setPants, pantsCount, setPantsCount }) {
  const handleChange = (e) => {
    setPants(e.target.value);
    setPantsCount(pantsCount + 1);
  };
  return (
    <>
      {' '}
      <label>Pants</label>
      <div className="form-control">
        <select name="pants" value={pants} onChange={handleChange}>
          <option value="blue">Blue</option>
          <option value="dog">Dog</option>
          <option value="leg">Leg</option>
          <option value="white">White</option>
        </select>
      </div>
    </>
  );
}
