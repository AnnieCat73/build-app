import React from 'react';
import Affiliations from './Affiliations';

class StarWars extends React.Component {
    state = {
        loadedCharacter: false,
        name: null,
        height: null,
        homeworld: null,
        affiliations: []
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
        const associates = this.state.affiliations.map((affiliate, i) => {
            return <Affiliations key={i} affiliate={affiliate} />
        })
        return (

            <div>
                {
                    this.state.loadedCharacter &&
                    <div>
                        <h1>Name: {this.state.name}</h1>
                        <p>Height: {this.state.height} cm</p>
                        <p>Homeworld: {this.state.homeworld}</p>
                        <ul>
                            {associates}
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