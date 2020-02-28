import React, {Component} from 'react';

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bool: false,
            projects: [
                ['https://spacehunter.surge.sh/', 'images/spaceHunters.png', 'Space Hunters', 'React.js + Node + Express', 'Hunt for a place to Rent'],
                ['http://justinklass.surge.sh/', 'images/justinKlass.png', 'Justinklass.dev', 'React.js', 'My portfolio website'],
                ['http://justin-tetris.surge.sh/', 'images/tetris.png', 'Tetris', 'P5.js + Ruby on Rails', 'My take on a timeless classic'],
                ['https://justinklass.github.io/', 'images/pokemon.png', 'Pokemon Battle', 'Vanilla JS', 'Simulates a Pokemon battle'],
                ['https://justin-space-invaders.herokuapp.com/play/', 'images/spaceInvaders.png', 'Space Invaders', 'P5.js + Node + Express', 'Destroy the aliens before they reach you']
            ]
        }
        // Binds
    }

    render() {
        return (
            <div className = 'portfolio' id = 'portfolio'>
                <h1>PORTFOLIO</h1>
                {
                    this.state.projects.map((project, i) => {
                        return(
                            <div className = 'project' id = {i} key = {project[2]}>
                                <div className = 'explanation'>
                                    <p className = 'projectName'>{project[2]}</p>
                                    <p>{project[4]}</p>
                                    <hr />
                                    <p>{project[3]}</p>
                                </div>
                                <a href = {project[0]} rel="noopener noreferrer" target='_blank'>
                                    <img className = 'portfolioImages' src = {project[1]} alt = {project[2]}/>
                                </a>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
export default Portfolio