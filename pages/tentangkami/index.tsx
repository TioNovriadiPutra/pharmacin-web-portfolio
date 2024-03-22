import React from "react";
import DefaultLayoutSecond from "@/components/DefaultLayoutS";
import style from "./tentangkami.module.css";
import BoxGroupTentangKami from "./../../components/boxGroupSolusi/boxGroup";
import SectionEmail from "./../../components/SectionEmail/sectionEmail";
import backgroundTenangKami from "./../../public/BackgroundTentangKami.png";
import { Parallax } from "react-parallax";
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
  
  const SectionTwo = () => {
    return (
      <div className={style.boxSectionTwo}>
        <div className={style.frameSectionTwo}>
          <div className={style.textWrapperFirstTwo}>
            <p>Kami Membangun Masa Depan Pelayanan Kesehatan Yang Lebih Baik</p>
          </div>

          <div className={style.textWrapperSecondTwo}>
            <p>
              Didorong oleh semangat untuk meningkatkan kualitas dan efisiensi
              pelayanan kesehatan, kami membangun perusahaan yang berfokus pada
              pengembangan sistem manajemen pelayanan kesehatan yang inovatif
              dan terdepan.
              <br /> <br />
              Bersama-sama, kami membangun masa depan pelayanan kesehatan yang
              lebih baik, di mana teknologi dan keahlian manusia bersatu untuk
              memberikan pelayanan yang optimal bagi semua orang.
            </p>
          </div>
        </div>
      </div>
    );
  };

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
              textDesc="Memberikan sumber daya edukasi kepada masyarakatuntuk berperan aktif dalam menjaga kesehatan diri sendiri"
            />
          </div>
        </div>
      </div>
    );
  };

  const combineSection = () => {
    return (
      <div className={style.combineSection}>
        {sectionOne()}
        <Parallax  bgImage={backgroundTenangKami.src} strength={200}>
          <div style={{ height: "562px" }}>
          </div>
        </Parallax>
        {SectionTwo()}
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
