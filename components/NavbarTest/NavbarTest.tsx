import React, { useState } from "react";
import style from "./NavbarTest.module.css";
import { useRouter } from "next/router";
import PharImg from "./../../public/LogoPharmacinClear.png";
import facebookLogo from "./../../public/facebookLogo.png";
import InstagramLogo from "./../../public/instagramLogo.png";
import LinkedinLogo from "./../../public/linkedinLogo.png";

const NavbarTest = () => {
  const router = useRouter();

  const [showNavbar, setShowNavbar] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 1000);
  };

  const moveToTentangKami = () => {
    router.push("/tentangkami");
  };

  const moveToSolusi = () => {
    router.push("/solusi");
  };

  const moveBackHome = () => {
    router.push("/");
  };

  return (
    <div className={style.navbarMain}>
      <div className={style.frameTwo}>
        <img className={style.logo} alt="Logo" src={PharImg.src} />
        <div onClick={moveBackHome} className={style.textWrapperTwo}>
          PHARMACIN
        </div>
      </div>

      <div className={style.navbar}>
        <div onClick={moveToTentangKami} className={style.textWrapper}>
          Tentang Kami
        </div>
        <div onClick={moveToSolusi} className={style.textWrapper}>
          Solusi
        </div>
        <div className={style.textWrapper}>Harga</div>
      </div>

      <button
        className={`${style.hamburger} ${
          isClicked ? style.hamburger_clicked : ""
        }`}
        onClick={handleShowNavbar}
      >
        {showNavbar ? "x" : "☰"}
      </button>

      <div
        className={`${style.nav_elements}  ${showNavbar ? style.active : ""}`}
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

        <div className={style.frameSecond}>
          <div className={style.groupSosmed}>
            <img className={style.imgSosmed} alt="" src={InstagramLogo.src} />
            <img className={style.imgSosmed} alt="" src={LinkedinLogo.src} />
            <img className={style.imgSosmed} alt="" src={facebookLogo.src} />
          </div>

          <p className={style.TextAllRight}>
            © 2024 Pharmacin Jaya Abadi - All Rights Reserved
          </p>
        </div>
      </div>

      <div className={style.frame}>
        <div className={style.div}>Hubungi Kami</div>
      </div>
    </div>
  );
};

export default NavbarTest;
