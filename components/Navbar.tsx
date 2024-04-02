import React, { useEffect, useState } from "react";
import styles from "./comp.module.css";
import PharImg from "./../public/LogoPharmacinClear.png";
import { useRouter } from 'next/router';
import facebookLogo from "./../public/facebookLogo.png";
import InstagramLogo from "./../public/instagramLogo.png";
import LinkedinLogo from "./../public/linkedinLogo.png";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  const [showNavbar, setShowNavbar] = useState(false)
  const [isClicked, setIsClicked] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 1000);
  }

  const moveBackHome = () => {
    router.push('/');
  }
  
  const moveToTentangKami = () => {
    router.push('/tentangkami');
  }

  const moveToSolusi = () => { 
    router.push('/solusi');
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.navbarMain} ${isScrolled ? styles.scrolled : ''}`} >
      <div className={styles.frameTwo}>
        <img className={styles.logo} alt="Logo" src={PharImg.src} />
        <div onClick={moveBackHome} className={`${styles.textWrapperTwo} ${isScrolled ? styles.scrolled : ''}`}>PHARMACIN</div>
      </div>
      
      <div className={styles.navbar}>
          <div onClick={moveToTentangKami} className={`${styles.textWrapper} ${isScrolled ? styles.scrolled : ''}`}>Tentang Kami</div>
          <div onClick={moveToSolusi} className={`${styles.textWrapper} ${isScrolled ? styles.scrolled : ''}`}>Solusi</div>
          <div className={`${styles.textWrapper} ${isScrolled ? styles.scrolled : ''}`}>Harga</div>
      </div>
      <button
        className={`${styles.hamburger} ${
          isClicked ? styles.hamburger_clicked : ""
        }`}
        onClick={handleShowNavbar}
      >
        {showNavbar ? "x" : "☰"}
      </button>

      <div
        className={`${styles.nav_elements}  ${showNavbar ? styles.active : ""}`}
      >
        <ul>
          <li>
            <div onClick={moveToTentangKami}>Tentang Kami</div>
          </li>
          <li>
            <div onClick={moveToSolusi}>Solusi</div>
          </li>
          <li>
            <div>Harga</div>
          </li>
        </ul>

        <div className={styles.frameSecond}>
          <div className={styles.groupSosmed}>
            <img className={styles.imgSosmed} alt="" src={InstagramLogo.src} />
            <img className={styles.imgSosmed} alt="" src={LinkedinLogo.src} />
            <img className={styles.imgSosmed} alt="" src={facebookLogo.src} />
          </div>

          <p className={styles.TextAllRight}>
            © 2024 Pharmacin Jaya Abadi - All Rights Reserved
          </p>
        </div>
      </div>
      <div className={`${styles.frame} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={`${styles.div} ${isScrolled ? styles.scrolled : ''}`}>Hubungi Kami</div>
      </div>

      
      
    </div>
  );
};
