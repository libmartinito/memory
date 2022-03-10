import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [images, setImages] = useState([
    './images/the-fool.svg',
    './images/the-magician.svg',
    './images/high-priestess.svg',
    './images/the-empress.svg',
    './images/the-emperor.svg',
    './images/heirophant.svg',
    './images/the-lovers.svg',
    './images/the-chariot.svg',
    './images/strength.svg',
    './images/the-hermit-crab.svg',
    './images/the-wheel.svg',
    './images/justice.svg',
    './images/hanged-man.svg',
    './images/death.svg',
    './images/temperance.svg',
    './images/the-devil.svg',
    './images/the-tower.svg',
    './images/the-star.svg',
    './images/the-moon.svg',
    './images/the-sun.svg',
    './images/judgement.svg',
    './images/the-world.svg'
  ])

  return(
    <div className = 'container'>
      <header className = 'header'>
        <h1 className = 'header__title'>Memory</h1>
        <div className = 'header__info'>
          <div className = 'header__score'>
            <p>Current Score: {score}</p>
            <p>Best Score: {bestScore}</p>
          </div>
          <img src = {'./images/help.svg'} alt = 'help icon' className = 'header__help'></img>
        </div>
      </header>
      <div className = 'body'>
        {images.map((el, i) =>
          <img src = {el} key = {i} className = 'card' alt = {el.substring(9,el.length - 4)}></img>  
        )}
      </div>
    </div>
  )
}

export default App;
