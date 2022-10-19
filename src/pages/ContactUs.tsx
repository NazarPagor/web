import React from 'react';
import style from '../styles/ContactUs.module.scss';
import Navbar from "../components/Navbar/Navbar";
import {useFormik} from 'formik';
import FormInput, {FormTextarea} from "../components/Inputs/FormInput";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import Footer from "../components/Footer/Footer";

const From = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            message: '',
        },
        onSubmit: () => {
        },
    });
    return (
        <form onSubmit={formik.handleSubmit} className={style.form}>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "77px"
            }}>
                <FormInput
                    id="firstName"
                    name="firstName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                    label={"First Name"}
                    htmlFor={"firstName"}
                />
                <FormInput
                    id="lastName"
                    name="lastName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                    label={"Last Name"}
                    htmlFor={"lastName"}
                />
            </div>
            <FormInput
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                label={"Email Address"}
                htmlFor={"email"}
            />
            <FormTextarea id={"textarea"}
                          name={"textarea"}
                          type={"textarea"}
                          label={"Message"}
                          onChange={formik.handleChange}
                          value={formik.values.message}
                          htmlFor={"textarea"}
            />
            <div style={{
                width:"100%",
                display:"flex",
                justifyContent:'center',
                marginTop:"2    0px"
            }}>
                <PrimaryButton> SEND</PrimaryButton>
            </div>
        </form>
    )
        ;
}

const ContactUs = () => {
    return (
        <>
            <div className={style.contactUs__wrapper}>
                <Navbar/>
                <div className={style.contactUs__form}>

                    <h1><span style={{color: '#910420'}}>CONTACT</span> US</h1>
                    <From/>
                </div>
                <a className={style.backHome} href="/">
                    <PrimaryButton>BACK TO HOME</PrimaryButton>
                </a>
            </div>
            <Footer/>
        </>
    );
};

export default ContactUs;