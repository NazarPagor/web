import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import style from "../styles/MainPage.module.scss";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import ServiceItem from "../components/Service/ServiceItem";
import dappsIcon from '../images/services/dapps-icon.svg';
import cardanoIcon from '../images/services/cardano.svg';
import coins from '../images/services/coins.svg';


const services_item_data = [
    {
        icon: dappsIcon,
        title: 'DAPPS',
        text: 'We are committed to build new dApps for all members of the Cardano eco-system. ADA holders have chance to interact, transact, plan, participate and profit from using our dApps. Although we have 2 main projects in the pipeline, we are in the early stage of making the use of decentralised service and smart contract available for the short range of use-cases and professions.'
    },
    {
        icon: cardanoIcon,
        title: 'POOL OPERATIONS',
        text: 'Our bare-metal infrastructure and corporate grade security delivers important piece to the set of decentralised and secure blockchain operations. Stake in our pool is transparent: no locks of assets, no vesting, no 3rd grade tokens with vanishing value by the time.'
    },
    {
        icon: coins,
        title: 'STAKING BENEFITS',
        text: 'DIO delegators are served with discounts. Their staking handle and loyalty tokens give access to special dApps features, NFT drops and always guaranteed direct access to our product team. Dionysus story starts with staking and develops to the value that our delegators receive. After finalising the stage of Managed Rewards Distribution, DIO pool serves as a connector between ADA holders of similar interest in building their portfolio of native assets, stable coins and NFTs. We are here for you for every step in your journey.'
    },
]


console.log(typeof dappsIcon)


const MainPage = () => {
    return (
        <div className={style.mainSection__wrapper}>
            <Navbar/>
            <div className={style.mainSection}>
                <h1>
                    <span style={{color: "#910420"}}>DIONYSUS</span>
                    <br/>
                    dApps & Pool
                    <br/>
                    on Cardano
                </h1>
                <p>
                    Dionysus pool has been operational since December 20th, 2021. <br/>
                    We build dApps for the community and value our delegators for being with us.
                </p>
                <PrimaryButton>STAKE NOW</PrimaryButton>
            </div>
            <div className={style.servicesSection}>
                <div className={style.servicesSection__header}>
                    <h1>Our <span style={{color: "#910420"}}>Service</span></h1>
                    <p className={style.header_description}>
                        Dionysus pool is the place where Block Production meets with <br/>value for Cardano participants
                        from
                        the non-custodian, safe <br/> and transparent dApps services.
                    </p>
                </div>
                <div className={style.servicesSection__itemBlock}>
                    {services_item_data.map((item, index) => (
                        <ServiceItem text={item.text} title={item.title} icon={item.icon} key={index}/>
                    ))}
                </div>
            </div>
            <div style={{
                backgroundColor: '#1D1D1D',
                display: "flex"
            }}>
                <div className={style.bottom_wave}/>
                <div className={style.bottom_wave} style={{transform: 'rotateY(180deg)'}}/>
            </div>
        </div>
    );
};

export default MainPage;