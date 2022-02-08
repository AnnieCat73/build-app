import React from 'react';


class StarWars extends React.Component {
    state = {
        loadedCharacter: false,
        image: null,
        name: null,
        gender: null,
        height: null,
        mass: null,
        species: null,
        homeworld: null,
        affiliations: [],
        apprentices: []

    }
    /*getNewCharacter() {
        //const randomCharacter = Math.round(Math.random() * 88);
        const url = `https://akabab.github.io/starwars-api/api/id/1.json`;
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

    }*/
    /*getNewCharacter() {
        //console.log("works");
        const randomCharacter = Math.round(Math.random() * 82);
        const url = `https://swapi.dev/api/people/${randomCharacter}/`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    name: data.name,
                    gender: data.gender,
                    height: data.height,
                    mass: data.height,
                    species: data.species,
                    homeworld: data.homeworld,
                    films: data.films,
                    vehicles: data.vehicles,
                    //starships: data.starships,
                    loadedCharacter: true
                })
            })

    }*/


    render() {

        return (

            <div>
                {
                    this.state.loadedCharacter &&
                    <div>
                        <img src={this.state.image} alt={this.state.image} />
                        <h1>Name: {this.state.name}</h1>
                        <p>Gender: {this.state.gender}</p>
                        <p>Height: {this.state.height} cm</p>
                        <p>Mass: {this.state.mass}</p>
                        <p>Species: {this.state.species}</p>
                        <p><a className="li" href={this.state.homeworld}> Homeworld </a></p>
                        <ul>{this.state.affiliations}</ul>
                        <ul>{this.state.apprentices}</ul>


                    </div>
                }
                <button
                    type="button"
                    className="btn"
                    onClick={() => this.getNewCharacter()}>
                    Get Character
                </button>
            </div >

        )
    }
}

export default StarWars;