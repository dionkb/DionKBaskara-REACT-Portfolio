import React from 'react';
import Project from '../Project';
import { projectData } from '../../utils/dataArrays';

function Portfolio() {
    return (
        <div>
            <h1>My Work</h1>
            <div className='row justify-content-center'>
                { projectData.map((project, index) => {
                    return (
                        <Project 
                        id={index}
                        key={index}
                        title={project.title}
                        image={project.image}
                        description={project.description}
                        workType={project.workType}
                        variableBtnText={project.variableBtnText}
                        applicationURL={project.applicationURL}
                        repositoryURL={project.repositoryURL}
                        />
                    );
                })}
            </div>
        </div>
    ); 
};

export default Portfolio;