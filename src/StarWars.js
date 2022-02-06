import React from 'react';
import FilmItemRow from './FilmItemRow';

class StarWars extends React.Component {
    state = {
        loadedCharacter: false,
        name: null,
        height: null,
        homeworld: null,
        films: []
        //affiliations: []
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
                    height: data.height,
                    homeworld: data.homeworld,
                    films: data.films,
                    loadedCharacter: true
                })
            })

    }


    render() {
        const movies = this.state.films.map((film, index) => {
            return <FilmItemRow key={index} film={film} />
            // OR return <li>{film}</li>
        })
        return (

            <div>
                {
                    this.state.loadedCharacter &&
                    <div>
                        <h1>Name: {this.state.name}</h1>
                        <p>Height: {this.state.height} cm</p>
                        <p><a href={this.state.homeworld}> Homeworld: </a></p>
                        <ul>
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