// A component that will be used multiple times in the Portfolio section to display each project
import React from 'react';

function Project() {
    return (
        <div>
            <div class="projectCard">
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">CARD TITLE</h5>
                    <p class="card-text">CARD DESCRIPTION</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>  
        </div>
    );
}

export default Project;