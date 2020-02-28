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
<<<<<<< HEAD
                <a href="images/justinKlassResume.pdf" download>Resume</a>
                <a href="#about">About</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#contact">Contact</a>
=======
                 <a href="#about">About</a>
                 <a href="#portfolio">Portfolio</a>
                 {/* <a href="#portfolio">Side Projects</a> */}
                 <a href="#contact">Contact</a>
                 {/* <a href="#">jQuery</a> */}
>>>>>>> 73a8063f941db62de1908c4ba61ff297d3811cda
            </nav>
        )
    }
}
export default Nav