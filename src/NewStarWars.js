import React from 'react'
import { useState } from 'react';

function NewStarWars() {

  //const [loadedCharacter, setLoadedCharacter] = useState(true);
  return (
    <>
      <div className="main">
        <img className="image" src={'https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg'}></img>
        <div className="text-content">
          <div className="info">
            <h3>Name: </h3>
            <p>Height: </p>
            <p>Homeworld: </p>
            <p>Species: </p>
            <ul>Affiliations:</ul>
            <ul>Masters:</ul>
            <ul>Apprentices:</ul>
          </div>
          <button className="btn">Get Character</button>
        </div>
      </div>
    </>
  )
}

export default NewStarWars;