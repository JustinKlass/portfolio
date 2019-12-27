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
                 <a href="#about">About</a>
                 <a href="#portfolio">Portfolio</a>
                 <a href="#portfolio">Side Projects</a>
                 <a href="#contact">Contact</a>
                 {/* <a href="#">jQuery</a> */}
            </nav>
        )
    }
}
export default Nav