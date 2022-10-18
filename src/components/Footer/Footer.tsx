import React from 'react';
import style from "./Footer.module.scss";
import logoFooter from "../../images/team/logo_footer.svg";
import fb from "../../images/social-icons/fb.svg";
import ig from "../../images/social-icons/ig.svg";
import tw from "../../images/social-icons/tw.svg";
import li from "../../images/social-icons/li.svg";
import rr from "../../images/social-icons/rr.svg";
import ds from "../../images/social-icons/ds.svg";
import tg from "../../images/social-icons/tg.svg";
import yt from "../../images/social-icons/yt.svg";


const Footer = () => {
    return (
        <footer className={"container" + " " + style.footer}>
            <div className={style.inner_footer}>
                <div>
                    <img src={logoFooter} alt="logo_footer"/>
                </div>
                <div className={style.text_block}>
                    <ul>
                        <li><a href="/">HOME</a></li>
                        <li><a href="/">Contact</a></li>
                        <li><a href="/">FAQ</a></li>
                        <li><a href="/">Terms of Use</a></li>
                    </ul>


                    <div className={style.link_block}>
                        <div className={style.link_block__link_item}>
                            <img src={fb} alt="fb"/>
                        </div>

                        <div className={style.link_block__link_item}>
                            <img src={ig} alt="ig"/>
                        </div>

                        <div className={style.link_block__link_item}>
                            <img src={tw} alt="tw"/>
                        </div>

                        <div className={style.link_block__link_item}>
                            <img src={li} alt="li"/>
                        </div>

                        <div className={style.link_block__link_item}>
                            <img src={rr} alt="li"/>
                        </div>

                        <div className={style.link_block__link_item}>
                            <img src={ds} alt="li"/>
                        </div>

                        <div className={style.link_block__link_item}>
                            <img src={tg} alt="li"/>
                        </div>

                        <div className={style.link_block__link_item}>
                            <img src={yt} alt="li"/>
                        </div>
                    </div>
                    <p className={style.lic_text}>info@dionysus.com</p>
                    <p className={style.lic_text}>© 2021 Dionysus Pool, Inc. All rights reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;