import React from 'react'
import './Input.scss'
import PropTypes from 'prop-types'

const Input = ({ name, type, value, placeholder, onChange }) => {
  return (
    <input
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
}

Input.defaultProps = {
  name: '',
  type: '',
  value: '',
  placeholder: '',
  onChange: () => {},
}

export default Input
