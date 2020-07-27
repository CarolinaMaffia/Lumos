import React from 'react';
import './Home.scss';
import homeImg from '../../utils/svg/home.svg';

const Home = () => {
    return <div className="home-container">
            <div className="header">
                <div className="logo-container">
                    <h3>
                        Lumos
                    </h3>
                </div>
            </div>
            <div className="welcome-container">
                <img src={homeImg} alt='Welcome to Lumos' className="home-img" />
            </div>
    </div>
};

export default Home;