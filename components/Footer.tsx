import React from "react";
import styles from "./footer.module.css";
import "./../pages/globals.css";
import PharImg from "./../public/LogoPharmacinClear.png";
import facebookLogo from "./../public/facebookLogo.png";
import InstagramLogo from "./../public/instagramLogo.png";
import LinkedinLogo from "./../public/linkedinLogo.png";

export const FooterContent: React.FC = () => {
  return (
    <div className={styles.box}>
      <div className={styles.group}>
        <div className={styles.overlapGroup}>
          <img className={styles.line} alt="Line" src="line-1.svg" />

          <div className={styles.divMain}>
            <div className={styles.frame}>
              <img className={styles.logo} alt="Logo" src={PharImg.src} />
              <div className={styles.textPharmacin}>PHARMACIN</div>
            </div>
            <p className={styles.textLorem}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              mollis varius finibus. Duis faucibus consectetur dictum.
            </p>
          </div>

          <div className={styles.groupSecond}>
            <div className={styles.textGroupSecond}>Perusahaan</div>
            <div className={styles.textGroupSecondTentangKami}>Tentang Kami</div>
          </div>
          
          <p className={styles.TextAllRight}>
            © 2024 Pharmacin Jaya Abadi - All Rights Reserved
          </p>
          
          <div className={styles.groupThird}>
            <div className={styles.textGroupSecond}>SIMK - Pharmacin</div>
            <div className={styles.textGroupSecondTentangKami}>Fitur</div>
            <div className={styles.textGroupThirdSolusi}>Solusi</div>
          </div>
          
          <div className={styles.frameSecond}>
            <img className={styles.imgSosmed} alt="" src={InstagramLogo.src}/>
            <img className={styles.imgSosmed} alt="" src={LinkedinLogo.src} />
            <img className={styles.imgSosmed} alt="" src={facebookLogo.src} />
          </div>
        
        </div>
      </div>
    </div>
  );
};
