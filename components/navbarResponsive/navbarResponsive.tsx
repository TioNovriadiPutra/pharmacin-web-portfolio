import React, { useState } from 'react';
import style from './navbar.module.css';

const NavbarResponsive = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={style.navbar}>
      <div className={style.logo}>LOGO</div>
      <div className={style.menu}>
        <a href="#about">About us</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact us</a>
      </div>
      <div className={style.menuMobile}>
        <button onClick={() => setShowMenu(!showMenu)}>☰</button>
        {showMenu && (
          <div>
            <a href="#about">About us</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact us</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavbarResponsive;