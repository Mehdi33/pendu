import React from 'react'
import PropTypes from 'prop-types'
import './Dash.css'

const Dash = ({ letter, index, onClick }) => (
  <div className="letter" onClick={() => onClick(letter)}>
    {letter}
  </div>
)

Dash.propTypes = {
  letter: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Dash
