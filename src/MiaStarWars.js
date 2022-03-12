import React from 'react';

class MiaStarWars extends React.Component {

  state = {
    //loadedCharacter: false,
    image: null,
    name: null,
    height: null,
    mass: null,
    eyeColor: null,
    homeworld: null,
    affiliations: [],
    apprentices: [],
    masters: []
  }

  render() {

    return (
      <>
        <div className="main">
          
          <div>
            <img className="image" src={'https://vignette.wikia.nocookie.net/starwars/images/b/b8/Dooku_Headshot.jpg'}/> 
            <div>
              <h1>Name: {this.state.name}</h1>
              <p>Height: </p>
              <p>Mass: </p>
              <p>Eye Colour: </p>
              <ul>Homeworld: </ul>
              <ul>Affiliations: </ul>
              <ul>Apprentices: </ul>
              <ul>Masters: </ul>
            </div>
              

          
          </div>
           
         
          <button
          className="btn" 
          type="button"
          >Get Character

          </button>

      </div>

      </>
      
    );
  }
}

export default MiaStarWars;