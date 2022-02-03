import React from 'react';

class StarWars extends React.Component {
    state = {
        name: null,
        height: null,
        homeworld: null,
        affiliations: []
    }
    getNewCharacter() {
        const randomNumber = Math.round(Math.random() * 88);
        const url = ``

    }



    render() {

        return (
            <div>
                <div>
                    <h1>Name: {this.state.name}</h1>
                    <p>Height: {this.state.height} cm</p>
                    <p>Homeworld: {this.state.homeworld}</p>
                    <p>Affiliations: {this.state.affiliations}</p>
                </div>
                <button className="btn" onClick={this.getNewCharacter}>Get Character</button>
            </div>

        )
    }
}

export default StarWars;