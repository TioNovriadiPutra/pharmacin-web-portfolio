import React, { ReactNode } from "react";
import style from "./boxGroupRight.module.css";
import "./../../pages/globals.css";

interface Props {
  imgSrc: string;
  text1: string;
  text2: string | ReactNode;
  text2Style?: string;
}

const BoxGroupRight: React.FC<Props> = ({ imgSrc, text1, text2 }) => {
  return (
    <div className={style.boxFour}>
      <div className={style.frameSectionFour}>
        <div className={style.frameTextWrapperSectionFour}>
          <p className={style.textWrapperFirstFour}>{text1}</p>
          <div className={style.textWrapperSecondFour}>{text2}</div>
        </div>
        <div className={style.frameImgAndGrd}>
          <div className={style.eclipseImgSectionFour}></div>
          <img src={imgSrc} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BoxGroupRight;
