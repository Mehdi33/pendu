import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from "react-bootstrap/Jumbotron"
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
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
    const { usedLetters } = this.state
    this.setState({ usedLetters: [...usedLetters, index] })

  }

  getFeedbackForLetter(index) {
    const { usedLetters } = this.state

    if (usedLetters.includes(index)) {
      return 'utilisé'
    }

    return 'inutilisé'
  }

  isWon() {
    const { phrase, usedLetters } = this.state
    const mask = this.computeDisplay(phrase, usedLetters)
    let count = 0
    let pos = mask.indexOf("_")
    while (pos !== -1) {
      count++
      pos = mask.indexOf("_", pos + 1)
    }
    return count === 0
  }

  initGame() {

    this.setState({
      phrase: this.generateWords(),
      clavier: this.generateKeyboard(),
      usedLetters: [],
    })
  }

  render() {
    const { phrase, usedLetters, clavier } = this.state
    let isWon = this.isWon()

    return (
      <Container className="p-12">

      <Jumbotron>
      <h1 className="header mask">
      <Mask
      phrase={this.computeDisplay(phrase, usedLetters)}
      />
      </h1>
      </Jumbotron>
      <Row className="justify-content-md-center">

      <ButtonToolbar aria-label="Toolbar with button groups">
      <ButtonGroup aria-label="Basic example">
      <Col>
      {!isWon && clavier.map((letter, index) => (
        <Dash
        letter={letter}
        feedback={this.getFeedbackForLetter(letter)}
        index={index}
        key={index}
        onClick={this.handleLetterClick}
        />
      ))}
      {isWon && (
        <Row className="justify-content-md-center">
        <Col>
        Gagné !!
        </Col>
        <Row className="justify-content-md-center">

        <Col>
        <button className="btn btn-primary form-control" onClick={() => this.initGame()}>Rejouer ?</button>
        </Col>
        </Row>
        </Row>
      )}
      </Col>
      </ButtonGroup>
      </ButtonToolbar>
      </Row>
      </Container>

    )
  }

}

export default App;
