import React from 'react';
import './App.css';

class StarShips extends React.Component {

    render() {
        return (
            <li><a href={this.state.starship}>{this.state.starship}</a></li>
        );
    }
}

export default StarShips;