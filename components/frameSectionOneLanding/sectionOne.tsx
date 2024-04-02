import React from "react";
import styles from "./sectionOne.module.css";
import kasirImg from "@/public/kasir.png";

export const FrameSectionOneLanding = (): JSX.Element => {
  return (
    <div className={styles.frame}>
      <div className={styles.overlap}>
        <div className={styles.ellipse}></div>
        <div className={styles.group}>
          <p className={styles.div}>
            Transformasi Pemberian Layanan Kesehatan: Rasakan Keunggulan Tanpa
            Batas
          </p>
          <p className={styles.textWrapper}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            mollis varius finibus. Duis faucibus consectetur dictum.
          </p>
          <div className={styles.divWrapper}>
            <div className={styles.textWrapperSecond}>Mulai Sekarang</div>
          </div>
        </div>
        <div className={styles.groupWrapper}>
          <div className={styles.dashboardKasirWrapper}>
            <img
              className={styles.dashboardKasir}
              alt="Dashboard kasir"
              src={kasirImg.src}
            />
          </div>
        </div>
        <div className={styles.gradient} />
      </div>
    </div>
  );
};
