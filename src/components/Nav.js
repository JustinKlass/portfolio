import React, {Component} from 'react';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        // Binds
    }

    render() {
        return (
            <nav className = 'nav'>
                <a href="images/JustinKlassResume.pdf" download>Resume</a>
                <a href="#about">About</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#contact">Contact</a>
            </nav>
        )
    }
}
export default Nav