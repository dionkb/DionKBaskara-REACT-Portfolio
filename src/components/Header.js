// A single header component that will appear on multiple pages
import React from 'react';
import Avatar from '../assets/dionAvatar.jpg';

function Header() {
    return (
        <header>
            <img id="avatar" src={Avatar} alt="avatar of a cat, sketched by Dion Baskara"/>
            <h1 id="headerName">DION BASKARA</h1>
        </header>  
    );
}

export default Header;