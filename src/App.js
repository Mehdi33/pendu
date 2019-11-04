import React, { Component } from 'react';
import Mask from './Mask'
import Dash from './Dash'

import './App.css';

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const allword = ["NOMBRE","GEANTE","CORAUX","ROULEAU","EJECTER","LIVRETS",
              "DIVISION","LICORNES","FOURNEAU","EMPLETTE","CLEPSYDRE","INDIGENES",
              "ECLATANTE","MATERIAUX","ANAGRAMME","ULTERIEURE","FACTORISER",
              "RACCROCHER","HIPPOPOTAME","SAUTERELLES"]

class App extends Component {

  state = {
    phrase: this.generateWords(),
    clavier: this.generateKeyboard(),
    usedLetters: [],
  }

  generateWords() {
    let oneWord = Math.floor(Math.random()* allword.length)
    oneWord = allword[oneWord]
    return oneWord
  }

  generateKeyboard() {
    const result = []
    const size = 26
    const allLetters = alphabet.split('')
    while (result.length < size) {
      const letter = allLetters.shift()
      result.push(letter)
    }
    return result
  }

  computeDisplay(phrase, usedLetters) {

    return phrase.replace(/\w/g,
      (letter) => (usedLetters.includes(letter) ? letter : '_')
    )
  }

  // Arrow fx for binding
  handleLetterClick = index => {
    
  }

  render() {
    const { phrase, usedLetters, clavier } = this.state
    console.log(clavier)
    return (
      <div className="pendu">
        <div className="mask">
          <Mask
          phrase={this.computeDisplay(phrase, usedLetters)}
          />
        </div>
        <div className="dash">
        {clavier.map((letter, index) => (
          <Dash
          letter={letter}
          index={index}
          onClick={this.handleLetterClick}
          />
        ))}
        </div>
      </div>

    )
  }

}

export default App;
