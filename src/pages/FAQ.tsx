import React from 'react';
import style from "../styles/Faq.module.scss";
import Navbar from "../components/Navbar/Navbar";
import Accordion from '../components/Accordion/Accordion';
import Footer from "../components/Footer/Footer";
import PrimaryButton from "../components/Buttons/PrimaryButton";


const accordionData = [
    {
        title: 'WHAT IS DIONYSUS?',
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi dui tortor elit vel egestas ac id. Pellentesque risus dolor ut lacus ultrices lacus, elit venenatis eget. Egestas consequat netus urna, fames habitant congue faucibus molestie leo. Erat tristique risus erat lobortis elit mauris metus. Vestibulum.`
    },
    {
        title: 'WHAT IS DIONYSUS?',
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi dui tortor elit vel egestas ac id. Pellentesque risus dolor ut lacus ultrices lacus, elit venenatis eget. Egestas consequat netus urna, fames habitant congue faucibus molestie leo. Erat tristique risus erat lobortis elit mauris metus. Vestibulum.`
    },
    {
        title: 'WHAT IS DIONYSUS?',
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi dui tortor elit vel egestas ac id. Pellentesque risus dolor ut lacus ultrices lacus, elit venenatis eget. Egestas consequat netus urna, fames habitant congue faucibus molestie leo. Erat tristique risus erat lobortis elit mauris metus. Vestibulum.`
    }
];


const Faq = () => {
    return (
        <>
            <div className={style.faq__wrapper}>
                <Navbar/>
                <div className={style.faq__content}>
                    <h1><span style={{color: "#910420"}}>FREQUENT</span> ASKED QUESTIONS</h1>
                    <div className={style.accordion}>
                        {accordionData.map(({title, content}) => (
                            <Accordion title={title} content={content}/>
                        ))}
                    </div>
                </div>
                <a href="/" style={{
                    width: "100%",
                    marginTop: "100px",
                    textDecoration: "none",
                    display: "flex",
                    justifyContent: "center"
                }}>
                    <PrimaryButton>BACK TO HOME</PrimaryButton>
                </a>
            </div>
            <Footer/>
        </>
    );
};

export default Faq;