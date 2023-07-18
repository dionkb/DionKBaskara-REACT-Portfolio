// A component that will be used multiple times in the Portfolio section to display each project
import React from 'react';

function Project(props) {
    return (
            <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 d-flex align-items-stretch">
                <div class="card">
                    <img src={props.image} class="card-img-top" alt="a screenshot of the application"/>
                    <div class="card-body">
                        <h5 class="card-title">{props.title}</h5>
                        <p class="card-text">{props.description}</p>
                        <p class="card-text">Type of project: {props.workType}</p>
                            <a href={props.applicationURL} class="btn btn-primary">{props.variableBtnText}</a>
                            <a href={props.repositoryURL} class="btn btn-primary">Repository</a>
                    </div>
                </div>
            </div>  
    );
}

export default Project;