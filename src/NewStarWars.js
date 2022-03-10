import React from 'react'

function NewStarWars() {
  return (
    <div className="main">
      <img className="image" src={'https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg'}></img>
      <div className="info">
        <h3>Name: </h3>
        <p>Height: </p>
        <p>Homeworld: </p>
        <p>Species: </p>
        <ul>Affiliations:</ul>
        <ul>Masters:</ul>
        <ul>Apprentices:</ul>
      </div>
      
      
    </div>
  )
}

export default NewStarWars;