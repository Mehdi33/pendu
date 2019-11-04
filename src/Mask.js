import React from 'react'
import PropTypes from 'prop-types'
import './Mask.css'

const Mask = ({ guesses }) => <div className="guesses">{guesses}</div>

Mask.propTypes = {
  guesses: PropTypes.number.isRequired,
}

export default Mask
