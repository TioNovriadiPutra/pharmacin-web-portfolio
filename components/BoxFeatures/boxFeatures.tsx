import React from 'react';
import style from './features.module.css';
import AdmisiIcon from '../iconFeatures/iconAdmisi';
import AkutansiIcon from '../iconFeatures/iconAkutansi';
import AntrianIcon from '../iconFeatures/iconAntrian';
import ApotekIcon from '../iconFeatures/iconApotek';
import BukuBesarIcon from '../iconFeatures/iconBukuBesar';
import InventarisIcon from '../iconFeatures/iconInventaris';
import KasirIcon from '../iconFeatures/iconKasir';
import PembelianIcon from '../iconFeatures/iconPembelian';
import RawatJalanIcon from '../iconFeatures/iconRawatJalan';
import RekamMedisIcon from '../iconFeatures/iconRekamMedis';

interface FeaturesProps {
    textFeatures? : string,
    textDescription? : string;
}

const BoxFeaturesComponent: React.FC<FeaturesProps> = ({textFeatures,textDescription}) => {

    return (
        <div className={style.box}>
            <div>
                {textFeatures === "Admisi" ?  (
                <AdmisiIcon />
                ) : textFeatures === "Akutansi" ? (
                    <AkutansiIcon /> 
                ) : textFeatures === "Antrian" ? (
                    <AntrianIcon />
                ) : textFeatures === "Apotek" ? (
                    <ApotekIcon />
                ) : textFeatures === "Buku Besar" ? (
                    <BukuBesarIcon />
                ) : textFeatures === "Inventaris" ? (
                    <InventarisIcon />
                ) : textFeatures === "Kasir" ? (
                    <KasirIcon />
                ) : textFeatures === "Pembelian" ? (
                    <PembelianIcon />
                ) : textFeatures === "Rawat Jalan" ? (
                    <RawatJalanIcon />
                ) : textFeatures === "Rekam Medis" ? (
                    <RekamMedisIcon />
                ) : null}
            </div>
            <p className={style.textWrapper}>{textFeatures}</p>
            <p className={style.textWrapperSecond}>{textDescription}</p>
        </div>
    );
};

export default BoxFeaturesComponent;    