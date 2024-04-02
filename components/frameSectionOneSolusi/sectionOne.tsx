import React from "react";
import style from "./sectionOne.module.css";
import kasirImg from "@/public/kasir.png";
import BookIcon from "./bookIcon";
import DatabaseIcon from "./databaseIcon";
import AnalyticskIcon from "./analyticsIcon";
import CashierIcon from "./cashierIcon";
const SectionOneSolusi: React.FC = () => {
  return (
    <div className={style.frame}>
      <div className={style.overlap}>
        <div className={style.ellipse}></div>
        <div className={style.iconPositionFirst}>
          <BookIcon />
          <AnalyticskIcon />
        </div>
        <div className={style.iconPositionSecond}>
          <DatabaseIcon />
        </div>
        <div className={style.iconPositionThird}>
          <CashierIcon />
        </div>
        <div className={style.group}>
          <p className={style.div}>
            Transformasi Pemberian Layanan Kesehatan: Rasakan Keunggulan Tanpa
            Batas
          </p>
          <p className={style.textWrapper}>
            Wujudkan pelayanan kesehatan yang lebih efisien, efektif, dan
            berorientasi pada solusi terdepan untuk mengoptimalkan pengelolaan
            faskes Anda.
          </p>
        </div>

        <div className={style.groupWrapper}>
          <div className={style.dashboardKasirWrapper}>
            <img
              className={style.dashboardKasir}
              alt="Dashboard kasir"
              src={kasirImg.src}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOneSolusi;
