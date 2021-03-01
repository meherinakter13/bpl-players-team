import React from 'react';
import logo from '../../images/logo.jpg';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div>
                <img src={logo} alt=""/>
            </div>
            <div>
                <h1> Bangladesh Premier League: BPL PLAYER AUCTION 2021 </h1>
            </div>
        </div>
    );
};

export default Header;