// A single header component that will appear on multiple pages
import React from 'react';
import Avatar from '../assets/dionAvatar.jpg';

function Header() {
    return (
        <header>
            <h1 id="headerName">Dion Baskara</h1>
            <img id="avatar" src={Avatar} alt="avatar of a cat, sketched by Dion Baskara"/>
        </header>  
    );
}

export default Header;