import React from 'react';
import './App.css';

class Apprentices extends React.Component {
    render() {
        return (
            <li className="list">{this.props.apprentice}</li>
        );
    }
}

export default Apprentices;