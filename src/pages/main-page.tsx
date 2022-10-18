import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import style from "../styles/MainPage.module.scss";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import ServiceItem from "../components/Service/ServiceItem";
import dappsIcon from '../images/services/dapps-icon.svg';
import cardanoIcon from '../images/services/cardano.svg';
import coins from '../images/services/coins.svg';
import Projects from "../components/Projects/Projects";
import MemberCard from "../components/TeamCard/MemberCard";
import miroIcon from "../images/team/Miro.png";
import Igor from "../images/team/Igor_eyesgolden.png";
import Matej from "../images/team/Matej.png";

import tesla from '../images/partners-icon/Tesla.svg';
import cardano from '../images/partners-icon/cardano.svg';
import ikea from '../images/partners-icon/ikea.svg';
import mers from '../images/partners-icon/mers.svg';
import nasa from '../images/partners-icon/nasa.svg';
import apple from '../images/partners-icon/apple.svg';

import winepapperBack from '../images/winepapper.png';
import Footer from "../components/Footer/Footer";


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

const project_mock_data = [
    {
        title: <h1><span style={{color: '#910420'}}>STAKING</span> POOL</h1>,
        text: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet convallis erat bibendum malesuada.
            Duis posuere eu feugiat ipsum eros. Urna dui imperdiet dictum libero a rhoncus. Lobortis neque, malesuada
            scelerisque dui aliquet non proin. Ut nullam ultricies in sit tempor vulputate. Nisl neque arcu pellentesque
            eget cras.</p>,
        button_text: 'STAKE NOW',
    },
    {
        title: <h1><span style={{color: '#910420'}}>KALY</span>X</h1>,
        text: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet convallis erat bibendum malesuada.
            Duis posuere eu feugiat ipsum eros. Urna dui imperdiet dictum libero a rhoncus. Lobortis neque, malesuada
            scelerisque dui aliquet non proin. Ut nullam ultricies in sit tempor vulputate. Nisl neque arcu pellentesque
            eget cras. Tortor sollicitudin vitae et integer eu, eu. Id sit blandit risus sit eleifend.</p>,
        button_text: 'TRY IT',
    },
    {
        title: <h1><span style={{color: '#910420'}}>COMMING</span> SOON</h1>,
        text: <p>You can <span style={{color: '#910420'}}>subscribe to our newsletter</span> and you will be notified
            when we launch our new projects</p>,
        button_text: 'SUBSCRIBE',
    },
]

const text_item_data = [
    {
        icon: miroIcon,
        role: 'Partner',
        name: 'Miro',
        text: 'Miro has been the brains behind the Dionysus operation in  areas of business, marketing and case modelling. He likes to design Web3 applications "above & beyond" and pledges to deliver the best experience to the Cardano community and to casual users. His market perception has been one of the integral competences in blockchain business integrations with the legacy world.',
    },
    {
        icon: Igor,
        role: 'Partner',
        name: 'Igor',
        text: 'Igor is the technical thought leader of the Dionysus ecosystem. With his expertise, he takes care of infrastructure, development, security and operations. His affinity for computer science lays another foundation for the future of Dionysus, and by extension, the future of Cardano. Igor is a natural oportunity-connector. He brings new ideas, people and implementation approaches to the same table.'
    },
    {
        icon: Matej,
        role: 'Partner',
        name: 'Matej Perić',
        text: 'Matej is the fresh spark of the team Dionysus. Every brush stroke, colour mix, animation and web element, as well as visual workflow transitions, rise from the ink of his pen. Team is boosted by his significant chip-in and continues to build on his great experience form the competitive gaming, graphical design and hazard business campaigns on social media.',
    },
]

const partners_icon = [
    {icon: tesla},
    {icon: cardano},
    {icon: ikea},
    {icon: mers},
    {icon: nasa},
    {icon: apple},
]


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
            <div className={style.otherSection_wrapper}>
                <div className={style.projectServices}>
                    <div className={style.projectServices__header}>
                        <h1>Projects</h1>
                        <p className={style.header_description}>
                            <span style={{color: '#910420'}}>Dionysus pool</span> is still in development phase and
                            there are more <br/>
                            things coming to our platform.
                        </p>
                    </div>
                    <div className={style.projectServices__project_services}>
                        {project_mock_data.map((item, index) => (
                            <div key={index} style={{marginTop: index * 100}}>
                                <Projects title={item.title} text={item.text} button_text={item.button_text}/>
                            </div>
                        ))}
                    </div>

                </div>
                <div className={style.team_section}>
                    <div className={style.team_section__header}>
                        <h1>TEAM</h1>
                        <p className={style.header_description}>
                            Our Team delivers immersive experience from dApps and <br/> honours the validator services
                            with
                            stake pool <span style={{color: '#910420'}}>DIO</span>. Participants <br/> in Cardano
                            ecosystem,
                            as well as our dear delegators are the <br/>
                            first priority in every action from our team.
                        </p>
                    </div>
                    <div className={style.team_section__team_block}>
                        {text_item_data.map((item, index) => (
                            <div key={index}>
                                <MemberCard name={item.name} role={item.role} text={item.text} icon={item.icon}/>
                            </div>
                        ))}
                    </div>
                    <div className={style.partners_block}>
                        <div className={style.partners_block__header}>
                            <h1>PARTNERS</h1>
                        </div>
                        <div className={style.partners_icons}>
                            {partners_icon.map((icon, index) => (
                                <div key={index} className={style.partners_icons__icon}>
                                    <img src={icon.icon} alt="icon_partner"/>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '200px'
                    }}>
                        <div className={style.winepaper_block}>
                            <div className={style.text_block}>
                                <div>
                                    <h1>WINEPAPER</h1>
                                </div>
                                <p>
                                    "There isn't so many better pleasures than using Dionysus dApps, while having a
                                    glass of good wine."
                                </p>

                                <p>
                                    Honest Access* to our services is permission-less - we don't ban any wallet.
                                    Non-custodian services with on-chain evaluation and oracles - all those are our
                                    key
                                    ingredinces in dApp delivery.

                                </p>
                                <p>
                                    We've reinvented a micro-market for our users. Get our Winepaper for more
                                    information.
                                </p>
                                <PrimaryButton backgroundColor={"white"}>Download</PrimaryButton>
                            </div>
                            <div className={style.photo}>
                                <img src={winepapperBack} alt="backgound"/>
                            </div>
                        </div>
                    </div>

                </div>

                <div className={style.connect_section}>
                    <div className={style.connect_section_text}>
                        <h1>SIGN UP FOR NEWSLETTER</h1>
                        <p>Stay updated!</p>
                    </div>
                    <div className={style.input_block}>
                        <input type="email" placeholder="Your Email"/>
                        <PrimaryButton isInputButton>SIGN UP</PrimaryButton>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default MainPage;