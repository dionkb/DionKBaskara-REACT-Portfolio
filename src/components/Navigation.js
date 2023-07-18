//  A component that will be used multiple times in the header to conditionally render the different sections of my portfolio
import React from 'react';

function Navigation({ currentPage, changePageFunction }) {
    return (
        <ul id="navbarList">
            <li>
                <a href="#home" onClick={() => changePageFunction('Home')}
                className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                >
                <p id="navInitials">DB</p>
                </a>
            </li>
            <li className="nav-item">
                <a
                href="#aboutme"
                onClick={() => changePageFunction('AboutMe')}
                className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
                >
                About Me
                </a>
            </li>
            <li className="nav-item">
                <a
                href="#portfolio"
                onClick={() => changePageFunction('Portfolio')}
                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                Portfolio
                </a>
            </li>
            <li className="nav-item">
                <a
                href="#resume"
                onClick={() => changePageFunction('Resume')}
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                >
                Resume
                </a>
            </li>
            <li className="nav-item">
                <a
                href="#contactme"
                onClick={() => changePageFunction('ContactMe')}
                className={currentPage === 'ContactMe' ? 'nav-link active' : 'nav-link'}
                >
                Contact Me
                </a>
            </li>
        </ul>
    );
}

export default Navigation;