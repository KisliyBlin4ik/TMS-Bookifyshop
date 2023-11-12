import React, { useState } from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

import './_Burger.scss';

const Burger = () => {
  const [handleBurger, setHandleBurger] = useState(false);

  const handleSwitchBurger = () => {
    handleBurger ? setHandleBurger(false) : setHandleBurger(true);
  };

  return (
    <>
      <div className="burger" onClick={handleSwitchBurger}>
        <span className={`burger__icon ${handleBurger ? 'open' : 'close'}`}></span>
      </div>
      <BurgerMenu handleBurger={handleBurger} handleSwitchBurger={handleSwitchBurger } />
    </>
  );
};

export default Burger;
