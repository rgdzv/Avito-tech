import React from 'react'
import './Button.scss'
import PropTypes from 'prop-types'

const Button = ({ children }) => {
  return <button>{children}</button>
}

Button.propTypes = {
  children: PropTypes.string,
}

Button.defaultProps = {
  children: '',
}

export default Button
