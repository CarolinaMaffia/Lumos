import React from 'react';
import './Write.scss';

import Logo from '../../utils/svg/quill.svg';

const Write = () => {
    return <div className="write">
        <header className="header">
            <div className="logo">
                <img src={Logo} alt="Lumos logo" className="logo-svg"/>
            </div>
            <div className="title-container">
                <p className="title">Let's start writing</p>
            </div>
        </header>
        <div className="write-content">
        </div>
    </div>
};

export default Write;