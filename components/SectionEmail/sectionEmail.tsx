import React from "react";
import style from "./sectionEmail.module.css";

const SectionEmail: React.FC = () => {
  return (
    <div className={style.boxLastSection}>
      <div className={style.frameLastSection}>
        <div className={style.overlapFirst}>
          <p className={style.textWrapperFirst}>
            Tanyakan kebutuhan Anda Dengan Kami
          </p>
          <p className={style.textWrapperSecond}>
            Untuk informasi lebih lanjut, anda dapat diskusikan kebutuhan anda
            dengan kami
          </p>
        </div>
        <div className={style.overlapForm}>
          <form className={style.formWrapper}>
            <div className={style.labelForm} >
              <label htmlFor="">Nama</label>
              <input
                type="text"
                className={style.inputForm}
                placeholder="John Doe"
              />
            </div>
            <div className={style.labelForm} >
              <label htmlFor="">Email</label>
              <input
                type="text"
                className={style.inputForm}
                placeholder="johndoe@gmail.com"
              />
            </div>
            <div className={style.labelForm} >
              <label htmlFor="">Nomor Telepon</label>
              <input
                type="text"
                className={style.inputForm}
                placeholder="+62 812 3456 7890"
              />
            </div>
            <button className={style.buttonForm}>Dapatkan Konsultasi</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SectionEmail;
