import React from 'react';
import './App.css';

class VehiclesRow extends React.Component {

    render() {
        return (
            <li>
                <a href={this.props.vehicle}>{this.props.vehicle}</a>
            </li>
        );
    }
}

export default VehiclesRow;