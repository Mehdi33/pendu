import React from 'react'
import PropTypes from 'prop-types'
import './Mask.css'

const Mask = ({ phrase }) => <div className="phrase">{phrase}</div>

Mask.propTypes = {
  phrase: PropTypes.string,
}

export default Mask
