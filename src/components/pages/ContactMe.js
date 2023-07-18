import React from 'react';

export default function ContactMe() {
    return (
        <div>
            <br></br>
            <h1>Get In Touch</h1>
            <p> Have any questions? Suggestions? Outright rants?? Feel free to send them my way: </p>
            <form class="contactForm">
                <div class="form-group row">
                    <div class="col-sm-4">
                    <input type="email" class="form-control" id="inputEmail" placeholder="Email" required />
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-4">
                    <input type="text" class="form-control" id="inputName" placeholder="Name" required />
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-4">
                    <textarea rows="10" type="text" class="form-control" id="inputMessage" placeholder="Type message here" required />
                    </div>
                </div>
                <br></br>
                <button class="btn btn-primary" type="submit">Send</button>
            </form>
        </div>
    );
}
