
import React, { useState } from 'react';

const Buttons = () => {
  const [color, changeColor] = useState(1);

  const Click = (btnNumber) => {
    changeColor(btnNumber);
  };

  return (
    <div className='BTN'>
      <button
        className={color === 1 ? 'btn1' : 'btn'}
        onClick={() => Click(1)}>1</button>
      <button
        className={color === 2 ? 'btn1' : 'btn'}
        onClick={() => Click(2)}>2</button>
      <button
        className={color === 3 ? 'btn1' : 'btn'}
        onClick={() => Click(3)}>3</button>
      <button
        className={color === 4 ? 'btn1' : 'btn'}
        onClick={() => Click(4)}>4</button>
      <button
        className={color === 5 ? 'btn1' : 'btn'}
        onClick={() => Click(5)}>5</button>
    </div>
    
  );
};

export default Buttons;