import React from 'react';
import ImageCharacter from './ImageCharacter';
import './App.css';
import Affiliations from './Affiliations';
import Apprentices from './Apprentices';

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
    getNewCharacter() {
        const randomCharacter = Math.round(Math.random() * 88);
        const url = `https://akabab.github.io/starwars-api/api/all.json${randomCharacter}`;

        console.log(url);
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    image: data.image,
                    name: data.name,
                    gender: data.gender,
                    height: data.height,
                    mass: data.mass,
                    species: data.species,
                    homeworld: data.homeworld,
                    affiliations: data.affiliations,
                    apprentices: data.apprentices,
                    loadedCharacter: true
                })
            })

    }
    getNewCharacter() {
        //console.log("works");
        const randomCharacter = Math.round(Math.random() * 82);
        const url = `https://swapi.dev/api/people/${randomCharacter}/`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    image: data.image,
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
        const allies = this.state.affiliations.map((affiliate, index) => {
            return <Affiliations affiliate={affiliate} key={index} />
        })

        const students = this.state.apprentices.map((apprentice, index) => {
            return <Apprentices apprentice={apprentice} key={index} />
        })

       

        return (

            <div>
                {
                    this.state.loadedCharacter &&
                    <div className="align">
                        <ImageCharacter />
                        <div className="char-info">
                            
                            <h1>Name: {this.state.name}</h1>
                            <p>Gender: {this.state.gender}</p>
                            <p>Height: {this.state.height} cm</p>
                            <p>Mass: {this.state.mass}</p>
                            <p>Species: {this.state.species}</p>
                            <p>Homeworld: {this.state.homeworld}</p>
                            <ul>Affiliations: {allies}</ul>
                            <ul>Apprentices: {students}</ul>
                        </div>



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