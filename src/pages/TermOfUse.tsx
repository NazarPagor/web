import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import style from "../styles/TermOfUse.module.scss";


const TermOfUse = () => {
    return (
        <>
            <div className={style.termOfUse__wrapper}>
                <Navbar/>
                <div className={style.contactUs__content}>
                    <h1><span style={{color: '#910420'}}>TERMS OF</span> USE</h1>
                    <div className={style.text_block}>
                        <h2>LOREM IPSUM</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus massa morbi turpis blandit ut
                            suspendisse. Ut pellentesque viverra auctor sit facilisis. Eget fames tellus lacus, in nulla
                            lacus ut laoreet phasellus. Malesuada et, in non, purus porttitor. Elit id feugiat lorem
                            mauris mattis nisl non. Pretium vulputate quis cras egestas sit. In posuere enim, tempor,
                            porttitor cursus orci. Felis aliquet nullam morbi diam egestas pretium. Odio lacinia in
                            semper nullam amet, commodo ullamcorper lacinia luctus. Hendrerit mi purus velit venenatis
                            nisl lobortis.

                            Gravida gravida aliquam odio venenatis id cursus leo tincidunt in. Aenean interdum elementum
                            cursus amet volutpat dictum mauris feugiat. Id ac et urna ut enim. Cum ac congue amet nulla
                            sit tortor at. Odio arcu amet amet, sit auctor nibh arcu posuere euismod. Sapien, diam urna,
                            elementum auctor bibendum ut diam. Gravida at bibendum nam curabitur ipsum pulvinar urna.
                            Ipsum commodo rutrum commodo quis arcu maecenas. Sit urna, lobortis eget pulvinar turpis.

                            Curabitur pharetra et pretium ut risus sagittis sed. Purus habitant in metus, tortor cursus
                            pulvinar vel. Risus leo vitae vitae morbi. Dignissim volutpat accumsan, in nulla elit id
                            neque in convallis. Non tempor accumsan sit est phasellus vel id nunc. Aliquet ut quam purus
                            nulla eu sapien amet vitae. Posuere morbi lacus, vel aliquet. Cursus vitae quis massa at
                            mauris, enim maecenas elementum. Velit sed condimentum sit cras adipiscing. Mauris, est
                            vestibulum, in purus ultrices hendrerit lobortis. At.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus massa morbi turpis blandit ut
                            suspendisse. Ut pellentesque viverra auctor sit facilisis. Eget fames tellus lacus, in nulla
                            lacus ut laoreet phasellus. Malesuada et, in non, purus porttitor. Elit id feugiat lorem
                            mauris mattis nisl non. Pretium vulputate quis cras egestas sit. In posuere enim, tempor,
                            porttitor cursus orci. Felis aliquet nullam morbi diam egestas pretium. Odio lacinia in
                            semper nullam amet, commodo ullamcorper lacinia luctus. Hendrerit mi purus velit venenatis
                            nisl lobortis.

                            Gravida gravida aliquam odio venenatis id cursus leo tincidunt in. Aenean interdum elementum
                            cursus amet volutpat dictum mauris feugiat. Id ac et urna ut enim. Cum ac congue amet nulla
                            sit tortor at. Odio arcu amet amet, sit auctor nibh arcu posuere euismod. Sapien, diam urna,
                            elementum auctor bibendum ut diam. Gravida at bibendum nam curabitur ipsum pulvinar urna.
                            Ipsum commodo rutrum commodo quis arcu maecenas. Sit urna, lobortis eget pulvinar turpis.

                            Curabitur pharetra et pretium ut risus sagittis sed. Purus habitant in metus, tortor cursus
                            pulvinar vel. Risus leo vitae vitae morbi. Dignissim volutpat accumsan, in nulla elit id
                            neque in convallis. Non tempor accumsan sit est phasellus vel id nunc. Aliquet ut quam purus
                            nulla eu sapien amet vitae. Posuere morbi lacus, vel aliquet. Cursus vitae quis massa at
                            mauris, enim maecenas elementum. Velit sed condimentum sit cras adipiscing. Mauris, est
                            vestibulum, in purus ultrices hendrerit lobortis. At.
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default TermOfUse;