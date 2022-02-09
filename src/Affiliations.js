import React from 'react';
import './App.css';

class Affiliations extends React.Component {

    render() {
        return (

            <li className="list">{this.props.affiliate}</li>

        );
    }

}

export default Affiliations;