import React from 'react';

class StarWars extends React.Component {
    state = {
        name: null,
        height: null,
        homeworld: null,
        affiliations: []
    }
    getNewCharacter() {
        const randomCharacter = Math.round(Math.random() * 88);
        const url = `https://github.com/akabab/starwars-api/tree/master/api/id/${randomCharacter}`;
        console.log(url);
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    name: data.name,
                    height: data.height,
                    homeworld: data.homeworld,
                    affiliations: data.affiliations
                })
            })

    }



    render() {
        const associates = this.state.affiliations.map((affiliate, i) => {
            return <p>key={i} affiliate={affiliate}</p>
        })
        return (
            <div>
                <div>
                    <h1>Name: {this.state.name}</h1>
                    <p>Height: {this.state.height} cm</p>
                    <p>Homeworld: {this.state.homeworld}</p>
                    <p>Affiliations: {associates}</p>
                </div>
                <button className="btn" onClick={this.getNewCharacter}>Get Character</button>
            </div>

        )
    }
}

export default StarWars;