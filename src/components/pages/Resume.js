import React from 'react';
import Header from '../Header';

export default function Resume() {
    return (
        <div>
            <Header />
            <div  class="resumeSection">
                <h1>My Resume</h1>
                <a href="src\assets\fakeResume.pdf" download="DionKBaskara - Resume">
                    <button type="button" class="btn btn-primary">Download</button>
                </a>
            </div>
        </div>
    );
}
