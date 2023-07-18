import React, { useState } from 'react';
import Navigation from './Navigation';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import ContactMe from './pages/ContactMe';

export default function MainPageHandler() {
    const [currentPage, setCurrentPage] = useState('AboutMe');

    const renderPage = () => {
        if (currentPage === 'Home') {
        return <Home />;
        }
        if (currentPage === 'AboutMe') {
        return <AboutMe />;
        }
        if (currentPage === 'Portfolio') {
        return <Portfolio />;
        }
        return <ContactMe />;
    };

    const changePageFunction = (page) => setCurrentPage(page);

    return (
        <div>
        <Navigation currentPage={currentPage} changePageFunction={changePageFunction} />
        {renderPage()}
        </div>
    );
}
