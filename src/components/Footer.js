// A component that appears uniformly at the foot of each page.
import React, { useState } from 'react';

function Footer() {
    return (
        <footer class="navbar navbar-expand-lg">
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                <a class="nav-item nav-link" href="https://github.com/dionkb">Github</a>
                <a class="nav-item nav-link" href="#">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;