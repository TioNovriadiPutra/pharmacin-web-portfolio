import React from "react";
import DefaultLayout from "@/components/DefautLayout";
import style from "./solusi.module.css";
import BoxGroupRight from "@/components/SectionBoxGroup/boxGroupRight";
import BoxGroupLeft from "@/components/SectionBoxGroup/boxGroupLeft";
import FeaturesSectionComponent from "@/components/BoxFeatures/featuresSection";
import dashboard from "@/public/Dashboard.png";
import kasirSolusi from "@/public/KasirSolusi.png";
import SectionEmail from "@/components/SectionEmail/sectionEmail";
import SectionOneSolusi from "@/components/frameSectionOneSolusi/sectionOne";

const SolusiPage = () => {
  const Section2 = () => {
    return (
      <div className={style.boxSectionTwo}>
        <div className={style.frameSectionTwoFirst}>
          <p>Modul yang Dirancang Untuk Meningkatkan Efisiensi Pelayanan</p>
        </div>
        <div className={style.frameSectionTwoSecond}>
          <FeaturesSectionComponent />
        </div>
      </div>
    );
  };

  const CombineSection = () => {
    let text2Right = (
      <ul>
        <li>
          Simpan semua informasi pasien di satu tempat, mudah diakses oleh staf
          yang berwenang
        </li>
        <li>
          Catat riwayat kesehatan pasien secara digital, membantu dokter dalam
          memberikan diagnosis dan pengobatan yang tepat
        </li>
      </ul>
    );

    let text2Left = (
      <ul>
        <li>
          {" "}
          Penagihan dapat dilakukan secara otomatis, sehingga menghemat waktu
          dan tenaga
        </li>
        <li>
          Meningkatkan akurasi pencatatan data, sehingga meminimalisir kesalahan
        </li>
      </ul>
    );

    return (
      <div>
        <SectionOneSolusi />
        <BoxGroupRight
          imgSrc={dashboard.src}
          text1="Memberikan akses informasi mudah dan cepat"
          text2={text2Right}
        />
        <BoxGroupLeft
          imgstrg={kasirSolusi.src}
          text1="Tingkatkan kualitas perawatan dengan Rekam Medis Elektronik"
          text2={text2Left}
        />
        <Section2 />
        <SectionEmail />
      </div>
    );
  };

  return (
    <div>
      <title>Pharmacin</title>
      <DefaultLayout>
        <CombineSection />
      </DefaultLayout>
    </div>
  );
};

export default SolusiPage;
