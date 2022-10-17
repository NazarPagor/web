import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import style from "../styles/MainSection.module.scss";
import PrimaryButton from "../components/Buttons/PrimaryButton";

const MainPage = () => {
    return (
        <div className={style.mainSection__wrapper}>
            <Navbar/>
            <div className={style.mainSection}>
                <h1>
                    <span style={{color: "#910420"}}>DIONYSUS</span>
                    <br/>
                    dApps & Pool
                    <br/>
                    on Cardano
                </h1>
                <p>
                    Dionysus pool has been operational since December 20th, 2021. <br/>
                    We build dApps for the community and value our delegators for being with us.
                </p>
                <PrimaryButton>STAKE NOW</PrimaryButton>
            </div>

        </div>
    );
};

export default MainPage;