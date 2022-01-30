import React from 'react';

class StarWars extends React.Component {
    getNewCharacter() {
        console.log("Get new character!");
    }
    /*getNewCharacter = () => {

    }*/
    render() {
        return (
            <div>
                <h1>Name</h1>
                <p>Height cm</p>
                <p>Homeworld: URL</p>
                <ul>
                    <li>Films in here</li>
                </ul>
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