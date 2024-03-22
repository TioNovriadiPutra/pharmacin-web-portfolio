import React from 'react';
import style from './features.module.css';
import BoxFeaturesComponent from './boxFeatures';

const FeaturesSectionComponent: React.FC = () => {

    return (
        <div className={style.boxSectionFeatures}>
            <div className={style.frameFeatures}>
                <BoxFeaturesComponent textFeatures="Admisi" textDescription="Admisi is a platform that helps you to manage your admission process." />
                <BoxFeaturesComponent textFeatures="Kasir" textDescription="Admisi is a platform that helps you to manage your admission process." />
                <BoxFeaturesComponent textFeatures="Rawat Jalan" textDescription="Admisi is a platform that helps you to manage your admission process." />
            </div>

            <div className={style.frameFeatures}>
                <BoxFeaturesComponent textFeatures="Rekam Medis" textDescription="Admisi is a platform that helps you to manage your admission process." />
                <BoxFeaturesComponent textFeatures="Antrian" textDescription="Admisi is a platform that helps you to manage your admission process." />
                <BoxFeaturesComponent textFeatures="Apotek" textDescription="Admisi is a platform that helps you to manage your admission process." />
            </div>

            <div className={style.frameFeatures}>
                <BoxFeaturesComponent textFeatures="Buku Besar" textDescription="Admisi is a platform that helps you to manage your admission process." />
                <BoxFeaturesComponent textFeatures="Inventaris" textDescription="Admisi is a platform that helps you to manage your admission process." />
                <BoxFeaturesComponent textFeatures="Pembelian" textDescription="Admisi is a platform that helps you to manage your admission process." />
            </div>

            <div className={style.frameFeaturesLast}>
                <BoxFeaturesComponent textFeatures="Akutansi" textDescription="Admisi is a platform that helps you to manage your admission process." />
                <BoxFeaturesComponent />
                <BoxFeaturesComponent />
            </div>
            
        </div>
    );
};

export default FeaturesSectionComponent;