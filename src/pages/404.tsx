import React from 'react';
import style from "../styles/NotFoundPage.module.scss";
import Navbar from "../components/Navbar/Navbar";
import icon from "../images/404.svg"
import PrimaryButton from "../components/Buttons/PrimaryButton";

const NotFoundPage = () => {
    return (
        <div className={style.screen}>
            <Navbar/>
            <div className={style.content}>
                <img style={{maxHeight: "380px", maxWidth: "280px"}} src={icon} alt="404_icon"/>
                <h1 style={{color: "#910420", marginTop: "50px"}}>THE GLASS BROKE :(</h1>
                <h3>PAGE NOT FOUND</h3>
                <div style={{marginTop: "56px"}}>
                    <PrimaryButton>BACK TO HOME</PrimaryButton>
                </div>
            </div>
        </div>

    );
};

export default NotFoundPage;