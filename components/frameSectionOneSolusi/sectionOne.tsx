import React from "react";
import style from "./sectionOne.module.css";
import dashboard from "@/public/DashboardRawatPasien.png";
import BookIcon from "./bookIcon";
import DatabaseIcon from "./databaseIcon";
import AnalyticskIcon from "./analyticsIcon";
import CashierIcon from "./cashierIcon";
const SectionOneSolusi: React.FC = () => {
  return (
    <div className={style.boxSectionOne}>
      <div className={style.frameSectionOne}>
        <div className={style.textWrapperFirst}>
          <p>SIMK</p>
          <div className={style.textWrapperSecond}>
            <p>
              Solusi terintegrasi yang membantu Anda mengelola seluruh aspek
              klinik Anda
            </p>
          </div>
        </div>
        <div  className={style.iconPositionFirst}>
          <BookIcon />
          <AnalyticskIcon />
        </div>
        <div className={style.databaseIconPosition}>
        <DatabaseIcon/>
        </div>
        <div className={style.cashierIconPosition}>
        <CashierIcon/>
        </div>
        <div className={style.frameImg}>
          <img src={dashboard.src} alt="dashboard" />
        </div>
      </div>
    </div>
  );
};

export default SectionOneSolusi;
