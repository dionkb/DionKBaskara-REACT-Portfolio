// A component that will be used multiple times in the Portfolio section to display each project
import React from 'react';

function Project(props) {
    return (
        <div>
            <div class="projectCard">
                <img src={props.image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">{props.description}</p>
                    <p class="card-text">Type of project: {props.workType}</p>
                        <a href={props.deployedURL} class="btn btn-primary">Use App</a>
                        <a href={props.repositoryURL} class="btn btn-primary">Repository</a>
                </div>
            </div>  
        </div>
    );
}

export default Project;