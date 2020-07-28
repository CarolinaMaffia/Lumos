import React from 'react';
import './Write.scss';
// 
import Logo from '../../utils/svg/quill.svg';
import CreatePost from '../../components/createPost';

const Write = () => {
    return <div className="write">
        <header className="header">
            <div className="logo">
                {/* <img src={Logo} alt="Lumos logo" className="logo-svg"/> */}
            </div>
            <div className="title-container">
                <p className="title">Lorem ipsum dolor sit amet</p>
            </div>
        </header>
        <div className="write-content">
            <CreatePost />
        </div>
    </div>
};

export default Write;