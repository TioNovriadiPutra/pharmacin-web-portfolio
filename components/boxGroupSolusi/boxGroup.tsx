import React from "react";
import style from "./boxGroup.module.css";
import ChartIcon from "../iconSolusi/chartIcon";
import ShieldIcon from "../iconSolusi/shieldIcon";
import LikeIcon from "../iconSolusi/likeIcon";
import MaximazeIcon from "../iconSolusi/maximazeIcon";
import StarIcon from "../iconSolusi/starIcon";

interface SolusiProps {
  text1: string;
  textDesc: string;
}

const BoxGroupTentangKami: React.FC<SolusiProps> = ({ text1, textDesc }) => (
  <div className={style.groupTentangkami}>
    <div className={style.frameTentangKami}>
      <div className={style.iconContainer}>
        {text1 === "Creating" ? (
          <StarIcon />
        ) : text1 === "Improving" ? (
          <ChartIcon />
        ) : text1 === "Expanding" ? (
          <MaximazeIcon />
        ) : text1 === "Building" ? (
          <ShieldIcon />
        ) : text1 === "Giving" ? (
          <LikeIcon />
        ) : null}
      </div>
      <p className={style.textWrapperFirst}>{text1}</p>
      <p className={style.textWrapperSecond}>{textDesc}</p>
    </div>
  </div>
);

export default BoxGroupTentangKami;
