import React from "react";
import DefaultLayout from "@/components/DefautLayout";
import style from "./landingPage.module.css";
import femaledoc from "../public/LandingPage/Female_Doctor.png";
import { Frame } from "@/components/sectionOne";
import SectionEmail from "./../components/SectionEmail/sectionEmail";
import BoxGroupRight from "./../components/SectionBoxGroup/boxGroupRight";
import BoxGroupLeft from "./../components/SectionBoxGroup/boxGroupLeft";
import LikeShapesIcon from "@/components/iconSolusi/likeShapes";
import ProfileIcon from "@/components/iconSolusi/profileIcon";
import FolderIcon from "@/components/iconSolusi/folder";
import dashboardLeft from "../public/DashboardLeft.png";
import kasirRight from "../public/kasirRight.png";
const LandingPage = () => {
  const sectionTwo = () => {
    return (
      <div className={style.boxSectionTwo}>
          <div className={style.sectionTwoMain}>
            <div>
              <img className={style.imgStyle} src={femaledoc.src} alt="" />
            </div>

            <div className={style.serviceMain}>
              <div className={style.servicePharmacin}>
                <p>Kenapa Pharmacin?</p>
              </div>

              <div className={style.middleSectionTwo}>
                <p>Kami menyediakan kebutuhan dalam mengelola klinik </p>
              </div>

              <div className={style.middleSectionUnderTwo}>
                <p>
                  Pharmacin hadir sebagai solusi dalam memenuhi setiap kebutuhan
                  dalam mengelola sumber daya dan pelayanan sebuah klinik
                </p>
              </div>

              <div className={style.listFitur}>
                <div className={style.listFiturItem}>
                  <LikeShapesIcon></LikeShapesIcon>
                  <p>Rekam medis elektronik yang sesuai standar</p>
                </div>
                <div className={style.listFiturItem}>
                  <ProfileIcon></ProfileIcon>
                  <p>Sistem antrian dan perawatan yang sistematis</p>
                </div>
                <div className={style.listFiturItem}>
                  <FolderIcon></FolderIcon>
                  <p>Pendataan stok obat yang terintegrasi</p>
                </div>
              </div>
            </div>
          </div>
      </div>
     
      
    );
  };

  const sectionThree = () => {
    return (
      <div className={style.boxSectionThree}>
        <div className={style.frameSectionThree}>
          <div className={style.textWrapperSolusi}>
            <p>Solusi Kami</p>
          </div>

          <div className={style.textWrapperSecond}>
            <p>
              Kami mengembangkan sistem pelayanan manajemen kesehatan yang
              dirancang untuk membantu para profesional
            </p>
          </div>

          <div className={style.textWrapperThird}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Mollitia, amet. Dolorem tempora porro quisquam dignissimos quam,
              minus adipisci laudantium fugiat, vero sit illo dolorum deleniti
              ducimus! Amet illo quia officiis.
            </p>
          </div>
        </div>
      </div>
    );
  };

  const combineSection = () => {
    return (
      <div className={style.Combine}>
        <Frame></Frame>
        {sectionTwo()}
        {sectionThree()}
        <BoxGroupRight
          imgSrc={kasirRight.src}
          text1="Proses Pembayaran di Kasir Menjadi Lebih Cepat, Mudah, dan Akurat"
          text2="Membantu meningkatkan efisiensi dan efektivitas proses pembayaran, hingga automasi mencatat semua transaksi keuangan, sehingga memudahkan proses audit dan rekonsiliasi."
        ></BoxGroupRight>
        <BoxGroupLeft
          imgstrg={dashboardLeft.src}
          text1="Tingkatkan kualitas perawatan dengan Rekam Medis Elektronik"
          text2="Kami menyediakan kebutuhan rekam medis sesuai dengan Kementrian Kesehatan RI (Permenkes N0.24/2022 tentang Rekam Medis Elektronik)"
          point1="Memudahkan akses data pasien"
          point2="Memperkuat keamanan data"
          point3="Memperkuat keamanan data"
        ></BoxGroupLeft>
        <BoxGroupRight
          imgSrc={kasirRight.src}
          text1="Kelola Obat Klinik Anda dengan Mudah dan Efisien"
          text2="Memudahkan pencatatan stok obat, melacak tanggal kadaluarsa atau stok menipis, hingga melakukan tindakan stop opname."
        ></BoxGroupRight>
        <SectionEmail></SectionEmail>
      </div>
    );
  };

  return (
    <div>
      <title>Pharmacin</title>
      <DefaultLayout>{combineSection()}</DefaultLayout>
    </div>
  );
};

export default LandingPage;
