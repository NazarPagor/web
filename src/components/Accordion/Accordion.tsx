import React, {useState} from 'react';
import style from "../../styles/Faq.module.scss";
interface AccordionProps {
    title: string,
    content: string,

}


const Accordion = ({title, content}: AccordionProps) => {

    const [isActive, setIsActive] = useState(false);
    return (
        <div className={style.accordion_item}>
            <div className={style.accordion_title} onClick={() => setIsActive(!isActive)}>
                <div>{title}</div>
                <div style={{
                    cursor:"pointer"
                }}>{isActive ? '-' : '+'}</div>
            </div>
            {isActive && <div className={style.accordion_content}>{content}</div>}
        </div>
    );
};

export default Accordion;