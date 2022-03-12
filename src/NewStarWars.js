import React from 'react'
import { useState } from 'react';

function NewStarWars() {

  //const [loadedCharacter, setLoadedCharacter] = useState(true);
  const [data, setData] = useState(null);

  const getNewCharacter = () => {
    const randomNumber = Math.round(Math.random()* 88)
    const url = `https://akabab.github.io/starwars-api/api/all.json/${randomNumber}`;
    fetch(url)
      .then(response => response.json())
      .then(setData)
      .catch(console.error)
  }
  if(data)
  return (
    <>
      <div className="main">
        <img className="image" src={data.img} alt={"Character avatar"}/>
        <div className="text-content">
          <div className="info">
            <h3>Name: {data.name}</h3>
            <p>Height: {data.height}</p>
            <p>Homeworld: </p>
            <p>Species: </p>
            <ul>Affiliations:</ul>
            <ul>Masters:</ul>
            <ul>Apprentices:</ul>
          </div>
          <button className="btn" onClick={getNewCharacter}>Get Character</button>
        </div>
      </div>
    </>
  )
}

export default NewStarWars;