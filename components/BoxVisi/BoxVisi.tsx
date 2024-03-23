import React from "react";
import style from "./BoxVisi.module.css";

const BoxVisi: React.FC = () => {
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
            pengembangan sistem manajemen pelayanan kesehatan yang inovatif dan
            terdepan.
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

export default BoxVisi;
