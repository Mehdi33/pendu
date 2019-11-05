import React from 'react'
import PropTypes from 'prop-types'


import Button from 'react-bootstrap/Button'


import './Dash.css'

const Dash = ({ letter, feedback, index, onClick }) => (


    <Button className={`letter ${feedback}`} variant="secondary" onClick={() => onClick(letter)}>{letter}</Button>




)

Dash.propTypes = {
  letter: PropTypes.string.isRequired,
  feedback: PropTypes.oneOf([
    'utilisé',
    'inutilisé',
  ]).isRequired,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Dash
