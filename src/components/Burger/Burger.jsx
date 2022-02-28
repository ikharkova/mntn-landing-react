import { useState } from 'react';
import './Burger.css';

const Burger = () => {
  const menuItems = ['Equipment','About us','Blog'];
  const [menuState, setMenuState] = useState('');

  const toggleFunction = () => {
    const newMenuState = menuState === 'active' ? '' : 'active';
    setMenuState(newMenuState);
  };

  return (
    <>
      <div className={`header__burger-icon ${menuState}`} id="burger-menu-button" onClick={toggleFunction}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={`header__burger-menu ${menuState}`} id="burger-menu">
        {menuItems.map(e => <a className="header__burger-item" href={`#${e}`} onClick={toggleFunction}>{e}</a>)}
      </nav>
    </>
  )
};

export default Burger;

// const burgerMenuButton = document.querySelector('#burger-menu-button');
// const burgerMenu = document.querySelector('#burger-menu');
// const body = document.querySelector('#body');
// const burgerMenuLink = document.querySelectorAll('.header__burger-item');

// const toggleFunction = () => {
//   burgerMenuButton.classList.toggle('active');
//   burgerMenu.classList.toggle('active');
//   body.classList.toggle('no-scroll');
// }

// burgerMenuButton.addEventListener('click', toggleFunction);

// burgerMenuLink.forEach((element) => {
//   element.addEventListener('click', toggleFunction);
// })

