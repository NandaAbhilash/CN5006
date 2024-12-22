import './App.css'
import React, { useState } from 'react'
import like7 from './Like.png';
import Love from './Love.png';
import happy from './Happy.png';

const FacebookEmojiCounter = ({ type }) => {
  const [count, setCount] = useState(0);
  const images = {
    Love: Love,
    Like: like7,
    happy: happy
  };

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h5>It is {count} {type}.</h5>
      <button onClick={increment}>
        <img src={images[type]} alt=" " />
        <b>{count}</b>
      </button>
    </div>
  );
};

export default FacebookEmojiCounter;