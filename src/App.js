import React, { useState } from 'react'
import './App.css'
import { v4 as uuidv4 } from 'uuid'

const EndModal = ({ hideModal, bestScore, isFinished }) => {
  if(isFinished) {
    return(
      <div className = 'end-modal'>
        <div className = 'end-modal__content'>
          <div className = 'end-modal__close-wrapper'>
            <div className = 'end-modal__close' onClick = {hideModal}>X</div>
          </div>
          <div className = 'end-modal__body-one'>"We are all the pieces of what we remember. We hold in ourselves the hopes and fears of those who love us. As long as there is love and memory, there is no true loss."</div>
          <div className = 'end-modal__body-two'>{bestScore}</div>
          <div className = 'end-modal__body-three'>This experience as well as the points are now a part of you. Do with it what you will.</div>
        </div>
      </div>
    )
  } else {
    return(null)
  }
}

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
  const [cards, setCards] = useState([])
  const [isFinished, setIsFinished] = useState(false)

  const incrementScore = () => {
    setScore(score + 1)
  }

  const resetScore = () => {
    setScore(0)
  }

  const updateBestScore = () => {
    setBestScore(score)
  }

  const updateCards = (e) => {
    const newCards = cards.concat(e.target.name)
    setCards(newCards)
  }

  const resetCards = () => {
    setCards([])
  }

  const displayModal = () => {
    setIsFinished(true)
  }

  const hideModal = () => {
    setIsFinished(false)
  }

  const randomizeImages = (arr) => {
    const imageArr = arr
    for(let i = imageArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random()*(i + 1))
      const temp = imageArr[i]
      imageArr[i] = imageArr[j]
      imageArr[j] = temp
    }
    setImages(imageArr)
  }

  const handleClick = (e) => {
    if(cards.includes(e.target.name)) {
      updateBestScore()
      resetScore()
      resetCards()
      displayModal()
    } else {
      incrementScore()
      updateCards(e)
      console.log(cards)
      randomizeImages(images)
    }
  }

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
          <img 
            src = {el} 
            key = {uuidv4()} 
            className = 'card' 
            name = {el.substring(9, el.length - 4)}
            alt = {el.substring(9,el.length - 4)}
            onClick = {handleClick}
          ></img>  
        )}
      </div>
      <EndModal
        hideModal = {hideModal}
        bestScore = {bestScore}
        isFinished = {isFinished}
      />
    </div>
  )
}

export default App;
