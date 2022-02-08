import React from 'react';
import FilmItemRow from './FilmItemRow';
import VehiclesRow from './VehiclesRow';
import Species from './Species';

class StarWars extends React.Component {
    state = {
        loadedCharacter: false,
        name: null,
        gender: null,
        height: null,
        mass: null,
        species: [],
        homeworld: null,
        films: [],
        vehicles: []
        //starships: []

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
    getNewCharacter() {
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

    }


    render() {
        const movies = this.state.films.map((film, index) => {
            return <FilmItemRow key={index} film={film} />
            // OR return <li>{film}</li>
        })
        const motors = this.state.vehicles.map((vehicle, index) => {
            return <VehiclesRow key={index} vehicle={vehicle} />
        })
        const typeSpecies = this.state.species.map((specie, index) => {
            return <Species key={index} specie={specie} />
        })
        return (

            <div>
                {
                    this.state.loadedCharacter &&
                    <div>
                        <h1>Name: {this.state.name}</h1>
                        <p>Gender: {this.state.gender}</p>
                        <p>Height: {this.state.height} cm</p>
                        <p>Mass: {this.state.mass}</p>
                        <ul className="list">{typeSpecies}</ul>
                        <p><a className="li" href={this.state.homeworld}> Homeworld </a></p>
                        <ul className="list">Vehicles: {motors}</ul>
                        <ul className="list">
                            {movies}
                        </ul>
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