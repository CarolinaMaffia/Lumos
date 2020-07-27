import React from 'react';
import './Home.scss';
import homeImg from '../../utils/svg/home.svg';
import quill from '../../utils/svg/quill.svg';

const Home = () => {
    return <div className="home-container">
            <div className="header">
                <div className="logo-container">
                    <p> Esto sera un logo </p>
                    <img src={quill} alt="Quill logo"  className="logo"/>
                </div>
            </div>
            <div className="welcome-container">
                <div className="welcome-text">
                    <h1>Lorem ipsum dolor sit amet </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <img src={homeImg} alt='Welcome to Lumos' className="home-img" />
            </div>

            <div className="start-container">
                <button>
                    Get started
                </button>
            </div>
    </div>
};

export default Home;