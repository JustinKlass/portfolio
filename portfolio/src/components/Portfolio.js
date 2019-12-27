import React, {Component} from 'react';

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        // Binds
    }

    render() {
        return (
            <div className = 'portfolio' id = 'portfolio'>
                <h1>PORTFOLIO</h1>
                <div>
                    <img class = 'portfolioImages' src = 'images/spaceHunters.png' alt = 'Space Hunters'/>
                    <img class = 'portfolioImages' src = 'images/justinKlass.png' alt = 'Justin Klass Dev Website'/>
                </div>
            </div>
        )
    }
}
export default Portfolio