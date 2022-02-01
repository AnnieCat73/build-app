import React, { Component } from 'react';
import FilmItemRow from './FilmItemRow';

state = {
    name: null,
    height: null,
    homeworld: null,
    films: []
}

const url = `https://swapi.dev/api/people/`;
fetch(url)
    .then(response => response.json())
    .then(data => {

    })

class StarWars extends React.Component {
    render() {
        const movies = this.state.films.map(film =>
            <FilmItemRow url={film} key={film} />);
        return (
            <div>
                <div className="info">
                    <h1>Name</h1>
                    <p>height</p>
                    <ul className="list">
                        {movies}
                    </ul>
                </div>

                <button className="btn">Get Character</button>
            </div>
        );
    }
}

export default StarWars;