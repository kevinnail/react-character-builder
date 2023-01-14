import React from 'react';

export default function Head({ head, setHead, headCount, setHeadCount }) {
  const handleChange = (e) => {
    setHead(e.target.value);
    setHeadCount(headCount + 1);
  };
  console.log('headCount', headCount);

  return (
    <>
      <label>Head</label>
      <div className="form-control">
        <select name="head" value={head} onChange={handleChange}>
          <option value="bird">Bird</option>
          <option value="dog">Dog</option>
          <option value="duck">Duck</option>
          <option value="horse">Horse</option>
        </select>
      </div>
    </>
  );
}
