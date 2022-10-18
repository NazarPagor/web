import React from 'react';
import style from './Navbar.module.scss';
import '../../App.css';
import PrimaryButton from "../Buttons/PrimaryButton";
import logo from "../../images/logo.svg";
import {navbarConsts} from "../../consts/navbar-consts";


const Navbar = () => {
    return (
        <nav className={style.navbar}>
            <div>
                <img src={logo} alt="logo_nav"/>
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
    );
};

export default Navbar;