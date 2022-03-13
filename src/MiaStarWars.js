import React from 'react';

class MiaStarWars extends React.Component {
  constructor() {//Initial state
    super()
    this.state = {
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
  }

  /*state = {
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
  }*/

  getRandomCharacter = () => {
    const randomCharacter = Math.round(Math.random() * 88);
    const url = `https://akabab.github.io/starwars-api/api/id/1.json`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          name: data.name,
          height: data.height,
          mass: data.mass,
          eyeColor: data.eyeColor
        })
      })
        
  }

  render() {

    return (
      
      <>
        <div className="main">
          
          <div className="content">
            <img className="image" src={'https://vignette.wikia.nocookie.net/starwars/images/b/b8/Dooku_Headshot.jpg'}/> 
            <div>
              <div className="text-content">
                <h1 style={{color: 'yellow'}}>{this.state.name}</h1>
                <p>{this.state.height} cm</p>
                <p>{this.state.mass} </p>
                <p>{this.state.eyeColor}</p>
                <ul>Homeworld: </ul>
                <ul>Affiliations: </ul>
                <ul>Apprentices: </ul>
                <ul>Masters: </ul>
              </div>

              <button
                className="btn" 
                onClick={() => this.getRandomCharacter()}>Get Character
              </button>
            </div>
            
              

          
          </div>
           
         
          

      </div>

      </>
      
    );
  }
}

export default MiaStarWars;