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
                <p>I'm a front-end web developer with a hunger to learn more and further my skills. While I am interested
                    in front-end development as a whole, I focus on React.
                </p>
                <p>When I'm not front-end developing, I experiment with game development</p>
            </div>
        )
    }
}
export default About