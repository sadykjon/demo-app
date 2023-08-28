
import React, { useState } from 'react';

const Menu = () => {
  const [menu, changeColor] = useState(1);

  const Click = (btnNumber) => {
    changeColor(btnNumber);
  };

  return (
    <ul className='Menu'>
      <li
        className={menu === 1 ? 'menu1' : 'menu'}
        onClick={() => Click(1)}>Home</li>
      <li
        className={menu === 2 ? 'menu1' : 'menu'}
        onClick={() => Click(2)}>Profil</li>
      <li
        className={menu === 3 ? 'menu1' : 'menu'}
        onClick={() => Click(3)}>Messege</li>
      <li
        className={menu === 4 ? 'menu1' : 'menu'}
        onClick={() => Click(4)}>News</li>
      <li
        className={menu === 5 ? 'menu1' : 'menu'}
        onClick={() => Click(5)}>Contact</li>
    </ul>
  );
};

export default Menu;