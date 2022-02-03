import React from 'react';
import FilmItemRow from './FilmItemRow';

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
        const randomNumber = Math.round(Math.random() * 82)//SO go to swapi.dev/api/people - in browser and  enter you will get 82
        const url = `https://swapi.dev/api/people/${randomNumber}/`//so can get a random charac of 82
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
        const movies = this.state.films.map((film, i) => {
            return <FilmItemRow key={i} url={film} />
        })
        return (
            <div>
                {//so only gets btn when refresh/AND so if state of 
                    this.state.loadedCharacter &&//loaded char is true add div with this new state
                    <div>
                        <h1>{this.state.name}</h1>
                        <p>{this.state.height}</p>
                        <p><a href={this.state.homeworld}>Homeworld</a></p>
                        <ul>
                            {movies}
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

/*OR WITH SKILLCRUSH TAUGHT STATE:

import React from 'react';
import FilmItemRow from './FilmItemRow';

class StarWars extends React.Component {

    state = {
        name: null,
        height: null,
        homeworld: null,
        films: []
    }

    getRandomCharacter = () => {
        const randomCharacter = Math.round(Math.random() * 82);
        const url = `https://swapi.dev/api/people/${randomCharacter}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    name: data.name,
                    height: data.height,
                    homeworld: data.homeworld,
                    films: data.films,
                    loadedCharacter: true
                })
            })
    }


    render() {
        const movies = this.state.films.map((film, i) => {
            return <FilmItemRow key={i} url={film} />
        });
        return (
            <div>
                {
                    this.state.loadedCharacter &&
                    <div className="info">
                        <h1>{this.state.name}</h1>
                        <p>Height: {this.state.height} cm</p>
                        <p><a href={this.state.homeworld}>Homeworld</a></p>
                        <ul className="list">
                            {movies}
                        </ul>
                    </div>
                }


                <button className="btn" onClick={this.getRandomCharacter}>Get Character</button>
            </div>
        );
    }
}

export default StarWars;
*/

