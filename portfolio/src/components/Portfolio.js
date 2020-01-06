import React, {Component} from 'react';

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [
                ['https://spacehunter.surge.sh/', 'images/spaceHunters.png', 'Space Hunters'],
                ['#', 'images/justinKlass.png', 'Justin Klass Dev Website'],
                ['http://justin-tetris.surge.sh/', 'images/tetris.png', 'Tetris'],
                ['https://justinklass.github.io/', 'images/pokemon.png', 'Pokemon Battle Simulator'],
                ['https://justin-space-invaders.herokuapp.com/play/', 'images/spaceInvaders.png', 'Space Invaders']
            ]
        }
        // Binds
    }

    render() {
        return (
            <div className = 'portfolio' id = 'portfolio'>
                <h1>PORTFOLIO</h1>
                <div>
                    <div className = 'project'><a href = {this.state.projects[0][0]} rel="noopener noreferrer" target='_blank'><img className = 'portfolioImages' src = {this.state.projects[0][1]} alt = {this.state.projects[0][2]}/></a></div>
                    <div className = 'project'><a href = {this.state.projects[1][0]} rel="noopener noreferrer" target='_blank'><img className = 'portfolioImages' src = {this.state.projects[1][1]} alt = {this.state.projects[1][2]}/></a></div>
                    <div className = 'project'><a href = {this.state.projects[2][0]} rel="noopener noreferrer" target='_blank'><img className = 'portfolioImages' src = {this.state.projects[2][1]} alt = {this.state.projects[2][2]}/></a></div>
                    <div className = 'project'><a href = {this.state.projects[3][0]} rel="noopener noreferrer" target='_blank'><img className = 'portfolioImages' src = {this.state.projects[3][1]} alt = {this.state.projects[3][2]}/></a></div>
                    <div className = 'project'><a href = {this.state.projects[4][0]} rel="noopener noreferrer" target='_blank'><img className = 'portfolioImages' src = {this.state.projects[4][1]} alt = {this.state.projects[4][2]}/></a></div>
                </div>
            </div>
        )
    }
}
export default Portfolio