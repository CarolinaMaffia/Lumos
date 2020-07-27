import React from 'react';
import './Home.scss';
import homeImg from '../../utils/svg/home.svg';
import { RiQuillPenLine } from 'react-icons/ri';

const Home = () => {
    return <div className="home-container">
            <div className="header">
                <div className="logo-container">
                    <h2>
                         <RiQuillPenLine />
                    </h2>
                </div>
            </div>
            <div className="welcome-container">
                <img src={homeImg} alt='Welcome to Lumos' className="home-img" />
            </div>
    </div>
};

export default Home;