import React, {Component} from 'react';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        // Binds
    }

    render() {
        return (
            <div className = 'about' id = 'about'>
                <h1>ABOUT ME</h1>
                <p>I'm a Front-End Developer based out of Milford, CT with a hunger to 
                    learn more and further my skills. While I am interested in web
                    development as a whole, I focus on React.
                </p>
                <p>When I'm not developing a web application, I experiment with game development.
                    Video games have been a passion of mine since I was young. 
                </p>
                <p>Feel free to take a look at my projects below.
                </p>
            </div>
        )
    }
}
export default About