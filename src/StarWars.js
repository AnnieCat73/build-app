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