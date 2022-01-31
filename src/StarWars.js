import React from 'react';

class StarWars extends React.Component {
    constructor() {//Initial state
        super()
        this.state = {
            loadedCharacter: false, //false by default
            name: null,
            height: null,
            homeworld: null,
            films: []
        }
    }
    getNewCharacter() {
        const url = "https://swapi.dev/api/people/1/"
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({//Updates initial state with new characters
                    name: data.name,//as set it to data above and name in the object
                    height: data.height,
                    homeworld: data.homeworld,
                    films: data.films,
                    loadedCharacter: true  //so get the jsx below when true
                })
            })

    }
    /*
    state = {
        name: null,
        height: null,
        homeworld: null,
        films: []
    }
    getNewCharacter = () => {

    }*/
    render() {
        return (
            <div>
                {//so only gets btn when refresh/AND so if state of 
                    this.state.loadedCharacter &&//loaded char is true add div with this new state
                    <div>
                        <h1>{this.state.name}</h1>
                        <p>{this.state.height}</p>
                        <p>Homeworld: {this.state.homeworld}</p>
                        <ul>
                            <li>{this.state.films}</li>
                        </ul>
                    </div>
                }
                <button
                    type="button"
                    onClick={() => this.getNewCharacter()}
                    className="btn">Randomise Character
                </button>
                {/*<button
                    type="button"
                    onClick={this.getNewCharacter}
                    className="btn">Randomise Character
                </button>*/}
            </div>
        );
    }
}

export default StarWars;