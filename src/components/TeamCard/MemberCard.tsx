import React from 'react';
import style from "./Member.module.scss";
import fb from "../../images/social-icons/fb.svg";
import ig from "../../images/social-icons/ig.svg";
import li from "../../images/social-icons/li.svg";
import tw from "../../images/social-icons/tw.svg";

interface ServicesItemProps {
    name?: string,
    role?: string,
    text?: string,
    icon?: string,
    social_links?: [],
}


const MemberCard = ({name, role, text, icon}: ServicesItemProps) => {
    return (
        <div className={style.member_card}>
            <div className={style.member_card__icon}>
                <img src={icon} alt="icon"/>
            </div>
            <h3>{name}</h3>
            <h4>{role}</h4>
            <p>{text}</p>
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
            </div>
        </div>
    );
};

export default MemberCard;