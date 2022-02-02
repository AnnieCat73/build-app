import React from 'react';
import FilmItemRow from './FilmItemRow';




class StarWars extends React.Component {

    state = {
        name: null,
        height: null,
        homeworld: null,
        films: []
    }

    /*const url = `https://swapi.dev/api/people/`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
        this.setState({
            name: data.name,
            height: data.height,
            homeworld: data.homeworld,
            films: data.films
        })
    })*/

    render() {
        const movies = this.state.films.map(film =>
            <FilmItemRow url={film} key={film} />);
        return (
            <div>
                <div className="info">
                    <h1>{this.state.name}</h1>
                    <p>{this.state.height}</p>
                    <p><a href={this.state.homeworld}>Homeworld</a></p>
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