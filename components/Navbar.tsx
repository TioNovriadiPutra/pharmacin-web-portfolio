import React, { useEffect, useState } from "react";
import styles from "./comp.module.css";
import PharImg from "./../public/LogoPharmacinClear.png";
import { useRouter } from 'next/router';


export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

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
      
      <div className={`${styles.frame} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={`${styles.div} ${isScrolled ? styles.scrolled : ''}`}>Hubungi Kami</div>
      </div>

      
      
    </div>
  );
};
