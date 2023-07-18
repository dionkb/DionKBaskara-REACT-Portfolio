import React from 'react';
import Project from '../Project';
import Footer from '../Footer';
import Header from '../Header';
import { projectData } from '../../utils/dataArrays';

function Portfolio() {
    return (
        <>
            <Header />
            <div>
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
            <Footer />
        </>
    ); 
};

export default Portfolio;