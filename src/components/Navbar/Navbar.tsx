import React, {useState} from 'react';
import style from './Navbar.module.scss';
import '../../App.css';
import PrimaryButton from "../Buttons/PrimaryButton";
import logo from "../../images/logo.svg";
import {navbarConsts} from "../../consts/navbar-consts";
import open_button from "./open_button.svg";
import close_button from "./close.svg";
import logo_mobile_menu from "./logo_mobile_menu.svg";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);


    const openMenu = () => {
        setIsOpen(!isOpen);
    }


    return (
        <>
            <nav className={style.navbar}>
                <div>
                    <a href="/"> <img src={logo} alt="logo_nav"/></a>
                </div>
                <ul className={style.navbar__link_section}>
                    {navbarConsts.map((item, index) => (
                        <li key={index}>
                            <a href={item.link}>{item.text.toUpperCase()}</a>
                        </li>
                    ))}
                    <li>
                        <PrimaryButton>
                            Connect Wallet
                        </PrimaryButton>
                    </li>
                </ul>
            </nav>
            <nav className={style.navbar__mobile_version}>
                <a href="/"> <img src={logo} alt="logo_nav"/></a>
                <img onClick={openMenu} src={open_button} alt="icon_open"/>
            </nav>
            {isOpen ?
                <div className={style.nav_link_part} style={{
                    animation: isOpen ? "showNav 1s ease" : "closeNav 1s ease",
                }}>
                    <img style={{
                        position: "absolute",
                        right: "20px"
                    }} onClick={openMenu} src={close_button} width={32} height={32} alt="icon_open"/>
                    <div className={style.content_block}>
                        <img width={93} height={130} src={logo_mobile_menu} alt="logo"/>
                        <ul>
                            <li><a href="/">HOME</a></li>
                            <li><a href="/#services_section">VALUES</a></li>
                            <li><a href="/#winepaper_section">WHITEPAPER</a></li>
                            <li><a href="/contacts">CONTACT</a></li>
                        </ul>
                        <div style={{
                            marginTop: "50px"
                        }}>
                            <PrimaryButton>CONNECT WALLET</PrimaryButton>
                        </div>
                    </div>
                </div> : null}

        </>
    );
};

export default Navbar;