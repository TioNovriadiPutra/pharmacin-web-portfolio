import React, { useState } from "react";
import styles from "./footer.module.css";
import "./../../pages/globals.css";
import PharImg from "./../../public/LogoPharmacinClear.png";
import facebookLogo from "./../../public/facebookLogo.png";
import InstagramLogo from "./../../public/instagramLogo.png";
import LinkedinLogo from "./../../public/linkedinLogo.png";

export const Footer: React.FC = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [dropdownVisibleSecond, setDropdownVisibleSecond] = useState(false);
  const [dropdownVisibleThird, setDropdownVisibleThird] = useState(false);
  return (
    <div className={styles.box}>
      <div className={styles.frameOne}>
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
          <div
            className={styles.textGroupSecond}
            onClick={() => setDropdownVisible(!dropdownVisible)}
          >
            Perusahaan
          </div>
          <div
            className={
              dropdownVisible ? styles.dropdownVisible : styles.dropdownHidden
            }
          >
            <div className={styles.textGroupSecondTentangKami}>
              Tentang Kami
            </div>
          </div>
        </div>

        <div className={styles.groupThird}>
          <div
            className={styles.textGroupSecond}
            onClick={() => setDropdownVisibleSecond(!dropdownVisibleSecond)}
          >
            Solusi
          </div>
          <div
            className={
              dropdownVisibleSecond
                ? styles.dropdownVisible
                : styles.dropdownHidden
            }
          >
            <div className={styles.textGroupSecondTentangKami}>
              {" "}
              SIMK - Pharmacin{" "}
            </div>
            <div className={styles.textGroupSecondTentangKami}>Fitur</div>
          </div>
        </div>

        <div className={styles.groupFourth}>
          <div
            className={styles.textGroupSecond}
            onClick={() => setDropdownVisibleThird(!dropdownVisibleThird)}
          >
            Produk
          </div>
          <div
            className={
              dropdownVisibleThird
                ? styles.dropdownVisible
                : styles.dropdownHidden
            }
          >
            <div className={styles.textGroupSecondTentangKami}>Harga</div>
          </div>
        </div>
      </div>

      <div className={styles.frameSecond}>
        <hr className={styles.hrSecond} />
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
  );
};

export default Footer;
