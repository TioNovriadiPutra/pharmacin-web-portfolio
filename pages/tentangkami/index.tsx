import React, { useState, useEffect } from 'react';
import DefaultLayoutSecond from "@/components/DefaultLayoutS";
import style from "./tentangkami.module.css";
import BoxGroupTentangKami from "./../../components/boxGroupSolusi/boxGroup";
import SectionEmail from "./../../components/SectionEmail/sectionEmail";
import backgroundTenangKami from "./../../public/BackgroundTentangKami.png";
import { Parallax } from "react-parallax";
import BoxVisi from "@/components/BoxVisi/BoxVisi";
const tentangKami = () => {

  const sectionOne = () => {
    return (
      <div className={style.boxSectionOne}>
          <div className={style.frameFirstBoxOne}>
            <p>
            Transformasi Pemberian Layanan <br />Kesehatan
            </p>
          </div>
      </div>
    )
  }
  

  const SectionThree = () => {
    return (
      <div className={style.boxFirstSection}>
        <div className={style.parentFirst}>
          <div className={style.overlapGroupFirst}>
            <p className={style.textWrapper}>
              Menjadi pelopor inovasi teknologi yang mampu meningkatkan standar
              pelayanan kesehatan di indonesia, sehingga mampu bersaing secara
              tingkat global.
            </p>
            <div className={style.textWrapperSecond}>
              <p>
                Tidak hanya hadir sebagai solusi bagi pelayanan kesehatan di
                Indonesia, kami berambisi lebih untuk meningkatkan kualitas sumber
                daya masyarakat
              </p>
            </div>
          </div>
        </div>

        <div className={style.frameFirstSecond}>
          <div className={style.overlapGroup}>
            <BoxGroupTentangKami
              text1="Creating"
              textDesc="Menciptakan ekosistem teknologi pelayanan kesehatan di indonesia"
            />
            <BoxGroupTentangKami
              text1="Improving"
              textDesc="Meningkatkan standar pelayanan kesehatan di indonesia"
            />
            <BoxGroupTentangKami
              text1="Expanding"
              textDesc="Melakukan pemerataan teknologi pada sektor kesehatan skala nasional"
            />
          </div>
          <div className={style.overlapGroup}>
            <BoxGroupTentangKami
              text1="Building"
              textDesc="Membangun infrastuktur yang memenuhi standar tertinggi dalam melindungi informasi kesehatan pribadi."
            />
            <BoxGroupTentangKami
              text1="Giving"
              textDesc="Memberikan sumber daya edukasi kepada masyarakat untuk berperan aktif dalam menjaga kesehatan diri sendiri"
            />
          </div>
        </div>
      </div>
    );
  };

  const combineSection = () => {
    const [strength, setStrength] = useState(500); // Default strength

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setStrength(100); 
      } else {
        setStrength(200); 
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    return (
      <div className={style.combineSection} style={{ width: "100%" }}>
      {sectionOne()}
      <Parallax bgImage={backgroundTenangKami.src} strength={strength}>
        <div className={style.backgroundTentangKamiParallax}>
        </div>
      </Parallax>
      <BoxVisi></BoxVisi>
      {SectionThree()}
      <SectionEmail />
      </div>
    );
  };

  return (
    <div>
      <title>Pharmacin</title>
      <DefaultLayoutSecond>{combineSection()}</DefaultLayoutSecond>
    </div>
  );
};

export default tentangKami;
