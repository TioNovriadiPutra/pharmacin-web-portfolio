import React from 'react';
import style from './NavbarTest.module.css';
import PharImg from './../../public/LogoPharmacinClear.png';
import { useRouter } from 'next/router';


const NavbarTest: React.FC = () => {
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

    return (
    <div className={style.navbarMain} >
        <div className={style.frameTwo}>
          <img className={style.logo} alt="Logo" src={PharImg.src} />
          <div onClick={moveBackHome} className={style.textWrapperTwo}>PHARMACIN</div>
        </div>

        <div className={style.navbar}>
            <div onClick={moveToTentangKami} className={style.textWrapper}>Tentang Kami</div>
            <div onClick={moveToSolusi} className={style.textWrapper}>Solusi</div>
            <div className={style.textWrapper}>Harga</div>
        </div>

        <div className={style.frame}>
          <div className={style.div}>Hubungi Kami</div>
        </div>
    </div>
    );
};

export default NavbarTest;