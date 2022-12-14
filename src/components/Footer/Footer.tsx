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
import {links} from '../../consts/links';


const Footer = () => {
    return (
        <footer className={"container" + " " + style.footer}>
            <div className={style.inner_footer}>
                <div>
                    <img src={logoFooter} alt="logo_footer"/>
                </div>
                <div className={style.text_block}>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/contacts">Contact</a></li>
                        <li><a href="/faq">FAQ</a></li>
                        <li><a href="/terms_use">Terms of Use</a></li>
                    </ul>
                    <div className={style.link_block}>
                        <a href="#" className={style.link_block__link_item}>
                            <img src={fb} alt="fb"/>
                        </a>

                        <a target="_blank" href={links.instagram} className={style.link_block__link_item}>
                            <img src={ig} alt="ig"/>
                        </a>

                        <a target="_blank" href={links.twitter} className={style.link_block__link_item}>
                            <img src={tw} alt="tw"/>
                        </a>

                        <a href='#' className={style.link_block__link_item}>
                            <img src={li} alt="li"/>
                        </a>

                        <a href="#" className={style.link_block__link_item}>
                            <img src={rr} alt="li"/>
                        </a>

                        <a target="_blank" href={links.ds} className={style.link_block__link_item}>
                            <img src={ds} alt="li"/>
                        </a>

                        <a target="_blank" href={links.tg} className={style.link_block__link_item}>
                            <img src={tg} alt="tg"/>
                        </a>

                        <a target="_blank" href={links.yt} className={style.link_block__link_item}>
                            <img src={yt} alt="yt"/>
                        </a>
                    </div>
                    <p className={style.lic_text}><a className={style.link}
                                                     href="mailto:info@dionysus.com">info@dionysus.com</a></p>
                    <p className={style.lic_text}>?? 2022 Dionysus Pool, Inc. All rights reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;