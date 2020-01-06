import React, {Component} from 'react';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        // Binds
    }

    render() {
        return (
            <div className = 'contact' id = 'contact'>
                <h1>Get In Touch</h1>
                <p>Have any questions? <br /> Send me an e-mail or shoot me a message on Linked-In.</p>
                <a id = 'email' href='mailto:justinklass55@gmail.com'>Email Me</a>
                <p id = 'socialBar'>
                    <a href = 'https://www.linkedin.com/in/justinklass/' target='_blank' rel='noopener noreferrer'><img className = 'contactImages' src = 'images/linkedin.png' alt = 'Linked In'/></a>
                    <a href = 'https://github.com/JustinKlass' target='_blank' rel='noopener noreferrer'><img className = 'contactImages' src = 'images/GitHub/PNG/GitHub-Mark-64px.png' alt = 'Github'/></a>
                </p>
                <h6 className = 'copywrite'>2019 Justin Klass</h6>

            </div>
        )
    }
}
export default Contact