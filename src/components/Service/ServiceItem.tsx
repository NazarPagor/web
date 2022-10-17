import React from 'react';
import style from "./Service.module.scss";

interface ServicesItemProps {
    title: string,
    text: string,
    icon: string,
}


const ServiceItem = ({title, text, icon}: ServicesItemProps) => {
    return (
        <div className={style.serviceItem_block}>
            <div className={style.icon_block}>
                <img src={icon} alt="icon"/>
            </div>
            <div className={style.text_block}>
                <h3>{title}</h3>
                <p>
                    {text}
                </p>
            </div>
        </div>
    );
};

export default ServiceItem;