import React, { useState } from 'react';
import style from './NavbarTest.module.css';
import { useRouter } from 'next/router';
import PharImg from "./../../public/LogoPharmacinClear.png";


const NavbarTest = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const moveToTentangKami = () => { 
    router.push('/tentang-kami');
  }

  const moveToSolusi = () => { 
    router.push('/solusi');
  }

  const moveBackHome = () => {
    router.push('/');
  }

  return (
    <div className={style.navbarMain}>
      <div className={style.frameTwo}>
        <img className={style.logo} alt="Logo" src={PharImg.src} />
        <div onClick={moveBackHome} className={style.textWrapperTwo}>PHARMACIN</div>
      </div>

      <div className={style.navbar}>
        <div onClick={moveToTentangKami} className={style.textWrapper}>Tentang Kami</div>
        <div onClick={moveToSolusi} className={style.textWrapper}>Solusi</div>
        <div className={style.textWrapper}>Harga</div>
      </div>

      <button className={style.hamburger} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        ☰
      </button>

      {isMobileMenuOpen && (
        <div className={style.navbarHamburger}>
          <div onClick={moveToTentangKami} className={style.textWrapper}>Tentang Kami</div>
          <div onClick={moveToSolusi} className={style.textWrapper}>Solusi</div>
          <div className={style.textWrapper}>Harga</div>
          <div className={style.textWrapper}>Hubungi Kami</div>
        </div>
      )}

  <div className={style.frame}>
        <div className={style.div}>Hubungi Kami</div>
      </div>
      
    </div>
  );
};

export default NavbarTest;