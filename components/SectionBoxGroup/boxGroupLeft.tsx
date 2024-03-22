import React, { ReactNode } from "react";
import style from "./boxGroupLeft.module.css";
import CheckIcon from "../iconSolusi/check";

interface Props {
  imgstrg: string;
  text1: string;
  text2: string | ReactNode;
  point1?: string;
  point2?: string;
  point3?: string;
}

const BoxGroupLeft: React.FC<Props> = ({
  imgstrg,
  text1,
  text2,
  point1,
  point2,
  point3,
}) => {
  return (
    <div className={style.boxFive}>
      <div className={style.frameSectionFive}>
        <div className={style.frameImgAndGrdFive}>
          <div className={style.eclipseImgSectionFive}></div>
          <img src={imgstrg} alt="" />
        </div>

        <div className={style.frameTextWrapperSectionFive}>
          <p className={style.textWrapperFirstFive}>{text1}</p>

          <div className={style.textWrapperSecondFive}>{text2}</div>

          <div className={style.cekPoints}>
            {point1 && (
              <>
                <CheckIcon />
                <p>{point1}</p>
              </>
            )}
          </div>

          <div className={style.cekPoints}>
            {point2 && (
              <>
                <CheckIcon />
                <p>{point2}</p>
              </>
            )}
          </div>

          <div className={style.cekPoints}>
            {point3 && (
              <>
                <CheckIcon />
                <p>{point3}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxGroupLeft;
