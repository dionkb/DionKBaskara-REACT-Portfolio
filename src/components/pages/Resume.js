import React from 'react';
import Header from '../Header';
import Proficiency from '../Proficiency';
import { proficiencyData } from '../../utils/dataArrays';

export default function Resume() {
    return (
        <div>
            <Header />
            <div  class="resumeSection">
                <h1>My Resume</h1>
                <a href="https://github.com/dionkb/DionKBaskara-REACT-Portfolio/blob/4e4fa6e74cf43d8876f4945639744fc7c5d24618/src/assets/Resume%20-%2007.18.23.pdf" download="DionKBaskara - Resume">
                    <button type="button" class="btn btn-primary">Download</button>
                </a>
            </div>
            <br />
            <h1>Things I'm Decent At</h1>
            <div className='justify-content-center profsList'>
                { proficiencyData.map((profs, index) => {
                    return (
                        <Proficiency 
                        id={index}
                        key={index}
                        name={profs.name}
                        />
                    );
                })}
            </div>
        </div>
    );
}
