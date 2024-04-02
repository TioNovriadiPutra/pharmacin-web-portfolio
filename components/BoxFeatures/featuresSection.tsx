import React from "react";
import style from "./features.module.css";
import BoxFeaturesComponent from "./boxFeatures";

const FeaturesSectionComponent: React.FC = () => {
  return (
    <div className={style.boxSectionFeatures}>
      <div className={style.frameFeatures}>
        <BoxFeaturesComponent
          textFeatures="Admisi"
          textDescription="Kelola pendaftaran dan antrian pasien"
        />
        <BoxFeaturesComponent
          textFeatures="Kasir"
          textDescription="Mengelola pembayaran pasien dan pembelian obat"
        />
        <BoxFeaturesComponent
          textFeatures="Rawat Jalan"
          textDescription="Pemeriksaan pasien yang dilakukan dokter"
        />
      </div>

      <div className={style.frameFeatures}>
        <BoxFeaturesComponent
          textFeatures="Rekam Medis"
          textDescription="Hasil pemeriksaan fisik, diagnosis, rencana perawatan"
        />
        <BoxFeaturesComponent
          textFeatures="Antrian"
          textDescription="Otomasi pengelolaan antrian pasien"
        />
        <BoxFeaturesComponent
          textFeatures="Apotek"
          textDescription="Penyerahan obat yang tersistemasi"
        />
      </div>

      <div className={style.frameFeatures}>
        <BoxFeaturesComponent
          textFeatures="Buku Besar"
          textDescription="Kelola pendataan penjualan ataupun pembelian pada klinik"
        />
        <BoxFeaturesComponent
          textFeatures="Inventaris"
          textDescription="Kelola barang masuk ataupun keluar"
        />
        <BoxFeaturesComponent
          textFeatures="Pembelian"
          textDescription="Atur pendataan barang masuk secara efektif"
        />
      </div>

      <div className={style.frameFeaturesLast}>
        <BoxFeaturesComponent
          textFeatures="Akutansi"
          textDescription="Kelola keuangan secara lebih transparan, akuntabel, dan efisien"
        />
        <BoxFeaturesComponent />
        <BoxFeaturesComponent />
      </div>
    </div>
  );
};

export default FeaturesSectionComponent;
