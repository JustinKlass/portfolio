import React, {Component} from 'react';
import Nav from './Nav.js'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        // Binds
    }

    render() {
        return (
            <div>
                <img className = 'headerPhoto' src = 'images/side.jpg' alt = 'Side view of a computer'/>
                <Nav />
                <p className = 'name'>Hey, I'm Justin Klass.</p>
                <p className = 'name'>A software developer.</p>
            </div>
        )
    }
}
export default Header