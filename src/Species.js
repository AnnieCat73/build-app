import React from 'react';
import './App.css';

class Species extends React.Component {

    render() {
        return (
            <li>
                <a className="li" href={this.props.specie}>{this.props.specie}</a>
            </li>
        );
    }
}

export default Species;