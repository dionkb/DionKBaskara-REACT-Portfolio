//  A component that will be used multiple times in the header to
// conditionally render the different sections of my portfolio
import React, { useState } from 'react';

function Navigation() {
    return (
        <nav class="navbar navbar-expand-lg">
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-item nav-link" href="#">Portfolio</a>
                    <a class="nav-item nav-link" href="#">About Me</a>
                    <a class="nav-item nav-link" href="#">Résumé</a>
                    <a class="nav-item nav-link" href="#">Contact</a>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;