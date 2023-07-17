// A single header component that will appear on multiple pages
import React, { useState } from 'react';
import catAvatar from '../assets/catSketch.jpg';

function Header() {
    return (
        <header>
            <img id="catAvatar" src={catAvatar} alt="avatar of a cat, sketched by Dion Baskara"/>
            <h1 id="headerName">DION BASKARA</h1>
        </header>  
    );
}

export default Header;